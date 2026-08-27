"""ClipForge Quick Start Preset System.

Defines the 15 short-form (Reels/Shorts/TikTok) presets, schema validation,
loading, normalization, and conversion to ClipForge rendering templates.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List, Optional

from src.config import config

PRESETS_DIR = config.root / "templates" / "presets"

# Category order for UI grouping and intelligent filtering
CATEGORIES = ["all", "dynamic", "clean", "professional", "emotional", "creator"]

# Standard 15 Quick Start Preset Definitions
BUILTIN_PRESETS: List[Dict[str, Any]] = [
    # 1. Creator Default (Recommended #1)
    {
        "id": "creator_default",
        "name": "Creator Default",
        "order": 1,
        "description": "Balanced viral short-form look. The recommended starting point for any video.",
        "category": "clean",
        "recommended": True,
        "bestFor": "All short-form clips, podcasts, quick turnaround videos",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Montserrat",
            "fontWeight": 800,
            "fontSize": 70,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#38BDF8",
            "stroke": {"enabled": True, "width": 5, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.10,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 80,
            "textColor": "#000000",
            "backgroundColor": "#FFFFFF",
            "boxEnabled": True,
            "cornerRadius": 16,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.12
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 2. Clean Cut (Clean Default)
    {
        "id": "clean_cut",
        "name": "Clean Cut",
        "order": 2,
        "description": "Modern social-media native look with crisp contrast on any background.",
        "category": "clean",
        "recommended": True,
        "bestFor": "General-purpose clips, interviews, talking heads",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Poppins-Bold",
            "fontWeight": 800,
            "fontSize": 66,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#22D3EE",
            "stroke": {"enabled": True, "width": 4, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 6, "offsetY": 3},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.08,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 76,
            "textColor": "#FFFFFF",
            "outlineColor": "#000000",
            "outlineWidth": 5,
            "boxEnabled": False,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.12
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 3. Karaoke (High Energy Active Word)
    {
        "id": "karaoke",
        "name": "Karaoke",
        "order": 3,
        "description": "Large word-by-word captions with vibrant active-word glow and pop.",
        "category": "dynamic",
        "recommended": True,
        "bestFor": "Podcasts, high-energy interviews, motivational clips",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Montserrat",
            "fontWeight": 900,
            "fontSize": 72,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#00E676",
            "stroke": {"enabled": True, "width": 5, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 10, "offsetY": 4},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.14,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 82,
            "textColor": "#00E676",
            "outlineColor": "#000000",
            "outlineWidth": 6,
            "boxEnabled": False,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.12
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 4. Podcast Pro
    {
        "id": "podcast_pro",
        "name": "Podcast Pro",
        "order": 4,
        "description": "Studio podcast aesthetic with warm highlights, designed for conversational flow.",
        "category": "professional",
        "recommended": False,
        "bestFor": "Two-person and single-person podcasts, deep discussions",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Kanit",
            "fontWeight": 700,
            "fontSize": 68,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#F59E0B",
            "stroke": {"enabled": True, "width": 5, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.10,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 78,
            "textColor": "#FFFFFF",
            "backgroundColor": "#1E293B",
            "boxEnabled": True,
            "cornerRadius": 12,
            "durationMs": 2000
        },
        "speaker": {
            "layout": "auto",
            "autoReframe": True,
            "headroom": 0.14
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 5. Beast Mode
    {
        "id": "beast_mode",
        "name": "Beast Mode",
        "order": 5,
        "description": "Aggressive, heavyweight typography for viral hook-driven clips.",
        "category": "dynamic",
        "recommended": False,
        "bestFor": "Motivation, business, fitness, controversial opinions",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Archivo Black",
            "fontWeight": 900,
            "fontSize": 74,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1280},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#FFE600",
            "stroke": {"enabled": True, "width": 6, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 10, "offsetY": 5},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.15,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Anton",
            "fontSize": 84,
            "textColor": "#FFE600",
            "outlineColor": "#000000",
            "outlineWidth": 6,
            "boxEnabled": False,
            "durationMs": 2000
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.10
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 6. Grow
    {
        "id": "grow",
        "name": "Grow",
        "order": 6,
        "description": "Modern creator & fintech aesthetic with bold green keyword highlights.",
        "category": "creator",
        "recommended": False,
        "bestFor": "Entrepreneurship, finance, self-improvement, business",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Barlow Condensed",
            "fontWeight": 800,
            "fontSize": 74,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#10B981",
            "stroke": {"enabled": True, "width": 5, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.10,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 80,
            "textColor": "#10B981",
            "outlineColor": "#000000",
            "outlineWidth": 5,
            "boxEnabled": False,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.12
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 7. Minimal
    {
        "id": "minimal",
        "name": "Minimal",
        "order": 7,
        "description": "Clean, understated, and premium typography without distracting effects.",
        "category": "clean",
        "recommended": False,
        "bestFor": "Education, tech walkthroughs, calm interviews, long-form thoughts",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Poppins-Bold",
            "fontWeight": 600,
            "fontSize": 56,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 5,
            "alignment": "center",
            "position": {"x": 540, "y": 1300},
            "safeArea": True,
            "textColor": "#F8FAFC",
            "highlightColor": "#F8FAFC",
            "stroke": {"enabled": True, "width": 1, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 4, "offsetY": 2},
            "highlightMode": "none",
            "animation": "smooth_fade",
            "animationScale": 1.0,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": False,
            "durationMs": 0
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.15
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 8. Storyteller
    {
        "id": "storyteller",
        "name": "Storyteller",
        "order": 8,
        "description": "Cinematic and emotional, with dramatic key phrase emphasis.",
        "category": "emotional",
        "recommended": False,
        "bestFor": "Personal memoirs, storytelling, documentaries, emotional reveals",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Saira Condensed",
            "fontWeight": 700,
            "fontSize": 68,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 5,
            "alignment": "center",
            "position": {"x": 540, "y": 1180},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#F43F5E",
            "stroke": {"enabled": True, "width": 4, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "keyword_emphasis",
            "animation": "smooth_fade",
            "animationScale": 1.05,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Saira Condensed",
            "fontSize": 82,
            "textColor": "#F43F5E",
            "outlineColor": "#000000",
            "outlineWidth": 5,
            "boxEnabled": False,
            "durationMs": 2200
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.15
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 9. Hype
    {
        "id": "hype",
        "name": "Hype",
        "order": 9,
        "description": "Maximum energy with huge bold typography and punchy hot pink pops.",
        "category": "dynamic",
        "recommended": False,
        "bestFor": "Sports, gaming, high-energy entertainment, live reactions",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Anton",
            "fontWeight": 900,
            "fontSize": 80,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 3,
            "alignment": "center",
            "position": {"x": 540, "y": 1250},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#FF0055",
            "stroke": {"enabled": True, "width": 7, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 12, "offsetY": 6},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.16,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Anton",
            "fontSize": 86,
            "textColor": "#FF0055",
            "outlineColor": "#000000",
            "outlineWidth": 6,
            "boxEnabled": False,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.10
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 10. Deep Diver
    {
        "id": "deep_diver",
        "name": "Deep Diver",
        "order": 10,
        "description": "Editorial & documentary style with technical concepts highlighted in cyan.",
        "category": "professional",
        "recommended": False,
        "bestFor": "Science, history, psychology, long-form educational breakdowns",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Lato-Bold",
            "fontWeight": 700,
            "fontSize": 58,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 5,
            "alignment": "center",
            "position": {"x": 540, "y": 1180},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#38BDF8",
            "stroke": {"enabled": True, "width": 3, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 6, "offsetY": 3},
            "highlightMode": "keyword_emphasis",
            "animation": "smooth_fade",
            "animationScale": 1.04,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Barlow Condensed",
            "fontSize": 78,
            "textColor": "#38BDF8",
            "outlineColor": "#000000",
            "outlineWidth": 4,
            "boxEnabled": False,
            "durationMs": 2000
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.14
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 11. Cinematic
    {
        "id": "cinematic",
        "name": "Cinematic",
        "order": 11,
        "description": "Wide visual breathing room, subtle shadows, and movie-grade typography.",
        "category": "emotional",
        "recommended": False,
        "bestFor": "Documentary, filmmaking, visual essays, aesthetic interviews",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Lato-Bold",
            "fontWeight": 700,
            "fontSize": 54,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 5,
            "alignment": "center",
            "position": {"x": 540, "y": 1300},
            "safeArea": True,
            "textColor": "#F8FAFC",
            "highlightColor": "#E2E8F0",
            "stroke": {"enabled": True, "width": 2, "color": "#0F172A"},
            "shadow": {"enabled": True, "blur": 6, "offsetY": 3},
            "highlightMode": "none",
            "animation": "smooth_fade",
            "animationScale": 1.0,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bebas Neue",
            "fontSize": 76,
            "textColor": "#FFFFFF",
            "outlineColor": "#000000",
            "outlineWidth": 3,
            "boxEnabled": False,
            "durationMs": 2000
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.16
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 12. News Flash
    {
        "id": "news_flash",
        "name": "News Flash",
        "order": 12,
        "description": "Fast information delivery with high-contrast numbers and statistics highlighted in red.",
        "category": "professional",
        "recommended": False,
        "bestFor": "News, facts, market updates, current events, stat breakdowns",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Archivo Black",
            "fontWeight": 900,
            "fontSize": 66,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#EF4444",
            "stroke": {"enabled": True, "width": 5, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "keyword_emphasis",
            "animation": "word_pop",
            "animationScale": 1.10,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Archivo Black",
            "fontSize": 80,
            "textColor": "#FFFFFF",
            "backgroundColor": "#EF4444",
            "boxEnabled": True,
            "cornerRadius": 10,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.12
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 13. Baby Steps
    {
        "id": "baby_steps",
        "name": "Baby Steps",
        "order": 13,
        "description": "Friendly, approachable, and warm typography designed for beginner learners.",
        "category": "creator",
        "recommended": False,
        "bestFor": "Beginner tutorials, coaching, self-improvement, educational guides",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Poppins-Bold",
            "fontWeight": 700,
            "fontSize": 64,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 4,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#FBBF24",
            "stroke": {"enabled": True, "width": 4, "color": "#0F172A"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 4},
            "highlightMode": "active_word",
            "animation": "word_pop",
            "animationScale": 1.08,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Poppins-Bold",
            "fontSize": 74,
            "textColor": "#000000",
            "backgroundColor": "#FBBF24",
            "boxEnabled": True,
            "cornerRadius": 16,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.14
        },
        "emoji": {"enabled": True},
        "cta": {"enabled": False}
    },

    # 14. Soft Landing
    {
        "id": "soft_landing",
        "name": "Soft Landing",
        "order": 14,
        "description": "Friendly, calm, and soothing aesthetic with pastel highlights.",
        "category": "emotional",
        "recommended": False,
        "bestFor": "Lifestyle, advice, wellness, health, calm storytelling",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Poppins-Bold",
            "fontWeight": 700,
            "fontSize": 60,
            "case": "sentence",
            "maxLines": 2,
            "maxWordsPerLine": 5,
            "alignment": "center",
            "position": {"x": 540, "y": 1260},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#FBCFE8",
            "stroke": {"enabled": True, "width": 3, "color": "#1E293B"},
            "shadow": {"enabled": True, "blur": 8, "offsetY": 3},
            "highlightMode": "active_word",
            "animation": "smooth_fade",
            "animationScale": 1.05,
            "animationSpeed": "medium"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Poppins-Bold",
            "fontSize": 72,
            "textColor": "#1E293B",
            "backgroundColor": "#FBCFE8",
            "boxEnabled": True,
            "cornerRadius": 14,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.15
        },
        "emoji": {"enabled": False},
        "cta": {"enabled": False}
    },

    # 15. Meme Pop
    {
        "id": "meme_pop",
        "name": "Meme Pop",
        "order": 15,
        "description": "Playful, comic-style lettering with bounce animations for high-energy comedy.",
        "category": "dynamic",
        "recommended": False,
        "bestFor": "Comedy clips, gaming, funny reactions, informal humor",
        "canvas": {
            "aspectRatio": "9:16",
            "width": 1080,
            "height": 1920
        },
        "captions": {
            "enabled": True,
            "fontFamily": "Bangers",
            "fontWeight": 900,
            "fontSize": 76,
            "case": "uppercase",
            "maxLines": 2,
            "maxWordsPerLine": 3,
            "alignment": "center",
            "position": {"x": 540, "y": 1250},
            "safeArea": True,
            "textColor": "#FFFFFF",
            "highlightColor": "#FACC15",
            "stroke": {"enabled": True, "width": 6, "color": "#000000"},
            "shadow": {"enabled": True, "blur": 10, "offsetY": 5},
            "highlightMode": "active_word",
            "animation": "bounce",
            "animationScale": 1.15,
            "animationSpeed": "fast"
        },
        "hook": {
            "enabled": True,
            "style": "top_banner",
            "fontFamily": "Bangers",
            "fontSize": 84,
            "textColor": "#FACC15",
            "outlineColor": "#000000",
            "outlineWidth": 6,
            "boxEnabled": False,
            "durationMs": 1800
        },
        "speaker": {
            "layout": "single",
            "autoReframe": True,
            "headroom": 0.10
        },
        "emoji": {"enabled": True},
        "cta": {"enabled": False}
    }
]


def ensure_preset_files() -> List[Path]:
    """Ensure all 15 preset JSON files exist on disk in templates/presets/."""
    PRESETS_DIR.mkdir(parents=True, exist_ok=True)
    created = []
    for p in BUILTIN_PRESETS:
        target = PRESETS_DIR / f"{p['id']}.json"
        target.write_text(json.dumps(p, indent=2, ensure_ascii=False), encoding="utf-8")
        created.append(target)
    return created


def list_presets(category: Optional[str] = None) -> List[Dict[str, Any]]:
    """Return all available Quick Start presets, optionally filtered by category."""
    ensure_preset_files()
    presets = []
    for p in sorted(PRESETS_DIR.glob("*.json")):
        try:
            data = json.loads(p.read_text(encoding="utf-8"))
            if category and category.lower() != "all":
                if data.get("category", "").lower() != category.lower():
                    continue
            presets.append(data)
        except Exception:
            continue
    presets.sort(key=lambda x: x.get("order", 99))
    return presets


def get_preset(preset_id_or_name: str) -> Optional[Dict[str, Any]]:
    """Retrieve a preset by id or filename."""
    ensure_preset_files()
    clean_id = Path(preset_id_or_name).stem.lower().replace("-", "_")
    target = PRESETS_DIR / f"{clean_id}.json"
    if target.exists():
        try:
            return json.loads(target.read_text(encoding="utf-8"))
        except Exception:
            pass
    for p in BUILTIN_PRESETS:
        if p["id"].lower() == clean_id:
            return p
    return None


def recommend_preset(text: str = "", video_title: str = "") -> Dict[str, Any]:
    """Rule-based preset recommendation based on keywords (Section 15 of spec)."""
    combined = f"{video_title} {text}".lower()

    if any(k in combined for k in ["funny", "laugh", "meme", "joke", "prank", "hilarious", "reaction"]):
        return get_preset("meme_pop") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["gym", "workout", "motivation", "hustle", "beast", "never quit", "discipline"]):
        return get_preset("beast_mode") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["business", "money", "growth", "revenue", "startup", "investing", "crypto"]):
        return get_preset("grow") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["science", "history", "psychology", "deep dive", "research", "technology", "ai"]):
        return get_preset("deep_diver") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["news", "breaking", "market", "inflation", "percent", "stats", "today"]):
        return get_preset("news_flash") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["story", "emotional", "remember", "life changed", "dramatic", "cinema"]):
        return get_preset("storyteller") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["podcast", "interview", "conversation", "discussion", "episode"]):
        return get_preset("podcast_pro") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["calm", "meditation", "wellness", "peace", "mental health", "sleep"]):
        return get_preset("soft_landing") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["guide", "beginner", "tutorial", "step by step", "how to", "basics"]):
        return get_preset("baby_steps") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["hype", "game", "gaming", "fast", "crazy", "insane", "speed"]):
        return get_preset("hype") or BUILTIN_PRESETS[0]
    if any(k in combined for k in ["karaoke", "singing", "music", "lyrics"]):
        return get_preset("karaoke") or BUILTIN_PRESETS[0]

    return get_preset("creator_default") or BUILTIN_PRESETS[0]


def preset_to_clipforge_template(preset: Dict[str, Any]) -> Dict[str, Any]:
    """Translate a Quick Start preset into a full ClipForge template dictionary."""
    caps = preset.get("captions", {})
    hook = preset.get("hook", {})
    cta = preset.get("cta", {})
    speaker = preset.get("speaker", {})

    stroke = caps.get("stroke", {})
    shadow = caps.get("shadow", {})

    font_family = caps.get("fontFamily", "Poppins-Bold")
    if font_family in ("Montserrat", "Montserrat-Bold", "Montserrat-ExtraBold"):
        weight = caps.get("fontWeight", 800)
        font_family = "Montserrat-ExtraBold" if weight >= 800 else "Montserrat-Bold"

    return {
        "name": preset.get("id", "custom"),
        "label": preset.get("name", "Custom Preset"),
        "description": preset.get("description", ""),
        "category": preset.get("category", "dynamic"),
        "output": {
            "aspect_ratio": preset.get("canvas", {}).get("aspectRatio", "9:16"),
            "resolution": f"{preset.get('canvas', {}).get('width', 1080)}x{preset.get('canvas', {}).get('height', 1920)}"
        },
        "crop": {
            "mode": "fill",
            "background": "#000000",
            "follow_speaker": speaker.get("autoReframe", True)
        },
        "effects": {
            "grade": "none",
            "vignette": 0.0
        },
        "safe_top": 220,
        "safe_bottom": 300,
        "hook": {
            "enabled": hook.get("enabled", True),
            "font": hook.get("fontFamily", "Bebas Neue"),
            "size": hook.get("fontSize", 80),
            "color": hook.get("textColor", "#FFFFFF"),
            "outline_color": hook.get("outlineColor", "#000000"),
            "outline_width": hook.get("outlineWidth", 5),
            "box_enabled": hook.get("boxEnabled", False),
            "background_color": hook.get("backgroundColor", "#FFFFFF"),
            "corner_radius": hook.get("cornerRadius", 12),
            "position": "top",
            "duration_ms": hook.get("durationMs", 1800)
        },
        "captions": {
            "enabled": caps.get("enabled", True),
            "font": font_family,
            "size": caps.get("fontSize", 68),
            "case": caps.get("case", "uppercase"),
            "color": caps.get("textColor", "#FFFFFF"),
            "outline_color": stroke.get("color", "#000000") if stroke.get("enabled", True) else "#000000",
            "outline_width": stroke.get("width", 5) if stroke.get("enabled", True) else 0,
            "shadow": shadow.get("offsetY", 4) if shadow.get("enabled", True) else 0,
            "position": "bottom_center",
            "max_lines": caps.get("maxLines", 2),
            "max_words": caps.get("maxWordsPerLine", 4),
            "highlight_mode": caps.get("highlightMode", "active_word"),
            "highlight_color": caps.get("highlightColor", "#38BDF8"),
            "animation": caps.get("animation", "word_pop"),
            "animation_scale": caps.get("animationScale", 1.10),
            "animation_speed": caps.get("animationSpeed", "fast"),
            "highlight_keyword": {
                "enabled": caps.get("highlightMode") in ("active_word", "keyword_emphasis"),
                "color": caps.get("highlightColor", "#38BDF8")
            }
        },
        "cta": {
            "enabled": cta.get("enabled", False),
            "text": cta.get("text", "")
        },
        "speaker": speaker,
        "emoji": preset.get("emoji", {"enabled": False}),
        "music": {"enabled": True, "volume": 0.12}
    }
