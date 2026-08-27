# Changelog

All notable changes to **ClipForge** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-08-28

### Added ✨
- **15 Authentic Short-Form Presets**: Integrated 15 viral typography & motion presets (`Creator Default`, `Karaoke`, `Beast Mode`, `Podcast Pro`, `Clean Cut`, `Grow`, `Storyteller`, `Hype`, etc.) with speech-aware word-level line breaking, active-word pop scaling, and ASS subtitle rendering.
- **Minimal Quick Start Canvas Studio UI**: A streamlined, preview-first 2-column workspace with a dominating ~40-50% enlarged 9:16 video snapshot preview (`428 × 760px`) for crystal-clear text readability.
- **Live Animated Preview Cards**: High-contrast preset preview cards with ambient radial glow, authentic Google Fonts typography, and real-time word-pop simulation.
- **3×3 Intuitive Position Dial Grid**: Fast visual 1-click text placement across 9 screen zones (`↖`, `↑`, `↗`, `←`, `•`, `→`, `↙`, `↓`, `↘`) with top/center/bottom alignment shortcuts.
- **Compact Customization Accordions**: Replaced cluttered inspector panels with 4 collapsible focus accordions (`Captions`, `Position`, `Hook`, `More`) allowing only one section open at a time.
- **Platform Safe Zone Auto-Fix**: Non-intrusive safe zone guidance with floating auto-fix warning pill to snap drifting text safely inside TikTok/Reels margins.
- **Full-Screen 15-Preset Library Modal**: Browsable preset catalog with category filter pills (`All`, `Clean`, `Dynamic`, `Pro`, `Emotional`, `Creator`) and 1-click apply.
- **Secondary Tools Dropdown (`⋯`)**: Neatly housed reset, style duplication, and frame refresh tools inside the top bar.

### Changed ⚡
- **Expanded Video Canvas Viewport**: Removed the permanent left sidebar to maximize video canvas area, providing crisp, legible captions and face framing without squinting.
- **Direct Google Fonts Integration**: Loaded creator font families (`Montserrat`, `Poppins`, `Kanit`, `Archivo Black`, `Anton`, `Bangers`, `Bebas Neue`, etc.) directly in the studio head for true-to-life typography preview.
- **Streamlined Action Bar**: Reduced bottom buttons to two clear actions: `[ Apply to this clip ]` and `[ Apply to all clips ]`.

### Fixed 🐛
- **Preset Modal Z-Index**: Fixed layer depth stacking so the 15-preset library modal displays on top of the studio workspace (`z-index: 1500`).
- **Preview Text Legibility**: Removed destructive inline text strokes that choked out small fonts, replacing them with sharp high-contrast drop-shadows.
- **Preset Title Overflow**: Adjusted card title flex layout to prevent titles like `Podcast Pro` from truncating with ellipsis.

## [1.0.0] - 2026-08-25

### Added ✨
- **CUDA GPU Acceleration on RTX 50-Series**: Automated dynamic preloading of NVIDIA cuBLAS, cuDNN, and CUDA runtime DLLs via `ctypes.CDLL` with graceful CPU fallback.
- **Direct Audio I/O for Silero VAD**: Custom 16kHz PCM WAV reader bypassing `torchaudio`/`torchcodec` dependencies for flawless silence detection.
- **Unlimited Highlight JSON Ingestion**: Ingests 100% of candidate clips from uploaded JSON files without 10-clip truncation or minimum score dropping.
- **Centralized Text Layout Engine**: Precise sub-pixel text measurement, line wrapping (`\N`), collision avoidance, and safe-zone anchoring.
- **Full Screen (9:16) Template**: Solid black text with 5px crisp white outline on every character, top safe-zone hook positioning, and bottom captions.
- **1-Click Launchers**: Double-clickable `run.bat` and `start_clipforge.bat` with automated port management, dependency verification, and browser auto-launch.
- **End-to-End Documentation**: Detailed `guide.md` and complete project `README.md`.

### Changed ⚡
- **Top Safe Zone Hook Positioning**: Lifted top hook anchor to the top 4% margin (`y = 4%`) to keep titles completely clear of speaker head and hair.
- **Repository Hygiene**: Organized documentation into `docs/` and structured `.gitignore` to prevent media and cache leaks.

### Fixed 🐛
- **Whisper DLL Loader Error**: Fixed `RuntimeError: Library cublas64_12.dll is not found or cannot be loaded` on Windows systems.
- **Silero VAD Audio Exception**: Fixed `torchaudio requires torchcodec` runtime crashes during silence detection.
- **ASS Subtitle Multi-line Misalignment**: Fixed hook text and bounding box wrapping synchronization in libass renderer.
