"""Test script for Quick Start Presets & Speech Grouper."""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from src.presets import list_presets, get_preset, recommend_preset
from src.speech_grouper import group_words_into_speech_units

def test_speech_grouper():
    sample = [
        {"word": "I", "start": 0.1, "end": 0.3},
        {"word": "really", "start": 0.35, "end": 0.6},
        {"word": "think", "start": 0.65, "end": 0.9},
        {"word": "that,", "start": 0.95, "end": 1.2},
        {"word": "the", "start": 1.65, "end": 1.8},
        {"word": "future", "start": 1.85, "end": 2.2},
        {"word": "is", "start": 2.25, "end": 2.4},
        {"word": "here.", "start": 2.45, "end": 2.8},
    ]
    units = group_words_into_speech_units(sample, max_words_per_line=4, max_lines=2)
    print(f"Speech units generated: {len(units)}")
    for i, u in enumerate(units):
        line_texts = [" ".join(w["word"] for w in ln) for ln in u["lines"]]
        print(f"  Unit {i+1} ({u['start']}s -> {u['end']}s): {' / '.join(line_texts)}")
        assert len(u["lines"]) <= 2
        for ln in u["lines"]:
            assert len(ln) >= 1

def test_presets_catalog():
    presets = list_presets()
    print(f"Total presets in catalog: {len(presets)}")
    assert len(presets) == 15
    for p in presets:
        assert "id" in p and "name" in p and "captions" in p
        assert p["captions"]["fontFamily"]
        assert p["canvas"]["aspectRatio"] == "9:16"
    
    # Test recommendation
    rec = recommend_preset(text="look at this funny joke reaction")
    print(f"Recommended for joke: {rec['id']}")
    assert rec["id"] == "meme_pop"
    
    rec2 = recommend_preset(text="hardcore gym workout motivation")
    print(f"Recommended for gym: {rec2['id']}")
    assert rec2["id"] == "beast_mode"

def test_ass_generation():
    from src.apply_template import _build_ass, load_template
    tpl = load_template("karaoke")
    sample = [
        {"word": "I", "start": 0.1, "end": 0.3},
        {"word": "really", "start": 0.35, "end": 0.6},
        {"word": "think", "start": 0.65, "end": 0.9},
        {"word": "that,", "start": 0.95, "end": 1.2},
        {"word": "the", "start": 1.65, "end": 1.8},
        {"word": "future", "start": 1.85, "end": 2.2},
        {"word": "is", "start": 2.25, "end": 2.4},
        {"word": "here.", "start": 2.45, "end": 2.8},
    ]
    units = group_words_into_speech_units(sample, max_words_per_line=4, max_lines=2)
    ass_text = _build_ass(units, tpl, 1080, 1920, clip_duration=5.0, hook_text="THIS IS A TEST HOOK")
    
    # Verify ASS header and events
    assert "[Script Info]" in ass_text
    assert "PlayResX: 1080" in ass_text
    assert "PlayResY: 1920" in ass_text
    assert "Dialogue:" in ass_text
    assert "Hook" in ass_text
    assert "\\fad(0,250)" in ass_text  # Hook fade out
    assert "\\fscx114\\fscy114" in ass_text  # Word pop animation scale
    print("ASS subtitle generation with karaoke pop passed!")

if __name__ == "__main__":
    test_speech_grouper()
    test_presets_catalog()
    test_ass_generation()
    print("All tests passed successfully!")
