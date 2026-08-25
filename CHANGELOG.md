# Changelog

All notable changes to **ClipForge** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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
