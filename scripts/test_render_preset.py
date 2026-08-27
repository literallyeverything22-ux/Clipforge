"""End-to-end rendering verification using Quick Start Presets."""
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

import json
from src import apply_template

def test_render():
    input_clip = ROOT / "data" / "campaigns" / "abu-lahaya-2fdf67" / "output" / "raw" / "C1094_clip_04.mp4"
    transcript_path = ROOT / "data" / "campaigns" / "abu-lahaya-2fdf67" / "transcripts" / "C1094_transcript.json"
    
    if not input_clip.exists() or not transcript_path.exists():
        print("Skipping video render: test files not present")
        return
        
    out_dir = ROOT / "data" / "test_renders"
    out_dir.mkdir(parents=True, exist_ok=True)

    print("Rendering sample clip using Karaoke preset...")
    result = apply_template.apply_template(
        raw_clip_path=input_clip,
        transcript_path=transcript_path,
        clip_start=0.89,
        clip_end=77.72,
        template_name="karaoke",
        output_dir=out_dir,
        out_name="karaoke_rendered_test.mp4",
        hook_text="THE FUTURE IS ALREADY HERE"
    )
    
    assert Path(result).exists(), f"Rendered output not found: {result}"
    size = Path(result).stat().st_size
    assert size > 50000, f"Rendered file too small: {size} bytes"
    print(f"SUCCESS: Rendered video created at {result} ({size:,} bytes)")

if __name__ == "__main__":
    test_render()
