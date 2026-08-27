"""Speech-aware caption grouping and line-breaking engine.

Transforms raw word-level transcript timestamps into natural, speech-aligned
caption chunks designed for vertical short-form video (9:16).

Key rules:
- Respect natural sentence stops (., !, ?) and speech pauses (gaps > threshold).
- Enforce max lines (1 or 2) and target 3-5 words per line.
- Strictly balance multi-line breaks to prevent 1-word orphan lines.
- Preserve precise word-level start/end timestamps for karaoke highlighting.
"""
from __future__ import annotations

import re
from typing import Any, Dict, List, Optional

STRONG_PUNCT = {".", "!", "?", "..."}
MODERATE_PUNCT = {",", ";", ":", "—", "-"}


def _has_terminal_punct(word: str) -> bool:
    """Return True if word ends with strong punctuation."""
    w = word.strip()
    return bool(w and any(w.endswith(p) for p in STRONG_PUNCT))


def _has_pause_punct(word: str) -> bool:
    """Return True if word ends with pause/comma punctuation."""
    w = word.strip()
    return bool(w and any(w.endswith(p) for p in MODERATE_PUNCT))


def _clean_word_text(text: str, case_mode: str = "keep") -> str:
    """Format word text per case requirement while preserving clean spacing."""
    t = text.strip()
    if case_mode == "uppercase":
        return t.upper()
    elif case_mode == "lowercase":
        return t.lower()
    elif case_mode == "sentence":
        # Keep internal capitalization if it's already uppercase or acronym
        return t
    return t


def group_words_into_speech_units(
    words: List[Dict[str, Any]],
    max_words_per_line: int = 4,
    max_lines: int = 2,
    max_pause: float = 0.42,
    case_mode: str = "uppercase"
) -> List[Dict[str, Any]]:
    """Group words into natural speech-rhythm caption chunks.

    Each returned chunk is a dictionary:
    {
        "start": float,
        "end": float,
        "lines": [[word_dict, ...], [word_dict, ...]],
        "text": str,
        "all_words": [word_dict, ...]
    }
    """
    if not words:
        return []

    # Clean words and normalize
    clean_words = []
    for w in words:
        raw_word = str(w.get("word", "")).strip()
        if not raw_word:
            continue
        clean_words.append({
            "word": _clean_word_text(raw_word, case_mode),
            "raw": raw_word,
            "start": float(w.get("start", 0.0)),
            "end": float(w.get("end", 0.0))
        })

    if not clean_words:
        return []

    max_unit_words = max(2, max_words_per_line * max_lines)
    min_unit_words = 2

    # Step 1: Chunk words based on punctuation, silence pauses, and length limits
    chunks: List[List[Dict[str, Any]]] = []
    current_chunk: List[Dict[str, Any]] = []

    for i, w in enumerate(clean_words):
        current_chunk.append(w)
        is_last = (i == len(clean_words) - 1)

        if is_last:
            chunks.append(current_chunk)
            break

        next_w = clean_words[i + 1]
        gap = next_w["start"] - w["end"]
        has_strong = _has_terminal_punct(w["raw"])
        has_moderate = _has_pause_punct(w["raw"])
        count = len(current_chunk)

        # Break conditions:
        # 1. Strong sentence stop (. ! ?) -> always break
        if has_strong:
            chunks.append(current_chunk)
            current_chunk = []
            continue

        # 2. Significant speech pause (silence) -> natural breath pause
        if gap >= max_pause and count >= min_unit_words:
            chunks.append(current_chunk)
            current_chunk = []
            continue

        # 3. Moderate punctuation (, ; —) with reasonable length
        if has_moderate and count >= max_words_per_line:
            chunks.append(current_chunk)
            current_chunk = []
            continue

        # 4. Maximum capacity reached
        if count >= max_unit_words:
            chunks.append(current_chunk)
            current_chunk = []
            continue

    # Step 2: Balance each chunk into lines (strictly prevent 1-word orphan lines)
    speech_units: List[Dict[str, Any]] = []

    for chunk in chunks:
        if not chunk:
            continue

        n = len(chunk)
        lines: List[List[Dict[str, Any]]] = []

        if max_lines <= 1 or n <= max_words_per_line:
            # Single line chunk
            lines = [chunk]
        else:
            # Multi-line (2-line) chunk: balance lines evenly
            # E.g., 4 words -> 2 and 2 (never 3 and 1)
            # E.g., 5 words -> 3 and 2
            # E.g., 6 words -> 3 and 3
            # E.g., 7 words -> 4 and 3
            half = (n + 1) // 2
            
            # Check if there is a natural pause or comma near the middle
            split_idx = half
            for idx in range(1, n - 1):
                if _has_pause_punct(chunk[idx - 1]["raw"]):
                    # If this split doesn't cause a 1-word line, prefer it
                    if 1 < idx < n and (n - idx) > 1:
                        split_idx = idx
                        break

            # Guarantee line 2 has at least 2 words if total words >= 3
            if n >= 3 and split_idx == n - 1:
                split_idx = n - 2
            if split_idx <= 0:
                split_idx = 1

            line1 = chunk[:split_idx]
            line2 = chunk[split_idx:]
            lines = [line1, line2]

        start_time = chunk[0]["start"]
        end_time = chunk[-1]["end"]
        full_text = " ".join(w["word"] for w in chunk)

        speech_units.append({
            "start": round(start_time, 3),
            "end": round(end_time, 3),
            "lines": lines,
            "text": full_text,
            "all_words": chunk
        })

    return speech_units
