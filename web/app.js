/* ClipForge Web UI — AI Video Repurposing Studio */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function svgIcon(name, cls) {
    return `<svg class="icon${cls ? " " + cls : ""}" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
  }

  const els = {
    nav: $("#nav"),
    navCampaign: $("#navCampaign"),
    sideNav: $("#sideNav"),
    workspace: $("#workspace"),
    modelChip: $("#modelChip"),
    serverStatus: $("#serverStatus"),
    serverStatusText: $("#serverStatusText"),
    breadcrumbNav: $("#breadcrumbNav"),
    bcSep1: $("#bcSep1"),
    bcCampaign: $("#bcCampaign"),
    bcSep2: $("#bcSep2"),
    bcCurrent: $("#bcCurrent"),
    tabReviewBadge: $("#tabReviewBadge"),
    tabExportBadge: $("#tabExportBadge"),
    statTotalCampaigns: $("#statTotalCampaigns"),
    statTotalVideos: $("#statTotalVideos"),
    statTotalCandidates: $("#statTotalCandidates"),
    statTotalExports: $("#statTotalExports"),
    campSearchInput: $("#campSearchInput"),
    campaignGrid: $("#campaignGrid"),
    newCampaignForm: $("#newCampaignForm"),
    campName: $("#campName"),
    campBriefInput: $("#campBriefInput"),
    briefAttachLabel: $("#briefAttachLabel"),
    briefAttach: $("#briefAttach"),
    ovRulesEmpty: $("#ovRulesEmpty"),
    ovRulesBody: $("#ovRulesBody"),
    ovRulesInput: $("#ovRulesInput"),
    ovRulesViewFull: $("#ovRulesViewFull"),
    ovRulesUploadLbl: $("#ovRulesUploadLbl"),
    campDetailName: $("#campDetailName"),
    campDetailMeta: $("#campDetailMeta"),
    funnelStrip: $("#funnelStrip"),
    overviewEmpty: $("#overviewEmpty"),
    sourcesCounter: $("#sourcesCounter"),
    sourceBoard: $("#sourceBoard"),
    uploadBtn: $("#uploadBtn"),
    uploadDropTitle: $("#uploadDropTitle"),
    fileInput: $("#fileInput"),
    uploadProgress: $("#uploadProgress"),
    uploadFill: $("#uploadFill"),
    uploadPct: $("#uploadPct"),
    urlInput: $("#urlInput"),
    btnImportUrl: $("#btnImportUrl"),
    urlProgress: $("#urlProgress"),
    urlProgressTitle: $("#urlProgressTitle"),
    urlProgressSpeed: $("#urlProgressSpeed"),
    urlProgressPct: $("#urlProgressPct"),
    urlProgressFill: $("#urlProgressFill"),
    minScore: $("#minScore"),
    maxClips: $("#maxClips"),
    reviewCount: $("#reviewCount"),
    reviewList: $("#reviewList"),
    reviewEmpty: $("#reviewEmpty"),
    reviewHint: $("#reviewHint"),
    btnApproveAll: $("#btnApproveAll"),
    btnSaveReview: $("#btnSaveReview"),
    templateSelect: $("#templateSelect"),
    goldenStyles: $("#goldenStyles"),
    templateDesc: $("#templateDesc"),
    musicEnabled: $("#musicEnabled"),
    musicVolume: $("#musicVolume"),
    musicTrack: $("#musicTrack"),
    musicInput: $("#musicInput"),
    outputCount: $("#outputCount"),
    outputList: $("#outputList"),
    btnOpenFolder: $("#btnOpenFolder"),
    rulesEmpty: $("#rulesEmpty"),
    rulesFilled: $("#rulesFilled"),
    rulesSections: $("#rulesSections"),
    rulesInput: $("#rulesInput"),
    btnViewFullRules: $("#btnViewFullRules"),
    styleVideoSelect: $("#styleVideoSelect"),
    framesMode: $("#framesMode"),
    framesNum: $("#framesNum"),
    framesGrid: $("#framesGrid"),
    btnExtractFrames: $("#btnExtractFrames"),
    btnAnalyzeStyle: $("#btnAnalyzeStyle"),
    styleReport: $("#styleReport"),
    styleSheets: $("#styleSheets"),
    styleState: $("#styleState"),
    runbar: $("#runbar"),
    stageName: $("#stageName"),
    runMsg: $("#runMsg"),
    railFill: $("#railFill"),
    percent: $("#percent"),
    btnCancel: $("#btnCancel"),
    logToggle: $("#logToggle"),
    logConsole: $("#logConsole"),
    toast: $("#toast"),
    bellBtn: $("#bellBtn"),
    bellBadge: $("#bellBadge"),
    bellDropdown: $("#bellDropdown"),
    bellList: $("#bellList"),
    bellClear: $("#bellClear"),
    transcriptModal: $("#transcriptModal"),
    transcriptVideoName: $("#transcriptVideoName"),
    transcriptBody: $("#transcriptBody"),
    transcriptClose: $("#transcriptClose"),
    transcriptFind: $("#transcriptFind"),
    transcriptCopy: $("#transcriptCopy"),
    btnDeleteCampaign: $("#btnDeleteCampaign"),
    highlightToggle: $("#highlightToggle"),
    highlightToggleHint: $("#highlightToggleHint"),
    styleBrief: $("#styleBrief"),
    exploreVideoSelect: $("#exploreVideoSelect"),
    exploreVariants: $("#exploreVariants"),
    btnExploreStyles: $("#btnExploreStyles"),
    exploreResults: $("#exploreResults"),
    editInstructions: $("#editInstructions"),
    exportConfigModal: $("#exportConfigModal"),
    exportConfigVideo: $("#exportConfigVideo"),
    exportConfigTemplate: $("#exportConfigTemplate"),
    exportConfigInstructions: $("#exportConfigInstructions"),
    exportConfigHint: $("#exportConfigHint"),
    exportConfigCancel: $("#exportConfigCancel"),
    exportConfigStart: $("#exportConfigStart"),
    settingsExportSelect: $("#settingsExportSelect"),
    btnSettingsExport: $("#btnSettingsExport"),
    settingsExportHint: $("#settingsExportHint"),
    telegramStatus: $("#telegramStatus"),
    btnOpenCampaignCanvas: $("#btnOpenCampaignCanvas"),
    visualCanvasModal: $("#visualCanvasModal"),
    canvasClipTitle: $("#canvasClipTitle"),
    canvasSafeToggle: $("#canvasSafeToggle"),
    canvasClose: $("#canvasClose"),
    canvasContainer: $("#canvasContainer"),
    canvasBgImg: $("#canvasBgImg"),
    canvasBgFallback: $("#canvasBgFallback"),
    canvasSafeGuides: $("#canvasSafeGuides"),
    canvasHookBox: $("#canvasHookBox"),
    canvasHookText: $("#canvasHookText"),
    canvasHookPosBadge: $("#canvasHookPosBadge"),
    canvasCaptionBox: $("#canvasCaptionBox"),
    canvasCaptionText: $("#canvasCaptionText"),
    canvasCaptionPosBadge: $("#canvasCaptionPosBadge"),
    canvasCtaBox: $("#canvasCtaBox"),
    canvasCtaText: $("#canvasCtaText"),
    canvasCtaPosBadge: $("#canvasCtaPosBadge"),
    canvasRefreshFrame: $("#canvasRefreshFrame"),
    stylePresetsGrid: $("#stylePresetsGrid"),
    canvasFontSelect: $("#canvasFontSelect"),
    canvasTextColor: $("#canvasTextColor"),
    canvasOutlineColor: $("#canvasOutlineColor"),
    canvasHighlightColor: $("#canvasHighlightColor"),
    canvasHookSizeSlider: $("#canvasHookSizeSlider"),
    canvasHookSizeVal: $("#canvasHookSizeVal"),
    canvasCaptionSizeSlider: $("#canvasCaptionSizeSlider"),
    canvasCaptionSizeVal: $("#canvasCaptionSizeVal"),
    canvasOutlineWidthSlider: $("#canvasOutlineWidthSlider"),
    canvasOutlineWidthVal: $("#canvasOutlineWidthVal"),
    canvasBoxBgToggle: $("#canvasBoxBgToggle"),
    canvasBoxBgColor: $("#canvasBoxBgColor"),
    canvasHookYSlider: $("#canvasHookYSlider"),
    canvasHookYVal: $("#canvasHookYVal"),
    canvasCaptionYSlider: $("#canvasCaptionYSlider"),
    canvasCaptionYVal: $("#canvasCaptionYVal"),
    canvasCtaToggle: $("#canvasCtaToggle"),
    canvasCtaOptions: $("#canvasCtaOptions"),
    canvasCtaTextInput: $("#canvasCtaTextInput"),
    canvasCtaYSlider: $("#canvasCtaYSlider"),
    canvasCtaYVal: $("#canvasCtaYVal"),
    canvasResetBtn: $("#canvasResetBtn"),
    canvasApplyCampaignBtn: $("#canvasApplyCampaignBtn"),
    canvasApplyClipBtn: $("#canvasApplyClipBtn"),
    canvasSingleLineToggle: $("#canvasSingleLineToggle"),
    canvasHookTextInput: $("#canvasHookTextInput"),
    hookStepMinus: $("#hookStepMinus"),
    hookStepPlus: $("#hookStepPlus"),
    hookStepperVal: $("#hookStepperVal"),
    capStepMinus: $("#capStepMinus"),
    capStepPlus: $("#capStepPlus"),
    captionStepperVal: $("#captionStepperVal"),
    ctaStepMinus: $("#ctaStepMinus"),
    ctaStepPlus: $("#ctaStepPlus"),
    ctaStepperVal: $("#ctaStepperVal"),
    quickHookMinus: $("#quickHookMinus"),
    quickHookPlus: $("#quickHookPlus"),
    quickHookVal: $("#quickHookVal"),
    quickCapMinus: $("#quickCapMinus"),
    quickCapPlus: $("#quickCapPlus"),
    quickCapVal: $("#quickCapVal"),
  };

  const LABELS = {
    transcribe: "Transcribing audio (Whisper)",
    vad: "Tightening silence & pauses",
    clean: "Fixing transcript typos",
    context: "Building context vectors",
    select: "Finding viral moments (AI)",
    awaiting: "Waiting for highlight picks",
    cut: "Cutting lossless segments",
    render: "Rendering 9:16 vertical video",
    frames: "Extracting reference frames",
    "explore-cut": "Cutting probe variants",
    "explore-variants": "Generating style variants",
    "explore-render": "Rendering style previews",
    "explore-judge": "AI Vision Judge scoring",
    start: "Initializing…",
    done: "Processing complete",
  };

  const WORKSPACE_PAGES = ["overview", "review", "exports", "settings"];
  const ALL_PAGES = ["dashboard"].concat(WORKSPACE_PAGES);

  const FUNNEL_STEPS = [
    { key: "sources", label: "1. Sources", page: "overview" },
    { key: "transcribed", label: "2. Transcribed", page: "overview" },
    { key: "analysed", label: "3. Analysed", page: "overview" },
    { key: "candidates", label: "4. Candidates", page: "review" },
    { key: "approved", label: "5. Approved", page: "review" },
    { key: "exported", label: "6. Exported", page: "exports" },
  ];

  const STAGE_LABELS = {
    none: "Empty",
    uploaded: "Uploaded",
    transcribed: "Transcribed",
    analysing: "Transcribing…",
    awaiting: "Awaiting highlights",
    analysed: "Analysed",
    has_approved: "Approved",
    exported: "Exported",
  };

  let state = null;
  let campaigns = [];
  let currentCampaignId = null;
  let currentCampaign = null;
  let sources = [];
  let candidateGroups = [];
  let exportGroups = [];
  let dirty = false;
  let currentRun = null;
  let runningVideoId = null;
  let pollTimer = null;
  let pollFailures = 0;
  let shownLogs = 0;
  const openPreviews = new Map();
  let settingsTimer = null;
  let hoveredClip = null;

  // --- Notifications & Activity Bus --------------------------------------- //
  let notifications = [];
  let lastEventSeq = 0;
  let eventPolling = false;

  function ensureNotifyPermission() {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }

  function desktopNotify(title, body) {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    try {
      const n = new Notification(title, { body: body || "", tag: "clipforge" });
      n.onclick = () => { window.focus(); n.close(); };
      setTimeout(() => n.close(), 6000);
    } catch (e) { /* ignore */ }
  }

  function addNotification(kind, title, body, campaignId, icon) {
    notifications.unshift({
      kind, title: title, body: body || "",
      campaignId: campaignId || null,
      icon: icon || "bell",
      ts: Date.now(),
    });
    if (notifications.length > 60) notifications.length = 60;
    renderNotifications();
  }

  function renderNotifications() {
    if (!els.bellBadge || !els.bellList) return;
    const unread = notifications.filter((n) => !n.read).length;
    els.bellBadge.textContent = unread;
    els.bellBadge.hidden = unread === 0;
    els.bellList.innerHTML = "";
    if (!notifications.length) {
      els.bellList.innerHTML = `
        <div class="empty-notif">
          ${svgIcon("bell", "empty-icon")}
          <p>No notifications yet</p>
        </div>`;
      return;
    }
    for (const n of notifications) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "bell-item" + (n.read ? "" : " unread");
      item.innerHTML =
        `<span class="bell-icon">${svgIcon(n.icon || "bell")}</span>` +
        `<span class="bell-body">` +
        `<span class="bell-title">${escapeHtml(n.title)}</span>` +
        `<span class="bell-text">${escapeHtml(n.body || "")}</span>` +
        `<span class="bell-time">${escapeHtml(relTime(new Date(n.ts).toISOString()))}</span>` +
        `</span>`;
      item.addEventListener("click", () => {
        n.read = true;
        renderNotifications();
        if (n.campaignId && n.campaignId !== currentCampaignId) go("review", n.campaignId);
        else if (n.campaignId) go("review");
      });
      els.bellList.appendChild(item);
    }
  }

  function notifyTranscriptSent(videoId, recipients, ok) {
    const title = ok ? "Transcript Emailed" : "Transcript Email Failed";
    const list = (recipients || []).join(", ");
    const body = ok ? `Sent to ${list}. Waiting for highlight picks for “${videoId}”.`
                    : `Could not email transcript for “${videoId}”. Check email configuration.`;
    toast(title, ok ? "ok" : "error");
    addNotification(ok ? "sent" : "error", title, body, currentCampaignId, "file-text");
    desktopNotify("ClipForge — " + title, body);
  }

  function notifyHighlightsReceived(videoId, count) {
    const title = "Highlights Arrived";
    const body = `${count} highlight moment${count === 1 ? "" : "s"} generated for “${videoId}”. Ready for review!`;
    toast(title + " — " + videoId, "ok");
    addNotification("received", title, body, currentCampaignId, "sparkles");
    desktopNotify("ClipForge — " + title, body);
    refreshCampaignData().catch(() => {});
  }

  async function pollEvents() {
    if (eventPolling || !els.serverStatus) return;
    eventPolling = true;
    try {
      const r = await fetch("/api/events?since=" + lastEventSeq + "&timeout=25");
      if (r.ok) {
        const data = await r.json();
        for (const ev of data.events || []) {
          lastEventSeq = ev.seq;
          handleEvent(ev);
        }
      }
    } catch (e) { /* backend offline; retry on next tick */ }
    eventPolling = false;
    setTimeout(pollEvents, 400);
  }

  const EVENT_UI = {
    run_started:      { icon: "film", label: (d) => `${d.mode || "Task"} Started`,
                        body: (d) => `“${d.video || d.video_id || "?"}” is processing.` },
    run_ok:           { icon: "check", label: (d) => `${d.mode || "Task"} Completed`,
                        body: (d) => `“${d.video_id || "?"}” finished successfully.` },
    run_error:        { icon: "trash", label: (d) => `${d.mode || "Task"} Failed`,
                        body: (d) => d.error ? String(d.error).slice(-160) : "Check the run console log." },
    run_cancelled:    { icon: "close", label: (d) => `${d.mode || "Task"} Cancelled`,
                        body: (d) => `“${d.video_id || "?"}” was stopped.` },
    export_done:      { icon: "download", label: () => "Export Finished",
                        body: (d) => `${d.clip_count || 0} clip(s) rendered for “${d.video_id || "?"}”.` },
    explore_done:     { icon: "sparkles", label: () => "Style Exploration Complete",
                        body: (d) => d.winner
                          ? `Winning look: ${d.winner}${d.total != null ? ` (Score ${Number(d.total).toFixed(1)})` : ""}`
                          : "Exploration completed." },
    upload_done:      { icon: "upload", label: () => "Source Video Added",
                        body: (d) => d.name || "" },
    download_started: { icon: "download", label: () => "Downloading Video",
                        body: (d) => `Fetching from ${d.url || "web link"}...` },
    download_error:   { icon: "trash", label: () => "Download Failed",
                        body: (d) => d.error || "Could not download video." },
    campaign_created: { icon: "folder", label: () => "Campaign Bay Created",
                        body: (d) => d.name || d.id || "" },
  };

  function notifyRunEvent(kind, d) {
    const ui = EVENT_UI[kind];
    if (!ui) return;
    const title = ui.label(d);
    const body = ui.body(d);
    const level = kind === "run_error" || kind === "download_error" ? "error" : (kind === "run_started" || kind === "download_started" || kind === "run_cancelled" ? "info" : "ok");
    toast(title, level);
    addNotification(kind, title, body, currentCampaignId, ui.icon);
    desktopNotify("ClipForge — " + title, body);
    if (kind === "run_ok" || kind === "export_done" || kind === "explore_done" || kind === "upload_done") {
      refreshCampaignData().catch(() => {});
    }
  }

  function handleEvent(ev) {
    const d = ev.data || {};
    if (ev.kind === "transcript_sent") {
      notifyTranscriptSent(d.video_id, d.recipients, !!d.sent);
    } else if (ev.kind === "highlights_received") {
      notifyHighlightsReceived(d.video_id, d.clip_count || 0);
    } else if (ev.kind === "download_progress") {
      updateDownloadProgress(d);
    } else if (ev.kind === "download_error") {
      handleDownloadError(d);
      notifyRunEvent(ev.kind, d);
    } else if (EVENT_UI[ev.kind]) {
      notifyRunEvent(ev.kind, d);
    }
  }

  // --- Transcript Modal --------------------------------------------------- //
  let transcriptModalVideoId = null;

  function openTranscriptModal(videoId) {
    transcriptModalVideoId = videoId;
    els.transcriptVideoName.textContent = videoId;
    els.transcriptBody.textContent = "Loading transcript…";
    els.transcriptModal.hidden = false;
    if (els.transcriptFind) els.transcriptFind.disabled = !!currentRun;
    fetch("/api/transcript/" + encodeURIComponent(videoId) + campQ())
      .then((r) => r.json())
      .then((d) => {
        els.transcriptBody.textContent = d.body || "No transcript available.";
        if (els.transcriptFind) els.transcriptFind.disabled = !!currentRun || !d.body;
      })
      .catch(() => {
        els.transcriptBody.textContent = "Could not load the transcript.";
        if (els.transcriptFind) els.transcriptFind.disabled = true;
      });
  }

  function closeTranscriptModal() {
    els.transcriptModal.hidden = true;
    els.transcriptBody.textContent = "";
    transcriptModalVideoId = null;
  }

  // --- Visual Canvas & Style Studio Controller ---------------------------- //
  const STYLE_PRESETS = [
    {
      id: "hormozi",
      name: "Hormozi Punchy",
      font: "Anton",
      hookSize: 76,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 6,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 68,
      captionColor: "#FFF35C",
      captionOutline: "#000000",
      captionOutlineW: 6,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#E50914",
      bgBadge: "background:#09090b;color:#FFF35C;border:1px solid #E50914;",
      badgeText: "HORMOZI",
    },
    {
      id: "clean",
      name: "Clean Minimalist",
      font: "Poppins-Bold",
      hookSize: 68,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 3,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 62,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 3,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#38BDF8",
      bgBadge: "background:#18181b;color:#FFFFFF;border:1px solid rgba(255,255,255,0.2);",
      badgeText: "MINIMAL",
    },
    {
      id: "neon",
      name: "Viral Neon",
      font: "Kanit",
      hookSize: 74,
      hookColor: "#2DE1C2",
      hookOutline: "#000000",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 66,
      captionColor: "#2DE1C2",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#F43F5E",
      bgBadge: "background:#052e2b;color:#2DE1C2;border:1px solid #2DE1C2;",
      badgeText: "NEON",
    },
    {
      id: "badge",
      name: "Solid Box Badge",
      font: "Archivo Black",
      hookSize: 66,
      hookColor: "#000000",
      hookOutline: "#FFFFFF",
      hookOutlineW: 2,
      hookBox: true,
      hookBoxColor: "#FFFFFF",
      captionSize: 58,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 2,
      captionBox: true,
      captionBoxColor: "#000000",
      highlightColor: "#F59E0B",
      bgBadge: "background:#FFFFFF;color:#000000;font-weight:900;",
      badgeText: "BADGE",
    },
    {
      id: "cyber",
      name: "TikTok Cyber",
      font: "Bebas Neue",
      hookSize: 80,
      hookColor: "#000000",
      hookOutline: "#FFFFFF",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 70,
      captionColor: "#00E5FF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FF0055",
      bgBadge: "background:#083344;color:#00E5FF;border:1px solid #FF0055;",
      badgeText: "CYBER",
    },
    {
      id: "abu_lahya",
      name: "Abu Lahya Look",
      font: "Bebas Neue",
      hookSize: 80,
      hookColor: "#000000",
      hookOutline: "#FFFFFF",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 64,
      captionColor: "#000000",
      captionOutline: "#FFFFFF",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#E50914",
      bgBadge: "background:#000000;color:#FFFFFF;border:1.5px solid #FFFFFF;",
      badgeText: "OUTLINE",
    },
  ];

  let currentCanvasClip = null;
  let currentCanvasVideoId = null;
  let activePresetId = "hormozi";
  let canvasState = {
    hook: {
      preferred_y: 0.08,
      font: "Anton",
      size: 76,
      color: "#FFFFFF",
      outline_color: "#000000",
      outline_width: 6,
      box_enabled: false,
      background_color: "#000000",
    },
    captions: {
      preferred_y: 0.72,
      font: "Anton",
      size: 68,
      color: "#FFF35C",
      outline_color: "#000000",
      outline_width: 6,
      box_enabled: false,
      background_color: "#000000",
      highlight_color: "#E50914",
    },
    cta: {
      enabled: false,
      text: "@mychannel · Part 1",
      preferred_y: 0.92,
      font: "Poppins-Bold",
      size: 38,
      color: "#FFFFFF",
    }
  };

  let activeDragTarget = null;
  let dragStartY = 0;
  let dragInitialYPct = 0;

  function initCanvasInteractions() {
    function onPointerDown(e, targetType) {
      activeDragTarget = targetType;
      dragStartY = e.clientY || (e.touches && e.touches[0].clientY);
      const box = targetType === "hook" ? els.canvasHookBox : (targetType === "caption" ? els.canvasCaptionBox : els.canvasCtaBox);
      if (box) box.classList.add("is-dragging");
      const key = targetType === "caption" ? "captions" : targetType;
      dragInitialYPct = canvasState[key] ? canvasState[key].preferred_y : 0.5;
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("mouseup", onPointerUp);
      document.addEventListener("touchmove", onPointerMove, { passive: false });
      document.addEventListener("touchend", onPointerUp);
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!activeDragTarget || !els.canvasContainer) return;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const rect = els.canvasContainer.getBoundingClientRect();
      const deltaY = clientY - dragStartY;
      const deltaPct = deltaY / (rect.height || 533);
      let newY = Math.max(0.02, Math.min(0.98, dragInitialYPct + deltaPct));
      newY = Math.round(newY * 100) / 100;
      const key = activeDragTarget === "caption" ? "captions" : activeDragTarget;
      if (canvasState[key]) {
        canvasState[key].preferred_y = newY;
      }
      updateCanvasElementsView();
      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      if (!activeDragTarget) return;
      const box = activeDragTarget === "hook" ? els.canvasHookBox : (activeDragTarget === "caption" ? els.canvasCaptionBox : els.canvasCtaBox);
      if (box) box.classList.remove("is-dragging");
      activeDragTarget = null;
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseup", onPointerUp);
      document.removeEventListener("touchmove", onPointerMove);
      document.removeEventListener("touchend", onPointerUp);
    }

    if (els.canvasHookBox) {
      els.canvasHookBox.addEventListener("mousedown", (e) => onPointerDown(e, "hook"));
      els.canvasHookBox.addEventListener("touchstart", (e) => onPointerDown(e, "hook"), { passive: false });
    }
    if (els.canvasCaptionBox) {
      els.canvasCaptionBox.addEventListener("mousedown", (e) => onPointerDown(e, "caption"));
      els.canvasCaptionBox.addEventListener("touchstart", (e) => onPointerDown(e, "caption"), { passive: false });
    }
    if (els.canvasCtaBox) {
      els.canvasCtaBox.addEventListener("mousedown", (e) => onPointerDown(e, "cta"));
      els.canvasCtaBox.addEventListener("touchstart", (e) => onPointerDown(e, "cta"), { passive: false });
    }

    // Safe zone toggle
    if (els.canvasSafeToggle) {
      els.canvasSafeToggle.addEventListener("change", () => {
        if (els.canvasSafeGuides) {
          els.canvasSafeGuides.classList.toggle("is-hidden", !els.canvasSafeToggle.checked);
        }
      });
    }

    // Sliders & inputs
    if (els.canvasHookYSlider) {
      els.canvasHookYSlider.addEventListener("input", () => {
        canvasState.hook.preferred_y = Number(els.canvasHookYSlider.value) / 100;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCaptionYSlider) {
      els.canvasCaptionYSlider.addEventListener("input", () => {
        canvasState.captions.preferred_y = Number(els.canvasCaptionYSlider.value) / 100;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCtaYSlider) {
      els.canvasCtaYSlider.addEventListener("input", () => {
        canvasState.cta.preferred_y = Number(els.canvasCtaYSlider.value) / 100;
        updateCanvasElementsView();
      });
    }

    if (els.canvasFontSelect) {
      els.canvasFontSelect.addEventListener("change", () => {
        canvasState.hook.font = els.canvasFontSelect.value;
        canvasState.captions.font = els.canvasFontSelect.value;
        canvasState.cta.font = els.canvasFontSelect.value;
        updateCanvasElementsView();
      });
    }

    if (els.canvasTextColor) {
      els.canvasTextColor.addEventListener("input", () => {
        canvasState.captions.color = els.canvasTextColor.value;
        canvasState.hook.color = els.canvasTextColor.value;
        updateCanvasElementsView();
      });
    }
    if (els.canvasOutlineColor) {
      els.canvasOutlineColor.addEventListener("input", () => {
        canvasState.captions.outline_color = els.canvasOutlineColor.value;
        canvasState.hook.outline_color = els.canvasOutlineColor.value;
        updateCanvasElementsView();
      });
    }
    if (els.canvasHighlightColor) {
      els.canvasHighlightColor.addEventListener("input", () => {
        canvasState.captions.highlight_color = els.canvasHighlightColor.value;
        updateCanvasElementsView();
      });
    }

    if (els.canvasHookSizeSlider) {
      els.canvasHookSizeSlider.addEventListener("input", () => {
        canvasState.hook.size = Number(els.canvasHookSizeSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasCaptionSizeSlider) {
      els.canvasCaptionSizeSlider.addEventListener("input", () => {
        canvasState.captions.size = Number(els.canvasCaptionSizeSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasOutlineWidthSlider) {
      els.canvasOutlineWidthSlider.addEventListener("input", () => {
        canvasState.captions.outline_width = Number(els.canvasOutlineWidthSlider.value);
        canvasState.hook.outline_width = Number(els.canvasOutlineWidthSlider.value);
        updateCanvasElementsView();
      });
    }

    if (els.canvasBoxBgToggle) {
      els.canvasBoxBgToggle.addEventListener("change", () => {
        canvasState.captions.box_enabled = els.canvasBoxBgToggle.checked;
        canvasState.hook.box_enabled = els.canvasBoxBgToggle.checked;
        updateCanvasElementsView();
      });
    }
    if (els.canvasBoxBgColor) {
      els.canvasBoxBgColor.addEventListener("input", () => {
        canvasState.captions.background_color = els.canvasBoxBgColor.value;
        canvasState.hook.background_color = els.canvasBoxBgColor.value;
        updateCanvasElementsView();
      });
    }

    if (els.canvasCtaToggle) {
      els.canvasCtaToggle.addEventListener("change", () => {
        canvasState.cta.enabled = els.canvasCtaToggle.checked;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCtaTextInput) {
      els.canvasCtaTextInput.addEventListener("input", () => {
        canvasState.cta.text = els.canvasCtaTextInput.value;
        updateCanvasElementsView();
      });
    }

    if (els.canvasSingleLineToggle) {
      els.canvasSingleLineToggle.addEventListener("change", () => {
        updateCanvasElementsView();
      });
    }

    if (els.canvasHookTextInput) {
      els.canvasHookTextInput.addEventListener("input", () => {
        if (els.canvasHookText) {
          els.canvasHookText.textContent = els.canvasHookTextInput.value || "HOOK TITLE";
        }
        if (currentCanvasClip) {
          currentCanvasClip.hook = els.canvasHookTextInput.value;
          dirty = true;
          updateReviewHint();
        }
        updateCanvasElementsView();
      });
    }

    // Direct in-canvas size steppers [ - ] [ + ]
    function stepSize(type, delta) {
      const key = type === "caption" ? "captions" : type;
      if (!canvasState[key]) return;
      const current = canvasState[key].size || (key === "hook" ? 76 : 64);
      canvasState[key].size = Math.max(20, Math.min(130, current + delta));
      updateCanvasElementsView();
    }

    if (els.hookStepMinus) els.hookStepMinus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("hook", -4); });
    if (els.hookStepPlus) els.hookStepPlus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("hook", 4); });
    if (els.capStepMinus) els.capStepMinus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("captions", -4); });
    if (els.capStepPlus) els.capStepPlus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("captions", 4); });
    if (els.ctaStepMinus) els.ctaStepMinus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("cta", -4); });
    if (els.ctaStepPlus) els.ctaStepPlus.addEventListener("click", (e) => { e.stopPropagation(); stepSize("cta", 4); });

    // Quick toolbar buttons
    if (els.quickHookMinus) els.quickHookMinus.addEventListener("click", () => stepSize("hook", -4));
    if (els.quickHookPlus) els.quickHookPlus.addEventListener("click", () => stepSize("hook", 4));
    if (els.quickCapMinus) els.quickCapMinus.addEventListener("click", () => stepSize("captions", -4));
    if (els.quickCapPlus) els.quickCapPlus.addEventListener("click", () => stepSize("captions", 4));

    // Mouse wheel resize directly on canvas boxes
    function onWheelScale(e, type) {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 2 : -2;
      stepSize(type, delta);
    }
    if (els.canvasHookBox) els.canvasHookBox.addEventListener("wheel", (e) => onWheelScale(e, "hook"), { passive: false });
    if (els.canvasCaptionBox) els.canvasCaptionBox.addEventListener("wheel", (e) => onWheelScale(e, "captions"), { passive: false });
    if (els.canvasCtaBox) els.canvasCtaBox.addEventListener("wheel", (e) => onWheelScale(e, "cta"), { passive: false });

    // Box selection highlighting
    function selectCanvasBox(targetBox) {
      [els.canvasHookBox, els.canvasCaptionBox, els.canvasCtaBox].forEach((b) => {
        if (b) b.classList.toggle("is-selected", b === targetBox);
      });
    }
    if (els.canvasHookBox) els.canvasHookBox.addEventListener("click", () => selectCanvasBox(els.canvasHookBox));
    if (els.canvasCaptionBox) els.canvasCaptionBox.addEventListener("click", () => selectCanvasBox(els.canvasCaptionBox));
    if (els.canvasCtaBox) els.canvasCtaBox.addEventListener("click", () => selectCanvasBox(els.canvasCtaBox));

    // CapCut-style corner drag handles for interactive resizing
    function initCornerResizeHandlers() {
      const handles = els.canvasContainer ? els.canvasContainer.querySelectorAll(".resize-handle") : [];
      handles.forEach((handle) => {
        function onHandleDown(e) {
          e.stopPropagation();
          e.preventDefault();
          const box = handle.closest(".canvas-drag-box");
          if (!box) return;
          const type = box.dataset.type === "caption" ? "captions" : box.dataset.type;
          const startX = e.clientX || (e.touches && e.touches[0].clientX);
          const startY = e.clientY || (e.touches && e.touches[0].clientY);
          const startSize = canvasState[type].size || 64;
          const dir = handle.dataset.handle; // "br" | "bl" | "tr" | "tl"

          function onHandleMove(ev) {
            const cx = ev.clientX || (ev.touches && ev.touches[0].clientX);
            const cy = ev.clientY || (ev.touches && ev.touches[0].clientY);
            let dx = cx - startX;
            let dy = cy - startY;
            if (dir === "tl") { dx = -dx; dy = -dy; }
            else if (dir === "tr") { dy = -dy; }
            else if (dir === "bl") { dx = -dx; }
            const delta = (dx + dy) * 0.45;
            const newSize = Math.max(20, Math.min(130, Math.round(startSize + delta)));
            canvasState[type].size = newSize;
            updateCanvasElementsView();
            if (ev.cancelable) ev.preventDefault();
          }

          function onHandleUp() {
            document.removeEventListener("mousemove", onHandleMove);
            document.removeEventListener("mouseup", onHandleUp);
            document.removeEventListener("touchmove", onHandleMove);
            document.removeEventListener("touchend", onHandleUp);
          }

          document.addEventListener("mousemove", onHandleMove);
          document.addEventListener("mouseup", onHandleUp);
          document.addEventListener("touchmove", onHandleMove, { passive: false });
          document.addEventListener("touchend", onHandleUp);
        }

        handle.addEventListener("mousedown", onHandleDown);
        handle.addEventListener("touchstart", onHandleDown, { passive: false });
      });
    }
    initCornerResizeHandlers();

    if (els.canvasRefreshFrame) {
      els.canvasRefreshFrame.addEventListener("click", () => {
        const time = currentCanvasClip ? (currentCanvasClip.start + currentCanvasClip.end) / 2 : 2.5;
        fetchFrameSnapshot(currentCanvasVideoId, time);
      });
    }

    if (els.canvasClose) {
      els.canvasClose.addEventListener("click", () => {
        if (els.visualCanvasModal) els.visualCanvasModal.hidden = true;
      });
    }

    if (els.canvasResetBtn) {
      els.canvasResetBtn.addEventListener("click", () => {
        applyPresetStyle(STYLE_PRESETS[0]);
        canvasState.hook.preferred_y = 0.08;
        canvasState.captions.preferred_y = 0.72;
        canvasState.cta.preferred_y = 0.92;
        updateCanvasElementsView();
        toast("Reset layout positions to default.", "ok");
      });
    }

    if (els.canvasApplyClipBtn) {
      els.canvasApplyClipBtn.addEventListener("click", applyCanvasToClip);
    }
    if (els.canvasApplyCampaignBtn) {
      els.canvasApplyCampaignBtn.addEventListener("click", applyCanvasToCampaign);
    }

    if (els.btnOpenCampaignCanvas) {
      els.btnOpenCampaignCanvas.addEventListener("click", () => {
        openVisualCanvasModal(null, null);
      });
    }
  }

  function renderStylePresets() {
    if (!els.stylePresetsGrid) return;
    els.stylePresetsGrid.innerHTML = "";
    STYLE_PRESETS.forEach((preset) => {
      const card = document.createElement("div");
      card.className = "style-preset-card" + (preset.id === activePresetId ? " active" : "");
      card.innerHTML = `
        <div class="preset-preview-badge" style="${preset.bgBadge}">
          ${preset.badgeText}
        </div>
        <span class="preset-name">${preset.name}</span>
      `;
      card.addEventListener("click", () => applyPresetStyle(preset));
      els.stylePresetsGrid.appendChild(card);
    });
  }

  function applyPresetStyle(preset) {
    activePresetId = preset.id;
    canvasState.hook.font = preset.font;
    canvasState.hook.size = preset.hookSize;
    canvasState.hook.color = preset.hookColor;
    canvasState.hook.outline_color = preset.hookOutline;
    canvasState.hook.outline_width = preset.hookOutlineW;
    canvasState.hook.box_enabled = preset.hookBox;
    canvasState.hook.background_color = preset.hookBoxColor;

    canvasState.captions.font = preset.font;
    canvasState.captions.size = preset.captionSize;
    canvasState.captions.color = preset.captionColor;
    canvasState.captions.outline_color = preset.captionOutline;
    canvasState.captions.outline_width = preset.captionOutlineW;
    canvasState.captions.box_enabled = preset.captionBox;
    canvasState.captions.background_color = preset.captionBoxColor;
    canvasState.captions.highlight_color = preset.highlightColor;

    renderStylePresets();
    updateCanvasElementsView();
  }

  function fitSingleLine(textEl, targetSizePx, maxWidthRatio = 0.86, minSizePx = 10) {
    if (!textEl || !els.canvasContainer) return targetSizePx;
    const isSingleLine = els.canvasSingleLineToggle ? els.canvasSingleLineToggle.checked : true;
    if (!isSingleLine) {
      textEl.style.whiteSpace = "normal";
      textEl.style.wordBreak = "normal";
      textEl.style.fontSize = `${targetSizePx}px`;
      return targetSizePx;
    }

    const containerW = els.canvasContainer.clientWidth || 320;
    const maxAllowedW = Math.floor(containerW * maxWidthRatio);

    textEl.style.whiteSpace = "nowrap";
    textEl.style.wordBreak = "keep-all";
    textEl.style.fontSize = `${targetSizePx}px`;

    let w = textEl.scrollWidth || textEl.offsetWidth;
    let effectiveSize = targetSizePx;
    if (w > maxAllowedW && w > 0) {
      const scale = maxAllowedW / w;
      effectiveSize = Math.max(minSizePx, Math.floor(targetSizePx * scale));
      textEl.style.fontSize = `${effectiveSize}px`;

      // Refinement loop to avoid single-pixel overflow
      w = textEl.scrollWidth || textEl.offsetWidth;
      while (w > maxAllowedW && effectiveSize > minSizePx) {
        effectiveSize -= 1;
        textEl.style.fontSize = `${effectiveSize}px`;
        w = textEl.scrollWidth || textEl.offsetWidth;
      }
    }
    return effectiveSize;
  }

  function updateCanvasElementsView() {
    if (!els.canvasHookBox) return;
    const containerW = (els.canvasContainer && els.canvasContainer.clientWidth) || 320;
    const scaleFactor = containerW / 1080; // normalized to 1080 canonical ASS canvas

    // 1. Hook
    const hookY = Math.round(canvasState.hook.preferred_y * 100);
    els.canvasHookBox.style.top = `${hookY}%`;
    if (els.canvasHookPosBadge) els.canvasHookPosBadge.textContent = `Top: ${hookY}%`;
    if (els.canvasHookYSlider) els.canvasHookYSlider.value = hookY;
    if (els.canvasHookYVal) els.canvasHookYVal.textContent = `${hookY}%`;

    if (els.canvasHookText) {
      if (els.canvasHookTextInput && els.canvasHookTextInput.value) {
        els.canvasHookText.textContent = els.canvasHookTextInput.value;
      }
      els.canvasHookText.style.fontFamily = `"${canvasState.hook.font}", sans-serif`;
      els.canvasHookText.style.color = canvasState.hook.color;

      const targetHookPx = Math.max(12, Math.round(canvasState.hook.size * scaleFactor * 1.15));
      const effectiveHookPx = fitSingleLine(els.canvasHookText, targetHookPx, 0.88, 10);

      if (els.canvasHookSizeVal) {
        const autoFitActive = effectiveHookPx < targetHookPx;
        els.canvasHookSizeVal.textContent = autoFitActive 
          ? `${canvasState.hook.size}px (Auto: ${Math.round(canvasState.hook.size * (effectiveHookPx / targetHookPx))}px)` 
          : `${canvasState.hook.size}px`;
      }

      if (canvasState.hook.box_enabled) {
        els.canvasHookText.style.background = canvasState.hook.background_color || "#FFFFFF";
        els.canvasHookText.style.padding = "3px 8px";
        els.canvasHookText.style.borderRadius = "5px";
        els.canvasHookText.style.webkitTextStroke = "none";
        els.canvasHookText.style.textShadow = "none";
      } else {
        els.canvasHookText.style.background = "transparent";
        els.canvasHookText.style.padding = "0";
        const w = Math.max(1, Math.round(canvasState.hook.outline_width * 0.4));
        els.canvasHookText.style.webkitTextStroke = `${w}px ${canvasState.hook.outline_color}`;
        els.canvasHookText.style.textShadow = "0 2px 8px rgba(0,0,0,0.85)";
      }
    }

    // 2. Caption
    const capY = Math.round(canvasState.captions.preferred_y * 100);
    els.canvasCaptionBox.style.top = `${capY}%`;
    if (els.canvasCaptionPosBadge) els.canvasCaptionPosBadge.textContent = `Top: ${capY}%`;
    if (els.canvasCaptionYSlider) els.canvasCaptionYSlider.value = capY;
    if (els.canvasCaptionYVal) els.canvasCaptionYVal.textContent = `${capY}%`;

    if (els.canvasCaptionText) {
      els.canvasCaptionText.style.fontFamily = `"${canvasState.captions.font}", sans-serif`;
      els.canvasCaptionText.style.color = canvasState.captions.color;

      const targetCapPx = Math.max(12, Math.round(canvasState.captions.size * scaleFactor * 1.15));
      const effectiveCapPx = fitSingleLine(els.canvasCaptionText, targetCapPx, 0.88, 10);

      if (els.canvasCaptionSizeVal) {
        const autoFitActive = effectiveCapPx < targetCapPx;
        els.canvasCaptionSizeVal.textContent = autoFitActive 
          ? `${canvasState.captions.size}px (Auto: ${Math.round(canvasState.captions.size * (effectiveCapPx / targetCapPx))}px)` 
          : `${canvasState.captions.size}px`;
      }

      const hl = els.canvasCaptionText.querySelector(".hl-word");
      if (hl) hl.style.color = canvasState.captions.highlight_color || "#FFF35C";

      if (canvasState.captions.box_enabled) {
        els.canvasCaptionText.style.background = canvasState.captions.background_color || "#000000";
        els.canvasCaptionText.style.padding = "3px 8px";
        els.canvasCaptionText.style.borderRadius = "5px";
        els.canvasCaptionText.style.webkitTextStroke = "none";
        els.canvasCaptionText.style.textShadow = "none";
      } else {
        els.canvasCaptionText.style.background = "transparent";
        els.canvasCaptionText.style.padding = "0";
        const w = Math.max(1, Math.round(canvasState.captions.outline_width * 0.4));
        els.canvasCaptionText.style.webkitTextStroke = `${w}px ${canvasState.captions.outline_color}`;
        els.canvasCaptionText.style.textShadow = "0 2px 8px rgba(0,0,0,0.85)";
      }
    }

    // 3. CTA
    if (canvasState.cta && canvasState.cta.enabled) {
      if (els.canvasCtaBox) els.canvasCtaBox.hidden = false;
      const ctaY = Math.round(canvasState.cta.preferred_y * 100);
      if (els.canvasCtaBox) els.canvasCtaBox.style.top = `${ctaY}%`;
      if (els.canvasCtaPosBadge) els.canvasCtaPosBadge.textContent = `Top: ${ctaY}%`;
      if (els.canvasCtaYSlider) els.canvasCtaYSlider.value = ctaY;
      if (els.canvasCtaYVal) els.canvasCtaYVal.textContent = `${ctaY}%`;
      if (els.canvasCtaText) {
        els.canvasCtaText.textContent = canvasState.cta.text || "@mychannel · Part 1";
        els.canvasCtaText.style.fontFamily = `"${canvasState.cta.font}", sans-serif`;
        els.canvasCtaText.style.color = canvasState.cta.color || "#FFFFFF";
        const targetCtaPx = Math.max(10, Math.round((canvasState.cta.size || 38) * scaleFactor * 1.15));
        fitSingleLine(els.canvasCtaText, targetCtaPx, 0.88, 9);
      }
    } else {
      if (els.canvasCtaBox) els.canvasCtaBox.hidden = true;
    }

    // Update in-canvas stepper & quick toolbar display values
    if (els.hookStepperVal) els.hookStepperVal.textContent = `${canvasState.hook.size || 72}px`;
    if (els.captionStepperVal) els.captionStepperVal.textContent = `${canvasState.captions.size || 64}px`;
    if (els.ctaStepperVal) els.ctaStepperVal.textContent = `${(canvasState.cta && canvasState.cta.size) || 38}px`;
    if (els.quickHookVal) els.quickHookVal.textContent = `${canvasState.hook.size || 72}px`;
    if (els.quickCapVal) els.quickCapVal.textContent = `${canvasState.captions.size || 64}px`;

    // Form inputs sync
    if (els.canvasFontSelect) els.canvasFontSelect.value = canvasState.captions.font || "Poppins-Bold";
    if (els.canvasTextColor) els.canvasTextColor.value = canvasState.captions.color || "#FFFFFF";
    if (els.canvasOutlineColor) els.canvasOutlineColor.value = canvasState.captions.outline_color || "#000000";
    if (els.canvasHighlightColor) els.canvasHighlightColor.value = canvasState.captions.highlight_color || "#FFF35C";
    if (els.canvasHookSizeSlider) {
      els.canvasHookSizeSlider.value = canvasState.hook.size || 72;
    }
    if (els.canvasCaptionSizeSlider) {
      els.canvasCaptionSizeSlider.value = canvasState.captions.size || 64;
    }
    if (els.canvasOutlineWidthSlider) {
      els.canvasOutlineWidthSlider.value = canvasState.captions.outline_width || 5;
      els.canvasOutlineWidthVal.textContent = `${canvasState.captions.outline_width || 5}px`;
    }
    if (els.canvasBoxBgToggle) els.canvasBoxBgToggle.checked = !!canvasState.captions.box_enabled;
    if (els.canvasBoxBgColor) els.canvasBoxBgColor.value = canvasState.captions.background_color || "#000000";
    if (els.canvasCtaToggle) els.canvasCtaToggle.checked = !!(canvasState.cta && canvasState.cta.enabled);
    if (els.canvasCtaOptions) els.canvasCtaOptions.hidden = !(canvasState.cta && canvasState.cta.enabled);
    if (els.canvasCtaTextInput && canvasState.cta) els.canvasCtaTextInput.value = canvasState.cta.text || "";
  }

  async function fetchFrameSnapshot(videoId, timestamp) {
    if (!videoId) {
      if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
      if (els.canvasBgImg) els.canvasBgImg.hidden = true;
      return;
    }
    if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
    if (els.canvasBgImg) els.canvasBgImg.hidden = true;
    try {
      const res = await apiPost("/api/snapshot", {
        video: videoId,
        timestamp: timestamp || 1.0,
        campaign_id: currentCampaignId,
      });
      if (res.url && els.canvasBgImg) {
        els.canvasBgImg.src = res.url;
        els.canvasBgImg.onload = () => {
          els.canvasBgImg.hidden = false;
          if (els.canvasBgFallback) els.canvasBgFallback.hidden = true;
        };
      }
    } catch (e) {
      console.warn("Snapshot extraction failed:", e);
      if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
    }
  }

  function openVisualCanvasModal(clip, videoId) {
    currentCanvasClip = clip;
    const firstGroup = candidateGroups.find((g) => g.clips && g.clips.length) || candidateGroups[0];
    currentCanvasVideoId = videoId || (firstGroup && firstGroup.source_id);

    if (clip) {
      const idx = allClips().indexOf(clip);
      if (els.canvasClipTitle) {
        els.canvasClipTitle.textContent = `Clip #${idx >= 0 ? idx + 1 : "1"} (${durationFmt(clip.start, clip.end)})`;
      }
      const rawHook = clip.hook || "THE MOST ENGAGING HOOK TITLE";
      const cleanHook = rawHook.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
      if (els.canvasHookText) {
        els.canvasHookText.textContent = cleanHook;
      }
      if (els.canvasHookTextInput) {
        els.canvasHookTextInput.value = cleanHook;
      }
      if (els.canvasCaptionText) {
        const rawSnippet = clip.snippet || "decided that you're supposed to feel good";
        const cleanSnippet = rawSnippet.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
        const words = cleanSnippet.replace(/[^\w\s']/g, "").split(/\s+/).filter(Boolean);
        const chunk = words.slice(0, 3);
        if (chunk.length >= 2) {
          const lead = escapeHtml(chunk.slice(0, -1).join(" "));
          const last = escapeHtml(chunk[chunk.length - 1]);
          els.canvasCaptionText.innerHTML = `${lead} <span class="hl-word">${last}</span>`;
        } else {
          els.canvasCaptionText.innerHTML = `${escapeHtml(chunk.join(" ") || "subtitles live here")}`;
        }
      }

      if (clip.layout) {
        canvasState = JSON.parse(JSON.stringify(clip.layout));
      } else {
        applyPresetStyle(STYLE_PRESETS[0]);
      }
      fetchFrameSnapshot(currentCanvasVideoId, (clip.start + clip.end) / 2);
    } else {
      if (els.canvasClipTitle) els.canvasClipTitle.textContent = "Campaign Default Layout";
      const defaultHook = "ENGAGING TOP HOOK HEADLINE";
      if (els.canvasHookText) els.canvasHookText.textContent = defaultHook;
      if (els.canvasHookTextInput) els.canvasHookTextInput.value = defaultHook;
      if (els.canvasCaptionText) els.canvasCaptionText.innerHTML = "Subtitles stay <span class=\"hl-word\">in this line</span>";
      applyPresetStyle(STYLE_PRESETS[0]);
      fetchFrameSnapshot(currentCanvasVideoId, 2.0);
    }

    renderStylePresets();
    updateCanvasElementsView();
    if (els.visualCanvasModal) els.visualCanvasModal.hidden = false;
  }

  async function applyCanvasToClip() {
    if (!currentCanvasClip) {
      return applyCanvasToCampaign();
    }
    if (els.canvasHookTextInput && els.canvasHookTextInput.value.trim()) {
      currentCanvasClip.hook = els.canvasHookTextInput.value.trim();
    }
    currentCanvasClip.layout = JSON.parse(JSON.stringify(canvasState));
    dirty = true;
    updateReviewHint();
    if (els.visualCanvasModal) els.visualCanvasModal.hidden = true;
    toast("Single-line layout & style applied to this clip.", "ok");
    renderReview();
    if (els.btnSaveReview) els.btnSaveReview.click();
  }

  async function applyCanvasToCampaign() {
    try {
      allClips().forEach((c) => {
        c.layout = JSON.parse(JSON.stringify(canvasState));
      });
      dirty = true;
      updateReviewHint();

      if (currentCampaignId) {
        await apiPost(`/api/campaigns/${encodeURIComponent(currentCampaignId)}/template`, {
          template: {
            hook: canvasState.hook,
            captions: canvasState.captions,
            cta: canvasState.cta,
          }
        });
      }

      if (els.btnSaveReview) await saveReviewDecisions();

      if (els.visualCanvasModal) els.visualCanvasModal.hidden = true;
      toast("Layout & styling applied to ALL clips in campaign!", "ok");
      renderReview();
    } catch (e) {
      toast("Could not save campaign layout: " + e.message, "error");
    }
  }

  async function apiGet(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error((await r.text()) || r.status);
    return r.json();
  }
  async function apiSend(url, method, body) {
    const r = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error((await r.text()) || r.status);
    return r.json();
  }
  async function apiPost(url, body) { return apiSend(url, "POST", body); }
  async function apiPatch(url, body) { return apiSend(url, "PATCH", body); }

  function campQ() {
    return currentCampaignId ? "?campaign_id=" + encodeURIComponent(currentCampaignId) : "";
  }

  function toast(msg, kind) {
    els.toast.hidden = false;
    els.toast.textContent = msg;
    els.toast.className = "toast" + (kind ? " " + kind : "");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { els.toast.hidden = true; }, 3200);
  }

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function durationFmt(start, end) {
    const d = Math.max(0, Math.round((end || 0) - (start || 0)));
    return `${fmt(start)} – ${fmt(end)} (${d}s)`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  function campaignName() {
    return (currentCampaign && currentCampaign.name) || "Campaign";
  }

  function campaignSettings() {
    return (currentCampaign && currentCampaign.settings) || {};
  }

  function relTime(iso) {
    if (!iso) return "No activity";
    const t = Date.parse(iso);
    if (Number.isNaN(t)) return iso;
    const sec = Math.max(0, Math.round((Date.now() - t) / 1000));
    if (sec < 45) return "Just now";
    if (sec < 3600) return Math.round(sec / 60) + "m ago";
    if (sec < 86400) return Math.round(sec / 3600) + "h ago";
    if (sec < 604800) return Math.round(sec / 86400) + "d ago";
    return new Date(t).toLocaleDateString();
  }

  function parseHash() {
    const raw = (location.hash || "").replace(/^#\/?/, "").replace(/\/+$/, "");
    const parts = raw ? raw.split("/") : [];
    if (!parts.length || parts[0] === "dashboard") {
      return { page: "dashboard", campaignId: null };
    }
    if (parts[0] === "campaign" && parts[1]) {
      const sub = parts[2];
      if (WORKSPACE_PAGES.includes(sub)) {
        return { page: sub, campaignId: parts[1] };
      }
      return { page: "overview", campaignId: parts[1] };
    }
    if (WORKSPACE_PAGES.includes(parts[0])) {
      return { page: parts[0], campaignId: currentCampaignId };
    }
    return { page: "dashboard", campaignId: null };
  }

  function currentPage() {
    return parseHash().page;
  }

  function hrefFor(page, campaignId) {
    const cid = campaignId || currentCampaignId;
    if (page === "dashboard" || !cid) return "#/dashboard";
    if (page === "overview" || page === "campaign") return "#/campaign/" + encodeURIComponent(cid);
    return "#/campaign/" + encodeURIComponent(cid) + "/" + page;
  }

  function go(page, campaignId) {
    const next = hrefFor(page, campaignId);
    if (location.hash !== next) location.hash = next;
    else renderPage();
  }

  function updateBreadcrumbs() {
    const parsed = parseHash();
    const isDash = parsed.page === "dashboard";
    if (els.bcSep1) els.bcSep1.hidden = isDash;
    if (els.bcCampaign) {
      els.bcCampaign.hidden = isDash || !currentCampaignId;
      els.bcCampaign.textContent = campaignName();
      els.bcCampaign.href = hrefFor("overview");
    }
    if (els.bcSep2) els.bcSep2.hidden = isDash || parsed.page === "overview";
    if (els.bcCurrent) {
      els.bcCurrent.hidden = isDash || parsed.page === "overview";
      els.bcCurrent.textContent = parsed.page;
    }
  }

  function updateBadges() {
    const clips = allClips();
    const candCount = clips.length;
    if (els.tabReviewBadge) {
      els.tabReviewBadge.textContent = candCount;
      els.tabReviewBadge.hidden = candCount === 0;
    }
    const expCount = (exportGroups || []).reduce((a, g) => a + ((g.outputs && g.outputs.length) || 0), 0);
    if (els.tabExportBadge) {
      els.tabExportBadge.textContent = expCount;
      els.tabExportBadge.hidden = expCount === 0;
    }
  }

  function updateNav() {
    const page = currentPage();
    const open = !!currentCampaignId && page !== "dashboard";
    els.sideNav.hidden = !open;
    els.workspace.classList.toggle("is-workspace", open);
    if (currentCampaignId) {
      els.navCampaign.hidden = false;
      els.navCampaign.textContent = campaignName();
      els.navCampaign.href = hrefFor("overview");
    } else {
      els.navCampaign.hidden = true;
    }
    els.nav.querySelectorAll("a[data-page]").forEach((a) => {
      const p = a.dataset.page;
      a.classList.toggle("active", p === page);
      if (p === "overview") a.href = hrefFor("overview");
    });
    els.sideNav.querySelectorAll("a[data-page]").forEach((a) => {
      const p = a.dataset.page;
      a.classList.toggle("active", p === page);
      a.href = hrefFor(p);
    });
    updateBreadcrumbs();
    updateBadges();
  }

  function renderPage() {
    const parsed = parseHash();
    if (parsed.campaignId && parsed.campaignId !== currentCampaignId) {
      openCampaign(parsed.campaignId, { silent: true }).then(() => renderPage());
      return;
    }
    if (!parsed.campaignId && WORKSPACE_PAGES.includes(parsed.page)) {
      go("dashboard");
      return;
    }
    const page = parsed.page;
    for (const p of ALL_PAGES) {
      const el = $("#page-" + p);
      if (el) el.hidden = p !== page;
    }
    updateNav();
    if (page === "dashboard") renderDashboard();
    if (page === "overview") {
      renderOverview();
      renderSourceBoard();
    }
    if (page === "review") renderReview();
    if (page === "exports") {
      renderExports();
      renderExploreControls();
    }
    if (page === "settings") {
      renderTemplates();
      renderSettingsExport();
      refreshStyleState();
    }
  }

  window.addEventListener("hashchange", renderPage);

  async function loadCampaigns() {
    const r = await apiGet("/api/campaigns");
    campaigns = r.campaigns || [];
    updateHeroStats();
  }

  function updateHeroStats() {
    if (!els.statTotalCampaigns) return;
    const totalCamps = campaigns.length;
    let totalVids = 0;
    let totalCands = 0;
    let totalExps = 0;
    for (const c of campaigns) {
      const f = c.funnel || {};
      totalVids += f.sources || 0;
      totalCands += f.candidates || 0;
      totalExps += f.exported || 0;
    }
    els.statTotalCampaigns.textContent = totalCamps;
    els.statTotalVideos.textContent = totalVids;
    els.statTotalCandidates.textContent = totalCands;
    els.statTotalExports.textContent = totalExps;
  }

  async function openCampaign(id, opts) {
    if (!id) return;
    currentCampaignId = id;
    try {
      currentCampaign = await apiGet("/api/campaigns/" + encodeURIComponent(id));
    } catch (e) {
      currentCampaign = null;
      currentCampaignId = null;
      if (!opts || !opts.silent) toast("Campaign not found.", "error");
      go("dashboard");
      return;
    }
    dirty = false;
    openPreviews.clear();
    await loadState();
    await Promise.all([loadSources(), loadCandidates(), loadExports()]);
    applyCampaignSettings();
    updateNav();
  }

  async function loadSources() {
    if (!currentCampaignId) { sources = []; return; }
    const r = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/sources");
    sources = r.sources || [];
    if (els.sourcesCounter) {
      els.sourcesCounter.textContent = `${sources.length} Video${sources.length === 1 ? "" : "s"}`;
    }
  }

  async function loadCandidates() {
    if (!currentCampaignId) { candidateGroups = []; return; }
    const r = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/candidates");
    candidateGroups = r.groups || [];
    dirty = false;
    openPreviews.clear();
    updateBadges();
  }

  async function loadExports() {
    if (!currentCampaignId) { exportGroups = []; return; }
    const r = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/exports");
    exportGroups = r.groups || [];
    updateBadges();
  }

  // --- 1. Dashboard Render ------------------------------------------------ //
  function renderDashboard() {
    if (!els.campaignGrid) return;
    els.campaignGrid.innerHTML = "";
    updateHeroStats();

    const query = (els.campSearchInput ? els.campSearchInput.value : "").trim().toLowerCase();
    const filtered = query
      ? campaigns.filter((c) => (c.name || "").toLowerCase().includes(query))
      : campaigns;

    if (!filtered.length) {
      if (campaigns.length > 0 && query) {
        els.campaignGrid.innerHTML = `
          <div class="empty-card" style="grid-column: 1 / -1;">
            ${svgIcon("search", "empty-icon-large")}
            <h3>No matching campaigns</h3>
            <p>No campaign matches “${escapeHtml(query)}”. Try a different search term.</p>
          </div>`;
      } else {
        els.campaignGrid.innerHTML = `
          <div class="empty-card" style="grid-column: 1 / -1;">
            ${svgIcon("film", "empty-icon-large")}
            <h3>Welcome to ClipForge Studio</h3>
            <p>Create your first campaign bay above to start transforming long-form videos into high-impact 9:16 viral clips.</p>
          </div>`;
      }
      return;
    }

    for (const c of filtered) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card campaign-card";
      const f = c.funnel || {};
      const fill = Math.max(0, Math.min(100, 100 * (f.exported || 0) / Math.max(f.sources || 0, 1)));
      card.innerHTML =
        `<span class="film-frame" aria-hidden="true"><span class="film-bar" style="height:${fill}%"></span></span>` +
        `<span class="campaign-card-body">` +
        `<span class="campaign-card-name">${escapeHtml(c.name)}</span>` +
        `<span class="campaign-card-meta">Updated ${escapeHtml(relTime(c.updated_at))}</span>` +
        `<span class="campaign-card-clips">${f.sources || 0} sources · ${f.candidates || 0} candidates · ${f.approved || 0} approved · ${f.exported || 0} exported</span>` +
        `</span>`;
      card.addEventListener("click", () => go("overview", c.id));
      els.campaignGrid.appendChild(card);
    }
  }

  if (els.campSearchInput) {
    els.campSearchInput.addEventListener("input", renderDashboard);
  }

  // --- 2. Overview & Pipeline Funnel Render -------------------------------- //
  function renderOverview() {
    if (!currentCampaign) return;
    const f = currentCampaign.funnel || {};
    els.campDetailName.textContent = currentCampaign.name;
    els.campDetailMeta.textContent = "Updated " + relTime(currentCampaign.updated_at);
    renderHighlightToggle();
    renderOverviewRules();
    renderFunnelStrip(f);
    const empty = !(f.sources);
    els.overviewEmpty.hidden = !empty;
  }

  function renderFunnelStrip(f) {
    if (!els.funnelStrip) return;
    els.funnelStrip.innerHTML = "";
    FUNNEL_STEPS.forEach((step) => {
      const n = f[step.key] || 0;
      const done = n > 0;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "funnel-chip" + (done ? " done" : "");
      chip.innerHTML =
        `<span class="fc-label">${escapeHtml(step.label)}</span>` +
        `<span class="fc-n">${n}</span>`;
      chip.addEventListener("click", () => go(step.page));
      els.funnelStrip.appendChild(chip);
    });
  }

  function renderOverviewRules() {
    if (!els.ovRulesBody) return;
    const rules = campaignRules();
    const has = hasRulesContent(rules);
    els.ovRulesEmpty.hidden = has;
    els.ovRulesBody.hidden = !has;
    els.ovRulesUploadLbl.hidden = !has;
    if (currentCampaign && currentCampaign.rules_full) {
      els.ovRulesViewFull.hidden = !has;
      els.ovRulesViewFull.href = "/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/rules/file";
    } else {
      els.ovRulesViewFull.hidden = true;
    }
    if (!has) return;
    els.ovRulesBody.innerHTML = "";
    for (const sec of RULE_SECTIONS) {
      els.ovRulesBody.appendChild(rulesSectionEl(sec, rules));
    }
  }

  function renderHighlightToggle() {
    const local = !!campaignSettings().local_highlights;
    els.highlightToggle.querySelectorAll(".seg").forEach((btn) => {
      btn.classList.toggle("on",
        (btn.dataset.mode === "local") === local);
    });
    els.highlightToggleHint.textContent = local
      ? "Highlights selected locally using Ollama vision/language models (" + (state ? state.config.llm_model : "Gemma") + ")."
      : "Transcript is securely dispatched via email; AI replies with curated highlights that populate the Review queue.";
  }

  async function deleteCampaign() {
    if (!currentCampaign || !currentCampaignId) return;
    const name = currentCampaign.name;
    const msg = `Delete campaign bay "${name}"?\n\n` +
      "This removes ALL source videos, transcripts, candidates, approved cuts, and exported clips. This action cannot be undone.";
    if (!confirm(msg)) return;
    if (!confirm(`Final Confirmation — Permanently delete "${name}"?`)) return;
    try {
      const r = await fetch("/api/campaigns/" + encodeURIComponent(currentCampaignId),
                            { method: "DELETE" });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || r.status);
      toast(`Deleted campaign "${name}".`, "ok");
      currentCampaign = null;
      currentCampaignId = null;
      sources = []; candidateGroups = []; exportGroups = [];
      await loadCampaigns();
      go("dashboard");
    } catch (e) {
      toast("Delete failed: " + e.message, "error");
    }
  }

  function sourceBusy(id) {
    return !!currentRun && (!runningVideoId || runningVideoId === id);
  }

  function hasTranscriptStage(stage) {
    return ["transcribed", "analysed", "has_approved", "exported", "awaiting"].includes(stage);
  }

  async function uploadHighlightsJson(videoId) {
    const inp = document.createElement("input");
    inp.type = "file";
    inp.accept = ".json,application/json";
    inp.style.display = "none";
    document.body.appendChild(inp);
    return new Promise((resolve) => {
      inp.addEventListener("change", async () => {
        const file = inp.files && inp.files[0];
        inp.remove();
        if (!file) { resolve(); return; }
        const fd = new FormData();
        fd.append("file", file);
        fd.append("video_id", videoId);
        if (currentCampaignId) fd.append("campaign_id", currentCampaignId);
        try {
          toast("Uploading highlights JSON…");
          const r = await fetch("/api/highlights/upload", { method: "POST", body: fd });
          const data = await r.json().catch(() => ({}));
          if (!r.ok) throw new Error(data.error || r.status);
          toast(`Ingested ${data.clip_count} highlight(s) for ${data.video_id}.`, "ok");
          await refreshCampaignData();
          go("review");
        } catch (e) {
          toast("Upload failed: " + e.message, "error");
        }
        resolve();
      });
      inp.addEventListener("cancel", () => { inp.remove(); resolve(); });
      inp.click();
    });
  }

  const STAGE_RAIL = ["uploaded", "transcribed", "analysed", "reviewed", "exported"];

  function stageRailIndex(stage) {
    const s = stage || "uploaded";
    if (s === "exported") return 4;
    if (s === "has_approved") return 3;
    if (s === "analysed" || s === "awaiting") return 2;
    if (s === "transcribed") return 1;
    return 0;
  }

  function renderSourceBoard() {
    if (!els.sourceBoard) return;
    els.sourceBoard.innerHTML = "";
    if (!sources.length) {
      els.sourceBoard.hidden = true;
      if (els.uploadDropTitle) els.uploadDropTitle.textContent = "Drop raw video here to begin";
      return;
    }
    els.sourceBoard.hidden = false;
    if (els.uploadDropTitle) els.uploadDropTitle.textContent = "Add another source video";
    for (const v of sources) {
      els.sourceBoard.appendChild(sourceCardEl(v));
    }
  }

  function sourceCardEl(v) {
    const stage = v.stage || "uploaded";
    const busy = sourceBusy(v.id) || v.running;
    const mb = (v.size / 1048576).toFixed(v.size > 104857600 ? 0 : 1);
    const card = document.createElement("div");
    card.className = "source-card" + (busy ? " busy" : "");
    const railIdx = stageRailIndex(stage);
    const rail = STAGE_RAIL.map((name, i) => {
      const filled = i <= railIdx ? " fill" : "";
      const pulse = (stage === "awaiting" && i === 2) ? " pulse" : "";
      return `<span class="sr-dot${filled}${pulse}" title="${name}"></span>`;
    }).join("");
    card.innerHTML =
      `<div class="source-card-head">` +
      `<span class="v-name">${escapeHtml(v.name)}</span>` +
      `<span class="v-size">${mb} MB</span>` +
      `<span class="stage-chip stage-${escapeHtml(stage)}${busy ? " busy" : ""}">${escapeHtml(STAGE_LABELS[stage] || stage)}</span>` +
      `<span class="v-counts">${v.candidates || 0} candidates · ${v.approved || 0} approved</span>` +
      `</div>` +
      `<div class="source-stage-rail">${rail}</div>` +
      `<div class="source-card-actions"></div>`;
    const actions = card.querySelector(".source-card-actions");
    const canReselect = ["analysed", "has_approved", "exported"].includes(stage) && !busy;
    let primaryLabel, primaryAction, primaryClass = "btn-primary";
    switch (stage) {
      case "uploaded":
      case "transcribed":
        primaryLabel = "Find Highlights";
        primaryAction = () => startRun("analyze", v.id, false);
        break;
      case "analysed":
        primaryLabel = `Review ${v.candidates || 0} Candidates`;
        primaryAction = () => go("review");
        break;
      case "has_approved":
        primaryLabel = `Export ${v.approved || 0} Approved`;
        primaryAction = () => openExportConfig("export", v.id, false);
        break;
      case "exported":
        primaryLabel = `View ${v.exported || 0} Rendered`;
        primaryAction = () => go("exports");
        break;
      case "awaiting":
        primaryLabel = "Awaiting Highlights…";
        primaryAction = null;
        primaryClass = "btn-ghost";
        break;
      default:
        primaryLabel = "Find Highlights";
        primaryAction = () => startRun("analyze", v.id, false);
        break;
    }
    const primary = document.createElement("button");
    primary.className = "btn btn-small " + primaryClass;
    primary.textContent = primaryLabel;
    primary.disabled = busy || !primaryAction;
    if (primaryAction) primary.addEventListener("click", primaryAction);
    actions.appendChild(primary);

    if (stage === "uploaded" && !busy) {
      const trOnly = document.createElement("button");
      trOnly.className = "btn btn-small btn-ghost";
      trOnly.textContent = "Transcript Only";
      trOnly.title = "Stop after transcription — skip highlight finding.";
      trOnly.addEventListener("click", () => startRun("transcribe", v.id, false, { skip_email: true }));
      actions.appendChild(trOnly);
    }
    if (hasTranscriptStage(stage) && !busy) {
      const upBtn = document.createElement("button");
      upBtn.className = "btn btn-small btn-ghost";
      upBtn.textContent = "Upload JSON";
      upBtn.title = "Attach an externally generated highlights JSON";
      upBtn.addEventListener("click", () => uploadHighlightsJson(v.id));
      actions.appendChild(upBtn);
    }
    if (canReselect) {
      const reselectBtn = document.createElement("button");
      reselectBtn.className = "btn btn-small btn-ghost";
      reselectBtn.textContent = "Re-analyze";
      reselectBtn.title = "Re-run highlight selection with current brief rules";
      reselectBtn.addEventListener("click", () => startRun("select", v.id, false, { local: true }));
      actions.appendChild(reselectBtn);
    }
    if (hasTranscriptStage(stage)) {
      const trBtn = document.createElement("button");
      trBtn.className = "btn btn-small btn-ghost";
      trBtn.textContent = "Transcript";
      trBtn.title = "View and copy transcript text";
      trBtn.addEventListener("click", () => openTranscriptModal(v.id));
      actions.appendChild(trBtn);
    }
    const del = document.createElement("button");
    del.className = "source-del";
    del.title = "Delete source video";
    del.setAttribute("aria-label", "Delete " + v.name);
    del.innerHTML = svgIcon("trash");
    del.addEventListener("click", () => deleteVideo(v));
    actions.appendChild(del);
    return card;
  }

  async function deleteVideo(v) {
    if (!confirm(`Delete source video "${v.name}" from this campaign bay?\n\n` +
                 `Source file will be removed while transcripts and rendered clips remain.`)) return;
    try {
      const r = await fetch("/api/video/" + encodeURIComponent(v.id) + campQ(), { method: "POST" });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || r.status);
      toast("Deleted " + v.name + ".", "ok");
      await refreshCampaignData();
    } catch (e) {
      toast("Delete failed: " + e.message, "error");
    }
  }

  function allClips() {
    const out = [];
    for (const g of candidateGroups) {
      for (const c of g.clips || []) out.push(c);
    }
    return out;
  }

  function updateReviewHint() {
    if (!els.reviewHint) return;
    els.reviewHint.textContent = dirty
      ? "⚠ Unsaved changes — press Save Decisions to preserve your review edits."
      : "Decisions stay unsaved until you press Save Decisions.";
    els.reviewHint.classList.toggle("dirty", dirty);
  }

  // --- 3. Review Page Render ---------------------------------------------- //
  function renderReview() {
    els.reviewList.innerHTML = "";
    const clipGroups = candidateGroups.filter((g) => g.clips && g.clips.length);
    const waitingGroups = candidateGroups.filter((g) =>
      (g.highlights_from === "email" || g.highlights_from === "pending") && !(g.clips && g.clips.length)
    );
    if (!clipGroups.length && !waitingGroups.length) {
      els.reviewCount.textContent = "";
      els.reviewEmpty.hidden = false;
      return;
    }
    els.reviewEmpty.hidden = true;
    const clips = allClips();
    const approved = clips.filter((c) => c.status === "approved").length;
    els.reviewCount.textContent = `(${clips.length} found · ${approved} approved)`;
    for (const g of clipGroups) {
      els.reviewList.appendChild(sourceGroupEl(g, g.clips, { actions: true }));
    }
    for (const g of waitingGroups) {
      els.reviewList.appendChild(reviewWaitingGroupEl(g));
    }
    updateReviewHint();
  }

  function reviewWaitingGroupEl(group) {
    const wrap = document.createElement("div");
    wrap.className = "source-group approval-group";
    const es = group.email_status || {};
    const sentAt = es.sent_at ? relTime(es.sent_at) : null;
    const recipients = (es.recipients || []).join(", ");
    const head = document.createElement("div");
    head.className = "source-group-head approval-head";
    head.innerHTML = `<h3 class="eyebrow">${escapeHtml(group.source_name || group.source_id)}</h3>`;
    wrap.appendChild(head);
    const card = document.createElement("div");
    card.className = "card approval-waiting";
    card.innerHTML =
      `<div class="approval-status">` +
      `<span class="badge score">Awaiting Highlights</span>` +
      `<span class="approval-meta">Transcript emailed${recipients ? " to " + escapeHtml(recipients) : ""}` +
      `${sentAt ? " · " + escapeHtml(sentAt) : ""}</span>` +
      `</div>` +
      `<p class="hint">The transcript has been sent to AI. Highlight picks will automatically stream here upon reply.</p>` +
      `<div class="card-actions">` +
      `<button class="btn btn-small btn-ghost btn-view-transcript">View Transcript</button>` +
      `<button class="btn btn-small btn-ghost btn-check-now">Check Inbox Now</button>` +
      `</div>`;
    card.querySelector(".btn-view-transcript").addEventListener("click",
      () => openTranscriptModal(group.source_id));
    card.querySelector(".btn-check-now").addEventListener("click", () => checkInboxNow());
    wrap.appendChild(card);
    return wrap;
  }

  async function checkInboxNow() {
    try {
      toast("Checking highlight inbox…");
      const r = await apiPost("/api/email/check", {});
      if (r.ingested > 0) {
        toast(`Ingested ${r.ingested} highlight repl${r.ingested === 1 ? "y" : "ies"}.`, "ok");
      } else {
        toast("No new highlight replies found.");
      }
      await refreshCampaignData();
    } catch (e) {
      toast("Inbox check failed: " + e.message, "error");
    }
  }

  function sourceGroupEl(group, clips, opts) {
    const wrap = document.createElement("div");
    wrap.className = "source-group";
    const head = document.createElement("div");
    head.className = "source-group-head";
    const title = document.createElement("h3");
    title.className = "eyebrow";
    title.innerHTML = `${svgIcon("film", "eyebrow-icon")} ${escapeHtml(group.source_name || group.source_id)}`;
    head.appendChild(title);
    if (opts && opts.exportBtn) {
      const busy = sourceBusy(group.source_id);
      const btn = document.createElement("button");
      btn.className = "btn btn-small btn-primary";
      btn.textContent = "Export Approved";
      btn.disabled = busy;
      btn.addEventListener("click", () => openExportConfig("export", group.source_id, false));
      head.appendChild(btn);
    }
    wrap.appendChild(head);
    const list = document.createElement("div");
    list.className = "cards";
    clips.forEach((clip, i) => list.appendChild(clipCard(clip, i, group, opts)));
    wrap.appendChild(list);
    return wrap;
  }

  function snippetFor(clip) {
    if (clip.snippet) return clip.snippet;
    return "No transcript segment text available.";
  }

  function clipKey(clip) {
    return (clip.source_id || "") + ":" + clip.start + ":" + clip.end;
  }

  function clipCard(clip, i, group, opts) {
    const card = document.createElement("div");
    card.className = "card " + (clip.status || "pending");
    card.tabIndex = 0;

    const scoreNum = Number(clip.score || 0);
    const scoreRating = scoreNum >= 0.85 ? "🔥 High Viral Score" : (scoreNum >= 0.70 ? "✨ Good Potential" : "Score");

    const head = document.createElement("div");
    head.className = "card-head";
    head.innerHTML =
      `<span class="badge">#${i + 1}</span>` +
      `<span class="badge score" title="${scoreRating}">${scoreNum.toFixed(2)} · ${scoreRating}</span>` +
      `<span class="card-reason">${escapeHtml(clip.reason || "")}</span>`;
    card.appendChild(head);

    const times = document.createElement("div");
    times.className = "card-times";
    const rangeBadge = document.createElement("span");
    rangeBadge.className = "badge";
    rangeBadge.textContent = durationFmt(clip.start, clip.end);

    const mk = (label, key) => {
      const lab = document.createElement("label");
      lab.textContent = label + ": ";
      const inp = document.createElement("input");
      inp.type = "number"; inp.step = "0.5"; inp.min = "0"; inp.value = clip[key];
      inp.addEventListener("change", () => {
        clip[key] = parseFloat(inp.value) || 0;
        rangeBadge.textContent = durationFmt(clip.start, clip.end);
        dirty = true; updateReviewHint();
      });
      lab.appendChild(inp);
      return lab;
    };
    times.appendChild(mk("Start (s)", "start"));
    times.appendChild(mk("End (s)", "end"));
    times.appendChild(rangeBadge);
    card.appendChild(times);

    const snip = document.createElement("pre");
    snip.className = "snippet";
    snip.textContent = snippetFor(clip);
    card.appendChild(snip);

    const hookRow = document.createElement("div");
    hookRow.className = "hook-row";
    const hookLab = document.createElement("label");
    hookLab.textContent = "Hook Caption (Overlaid on Top of 9:16 Cut)";
    const hookWrap = document.createElement("div");
    hookWrap.style.display = "flex";
    hookWrap.style.gap = "8px";
    const hookInp = document.createElement("input");
    hookInp.type = "text";
    hookInp.value = clip.hook || "";
    hookInp.placeholder = "Enter engaging hook title…";
    hookInp.addEventListener("change", () => { clip.hook = hookInp.value; dirty = true; updateReviewHint(); });

    const hookCopy = document.createElement("button");
    hookCopy.type = "button";
    hookCopy.className = "btn btn-small btn-ghost";
    hookCopy.innerHTML = `${svgIcon("copy")} Copy`;
    hookCopy.title = "Copy Hook Title to Clipboard";
    hookCopy.addEventListener("click", () => {
      if (hookInp.value) {
        navigator.clipboard.writeText(hookInp.value).then(() => toast("Hook copied.", "ok"));
      }
    });

    hookWrap.appendChild(hookInp);
    hookWrap.appendChild(hookCopy);
    hookRow.appendChild(hookLab);
    hookRow.appendChild(hookWrap);
    card.appendChild(hookRow);

    if (opts && (opts.actions || opts.preview)) {
      const actions = document.createElement("div");
      actions.className = "card-actions";
      if (opts.actions) {
        const bApprove = document.createElement("button");
        bApprove.className = "btn-approve" + (clip.status === "approved" ? " on" : "");
        bApprove.innerHTML = `${svgIcon("check")} ${clip.status === "approved" ? "Approved" : "Approve"}`;
        bApprove.addEventListener("click", () => {
          clip.status = clip.status === "approved" ? "pending" : "approved";
          dirty = true;
          renderReview();
        });
        const bReject = document.createElement("button");
        bReject.className = "btn-reject" + (clip.status === "rejected" ? " on" : "");
        bReject.innerHTML = `${svgIcon("close")} ${clip.status === "rejected" ? "Rejected" : "Reject"}`;
        bReject.addEventListener("click", () => {
          clip.status = clip.status === "rejected" ? "pending" : "rejected";
          dirty = true;
          renderReview();
        });
        actions.appendChild(bApprove);
        actions.appendChild(bReject);
      }
      const bLayout = document.createElement("button");
      bLayout.className = "btn-preview";
      bLayout.style.background = "var(--teal-dim)";
      bLayout.style.color = "var(--teal)";
      bLayout.style.borderColor = "rgba(34, 211, 238, 0.4)";
      bLayout.innerHTML = `${svgIcon("sparkles")} Layout & Style`;
      bLayout.title = "Customize Hook & Captions Positioning on Visual Canvas";
      bLayout.addEventListener("click", () => openVisualCanvasModal(clip, group.source_id));
      actions.appendChild(bLayout);

      const bPreview = document.createElement("button");
      bPreview.className = "btn-preview";
      bPreview.innerHTML = `${svgIcon("play")} Preview`;
      bPreview.addEventListener("click", () => previewClip(clip, card, bPreview, group.source_id));
      actions.appendChild(bPreview);
      card.appendChild(actions);

      const slot = document.createElement("div");
      slot.className = "preview-slot";
      slot.hidden = true;
      card.appendChild(slot);
      restorePreview(clip, card, bPreview);
    }

    card.addEventListener("mouseenter", () => { hoveredClip = { clip, card, group }; });
    card.addEventListener("mouseleave", () => { if (hoveredClip && hoveredClip.clip === clip) hoveredClip = null; });

    return card;
  }

  // --- Keyboard Navigation in Review -------------------------------------- //
  document.addEventListener("keydown", (e) => {
    if (currentPage() !== "review") return;
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (e.key === "s" || e.key === "S") {
      if (e.ctrlKey || e.metaKey || true) {
        e.preventDefault();
        if (els.btnSaveReview) els.btnSaveReview.click();
      }
    } else if (e.key === "a" || e.key === "A") {
      e.preventDefault();
      if (hoveredClip) {
        hoveredClip.clip.status = hoveredClip.clip.status === "approved" ? "pending" : "approved";
        dirty = true;
        renderReview();
      } else {
        const first = allClips().find((c) => c.status !== "approved");
        if (first) {
          first.status = "approved";
          dirty = true;
          renderReview();
        }
      }
    } else if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      if (hoveredClip) {
        hoveredClip.clip.status = hoveredClip.clip.status === "rejected" ? "pending" : "rejected";
        dirty = true;
        renderReview();
      }
    } else if (e.key === " " && hoveredClip) {
      e.preventDefault();
      const prevBtn = hoveredClip.card.querySelector(".btn-preview");
      if (prevBtn) prevBtn.click();
    }
  });

  function restorePreview(clip, card, button) {
    const slot = card.querySelector(".preview-slot");
    const url = openPreviews.get(clipKey(clip));
    if (!url || !slot) return;
    const vid = document.createElement("video");
    vid.controls = true; vid.preload = "metadata"; vid.src = url;
    slot.appendChild(vid);
    slot.hidden = false;
    button.innerHTML = `${svgIcon("close")} Hide Preview`;
  }

  async function previewClip(clip, card, button, videoId) {
    const slot = card.querySelector(".preview-slot");
    if (!videoId) return;
    if (!slot.hidden) {
      slot.hidden = true;
      openPreviews.delete(clipKey(clip));
      const vid = slot.querySelector("video");
      if (vid) vid.pause();
      button.innerHTML = `${svgIcon("play")} Preview`;
      slot.innerHTML = "";
      return;
    }
    button.disabled = true;
    button.innerHTML = `${svgIcon("film")} Generating Preview…`;
    try {
      const res = await apiPost("/api/preview", {
        video: videoId, start: clip.start, end: clip.end,
        campaign_id: currentCampaignId,
      });
      openPreviews.set(clipKey(clip), res.url);
      slot.innerHTML = "";
      const vid = document.createElement("video");
      vid.controls = true; vid.preload = "metadata"; vid.src = res.url;
      slot.appendChild(vid);
      slot.hidden = false;
      vid.play().catch(() => {});
      button.innerHTML = `${svgIcon("close")} Hide Preview`;
    } catch (e) {
      toast("Preview failed: " + e.message, "error");
      button.innerHTML = `${svgIcon("play")} Preview`;
    } finally {
      button.disabled = false;
    }
  }

  // --- 4. Exports & Style Explorer Render --------------------------------- //
  function renderExports() {
    els.outputList.innerHTML = "";
    const exportedIds = new Set(exportGroups.filter((g) => g.outputs && g.outputs.length)
      .map((g) => g.source_id));
    const ready = candidateGroups.filter((g) => {
      const approved = (g.clips || []).filter((c) => c.status === "approved").length;
      return approved > 0;
    });
    if (ready.length) {
      const readyWrap = document.createElement("div");
      readyWrap.className = "source-group export-ready-group";
      const head = document.createElement("div");
      head.className = "source-group-head";
      head.innerHTML = `<h3 class="eyebrow">${svgIcon("sparkles", "eyebrow-icon")} Approved Cuts Ready for Rendering</h3>`;
      readyWrap.appendChild(head);
      const grid = document.createElement("div");
      grid.className = "cards export-ready-cards";
      for (const g of ready) {
        const approved = (g.clips || []).filter((c) => c.status === "approved").length;
        const hasOut = exportedIds.has(g.source_id);
        const card = document.createElement("div");
        card.className = "card export-ready-card";
        card.innerHTML =
          `<div class="export-ready-meta">` +
          `<span class="output-name" title="${escapeHtml(g.source_name || g.source_id)}">${escapeHtml(g.source_name || g.source_id)}</span>` +
          `<span class="explore-score">${approved} Approved Cut${approved === 1 ? "" : "s"}</span>` +
          `</div>`;
        const btn = document.createElement("button");
        btn.className = "btn btn-small btn-primary";
        btn.innerHTML = `${svgIcon("download")} ${hasOut ? "Re-Render Approved" : "Render Approved"}`;
        btn.disabled = !!currentRun || sourceBusy(g.source_id);
        btn.addEventListener("click", () => openExportConfig("export", g.source_id, false));
        card.appendChild(btn);
        grid.appendChild(card);
      }
      readyWrap.appendChild(grid);
      els.outputList.appendChild(readyWrap);
    }

    const groups = (exportGroups || []).filter((g) => g.outputs && g.outputs.length);
    const n = groups.reduce((a, g) => a + g.outputs.length, 0);
    els.outputCount.textContent = n ? `(${n} rendered)` : "";
    if (!groups.length) {
      if (!ready.length) {
        els.outputList.innerHTML += `
          <div class="empty-card">
            ${svgIcon("download", "empty-icon-large")}
            <h3>No Rendered Clips Yet</h3>
            <p>Approve candidate clips in the Review queue, then click Render Approved to generate vertical 9:16 clips.</p>
          </div>`;
      }
      return;
    }
    for (const g of groups) {
      const wrap = document.createElement("div");
      wrap.className = "source-group";
      wrap.innerHTML = `<div class="source-group-head"><h3 class="eyebrow">${svgIcon("film", "eyebrow-icon")} ${escapeHtml(g.source_name || g.source_id)}</h3></div>`;
      const grid = document.createElement("div");
      grid.className = "cards output-cards";
      for (const o of g.outputs) {
        const card = document.createElement("div");
        card.className = "card output-card";
        card.innerHTML =
          `<video controls preload="none" src="${o.url}"></video>` +
          `<div class="output-meta">` +
          `<span class="output-name" title="${escapeHtml(o.name)}">${escapeHtml(o.name)}</span>` +
          `<a class="btn btn-small btn-ghost" href="${o.url}" download>${svgIcon("download")} Download</a>` +
          `</div>`;
        grid.appendChild(card);
      }
      wrap.appendChild(grid);
      els.outputList.appendChild(wrap);
    }
  }

  function renderExploreControls() {
    if (!els.exploreVideoSelect) return;
    const groups = candidateGroups.filter((g) => (g.clips || []).length);
    const prev = els.exploreVideoSelect.value;
    els.exploreVideoSelect.innerHTML = groups.length
      ? groups.map((g) =>
          `<option value="${escapeHtml(g.source_id)}">${escapeHtml(g.source_name || g.source_id)}</option>`
        ).join("")
      : `<option value="">No candidates yet — analyze first</option>`;
    if (prev && groups.some((g) => g.source_id === prev)) {
      els.exploreVideoSelect.value = prev;
    }
    els.btnExploreStyles.disabled = !groups.length || !!currentRun;
    const sel = els.exploreVideoSelect.value;
    if (sel) loadExploration(sel);
  }

  async function loadExploration(videoId) {
    if (!els.exploreResults) return;
    let report = null;
    try {
      report = await apiGet("/api/exploration/" + encodeURIComponent(videoId) + campQ());
    } catch (e) { /* no exploration yet */ }
    if (!report || !(report.variants || []).length) {
      els.exploreResults.innerHTML =
        `<p class="hint">No style exploration generated yet for this video.</p>`;
      return;
    }
    const winner = report.winner;
    let html = `<div class="cards explore-cards">`;
    for (const v of report.variants) {
      const isWin = v.name === winner;
      const total = (typeof v.total === "number") ? v.total.toFixed(1) : "—";
      html +=
        `<div class="card explore-card${isWin ? " explore-winner" : ""}">` +
        (v.preview_url
          ? `<video controls preload="none" muted src="${v.preview_url}"></video>`
          : `<div class="empty">No Preview Available</div>`) +
        `<div class="explore-meta">` +
        `<span class="explore-name" title="${escapeHtml(v.summary)}">${escapeHtml(v.name)}</span>` +
        `<span class="explore-score">AI Score: ${total}</span>` +
        `<p class="explore-verdict">${escapeHtml(v.verdict || "")}</p>` +
        `</div></div>`;
    }
    html += `</div>`;
    html += `<div class="explore-foot">` +
      `<p class="hint">Winning Style: <b>${escapeHtml(winner || "None")}</b> — Applying it will use this aesthetic across all exported clips.</p>` +
      `<button class="btn btn-primary btn-save-style" ${winner && report.winner_template ? "" : "disabled"}>${svgIcon("check")} Save as Campaign Style</button>` +
      `</div>`;
    els.exploreResults.innerHTML = html;
    const saveBtn = els.exploreResults.querySelector(".btn-save-style");
    if (saveBtn && winner) {
      saveBtn.addEventListener("click", async () => {
        try {
          await apiPost("/api/exploration/" + encodeURIComponent(videoId) +
                        "/save-to-campaign" + campQ(), {});
          toast("Winner saved as default campaign look.", "ok");
          await refreshCampaignData();
        } catch (e) {
          toast("Save failed: " + e.message, "error");
        }
      });
    }
  }

  // --- Export Config Modal ------------------------------------------------ //
  let exportConfig = null;

  function openExportConfig(mode, videoId, auto) {
    if (!videoId) { toast("Select a source video first.", "error"); return; }
    if (currentRun) { toast("A task is already running in background.", "error"); return; }
    exportConfig = { mode, videoId, auto: !!auto };
    const tpls = (state && state.templates) || [];
    const settings = campaignSettings();
    const winnerHint = tpls.some((t) => t.name === videoId + "_winner");
    els.exportConfigTemplate.innerHTML = tpls.length
      ? tpls.map((t) =>
          `<option value="${escapeHtml(t.name)}">${escapeHtml(t.label || t.name)}</option>`
        ).join("")
      : `<option value="">No templates available</option>`;
    const prev = winnerHint ? videoId + "_winner"
      : (settings.default_template || (els.templateSelect && els.templateSelect.value));
    if (prev && tpls.some((t) => t.name === prev)) {
      els.exportConfigTemplate.value = prev;
    }
    els.exportConfigVideo.textContent = videoId;
    els.exportConfigInstructions.value = settings.edit_instructions || "";
    els.exportConfigHint.textContent =
      "Directives are saved to the campaign and logged during export." +
      (winnerHint && mode !== "explore-style"
        ? " A Style Explorer winning look exists for this video."
        : "");
    els.exportConfigModal.hidden = false;
  }

  function closeExportConfig() {
    els.exportConfigModal.hidden = true;
    exportConfig = null;
  }

  async function confirmExportConfig() {
    if (!exportConfig) return;
    const cfg = exportConfig;
    const template = els.exportConfigTemplate.value || undefined;
    const instructions = els.exportConfigInstructions.value || "";
    if (instructions !== (campaignSettings().edit_instructions || "")) {
      try {
        await saveCampaignSettings({ edit_instructions: instructions });
      } catch (e) { /* best-effort */ }
    }
    closeExportConfig();
    startRun(cfg.mode, cfg.videoId, cfg.auto, { template });
  }

  async function startRun(mode, videoId, auto, extra) {
    if (!currentCampaignId) { toast("Open a campaign bay first.", "error"); go("dashboard"); return; }
    if (!videoId) { toast("Select a source video first.", "error"); go("overview"); return; }
    if (currentRun) { toast("A pipeline task is already active.", "error"); return; }
    if (dirty && !confirm("You have unsaved review decisions. Starting a new run may overwrite them. Continue?")) return;

    const settings = campaignSettings();
    if (mode === "export" || mode === "pipeline") {
      try {
        await apiPost("/api/music", {
          enabled: settings.music_enabled,
          volume: settings.music_volume,
          track: settings.music_track || "",
        });
      } catch (e) { /* best effort */ }
    }
    const body = Object.assign({
      mode, video: videoId,
      campaign_id: currentCampaignId,
      template: (els.templateSelect && els.templateSelect.value) || settings.default_template,
      min_score: parseFloat(els.minScore && els.minScore.value) || settings.min_score,
      max_clips: parseInt(els.maxClips && els.maxClips.value, 10) || settings.max_clips,
      auto: !!auto,
      skip_email: !!(extra && extra.skip_email),
    }, extra || {});
    clearLogs();
    try {
      const res = await apiPost("/api/run", body);
      currentRun = res.run;
      runningVideoId = videoId;
      setRunbar(true);
      updateProgress(0, "start");
      renderSourceBoard();
      poll(async (status) => {
        await refreshAfterRun();
        if (status === "ok") {
          if (mode === "analyze" || mode === "select") {
            const s = campaignSettings();
            if (extra && extra.local) {
              go("review");
            } else if (s.local_highlights === false || extra && extra.email) {
              go("review");
              openTranscriptModal(videoId);
            } else {
              go("review");
            }
          }
          else if (mode === "transcribe") {
            go("overview");
            toast("Transcript ready — find highlights or attach JSON.", "ok");
          }
          else if (mode === "export" || mode === "pipeline") go("exports");
          else if (mode === "explore-style") {
            go("exports");
            renderExploreControls();
            loadExploration(videoId);
          }
        }
      });
    } catch (e) {
      toast("Failed to start task: " + e.message, "error");
    }
  }

  function setRunbar(active) {
    els.runbar.hidden = !active;
    if (!active) els.logConsole.hidden = true;
  }

  function updateProgress(percent, stage) {
    const p = Math.max(0, Math.min(100, percent || 0));
    els.railFill.style.width = p + "%";
    els.percent.textContent = Math.round(p) + "%";
    els.stageName.textContent = LABELS[stage] || stage || "Working";
  }

  async function poll(onDone) {
    try {
      const r = await fetch("/api/run/" + currentRun + "?since=" + shownLogs);
      if (r.status === 404) {
        currentRun = null; runningVideoId = null; pollTimer = null; pollFailures = 0;
        setRunbar(false);
        toast("Run session ended.", "error");
        return;
      }
      if (!r.ok) throw new Error((await r.text()) || r.status);
      const run = await r.json();
      pollFailures = 0;
      updateProgress(run.percent, run.stage);
      els.runMsg.textContent = run.message || "";
      if (run.logs && run.logs.length) {
        appendLogs(run.logs, run.log_dropped || 0);
        shownLogs = run.log_index;
      }
      if (run.status === "ok" || run.status === "error" || run.status === "cancelled") {
        currentRun = null;
        runningVideoId = null;
        pollTimer = null;
        setRunbar(false);
        if (run.status === "ok") toast("Completed successfully.", "ok");
        else if (run.status === "error") toast("Run error: " + (run.error || "see logs"), "error");
        if (onDone) await onDone(run.status);
        return;
      }
      pollTimer = setTimeout(poll, 1200, onDone);
    } catch (e) {
      pollFailures += 1;
      if (pollFailures > 5) {
        currentRun = null;
        runningVideoId = null;
        setRunbar(false);
        toast("Connection to task lost.", "error");
        return;
      }
      pollTimer = setTimeout(poll, 2000, onDone);
    }
  }

  async function refreshCampaignData() {
    if (!currentCampaignId) return;
    currentCampaign = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId));
    await Promise.all([loadSources(), loadCandidates(), loadExports(), loadCampaigns()]);
    applyCampaignSettings();
    renderPage();
  }

  async function refreshAfterRun() {
    try {
      await loadState();
      await refreshCampaignData();
    } catch (e) { /* ignore */ }
  }

  function appendLogs(logs, dropped) {
    if (dropped > 0) {
      const note = document.createElement("div");
      note.className = "hl";
      note.textContent = `[trimmed ${dropped} earlier line(s)]`;
      els.logConsole.appendChild(note);
    }
    for (const line of logs) {
      const span = document.createElement("div");
      span.textContent = line;
      if (/error|traceback|failed|exception|cannot|not found/i.test(line)) span.className = "err";
      els.logConsole.appendChild(span);
    }
    while (els.logConsole.children.length > 1200) els.logConsole.removeChild(els.logConsole.firstChild);
    els.logConsole.scrollTop = els.logConsole.scrollHeight;
  }

  function clearLogs() {
    els.logConsole.innerHTML = "";
    shownLogs = 0;
  }

  function uploadFile(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/upload");
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const pct = Math.round((e.loaded / e.total) * 100);
          els.uploadFill.style.width = pct + "%";
          els.uploadPct.textContent = pct + "%";
        }
      };
      xhr.onload = () => {
        let data = null;
        try { data = JSON.parse(xhr.responseText); } catch (e) { /* not json */ }
        if (xhr.status >= 200 && xhr.status < 300) resolve(data);
        else reject(new Error((data && data.error) || xhr.responseText || xhr.status));
      };
      xhr.onerror = () => reject(new Error("Network error during upload."));
      const fd = new FormData();
      fd.append("file", file);
      if (currentCampaignId) fd.append("campaign_id", currentCampaignId);
      xhr.send(fd);
    });
  }

  async function loadState() {
    state = await apiGet("/api/state" + campQ());
    if (els.modelChip) {
      const textEl = els.modelChip.querySelector(".engine-text") || els.modelChip;
      textEl.textContent = state.config.llm_model + " · " + state.config.whisper_model;
    }
    renderStyleVideoSelect();
    renderTemplates();
    renderTelegramStatus();
  }

  function renderTelegramStatus() {
    if (!els.telegramStatus) return;
    const tg = state && state.telegram;
    if (!tg || !tg.enabled) {
      els.telegramStatus.textContent = "Telegram: disabled (telegram.enabled=false in config.json).";
    } else if (tg.configured) {
      els.telegramStatus.textContent = "Telegram: configured — pipeline alerts notify your chat.";
    } else {
      els.telegramStatus.textContent = "Telegram: not configured — set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.";
    }
  }

  function renderStyleVideoSelect() {
    if (!els.styleVideoSelect) return;
    const vids = (state && state.videos) || [];
    els.styleVideoSelect.innerHTML = vids.length
      ? vids.map((v) => `<option value="${escapeHtml(v.id)}">${escapeHtml(v.name)}</option>`).join("")
      : `<option value="">No videos available</option>`;
  }

  function applyCampaignSettings() {
    const s = campaignSettings();
    if (els.minScore && s.min_score != null) els.minScore.value = s.min_score;
    if (els.maxClips && s.max_clips != null) els.maxClips.value = s.max_clips;
    if (els.musicEnabled) els.musicEnabled.checked = !!s.music_enabled;
    if (els.musicVolume && s.music_volume != null) els.musicVolume.value = s.music_volume;
    if (els.styleBrief) els.styleBrief.value = s.style_brief || "";
    if (els.editInstructions) els.editInstructions.value = s.edit_instructions || "";
    renderTemplates();
  }

  function scheduleSettingsSave() {
    clearTimeout(settingsTimer);
    settingsTimer = setTimeout(saveCampaignSettings, 400);
  }

  async function saveCampaignSettings(extra) {
    if (!currentCampaignId) return;
    const settings = Object.assign({
      min_score: parseFloat(els.minScore.value),
      max_clips: parseInt(els.maxClips.value, 10),
      local_highlights: !!(currentCampaign && currentCampaign.settings && currentCampaign.settings.local_highlights),
      default_template: els.templateSelect.value,
      music_enabled: els.musicEnabled.checked,
      music_track: els.musicTrack.value,
      music_volume: parseFloat(els.musicVolume.value),
      style_brief: els.styleBrief ? els.styleBrief.value : "",
      edit_instructions: els.editInstructions ? els.editInstructions.value : "",
    }, extra || {});
    try {
      currentCampaign = await apiPatch(
        "/api/campaigns/" + encodeURIComponent(currentCampaignId),
        { settings }
      );
      try {
        await apiPost("/api/music", {
          enabled: settings.music_enabled,
          volume: settings.music_volume,
          track: settings.music_track,
        });
      } catch (e) { /* best effort */ }
    } catch (e) {
      toast("Could not save settings: " + e.message, "error");
    }
  }

  function styleVideoId() {
    return els.styleVideoSelect.value;
  }

  async function refreshStyleState() {
    const id = styleVideoId();
    if (!id) { els.btnAnalyzeStyle.disabled = true; return; }
    try {
      const r = await apiGet("/api/frames" + campQ());
      const set = r.frame_sets.find((s) => s.stem === id);
      const hasFrames = !!(set && set.frames);
      els.btnAnalyzeStyle.disabled = !hasFrames;
      els.styleState.textContent = hasFrames
        ? `${set.frames} frame(s) extracted (${set.mode || "uniform"} mode).`
        : "No frames extracted yet.";
      renderStyleSheets(set);
      if (set && set.has_report) {
        await loadStyleReport(id);
      }
    } catch (e) { /* frames api unavailable */ }
  }

  function renderStyleSheets(set) {
    els.styleSheets.innerHTML = "";
    if (!set || !set.sheets || !set.sheets.length) {
      els.styleSheets.innerHTML = `<div class="empty" style="grid-column:1/-1">Extract frames with a contact sheet to view layout breakdown.</div>`;
      return;
    }
    for (const sheet of set.sheets) {
      const card = document.createElement("div");
      card.className = "card style-sheet-card";
      const q = campQ();
      const join = q ? "&" : "?";
      card.innerHTML =
        `<img src="/api/frames/${encodeURIComponent(set.stem)}/media${q}${join}file=${encodeURIComponent(sheet)}" alt="Contact sheet preview">`;
      els.styleSheets.appendChild(card);
    }
  }

  async function loadStyleReport(stem) {
    try {
      const r = await apiGet("/api/frames/" + encodeURIComponent(stem) + "/style" + campQ());
      const rep = r.report || {};
      const row = (label, val) => `<div class="style-row"><span>${label}</span><b>${val || "—"}</b></div>`;
      const saved = r.template
        ? `<p class="hint ok-note">✓ Draft template saved to campaign.</p>`
        : "";
      els.styleReport.innerHTML =
        `<p class="hint">Analyzed ${rep.frames_analyzed || 0} frames of <b>${escapeHtml(rep.stem || stem)}</b>.</p>` +
        row("Layout", rep.layout) +
        row("Band Fill", rep.band_fill_median ? Math.round(rep.band_fill_median * 100) + "%" : null) +
        row("Hook Color", (rep.hook || {}).median_hex) +
        row("Caption Color", (rep.captions || {}).median_hex) +
        row("Keyword Color", (rep.captions || {}).keyword_hex) +
        row("CTA Color", (rep.cta || {}).median_hex) +
        saved;
    } catch (e) {
      els.styleReport.innerHTML = `<p class="hint">No analysis generated yet.</p>`;
    }
  }

  async function startStyleRun(mode, id) {
    const body = {
      mode, video: id,
      campaign_id: currentCampaignId,
      frames_mode: els.framesMode.value,
      num: parseInt(els.framesNum.value) || 12,
      grid: els.framesGrid.value || undefined,
      name: id + "_style",
    };
    clearLogs();
    try {
      const res = await apiPost("/api/run", body);
      currentRun = res.run;
      runningVideoId = id;
      setRunbar(true);
      updateProgress(0, "start");
      poll(() => { refreshStyleState(); loadState(); });
    } catch (e) {
      toast("Failed to start: " + e.message, "error");
    }
  }

  function goldenTemplates() {
    const tpls = (state && state.templates) || [];
    const gold = tpls.filter((t) => t.golden);
    return gold.length ? gold : tpls.slice(0, 4);
  }

  function renderSettingsExport() {
    if (!els.settingsExportSelect) return;
    const ready = candidateGroups.filter((g) =>
      (g.clips || []).some((c) => c.status === "approved"));
    const prev = els.settingsExportSelect.value;
    els.settingsExportSelect.innerHTML = ready.length
      ? ready.map((g) => {
          const approved = (g.clips || []).filter((c) => c.status === "approved").length;
          return `<option value="${escapeHtml(g.source_id)}">` +
            `${escapeHtml(g.source_name || g.source_id)} (${approved} approved)</option>`;
        }).join("")
      : `<option value="">Nothing approved yet</option>`;
    if (prev && ready.some((g) => g.source_id === prev)) {
      els.settingsExportSelect.value = prev;
    }
    const canExport = ready.length > 0 && !currentRun;
    els.btnSettingsExport.disabled = !canExport;
    els.settingsExportHint.textContent = !ready.length
      ? "Nothing approved yet — approve clips on the Review page first."
      : `Ready to render ${ready.length} source video${ready.length === 1 ? "" : "s"} with approved clips.`;
  }

  function renderTemplates() {
    if (!els.templateSelect) return;
    const tpls = goldenTemplates();
    const settings = campaignSettings();
    const prev = els.templateSelect.value || settings.default_template;
    els.templateSelect.innerHTML = tpls.map((t) =>
      `<option value="${escapeHtml(t.name)}">${escapeHtml(t.label || t.name)}</option>`).join("");
    const names = tpls.map((t) => t.name);
    if (prev && names.includes(prev)) {
      els.templateSelect.value = prev;
    } else if (state && state.config && names.includes(state.config.default_template)) {
      els.templateSelect.value = state.config.default_template;
    } else if (tpls.length) {
      els.templateSelect.value = tpls[0].name;
    }
    if (els.goldenStyles) {
      els.goldenStyles.innerHTML = "";
      tpls.forEach((t) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "golden-style" + (t.name === els.templateSelect.value ? " on" : "");
        btn.innerHTML = `${svgIcon("layers")} <span>${escapeHtml(t.label || t.name)}</span>`;
        btn.addEventListener("click", () => {
          els.templateSelect.value = t.name;
          if (els.goldenStyles) {
            els.goldenStyles.querySelectorAll(".golden-style").forEach((el, i) => {
              el.classList.toggle("on", tpls[i] && tpls[i].name === t.name);
            });
          }
          updateTemplateDesc();
          saveCampaignSettings({ default_template: t.name });
        });
        els.goldenStyles.appendChild(btn);
      });
    }
    updateTemplateDesc();
  }

  function updateTemplateDesc() {
    const tpls = (state && state.templates) || [];
    const t = tpls.find((x) => x.name === els.templateSelect.value);
    if (els.templateDesc) els.templateDesc.textContent = t ? (t.description || "") : "";
  }

  const RULE_SECTIONS = [
    { key: "content_criteria", label: "Content Criteria", kind: "list", cls: "" },
    { key: "brand_safety", label: "Brand Safety", kind: "list", cls: "rules-sec-safety" },
    { key: "editing_style", label: "Editing Style", kind: "list", cls: "" },
    { key: "submission_requirements", label: "Submission Requirements", kind: "text", cls: "rules-sec-submit" },
  ];

  function emptyRules() {
    return {
      content_criteria: [],
      brand_safety: [],
      editing_style: [],
      submission_requirements: "",
      submission_done: false,
    };
  }

  function campaignRules() {
    const raw = currentCampaign && currentCampaign.rules_summary;
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      return Object.assign(emptyRules(), raw);
    }
    if (typeof raw === "string" && raw.trim()) {
      return Object.assign(emptyRules(), {
        content_criteria: raw.split("\n").map((s) => s.replace(/^[-•*]\s*/, "").trim()).filter(Boolean),
      });
    }
    return emptyRules();
  }

  function hasRulesContent(rules) {
    if (!rules) return false;
    if ((rules.content_criteria || []).length) return true;
    if ((rules.brand_safety || []).length) return true;
    if ((rules.editing_style || []).length) return true;
    if ((rules.submission_requirements || "").trim()) return true;
    return !!(currentCampaign && currentCampaign.rules_full);
  }

  function renderRules() {
    if (!els.rulesEmpty) return;
    const rules = campaignRules();
    const has = hasRulesContent(rules);
    els.rulesEmpty.hidden = has;
    els.rulesFilled.hidden = !has;
    if (!has) return;
    els.rulesSections.innerHTML = "";
    for (const sec of RULE_SECTIONS) {
      els.rulesSections.appendChild(rulesSectionEl(sec, rules));
    }
    if (currentCampaign && currentCampaign.rules_full) {
      els.btnViewFullRules.hidden = false;
      els.btnViewFullRules.href = "/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/rules/file";
    } else {
      els.btnViewFullRules.hidden = true;
    }
  }

  function refreshRulesPanels() {
    renderRules();
    renderOverviewRules();
  }

  function rulesSectionEl(sec, rules) {
    const wrap = document.createElement("div");
    wrap.className = "rules-sec " + (sec.cls || "");
    const head = document.createElement("div");
    head.className = "rules-sec-head";
    const title = document.createElement("h4");
    title.textContent = (sec.key === "brand_safety" ? "⚠ " : "") + sec.label;
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "link";
    editBtn.textContent = "Edit";
    head.appendChild(title);
    head.appendChild(editBtn);
    wrap.appendChild(head);

    const view = document.createElement("div");
    view.className = "rules-sec-view";
    const editor = document.createElement("div");
    editor.className = "rules-sec-edit";
    editor.hidden = true;

    const ta = document.createElement("textarea");
    ta.className = "rules-input";
    ta.rows = sec.kind === "text" ? 4 : 5;
    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "btn btn-small btn-primary";
    saveBtn.textContent = "Save";
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "btn btn-small btn-ghost";
    cancelBtn.textContent = "Cancel";
    const actions = document.createElement("div");
    actions.className = "rules-actions";
    actions.appendChild(saveBtn);
    actions.appendChild(cancelBtn);
    editor.appendChild(ta);
    editor.appendChild(actions);

    function fillView() {
      view.innerHTML = "";
      if (sec.kind === "list") {
        const items = rules[sec.key] || [];
        if (!items.length) {
          view.innerHTML = `<p class="hint">None listed.</p>`;
        } else {
          const ul = document.createElement("ul");
          ul.className = "rules-bullets";
          for (const item of items) {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
          }
          view.appendChild(ul);
        }
      } else {
        const text = (rules.submission_requirements || "").trim();
        const p = document.createElement("p");
        p.className = "rules-submit-text";
        p.textContent = text || "No submission obligations specified.";
        view.appendChild(p);
        const toggle = document.createElement("label");
        toggle.className = "toggle-row";
        toggle.innerHTML = `<input type="checkbox"${rules.submission_done ? " checked" : ""}><span>Marked Submitted</span>`;
        toggle.querySelector("input").addEventListener("change", async (ev) => {
          try {
            const r = await apiPatch(
              "/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/rules",
              { section: "submission_done", value: ev.target.checked }
            );
            currentCampaign.rules_summary = r.rules_summary;
            refreshRulesPanels();
          } catch (e) {
            toast("Could not update: " + e.message, "error");
            ev.target.checked = !ev.target.checked;
          }
        });
        view.appendChild(toggle);
      }
    }

    fillView();
    editBtn.addEventListener("click", () => {
      const val = sec.kind === "list"
        ? (rules[sec.key] || []).join("\n")
        : (rules.submission_requirements || "");
      ta.value = val;
      view.hidden = true;
      editor.hidden = false;
      editBtn.hidden = true;
      ta.focus();
    });
    cancelBtn.addEventListener("click", () => {
      editor.hidden = true;
      view.hidden = false;
      editBtn.hidden = false;
    });
    saveBtn.addEventListener("click", async () => {
      const value = sec.kind === "list"
        ? ta.value.split("\n").map((s) => s.replace(/^[-•*]\s*/, "").trim()).filter(Boolean)
        : ta.value;
      try {
        const r = await apiPatch(
          "/api/campaigns/" + encodeURIComponent(currentCampaignId) + "/rules",
          { section: sec.key, value }
        );
        currentCampaign.rules_summary = r.rules_summary;
        refreshRulesPanels();
        toast("Saved " + sec.label + ".", "ok");
      } catch (e) {
        toast("Could not save: " + e.message, "error");
      }
    });

    wrap.appendChild(view);
    wrap.appendChild(editor);
    return wrap;
  }

  // --- Event Bindings ----------------------------------------------------- //
  if (els.styleVideoSelect) els.styleVideoSelect.addEventListener("change", refreshStyleState);
  if (els.btnExtractFrames) {
    els.btnExtractFrames.addEventListener("click", () => {
      const id = styleVideoId();
      if (!id) { toast("Select a reference video first.", "error"); return; }
      startStyleRun("frames", id);
    });
  }
  if (els.btnAnalyzeStyle) {
    els.btnAnalyzeStyle.addEventListener("click", () => {
      const id = styleVideoId();
      if (!id) { toast("Select a reference video first.", "error"); return; }
      startStyleRun("style", id);
    });
  }

  if (els.templateSelect) {
    els.templateSelect.addEventListener("change", () => {
      updateTemplateDesc();
      saveCampaignSettings();
    });
  }

  if (els.highlightToggle) {
    els.highlightToggle.querySelectorAll(".seg").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const isLocal = btn.dataset.mode === "local";
        await saveCampaignSettings({ local_highlights: isLocal });
        renderHighlightToggle();
      });
    });
  }

  if (els.btnDeleteCampaign) {
    els.btnDeleteCampaign.addEventListener("click", deleteCampaign);
  }

  if (els.minScore) els.minScore.addEventListener("change", scheduleSettingsSave);
  if (els.maxClips) els.maxClips.addEventListener("change", scheduleSettingsSave);
  if (els.styleBrief) {
    els.styleBrief.addEventListener("change", scheduleSettingsSave);
    els.styleBrief.addEventListener("blur", scheduleSettingsSave);
  }
  if (els.exploreVideoSelect) {
    els.exploreVideoSelect.addEventListener("change", () => {
      const id = els.exploreVideoSelect.value;
      if (id) loadExploration(id);
    });
  }
  if (els.btnExploreStyles) {
    els.btnExploreStyles.addEventListener("click", () => {
      const id = els.exploreVideoSelect.value;
      if (!id) return;
      startRun("explore-style", id, false, {
        variants: parseInt(els.exploreVariants.value, 10) || undefined,
      });
    });
  }
  if (els.exportConfigCancel) els.exportConfigCancel.addEventListener("click", closeExportConfig);
  if (els.exportConfigClose) els.exportConfigClose.addEventListener("click", closeExportConfig);
  if (els.exportConfigStart) els.exportConfigStart.addEventListener("click", confirmExportConfig);
  if (els.btnSettingsExport) {
    els.btnSettingsExport.addEventListener("click", () => {
      const id = els.settingsExportSelect.value;
      if (!id) { toast("Nothing approved yet.", "error"); return; }
      openExportConfig("export", id, false);
    });
  }
  if (els.exportConfigModal) {
    els.exportConfigModal.addEventListener("click", (e) => {
      if (e.target === els.exportConfigModal) closeExportConfig();
    });
  }
  if (els.editInstructions) {
    els.editInstructions.addEventListener("change", scheduleSettingsSave);
    els.editInstructions.addEventListener("blur", scheduleSettingsSave);
  }

  if (els.btnCancel) {
    els.btnCancel.addEventListener("click", async () => {
      if (!currentRun) return;
      try {
        await fetch("/api/run/" + currentRun + "/cancel", { method: "POST" });
        toast("Cancelling task…");
      } catch (e) {
        toast("Couldn't reach backend to cancel.", "error");
      }
    });
  }

  if (els.logToggle) {
    els.logToggle.addEventListener("click", () => {
      els.logConsole.hidden = !els.logConsole.hidden;
      els.logToggle.innerHTML = `${svgIcon("terminal")} <span>${els.logConsole.hidden ? "Logs" : "Hide Logs"}</span>`;
    });
  }

  if (els.btnApproveAll) {
    els.btnApproveAll.addEventListener("click", () => {
      for (const c of allClips()) c.status = "approved";
      dirty = true;
      renderReview();
    });
  }

  if (els.btnSaveReview) {
    els.btnSaveReview.addEventListener("click", async () => {
      const groups = candidateGroups.filter((g) => g.clips && g.clips.length);
      if (!groups.length) return;
      try {
        for (const g of groups) {
          await apiPost("/api/candidates", {
            video_id: g.video_id || g.source_id,
            clips: g.clips,
            campaign_id: currentCampaignId,
          });
        }
        dirty = false;
        updateReviewHint();
        toast("Review decisions saved.", "ok");
        await refreshCampaignData();
        go("settings");
      } catch (e) {
        toast("Save failed: " + e.message, "error");
      }
    });
  }

  if (els.musicEnabled) els.musicEnabled.addEventListener("change", () => saveCampaignSettings());
  if (els.musicVolume) els.musicVolume.addEventListener("change", () => saveCampaignSettings());
  if (els.musicTrack) els.musicTrack.addEventListener("change", () => saveCampaignSettings());

  if (els.musicInput) {
    els.musicInput.addEventListener("change", async () => {
      const file = els.musicInput.files[0];
      if (!file) return;
      const fd = new FormData();
      fd.append("file", file);
      try {
        const r = await fetch("/api/music/upload", { method: "POST", body: fd });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || r.status);
        toast("Added track " + data.name + ".", "ok");
        await loadMusic();
      } catch (e) {
        toast("Upload failed: " + e.message, "error");
      } finally {
        els.musicInput.value = "";
      }
    });
  }

  if (els.btnOpenFolder) {
    els.btnOpenFolder.addEventListener("click", async () => {
      const dir = state ? state.config.output_dir : "";
      try {
        await fetch("/api/open-folder" + campQ() + (campQ() ? "&" : "?") + "dir=output", { method: "POST" });
      } catch (e) {
        toast("Output folder: " + dir);
        if (navigator.clipboard) navigator.clipboard.writeText(dir).catch(() => {});
      }
    });
  }

  let activeDownloadTaskId = null;

  function updateDownloadProgress(d) {
    if (!els.urlProgress) return;
    els.urlProgress.hidden = false;
    if (d.title && els.urlProgressTitle) {
      els.urlProgressTitle.textContent = d.title;
    }
    if (els.urlProgressSpeed) {
      els.urlProgressSpeed.textContent = d.speed ? (d.speed + (d.eta ? " · ETA " + d.eta : "")) : "";
    }
    const pct = Math.round(d.percent || 0);
    if (els.urlProgressPct) els.urlProgressPct.textContent = pct + "%";
    if (els.urlProgressFill) els.urlProgressFill.style.width = pct + "%";
  }

  function handleDownloadError(d) {
    if (els.btnImportUrl) els.btnImportUrl.disabled = false;
    toast("Download error: " + (d.error || "Failed to download video"), "error");
    if (els.urlProgress) {
      setTimeout(() => { els.urlProgress.hidden = true; }, 3000);
    }
    activeDownloadTaskId = null;
  }

  async function importVideoFromUrl() {
    if (!els.urlInput) return;
    const url = els.urlInput.value.trim();
    if (!url) {
      toast("Please enter a video URL (YouTube, Shorts, etc.)", "error");
      els.urlInput.focus();
      return;
    }
    if (!/^https?:\/\//i.test(url)) {
      toast("URL must start with http:// or https://", "error");
      els.urlInput.focus();
      return;
    }

    if (els.btnImportUrl) els.btnImportUrl.disabled = true;
    if (els.urlProgress) {
      els.urlProgress.hidden = false;
      if (els.urlProgressTitle) els.urlProgressTitle.textContent = "Connecting to video source...";
      if (els.urlProgressSpeed) els.urlProgressSpeed.textContent = "";
      if (els.urlProgressPct) els.urlProgressPct.textContent = "0%";
      if (els.urlProgressFill) els.urlProgressFill.style.width = "0%";
    }

    try {
      const res = await apiPost("/api/import-url", {
        url: url,
        campaign_id: currentCampaignId || null,
      });

      if (res.error) {
        throw new Error(res.error);
      }

      activeDownloadTaskId = res.task_id;
      toast("Started downloading video...", "info");

      const pollInterval = setInterval(async () => {
        if (!activeDownloadTaskId) {
          clearInterval(pollInterval);
          return;
        }
        try {
          const st = await apiGet("/api/import-url/" + activeDownloadTaskId);
          if (st) {
            updateDownloadProgress(st);
            if (st.status === "finished") {
              clearInterval(pollInterval);
              activeDownloadTaskId = null;
              if (els.urlProgressPct) els.urlProgressPct.textContent = "100%";
              if (els.urlProgressFill) els.urlProgressFill.style.width = "100%";
              if (els.urlProgressTitle) els.urlProgressTitle.textContent = "Done: " + (st.title || st.filename);
              if (els.btnImportUrl) els.btnImportUrl.disabled = false;
              els.urlInput.value = "";
              await loadState();
              await refreshCampaignData();
              toast("Imported: " + (st.title || st.filename), "ok");
              setTimeout(() => { if (els.urlProgress) els.urlProgress.hidden = true; }, 2000);
            } else if (st.status === "error") {
              clearInterval(pollInterval);
              handleDownloadError(st);
            }
          }
        } catch (e) {
          /* ignore poll errors */
        }
      }, 1000);

    } catch (e) {
      if (els.btnImportUrl) els.btnImportUrl.disabled = false;
      toast("Import failed: " + e.message, "error");
      if (els.urlProgress) {
        setTimeout(() => { els.urlProgress.hidden = true; }, 2500);
      }
    }
  }

  if (els.btnImportUrl) {
    els.btnImportUrl.addEventListener("click", importVideoFromUrl);
  }

  if (els.urlInput) {
    els.urlInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        importVideoFromUrl();
      }
    });
  }

  if (els.fileInput) {
    els.fileInput.addEventListener("change", async () => {
      const file = els.fileInput.files[0];
      if (!file) return;
      els.uploadProgress.hidden = false;
      els.uploadFill.style.width = "0%";
      els.uploadPct.textContent = "0%";
      try {
        const res = await uploadFile(file);
        els.uploadFill.style.width = "100%";
        els.uploadPct.textContent = "100%";
        await loadState();
        await refreshCampaignData();
        toast("Uploaded " + res.name + ".", "ok");
      } catch (e) {
        toast("Upload failed: " + e.message, "error");
      } finally {
        els.fileInput.value = "";
        setTimeout(() => { els.uploadProgress.hidden = true; }, 1200);
      }
    });
  }

  if (els.campBriefInput) {
    els.campBriefInput.addEventListener("change", () => {
      const file = els.campBriefInput.files[0];
      els.briefAttach.classList.toggle("has", !!file);
      els.briefAttachLabel.textContent = file ? file.name : "Attach Brief";
      els.briefAttach.title = file
        ? file.name + " — Attached to new campaign"
        : "Attach creator brief (pdf, docx, txt, md)";
    });
  }

  async function uploadBriefFile(campaignId, file) {
    const fd = new FormData();
    fd.append("file", file);
    toast("Parsing and condensing brief…");
    const r = await fetch("/api/campaigns/" + encodeURIComponent(campaignId) + "/rules", {
      method: "POST", body: fd,
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || r.status);
    return data;
  }

  if (els.newCampaignForm) {
    els.newCampaignForm.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const name = els.campName.value.trim();
      if (!name) return;
      const briefFile = els.campBriefInput.files[0];
      try {
        const camp = await apiPost("/api/campaigns", { name });
        if (briefFile) {
          try {
            await uploadBriefFile(camp.id, briefFile);
          } catch (e) {
            toast("Brief attachment error: " + e.message, "error");
          }
        }
        els.newCampaignForm.reset();
        els.briefAttach.classList.remove("has");
        els.briefAttachLabel.textContent = "Attach Brief";
        await loadCampaigns();
        toast("Campaign bay created.", "ok");
        go("overview", camp.id);
      } catch (e) {
        toast("Could not create campaign: " + e.message, "error");
      }
    });
  }

  if (els.bellBtn) {
    els.bellBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      els.bellDropdown.hidden = !els.bellDropdown.hidden;
    });
  }
  document.addEventListener("click", (ev) => {
    if (els.bellDropdown && !els.bellDropdown.hidden && !els.bellDropdown.contains(ev.target)) {
      els.bellDropdown.hidden = true;
    }
  });
  if (els.bellClear) {
    els.bellClear.addEventListener("click", () => {
      notifications = [];
      renderNotifications();
    });
  }
  if (els.transcriptFind) {
    els.transcriptFind.addEventListener("click", () => {
      if (!transcriptModalVideoId) return;
      const videoId = transcriptModalVideoId;
      closeTranscriptModal();
      startRun("select", videoId, false, { local: true });
    });
  }
  if (els.transcriptCopy) {
    els.transcriptCopy.addEventListener("click", async () => {
      const body = els.transcriptBody.textContent || "";
      if (!body || body === "Loading transcript…" || body === "No transcript available.") {
        toast("Nothing to copy yet.", "error");
        return;
      }
      try {
        await navigator.clipboard.writeText(body);
        toast("Transcript text copied.", "ok");
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = body;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); toast("Transcript copied.", "ok"); }
        catch (err) { toast("Copy failed: " + err.message, "error"); }
        document.body.removeChild(ta);
      }
    });
  }
  if (els.transcriptClose) els.transcriptClose.addEventListener("click", closeTranscriptModal);
  if (els.transcriptModal) {
    els.transcriptModal.addEventListener("click", (ev) => {
      if (ev.target === els.transcriptModal) closeTranscriptModal();
    });
  }
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && els.transcriptModal && !els.transcriptModal.hidden) closeTranscriptModal();
    if (ev.key === "Escape" && els.exportConfigModal && !els.exportConfigModal.hidden) closeExportConfig();
    if (ev.key === "Escape" && els.visualCanvasModal && !els.visualCanvasModal.hidden) els.visualCanvasModal.hidden = true;
  });

  if (els.rulesInput) {
    els.rulesInput.addEventListener("change", async () => {
      const file = els.rulesInput.files[0];
      if (!file || !currentCampaignId) return;
      try {
        const data = await uploadBriefFile(currentCampaignId, file);
        currentCampaign = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId));
        renderRules();
        if (data.warning) toast(data.warning, "error");
        else toast("Brief updated.", "ok");
      } catch (e) {
        toast("Rules upload failed: " + e.message, "error");
      } finally {
        els.rulesInput.value = "";
      }
    });
  }

  if (els.ovRulesInput) {
    els.ovRulesInput.addEventListener("change", async () => {
      const file = els.ovRulesInput.files[0];
      if (!file || !currentCampaignId) return;
      try {
        const data = await uploadBriefFile(currentCampaignId, file);
        currentCampaign = await apiGet("/api/campaigns/" + encodeURIComponent(currentCampaignId));
        renderOverviewRules();
        if (data.warning) toast(data.warning, "error");
        else toast("Brief updated.", "ok");
      } catch (e) {
        toast("Brief upload failed: " + e.message, "error");
      } finally {
        els.ovRulesInput.value = "";
      }
    });
  }

  async function loadMusic() {
    try {
      const m = await apiGet("/api/music");
      const s = campaignSettings();
      if (els.musicEnabled) els.musicEnabled.checked = s.music_enabled != null ? !!s.music_enabled : !!m.enabled;
      if (els.musicVolume) els.musicVolume.value = s.music_volume != null ? s.music_volume : m.volume;
      if (els.musicTrack) {
        els.musicTrack.innerHTML =
          `<option value="">Auto (Rotate Track per Clip)</option>` +
          m.tracks.map((t) =>
            `<option value="${escapeHtml(t)}" title="${escapeHtml(t)}">${escapeHtml(t)}</option>`
          ).join("");
        els.musicTrack.value = s.music_track || m.track || "";
      }
    } catch (e) { /* optional */ }
  }

  async function boot() {
    try {
      await loadCampaigns();
      if (els.serverStatus) {
        els.serverStatus.classList.add("online");
        els.serverStatusText.textContent = "Online";
      }
      const parsed = parseHash();
      if (parsed.campaignId) {
        await openCampaign(parsed.campaignId, { silent: true });
      } else {
        if (els.modelChip) {
          const textEl = els.modelChip.querySelector(".engine-text") || els.modelChip;
          textEl.textContent = "ClipForge Studio";
        }
      }
      await loadMusic();
    } catch (e) {
      if (els.serverStatus) {
        els.serverStatus.classList.add("error");
        els.serverStatusText.textContent = "Offline";
      }
      toast("Backend server offline. Run server.py to start.", "error");
    }
    initCanvasInteractions();
    renderPage();
    ensureNotifyPermission();
    renderNotifications();
    pollEvents();
  }

  boot();
})();

