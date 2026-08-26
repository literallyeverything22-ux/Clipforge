"""Video Downloader Module for ClipForge (powered by yt-dlp).

Downloads videos from YouTube, Shorts, TikTok, Vimeo, and 1000+ web video platforms,
remuxes them to clean MP4s, and emits real-time progress events.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path
from typing import Callable, Optional, Dict, Any

try:
    import yt_dlp
except ImportError:
    yt_dlp = None


def is_url(value: str) -> bool:
    """Check if a string is a web URL."""
    if not value or not isinstance(value, str):
        return False
    val = value.strip().lower()
    return val.startswith("http://") or val.startswith("https://")


def _sanitize_filename(name: str) -> str:
    """Sanitize title for safe Windows / cross-platform filesystem storage."""
    # Remove illegal Windows characters: < > : " / \ | ? *
    cleaned = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "", name)
    # Replace whitespace sequences with a single space
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    # Avoid empty or overly long filenames
    if not cleaned:
        cleaned = "downloaded_video"
    if len(cleaned) > 100:
        cleaned = cleaned[:100].rstrip()
    return cleaned


def _unique_path(directory: Path, filename: str) -> Path:
    """Generate a non-colliding path by appending a suffix if needed."""
    stem, suffix = Path(filename).stem, Path(filename).suffix or ".mp4"
    candidate = directory / f"{stem}{suffix}"
    n = 1
    while candidate.exists():
        candidate = directory / f"{stem}_{n}{suffix}"
        n += 1
    return candidate


def _format_bytes(num_bytes: Optional[int | float]) -> str:
    """Format bytes into human-readable string."""
    if not num_bytes or num_bytes <= 0:
        return "0 MB"
    for unit in ["B", "KB", "MB", "GB"]:
        if num_bytes < 1024:
            return f"{num_bytes:.1f} {unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f} TB"


def _format_speed(speed_bytes_per_sec: Optional[int | float]) -> str:
    """Format download speed."""
    if not speed_bytes_per_sec or speed_bytes_per_sec <= 0:
        return ""
    return f"{_format_bytes(speed_bytes_per_sec)}/s"


def _format_eta(seconds: Optional[int | float]) -> str:
    """Format seconds into MM:SS or HH:MM:SS."""
    if seconds is None or seconds < 0:
        return ""
    sec = int(seconds)
    m, s = divmod(sec, 60)
    h, m = divmod(m, 60)
    if h > 0:
        return f"{h:02d}:{m:02d}:{s:02d}"
    return f"{m:02d}:{s:02d}"


def get_video_info(url: str) -> Dict[str, Any]:
    """Extract metadata (title, duration, thumbnail) without downloading."""
    if not yt_dlp:
        raise RuntimeError("yt-dlp is not installed. Please run: pip install yt-dlp")

    ydl_opts = {
        "quiet": True,
        "no_warnings": True,
        "extract_flat": "in_playlist",
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=False)
        return {
            "id": info.get("id", ""),
            "title": info.get("title", "Untitled Video"),
            "duration": info.get("duration", 0),
            "thumbnail": info.get("thumbnail", ""),
            "channel": info.get("uploader") or info.get("channel", ""),
        }


def download_video(
    url: str,
    output_dir: Path | str,
    progress_callback: Optional[Callable[[Dict[str, Any]], None]] = None,
) -> Dict[str, Any]:
    """Download a video URL to output_dir with progress tracking and remuxing to MP4.

    Args:
        url: Direct video URL (YouTube, Vimeo, Twitter, etc.)
        output_dir: Destination folder (Path or string)
        progress_callback: Optional callable receiving a progress dict:
            {
                "status": "downloading" | "processing" | "finished",
                "percent": float,
                "downloaded_bytes": int,
                "total_bytes": int,
                "speed": str,
                "eta": str,
                "title": str
            }

    Returns:
        dict with keys: 'path', 'filename', 'video_id', 'title', 'duration', 'size'
    """
    if not yt_dlp:
        raise RuntimeError("yt-dlp is not installed. Please run: pip install yt-dlp")

    out_path = Path(output_dir).resolve()
    out_path.mkdir(parents=True, exist_ok=True)

    state: Dict[str, Any] = {
        "final_file": None,
        "title": "Video",
        "duration": 0,
        "total_bytes": 0,
    }

    def _progress_hook(d: Dict[str, Any]) -> None:
        status = d.get("status", "")
        if status == "downloading":
            total = d.get("total_bytes") or d.get("total_bytes_estimate") or 0
            downloaded = d.get("downloaded_bytes") or 0
            pct = 0.0
            if total > 0:
                pct = round((downloaded / total) * 100.0, 1)
            elif d.get("_percent_str"):
                try:
                    pct = float(d["_percent_str"].replace("%", "").strip())
                except Exception:
                    pct = 0.0

            speed_str = _format_speed(d.get("speed"))
            eta_str = _format_eta(d.get("eta"))
            info_dict = d.get("info_dict") or {}
            title = info_dict.get("title") or state["title"]
            state["title"] = title

            if progress_callback:
                progress_callback({
                    "status": "downloading",
                    "percent": pct,
                    "downloaded_bytes": downloaded,
                    "total_bytes": total,
                    "speed": speed_str,
                    "eta": eta_str,
                    "title": title,
                })

        elif status == "finished":
            filename = d.get("filename")
            if filename:
                state["final_file"] = Path(filename)
            if progress_callback:
                progress_callback({
                    "status": "processing",
                    "percent": 100.0,
                    "title": state["title"],
                    "message": "Finalizing MP4 remuxing...",
                })

    outtmpl = str(out_path / "%(title).100B [%(id)s].%(ext)s")

    ydl_opts = {
        "format": "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best",
        "outtmpl": outtmpl,
        "merge_output_format": "mp4",
        "progress_hooks": [_progress_hook],
        "quiet": True,
        "no_warnings": True,
        "noplaylist": True,
        "overwrites": True,
        "retries": 5,
        "fragment_retries": 5,
    }

    print(f"[downloader] Starting download for: {url}", flush=True)

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        title = info.get("title", "downloaded_video")
        duration = float(info.get("duration") or 0)
        state["title"] = title
        state["duration"] = duration

        dest_candidate = None
        if state["final_file"] and state["final_file"].exists():
            dest_candidate = state["final_file"]
        elif "requested_downloads" in info and info["requested_downloads"]:
            req_file = info["requested_downloads"][0].get("filepath")
            if req_file and Path(req_file).exists():
                dest_candidate = Path(req_file)
        elif "_filename" in info:
            req_file = info.get("_filename")
            mp4_cand = Path(req_file).with_suffix(".mp4")
            if mp4_cand.exists():
                dest_candidate = mp4_cand
            elif req_file and Path(req_file).exists():
                dest_candidate = Path(req_file)

        if not dest_candidate or not dest_candidate.exists():
            for f in out_path.iterdir():
                if f.is_file() and f.suffix.lower() == ".mp4" and info.get("id", "") in f.name:
                    dest_candidate = f
                    break

        if not dest_candidate or not dest_candidate.exists():
            raise RuntimeError(f"Download succeeded but output file could not be located in {out_path}")

        safe_stem = _sanitize_filename(title)
        final_dest = _unique_path(out_path, f"{safe_stem}.mp4")
        if dest_candidate.resolve() != final_dest.resolve():
            dest_candidate.rename(final_dest)
        else:
            final_dest = dest_candidate

        file_size = final_dest.stat().st_size
        print(f"[downloader] Successfully downloaded: {final_dest.name} ({_format_bytes(file_size)})", flush=True)

        if progress_callback:
            progress_callback({
                "status": "finished",
                "percent": 100.0,
                "title": title,
                "filename": final_dest.name,
                "size": file_size,
            })

        return {
            "path": str(final_dest),
            "filename": final_dest.name,
            "video_id": final_dest.stem,
            "title": title,
            "duration": duration,
            "size": file_size,
        }
