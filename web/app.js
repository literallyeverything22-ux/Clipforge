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
    canvasBackBtn: $("#canvasBackBtn"),
    canvasSavePresetBtn: $("#canvasSavePresetBtn"),
    canvasDoneTopBtn: $("#canvasDoneTopBtn"),
    canvasClose: $("#canvasClose"),
    canvasChangeClipBtn: $("#canvasChangeClipBtn"),
    canvasClipThumb: $("#canvasClipThumb"),
    canvasClipThumbFallback: $("#canvasClipThumbFallback"),
    canvasClipTitle: $("#canvasClipTitle"),
    canvasClipSpeaker: $("#canvasClipSpeaker"),
    canvasClipDuration: $("#canvasClipDuration"),
    layerItemHook: $("#layerItemHook"),
    layerItemCaption: $("#layerItemCaption"),
    layerTextHook: $("#layerTextHook"),
    layerTextCaption: $("#layerTextCaption"),
    layerVisHook: $("#layerVisHook"),
    layerVisCaption: $("#layerVisCaption"),
    canvasCopyStyleBtn: $("#canvasCopyStyleBtn"),
    canvasCopyAllBtn: $("#canvasCopyAllBtn"),
    canvasResetCanvasBtn: $("#canvasResetCanvasBtn"),
    canvasRefreshFrame: $("#canvasRefreshFrame"),
    canvasSingleLineToggle: $("#canvasSingleLineToggle"),
    canvasSafeToggle: $("#canvasSafeToggle"),
    canvasZoomIn: $("#canvasZoomIn"),
    canvasZoomOut: $("#canvasZoomOut"),
    canvasZoomFit: $("#canvasZoomFit"),
    canvasZoomReset: $("#canvasZoomReset"),
    canvasContainer: $("#canvasContainer"),
    canvasBgImg: $("#canvasBgImg"),
    canvasBgFallback: $("#canvasBgFallback"),
    canvasSafeGuides: $("#canvasSafeGuides"),
    canvasSafeWarning: $("#canvasSafeWarning"),
    canvasMicroToolbar: $("#canvasMicroToolbar"),
    microAa: $("#microAa"),
    microSizeMinus: $("#microSizeMinus"),
    microSizeVal: $("#microSizeVal"),
    microSizePlus: $("#microSizePlus"),
    microAlign: $("#microAlign"),
    microMore: $("#microMore"),
    canvasHookBox: $("#canvasHookBox"),
    canvasHookText: $("#canvasHookText"),
    canvasHookPosBadge: $("#canvasHookPosBadge"),
    canvasCaptionBox: $("#canvasCaptionBox"),
    canvasCaptionText: $("#canvasCaptionText"),
    canvasCaptionPosBadge: $("#canvasCaptionPosBadge"),
    canvasCtaBox: $("#canvasCtaBox"),
    canvasCtaText: $("#canvasCtaText"),
    canvasCtaPosBadge: $("#canvasCtaPosBadge"),
    canvasPlayBtn: $("#canvasPlayBtn"),
    canvasTimeDisplay: $("#canvasTimeDisplay"),
    canvasTimelineSlider: $("#canvasTimelineSlider"),
    canvasDurationBadge: $("#canvasDurationBadge"),
    canvasFilmstripTrack: $("#canvasFilmstripTrack"),
    filmstripPrev: $("#filmstripPrev"),
    filmstripNext: $("#filmstripNext"),
    stylePresetsGrid: $("#stylePresetsGrid"),
    presetsViewAllBtn: $("#presetsViewAllBtn"),
    presetFilterPills: $("#presetFilterPills"),
    quickStartModal: $("#quickStartModal"),
    quickStartCloseBtn: $("#quickStartCloseBtn"),
    modalPresetFilterPills: $("#modalPresetFilterPills"),
    quickStartModalGrid: $("#quickStartModalGrid"),
    inspectorContextSection: $("#inspectorContextSection"),
    inspectorTargetBadge: $("#inspectorTargetBadge"),
    inspectorHookBlock: $("#inspectorHookBlock"),
    inspectorCaptionBlock: $("#inspectorCaptionBlock"),
    hookCharCount: $("#hookCharCount"),
    captionCharCount: $("#captionCharCount"),
    canvasHookTextInput: $("#canvasHookTextInput"),
    canvasCaptionTextInput: $("#canvasCaptionTextInput"),
    canvasFontSelect: $("#canvasFontSelect"),
    canvasWeightSelect: $("#canvasWeightSelect"),
    canvasHookSizeSlider: $("#canvasHookSizeSlider"),
    canvasHookSizeVal: $("#canvasHookSizeVal"),
    canvasTextColor: $("#canvasTextColor"),
    canvasOutlineColor: $("#canvasOutlineColor"),
    canvasHighlightColor: $("#canvasHighlightColor"),
    canvasOutlineWidthSlider: $("#canvasOutlineWidthSlider"),
    canvasOutlineWidthVal: $("#canvasOutlineWidthVal"),
    canvasLetterSpacingSlider: $("#canvasLetterSpacingSlider"),
    canvasLetterSpacingVal: $("#canvasLetterSpacingVal"),
    canvasLineHeightSlider: $("#canvasLineHeightSlider"),
    canvasLineHeightVal: $("#canvasLineHeightVal"),
    canvasHookSingleLineCheck: $("#canvasHookSingleLineCheck"),
    hookAdvancedToggle: $("#hookAdvancedToggle"),
    hookAdvancedDrawer: $("#hookAdvancedDrawer"),
    canvasBoxBgToggle: $("#canvasBoxBgToggle"),
    canvasBoxBgColor: $("#canvasBoxBgColor"),
    canvasCapFontSelect: $("#canvasCapFontSelect"),
    canvasCapWeightSelect: $("#canvasCapWeightSelect"),
    canvasCaptionSizeSlider: $("#canvasCaptionSizeSlider"),
    canvasCaptionSizeVal: $("#canvasCaptionSizeVal"),
    canvasCapTextColor: $("#canvasCapTextColor"),
    canvasCapHighlightColor: $("#canvasCapHighlightColor"),
    canvasCapOutlineColor: $("#canvasCapOutlineColor"),
    canvasCapOutlineWidthSlider: $("#canvasCapOutlineWidthSlider"),
    canvasCapOutlineWidthVal: $("#canvasCapOutlineWidthVal"),
    canvasCapLetterSpacingSlider: $("#canvasCapLetterSpacingSlider"),
    canvasCapLetterSpacingVal: $("#canvasCapLetterSpacingVal"),
    canvasCapLineHeightSlider: $("#canvasCapLineHeightSlider"),
    canvasCapLineHeightVal: $("#canvasCapLineHeightVal"),
    canvasCapSingleLineCheck: $("#canvasCapSingleLineCheck"),
    capAdvancedToggle: $("#capAdvancedToggle"),
    capAdvancedDrawer: $("#capAdvancedDrawer"),
    canvasCapBoxBgToggle: $("#canvasCapBoxBgToggle"),
    canvasCapBoxBgColor: $("#canvasCapBoxBgColor"),
    posColHook: $("#posColHook"),
    posColCaption: $("#posColCaption"),
    hookAlignLeft: $("#hookAlignLeft"),
    hookAlignCenter: $("#hookAlignCenter"),
    hookAlignRight: $("#hookAlignRight"),
    capAlignLeft: $("#capAlignLeft"),
    capAlignCenter: $("#capAlignCenter"),
    capAlignRight: $("#capAlignRight"),
    canvasHookXSlider: $("#canvasHookXSlider"),
    canvasHookXVal: $("#canvasHookXVal"),
    canvasHookYSlider: $("#canvasHookYSlider"),
    canvasHookYVal: $("#canvasHookYVal"),
    canvasCaptionXSlider: $("#canvasCaptionXSlider"),
    canvasCaptionXVal: $("#canvasCaptionXVal"),
    canvasCaptionYSlider: $("#canvasCaptionYSlider"),
    canvasCaptionYVal: $("#canvasCaptionYVal"),
    canvasCtaToggle: $("#canvasCtaToggle"),
    canvasCtaOptions: $("#canvasCtaOptions"),
    canvasCtaTextInput: $("#canvasCtaTextInput"),
    canvasCtaColor: $("#canvasCtaColor"),
    canvasCtaPosition: $("#canvasCtaPosition"),
    canvasCtaXSlider: $("#canvasCtaXSlider"),
    canvasCtaXVal: $("#canvasCtaXVal"),
    canvasCtaYSlider: $("#canvasCtaYSlider"),
    canvasCtaYVal: $("#canvasCtaYVal"),
    canvasResetBtn: $("#canvasResetBtn"),
    canvasApplyCampaignBtn: $("#canvasApplyCampaignBtn"),
    canvasApplyClipBtn: $("#canvasApplyClipBtn"),
    canvasAspectSelect: $("#canvasAspectSelect"),
    canvasMoreBtn: $("#canvasMoreBtn"),
    canvasMoreMenu: $("#canvasMoreMenu"),
    canvasSafeFixBtn: $("#canvasSafeFixBtn"),
    quickStartPrimaryGrid: $("#quickStartPrimaryGrid"),
    quickStartViewAllBtn: $("#quickStartViewAllBtn"),
    targetToggleCaptions: $("#targetToggleCaptions"),
    targetToggleHook: $("#targetToggleHook"),
    position3x3Grid: $("#position3x3Grid"),
    posBtnTop: $("#posBtnTop"),
    posBtnCenter: $("#posBtnCenter"),
    posBtnBottom: $("#posBtnBottom"),
    btnAdvancedTypo: $("#btnAdvancedTypo"),
    drawerAdvancedTypo: $("#drawerAdvancedTypo"),
    chevronAdvancedTypo: $("#chevronAdvancedTypo"),
    btnAdvancedPos: $("#btnAdvancedPos"),
    drawerAdvancedPos: $("#drawerAdvancedPos"),
    chevronAdvancedPos: $("#chevronAdvancedPos"),
    canvasHookVisibleToggle: $("#canvasHookVisibleToggle"),
    canvasHookStyleSelect: $("#canvasHookStyleSelect"),
    canvasHookPosSelect: $("#canvasHookPosSelect"),
    canvasCapAnimationSelect: $("#canvasCapAnimationSelect"),
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


  const QUICK_START_PRESETS = [
    {
      id: "creator_default",
      name: "Creator Default",
      category: "clean",
      recommended: true,
      description: "Balanced viral short-form look for any video.",
      bestFor: "All short-form clips · Podcasts",
      font: "Montserrat",
      weight: "Extra Bold",
      hookFont: "Bebas Neue",
      hookSize: 80,
      hookColor: "#000000",
      hookOutline: "#000000",
      hookOutlineW: 0,
      hookBox: true,
      hookBoxColor: "#FFFFFF",
      captionSize: 70,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#38BDF8",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.10,
      previewBg: "#0b1220"
    },
    {
      id: "clean_cut",
      name: "Clean Cut",
      category: "clean",
      recommended: true,
      description: "Modern social-media native look with crisp contrast.",
      bestFor: "General-purpose clips · Interviews",
      font: "Poppins-Bold",
      weight: "Bold",
      hookFont: "Bebas Neue",
      hookSize: 76,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 66,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 4,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#22D3EE",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.08,
      previewBg: "#0c1524"
    },
    {
      id: "karaoke",
      name: "Karaoke",
      category: "dynamic",
      recommended: true,
      description: "Large word-by-word captions with active-word pop.",
      bestFor: "Podcasts · High-energy clips",
      font: "Montserrat",
      weight: "Extra Bold",
      hookFont: "Bebas Neue",
      hookSize: 82,
      hookColor: "#00E676",
      hookOutline: "#000000",
      hookOutlineW: 6,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 72,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#00E676",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.14,
      previewBg: "#071a12"
    },
    {
      id: "podcast_pro",
      name: "Podcast Pro",
      category: "professional",
      description: "Studio podcast look designed for conversational flow.",
      bestFor: "Interviews · Solo & Two-person podcasts",
      font: "Kanit",
      weight: "Bold",
      hookFont: "Bebas Neue",
      hookSize: 78,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 0,
      hookBox: true,
      hookBoxColor: "#1E293B",
      captionSize: 68,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#F59E0B",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.10,
      previewBg: "#17120a"
    },
    {
      id: "beast_mode",
      name: "Beast Mode",
      category: "dynamic",
      description: "Aggressive heavyweight typography for viral hook clips.",
      bestFor: "Motivation · Fitness · Opinions",
      font: "Archivo Black",
      weight: "Extra Bold",
      hookFont: "Anton",
      hookSize: 84,
      hookColor: "#FFE600",
      hookOutline: "#000000",
      hookOutlineW: 6,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 74,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 6,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FFE600",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.15,
      previewBg: "#1a1600"
    },
    {
      id: "grow",
      name: "Grow",
      category: "creator",
      description: "Modern creator aesthetic with bold green highlights.",
      bestFor: "Finance · Entrepreneurship · Growth",
      font: "Barlow Condensed",
      weight: "Bold",
      hookFont: "Bebas Neue",
      hookSize: 80,
      hookColor: "#10B981",
      hookOutline: "#000000",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 74,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#10B981",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.10,
      previewBg: "#061710"
    },
    {
      id: "minimal",
      name: "Minimal",
      category: "clean",
      description: "Clean, restrained typography without loud effects.",
      bestFor: "Education · Tech · Calm interviews",
      font: "Poppins-Bold",
      weight: "Bold",
      hookFont: "Poppins-Bold",
      hookSize: 68,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 1,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 56,
      captionColor: "#F8FAFC",
      captionOutline: "#000000",
      captionOutlineW: 1,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#F8FAFC",
      highlightMode: "none",
      animation: "smooth_fade",
      animationScale: 1.0,
      previewBg: "#11151c"
    },
    {
      id: "storyteller",
      name: "Storyteller",
      category: "emotional",
      description: "Cinematic and emotional, with dramatic key phrase emphasis.",
      bestFor: "Personal memoirs · Storytelling · Drama",
      font: "Saira Condensed",
      weight: "Bold",
      hookFont: "Saira Condensed",
      hookSize: 82,
      hookColor: "#F43F5E",
      hookOutline: "#000000",
      hookOutlineW: 5,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 68,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 4,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#F43F5E",
      highlightMode: "keyword_emphasis",
      animation: "smooth_fade",
      animationScale: 1.05,
      previewBg: "#1c0911"
    },
    {
      id: "hype",
      name: "Hype",
      category: "dynamic",
      description: "Maximum energy with huge bold typography & hot pink pops.",
      bestFor: "Gaming · Sports · Live reactions",
      font: "Anton",
      weight: "Extra Bold",
      hookFont: "Anton",
      hookSize: 86,
      hookColor: "#FF0055",
      hookOutline: "#000000",
      hookOutlineW: 6,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 80,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 7,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FF0055",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.16,
      previewBg: "#1f040e"
    },
    {
      id: "deep_diver",
      name: "Deep Diver",
      category: "professional",
      description: "Editorial & documentary style with technical concepts in cyan.",
      bestFor: "Science · History · In-depth breakdowns",
      font: "Lato-Bold",
      weight: "Bold",
      hookFont: "Barlow Condensed",
      hookSize: 78,
      hookColor: "#38BDF8",
      hookOutline: "#000000",
      hookOutlineW: 4,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 58,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 3,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#38BDF8",
      highlightMode: "keyword_emphasis",
      animation: "smooth_fade",
      animationScale: 1.04,
      previewBg: "#06131c"
    },
    {
      id: "cinematic",
      name: "Cinematic",
      category: "emotional",
      description: "Wide visual breathing room and movie-grade typography.",
      bestFor: "Documentary · Filmmaking · Aesthetic clips",
      font: "Lato-Bold",
      weight: "Bold",
      hookFont: "Bebas Neue",
      hookSize: 76,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 3,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 54,
      captionColor: "#F8FAFC",
      captionOutline: "#0F172A",
      captionOutlineW: 2,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#E2E8F0",
      highlightMode: "none",
      animation: "smooth_fade",
      animationScale: 1.0,
      previewBg: "#0f131a"
    },
    {
      id: "news_flash",
      name: "News Flash",
      category: "professional",
      description: "Fast information delivery with high-contrast fact highlights.",
      bestFor: "News · Stats · Facts · Current events",
      font: "Archivo Black",
      weight: "Extra Bold",
      hookFont: "Archivo Black",
      hookSize: 80,
      hookColor: "#FFFFFF",
      hookOutline: "#000000",
      hookOutlineW: 0,
      hookBox: true,
      hookBoxColor: "#EF4444",
      captionSize: 66,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 5,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#EF4444",
      highlightMode: "keyword_emphasis",
      animation: "word_pop",
      animationScale: 1.10,
      previewBg: "#1c0707"
    },
    {
      id: "baby_steps",
      name: "Baby Steps",
      category: "creator",
      description: "Warm, approachable typography designed for beginner tutorials.",
      bestFor: "Beginner education · Coaching · How-to guides",
      font: "Poppins-Bold",
      weight: "Bold",
      hookFont: "Poppins-Bold",
      hookSize: 74,
      hookColor: "#000000",
      hookOutline: "#000000",
      hookOutlineW: 0,
      hookBox: true,
      hookBoxColor: "#FBBF24",
      captionSize: 64,
      captionColor: "#FFFFFF",
      captionOutline: "#0F172A",
      captionOutlineW: 4,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FBBF24",
      highlightMode: "active_word",
      animation: "word_pop",
      animationScale: 1.08,
      previewBg: "#1a1403"
    },
    {
      id: "soft_landing",
      name: "Soft Landing",
      category: "emotional",
      description: "Friendly, calm, and soothing aesthetic with pastel highlights.",
      bestFor: "Lifestyle · Wellness · Calm storytelling",
      font: "Poppins-Bold",
      weight: "Bold",
      hookFont: "Poppins-Bold",
      hookSize: 72,
      hookColor: "#1E293B",
      hookOutline: "#000000",
      hookOutlineW: 0,
      hookBox: true,
      hookBoxColor: "#FBCFE8",
      captionSize: 60,
      captionColor: "#FFFFFF",
      captionOutline: "#1E293B",
      captionOutlineW: 3,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FBCFE8",
      highlightMode: "active_word",
      animation: "smooth_fade",
      animationScale: 1.05,
      previewBg: "#1c0a15"
    },
    {
      id: "meme_pop",
      name: "Meme Pop",
      category: "dynamic",
      description: "Playful comic-style lettering with bounce animation for comedy.",
      bestFor: "Funny clips · Reactions · Casual humor",
      font: "Bangers",
      weight: "Extra Bold",
      hookFont: "Bangers",
      hookSize: 84,
      hookColor: "#FACC15",
      hookOutline: "#000000",
      hookOutlineW: 6,
      hookBox: false,
      hookBoxColor: "#000000",
      captionSize: 76,
      captionColor: "#FFFFFF",
      captionOutline: "#000000",
      captionOutlineW: 6,
      captionBox: false,
      captionBoxColor: "#000000",
      highlightColor: "#FACC15",
      highlightMode: "active_word",
      animation: "bounce",
      animationScale: 1.15,
      previewBg: "#1c1803"
    }
  ];

  let STYLE_PRESETS = QUICK_START_PRESETS;
  let activePresetFilter = "all";

  let currentCanvasClip = null;
  let currentCanvasVideoId = null;
  let activePresetId = "hormozi";
  let activeSelectedLayer = "hook"; // "hook" | "captions" | "cta" | null
  let canvasZoomLevel = 1.0;
  let copiedStyleBuffer = null;
  let currentClipTimestamp = 1.0;
  let isCanvasPlaying = false;
  let canvasPlayInterval = null;
  let canvasHistory = [];
  let canvasHistoryIndex = -1;
  let filmstripDebounceTimer = null;

  let canvasState = {
    hook: {
      preferred_x: 0.50,
      preferred_y: 0.12,
      font: "Anton",
      weight: "Extra Bold",
      size: 76,
      color: "#FFFFFF",
      outline_color: "#000000",
      outline_width: 8,
      letter_spacing: 0,
      line_height: 100,
      box_enabled: false,
      background_color: "#000000",
      single_line: true,
      visible: true,
    },
    captions: {
      preferred_x: 0.50,
      preferred_y: 0.78,
      font: "Anton",
      weight: "Bold",
      size: 65,
      color: "#FFFFFF",
      highlight_color: "#FFF35C",
      outline_color: "#000000",
      outline_width: 6,
      letter_spacing: 0,
      line_height: 100,
      box_enabled: false,
      background_color: "#000000",
      single_line: true,
      visible: true,
    },
    cta: {
      enabled: false,
      text: "@mychannel · Part 1",
      preferred_x: 0.50,
      preferred_y: 0.92,
      font: "Poppins-Bold",
      size: 38,
      color: "#FFFFFF",
      position: "bottom-right",
      visible: false,
    },
  };

  let activeDragTarget = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragInitialXPct = 0.5;
  let dragInitialYPct = 0.5;

  function pushCanvasHistory(desc) {
    try {
      const snap = JSON.stringify(canvasState);
      if (canvasHistoryIndex >= 0 && canvasHistory[canvasHistoryIndex] === snap) return;
      canvasHistory = canvasHistory.slice(0, canvasHistoryIndex + 1);
      canvasHistory.push(snap);
      if (canvasHistory.length > 30) canvasHistory.shift();
      canvasHistoryIndex = canvasHistory.length - 1;
    } catch (e) {
      console.warn("Canvas history push failed", e);
    }
  }

  function undoCanvas() {
    if (canvasHistoryIndex > 0) {
      canvasHistoryIndex--;
      canvasState = JSON.parse(canvasHistory[canvasHistoryIndex]);
      updateCanvasElementsView();
      toast("Undo layout action", "ok");
    }
  }

  function redoCanvas() {
    if (canvasHistoryIndex < canvasHistory.length - 1) {
      canvasHistoryIndex++;
      canvasState = JSON.parse(canvasHistory[canvasHistoryIndex]);
      updateCanvasElementsView();
      toast("Redo layout action", "ok");
    }
  }

  let currentPositionTarget = "captions";

  const POS_GRID_COORDS = {
    "top-left": { x: 0.18, y: 0.12 },
    "top-center": { x: 0.50, y: 0.12 },
    "top-right": { x: 0.82, y: 0.12 },
    "mid-left": { x: 0.18, y: 0.50 },
    "mid-center": { x: 0.50, y: 0.50 },
    "mid-right": { x: 0.82, y: 0.50 },
    "bottom-left": { x: 0.18, y: 0.78 },
    "bottom-center": { x: 0.50, y: 0.78 },
    "bottom-right": { x: 0.82, y: 0.78 },
  };

  function updatePositionGridState() {
    if (!els.position3x3Grid) return;
    const target = currentPositionTarget || "captions";
    if (!canvasState[target]) return;
    const curX = canvasState[target].preferred_x != null ? canvasState[target].preferred_x : 0.5;
    const curY = canvasState[target].preferred_y != null ? canvasState[target].preferred_y : (target === "hook" ? 0.12 : 0.78);

    let closestKey = "bottom-center";
    let minDistance = 99999;
    for (const [k, coord] of Object.entries(POS_GRID_COORDS)) {
      const dist = Math.hypot(coord.x - curX, coord.y - curY);
      if (dist < minDistance) {
        minDistance = dist;
        closestKey = k;
      }
    }
    els.position3x3Grid.querySelectorAll(".pos-cell").forEach((c) => {
      c.classList.toggle("active", c.dataset.pos === closestKey);
    });

    if (els.posBtnTop) els.posBtnTop.classList.toggle("active", curY <= 0.25);
    if (els.posBtnCenter) els.posBtnCenter.classList.toggle("active", curY > 0.25 && curY < 0.65);
    if (els.posBtnBottom) els.posBtnBottom.classList.toggle("active", curY >= 0.65);
  }

  function selectCanvasLayer(targetLayer) {
    activeSelectedLayer = targetLayer;
    const isHook = targetLayer === "hook";
    const isCap = targetLayer === "captions" || targetLayer === "caption";
    const isCta = targetLayer === "cta";

    if (els.canvasHookBox) els.canvasHookBox.classList.toggle("is-selected", isHook);
    if (els.canvasCaptionBox) els.canvasCaptionBox.classList.toggle("is-selected", isCap);
    if (els.canvasCtaBox) els.canvasCtaBox.classList.toggle("is-selected", isCta);

    if (els.targetToggleCaptions) els.targetToggleCaptions.classList.toggle("active", isCap);
    if (els.targetToggleHook) els.targetToggleHook.classList.toggle("active", isHook);
    currentPositionTarget = isHook ? "hook" : "captions";
    updatePositionGridState();

    if (els.layerItemHook) els.layerItemHook.classList.toggle("is-selected", isHook);
    if (els.layerItemCaption) els.layerItemCaption.classList.toggle("is-selected", isCap);

    if (els.inspectorHookBlock) els.inspectorHookBlock.hidden = !isHook;
    if (els.inspectorCaptionBlock) els.inspectorCaptionBlock.hidden = !isCap;

    if (els.inspectorTargetBadge) {
      els.inspectorTargetBadge.textContent = isHook ? "HOOK" : (isCap ? "SUBTITLES" : (isCta ? "WATERMARK" : "GLOBAL"));
    }

    if (els.posColHook) {
      els.posColHook.style.borderColor = isHook ? "var(--teal)" : "rgba(255,255,255,0.05)";
    }
    if (els.posColCaption) {
      els.posColCaption.style.borderColor = isCap ? "var(--teal)" : "rgba(255,255,255,0.05)";
    }

    updateMicroToolbarPosition();
  }

  function updateMicroToolbarPosition() {
    if (!els.canvasMicroToolbar) return;
    if (!activeSelectedLayer) {
      els.canvasMicroToolbar.hidden = true;
      return;
    }
    const box = activeSelectedLayer === "hook" ? els.canvasHookBox : (activeSelectedLayer === "captions" ? els.canvasCaptionBox : els.canvasCtaBox);
    if (!box || box.hidden || !els.canvasContainer) {
      els.canvasMicroToolbar.hidden = true;
      return;
    }

    els.canvasMicroToolbar.hidden = false;
    const targetKey = activeSelectedLayer === "caption" ? "captions" : activeSelectedLayer;
    const currentSize = (canvasState[targetKey] && canvasState[targetKey].size) || 76;
    if (els.microSizeVal) els.microSizeVal.textContent = String(currentSize);

    const boxRect = box.getBoundingClientRect();
    const containerRect = els.canvasContainer.getBoundingClientRect();
    const topRel = boxRect.top - containerRect.top;
    const leftRel = boxRect.left - containerRect.left + boxRect.width / 2;

    els.canvasMicroToolbar.style.left = `${Math.round(leftRel)}px`;
    if (topRel > 44) {
      els.canvasMicroToolbar.style.top = `${Math.round(topRel - 36)}px`;
    } else {
      els.canvasMicroToolbar.style.top = `${Math.round(topRel + boxRect.height + 10)}px`;
    }
  }

  function checkSafeZoneBounds() {
    if (!els.canvasSafeWarning) return;
    const hookX = canvasState.hook.preferred_x != null ? canvasState.hook.preferred_x : 0.5;
    const hookY = canvasState.hook.preferred_y != null ? canvasState.hook.preferred_y : 0.12;
    const capX = canvasState.captions.preferred_x != null ? canvasState.captions.preferred_x : 0.5;
    const capY = canvasState.captions.preferred_y != null ? canvasState.captions.preferred_y : 0.78;

    const hookOut = (hookX < 0.12 || hookX > 0.84 || hookY < 0.10 || hookY > 0.82);
    const capOut = (capX < 0.12 || capX > 0.84 || capY < 0.10 || capY > 0.82);
    const isWarn = hookOut || capOut;

    els.canvasSafeWarning.hidden = !isWarn;
  }

  function updateCanvasZoom() {
    if (!els.canvasContainer) return;
    els.canvasContainer.style.transform = `scale(${canvasZoomLevel})`;
    updateMicroToolbarPosition();
  }

  function initCanvasInteractions() {
    function onPointerDown(e, targetType) {
      if (e.target.closest(".resize-handle") || e.target.closest(".micro-btn")) return;
      activeDragTarget = targetType;
      selectCanvasLayer(targetType);
      dragStartX = e.clientX || (e.touches && e.touches[0].clientX);
      dragStartY = e.clientY || (e.touches && e.touches[0].clientY);
      const box = targetType === "hook" ? els.canvasHookBox : (targetType === "caption" ? els.canvasCaptionBox : els.canvasCtaBox);
      if (box) box.classList.add("is-dragging");
      const key = targetType === "caption" ? "captions" : targetType;
      dragInitialXPct = canvasState[key] && canvasState[key].preferred_x != null ? canvasState[key].preferred_x : 0.5;
      dragInitialYPct = canvasState[key] && canvasState[key].preferred_y != null ? canvasState[key].preferred_y : 0.5;
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("mouseup", onPointerUp);
      document.addEventListener("touchmove", onPointerMove, { passive: false });
      document.addEventListener("touchend", onPointerUp);
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!activeDragTarget || !els.canvasContainer) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const rect = els.canvasContainer.getBoundingClientRect();
      const deltaX = clientX - dragStartX;
      const deltaY = clientY - dragStartY;
      const deltaXPct = deltaX / (rect.width || 320);
      const deltaYPct = deltaY / (rect.height || 569);
      let newX = Math.max(0.06, Math.min(0.94, dragInitialXPct + deltaXPct));
      let newY = Math.max(0.04, Math.min(0.96, dragInitialYPct + deltaYPct));
      newX = Math.round(newX * 100) / 100;
      newY = Math.round(newY * 100) / 100;
      const key = activeDragTarget === "caption" ? "captions" : activeDragTarget;
      if (canvasState[key]) {
        canvasState[key].preferred_x = newX;
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
      pushCanvasHistory("Drag Position");
    }

    if (els.canvasHookBox) {
      els.canvasHookBox.addEventListener("mousedown", (e) => onPointerDown(e, "hook"));
      els.canvasHookBox.addEventListener("touchstart", (e) => onPointerDown(e, "hook"), { passive: false });
    }
    if (els.canvasCaptionBox) {
      els.canvasCaptionBox.addEventListener("mousedown", (e) => onPointerDown(e, "captions"));
      els.canvasCaptionBox.addEventListener("touchstart", (e) => onPointerDown(e, "captions"), { passive: false });
    }
    if (els.canvasCtaBox) {
      els.canvasCtaBox.addEventListener("mousedown", (e) => onPointerDown(e, "cta"));
      els.canvasCtaBox.addEventListener("touchstart", (e) => onPointerDown(e, "cta"), { passive: false });
    }

    // Clicking background of canvas stage deselects or clicks hook/captions
    if (els.canvasContainer) {
      els.canvasContainer.addEventListener("click", (e) => {
        if (!e.target.closest(".canvas-drag-box") && !e.target.closest(".canvas-micro-toolbar")) {
          selectCanvasLayer(null);
        }
      });
    }

    // Layers List Clicking in Left Panel
    if (els.layerItemHook) {
      els.layerItemHook.addEventListener("click", () => selectCanvasLayer("hook"));
    }
    if (els.layerItemCaption) {
      els.layerItemCaption.addEventListener("click", () => selectCanvasLayer("captions"));
    }

    // Layer Visibility Toggles
    if (els.layerVisHook) {
      els.layerVisHook.addEventListener("click", (e) => {
        e.stopPropagation();
        canvasState.hook.visible = !canvasState.hook.visible;
        els.layerVisHook.classList.toggle("is-off", !canvasState.hook.visible);
        if (els.canvasHookBox) els.canvasHookBox.style.display = canvasState.hook.visible ? "" : "none";
        pushCanvasHistory("Toggle Hook Visibility");
      });
    }
    if (els.layerVisCaption) {
      els.layerVisCaption.addEventListener("click", (e) => {
        e.stopPropagation();
        canvasState.captions.visible = !canvasState.captions.visible;
        els.layerVisCaption.classList.toggle("is-off", !canvasState.captions.visible);
        if (els.canvasCaptionBox) els.canvasCaptionBox.style.display = canvasState.captions.visible ? "" : "none";
        pushCanvasHistory("Toggle Subtitle Visibility");
      });
    }

    // Floating Micro-Toolbar Actions
    if (els.microAa) {
      els.microAa.addEventListener("click", (e) => {
        e.stopPropagation();
        if (activeSelectedLayer === "hook") {
          const cur = els.canvasHookTextInput ? els.canvasHookTextInput.value : (els.canvasHookText.textContent || "");
          const isUpper = cur === cur.toUpperCase();
          const next = isUpper ? cur.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) : cur.toUpperCase();
          if (els.canvasHookTextInput) els.canvasHookTextInput.value = next;
          if (els.canvasHookText) els.canvasHookText.textContent = next;
        } else if (activeSelectedLayer === "captions") {
          const cur = els.canvasCaptionTextInput ? els.canvasCaptionTextInput.value : "people are gonna sleep on you";
          const isUpper = cur === cur.toUpperCase();
          const next = isUpper ? cur.toLowerCase() : cur.toUpperCase();
          if (els.canvasCaptionTextInput) els.canvasCaptionTextInput.value = next;
        }
        updateCanvasElementsView();
        pushCanvasHistory("Case Toggle");
      });
    }

    if (els.microSizeMinus) {
      els.microSizeMinus.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = activeSelectedLayer === "caption" ? "captions" : (activeSelectedLayer || "hook");
        stepSize(target, -4);
      });
    }

    if (els.microSizePlus) {
      els.microSizePlus.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = activeSelectedLayer === "caption" ? "captions" : (activeSelectedLayer || "hook");
        stepSize(target, 4);
      });
    }

    if (els.microAlign) {
      els.microAlign.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = activeSelectedLayer === "caption" ? "captions" : (activeSelectedLayer || "hook");
        const curX = canvasState[target].preferred_x != null ? canvasState[target].preferred_x : 0.5;
        if (Math.abs(curX - 0.50) < 0.05) {
          canvasState[target].preferred_x = 0.82; // Right
        } else if (curX > 0.6) {
          canvasState[target].preferred_x = 0.18; // Left
        } else {
          canvasState[target].preferred_x = 0.50; // Center
        }
        updateCanvasElementsView();
        pushCanvasHistory("Cycle Alignment");
      });
    }

    if (els.microMore) {
      els.microMore.addEventListener("click", (e) => {
        e.stopPropagation();
        if (els.inspectorContextSection) {
          els.inspectorContextSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Zoom Controls Dock
    if (els.canvasZoomIn) {
      els.canvasZoomIn.addEventListener("click", () => {
        canvasZoomLevel = Math.min(1.8, Math.round((canvasZoomLevel + 0.15) * 100) / 100);
        updateCanvasZoom();
      });
    }
    if (els.canvasZoomOut) {
      els.canvasZoomOut.addEventListener("click", () => {
        canvasZoomLevel = Math.max(0.6, Math.round((canvasZoomLevel - 0.15) * 100) / 100);
        updateCanvasZoom();
      });
    }
    if (els.canvasZoomFit) {
      els.canvasZoomFit.addEventListener("click", () => {
        canvasZoomLevel = 1.0;
        updateCanvasZoom();
      });
    }
    if (els.canvasZoomReset) {
      els.canvasZoomReset.addEventListener("click", () => {
        canvasZoomLevel = 1.0;
        updateCanvasZoom();
      });
    }

    // Safe zone toggle
    if (els.canvasSafeToggle) {
      els.canvasSafeToggle.addEventListener("change", () => {
        if (els.canvasSafeGuides) {
          els.canvasSafeGuides.classList.toggle("is-hidden", !els.canvasSafeToggle.checked);
        }
        checkSafeZoneBounds();
      });
    }

    // 2D Sliders & snap alignment inputs
    if (els.canvasHookXSlider) {
      els.canvasHookXSlider.addEventListener("input", () => {
        canvasState.hook.preferred_x = Number(els.canvasHookXSlider.value) / 100;
        updateCanvasElementsView();
      });
      els.canvasHookXSlider.addEventListener("change", () => pushCanvasHistory("Hook X"));
    }
    if (els.canvasHookYSlider) {
      els.canvasHookYSlider.addEventListener("input", () => {
        canvasState.hook.preferred_y = Number(els.canvasHookYSlider.value) / 100;
        updateCanvasElementsView();
      });
      els.canvasHookYSlider.addEventListener("change", () => pushCanvasHistory("Hook Y"));
    }
    if (els.canvasCaptionXSlider) {
      els.canvasCaptionXSlider.addEventListener("input", () => {
        canvasState.captions.preferred_x = Number(els.canvasCaptionXSlider.value) / 100;
        updateCanvasElementsView();
      });
      els.canvasCaptionXSlider.addEventListener("change", () => pushCanvasHistory("Caption X"));
    }
    if (els.canvasCaptionYSlider) {
      els.canvasCaptionYSlider.addEventListener("input", () => {
        canvasState.captions.preferred_y = Number(els.canvasCaptionYSlider.value) / 100;
        updateCanvasElementsView();
      });
      els.canvasCaptionYSlider.addEventListener("change", () => pushCanvasHistory("Caption Y"));
    }
    if (els.canvasCtaXSlider) {
      els.canvasCtaXSlider.addEventListener("input", () => {
        canvasState.cta.preferred_x = Number(els.canvasCtaXSlider.value) / 100;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCtaYSlider) {
      els.canvasCtaYSlider.addEventListener("input", () => {
        canvasState.cta.preferred_y = Number(els.canvasCtaYSlider.value) / 100;
        updateCanvasElementsView();
      });
    }

    // Quick snap alignment buttons
    function setSnapAlignment(target, align) {
      const xVal = align === "left" ? 0.18 : (align === "right" ? 0.82 : 0.50);
      canvasState[target].preferred_x = xVal;
      updateCanvasElementsView();
      pushCanvasHistory(`${target} Align ${align}`);
    }

    if (els.hookAlignLeft) els.hookAlignLeft.addEventListener("click", () => setSnapAlignment("hook", "left"));
    if (els.hookAlignCenter) els.hookAlignCenter.addEventListener("click", () => setSnapAlignment("hook", "center"));
    if (els.hookAlignRight) els.hookAlignRight.addEventListener("click", () => setSnapAlignment("hook", "right"));

    if (els.capAlignLeft) els.capAlignLeft.addEventListener("click", () => setSnapAlignment("captions", "left"));
    if (els.capAlignCenter) els.capAlignCenter.addEventListener("click", () => setSnapAlignment("captions", "center"));
    if (els.capAlignRight) els.capAlignRight.addEventListener("click", () => setSnapAlignment("captions", "right"));

    // Typography & Color Inputs (Hook)
    if (els.canvasFontSelect) {
      els.canvasFontSelect.addEventListener("change", () => {
        canvasState.hook.font = els.canvasFontSelect.value;
        updateCanvasElementsView();
        pushCanvasHistory("Hook Font");
      });
    }
    if (els.canvasWeightSelect) {
      els.canvasWeightSelect.addEventListener("change", () => {
        canvasState.hook.weight = els.canvasWeightSelect.value;
        updateCanvasElementsView();
        pushCanvasHistory("Hook Weight");
      });
    }
    if (els.canvasHookSizeSlider) {
      els.canvasHookSizeSlider.addEventListener("input", () => {
        canvasState.hook.size = Number(els.canvasHookSizeSlider.value);
        updateCanvasElementsView();
      });
      els.canvasHookSizeSlider.addEventListener("change", () => pushCanvasHistory("Hook Size"));
    }
    if (els.canvasTextColor) {
      els.canvasTextColor.addEventListener("input", () => {
        canvasState.hook.color = els.canvasTextColor.value;
        updateCanvasElementsView();
      });
      els.canvasTextColor.addEventListener("change", () => pushCanvasHistory("Hook Color"));
    }
    if (els.canvasOutlineColor) {
      els.canvasOutlineColor.addEventListener("input", () => {
        canvasState.hook.outline_color = els.canvasOutlineColor.value;
        updateCanvasElementsView();
      });
      els.canvasOutlineColor.addEventListener("change", () => pushCanvasHistory("Hook Outline Color"));
    }
    if (els.canvasHighlightColor) {
      els.canvasHighlightColor.addEventListener("input", () => {
        canvasState.captions.highlight_color = els.canvasHighlightColor.value;
        updateCanvasElementsView();
      });
      els.canvasHighlightColor.addEventListener("change", () => pushCanvasHistory("Highlight Color"));
    }
    if (els.canvasOutlineWidthSlider) {
      els.canvasOutlineWidthSlider.addEventListener("input", () => {
        canvasState.hook.outline_width = Number(els.canvasOutlineWidthSlider.value);
        updateCanvasElementsView();
      });
      els.canvasOutlineWidthSlider.addEventListener("change", () => pushCanvasHistory("Hook Outline Width"));
    }
    if (els.canvasLetterSpacingSlider) {
      els.canvasLetterSpacingSlider.addEventListener("input", () => {
        canvasState.hook.letter_spacing = Number(els.canvasLetterSpacingSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasLineHeightSlider) {
      els.canvasLineHeightSlider.addEventListener("input", () => {
        canvasState.hook.line_height = Number(els.canvasLineHeightSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasHookSingleLineCheck) {
      els.canvasHookSingleLineCheck.addEventListener("change", () => {
        canvasState.hook.single_line = els.canvasHookSingleLineCheck.checked;
        updateCanvasElementsView();
        pushCanvasHistory("Hook Single Line");
      });
    }

    // Typography & Color Inputs (Captions)
    if (els.canvasCapFontSelect) {
      els.canvasCapFontSelect.addEventListener("change", () => {
        canvasState.captions.font = els.canvasCapFontSelect.value;
        updateCanvasElementsView();
        pushCanvasHistory("Caption Font");
      });
    }
    if (els.canvasCapWeightSelect) {
      els.canvasCapWeightSelect.addEventListener("change", () => {
        canvasState.captions.weight = els.canvasCapWeightSelect.value;
        updateCanvasElementsView();
        pushCanvasHistory("Caption Weight");
      });
    }
    if (els.canvasCaptionSizeSlider) {
      els.canvasCaptionSizeSlider.addEventListener("input", () => {
        canvasState.captions.size = Number(els.canvasCaptionSizeSlider.value);
        updateCanvasElementsView();
      });
      els.canvasCaptionSizeSlider.addEventListener("change", () => pushCanvasHistory("Caption Size"));
    }
    if (els.canvasCapTextColor) {
      els.canvasCapTextColor.addEventListener("input", () => {
        canvasState.captions.color = els.canvasCapTextColor.value;
        updateCanvasElementsView();
      });
      els.canvasCapTextColor.addEventListener("change", () => pushCanvasHistory("Caption Text Color"));
    }
    if (els.canvasCapHighlightColor) {
      els.canvasCapHighlightColor.addEventListener("input", () => {
        canvasState.captions.highlight_color = els.canvasCapHighlightColor.value;
        updateCanvasElementsView();
      });
      els.canvasCapHighlightColor.addEventListener("change", () => pushCanvasHistory("Caption Highlight Color"));
    }
    if (els.canvasCapOutlineColor) {
      els.canvasCapOutlineColor.addEventListener("input", () => {
        canvasState.captions.outline_color = els.canvasCapOutlineColor.value;
        updateCanvasElementsView();
      });
      els.canvasCapOutlineColor.addEventListener("change", () => pushCanvasHistory("Caption Outline Color"));
    }
    if (els.canvasCapOutlineWidthSlider) {
      els.canvasCapOutlineWidthSlider.addEventListener("input", () => {
        canvasState.captions.outline_width = Number(els.canvasCapOutlineWidthSlider.value);
        updateCanvasElementsView();
      });
      els.canvasCapOutlineWidthSlider.addEventListener("change", () => pushCanvasHistory("Caption Outline Width"));
    }
    if (els.canvasCapLetterSpacingSlider) {
      els.canvasCapLetterSpacingSlider.addEventListener("input", () => {
        canvasState.captions.letter_spacing = Number(els.canvasCapLetterSpacingSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasCapLineHeightSlider) {
      els.canvasCapLineHeightSlider.addEventListener("input", () => {
        canvasState.captions.line_height = Number(els.canvasCapLineHeightSlider.value);
        updateCanvasElementsView();
      });
    }
    if (els.canvasCapSingleLineCheck) {
      els.canvasCapSingleLineCheck.addEventListener("change", () => {
        canvasState.captions.single_line = els.canvasCapSingleLineCheck.checked;
        updateCanvasElementsView();
        pushCanvasHistory("Caption Single Line");
      });
    }

    // Advanced Drawer Accordions
    if (els.hookAdvancedToggle) {
      els.hookAdvancedToggle.addEventListener("click", () => {
        if (els.hookAdvancedDrawer) {
          els.hookAdvancedDrawer.hidden = !els.hookAdvancedDrawer.hidden;
        }
      });
    }
    if (els.capAdvancedToggle) {
      els.capAdvancedToggle.addEventListener("click", () => {
        if (els.capAdvancedDrawer) {
          els.capAdvancedDrawer.hidden = !els.capAdvancedDrawer.hidden;
        }
      });
    }

    // Box Background Badges
    if (els.canvasBoxBgToggle) {
      els.canvasBoxBgToggle.addEventListener("change", () => {
        canvasState.hook.box_enabled = els.canvasBoxBgToggle.checked;
        updateCanvasElementsView();
        pushCanvasHistory("Hook Box Badge");
      });
    }
    if (els.canvasBoxBgColor) {
      els.canvasBoxBgColor.addEventListener("input", () => {
        canvasState.hook.background_color = els.canvasBoxBgColor.value;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCapBoxBgToggle) {
      els.canvasCapBoxBgToggle.addEventListener("change", () => {
        canvasState.captions.box_enabled = els.canvasCapBoxBgToggle.checked;
        updateCanvasElementsView();
        pushCanvasHistory("Caption Box Badge");
      });
    }
    if (els.canvasCapBoxBgColor) {
      els.canvasCapBoxBgColor.addEventListener("input", () => {
        canvasState.captions.background_color = els.canvasCapBoxBgColor.value;
        updateCanvasElementsView();
      });
    }

    // Extra / Watermark Options
    if (els.canvasCtaToggle) {
      els.canvasCtaToggle.addEventListener("change", () => {
        canvasState.cta.enabled = els.canvasCtaToggle.checked;
        updateCanvasElementsView();
        pushCanvasHistory("CTA Toggle");
      });
    }
    if (els.canvasCtaTextInput) {
      els.canvasCtaTextInput.addEventListener("input", () => {
        canvasState.cta.text = els.canvasCtaTextInput.value;
        updateCanvasElementsView();
      });
    }
    if (els.canvasCtaColor) {
      els.canvasCtaColor.addEventListener("input", () => {
        canvasState.cta.color = els.canvasCtaColor.value;
        updateCanvasElementsView();
      });
    }

    // Single line global header toggle
    if (els.canvasSingleLineToggle) {
      els.canvasSingleLineToggle.addEventListener("change", () => {
        canvasState.hook.single_line = els.canvasSingleLineToggle.checked;
        canvasState.captions.single_line = els.canvasSingleLineToggle.checked;
        if (els.canvasHookSingleLineCheck) els.canvasHookSingleLineCheck.checked = els.canvasSingleLineToggle.checked;
        if (els.canvasCapSingleLineCheck) els.canvasCapSingleLineCheck.checked = els.canvasSingleLineToggle.checked;
        updateCanvasElementsView();
        pushCanvasHistory("Global Single Line Toggle");
      });
    }

    // Live Text Inputs for Hook & Subtitles
    if (els.canvasHookTextInput) {
      els.canvasHookTextInput.addEventListener("input", () => {
        const val = els.canvasHookTextInput.value || "";
        if (els.canvasHookText) els.canvasHookText.textContent = val || "HOOK HEADLINE";
        if (els.layerTextHook) els.layerTextHook.textContent = val || "Hook Headline";
        if (els.hookCharCount) els.hookCharCount.textContent = `${val.length}/60`;
        if (currentCanvasClip) {
          currentCanvasClip.hook = val;
          dirty = true;
          updateReviewHint();
        }
        updateCanvasElementsView();
      });
      els.canvasHookTextInput.addEventListener("change", () => pushCanvasHistory("Hook Text Change"));
    }

    if (els.canvasCaptionTextInput) {
      els.canvasCaptionTextInput.addEventListener("input", () => {
        const val = els.canvasCaptionTextInput.value || "";
        if (els.layerTextCaption) els.layerTextCaption.textContent = val || "Subtitles";
        if (els.captionCharCount) els.captionCharCount.textContent = `${val.length}/60`;
        if (els.canvasCaptionText) {
          const words = val.split(/\s+/).filter(Boolean);
          if (words.length >= 2) {
            const lead = escapeHtml(words.slice(0, -1).join(" "));
            const last = escapeHtml(words[words.length - 1]);
            els.canvasCaptionText.innerHTML = `${lead} <span class="hl-word">${last}</span>`;
          } else {
            els.canvasCaptionText.innerHTML = escapeHtml(val || "Subtitles line");
          }
        }
        updateCanvasElementsView();
      });
    }

    // Stepper function
    function stepSize(type, delta) {
      const key = type === "caption" ? "captions" : type;
      if (!canvasState[key]) return;
      const current = canvasState[key].size || (key === "hook" ? 76 : 65);
      canvasState[key].size = Math.max(24, Math.min(130, current + delta));
      updateCanvasElementsView();
      pushCanvasHistory(`${type} Size Step`);
    }

    // Corner Drag Resizing Handles (CapCut / Canva Style)
    function initCornerResizeHandlers() {
      const handles = els.canvasContainer ? els.canvasContainer.querySelectorAll(".resize-handle") : [];
      handles.forEach((handle) => {
        function onHandleDown(e) {
          e.stopPropagation();
          e.preventDefault();
          const box = handle.closest(".canvas-drag-box");
          if (!box) return;
          const type = box.dataset.type === "caption" ? "captions" : box.dataset.type;
          selectCanvasLayer(type);
          const startX = e.clientX || (e.touches && e.touches[0].clientX);
          const startY = e.clientY || (e.touches && e.touches[0].clientY);
          const startSize = canvasState[type].size || 65;
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
            const newSize = Math.max(24, Math.min(130, Math.round(startSize + delta)));
            canvasState[type].size = newSize;
            updateCanvasElementsView();
            if (ev.cancelable) ev.preventDefault();
          }

          function onHandleUp() {
            document.removeEventListener("mousemove", onHandleMove);
            document.removeEventListener("mouseup", onHandleUp);
            document.removeEventListener("touchmove", onHandleMove);
            document.removeEventListener("touchend", onHandleUp);
            pushCanvasHistory(`${type} Resize Corner`);
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

    // Mouse wheel resize directly over active boxes
    function onWheelScale(e, type) {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 2 : -2;
      stepSize(type, delta);
    }
    if (els.canvasHookBox) els.canvasHookBox.addEventListener("wheel", (e) => onWheelScale(e, "hook"), { passive: false });
    if (els.canvasCaptionBox) els.canvasCaptionBox.addEventListener("wheel", (e) => onWheelScale(e, "captions"), { passive: false });

    // Timeline Scrubber & Frame Scrubbing
    if (els.canvasTimelineSlider) {
      els.canvasTimelineSlider.addEventListener("input", () => {
        currentClipTimestamp = parseFloat(els.canvasTimelineSlider.value) || 1.0;
        if (els.canvasTimeDisplay && currentCanvasClip) {
          els.canvasTimeDisplay.textContent = `${fmt(currentClipTimestamp)} / ${fmt(currentCanvasClip.end)}`;
        }
        clearTimeout(filmstripDebounceTimer);
        filmstripDebounceTimer = setTimeout(() => {
          fetchFrameSnapshot(currentCanvasVideoId, currentClipTimestamp);
        }, 220);
      });
    }

    // Play / Preview frame toggle
    if (els.canvasPlayBtn) {
      els.canvasPlayBtn.addEventListener("click", () => {
        if (!currentCanvasClip) return;
        isCanvasPlaying = !isCanvasPlaying;
        els.canvasPlayBtn.innerHTML = isCanvasPlaying ? "❚❚" : `<svg class="icon"><use href="#icon-play"/></svg>`;
        if (isCanvasPlaying) {
          canvasPlayInterval = setInterval(() => {
            currentClipTimestamp += 0.8;
            if (currentClipTimestamp > currentCanvasClip.end) {
              currentClipTimestamp = currentCanvasClip.start;
            }
            if (els.canvasTimelineSlider) els.canvasTimelineSlider.value = currentClipTimestamp;
            if (els.canvasTimeDisplay) {
              els.canvasTimeDisplay.textContent = `${fmt(currentClipTimestamp)} / ${fmt(currentCanvasClip.end)}`;
            }
            fetchFrameSnapshot(currentCanvasVideoId, currentClipTimestamp);
          }, 850);
        } else {
          clearInterval(canvasPlayInterval);
        }
      });
    }

    // Quick Action Buttons
    if (els.canvasCopyStyleBtn) {
      els.canvasCopyStyleBtn.addEventListener("click", () => {
        const sourceKey = activeSelectedLayer === "caption" ? "captions" : (activeSelectedLayer || "hook");
        const src = canvasState[sourceKey];
        if (!src) return;
        copiedStyleBuffer = {
          font: src.font,
          weight: src.weight,
          size: src.size,
          color: src.color,
          outline_color: src.outline_color,
          outline_width: src.outline_width,
          letter_spacing: src.letter_spacing,
          line_height: src.line_height,
          box_enabled: src.box_enabled,
          background_color: src.background_color,
          highlight_color: src.highlight_color,
        };
        // Apply to the other layer immediately if available
        const targetKey = sourceKey === "hook" ? "captions" : "hook";
        Object.assign(canvasState[targetKey], copiedStyleBuffer);
        updateCanvasElementsView();
        pushCanvasHistory("Duplicate Style Across Layers");
        toast("Style copied and matched between Hook and Subtitles!", "ok");
      });
    }

    if (els.canvasCopyAllBtn) {
      els.canvasCopyAllBtn.addEventListener("click", applyCanvasToCampaign);
    }

    if (els.canvasResetCanvasBtn) {
      els.canvasResetCanvasBtn.addEventListener("click", resetCanvasLayout);
    }

    if (els.canvasRefreshFrame) {
      els.canvasRefreshFrame.addEventListener("click", () => {
        fetchFrameSnapshot(currentCanvasVideoId, currentClipTimestamp);
        toast("Video frame refreshed.", "ok");
      });
    }

    // Aspect Ratio Dropdown
    if (els.canvasAspectSelect) {
      els.canvasAspectSelect.addEventListener("change", () => {
        const r = els.canvasAspectSelect.value;
        if (els.canvasContainer) {
          if (r === "9:16") {
            els.canvasContainer.style.aspectRatio = "9 / 16";
          } else if (r === "1:1") {
            els.canvasContainer.style.aspectRatio = "1 / 1";
          } else if (r === "16:9") {
            els.canvasContainer.style.aspectRatio = "16 / 9";
          }
        }
        updateCanvasElementsView();
        toast(`Canvas set to ${r}`, "ok");
      });
    }

    // Secondary ⋯ Action Dropdown Menu
    if (els.canvasMoreBtn && els.canvasMoreMenu) {
      els.canvasMoreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        els.canvasMoreMenu.hidden = !els.canvasMoreMenu.hidden;
      });
      document.addEventListener("click", (e) => {
        if (!e.target.closest("#canvasMoreDropdownWrap") && els.canvasMoreMenu) {
          els.canvasMoreMenu.hidden = true;
        }
      });
    }

    // Platform Safe Zone Auto-Fix Button
    if (els.canvasSafeFixBtn) {
      els.canvasSafeFixBtn.addEventListener("click", () => {
        let changed = false;
        ["hook", "captions"].forEach((k) => {
          if (!canvasState[k]) return;
          if (canvasState[k].preferred_x < 0.15) { canvasState[k].preferred_x = 0.20; changed = true; }
          if (canvasState[k].preferred_x > 0.82) { canvasState[k].preferred_x = 0.75; changed = true; }
          if (canvasState[k].preferred_y < 0.11) { canvasState[k].preferred_y = 0.14; changed = true; }
          if (canvasState[k].preferred_y > 0.80) { canvasState[k].preferred_y = 0.76; changed = true; }
        });
        if (changed) {
          updateCanvasElementsView();
          pushCanvasHistory("Auto Fix Safe Zone");
          toast("Repositioned inside platform safe area", "ok");
        }
        if (els.canvasSafeWarning) els.canvasSafeWarning.hidden = true;
      });
    }

    if (els.canvasSafeToggle) {
      els.canvasSafeToggle.addEventListener("change", () => {
        if (els.canvasSafeGuides) {
          els.canvasSafeGuides.classList.toggle("is-hidden", !els.canvasSafeToggle.checked);
        }
        checkSafeZoneBounds();
      });
    }

    // Accordion Group Click Handling (Only 1 open at a time)
    const accGroup = document.getElementById("canvasAccordionGroup");
    if (accGroup) {
      accGroup.addEventListener("click", (e) => {
        const header = e.target.closest(".accordion-header");
        if (!header) return;
        const targetId = header.dataset.target;
        const item = document.getElementById(targetId);
        if (!item) return;
        const wasOpen = item.classList.contains("is-open");
        accGroup.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("is-open"));
        if (!wasOpen) {
          item.classList.add("is-open");
          if (targetId === "accItemPosition") {
            updatePositionGridState();
          }
        }
      });
    }

    // Sub-drawers for advanced typography and position
    if (els.btnAdvancedTypo && els.drawerAdvancedTypo) {
      els.btnAdvancedTypo.addEventListener("click", () => {
        const isHidden = !els.drawerAdvancedTypo.hidden;
        els.drawerAdvancedTypo.hidden = isHidden;
        if (els.chevronAdvancedTypo) {
          els.chevronAdvancedTypo.classList.toggle("is-open", !isHidden);
        }
      });
    }

    if (els.btnAdvancedPos && els.drawerAdvancedPos) {
      els.btnAdvancedPos.addEventListener("click", () => {
        const isHidden = !els.drawerAdvancedPos.hidden;
        els.drawerAdvancedPos.hidden = isHidden;
        if (els.chevronAdvancedPos) {
          els.chevronAdvancedPos.classList.toggle("is-open", !isHidden);
        }
      });
    }

    // 3x3 Position Grid & Target Layer Selector
    if (els.targetToggleCaptions) {
      els.targetToggleCaptions.addEventListener("click", () => {
        selectCanvasLayer("captions");
      });
    }
    if (els.targetToggleHook) {
      els.targetToggleHook.addEventListener("click", () => {
        selectCanvasLayer("hook");
      });
    }

    if (els.position3x3Grid) {
      els.position3x3Grid.addEventListener("click", (e) => {
        const cell = e.target.closest(".pos-cell");
        if (!cell) return;
        const pos = cell.dataset.pos;
        if (!pos || !POS_GRID_COORDS[pos]) return;
        const target = currentPositionTarget || "captions";
        if (!canvasState[target]) return;
        canvasState[target].preferred_x = POS_GRID_COORDS[pos].x;
        canvasState[target].preferred_y = POS_GRID_COORDS[pos].y;
        updateCanvasElementsView();
        updatePositionGridState();
        pushCanvasHistory(`Position ${target} to ${pos}`);
      });
    }

    if (els.posBtnTop) {
      els.posBtnTop.addEventListener("click", () => {
        const target = currentPositionTarget || "captions";
        if (canvasState[target]) {
          canvasState[target].preferred_y = 0.12;
          updateCanvasElementsView();
          updatePositionGridState();
          pushCanvasHistory(`Position ${target} Top`);
        }
      });
    }
    if (els.posBtnCenter) {
      els.posBtnCenter.addEventListener("click", () => {
        const target = currentPositionTarget || "captions";
        if (canvasState[target]) {
          canvasState[target].preferred_y = 0.50;
          updateCanvasElementsView();
          updatePositionGridState();
          pushCanvasHistory(`Position ${target} Center`);
        }
      });
    }
    if (els.posBtnBottom) {
      els.posBtnBottom.addEventListener("click", () => {
        const target = currentPositionTarget || "captions";
        if (canvasState[target]) {
          canvasState[target].preferred_y = 0.78;
          updateCanvasElementsView();
          updatePositionGridState();
          pushCanvasHistory(`Position ${target} Bottom`);
        }
      });
    }

    // Hook Section Controls
    if (els.canvasHookVisibleToggle) {
      els.canvasHookVisibleToggle.addEventListener("change", () => {
        if (els.canvasHookBox) {
          els.canvasHookBox.hidden = !els.canvasHookVisibleToggle.checked;
        }
        pushCanvasHistory("Toggle Hook Visibility");
      });
    }

    if (els.canvasHookStyleSelect) {
      els.canvasHookStyleSelect.addEventListener("change", () => {
        const st = els.canvasHookStyleSelect.value;
        if (st === "pill") {
          canvasState.hook.box_enabled = true;
          canvasState.hook.background_color = "#000000";
        } else if (st === "banner") {
          canvasState.hook.box_enabled = true;
          canvasState.hook.background_color = "#f59e0b";
        } else {
          canvasState.hook.box_enabled = false;
        }
        updateCanvasElementsView();
        pushCanvasHistory("Hook Style: " + st);
      });
    }

    if (els.canvasHookPosSelect) {
      els.canvasHookPosSelect.addEventListener("change", () => {
        const p = els.canvasHookPosSelect.value;
        if (p === "top") canvasState.hook.preferred_y = 0.12;
        else if (p === "middle") canvasState.hook.preferred_y = 0.50;
        else if (p === "bottom") canvasState.hook.preferred_y = 0.75;
        updateCanvasElementsView();
        pushCanvasHistory("Hook Pos: " + p);
      });
    }

    // Captions Animation Select
    if (els.canvasCapAnimationSelect) {
      els.canvasCapAnimationSelect.addEventListener("change", () => {
        canvasState.captions.animation = els.canvasCapAnimationSelect.value;
        pushCanvasHistory("Caption Animation: " + els.canvasCapAnimationSelect.value);
        toast(`Animation set to ${els.canvasCapAnimationSelect.value.replace("_", " ")}`, "ok");
      });
    }

    // Close / Back Buttons
    if (els.canvasClose) {
      els.canvasClose.addEventListener("click", closeVisualCanvasModal);
    }
    if (els.canvasBackBtn) {
      els.canvasBackBtn.addEventListener("click", closeVisualCanvasModal);
    }
    if (els.canvasDoneTopBtn) {
      els.canvasDoneTopBtn.addEventListener("click", applyCanvasToClip);
    }

    // Preset View All
    if (els.quickStartViewAllBtn) {
      els.quickStartViewAllBtn.addEventListener("click", () => {
        openQuickStartModal(activePresetFilter);
      });
    }
    if (els.presetsViewAllBtn) {
      els.presetsViewAllBtn.addEventListener("click", () => {
        openQuickStartModal(activePresetFilter);
      });
    }

    if (els.quickStartCloseBtn) {
      els.quickStartCloseBtn.addEventListener("click", closeQuickStartModal);
    }

    if (els.quickStartModal) {
      els.quickStartModal.addEventListener("click", (e) => {
        if (e.target === els.quickStartModal) closeQuickStartModal();
      });
    }

    if (els.presetFilterPills) {
      els.presetFilterPills.addEventListener("click", (e) => {
        const pill = e.target.closest(".preset-pill");
        if (!pill) return;
        els.presetFilterPills.querySelectorAll(".preset-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        activePresetFilter = pill.dataset.cat || "all";
        renderStylePresets(activePresetFilter);
      });
    }

    if (els.modalPresetFilterPills) {
      els.modalPresetFilterPills.addEventListener("click", (e) => {
        const pill = e.target.closest(".preset-pill");
        if (!pill) return;
        els.modalPresetFilterPills.querySelectorAll(".preset-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const cat = pill.dataset.cat || "all";
        renderQuickStartModal(cat);
      });
    }

    // Save as Custom Preset button
    if (els.canvasSavePresetBtn) {
      els.canvasSavePresetBtn.addEventListener("click", () => {
        toast("Current style saved as custom preset for this campaign!", "ok");
      });
    }

    // Change Clip Button
    if (els.canvasChangeClipBtn) {
      els.canvasChangeClipBtn.addEventListener("click", () => {
        const clips = allClips();
        if (clips.length <= 1) {
          toast("Only one clip in this campaign.", "ok");
          return;
        }
        const curIdx = currentCanvasClip ? clips.indexOf(currentCanvasClip) : 0;
        const nextClip = clips[(curIdx + 1) % clips.length];
        openVisualCanvasModal(nextClip, nextClip.source_id);
      });
    }

    // Bottom Action Buttons
    if (els.canvasResetBtn) {
      els.canvasResetBtn.addEventListener("click", resetCanvasLayout);
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

    // Global Keyboard Shortcuts when Studio is Open
    document.addEventListener("keydown", (ev) => {
      if (!els.visualCanvasModal || els.visualCanvasModal.hidden) return;

      // Escape to deselect or close
      if (ev.key === "Escape") {
        if (activeSelectedLayer) {
          selectCanvasLayer(null);
        } else {
          closeVisualCanvasModal();
        }
        return;
      }

      // Undo / Redo
      if ((ev.ctrlKey || ev.metaKey) && (ev.key === "z" || ev.key === "Z")) {
        ev.preventDefault();
        if (ev.shiftKey) {
          redoCanvas();
        } else {
          undoCanvas();
        }
        return;
      }
      if ((ev.ctrlKey || ev.metaKey) && (ev.key === "y" || ev.key === "Y")) {
        ev.preventDefault();
        redoCanvas();
        return;
      }

      // Arrow keys nudge selected text
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(ev.key)) {
        if (!activeSelectedLayer) return;
        const tag = (document.activeElement && document.activeElement.tagName) || "";
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

        ev.preventDefault();
        const step = ev.shiftKey ? 0.04 : 0.01;
        const key = activeSelectedLayer === "caption" ? "captions" : activeSelectedLayer;
        if (!canvasState[key]) return;

        if (ev.key === "ArrowUp") canvasState[key].preferred_y = Math.max(0.04, canvasState[key].preferred_y - step);
        if (ev.key === "ArrowDown") canvasState[key].preferred_y = Math.min(0.96, canvasState[key].preferred_y + step);
        if (ev.key === "ArrowLeft") canvasState[key].preferred_x = Math.max(0.06, canvasState[key].preferred_x - step);
        if (ev.key === "ArrowRight") canvasState[key].preferred_x = Math.min(0.94, canvasState[key].preferred_x + step);

        canvasState[key].preferred_x = Math.round(canvasState[key].preferred_x * 100) / 100;
        canvasState[key].preferred_y = Math.round(canvasState[key].preferred_y * 100) / 100;
        updateCanvasElementsView();
      }
    });
  }

  function resetCanvasLayout() {
    applyPresetStyle(STYLE_PRESETS[0]);
    canvasState.hook.preferred_x = 0.50;
    canvasState.hook.preferred_y = 0.12;
    canvasState.captions.preferred_x = 0.50;
    canvasState.captions.preferred_y = 0.78;
    canvasState.cta.preferred_x = 0.50;
    canvasState.cta.preferred_y = 0.92;
    canvasState.hook.single_line = true;
    canvasState.captions.single_line = true;
    updateCanvasElementsView();
    pushCanvasHistory("Reset Layout");
    toast("Reset layout positions & style to defaults.", "ok");
  }

  function closeVisualCanvasModal() {
    if (isCanvasPlaying) {
      isCanvasPlaying = false;
      clearInterval(canvasPlayInterval);
      if (els.canvasPlayBtn) els.canvasPlayBtn.innerHTML = `<svg class="icon"><use href="#icon-play"/></svg>`;
    }
    if (els.visualCanvasModal) els.visualCanvasModal.hidden = true;
  }

  function createPresetAnimatedPreview(preset) {
    const box = document.createElement("div");
    box.className = "preset-animated-preview";
    box.style.background = preset.previewBg || "#0a0e17";
    box.style.fontFamily = `"${preset.font}", sans-serif`;

    const strokeW = Math.max(1, Math.round((preset.captionOutlineW || 4) * 0.35));
    const strokeCol = preset.captionOutline || "#000000";
    const textColor = preset.captionColor || "#FFFFFF";
    const hlColor = preset.highlightColor || "#38BDF8";

    box.innerHTML = `
      <div class="prev-line" style="color: ${textColor}; -webkit-text-stroke: ${strokeW}px ${strokeCol};">
        <span class="prev-word">THE</span>
        <span class="prev-word">FUTURE</span>
      </div>
      <div class="prev-line" style="color: ${textColor}; -webkit-text-stroke: ${strokeW}px ${strokeCol};">
        <span class="prev-word active-pop" style="color: ${hlColor}; -webkit-text-stroke: ${strokeW}px ${strokeCol};">IS</span>
        <span class="prev-word">HERE</span>
      </div>
    `;
    return box;
  }

  const PRIMARY_PRESET_IDS = [
    "creator_default",
    "clean_cut",
    "karaoke",
    "beast_mode",
    "podcast_pro",
    "minimal"
  ];

  function renderStylePresets(filterCategory = activePresetFilter) {
    const target = els.quickStartPrimaryGrid || els.stylePresetsGrid;
    if (!target) return;
    target.innerHTML = "";

    // Show 6 primary presets or filter list
    let list;
    if (els.quickStartPrimaryGrid) {
      list = PRIMARY_PRESET_IDS.map((id) => STYLE_PRESETS.find((p) => p.id === id)).filter(Boolean);
      if (!list.length || list.length < 6) {
        list = STYLE_PRESETS.slice(0, 6);
      }
    } else {
      list = STYLE_PRESETS.filter((p) => {
        if (!filterCategory || filterCategory === "all") return true;
        return p.category === filterCategory;
      });
    }

    list.forEach((preset) => {
      const card = document.createElement("div");
      card.className = "style-preset-card" + (preset.id === activePresetId ? " active" : "");
      card.innerHTML = `
        <div class="preset-card-head">
          <span class="preset-card-title" title="${preset.name}">${preset.name}</span>
          <span class="preset-cat-badge">${preset.category || "style"}</span>
        </div>
      `;
      const prevBox = createPresetAnimatedPreview(preset);
      card.appendChild(prevBox);

      card.addEventListener("click", () => {
        applyPresetStyle(preset);
        target.querySelectorAll(".style-preset-card").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        toast(`Applied ${preset.name}`, "ok");
      });
      target.appendChild(card);
    });
  }

  function openQuickStartModal(filterCategory = "all") {
    if (!els.quickStartModal) return;
    renderQuickStartModal(filterCategory);
    els.quickStartModal.hidden = false;
  }

  function closeQuickStartModal() {
    if (els.quickStartModal) els.quickStartModal.hidden = true;
  }

  function renderQuickStartModal(filterCategory = "all") {
    if (!els.quickStartModalGrid) return;
    els.quickStartModalGrid.innerHTML = "";

    const list = STYLE_PRESETS.filter((p) => {
      if (!filterCategory || filterCategory === "all") return true;
      return p.category === filterCategory;
    });

    list.forEach((preset) => {
      const card = document.createElement("div");
      card.className = "modal-preset-card" + (preset.id === activePresetId ? " active" : "");
      card.innerHTML = `
        <div class="modal-preset-name">
          <span>${preset.name}</span>
          <span class="preset-cat-badge">${preset.category}</span>
        </div>
      `;
      const prevBox = createPresetAnimatedPreview(preset);
      prevBox.style.height = "72px";
      prevBox.style.fontSize = "16px";
      card.appendChild(prevBox);

      const meta = document.createElement("div");
      meta.className = "modal-preset-meta";
      meta.innerHTML = `
        <div class="modal-preset-desc">${preset.description}</div>
        <div class="modal-preset-best">
          <svg class="icon icon-tiny" aria-hidden="true"><use href="#icon-sparkles"/></svg>
          <span>Best: ${preset.bestFor || "Short-form clips"}</span>
        </div>
        <button type="button" class="btn btn-tiny ${preset.id === activePresetId ? "btn-primary" : "btn-ghost"} modal-preset-btn">
          ${preset.id === activePresetId ? "Active Preset" : "Apply Preset"}
        </button>
      `;
      card.appendChild(meta);

      card.addEventListener("click", () => {
        applyPresetStyle(preset);
        closeQuickStartModal();
        toast(`Applied preset: ${preset.name}`, "ok");
      });
      els.quickStartModalGrid.appendChild(card);
    });
  }

  function applyPresetStyle(preset) {
    activePresetId = preset.id;
    // Update Hook
    canvasState.hook.font = preset.hookFont || preset.font;
    canvasState.hook.weight = preset.weight || "Extra Bold";
    canvasState.hook.size = preset.hookSize || 78;
    canvasState.hook.color = preset.hookColor || "#FFFFFF";
    canvasState.hook.outline_color = preset.hookOutline || "#000000";
    canvasState.hook.outline_width = preset.hookOutlineW != null ? preset.hookOutlineW : 4;
    canvasState.hook.box_enabled = Boolean(preset.hookBox);
    canvasState.hook.background_color = preset.hookBoxColor || "#000000";

    // Update Captions
    canvasState.captions.font = preset.font;
    canvasState.captions.weight = preset.weight || "Bold";
    canvasState.captions.size = preset.captionSize || 66;
    canvasState.captions.color = preset.captionColor || "#FFFFFF";
    canvasState.captions.outline_color = preset.captionOutline || "#000000";
    canvasState.captions.outline_width = preset.captionOutlineW != null ? preset.captionOutlineW : 5;
    canvasState.captions.box_enabled = Boolean(preset.captionBox);
    canvasState.captions.background_color = preset.captionBoxColor || "#000000";
    canvasState.captions.highlight_color = preset.highlightColor || "#38BDF8";
    canvasState.captions.animation = preset.animation || "word_pop";
    canvasState.captions.animation_scale = preset.animationScale || 1.10;

    renderStylePresets(activePresetFilter);
    updateCanvasElementsView();
    pushCanvasHistory(`Apply Preset ${preset.name}`);
  }

  function fitSingleLine(textEl, targetSizePx, maxWidthRatio = 0.88, minSizePx = 11) {
    if (!textEl) return targetSizePx;
    const isSingleLine = els.canvasSingleLineToggle ? els.canvasSingleLineToggle.checked : true;
    if (!isSingleLine) {
      textEl.style.whiteSpace = "normal";
      textEl.style.wordBreak = "normal";
      textEl.style.fontSize = `${targetSizePx}px`;
      return targetSizePx;
    }

    const containerW = (els.canvasContainer && els.canvasContainer.clientWidth) || 320;
    const maxAllowedW = Math.floor(containerW * maxWidthRatio);

    textEl.style.whiteSpace = "nowrap";
    textEl.style.wordBreak = "keep-all";
    textEl.style.fontSize = `${targetSizePx}px`;

    let w = textEl.scrollWidth || textEl.offsetWidth || 0;
    const charCount = (textEl.textContent || "").length;

    if (w === 0 && charCount > 0) {
      const estimatedW = charCount * targetSizePx * 0.55;
      if (estimatedW > maxAllowedW) {
        targetSizePx = Math.max(minSizePx, Math.floor(targetSizePx * (maxAllowedW / estimatedW)));
        textEl.style.fontSize = `${targetSizePx}px`;
      }
      w = textEl.scrollWidth || textEl.offsetWidth || estimatedW;
    }

    let effectiveSize = targetSizePx;
    if (w > maxAllowedW && w > 0) {
      const scale = (maxAllowedW - 6) / w;
      effectiveSize = Math.max(minSizePx, Math.floor(targetSizePx * scale));
      textEl.style.fontSize = `${effectiveSize}px`;

      w = textEl.scrollWidth || textEl.offsetWidth || 0;
      while (w > maxAllowedW && effectiveSize > minSizePx) {
        effectiveSize -= 1;
        textEl.style.fontSize = `${effectiveSize}px`;
        w = textEl.scrollWidth || textEl.offsetWidth || 0;
      }
    }
    return effectiveSize;
  }

  function updateCanvasElementsView() {
    if (!els.canvasHookBox) return;
    const containerW = (els.canvasContainer && els.canvasContainer.clientWidth) || 320;
    const scaleFactor = containerW / 1080; // normalized to 1080 canonical ASS canvas

    // 1. Hook Element
    const hookX = Math.round((canvasState.hook.preferred_x != null ? canvasState.hook.preferred_x : 0.5) * 100);
    const hookY = Math.round((canvasState.hook.preferred_y != null ? canvasState.hook.preferred_y : 0.12) * 100);
    els.canvasHookBox.style.left = `${hookX}%`;
    els.canvasHookBox.style.top = `${hookY}%`;
    if (els.canvasHookPosBadge) els.canvasHookPosBadge.textContent = `X: ${hookX}% · Y: ${hookY}%`;
    if (els.canvasHookXSlider) els.canvasHookXSlider.value = hookX;
    if (els.canvasHookXVal) els.canvasHookXVal.textContent = `${hookX}%`;
    if (els.canvasHookYSlider) els.canvasHookYSlider.value = hookY;
    if (els.canvasHookYVal) els.canvasHookYVal.textContent = `${hookY}%`;

    // Hook snap button highlights
    if (els.hookAlignLeft) els.hookAlignLeft.classList.toggle("active", hookX <= 25);
    if (els.hookAlignCenter) els.hookAlignCenter.classList.toggle("active", hookX > 25 && hookX < 75);
    if (els.hookAlignRight) els.hookAlignRight.classList.toggle("active", hookX >= 75);

    if (els.canvasHookText) {
      if (els.canvasHookTextInput && els.canvasHookTextInput.value) {
        els.canvasHookText.textContent = els.canvasHookTextInput.value;
      }
      els.canvasHookText.style.fontFamily = `"${canvasState.hook.font}", sans-serif`;
      els.canvasHookText.style.color = canvasState.hook.color;
      els.canvasHookText.style.letterSpacing = `${canvasState.hook.letter_spacing || 0}px`;

      const targetHookPx = Math.max(12, Math.round((canvasState.hook.size || 76) * scaleFactor * 1.15));
      const effectiveHookPx = fitSingleLine(els.canvasHookText, targetHookPx, 0.88, 10);

      if (els.canvasHookSizeVal) {
        els.canvasHookSizeVal.textContent = `${canvasState.hook.size || 76}px`;
      }
      if (els.canvasHookSizeSlider) {
        els.canvasHookSizeSlider.value = canvasState.hook.size || 76;
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
        const w = Math.max(1, Math.round((canvasState.hook.outline_width || 8) * 0.38));
        els.canvasHookText.style.webkitTextStroke = `${w}px ${canvasState.hook.outline_color}`;
        els.canvasHookText.style.textShadow = "0 2px 8px rgba(0,0,0,0.85)";
      }
    }

    // 2. Subtitle Element
    const capX = Math.round((canvasState.captions.preferred_x != null ? canvasState.captions.preferred_x : 0.5) * 100);
    const capY = Math.round((canvasState.captions.preferred_y != null ? canvasState.captions.preferred_y : 0.78) * 100);
    els.canvasCaptionBox.style.left = `${capX}%`;
    els.canvasCaptionBox.style.top = `${capY}%`;
    if (els.canvasCaptionPosBadge) els.canvasCaptionPosBadge.textContent = `X: ${capX}% · Y: ${capY}%`;
    if (els.canvasCaptionXSlider) els.canvasCaptionXSlider.value = capX;
    if (els.canvasCaptionXVal) els.canvasCaptionXVal.textContent = `${capX}%`;
    if (els.canvasCaptionYSlider) els.canvasCaptionYSlider.value = capY;
    if (els.canvasCaptionYVal) els.canvasCaptionYVal.textContent = `${capY}%`;

    // Caption snap button highlights
    if (els.capAlignLeft) els.capAlignLeft.classList.toggle("active", capX <= 25);
    if (els.capAlignCenter) els.capAlignCenter.classList.toggle("active", capX > 25 && capX < 75);
    if (els.capAlignRight) els.capAlignRight.classList.toggle("active", capX >= 75);

    if (els.canvasCaptionText) {
      els.canvasCaptionText.style.fontFamily = `"${canvasState.captions.font}", sans-serif`;
      els.canvasCaptionText.style.color = canvasState.captions.color;
      els.canvasCaptionText.style.letterSpacing = `${canvasState.captions.letter_spacing || 0}px`;

      const targetCapPx = Math.max(12, Math.round((canvasState.captions.size || 65) * scaleFactor * 1.15));
      const effectiveCapPx = fitSingleLine(els.canvasCaptionText, targetCapPx, 0.88, 10);

      if (els.canvasCaptionSizeVal) {
        els.canvasCaptionSizeVal.textContent = `${canvasState.captions.size || 65}px`;
      }
      if (els.canvasCaptionSizeSlider) {
        els.canvasCaptionSizeSlider.value = canvasState.captions.size || 65;
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
        const w = Math.max(1, Math.round((canvasState.captions.outline_width || 6) * 0.38));
        els.canvasCaptionText.style.webkitTextStroke = `${w}px ${canvasState.captions.outline_color}`;
        els.canvasCaptionText.style.textShadow = "0 2px 8px rgba(0,0,0,0.85)";
      }
    }

    // 3. CTA Watermark
    if (canvasState.cta && canvasState.cta.enabled) {
      if (els.canvasCtaBox) els.canvasCtaBox.hidden = false;
      const ctaX = Math.round((canvasState.cta.preferred_x != null ? canvasState.cta.preferred_x : 0.5) * 100);
      const ctaY = Math.round((canvasState.cta.preferred_y != null ? canvasState.cta.preferred_y : 0.92) * 100);
      if (els.canvasCtaBox) {
        els.canvasCtaBox.style.left = `${ctaX}%`;
        els.canvasCtaBox.style.top = `${ctaY}%`;
      }
      if (els.canvasCtaPosBadge) els.canvasCtaPosBadge.textContent = `X: ${ctaX}% · Y: ${ctaY}%`;
      if (els.canvasCtaXSlider) els.canvasCtaXSlider.value = ctaX;
      if (els.canvasCtaXVal) els.canvasCtaXVal.textContent = `${ctaX}%`;
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

    // Form inputs sync
    if (els.canvasFontSelect) els.canvasFontSelect.value = canvasState.hook.font || "Anton";
    if (els.canvasWeightSelect) els.canvasWeightSelect.value = canvasState.hook.weight || "Extra Bold";
    if (els.canvasTextColor) els.canvasTextColor.value = canvasState.hook.color || "#FFFFFF";
    if (els.canvasOutlineColor) els.canvasOutlineColor.value = canvasState.hook.outline_color || "#000000";
    if (els.canvasHighlightColor) els.canvasHighlightColor.value = canvasState.captions.highlight_color || "#FFF35C";
    if (els.canvasOutlineWidthSlider) {
      els.canvasOutlineWidthSlider.value = canvasState.hook.outline_width || 8;
      if (els.canvasOutlineWidthVal) els.canvasOutlineWidthVal.textContent = `${canvasState.hook.outline_width || 8}px`;
    }
    if (els.canvasLetterSpacingSlider) {
      els.canvasLetterSpacingSlider.value = canvasState.hook.letter_spacing || 0;
      if (els.canvasLetterSpacingVal) els.canvasLetterSpacingVal.textContent = `${canvasState.hook.letter_spacing || 0}%`;
    }
    if (els.canvasLineHeightSlider) {
      els.canvasLineHeightSlider.value = canvasState.hook.line_height || 100;
      if (els.canvasLineHeightVal) els.canvasLineHeightVal.textContent = `${canvasState.hook.line_height || 100}%`;
    }
    if (els.canvasBoxBgToggle) els.canvasBoxBgToggle.checked = !!canvasState.hook.box_enabled;
    if (els.canvasBoxBgColor) els.canvasBoxBgColor.value = canvasState.hook.background_color || "#000000";

    if (els.canvasHookPosSelect) {
      const y = canvasState.hook.preferred_y != null ? canvasState.hook.preferred_y : 0.12;
      if (y <= 0.25) els.canvasHookPosSelect.value = "top";
      else if (y <= 0.65) els.canvasHookPosSelect.value = "middle";
      else els.canvasHookPosSelect.value = "bottom";
    }
    if (els.canvasHookStyleSelect) {
      if (canvasState.hook.box_enabled && canvasState.hook.background_color === "#f59e0b") {
        els.canvasHookStyleSelect.value = "banner";
      } else if (canvasState.hook.box_enabled) {
        els.canvasHookStyleSelect.value = "pill";
      } else {
        els.canvasHookStyleSelect.value = "clean";
      }
    }

    // Captions Form Inputs Sync
    if (els.canvasCapFontSelect) els.canvasCapFontSelect.value = canvasState.captions.font || "Montserrat";
    if (els.canvasCapAnimationSelect) els.canvasCapAnimationSelect.value = canvasState.captions.animation || "word_pop";
    if (els.canvasCapWeightSelect) els.canvasCapWeightSelect.value = canvasState.captions.weight || "Bold";
    if (els.canvasCapTextColor) els.canvasCapTextColor.value = canvasState.captions.color || "#FFFFFF";
    if (els.canvasCapHighlightColor) els.canvasCapHighlightColor.value = canvasState.captions.highlight_color || "#FFF35C";
    if (els.canvasCapOutlineColor) els.canvasCapOutlineColor.value = canvasState.captions.outline_color || "#000000";
    if (els.canvasCapOutlineWidthSlider) {
      els.canvasCapOutlineWidthSlider.value = canvasState.captions.outline_width || 6;
      if (els.canvasCapOutlineWidthVal) els.canvasCapOutlineWidthVal.textContent = `${canvasState.captions.outline_width || 6}px`;
    }
    if (els.canvasCapLetterSpacingSlider) {
      els.canvasCapLetterSpacingSlider.value = canvasState.captions.letter_spacing || 0;
      if (els.canvasCapLetterSpacingVal) els.canvasCapLetterSpacingVal.textContent = `${canvasState.captions.letter_spacing || 0}%`;
    }
    if (els.canvasCapLineHeightSlider) {
      els.canvasCapLineHeightSlider.value = canvasState.captions.line_height || 100;
      if (els.canvasCapLineHeightVal) els.canvasCapLineHeightVal.textContent = `${canvasState.captions.line_height || 100}%`;
    }
    if (els.canvasCapBoxBgToggle) els.canvasCapBoxBgToggle.checked = !!canvasState.captions.box_enabled;
    if (els.canvasCapBoxBgColor) els.canvasCapBoxBgColor.value = canvasState.captions.background_color || "#000000";

    // CTA options
    if (els.canvasCtaToggle) els.canvasCtaToggle.checked = !!(canvasState.cta && canvasState.cta.enabled);
    if (els.canvasCtaOptions) els.canvasCtaOptions.hidden = !(canvasState.cta && canvasState.cta.enabled);
    if (els.canvasCtaTextInput && canvasState.cta) els.canvasCtaTextInput.value = canvasState.cta.text || "";

    // Sync floating micro-toolbar
    updateMicroToolbarPosition();
    checkSafeZoneBounds();
  }

  async function fetchFrameSnapshot(videoId, timestamp) {
    if (!videoId) {
      if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
      if (els.canvasBgImg) els.canvasBgImg.hidden = true;
      return;
    }
    if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
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
        if (els.canvasClipThumb) {
          els.canvasClipThumb.src = res.url;
          els.canvasClipThumb.style.display = "block";
          if (els.canvasClipThumbFallback) els.canvasClipThumbFallback.style.display = "none";
        }
      }
    } catch (e) {
      console.warn("Snapshot extraction failed:", e);
      if (els.canvasBgFallback) els.canvasBgFallback.hidden = false;
    }
  }

  function setupFilmstrip(clip, videoId) {
    if (!els.canvasFilmstripTrack || !clip) return;
    els.canvasFilmstripTrack.innerHTML = "";
    const start = clip.start || 0;
    const end = clip.end || 15;
    const duration = Math.max(1, end - start);
    const steps = 7;
    for (let i = 0; i < steps; i++) {
      const t = start + (duration * i) / (steps - 1);
      const card = document.createElement("div");
      card.className = "filmstrip-frame-card" + (i === Math.floor(steps / 2) ? " active" : "");
      card.title = `Seek to ${fmt(t)}`;
      card.innerHTML = `<img src="/api/snapshot?thumb=1" alt="frame" onerror="this.style.display='none'">`;
      card.addEventListener("click", () => {
        document.querySelectorAll(".filmstrip-frame-card").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        currentClipTimestamp = t;
        if (els.canvasTimelineSlider) els.canvasTimelineSlider.value = t;
        if (els.canvasTimeDisplay) els.canvasTimeDisplay.textContent = `${fmt(t)} / ${fmt(end)}`;
        fetchFrameSnapshot(videoId, t);
      });
      els.canvasFilmstripTrack.appendChild(card);
    }
  }

  function openVisualCanvasModal(clip, videoId) {
    currentCanvasClip = clip;
    const firstGroup = candidateGroups.find((g) => g.clips && g.clips.length) || candidateGroups[0];
    currentCanvasVideoId = videoId || (firstGroup && firstGroup.source_id);

    if (clip) {
      const idx = allClips().indexOf(clip);
      if (els.canvasClipTitle) {
        els.canvasClipTitle.textContent = `Clip #${idx >= 0 ? idx + 1 : "1"}`;
      }
      if (els.canvasClipSpeaker) {
        els.canvasClipSpeaker.textContent = (firstGroup && firstGroup.source_name) || "Speaker / Source";
      }
      if (els.canvasClipDuration) {
        els.canvasClipDuration.textContent = durationFmt(clip.start, clip.end);
      }
      if (els.canvasDurationBadge) {
        const d = Math.max(1, Math.round((clip.end || 0) - (clip.start || 0)));
        els.canvasDurationBadge.textContent = `${d}s`;
      }
      if (els.canvasTimelineSlider) {
        els.canvasTimelineSlider.min = clip.start || 0;
        els.canvasTimelineSlider.max = clip.end || 15;
        currentClipTimestamp = (clip.start + clip.end) / 2;
        els.canvasTimelineSlider.value = currentClipTimestamp;
      }
      if (els.canvasTimeDisplay) {
        els.canvasTimeDisplay.textContent = `${fmt(currentClipTimestamp)} / ${fmt(clip.end)}`;
      }

      const rawHook = clip.hook || "THE MOST ENGAGING HOOK TITLE";
      const cleanHook = rawHook.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
      if (els.canvasHookText) els.canvasHookText.textContent = cleanHook;
      if (els.canvasHookTextInput) els.canvasHookTextInput.value = cleanHook;
      if (els.layerTextHook) els.layerTextHook.textContent = cleanHook;
      if (els.hookCharCount) els.hookCharCount.textContent = `${cleanHook.length}/60`;

      const rawSnippet = clip.snippet || "people are gonna sleep on you";
      const cleanSnippet = rawSnippet.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
      if (els.layerTextCaption) els.layerTextCaption.textContent = cleanSnippet;
      if (els.canvasCaptionTextInput) els.canvasCaptionTextInput.value = cleanSnippet;
      if (els.captionCharCount) els.captionCharCount.textContent = `${cleanSnippet.length}/60`;

      if (els.canvasCaptionText) {
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
      fetchFrameSnapshot(currentCanvasVideoId, currentClipTimestamp);
      setupFilmstrip(clip, currentCanvasVideoId);
    } else {
      if (els.canvasClipTitle) els.canvasClipTitle.textContent = "Campaign Default Layout";
      if (els.canvasClipSpeaker) els.canvasClipSpeaker.textContent = "All Clips Default";
      if (els.canvasClipDuration) els.canvasClipDuration.textContent = "Default 9:16";
      const defaultHook = "ENGAGING TOP HOOK HEADLINE";
      if (els.canvasHookText) els.canvasHookText.textContent = defaultHook;
      if (els.canvasHookTextInput) els.canvasHookTextInput.value = defaultHook;
      if (els.layerTextHook) els.layerTextHook.textContent = defaultHook;
      if (els.canvasCaptionText) els.canvasCaptionText.innerHTML = "Subtitles stay <span class=\"hl-word\">in this line</span>";
      applyPresetStyle(STYLE_PRESETS[0]);
      fetchFrameSnapshot(currentCanvasVideoId, 2.0);
    }

    canvasHistory = [];
    canvasHistoryIndex = -1;
    if (els.canvasSafeToggle) els.canvasSafeToggle.checked = false;
    if (els.canvasSafeGuides) els.canvasSafeGuides.classList.add("is-hidden");
    document.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("is-open"));

    pushCanvasHistory("Initial Open");
    renderStylePresets();
    selectCanvasLayer("captions");
    if (els.visualCanvasModal) els.visualCanvasModal.hidden = false;
    updateCanvasElementsView();
    setTimeout(() => {
      updateCanvasElementsView();
    }, 50);
  }

  async function applyCanvasToClip() {
    if (!currentCanvasClip) {
      return applyCanvasToCampaign();
    }
    if (els.canvasHookTextInput && els.canvasHookTextInput.value.trim()) {
      currentCanvasClip.hook = els.canvasHookTextInput.value.trim();
    }
    currentCanvasClip.template = activePresetId;
    currentCanvasClip.preset = activePresetId;
    currentCanvasClip.layout = JSON.parse(JSON.stringify(canvasState));
    dirty = true;
    updateReviewHint();
    closeVisualCanvasModal();
    toast(`Preset ${activePresetId} and layout applied to this clip.`, "ok");
    renderReview();
    if (els.btnSaveReview) els.btnSaveReview.click();
  }

  async function applyCanvasToCampaign() {
    try {
      allClips().forEach((c) => {
        c.template = activePresetId;
        c.preset = activePresetId;
        c.layout = JSON.parse(JSON.stringify(canvasState));
      });
      dirty = true;
      updateReviewHint();

      if (currentCampaignId) {
        await apiPost(`/api/campaigns/${encodeURIComponent(currentCampaignId)}/template`, {
          template: {
            name: activePresetId,
            hook: canvasState.hook,
            captions: canvasState.captions,
            cta: canvasState.cta,
          }
        });
      }

      if (els.btnSaveReview) await saveReviewDecisions();

      closeVisualCanvasModal();
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
      bLayout.className = "btn-preview btn-canvas-layout";
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
    if (state && Array.isArray(state.presets) && state.presets.length > 0) {
      const merged = QUICK_START_PRESETS.map((qp) => {
        const bp = state.presets.find((p) => p.id === qp.id);
        return bp ? Object.assign({}, qp, bp) : qp;
      });
      state.presets.forEach((bp) => {
        if (!merged.some((m) => m.id === bp.id)) {
          merged.push(Object.assign({
            category: bp.category || "custom",
            font: bp.font || "Montserrat",
            weight: "Bold",
            captionColor: "#FFFFFF",
            captionOutline: "#000000",
            highlightColor: "#38BDF8"
          }, bp));
        }
      });
      STYLE_PRESETS = merged;
      renderStylePresets(activePresetFilter);
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
    const allTpls = (state && state.templates) || [];
    const presetsList = STYLE_PRESETS || [];
    const settings = campaignSettings();
    const prev = (els.templateSelect && els.templateSelect.value) || settings.default_template;

    function buildOptions() {
      let html = `<optgroup label="⚡ Quick Start Presets (15)">`;
      presetsList.forEach((p) => {
        html += `<option value="${escapeHtml(p.id)}">⚡ ${escapeHtml(p.name)} (${escapeHtml(p.category)})</option>`;
      });
      html += `</optgroup>`;

      if (allTpls.length > 0) {
        html += `<optgroup label="Templates">`;
        allTpls.forEach((t) => {
          html += `<option value="${escapeHtml(t.name)}">${escapeHtml(t.label || t.name)}</option>`;
        });
        html += `</optgroup>`;
      }
      return html;
    }

    if (els.templateSelect) {
      els.templateSelect.innerHTML = buildOptions();
      const validVals = [...presetsList.map((p) => p.id), ...allTpls.map((t) => t.name)];
      if (prev && validVals.includes(prev)) {
        els.templateSelect.value = prev;
      } else if (state && state.config && validVals.includes(state.config.default_template)) {
        els.templateSelect.value = state.config.default_template;
      } else if (validVals.length) {
        els.templateSelect.value = validVals[0];
      }
    }

    if (els.exportConfigTemplate) {
      const prevExp = els.exportConfigTemplate.value;
      els.exportConfigTemplate.innerHTML = buildOptions();
      if (prevExp) els.exportConfigTemplate.value = prevExp;
    }

    if (els.goldenStyles) {
      els.goldenStyles.innerHTML = "";
      const quickBadges = presetsList.filter((p) => p.recommended).slice(0, 4);
      quickBadges.forEach((t) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "golden-style" + (t.id === (els.templateSelect && els.templateSelect.value) ? " on" : "");
        btn.innerHTML = `${svgIcon("sparkles")} <span>${escapeHtml(t.name)}</span>`;
        btn.addEventListener("click", () => {
          if (els.templateSelect) els.templateSelect.value = t.id;
          if (els.goldenStyles) {
            els.goldenStyles.querySelectorAll(".golden-style").forEach((el, i) => {
              el.classList.toggle("on", quickBadges[i] && quickBadges[i].id === t.id);
            });
          }
          updateTemplateDesc();
          saveCampaignSettings({ default_template: t.id });
        });
        els.goldenStyles.appendChild(btn);
      });
    }
    updateTemplateDesc();
  }

  function updateTemplateDesc() {
    const val = els.templateSelect && els.templateSelect.value;
    const p = (STYLE_PRESETS || []).find((x) => x.id === val);
    if (p) {
      if (els.templateDesc) els.templateDesc.textContent = `${p.description} (Best for: ${p.bestFor || "Short-form clips"})`;
      return;
    }
    const tpls = (state && state.templates) || [];
    const t = tpls.find((x) => x.name === val);
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

