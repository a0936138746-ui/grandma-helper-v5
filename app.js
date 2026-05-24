const STORE_KEY = "grandmaVoiceLogs";
    const storage = window.appStorage;
    const voiceBtn = document.getElementById("voiceBtn");
    const voiceText = document.getElementById("voiceText");
    const summary = document.getElementById("summary");
    const reminder = document.getElementById("reminder");
    const today = document.getElementById("today");
    const timeline = document.getElementById("timeline");
    const actionStatus = document.getElementById("actionStatus");
    const webhookStatus = document.getElementById("webhookStatus");
    const webhookInput = document.getElementById("webhookInput");
    const doctorSummaryText = document.getElementById("doctorSummaryText");
    const modeStatus = document.getElementById("modeStatus");
    const weeklyReportText = document.getElementById("weeklyReportText");
    const backupText = document.getElementById("backupText");
    const lifeNoteInput = document.getElementById("lifeNoteInput");
    const lifeNoteStatus = document.getElementById("lifeNoteStatus");
    const habitList = document.getElementById("habitList");
    const taskCardList = document.getElementById("taskCardList");
    const taskGroupSummary = document.getElementById("taskGroupSummary");
    const floatingStatus = document.getElementById("floatingStatus");
    const floatingActionBtn = document.getElementById("floatingActionBtn");
    const systemStatusGrid = document.getElementById("systemStatusGrid");
    const todayFocus = document.getElementById("todayFocus");
    const bpHighInput = document.getElementById("bpHighInput");
    const bpLowInput = document.getElementById("bpLowInput");
    const sugarHighInput = document.getElementById("sugarHighInput");
    const sugarLowInput = document.getElementById("sugarLowInput");
    const alertRulesStatus = document.getElementById("alertRulesStatus");
    const careMessage = document.getElementById("careMessage");
    const keywordInput = document.getElementById("keywordInput");
    const keywordReplyInput = document.getElementById("keywordReplyInput");
    const keywordRuleList = document.getElementById("keywordRuleList");
    const medicineList = document.getElementById("medicineList");
    const medicineNameInput = document.getElementById("medicineNameInput");
    const medicineTimeInput = document.getElementById("medicineTimeInput");
    const medicineCountInput = document.getElementById("medicineCountInput");
    const habitRadar = document.getElementById("habitRadar");
    const healthTrend = document.getElementById("healthTrend");
    const profileSelect = document.getElementById("profileSelect");
    const profileStatus = document.getElementById("profileStatus");
    const quickActionGrid = document.getElementById("quickActionGrid");
    const browserGate = document.getElementById("browserGate");
    const copyPageLinkBtn = document.getElementById("copyPageLinkBtn");
    const openChromeLink = document.getElementById("openChromeLink");
    const dismissBrowserGateBtn = document.getElementById("dismissBrowserGateBtn");

    const schedulePlan = [
      { time: "06:30", text: "早安、天氣、穿衣、量血壓血糖提醒" },
      { time: "07:30", text: "早餐前吃藥與打針提醒" },
      { time: "08:00", text: "心情詢問與健康數字記錄" },
      { time: "10:00", text: "散步或復健活動提醒" },
      { time: "12:00", text: "午餐吃藥與簡單飲食建議" },
      { time: "14:00", text: "午睡前陪伴聊天或影片" },
      { time: "16:00", text: "下午點心與血糖提醒" },
      { time: "18:00", text: "晚餐吃藥提醒" },
      { time: "19:30", text: "晚間陪伴時間（故事、老歌）" },
      { time: "21:00", text: "睡前吃藥、量血壓、看診準備" },
      { time: "22:00", text: "晚安與今日健康總結" }
    ];
    const WEBHOOK_KEY = "familyWebhookUrl";
    const MODE_KEY = "grandmaHelperMode";
    const VIEW_KEY = "grandmaHelperView";
    const HABIT_KEY = "grandmaHelperHabits";
    const TASK_KEY = "grandmaHelperTaskCards";
    const ALERT_RULES_KEY = "grandmaHelperAlertRules";
    const KEYWORD_RULES_KEY = "grandmaHelperKeywordRules";
    const ICON_MODE_KEY = "grandmaHelperIconMode";
    const MOOD_KEY = "grandmaHelperMoods";
    const MEDICINE_KEY = "grandmaHelperMedicines";
    const PROFILE_KEY = "grandmaHelperProfile";

    const profiles = {
      elder: {
        name: "長者照護",
        manager: "家人",
        quickActions: [
          { label: "量測<br>我量好了", value: "我量好了" },
          { label: "吃藥<br>我吃藥了", value: "我吃藥了" },
          { label: "影片<br>我要看影片", value: "我要看影片" },
          { label: "警示<br>我不舒服", value: "我不舒服", alert: true }
        ],
        care: {
          chat: "我在。你可以跟我說身體、心情，或想到什麼事情我幫你記。",
          music: "我幫你記下想聽老歌，等等可以接 YouTube 推薦。"
        },
        categories: ["醫療", "購物", "繳費", "聯絡", "節目", "家務", "其他"]
      },
      student: {
        name: "學生",
        manager: "家長",
        quickActions: [
          { label: "作業<br>記作業", value: "記作業" },
          { label: "考試<br>明天考試", value: "明天考試" },
          { label: "完成<br>我寫完了", value: "我寫完了" },
          { label: "壓力<br>我壓力大", value: "我壓力大", alert: true }
        ],
        care: {
          chat: "我在。你可以說今天有哪些作業、哪科要考試，或哪裡讀不下去。",
          music: "先休息一下，等等我可以幫你整理讀書順序。"
        },
        categories: ["作業", "考試", "課表", "報告", "壓力", "其他"]
      },
      teacher: {
        name: "老師",
        manager: "老師",
        quickActions: [
          { label: "班務<br>記班務", value: "記班務" },
          { label: "批改<br>作業還沒改", value: "作業還沒改" },
          { label: "聯絡<br>聯絡家長", value: "聯絡家長" },
          { label: "會議<br>明天開會", value: "明天開會" }
        ],
        care: {
          chat: "我在。你可以把班務、會議、學生狀態先丟給我，我幫你分好。",
          music: "先喘口氣，我幫你看目前待辦哪件最急。"
        },
        categories: ["班務", "批改", "會議", "學生關懷", "家長聯絡", "其他"]
      },
      home: {
        name: "家庭",
        manager: "家人",
        quickActions: [
          { label: "採買<br>買東西", value: "買東西" },
          { label: "家務<br>記家務", value: "記家務" },
          { label: "繳費<br>要繳費", value: "要繳費" },
          { label: "接送<br>要接送", value: "要接送" }
        ],
        care: {
          chat: "我在。買菜、家務、繳費、接送，想到什麼直接說，我幫你整理。",
          music: "先休息一下，等等我幫你看今天家裡還有哪些事。"
        },
        categories: ["採買", "家務", "繳費", "接送", "家庭庫存", "其他"]
      },
      business: {
        name: "小商家",
        manager: "店主",
        quickActions: [
          { label: "訂單<br>新訂單", value: "新訂單" },
          { label: "出貨<br>今天出貨", value: "今天出貨" },
          { label: "收款<br>已收款", value: "已收款" },
          { label: "庫存<br>庫存不足", value: "庫存不足", alert: true }
        ],
        care: {
          chat: "我在。訂單、出貨、庫存、客戶備註都可以先跟我說。",
          music: "先整理營運事項，我幫你看今天未完成的訂單和出貨。"
        },
        categories: ["訂單", "出貨", "收款", "庫存", "客戶", "其他"]
      }
    };

    const defaultAlertRules = {
      bpHigh: "180/110",
      bpLow: "90/60",
      sugarHigh: 250,
      sugarLow: 70
    };

    let habits = [];
    try {
      habits = storage.getJSON(HABIT_KEY, []);
    } catch (_) {
      habits = [];
    }

    let taskCards = [];
    try {
      taskCards = storage.getJSON(TASK_KEY, []);
    } catch (_) {
      taskCards = [];
    }
    let taskReminderTimers = {};

    let keywordRules = [];
    try {
      keywordRules = storage.getJSON(KEYWORD_RULES_KEY, []);
    } catch (_) {
      keywordRules = [];
    }

    let moodLogs = [];
    try {
      moodLogs = storage.getJSON(MOOD_KEY, []);
    } catch (_) {
      moodLogs = [];
    }

    let medicines = [];
    try {
      medicines = storage.getJSON(MEDICINE_KEY, []);
    } catch (_) {
      medicines = [];
    }

    const quickRule = {
      "我量好了": "收到，乖孫幫你記錄量測完成。",
      "我吃藥了": "收到，今天用藥已回報。",
      "我要看影片": "好，等等推薦你上次那類老歌影片。",
      "我不舒服": "我在，先坐好休息，我會啟動家人通知流程。",
      "記作業": "我幫你記作業，說科目和截止日會更清楚。",
      "明天考試": "我幫你記考試，等等可以整理讀書順序。",
      "我寫完了": "很好，我幫你標記完成。",
      "我壓力大": "我先幫你記下壓力狀態，先深呼吸一下。",
      "記班務": "我幫你記班務，等等會整理成待辦。",
      "作業還沒改": "我幫你開一張批改任務。",
      "聯絡家長": "我幫你記下家長聯絡事項。",
      "明天開會": "我幫你記會議提醒。",
      "買東西": "我幫你開採買清單。",
      "記家務": "我幫你記家務事項。",
      "要繳費": "我幫你記繳費提醒。",
      "要接送": "我幫你記接送行程。",
      "新訂單": "我幫你開新訂單。",
      "今天出貨": "我幫你記出貨任務。",
      "已收款": "我幫你記收款狀態。",
      "庫存不足": "我幫你標記庫存警示。"
    };

    let logs = [];
    try {
      logs = storage.getJSON(STORE_KEY, []);
    } catch (_) {
      logs = [];
    }
    let recognition;
    let voiceMode = "idle";
    let recognitionTimeout = null;
    let pendingCheck = null;
    let lastPrompt = null;
    let pendingHealthCapture = null;

    function speak(text) {
      if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "zh-TW";
      utter.rate = 0.95;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }

    function setReminderByHour() {
      const now = new Date();
      const hhmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      const next = schedulePlan.find(s => s.time >= hhmm) || schedulePlan[0];
      reminder.textContent = `下一個提醒 ${next.time}：${next.text}`;
      updateFloatingStatus(`下一個提醒 ${next.time}：${next.text}`);
    }

    function renderToday() {
      const now = new Date();
      today.textContent = `今天 ${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;
    }

    function renderSystemStatus() {
      const healthCount = logs.filter(item => item.kind === "健康").length;
      const activeTaskCount = taskCards.filter(card => card.status === "進行中").length;
      const alertCount = logs.filter(item => /警示|緊急|升級/.test(item.kind)).length;
      const keywordCount = keywordRules.length;
      systemStatusGrid.innerHTML = [
        `健康 ${healthCount} 筆`,
        `待辦 ${activeTaskCount} 件`,
        `警示 ${alertCount} 次`,
        `規則 ${keywordCount} 條`
      ].map(text => `<div class="status-pill">${text}</div>`).join("");
    }

    function renderTodayFocus() {
      const openTasks = taskCards.filter(card => card.status === "進行中");
      const nextTask = openTasks[0];
      const latestHealth = logs.find(item => item.kind === "健康");
      const lines = [];
      if (nextTask) lines.push(`待辦：${nextTask.title}`);
      if (latestHealth) lines.push(`最近健康：${latestHealth.detail}`);
      if (!lines.length) lines.push("目前沒有急著處理的事情。");
      todayFocus.innerHTML = `<p class="today-focus-title">今天最重要</p><p class="hint">${lines.join("<br>")}</p>`;
    }

    function getIconMode() {
      try {
        return storage.getString(ICON_MODE_KEY) === "on";
      } catch (_) {
        return false;
      }
    }

    function renderIconMode() {
      document.body.classList.toggle("icon-mode", getIconMode());
    }

    function toggleIconMode() {
      const next = getIconMode() ? "off" : "on";
      try {
        storage.setString(ICON_MODE_KEY, next);
      } catch (_) {}
      renderIconMode();
      actionStatus.textContent = next === "on" ? "已開啟大圖示模式。" : "已關閉大圖示模式。";
    }

    function loadWebhookConfig() {
      let url = "";
      try {
        url = storage.getString(WEBHOOK_KEY, "");
      } catch (_) {
        url = "";
      }
      webhookInput.value = url;
      updateWebhookStatus(url);
    }

    function getMode() {
      try {
        return storage.getString(MODE_KEY, "test");
      } catch (_) {
        return "test";
      }
    }

    function getProfile() {
      try {
        return storage.getString(PROFILE_KEY, "elder");
      } catch (_) {
        return "elder";
      }
    }

    function setProfile(profileId) {
      try {
        storage.setString(PROFILE_KEY, profileId);
      } catch (_) {}
      renderProfile();
    }

    function renderProfile() {
      const profileId = getProfile();
      const profile = profiles[profileId] || profiles.elder;
      profileSelect.value = profileId;
      profileStatus.textContent = `目前情境：${profile.name}｜管理者：${profile.manager}`;
      renderQuickActions();
      careMessage.textContent = buildCareMessage();
      renderSystemStatus();
      updateFloatingStatus(`已切換到 ${profile.name}`);
    }

    function renderQuickActions() {
      const profile = profiles[getProfile()] || profiles.elder;
      quickActionGrid.innerHTML = profile.quickActions.map(action => (
        `<button class="big-btn${action.alert ? " alert" : ""}" type="button" data-quick="${action.value}">${action.label}</button>`
      )).join("");

      quickActionGrid.querySelectorAll("[data-quick]").forEach(btn => {
        btn.addEventListener("click", () => handleQuickAction(btn.dataset.quick));
      });
    }

    function handleQuickAction(text) {
      logEvent("回報", text);
      markResponseReceived(text);
      if (text === "我量好了") {
        handleHealthCapture(text);
        return;
      }
      const reply = quickRule[text] || "收到，我幫你記下來。";
      voiceText.innerHTML = `<span class="ok">已記錄：</span>${text}`;
      speak(reply);
      if (!["我吃藥了", "我要看影片", "我不舒服"].includes(text)) {
        saveLifeNote(text);
      }
    }

    function setMode(mode) {
      try {
        storage.setString(MODE_KEY, mode);
      } catch (_) {}
      renderMode();
    }

    function getFollowupDurations() {
      const mode = getMode();
      if (mode === "live") {
        return {
          secondReminderMs: 15 * 60 * 1000,
          escalationMs: 30 * 60 * 1000
        };
      }
      return {
        secondReminderMs: 60 * 1000,
        escalationMs: 120 * 1000
      };
    }

    function renderMode() {
      const mode = getMode();
      document.getElementById("testModeBtn").classList.toggle("active", mode === "test");
      document.getElementById("liveModeBtn").classList.toggle("active", mode === "live");
      modeStatus.textContent = mode === "live"
        ? "目前：正式模式（15 分鐘追問，30 分鐘通知家人）"
        : "目前：測試模式（1 分鐘追問，2 分鐘通知家人）";
    }

    function getView() {
      try {
        return storage.getString(VIEW_KEY, "grandma");
      } catch (_) {
        return "grandma";
      }
    }

    function setView(view) {
      try {
        storage.setString(VIEW_KEY, view);
      } catch (_) {}
      renderView();
    }

    function renderView() {
      const view = getView();
      document.getElementById("grandmaViewToggle").checked = view === "grandma";
      document.getElementById("familyViewToggle").checked = view === "family";
      document.getElementById("grandmaViewBtn").classList.toggle("active", view === "grandma");
      document.getElementById("familyViewBtn").classList.toggle("active", view === "family");
      document.querySelectorAll(".admin-section").forEach(section => {
        section.classList.toggle("hidden", view !== "family");
      });
    }

    function saveWebhookConfig() {
      const url = webhookInput.value.trim();
      try {
        if (url) storage.setString(WEBHOOK_KEY, url);
        else storage.remove(WEBHOOK_KEY);
      } catch (_) {}
      updateWebhookStatus(url);
      actionStatus.textContent = url ? "已更新 webhook 設定。" : "已切回模擬通知模式。";
    }

    function getWebhookUrl() {
      try {
        return storage.getString(WEBHOOK_KEY, "");
      } catch (_) {
        return "";
      }
    }

    function updateWebhookStatus(url) {
      if (url) webhookStatus.textContent = "目前：真實通知模式（會送出 webhook）";
      else webhookStatus.textContent = "目前：模擬模式（不送出網路通知）";
    }

    function getAlertRules() {
      try {
        return { ...defaultAlertRules, ...storage.getJSON(ALERT_RULES_KEY, {}) };
      } catch (_) {
        return { ...defaultAlertRules };
      }
    }

    function loadAlertRules() {
      const rules = getAlertRules();
      bpHighInput.value = rules.bpHigh;
      bpLowInput.value = rules.bpLow;
      sugarHighInput.value = rules.sugarHigh;
      sugarLowInput.value = rules.sugarLow;
      alertRulesStatus.textContent = `目前：高血壓 ${rules.bpHigh}，低血壓 ${rules.bpLow}，高血糖 ${rules.sugarHigh}，低血糖 ${rules.sugarLow}`;
    }

    function isValidBpRule(value) {
      return /^\d{2,3}\s*[\/／]\s*\d{2,3}$/.test(String(value || "").trim());
    }

    function saveAlertRules() {
      const bpHigh = bpHighInput.value.trim();
      const bpLow = bpLowInput.value.trim();
      const sugarHigh = Number(sugarHighInput.value);
      const sugarLow = Number(sugarLowInput.value);
      if (!isValidBpRule(bpHigh) || !isValidBpRule(bpLow) || !sugarHigh || !sugarLow) {
        alertRulesStatus.textContent = "警戒值格式不完整，請確認血壓像 180/110、血糖是數字。";
        return;
      }
      const rules = { bpHigh, bpLow, sugarHigh, sugarLow };
      try {
        storage.setJSON(ALERT_RULES_KEY, rules);
      } catch (_) {}
      loadAlertRules();
      actionStatus.textContent = "已更新健康警戒值。";
    }

    function logEvent(kind, detail) {
      logs.unshift({
        ts: new Date().toLocaleString("zh-TW"),
        kind,
        detail
      });
      logs = logs.slice(0, 20);
      try {
        storage.setJSON(STORE_KEY, logs);
      } catch (_) {
        // file:// in some embedded browsers may block localStorage; keep in-memory logs.
      }
      renderSummary();
      updateFloatingStatus(`${kind}：${detail}`);
      renderSystemStatus();
      renderTodayFocus();
    }

    function updateFloatingStatus(text) {
      if (!floatingStatus) return;
      const shortText = String(text || "").replace(/\s+/g, " ").trim();
      floatingStatus.textContent = shortText.length > 46 ? `${shortText.slice(0, 46)}...` : shortText;
    }

    function isEmbeddedBrowser() {
      const ua = navigator.userAgent || "";
      return /Line|FBAN|FBAV|Instagram|Messenger|MicroMessenger|TikTok|Twitter|wv/i.test(ua);
    }

    function setupBrowserGate() {
      if (!browserGate) return;
      const currentUrl = window.location.href;
      const isAndroid = /Android/i.test(navigator.userAgent || "");
      if (openChromeLink) {
        if (isAndroid && location.protocol === "https:") {
          const target = `${location.host}${location.pathname}${location.search}`;
          openChromeLink.href = `intent://${target}#Intent;scheme=https;package=com.android.chrome;end`;
        } else {
          openChromeLink.href = currentUrl;
          openChromeLink.textContent = "複製後用 Safari/Chrome 開啟";
        }
      }
      if (copyPageLinkBtn) {
        copyPageLinkBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(currentUrl);
            copyPageLinkBtn.textContent = "已複製網址";
          } catch (_) {
            copyPageLinkBtn.textContent = "請長按網址列複製";
          }
        });
      }
      if (dismissBrowserGateBtn) {
        dismissBrowserGateBtn.addEventListener("click", () => {
          browserGate.classList.add("hidden");
        });
      }
      if (isEmbeddedBrowser()) {
        browserGate.classList.remove("hidden");
      }
    }

    function buildCareMessage(intent) {
      const hour = new Date().getHours();
      const openTasks = taskCards.filter(card => card.status === "進行中");
      const profile = profiles[getProfile()] || profiles.elder;
      if (intent === "music") return profile.care.music;
      if (intent === "chat") return profile.care.chat;
      if (openTasks.length) return `我有幫你看著 ${openTasks.length} 件事情。最上面那件是「${openTasks[0].title}」。`;
      if (getProfile() !== "elder") return profile.care.chat;
      if (hour < 10) return "早安，今天慢慢來就好。先喝一點水，有量血壓血糖再跟我說。";
      if (hour < 14) return "中午到了，吃飯不要太急。飯後有藥的話，我會幫你記著。";
      if (hour < 18) return "下午容易忘記事情，想到買什麼、拿什麼，直接跟我說就好。";
      if (hour < 22) return "晚上我陪你整理今天的事情。睡前如果要量血壓，也可以直接報數字。";
      return "時間晚了，今天辛苦了。想到明天要做的事情，可以先跟我說，我幫你放好。";
    }

    function showCareMessage(intent) {
      const message = buildCareMessage(intent);
      careMessage.textContent = message;
      updateFloatingStatus(message);
      logEvent("主動關懷", message);
      speak(message);
    }

    function recordMood(mood) {
      moodLogs.unshift({
        mood,
        ts: new Date().toLocaleString("zh-TW")
      });
      moodLogs = moodLogs.slice(0, 30);
      try {
        storage.setJSON(MOOD_KEY, moodLogs);
      } catch (_) {}
      logEvent("心情", mood);
      renderMoodTrend();
      renderSystemStatus();
      const reply = mood === "不舒服"
        ? "我記下來了。你先坐著休息，如果有頭暈或痛，要直接跟我說。"
        : `我記下今天心情是「${mood}」。`;
      careMessage.textContent = reply;
      speak(reply);
    }

    function renderMoodTrend() {
      const recent = moodLogs.slice(0, 7);
      if (!recent.length) {
        document.getElementById("moodTrend").innerHTML = "<p class='hint'>還沒有心情紀錄。</p>";
        return;
      }
      const counts = recent.reduce((acc, item) => {
        acc[item.mood] = (acc[item.mood] || 0) + 1;
        return acc;
      }, {});
      document.getElementById("moodTrend").innerHTML = `<div class="list-item"><strong>近 7 次心情</strong><br>${Object.entries(counts).map(([mood, count]) => `${mood} ${count} 次`).join("｜")}</div>`;
    }

    function persistMedicines() {
      try {
        storage.setJSON(MEDICINE_KEY, medicines);
      } catch (_) {}
      renderMedicines();
    }

    function addMedicine() {
      const name = medicineNameInput.value.trim();
      const time = medicineTimeInput.value.trim();
      const count = Number(medicineCountInput.value);
      if (!name || !time) {
        actionStatus.textContent = "請輸入藥名和時間。";
        return;
      }
      medicines.unshift({
        id: String(Date.now()),
        name,
        time,
        count: Number.isFinite(count) ? count : 0,
        taken: 0,
        lastTakenAt: ""
      });
      medicineNameInput.value = "";
      medicineTimeInput.value = "";
      medicineCountInput.value = "";
      persistMedicines();
      actionStatus.textContent = `已新增藥物：${name}`;
    }

    function takeMedicine(index) {
      const med = medicines[index];
      if (!med) return;
      med.taken = (med.taken || 0) + 1;
      if (Number(med.count) > 0) med.count -= 1;
      med.lastTakenAt = new Date().toLocaleString("zh-TW");
      persistMedicines();
      logEvent("吃藥", `${med.name}（${med.time}）`);
      const reply = `我記好了，${med.name} 已吃。${med.count <= 3 ? "剩下不多了，記得請家人補藥。" : ""}`;
      voiceText.textContent = reply;
      speak(reply);
      if (med.count <= 3) notifyFamily(`藥物快用完：${med.name} 剩餘 ${med.count}`);
    }

    function renderMedicines() {
      if (!medicines.length) {
        medicineList.innerHTML = "<p class='hint'>家人可以在管理頁新增藥物。</p>";
        return;
      }
      medicineList.innerHTML = medicines.map((med, index) => (
        `<div class="list-item"><strong>${med.name}</strong><br><span class="hint">${med.time}｜剩餘 ${med.count ?? 0}｜上次 ${med.lastTakenAt || "尚未回報"}</span><button class="mini-btn" type="button" data-take-medicine="${index}">我吃這個藥了</button></div>`
      )).join("");

      document.querySelectorAll("[data-take-medicine]").forEach(btn => {
        btn.addEventListener("click", () => takeMedicine(Number(btn.dataset.takeMedicine)));
      });
    }

    function parseHealthDetail(detail) {
      const bpMatch = String(detail).match(/血壓:([\d\/-]+)/);
      const sugarMatch = String(detail).match(/血糖:([\d-]+)/);
      const bp = bpMatch && bpMatch[1] !== "-" ? bpMatch[1] : "";
      const sugar = sugarMatch && sugarMatch[1] !== "-" ? Number(sugarMatch[1]) : null;
      const bpParts = bp ? bp.split("/").map(Number) : [];
      return {
        bpTop: bpParts[0] || null,
        bpBottom: bpParts[1] || null,
        sugar
      };
    }

    function average(values) {
      const valid = values.filter(value => Number.isFinite(value));
      if (!valid.length) return "-";
      return Math.round(valid.reduce((sum, value) => sum + value, 0) / valid.length);
    }

    function renderHabitRadar() {
      const top = habits.slice(0, 5);
      if (!top.length) {
        habitRadar.innerHTML = "<p class='hint'>還沒有足夠資料形成習慣。</p>";
        return;
      }
      habitRadar.innerHTML = top.map(item => (
        `<div class="list-item"><strong>${item.category}</strong><br>${item.text}<br><span class="hint">出現 ${item.count} 次，上次 ${item.lastAt}</span></div>`
      )).join("");
    }

    function renderHealthTrend() {
      const healthLogs = logs.filter(item => item.kind === "健康").slice(0, 14).map(item => parseHealthDetail(item.detail));
      if (!healthLogs.length) {
        healthTrend.innerHTML = "<p class='hint'>還沒有健康資料可分析。</p>";
        return;
      }
      const bpTopAvg = average(healthLogs.map(item => item.bpTop));
      const bpBottomAvg = average(healthLogs.map(item => item.bpBottom));
      const sugarAvg = average(healthLogs.map(item => item.sugar));
      const alerts = logs.filter(item => item.kind === "健康警示").length;
      healthTrend.innerHTML = `<div class="list-item"><strong>近 14 筆趨勢</strong><br>平均血壓：${bpTopAvg}/${bpBottomAvg}<br>平均血糖：${sugarAvg}<br>健康警示：${alerts} 次<br><span class="hint">門診可帶重點：血壓血糖平均、異常次數、最近不舒服描述。</span></div>`;
    }

    function persistKeywordRules() {
      keywordRules = keywordRules.slice(0, 20);
      try {
        storage.setJSON(KEYWORD_RULES_KEY, keywordRules);
      } catch (_) {}
      renderKeywordRules();
    }

    function saveKeywordRule() {
      const keyword = keywordInput.value.trim();
      const reply = keywordReplyInput.value.trim();
      if (!keyword || !reply) {
        actionStatus.textContent = "請輸入關鍵字和管家回覆。";
        return;
      }
      keywordRules.unshift({
        keyword,
        reply,
        count: 0,
        createdAt: new Date().toISOString()
      });
      keywordInput.value = "";
      keywordReplyInput.value = "";
      persistKeywordRules();
      actionStatus.textContent = `已新增關鍵字規則：${keyword}`;
    }

    function renderKeywordRules() {
      if (!keywordRules.length) {
        keywordRuleList.innerHTML = "<p class='hint'>尚未建立關鍵字規則。</p>";
        return;
      }
      keywordRuleList.innerHTML = keywordRules.slice(0, 8).map((rule, index) => (
        `<div class="list-item"><strong>${rule.keyword}</strong><br>${rule.reply}<br><span class="hint">觸發 ${rule.count || 0} 次</span><button class="mini-btn" type="button" data-keyword-delete="${index}">刪除規則</button></div>`
      )).join("");

      document.querySelectorAll("[data-keyword-delete]").forEach(btn => {
        btn.addEventListener("click", () => {
          keywordRules.splice(Number(btn.dataset.keywordDelete), 1);
          persistKeywordRules();
        });
      });
    }

    function applyKeywordRules(text) {
      const rule = keywordRules.find(item => text.includes(item.keyword));
      if (!rule) return false;
      rule.count = (rule.count || 0) + 1;
      persistKeywordRules();
      logEvent("關鍵字觸發", `${rule.keyword}：${text}`);
      voiceText.textContent = rule.reply;
      updateFloatingStatus(rule.reply);
      speak(rule.reply);
      if (/救命|跌倒|頭暈|胸悶|喘|不舒服|痛/.test(rule.keyword)) {
        notifyFamily(`關鍵字警示：${rule.keyword}，內容：${text}`);
      }
      return true;
    }

    function classifyLifeNote(text) {
      const clean = text.replace(/[，。！？,.!?\s]/g, "");
      const profileId = getProfile();
      if (profileId === "student") {
        if (/作業|習題|功課/.test(clean)) return "作業";
        if (/考試|小考|段考|期中|期末/.test(clean)) return "考試";
        if (/報告|簡報|專題/.test(clean)) return "報告";
        if (/壓力|累|讀不下去|焦慮/.test(clean)) return "壓力";
      }
      if (profileId === "teacher") {
        if (/批改|作業|作文|考卷/.test(clean)) return "批改";
        if (/會議|開會|研習/.test(clean)) return "會議";
        if (/家長|聯絡/.test(clean)) return "家長聯絡";
        if (/學生|情緒|缺席/.test(clean)) return "學生關懷";
      }
      if (profileId === "home") {
        if (/買|菜市場|超市|補貨/.test(clean)) return "採買";
        if (/倒垃圾|洗衣|掃地|整理|煮飯/.test(clean)) return "家務";
        if (/接|送|孩子|學校/.test(clean)) return "接送";
      }
      if (profileId === "business") {
        if (/訂單|客人|客戶|要.*顆|要.*份/.test(clean)) return "訂單";
        if (/出貨|寄出|包裹|宅配|物流/.test(clean)) return "出貨";
        if (/收款|付款|匯款/.test(clean)) return "收款";
        if (/庫存|缺貨|快沒了|原料|包材/.test(clean)) return "庫存";
      }
      const rules = [
        { category: "醫療", keywords: ["診所", "醫院", "拿藥", "領藥", "看醫生", "回診", "藥局"] },
        { category: "訂餐", keywords: ["訂餐", "便當", "午餐", "晚餐", "外送", "飯"] },
        { category: "出貨", keywords: ["出貨", "寄出", "包裹", "宅配", "物流", "貨"] },
        { category: "購物", keywords: ["買", "補貨", "米", "菜", "衛生紙", "牛奶", "藥"] },
        { category: "繳費", keywords: ["繳費", "電費", "水費", "瓦斯", "電話費", "帳單"] },
        { category: "聯絡", keywords: ["打給", "找", "聯絡", "孫子", "女兒", "兒子"] },
        { category: "節目", keywords: ["電視", "節目", "連續劇", "新聞", "布袋戲"] },
        { category: "家務", keywords: ["倒垃圾", "洗衣", "掃地", "煮飯", "澆花"] }
      ];
      const found = rules.find(rule => rule.keywords.some(word => clean.includes(word)));
      return found ? found.category : "其他";
    }

    function getTopicKey(text, category) {
      if (/菜市場|市場|買菜/.test(text)) return "market";
      if (/診所|醫院|拿藥|領藥|看醫生|回診|藥局/.test(text)) return "medical";
      if (/出貨|寄出|包裹|宅配|物流/.test(text)) return "shipping";
      if (/訂餐|便當|午餐|晚餐|外送/.test(text)) return "meal";
      if (/繳費|電費|水費|瓦斯|電話費|帳單/.test(text)) return "bill";
      if (/電視|節目|連續劇|新聞|布袋戲/.test(text)) return "tv";
      return category;
    }

    function isAppendIntent(text) {
      return /再加|還要|也要|也買|順便|補一下|加一個|記一下/.test(text);
    }

    function isDoneIntent(text) {
      return /買好了|完成了|都好了|處理好了|不用了|取消/.test(text);
    }

    function extractItemText(text) {
      return text
        .replace(/今天|明天|等一下|等等|去|到/g, "")
        .replace(/菜市場|市場|買菜|診所|醫院|藥局/g, "")
        .replace(/再加|還要|也要|也買|順便|補一下|加一個|記一下|幫我記得|幫我記|記得/g, "")
        .trim();
    }

    function inferTaskReminder(text, category) {
      const now = new Date();
      const reminder = new Date(now);
      if (/明天/.test(text)) reminder.setDate(reminder.getDate() + 1);
      if (/下午/.test(text)) reminder.setHours(15, 0, 0, 0);
      else if (/晚上/.test(text)) reminder.setHours(18, 30, 0, 0);
      else if (/早上|上午/.test(text)) reminder.setHours(9, 0, 0, 0);
      else if (/中午/.test(text)) reminder.setHours(11, 30, 0, 0);
      else if (category === "醫療") reminder.setHours(Math.max(now.getHours() + 1, 9), 0, 0, 0);
      else if (category === "購物") reminder.setHours(Math.max(now.getHours() + 1, 10), 0, 0, 0);
      else reminder.setHours(now.getHours() + 1, 0, 0, 0);
      if (reminder <= now) reminder.setTime(now.getTime() + 60 * 60 * 1000);
      return reminder.toISOString();
    }

    function naturalTaskReply(card, itemText, action) {
      const itemPart = itemText ? `，我幫你加上「${itemText}」` : "";
      if (action === "done") return `好，${card.title}我先收起來了，辛苦了。`;
      if (card.category === "醫療") return `我記在「${card.title}」${itemPart}。等等會提醒你帶健保卡，拿藥也記得問清楚吃法。`;
      if (card.topicKey === "market") return `我整理到「菜市場買菜」${itemPart}。出門前會提醒你帶袋子和零錢。`;
      if (card.category === "出貨") return `我放到「${card.title}」${itemPart}。出門前會提醒你確認包裹和收件資料。`;
      if (card.category === "訂餐") return `我記到「${card.title}」${itemPart}。時間快到會提醒你確認份數。`;
      if (card.category === "繳費") return `我幫你記住「${card.title}」${itemPart}。晚一點會提醒你不要漏掉帳單。`;
      return `我幫你整理到「${card.title}」${itemPart}，這件事我會記著。`;
    }

    function buildTaskReminderMessage(card) {
      const items = card.items.length ? `，項目有：${card.items.join("、")}` : "";
      if (card.category === "醫療") return `阿嬤，提醒你「${card.title}」${items}。出門記得帶健保卡、藥袋和水。`;
      if (card.topicKey === "market") return `阿嬤，提醒你「菜市場買菜」${items}。記得帶購物袋，慢慢走就好。`;
      if (card.category === "出貨") return `阿嬤，提醒你「${card.title}」${items}。包裹、地址和電話先確認一下。`;
      if (card.category === "訂餐") return `阿嬤，提醒你「${card.title}」${items}。可以先確認要幾份。`;
      if (card.category === "繳費") return `阿嬤，提醒你「${card.title}」${items}。帳單先放一起比較不會忘。`;
      return `阿嬤，提醒你「${card.title}」${items}。`;
    }

    function scheduleTaskReminder(card) {
      if (!card.reminderAt || card.status !== "進行中") return;
      if (taskReminderTimers[card.id]) clearTimeout(taskReminderTimers[card.id]);
      const delay = new Date(card.reminderAt).getTime() - Date.now();
      if (delay <= 0) return;
      taskReminderTimers[card.id] = setTimeout(() => {
        if (card.status !== "進行中") return;
        const message = buildTaskReminderMessage(card);
        logEvent("任務提醒", message);
        actionStatus.textContent = message;
        speak(message);
        startFollowupWatch(card.title);
      }, delay);
    }

    function scheduleAllTaskReminders() {
      Object.values(taskReminderTimers).forEach(timer => clearTimeout(timer));
      taskReminderTimers = {};
      taskCards.forEach(scheduleTaskReminder);
    }

    function makeTaskTitle(category, text) {
      if (category === "購物" && /菜市場|市場|買菜/.test(text)) return "菜市場買菜";
      if (category === "醫療" && /拿藥|領藥|診所|藥局/.test(text)) return "診所拿藥";
      if (category === "醫療") return "醫療事項";
      if (category === "訂餐") return "訂餐";
      if (category === "出貨") return "出貨";
      if (category === "繳費") return "繳費";
      return text.length > 12 ? text.slice(0, 12) : text;
    }

    function findOpenTask(category, text) {
      const todayKey = new Date().toLocaleDateString("zh-TW");
      const topicKey = getTopicKey(text, category);
      const append = isAppendIntent(text);
      const hasExplicitTopic = topicKey !== category;

      if (append && !hasExplicitTopic) {
        return taskCards
          .filter(card => card.status === "進行中")
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
      }

      return taskCards.find(card => {
        const sameDay = new Date(card.updatedAt).toLocaleDateString("zh-TW") === todayKey;
        const cardTopic = card.topicKey || getTopicKey(card.title, card.category);
        return card.status === "進行中" && sameDay && cardTopic === topicKey;
      });
    }

    function persistTaskCards() {
      taskCards = taskCards.slice(0, 20);
      try {
        storage.setJSON(TASK_KEY, taskCards);
      } catch (_) {}
      renderTaskCards();
      scheduleAllTaskReminders();
    }

    function upsertTaskCard(text) {
      const category = classifyLifeNote(text);
      const topicKey = getTopicKey(text, category);
      const append = isAppendIntent(text);
      const done = isDoneIntent(text);
      const itemText = extractItemText(text);
      let target = findOpenTask(category, text);

      if (done && target) {
        target.status = "完成";
        target.updatedAt = new Date().toISOString();
        persistTaskCards();
        logEvent(`生活-${category}`, `${target.title} 已完成`);
        lifeNoteStatus.textContent = `已把「${target.title}」標記完成。`;
        speak("好，這件事已經幫你標記完成。");
        return;
      }

      if (!target) {
        target = {
          id: String(Date.now()),
          title: makeTaskTitle(category, text),
          category,
          topicKey,
          status: "進行中",
          items: [],
          reminderAt: inferTaskReminder(text, category),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        taskCards.unshift(target);
      }

      const isNewTaskStarter = target.items.length === 0 && !append && target.title.includes(itemText);
      if (itemText && !isNewTaskStarter && itemText !== target.title && !target.items.includes(itemText)) {
        target.items.push(itemText);
      }
      target.updatedAt = new Date().toISOString();
      persistTaskCards();
      logEvent(`生活-${category}`, `${target.title}${itemText ? `：${itemText}` : ""}`);
      learnHabit(category, text);
      lifeNoteStatus.textContent = `已整理到「${target.title}」。`;
      const reply = naturalTaskReply(target, itemText, "save");
      voiceText.textContent = reply;
      speak(reply);
    }

    function learnHabit(category, text) {
      const existing = habits.find(x => x.category === category && x.text === text);
      if (existing) {
        existing.count += 1;
        existing.lastAt = new Date().toLocaleString("zh-TW");
      } else {
        habits.unshift({
          category,
          text,
          count: 1,
          lastAt: new Date().toLocaleString("zh-TW")
        });
      }
      habits = habits.sort((a, b) => b.count - a.count).slice(0, 12);
      try {
        storage.setJSON(HABIT_KEY, habits);
      } catch (_) {}
      renderHabits();
    }

    function saveLifeNote(textFromVoice) {
      const text = (textFromVoice || lifeNoteInput.value).trim();
      if (!text) {
        lifeNoteStatus.textContent = "請先輸入要記的事情。";
        return;
      }
      upsertTaskCard(text);
      lifeNoteInput.value = "";
    }

    function completeTaskCard(index) {
      const card = taskCards[index];
      if (!card) return;
      card.status = "完成";
      card.updatedAt = new Date().toISOString();
      persistTaskCards();
      logEvent("生活完成", card.title);
      const reply = naturalTaskReply(card, "", "done");
      lifeNoteStatus.textContent = reply;
      speak(reply);
    }

    function renderTaskCards() {
      const activeCards = taskCards.filter(card => card.status === "進行中").slice(0, 5);
      renderTaskGroups();
      if (!activeCards.length) {
        taskCardList.innerHTML = "<p class='hint'>目前沒有進行中的生活記事。</p>";
        return;
      }
      taskCardList.innerHTML = activeCards.map(card => {
        const index = taskCards.indexOf(card);
        const items = card.items.length
          ? card.items.map(item => `<li>${item}</li>`).join("")
          : "<li>先幫你開好這件事，等等可以繼續補項目。</li>";
        const reminderText = card.reminderAt ? new Date(card.reminderAt).toLocaleString("zh-TW") : "尚未安排提醒";
        return `<div class="list-item"><strong>${card.title}</strong><br><span class="hint">${card.category}｜${card.status}｜提醒：${reminderText}</span><ul>${items}</ul><button class="mini-btn" type="button" data-test-remind-task="${index}">10 秒後測試提醒</button><button class="mini-btn" type="button" data-remind-task="${index}">等一下提醒我</button><button class="mini-btn" type="button" data-complete-task="${index}">這件事完成了</button></div>`;
      }).join("");

      document.querySelectorAll("[data-test-remind-task]").forEach(btn => {
        btn.addEventListener("click", () => {
          const card = taskCards[Number(btn.dataset.testRemindTask)];
          if (!card) return;
          card.reminderAt = new Date(Date.now() + 10 * 1000).toISOString();
          card.updatedAt = new Date().toISOString();
          persistTaskCards();
          const reply = `好，10 秒後測試提醒「${card.title}」。`;
          lifeNoteStatus.textContent = reply;
          updateFloatingStatus(reply);
          speak(reply);
        });
      });

      document.querySelectorAll("[data-remind-task]").forEach(btn => {
        btn.addEventListener("click", () => {
          const card = taskCards[Number(btn.dataset.remindTask)];
          if (!card) return;
          card.reminderAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
          card.updatedAt = new Date().toISOString();
          persistTaskCards();
          const reply = `好，我等一下再提醒你「${card.title}」。`;
          lifeNoteStatus.textContent = reply;
          updateFloatingStatus(reply);
          speak(reply);
        });
      });

      document.querySelectorAll("[data-complete-task]").forEach(btn => {
        btn.addEventListener("click", () => completeTaskCard(Number(btn.dataset.completeTask)));
      });
    }

    function renderTaskGroups() {
      const activeCards = taskCards.filter(card => card.status === "進行中");
      if (!activeCards.length) {
        taskGroupSummary.innerHTML = "";
        return;
      }
      const groups = activeCards.reduce((acc, card) => {
        const key = card.category || "其他";
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      taskGroupSummary.innerHTML = `<div class="list-item"><strong>目前任務分組</strong><br>${Object.entries(groups).map(([name, count]) => `${name} ${count} 件`).join("｜")}</div>`;
    }

    function renderHabits() {
      if (!habits.length) {
        habitList.innerHTML = "<p class='hint'>常用項目會慢慢出現在這裡。</p>";
        return;
      }
      habitList.innerHTML = habits.slice(0, 6).map((item, index) => (
        `<div class="list-item"><strong>${item.category}</strong><br>${item.text}<br><span class="hint">出現 ${item.count} 次</span><br><button class="mini-btn" type="button" data-habit="${index}">再記一次</button></div>`
      )).join("");

      document.querySelectorAll("[data-habit]").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = habits[Number(btn.dataset.habit)];
          saveLifeNote(item.text);
        });
      });
    }

    function markResponseReceived(text) {
      if (!lastPrompt) return;
      logEvent("回應確認", `已回覆「${lastPrompt.title}」：${text}`);
      clearPendingFollowup();
    }

    function clearPendingFollowup() {
      if (pendingCheck) {
        clearTimeout(pendingCheck.secondReminderTimer);
        clearTimeout(pendingCheck.escalationTimer);
      }
      pendingCheck = null;
      lastPrompt = null;
    }

    function startFollowupWatch(title) {
      clearPendingFollowup();
      lastPrompt = { title, startAt: Date.now() };

      const { secondReminderMs, escalationMs } = getFollowupDurations();

      const secondReminderTimer = setTimeout(() => {
        if (!lastPrompt) return;
        speak(`阿嬤，${title}還沒收到回覆，你直接說好了就行。`);
        logEvent("追問提醒", `${title}：第一次未回覆追問`);
      }, secondReminderMs);

      const escalationTimer = setTimeout(() => {
        if (!lastPrompt) return;
        notifyFamily(`連續未回覆：${title}`);
        speak("我先幫你通知家人關心你。");
        logEvent("升級通知", `${title}：連續未回覆，已通知家人`);
        clearPendingFollowup();
      }, escalationMs);

      pendingCheck = { secondReminderTimer, escalationTimer };
      logEvent("提醒啟動", `${title}：開始未回覆追蹤`);
    }

    function extractHealthNumbers(text) {
      const bpMatch = text.match(/(\d{2,3})\s*[\/／]\s*(\d{2,3})/);
      const sugarMatch = text.match(/(?:血糖|糖|飯前|飯後)\s*(\d{2,3})(?:\s*(?:mg|毫克))?/);
      const bp = bpMatch ? `${bpMatch[1]}/${bpMatch[2]}` : "";
      let sugar = sugarMatch ? sugarMatch[1] : "";
      if (!sugar && !bp) {
        const looseNumber = text.match(/\b(\d{2,3})\b/);
        sugar = looseNumber ? looseNumber[1] : "";
      }
      return { bp, sugar };
    }

    function isHealthMeasurementText(text) {
      return /血壓|血糖|量好了|量好|測好了|測好|\d{2,3}\s*[\/／]\s*\d{2,3}/.test(text);
    }

    function saveHealthRecord(bp, sugar, note) {
      logEvent("健康", `血壓:${bp || "-"} / 血糖:${sugar || "-"} / 備註:${note || "-"}`);
      document.getElementById("saveStatus").textContent = "已幫你儲存今天紀錄。";
      document.getElementById("bpInput").value = "";
      document.getElementById("sugarInput").value = "";
      document.getElementById("noteInput").value = "";
      checkHealthAlert(bp, sugar);
    }

    function checkHealthAlert(bp, sugar) {
      const rules = getAlertRules();
      const [bpHighTop, bpHighBottom] = rules.bpHigh.split(/[\/／]/).map(Number);
      const [bpLowTop, bpLowBottom] = rules.bpLow.split(/[\/／]/).map(Number);
      let messages = [];
      if (bp) {
        const parts = bp.split("/").map(Number);
        const high = parts[0];
        const low = parts[1];
        if (high >= bpHighTop || low >= bpHighBottom) messages.push(`血壓偏高 ${bp}`);
        else if (high <= bpLowTop || low <= bpLowBottom) messages.push(`血壓偏低 ${bp}`);
      }
      if (sugar) {
        const value = Number(sugar);
        if (value >= Number(rules.sugarHigh)) messages.push(`血糖偏高 ${sugar}`);
        else if (value <= Number(rules.sugarLow)) messages.push(`血糖偏低 ${sugar}`);
      }
      if (!messages.length) return;
      const message = messages.join("，");
      logEvent("健康警示", message);
      notifyFamily(`健康警示：${message}`);
      actionStatus.textContent = `健康警示：${message}`;
    }

    function handleHealthCapture(text) {
      const { bp, sugar } = extractHealthNumbers(text);
      if (bp || sugar) {
        saveHealthRecord(bp, sugar, text);
        pendingHealthCapture = null;
        markResponseReceived("健康量測");
        const reply = `我記好了，${bp ? `血壓 ${bp}` : ""}${bp && sugar ? "，" : ""}${sugar ? `血糖 ${sugar}` : ""}。`;
        voiceText.textContent = reply;
        speak(reply);
        return true;
      }

      if (/量好了|量好|測好了|測好/.test(text)) {
        pendingHealthCapture = { type: "measurement", startedAt: Date.now() };
        const reply = "好，阿嬤你直接跟我說數字就好，例如血壓 128/75，血糖 110。";
        voiceText.textContent = reply;
        speak(reply);
        startFollowupWatch("健康數字回報");
        return true;
      }

      return false;
    }

    function parseVoice(text) {
      const clean = text.replace(/[，。！？,.!?\s]/g, "");
      if (applyKeywordRules(text)) return;
      if (clean.includes("救命") || clean.includes("頭暈") || clean.includes("不舒服")) {
        logEvent("緊急", text);
        notifyFamily(`緊急關鍵詞：${text}`);
        speak("我收到不舒服訊息，會優先通知家人。你先慢慢坐好休息。");
        voiceText.innerHTML = `<span class="warn">已標記緊急：</span>${text}`;
        return;
      }
      if (clean.includes("明天要看醫生") || clean.includes("我要看醫生")) {
        exportDoctorSummary();
        return;
      }
      if (pendingHealthCapture || isHealthMeasurementText(text)) {
        if (handleHealthCapture(text)) return;
      }
      for (const key of Object.keys(quickRule)) {
        if (clean.includes(key.replace(/\s/g, ""))) {
          logEvent("回報", key);
          markResponseReceived(key);
          if (key === "我量好了") {
            handleHealthCapture(key);
            return;
          }
          speak(quickRule[key]);
          voiceText.innerHTML = `<span class="ok">已記錄：</span>${key}`;
          return;
        }
      }
      saveLifeNote(text);
      voiceText.textContent = `已加入生活記事：${text}`;
    }

    function startVoice() {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        fallbackToText("這台裝置語音不可用");
        return;
      }
      recognition = new SR();
      recognition.lang = "zh-TW";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      voiceBtn.classList.add("listening");
      voiceBtn.textContent = "我正在聽";
      voiceText.textContent = "請開始說話...";

      recognition.onresult = (e) => {
        clearTimeout(recognitionTimeout);
        const text = e.results[0][0].transcript || "";
        parseVoice(text);
      };
      recognition.onerror = () => {
        clearTimeout(recognitionTimeout);
        fallbackToText("麥克風未授權或語音失敗");
      };
      recognition.onend = () => {
        clearTimeout(recognitionTimeout);
        voiceBtn.classList.remove("listening");
        voiceBtn.textContent = "按住說話";
        voiceMode = "idle";
      };
      voiceMode = "listening";
      recognition.start();
      recognitionTimeout = setTimeout(() => {
        if (voiceMode !== "listening") return;
        stopVoice();
        fallbackToText("沒有收到語音");
      }, 5000);
    }

    function stopVoice() {
      if (recognition) recognition.stop();
    }

    function toggleVoiceByClick() {
      if (voiceMode === "idle") {
        startVoice();
      } else {
        stopVoice();
      }
    }

    function fallbackToText(reason) {
      voiceText.textContent = `${reason}，已切換成文字輸入。`;
      const typed = window.prompt("請直接輸入想說的話：", "我量好了");
      if (typed && typed.trim()) {
        parseVoice(typed.trim());
      }
    }

    function saveHealth() {
      const bp = document.getElementById("bpInput").value.trim();
      const sugar = document.getElementById("sugarInput").value.trim();
      const note = document.getElementById("noteInput").value.trim();
      if (!bp && !sugar && !note) {
        document.getElementById("saveStatus").textContent = "請至少填一項再儲存。";
        return;
      }
      saveHealthRecord(bp, sugar, note);
      speak("健康資料已儲存，辛苦了。");
    }

    function renderSummary() {
      if (!logs.length) {
        summary.innerHTML = "<p class='hint'>今天還沒有新紀錄。</p>";
        return;
      }
      summary.innerHTML = logs.slice(0, 5).map(item => (
        `<div class="list-item"><strong>${item.kind}</strong><br>${item.detail}<br><span class="hint">${item.ts}</span></div>`
      )).join("");
    }

    function renderTimeline() {
      timeline.innerHTML = schedulePlan.map((s, i) => (
        `<div class="list-item"><strong>${s.time}</strong><br>${s.text}<br><button class="mini-btn" type="button" data-schedule="${i}">現在提醒這個</button></div>`
      )).join("");

      document.querySelectorAll("[data-schedule]").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = schedulePlan[Number(btn.dataset.schedule)];
          triggerScheduledPrompt(item);
        });
      });
    }

    function triggerScheduledPrompt(item) {
      const speakText = `${item.time} 的提醒時間到囉，${item.text}。完成後你直接說我量好了，或我吃藥了。`;
      reminder.textContent = `目前提醒 ${item.time}：${item.text}`;
      speak(speakText);
      actionStatus.textContent = `已送出提醒：${item.time} ${item.text}`;
      if (/血壓|血糖|量/.test(item.text)) {
        pendingHealthCapture = { type: "measurement", startedAt: Date.now() };
      }
      startFollowupWatch(`${item.time} ${item.text}`);
    }

    function exportDoctorSummary() {
      const healthLogs = logs.filter(x => x.kind === "健康").slice(0, 7);
      if (!healthLogs.length) {
        actionStatus.textContent = "目前還沒有健康紀錄可整理。";
        doctorSummaryText.value = "";
        speak("目前還沒有可給醫生的健康紀錄。");
        return;
      }
      const text = [
        "阿嬤近 7 筆健康摘要",
        ...healthLogs.map((x, i) => `${i + 1}. ${x.detail}（${x.ts}）`)
      ].join("\n");
      doctorSummaryText.value = text;
      logEvent("看診摘要", text);
      actionStatus.textContent = "已產生近 7 天看診摘要，可貼給家人或醫師。";
      speak("已經幫你整理近七天看診摘要。");
    }

    async function copyDoctorSummary() {
      const text = doctorSummaryText.value.trim();
      if (!text) {
        actionStatus.textContent = "請先產生看診摘要。";
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        actionStatus.textContent = "已複製看診摘要。";
      } catch (_) {
        doctorSummaryText.select();
        document.execCommand("copy");
        actionStatus.textContent = "已嘗試複製看診摘要。";
      }
    }

    function generateWeeklyReport() {
      const latest = logs.slice(0, 20);
      const healthCount = latest.filter(x => x.kind === "健康").length;
      const alertCount = latest.filter(x => x.kind === "緊急" || x.kind === "升級通知").length;
      const medicineCount = latest.filter(x => String(x.detail).includes("吃藥")).length;
      const measureCount = latest.filter(x => String(x.detail).includes("量")).length;
      const lines = [
        "乖孫管家家人週報",
        `產生時間：${new Date().toLocaleString("zh-TW")}`,
        `健康紀錄：${healthCount} 筆`,
        `吃藥相關回報：${medicineCount} 筆`,
        `量測相關回報：${measureCount} 筆`,
        `緊急/升級事件：${alertCount} 筆`,
        "",
        "最近紀錄：",
        ...(latest.length ? latest.slice(0, 8).map((x, i) => `${i + 1}. [${x.kind}] ${x.detail}（${x.ts}）`) : ["目前沒有紀錄"])
      ];
      const report = lines.join("\n");
      weeklyReportText.value = report;
      logEvent("家人週報", "已產生家人週報");
      actionStatus.textContent = "已產生家人週報。";
    }

    async function copyWeeklyReport() {
      const text = weeklyReportText.value.trim();
      if (!text) {
        actionStatus.textContent = "請先產生家人週報。";
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        actionStatus.textContent = "已複製家人週報。";
      } catch (_) {
        weeklyReportText.select();
        document.execCommand("copy");
        actionStatus.textContent = "已嘗試複製家人週報。";
      }
    }

    function exportDataBackup() {
      const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        logs,
        habits,
        taskCards,
        keywordRules,
        moodLogs,
        medicines
      };
      backupText.value = JSON.stringify(payload, null, 2);
      actionStatus.textContent = "已匯出資料備份。";
    }

    function importDataBackup() {
      try {
        const payload = JSON.parse(backupText.value.trim());
        if (!payload || !Array.isArray(payload.logs)) {
          actionStatus.textContent = "匯入失敗：備份格式不正確。";
          return;
        }
        logs = payload.logs.slice(0, 100);
        habits = Array.isArray(payload.habits) ? payload.habits.slice(0, 12) : habits;
        taskCards = Array.isArray(payload.taskCards) ? payload.taskCards.slice(0, 20) : taskCards;
        keywordRules = Array.isArray(payload.keywordRules) ? payload.keywordRules.slice(0, 20) : keywordRules;
        moodLogs = Array.isArray(payload.moodLogs) ? payload.moodLogs.slice(0, 30) : moodLogs;
        medicines = Array.isArray(payload.medicines) ? payload.medicines.slice(0, 30) : medicines;
        try {
          storage.setJSON(STORE_KEY, logs);
          storage.setJSON(HABIT_KEY, habits);
          storage.setJSON(TASK_KEY, taskCards);
          storage.setJSON(KEYWORD_RULES_KEY, keywordRules);
          storage.setJSON(MOOD_KEY, moodLogs);
          storage.setJSON(MEDICINE_KEY, medicines);
        } catch (_) {}
        renderSummary();
        renderHabits();
        renderTaskCards();
        renderKeywordRules();
        renderMoodTrend();
        renderMedicines();
        renderHabitRadar();
        renderHealthTrend();
        actionStatus.textContent = "已匯入資料備份。";
      } catch (_) {
        actionStatus.textContent = "匯入失敗：請確認貼上的是完整備份文字。";
      }
    }

    function clearTestData() {
      const ok = window.confirm("確定要清除目前測試資料嗎？");
      if (!ok) return;
      logs = [];
      try {
        storage.remove(STORE_KEY);
        storage.remove(HABIT_KEY);
        storage.remove(TASK_KEY);
        storage.remove(KEYWORD_RULES_KEY);
        storage.remove(MOOD_KEY);
        storage.remove(MEDICINE_KEY);
      } catch (_) {}
      habits = [];
      taskCards = [];
      keywordRules = [];
      moodLogs = [];
      medicines = [];
      backupText.value = "";
      doctorSummaryText.value = "";
      weeklyReportText.value = "";
      renderSummary();
      renderHabits();
      renderTaskCards();
      renderKeywordRules();
      renderMoodTrend();
      renderMedicines();
      renderHabitRadar();
      renderHealthTrend();
      scheduleAllTaskReminders();
      actionStatus.textContent = "已清除測試資料。";
    }

    async function notifyFamily(message) {
      logEvent("家人通知", message);
      const webhookUrl = getWebhookUrl();
      if (!webhookUrl) {
        actionStatus.textContent = "已觸發家人通知流程（目前為本地模擬）。";
        return;
      }
      const payload = {
        source: "grandma-helper-v4",
        level: "alert",
        message,
        time: new Date().toISOString()
      };
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        actionStatus.textContent = "已送出家人通知（webhook 成功）。";
      } catch (_) {
        actionStatus.textContent = "webhook 送出失敗，已保留本地通知紀錄。";
      }
    }

    // Use click as primary to maximize compatibility in embedded browsers.
    voiceBtn.addEventListener("click", toggleVoiceByClick);
    document.getElementById("saveBtn").addEventListener("click", saveHealth);
    document.getElementById("saveLifeNoteBtn").addEventListener("click", () => saveLifeNote());
    document.getElementById("doctorBtn").addEventListener("click", exportDoctorSummary);
    document.getElementById("copyDoctorBtn").addEventListener("click", copyDoctorSummary);
    document.getElementById("familyBtn").addEventListener("click", () => notifyFamily("手動通知：請關心阿嬤。"));
    document.getElementById("saveWebhookBtn").addEventListener("click", saveWebhookConfig);
    document.getElementById("testModeBtn").addEventListener("click", () => setMode("test"));
    document.getElementById("liveModeBtn").addEventListener("click", () => setMode("live"));
    document.getElementById("grandmaViewToggle").addEventListener("change", () => setView("grandma"));
    document.getElementById("familyViewToggle").addEventListener("change", () => setView("family"));
    document.getElementById("weeklyBtn").addEventListener("click", generateWeeklyReport);
    document.getElementById("copyWeeklyBtn").addEventListener("click", copyWeeklyReport);
    document.getElementById("exportDataBtn").addEventListener("click", exportDataBackup);
    document.getElementById("importDataBtn").addEventListener("click", importDataBackup);
    document.getElementById("clearDataBtn").addEventListener("click", clearTestData);
    document.getElementById("saveAlertRulesBtn").addEventListener("click", saveAlertRules);
    document.getElementById("careChatBtn").addEventListener("click", () => showCareMessage("chat"));
    document.getElementById("careMusicBtn").addEventListener("click", () => showCareMessage("music"));
    document.getElementById("saveKeywordBtn").addEventListener("click", saveKeywordRule);
    document.getElementById("iconModeBtn").addEventListener("click", toggleIconMode);
    document.getElementById("addMedicineBtn").addEventListener("click", addMedicine);
    document.querySelectorAll("[data-mood]").forEach(btn => {
      btn.addEventListener("click", () => recordMood(btn.dataset.mood));
    });
    floatingActionBtn.addEventListener("click", () => {
      const view = getView();
      if (view === "grandma") {
        document.getElementById("lifeNoteInput").focus();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    function safeRun(label, fn) {
      try {
        fn();
      } catch (error) {
        console.error(label, error);
        if (actionStatus) actionStatus.textContent = `${label} 初始化失敗，但主要切換仍可使用。`;
      }
    }

    function bootApp() {
      safeRun("瀏覽器提醒", setupBrowserGate);
      safeRun("日期", renderToday);
      safeRun("提醒", setReminderByHour);
      safeRun("摘要", renderSummary);
      safeRun("習慣", renderHabits);
      safeRun("任務", renderTaskCards);
      safeRun("關鍵字", renderKeywordRules);
      safeRun("狀態", renderSystemStatus);
      safeRun("關懷", () => { careMessage.textContent = buildCareMessage(); });
      safeRun("今日重點", renderTodayFocus);
      safeRun("大圖示", renderIconMode);
      safeRun("心情", renderMoodTrend);
      safeRun("藥物", renderMedicines);
      safeRun("習慣雷達", renderHabitRadar);
      safeRun("健康趨勢", renderHealthTrend);
      safeRun("任務提醒", scheduleAllTaskReminders);
      safeRun("時程", renderTimeline);
      safeRun("通知設定", loadWebhookConfig);
      safeRun("警戒值", loadAlertRules);
      safeRun("測試模式", renderMode);
      safeRun("視圖", renderView);
      safeRun("情境", renderProfile);
      profileSelect.addEventListener("change", () => setProfile(profileSelect.value));
      safeRun("PWA", registerServiceWorker);
    }

    function registerServiceWorker() {
      if (!("serviceWorker" in navigator)) return;
      if (location.protocol === "file:") return;
      navigator.serviceWorker.register("./sw.js").catch(error => {
        console.warn("Service worker registration failed", error);
      });
    }

    bootApp();
  
