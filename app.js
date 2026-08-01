const STORE_KEY = "grandmaVoiceLogs";
    const storage = window.appStorage;
    const voiceBtn = document.getElementById("voiceBtn");
    const voiceText = document.getElementById("voiceText");
    const voiceFallbackBox = document.getElementById("voiceFallbackBox");
    const voiceFallbackInput = document.getElementById("voiceFallbackInput");
    const voiceFallbackSubmitBtn = document.getElementById("voiceFallbackSubmitBtn");
    const voiceFallbackCancelBtn = document.getElementById("voiceFallbackCancelBtn");
    const undoLastBtn = document.getElementById("undoLastBtn");
    const summary = document.getElementById("summary");
    const reminder = document.getElementById("reminder");
    const today = document.getElementById("today");
    const appTitle = document.getElementById("appTitle");
    const mainHint = document.getElementById("mainHint");
    const assistantSectionTitle = document.getElementById("assistantSectionTitle");
    const timeline = document.getElementById("timeline");
    const actionStatus = document.getElementById("actionStatus");
    const webhookStatus = document.getElementById("webhookStatus");
    const webhookInput = document.getElementById("webhookInput");
    const doctorSummaryText = document.getElementById("doctorSummaryText");
    const modeStatus = document.getElementById("modeStatus");
    const weeklyReportText = document.getElementById("weeklyReportText");
    const backupText = document.getElementById("backupText");
    const lifeNoteInput = document.getElementById("lifeNoteInput");
    const lifeNoteTitle = document.getElementById("lifeNoteTitle");
    const saveLifeNoteBtn = document.getElementById("saveLifeNoteBtn");
    const weeklyTitle = document.getElementById("weeklyTitle");
    const weeklyBtn = document.getElementById("weeklyBtn");
    const copyWeeklyBtn = document.getElementById("copyWeeklyBtn");
    const lifeNoteStatus = document.getElementById("lifeNoteStatus");
    const butlerFollowup = document.getElementById("butlerFollowup");
    const butlerFollowupQuestion = document.getElementById("butlerFollowupQuestion");
    const answerFollowupBtn = document.getElementById("answerFollowupBtn");
    const skipFollowupBtn = document.getElementById("skipFollowupBtn");
    const orderConnectionToken = document.getElementById("orderConnectionToken");
    const saveOrderConnectionBtn = document.getElementById("saveOrderConnectionBtn");
    const refreshOrderSummaryBtn = document.getElementById("refreshOrderSummaryBtn");
    const orderConnectionStatus = document.getElementById("orderConnectionStatus");
    const orderSummaryStats = document.getElementById("orderSummaryStats");
    const orderPriorityList = document.getElementById("orderPriorityList");
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
    const elderSpeakBtn = document.getElementById("elderSpeakBtn");
    const elderEmergencyBtn = document.getElementById("elderEmergencyBtn");
    const elderFamilyBtn = document.getElementById("elderFamilyBtn");
    const elderDoneBtn = document.getElementById("elderDoneBtn");
    const setupWizard = document.getElementById("setupWizard");
    const skipWizardBtn = document.getElementById("skipWizardBtn");
    const customActionLabelInput = document.getElementById("customActionLabelInput");
    const customActionTextInput = document.getElementById("customActionTextInput");
    const addCustomActionBtn = document.getElementById("addCustomActionBtn");
    const customActionList = document.getElementById("customActionList");
    const investmentNotice = document.getElementById("investmentNotice");
    const investmentDashboard = document.getElementById("investmentDashboard");
    const investmentStats = document.getElementById("investmentStats");
    const investmentPositionList = document.getElementById("investmentPositionList");
    const investmentRiskBox = document.getElementById("investmentRiskBox");
    const marketBriefInput = document.getElementById("marketBriefInput");
    const saveMarketBriefBtn = document.getElementById("saveMarketBriefBtn");
    const morningBriefTemplateBtn = document.getElementById("morningBriefTemplateBtn");
    const potentialTemplateBtn = document.getElementById("potentialTemplateBtn");
    const riskTemplateBtn = document.getElementById("riskTemplateBtn");
    const clearMarketBriefBtn = document.getElementById("clearMarketBriefBtn");
    const marketBriefList = document.getElementById("marketBriefList");
    const investmentReportBtn = document.getElementById("investmentReportBtn");
    const investmentReportText = document.getElementById("investmentReportText");
    const copyInvestmentReportBtn = document.getElementById("copyInvestmentReportBtn");
    const investmentReminderStatus = document.getElementById("investmentReminderStatus");
    const enableInvestmentRemindersBtn = document.getElementById("enableInvestmentRemindersBtn");
    const disableInvestmentRemindersBtn = document.getElementById("disableInvestmentRemindersBtn");
    const testInvestmentReminderBtn = document.getElementById("testInvestmentReminderBtn");
    const investmentRiskConfigBox = document.getElementById("investmentRiskConfigBox");
    const capitalInput = document.getElementById("capitalInput");
    const maxLossInput = document.getElementById("maxLossInput");
    const maxPositionPctInput = document.getElementById("maxPositionPctInput");
    const saveRiskConfigBtn = document.getElementById("saveRiskConfigBtn");
    const investmentJournalBox = document.getElementById("investmentJournalBox");
    const investmentStrategyBox = document.getElementById("investmentStrategyBox");

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
    const SETUP_DONE_KEY = "grandmaHelperSetupDone";
    const CUSTOM_ACTIONS_KEY = "grandmaHelperCustomActions";
    const MARKET_BRIEFS_KEY = "grandmaHelperMarketBriefs";
    const INVESTMENT_POSITIONS_KEY = "grandmaHelperInvestmentPositions";
    const INVESTMENT_REMINDERS_KEY = "grandmaHelperInvestmentReminders";
    const INVESTMENT_RISK_CONFIG_KEY = "grandmaHelperInvestmentRiskConfig";
    const INVESTMENT_JOURNAL_KEY = "grandmaHelperInvestmentJournal";
    const BUTLER_FOLLOWUP_KEY = "grandmaHelperButlerFollowup";
    const ORDER_CONNECTION_TOKEN_KEY = "grandmaHelperOrderConnectionToken";
    const ORDER_SUMMARY_CACHE_KEY = "grandmaHelperOrderSummaryCache";
    const UNDO_SNAPSHOT_KEY = "grandmaHelperUndoSnapshot";

    const profiles = {
      personal: {
        name: "個人事項",
        manager: "本人",
        title: "智能管家",
        simpleLabel: "簡單使用",
        assistantLabel: "跟管家說",
        importantLabel: "重要狀況",
        contactLabel: "聯絡對象",
        doneLabel: "我做好了",
        reminderName: "",
        hint: "你直接說就好，管家會幫你整理、提醒和追蹤。",
        quickActions: [
          { label: "待辦<br>記一件事", value: "記一件事" },
          { label: "會議<br>明天開會", value: "明天開會" },
          { label: "採買<br>要買東西", value: "要買東西" },
          { label: "重要<br>需要提醒", value: "需要提醒", alert: true }
        ],
        care: {
          chat: "我在。你可以直接說待辦、會議、採買、付款、客戶或任何雜事，我會幫你分類。",
          music: "先把腦中的事情倒出來，我幫你整理成可追蹤的清單。"
        },
        categories: ["待辦", "會議", "採買", "付款", "聯絡", "文件", "健康", "其他"]
      },
      investment: {
        name: "投資紀律",
        manager: "本人",
        title: "智能管家｜投資紀律",
        simpleLabel: "投資簡單模式",
        assistantLabel: "記投資想法",
        importantLabel: "風險檢查",
        contactLabel: "觀察清單",
        doneLabel: "已處理",
        reminderName: "",
        hint: "只做紀錄、提醒與風險檢查；不提供保證獲利建議，也不自動下單。",
        quickActions: [
          { label: "現價<br>更新追蹤", value: "台積電現價 930" },
          { label: "觀察<br>加入清單", value: "加入觀察清單" },
          { label: "交易<br>記一筆交易", value: "記一筆交易" },
          { label: "到價<br>設定提醒", value: "設定價格提醒" },
          { label: "早報<br>市場模板", value: "每日市場早報" },
          { label: "潛力<br>分析標的", value: "分析標的潛力" },
          { label: "風險<br>檢查紀律", value: "檢查投資風險", alert: true }
        ],
        care: {
          chat: "我在。你可以說標的、價格、買賣理由、停損停利或觀察條件，我會整理成投資紀律紀錄。",
          music: "先不急著下單。把理由、價格、停損和最大可承受損失講清楚，我幫你檢查紀律。"
        },
        categories: ["觀察", "交易", "價格提醒", "停損停利", "市場分析", "潛力分析", "投資日記", "風險", "其他"]
      },
      elder: {
        name: "長輩照護",
        manager: "家人",
        title: "乖孫管家",
        simpleLabel: "阿嬤使用",
        assistantLabel: "跟乖孫說",
        importantLabel: "我不舒服",
        contactLabel: "找家人",
        doneLabel: "我做好了",
        reminderName: "阿嬤",
        hint: "阿嬤你直接說就好，不用找功能鍵。",
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
    let reminderRecoveryTimer = null;

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

    let customActions = [];
    try {
      customActions = storage.getJSON(CUSTOM_ACTIONS_KEY, []);
    } catch (_) {
      customActions = [];
    }

    let marketBriefs = [];
    try {
      marketBriefs = storage.getJSON(MARKET_BRIEFS_KEY, []);
    } catch (_) {
      marketBriefs = [];
    }

    let investmentPositions = [];
    try {
      investmentPositions = storage.getJSON(INVESTMENT_POSITIONS_KEY, []);
    } catch (_) {
      investmentPositions = [];
    }

    let investmentJournal = [];
    try {
      investmentJournal = storage.getJSON(INVESTMENT_JOURNAL_KEY, []);
    } catch (_) {
      investmentJournal = [];
    }

    const quickRule = {
      "記一件事": "好，你可以直接說事情內容、時間和對象，我會幫你整理成待辦。",
      "明天開會": "收到，我先幫你記成會議提醒。你可以補充時間、地點或要準備的資料。",
      "要買東西": "收到，我會幫你整理採買清單。想到新項目直接說再加就好。",
      "需要提醒": "收到，我會把這件事標成重要。你可以接著說要幾點提醒。",
      "加入觀察清單": "可以。請說標的和條件，例如：台積電跌到 900 提醒我。這裡只提醒，不自動下單。",
      "記一筆交易": "請說標的、買賣、價格、數量和理由，例如：買 0050 十張 180 元，理由是長期配置。",
      "設定價格提醒": "請說標的、方向和價格，例如：比特幣跌到 58000 提醒我。",
      "每日市場早報": "我幫你準備早報模板。請補上美股、美元利率、商品、地緣政治和今日觀察標的。",
      "記市場分析": "請輸入前一天美股、美元、利率、油價、地緣政治或產業題材。我會整理進投資週報。",
      "分析標的潛力": "請說標的和理由，例如：分析台積電潛力，重點看 AI 需求、匯率、法說會和估值。這裡只做分析框架，不代表買賣建議。",
      "檢查投資風險": "我會檢查是否缺少停損、是否連續加碼、是否部位太集中。這不是投資建議，只是紀律提醒。",
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

    let lastUndoSnapshot = null;
    try {
      lastUndoSnapshot = storage.getJSON(UNDO_SNAPSHOT_KEY, null);
    } catch (_) {
      lastUndoSnapshot = null;
    }
    let recognition;
    let voiceMode = "idle";
    let recognitionTimeout = null;
    let pendingCheck = null;
    let lastPrompt = null;
    let pendingHealthCapture = null;
    let pendingButlerFollowup = null;
    try {
      pendingButlerFollowup = storage.getJSON(BUTLER_FOLLOWUP_KEY, null);
    } catch (_) {
      pendingButlerFollowup = null;
    }
    let investmentReminderTimers = [];
    let investmentReminderConfig = { enabled: false };
    let investmentRiskConfig = { capital: 0, maxLoss: 0, maxPositionPct: 20 };
    let orderSummaryCache = null;
    try {
      orderSummaryCache = storage.getJSON(ORDER_SUMMARY_CACHE_KEY, null);
    } catch (_) {
      orderSummaryCache = null;
    }

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
      const activeTasks = taskCards.filter(card => card.status === "進行中");
      const activeTaskCount = activeTasks.length;
      const dueTaskCount = activeTasks.filter(card => card.reminderAt && new Date(card.reminderAt).getTime() <= Date.now()).length;
      const alertCount = logs.filter(item => /警示|緊急|升級/.test(item.kind)).length;
      const keywordCount = keywordRules.length;
      systemStatusGrid.innerHTML = [
        `健康 ${healthCount} 筆`,
        `待辦 ${activeTaskCount} 件${dueTaskCount ? `（到時 ${dueTaskCount}）` : ""}`,
        `警示 ${alertCount} 次`,
        `規則 ${keywordCount} 條`
      ].map(text => `<div class="status-pill">${text}</div>`).join("");
    }

    function renderTodayFocus() {
      const openTasks = taskCards
        .filter(card => card.status === "進行中")
        .sort((a, b) => {
          const aTime = a.reminderAt ? new Date(a.reminderAt).getTime() : Number.MAX_SAFE_INTEGER;
          const bTime = b.reminderAt ? new Date(b.reminderAt).getTime() : Number.MAX_SAFE_INTEGER;
          return aTime - bTime;
        });
      const nextTask = openTasks[0];
      const latestHealth = logs.find(item => item.kind === "健康");
      const lines = [];
      const orderStats = orderSummaryCache && orderSummaryCache.stats;
      if (orderStats && Number(orderStats.overdueCount || 0) > 0) {
        lines.push(`訂單：有 ${Number(orderStats.overdueCount)} 筆逾期要先處理`);
      } else if (orderStats && Number(orderStats.todayCount || 0) > 0) {
        lines.push(`訂單：今天有 ${Number(orderStats.todayCount)} 筆要處理`);
      }
      if (orderStats && Number(orderStats.unpaidAmount || 0) > 0) {
        lines.push(`未收款：NT$ ${orderMoney(orderStats.unpaidAmount)}`);
      }
      if (nextTask) {
        const due = nextTask.reminderAt && new Date(nextTask.reminderAt).getTime() <= Date.now();
        lines.push(`${due ? "已到時間" : "待辦"}：${nextTask.title}`);
      }
      if (latestHealth) lines.push(`最近健康：${latestHealth.detail}`);
      if (!lines.length) lines.push("目前沒有急著處理的事情。");
      todayFocus.innerHTML = `<p class="today-focus-title">今天最重要</p><p class="hint">${lines.join("<br>")}</p>`;
    }

    function escapeOrderText(value) {
      return String(value == null ? "" : value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function orderMoney(value) {
      return Number(value || 0).toLocaleString("zh-TW");
    }

    function isOrderSummaryQuery(text) {
      const clean = String(text || "").replace(/[，。！？,.!?\s]/g, "");
      const mentionsOrders = /訂單|出貨|宅配|未收款|收款/.test(clean);
      const asksForStatus = /查|看|整理|摘要|幾筆|多少|哪些|有沒有|還有|目前|現在|今天|明天|到期|逾期|快到|要處理/.test(clean);
      return mentionsOrders && asksForStatus && !/新增|建立|記一筆|客人訂|客戶訂|下單/.test(clean);
    }

    function buildOrderSummaryReply(text) {
      if (!orderSummaryCache || !orderSummaryCache.stats) return "訂單摘要目前還讀不到，我會保留原本資料，請稍後再試一次。";
      const stats = orderSummaryCache.stats;
      const priority = Array.isArray(orderSummaryCache.priority) ? orderSummaryCache.priority : [];
      const clean = String(text || "");
      const lines = [];

      if (/未收款|收款|多少錢/.test(clean)) {
        lines.push(`目前有 ${Number(stats.unpaidCount || 0)} 筆未收款，共 NT$ ${orderMoney(stats.unpaidAmount)}。`);
      } else if (/逾期/.test(clean)) {
        lines.push(`目前有 ${Number(stats.overdueCount || 0)} 筆逾期訂單。`);
      } else if (/宅配|出貨/.test(clean)) {
        lines.push(`目前有 ${Number(stats.shippingCount || 0)} 筆宅配訂單。`);
      } else {
        lines.push(`目前未結案 ${Number(stats.activeCount || 0)} 筆，今天 ${Number(stats.todayCount || 0)} 筆，逾期 ${Number(stats.overdueCount || 0)} 筆。`);
        if (Number(stats.unpaidAmount || 0) > 0) lines.push(`未收款共 NT$ ${orderMoney(stats.unpaidAmount)}。`);
      }

      const urgent = priority.filter(order => Number(order.dueInDays) <= 0).slice(0, 2);
      if (/哪些|逾期|快到|要處理|摘要/.test(clean) && urgent.length) {
        lines.push("先處理：" + urgent.map(order => {
          const due = Number(order.dueInDays) < 0 ? `逾期 ${Math.abs(Number(order.dueInDays))} 天` : "今天處理";
          return `${order.name}（${due}）`;
        }).join("、") + "。");
      }
      return lines.join(" ");
    }

    async function handleOrderSummaryQuery(text) {
      if (!isOrderSummaryQuery(text)) return false;
      if (!getOrderConnectionToken()) {
        const reply = "訂單系統還沒連接。請家人在管理頁設定一次連接密碼，之後直接問我就好。";
        lifeNoteStatus.textContent = reply;
        voiceText.textContent = reply;
        updateFloatingStatus(reply);
        speak(reply);
        return true;
      }

      const generatedAt = orderSummaryCache && Date.parse(orderSummaryCache.generatedAt || "");
      const isStale = !generatedAt || Date.now() - generatedAt > 5 * 60 * 1000;
      if (!orderSummaryCache || isStale) await fetchOrderSummary();
      const reply = buildOrderSummaryReply(text);
      lifeNoteStatus.textContent = reply;
      voiceText.textContent = reply;
      updateFloatingStatus(reply);
      speak(reply);
      return true;
    }

    function isButlerBriefQuery(text) {
      const clean = String(text || "").replace(/[，。！？、,.!?\s]/g, "");
      return /^(?:管家|乖孫)?(?:今天|現在|目前)?(?:要做什麼|有什麼要做|有什麼事情|有什麼重要的事|有沒有重要的事|有沒有要處理的事|幫我整理一下|幫我看一下|報告一下|說明一下)$/.test(clean)
        || /^(?:管家|乖孫)(?:今日報告|今天報告|總整理|總結|報告)$/.test(clean);
    }

    function buildButlerBriefReply() {
      const lines = [];
      const openTasks = taskCards.filter(card => card.status === "進行中");
      const nextTask = openTasks[0];
      if (openTasks.length) {
        lines.push(`你有 ${openTasks.length} 件事情，我先幫你顧著。最重要的是「${nextTask.title}」`);
      }

      const orderStats = orderSummaryCache && orderSummaryCache.stats;
      if (orderStats) {
        const orderParts = [];
        if (Number(orderStats.overdueCount || 0) > 0) orderParts.push(`逾期 ${Number(orderStats.overdueCount)} 筆`);
        if (Number(orderStats.todayCount || 0) > 0) orderParts.push(`今天 ${Number(orderStats.todayCount)} 筆`);
        if (Number(orderStats.unpaidAmount || 0) > 0) orderParts.push(`未收款 NT$ ${orderMoney(orderStats.unpaidAmount)}`);
        if (orderParts.length) lines.push(`訂單要注意：${orderParts.join("、")}`);
      }

      const latestHealth = logs.find(item => item.kind === "健康");
      if (latestHealth) lines.push(`最近健康紀錄是：${latestHealth.detail}`);

      const investmentCards = typeof getInvestmentCards === "function"
        ? getInvestmentCards().filter(card => card.status === "進行中")
        : [];
      const investmentRiskCount = investmentCards.filter(card => card.category === "風險" || card.category === "停損停利").length;
      if (investmentRiskCount) lines.push(`投資有 ${investmentRiskCount} 項風險或停損停利要確認`);

      if (!lines.length) return "目前沒有急著處理的事情。想到任何事直接跟我說，我會幫你分類和記住。";
      return lines.slice(0, 4).join("。") + "。";
    }

    async function handleButlerBriefQuery(text) {
      if (!isButlerBriefQuery(text)) return false;
      if (getOrderConnectionToken()) {
        const generatedAt = orderSummaryCache && Date.parse(orderSummaryCache.generatedAt || "");
        const isStale = !generatedAt || Date.now() - generatedAt > 5 * 60 * 1000;
        if (!orderSummaryCache || isStale) await fetchOrderSummary();
      }
      const reply = buildButlerBriefReply();
      lifeNoteStatus.textContent = reply;
      voiceText.textContent = reply;
      updateFloatingStatus(reply);
      speak(reply);
      return true;
    }
    function getOrderConnectionToken() {
      try {
        return storage.getString(ORDER_CONNECTION_TOKEN_KEY, "");
      } catch (_) {
        return "";
      }
    }

    function renderOrderSummary() {
      if (!orderConnectionStatus || !orderSummaryStats || !orderPriorityList) return;
      const token = getOrderConnectionToken();
      if (orderConnectionToken && document.activeElement !== orderConnectionToken) {
        orderConnectionToken.value = token;
      }
      if (!token) {
        orderConnectionStatus.textContent = "尚未設定訂單連接密碼。";
        orderSummaryStats.innerHTML = "";
        orderPriorityList.innerHTML = "<p class='hint'>設定完成後，管家會顯示今日、逾期、宅配與未收款摘要。</p>";
        return;
      }
      if (!orderSummaryCache || !orderSummaryCache.stats) {
        orderConnectionStatus.textContent = "已儲存連接密碼，請按「更新訂單摘要」。";
        orderSummaryStats.innerHTML = "";
        orderPriorityList.innerHTML = "";
        return;
      }

      const stats = orderSummaryCache.stats;
      orderConnectionStatus.textContent = "唯讀連接正常｜上次更新 " +
        new Date(orderSummaryCache.generatedAt).toLocaleString("zh-TW");
      orderSummaryStats.innerHTML = [
        "未結案 " + Number(stats.activeCount || 0) + " 筆",
        "今日 " + Number(stats.todayCount || 0) + " 筆",
        "逾期 " + Number(stats.overdueCount || 0) + " 筆",
        "未收款 NT$ " + orderMoney(stats.unpaidAmount)
      ].map(text => "<div class='status-pill'>" + text + "</div>").join("");

      const priority = Array.isArray(orderSummaryCache.priority) ? orderSummaryCache.priority : [];
      if (!priority.length) {
        orderPriorityList.innerHTML = "<p class='hint'>目前沒有近期要處理的訂單。</p>";
        return;
      }
      orderPriorityList.innerHTML = priority.map(order => {
        const dueText = order.dueInDays < 0
          ? "逾期 " + Math.abs(order.dueInDays) + " 天"
          : order.dueInDays === 0 ? "今天處理" : order.dueInDays + " 天後";
        const dateText = order.delivery === "宅配"
          ? "寄出 " + (order.shipDate || "日期待確認")
          : "取貨 " + (order.processDate || "日期待確認");
        return "<div class='order-priority-item" + (order.dueInDays <= 0 ? " urgent" : "") + "'>" +
          "<strong>" + escapeOrderText(order.name) + "</strong>｜" + escapeOrderText(order.delivery) +
          "<br>" + escapeOrderText(dateText) + "｜" + escapeOrderText(dueText) +
          "<br>未收 NT$ " + orderMoney(order.unpaid) + "｜" + escapeOrderText(order.status) +
          "</div>";
      }).join("");
    }

    function saveOrderConnection() {
      const token = orderConnectionToken ? orderConnectionToken.value.trim() : "";
      try {
        storage.setString(ORDER_CONNECTION_TOKEN_KEY, token);
      } catch (_) {}
      if (!token) {
        orderSummaryCache = null;
        try {
          storage.setJSON(ORDER_SUMMARY_CACHE_KEY, null);
        } catch (_) {}
        renderOrderSummary();
        return;
      }
      orderConnectionStatus.textContent = "連接密碼已儲存，正在測試唯讀連線...";
      fetchOrderSummary();
    }

    async function fetchOrderSummary() {
      const token = getOrderConnectionToken();
      if (!token) {
        renderOrderSummary();
        return false;
      }
      if (location.protocol === "file:") {
        orderConnectionStatus.textContent = "本機檔案模式無法連接 API，部署到 Vercel 後即可測試。";
        return false;
      }

      if (refreshOrderSummaryBtn) refreshOrderSummaryBtn.disabled = true;
      orderConnectionStatus.textContent = "正在讀取訂單摘要...";
      try {
        const response = await fetch("/api/order-summary", {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
          cache: "no-store"
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          if (response.status === 401) throw new Error("連接密碼不正確");
          if (response.status === 503) throw new Error("Vercel 尚未設定訂單連接環境變數");
          throw new Error("訂單摘要暫時無法讀取");
        }
        orderSummaryCache = payload;
        try {
          storage.setJSON(ORDER_SUMMARY_CACHE_KEY, orderSummaryCache);
        } catch (_) {}
        renderOrderSummary();
        renderTodayFocus();
        updateFloatingStatus("肉粽訂單摘要已更新");
        return true;
      } catch (error) {
        orderConnectionStatus.textContent = error.message || "訂單連接失敗";
        return false;
      } finally {
        if (refreshOrderSummaryBtn) refreshOrderSummaryBtn.disabled = false;
      }
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
        return storage.getString(PROFILE_KEY, "personal");
      } catch (_) {
        return "personal";
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
      const profile = profiles[profileId] || profiles.personal;
      profileSelect.value = profileId;
      if (appTitle) appTitle.textContent = "智能管家";
      if (mainHint) mainHint.textContent = (profile.hint || "你直接說就好，管家會幫你整理。").replace(/助理/g, "管家").replace(/秘書/g, "紀律");
      if (assistantSectionTitle) assistantSectionTitle.textContent = "跟管家說";
      if (voiceBtn) voiceBtn.textContent = "跟管家說";
      if (elderSpeakBtn) elderSpeakBtn.textContent = "跟管家說";
      if (elderEmergencyBtn) elderEmergencyBtn.textContent = profile.importantLabel || "重要狀況";
      if (elderFamilyBtn) elderFamilyBtn.textContent = profile.contactLabel || "聯絡對象";
      if (elderDoneBtn) elderDoneBtn.textContent = profile.doneLabel || "我做好了";
      renderSectionVisibility();
      if (lifeNoteTitle) lifeNoteTitle.textContent = profileId === "investment" ? "投資紀錄" : "生活記事";
      if (lifeNoteInput) {
        lifeNoteInput.placeholder = profileId === "investment"
          ? "例如：台積電跌到 900 提醒我、買 0050 十張 180 元、這筆交易太衝動"
          : "直接說或輸入：明天開會、買咖啡、診所拿藥、客戶要回覆";
      }
      if (saveLifeNoteBtn) saveLifeNoteBtn.textContent = profileId === "investment" ? "讓管家整理投資紀律" : "讓管家幫我整理";
      if (weeklyTitle) weeklyTitle.textContent = profileId === "investment" ? "投資週報" : "週報摘要";
      if (weeklyBtn) weeklyBtn.textContent = profileId === "investment" ? "產生投資週報" : "產生週報";
      if (copyWeeklyBtn) copyWeeklyBtn.textContent = profileId === "investment" ? "複製投資週報" : "複製週報";
      if (weeklyReportText) weeklyReportText.placeholder = profileId === "investment" ? "投資週報會顯示在這裡" : "週報會顯示在這裡";
      const simpleTab = document.getElementById("grandmaViewBtn");
      if (simpleTab) simpleTab.textContent = profile.simpleLabel || "簡單使用";
      profileStatus.textContent = `目前管家優先照顧：${profile.name}｜由同一個管家整理`;
      renderQuickActions();
      careMessage.textContent = buildCareMessage();
      renderSystemStatus();
      renderInvestmentDashboard();
      updateFloatingStatus(`管家已開始照顧「${profile.name}」情境`);
    }

    function renderQuickActions() {
      const profile = profiles[getProfile()] || profiles.personal;
      const actions = [...profile.quickActions, ...customActions];
      quickActionGrid.innerHTML = actions.map(action => (
        `<button class="big-btn${action.alert ? " alert" : ""}" type="button" data-quick="${action.value}">${action.label}</button>`
      )).join("");

      quickActionGrid.querySelectorAll("[data-quick]").forEach(btn => {
        btn.addEventListener("click", () => handleQuickAction(btn.dataset.quick));
      });
    }

    function handleQuickAction(text) {
      captureUndoSnapshot(text);
      logEvent("回報", text);
      markResponseReceived(text);
      if (text === "我量好了") {
        handleHealthCapture(text);
        return;
      }
      if (text === "每日市場早報") {
        insertMarketTemplate("morning");
      }
      if (text === "分析標的潛力") {
        insertMarketTemplate("potential");
      }
      if (text === "檢查投資風險") {
        insertMarketTemplate("risk");
      }
      const reply = quickRule[text] || "收到，我幫你記下來。";
      voiceText.innerHTML = `<span class="ok">已記錄：</span>${text}`;
      speak(reply);
      if (!["我吃藥了", "我要看影片", "我不舒服"].includes(text)) {
        saveLifeNote(text);
      }
    }

    function showSetupWizardIfNeeded() {
      if (!setupWizard) return;
      const done = storage.getString(SETUP_DONE_KEY, "") === "yes";
      if (!done) setupWizard.classList.remove("hidden");
    }

    function completeSetup(profileId) {
      if (profileId) setProfile(profileId);
      storage.setString(SETUP_DONE_KEY, "yes");
      setupWizard.classList.add("hidden");
    }

    function persistCustomActions() {
      customActions = customActions.slice(0, 6);
      storage.setJSON(CUSTOM_ACTIONS_KEY, customActions);
      renderCustomActions();
      renderQuickActions();
    }

    function addCustomAction() {
      const label = customActionLabelInput.value.trim();
      const value = customActionTextInput.value.trim();
      if (!label || !value) {
        actionStatus.textContent = "請輸入快捷鍵名稱和觸發內容。";
        return;
      }
      customActions.unshift({
        label,
        value,
        custom: true
      });
      customActionLabelInput.value = "";
      customActionTextInput.value = "";
      persistCustomActions();
      actionStatus.textContent = `已新增快捷鍵：${label}`;
    }

    function renderCustomActions() {
      if (!customActionList) return;
      if (!customActions.length) {
        customActionList.innerHTML = "<p class='hint'>還沒有自訂快捷鍵。</p>";
        return;
      }
      customActionList.innerHTML = customActions.map((action, index) => (
        `<div class="list-item"><strong>${action.label}</strong><br>${action.value}<br><button class="delete-btn" type="button" data-delete-action="${index}">刪除快捷鍵</button></div>`
      )).join("");
      customActionList.querySelectorAll("[data-delete-action]").forEach(btn => {
        btn.addEventListener("click", () => {
          customActions.splice(Number(btn.dataset.deleteAction), 1);
          persistCustomActions();
        });
      });
    }

    function handleElderSpeak() {
      const profile = profiles[getProfile()] || profiles.personal;
      voiceText.textContent = getProfile() === "elder"
        ? "我在聽。你可以說血壓數字、買菜、拿藥、哪裡不舒服，或任何想到的事。"
        : `${profile.care.chat} 例如：明天 10 點開會、下午要回客戶、月底要繳費。`;
      toggleVoiceByClick();
    }

    function handleElderEmergency() {
      if (getProfile() === "investment") {
        renderInvestmentDashboard();
        const cards = getInvestmentCards();
        const notes = getInvestmentRiskNotes(cards);
        const message = notes.length
          ? `目前投資紀律提醒：${notes.join(" ")}`
          : "目前沒有明顯高風險訊號。仍請確認每筆交易都有理由、停損和部位上限。";
        voiceText.textContent = message;
        updateFloatingStatus(message);
        speak(message);
        return;
      }
      const isElder = getProfile() === "elder";
      const message = isElder
        ? "我收到不舒服訊息。你先坐好休息，我會通知家人關心你。"
        : "我已標記為重要狀況。你可以接著說原因、時間或要通知誰。";
      voiceText.textContent = message;
      logEvent(isElder ? "緊急" : "重要", isElder ? "阿嬤按下我不舒服" : "使用者標記重要狀況");
      if (isElder) notifyFamily("阿嬤按下我不舒服");
      speak(message);
    }

    function handleElderFamily() {
      if (getProfile() === "investment") {
        const message = "請直接說觀察標的和條件，例如：台積電跌到 900 提醒我，或 BTC 突破 70000 提醒我。";
        voiceText.textContent = message;
        updateFloatingStatus(message);
        speak(message);
        return;
      }
      const isElder = getProfile() === "elder";
      const message = isElder
        ? "我幫你通知家人，請他們來關心你。"
        : "我先幫你記成聯絡提醒。請接著說要聯絡誰、什麼時間、什麼事情。";
      voiceText.textContent = message;
      if (isElder) notifyFamily("阿嬤想找家人");
      else saveLifeNote("聯絡提醒");
      speak(message);
    }

    function handleElderDone() {
      const message = "好，我幫你記下完成了。如果是哪一件事，也可以直接跟我說。";
      voiceText.textContent = message;
      markResponseReceived("我做好了");
      logEvent("回報", getProfile() === "elder" ? "阿嬤按下我做好了" : "使用者按下我做好了");
      speak(message);
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

    function renderSectionVisibility() {
      const isFamilyView = getView() === "family";
      const profileId = getProfile();
      document.querySelectorAll(".admin-section").forEach(section => {
        const profileMatches = !section.classList.contains("investment-only") || profileId === "investment";
        section.classList.toggle("hidden", !isFamilyView || !profileMatches);
      });
    }

    function renderView() {
      const view = getView();
      document.getElementById("grandmaViewToggle").checked = view === "grandma";
      document.getElementById("familyViewToggle").checked = view === "family";
      document.getElementById("grandmaViewBtn").classList.toggle("active", view === "grandma");
      document.getElementById("familyViewBtn").classList.toggle("active", view === "family");
      renderSectionVisibility();
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
      renderInvestmentDashboard();
    }

    function updateFloatingStatus(text) {
      if (!floatingStatus) return;
      const shortText = String(text || "").replace(/\s+/g, " ").trim();
      floatingStatus.textContent = shortText.length > 46 ? `${shortText.slice(0, 46)}...` : shortText;
    }

    function cloneUndoValue(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function renderUndoAction() {
      if (!undoLastBtn) return;
      const expired = lastUndoSnapshot && Date.now() - Number(lastUndoSnapshot.createdAt || 0) > 24 * 60 * 60 * 1000;
      if (expired) {
        lastUndoSnapshot = null;
        try { storage.remove(UNDO_SNAPSHOT_KEY); } catch (_) {}
      }
      undoLastBtn.classList.toggle("hidden", !lastUndoSnapshot);
    }

    function captureUndoSnapshot(label) {
      lastUndoSnapshot = {
        createdAt: Date.now(),
        label: String(label || "剛剛操作").slice(0, 60),
        logs: cloneUndoValue(logs),
        habits: cloneUndoValue(habits),
        taskCards: cloneUndoValue(taskCards),
        moodLogs: cloneUndoValue(moodLogs),
        medicines: cloneUndoValue(medicines),
        marketBriefs: cloneUndoValue(marketBriefs),
        investmentPositions: cloneUndoValue(investmentPositions),
        investmentJournal: cloneUndoValue(investmentJournal)
      };
      try { storage.setJSON(UNDO_SNAPSHOT_KEY, lastUndoSnapshot); } catch (_) {}
      renderUndoAction();
    }

    function undoLastAction() {
      if (!lastUndoSnapshot) {
        const message = "目前沒有可以復原的操作。";
        voiceText.textContent = message;
        lifeNoteStatus.textContent = message;
        speak(message);
        return false;
      }
      const snapshot = lastUndoSnapshot;
      logs = cloneUndoValue(snapshot.logs || []);
      habits = cloneUndoValue(snapshot.habits || []);
      taskCards = cloneUndoValue(snapshot.taskCards || []);
      moodLogs = cloneUndoValue(snapshot.moodLogs || []);
      medicines = cloneUndoValue(snapshot.medicines || []);
      marketBriefs = cloneUndoValue(snapshot.marketBriefs || []);
      investmentPositions = cloneUndoValue(snapshot.investmentPositions || []);
      investmentJournal = cloneUndoValue(snapshot.investmentJournal || []);
      try {
        storage.setJSON(STORE_KEY, logs);
        storage.setJSON(HABIT_KEY, habits);
        storage.setJSON(TASK_KEY, taskCards);
        storage.setJSON(MOOD_KEY, moodLogs);
        storage.setJSON(MEDICINE_KEY, medicines);
        storage.setJSON(MARKET_BRIEFS_KEY, marketBriefs);
        storage.setJSON(INVESTMENT_POSITIONS_KEY, investmentPositions);
        storage.setJSON(INVESTMENT_JOURNAL_KEY, investmentJournal);
        storage.remove(UNDO_SNAPSHOT_KEY);
      } catch (_) {}
      lastUndoSnapshot = null;
      renderSummary();
      renderHabits();
      renderTaskCards();
      renderMoodTrend();
      renderMedicines();
      renderHabitRadar();
      renderHealthTrend();
      renderMarketBriefs();
      renderInvestmentDashboard();
      renderSystemStatus();
      renderTodayFocus();
      scheduleAllTaskReminders();
      renderUndoAction();
      const message = `已復原「${snapshot.label}」。剛剛那次操作已取消。`;
      voiceText.textContent = message;
      lifeNoteStatus.textContent = message;
      updateFloatingStatus(message);
      speak(message);
      return true;
    }

    function handleUndoCommand(text) {
      const clean = String(text || "").replace(/[，。！？、,.!?\s]/g, "");
      if (!/^(?:管家|乖孫)?(?:剛剛)?(?:說錯了|記錯了|弄錯了|刪除剛剛那筆|刪掉剛剛那筆|復原剛剛操作|取消剛剛操作)$/.test(clean)) return false;
      undoLastAction();
      return true;
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
      const profile = profiles[getProfile()] || profiles.personal;
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

    function isInvestmentCategory(category) {
      return ["觀察", "交易", "價格提醒", "停損停利", "市場分析", "潛力分析", "投資日記", "風險"].includes(category);
    }

    function getInvestmentCards() {
      return taskCards.filter(card => isInvestmentCategory(card.category));
    }

    function getInvestmentRiskNotes(cards) {
      const activeCards = cards.filter(card => card.status === "進行中");
      const riskCards = activeCards.filter(card => card.category === "風險");
      const tradeCards = activeCards.filter(card => card.category === "交易");
      const stopCards = activeCards.filter(card => card.category === "停損停利");
      const highRiskTexts = logs.filter(item => item.kind === "投資風險").slice(0, 5);
      const notes = [];

      if (tradeCards.length && !stopCards.length) {
        notes.push("有交易紀錄，但目前沒有看到停損停利紀律卡。");
      }
      const noStopPositions = investmentPositions.filter(position => position.status !== "已出場" && !position.stopLoss);
      if (noStopPositions.length) {
        notes.push(`有 ${noStopPositions.length} 筆持倉沒有停損，請先補上風險界線。`);
      }
      const riskLimitPositions = investmentPositions.filter(position => position.status !== "已出場" && Number(position.quantity || 0) && !evaluateRiskLimits(position).ok);
      if (riskLimitPositions.length) {
        notes.push(riskLimitPositions.map(position => position.symbol).join("、") + " 超過資金控管設定，請檢查單筆虧損或單檔投入比例。 ");
      }
      const lowDisciplinePositions = investmentPositions.filter(position => position.status !== "已出場" && Number(position.quantity || 0) && evaluateTradeDiscipline(position).score < 60);
      if (lowDisciplinePositions.length) {
        notes.push(lowDisciplinePositions.map(position => position.symbol).join("、") + " 交易紀律不足，請補齊理由、停損、停利、部位大小或最大可虧損。 ");
      }
      const priceAlertPositions = investmentPositions.filter(position => {
        const price = Number(position.currentPrice || 0);
        const stopLoss = Number(position.stopLoss || 0);
        const takeProfit = Number(position.takeProfit || 0);
        return position.status !== "已出場" && price && ((stopLoss && price <= stopLoss) || (takeProfit && price >= takeProfit));
      });
      if (priceAlertPositions.length) {
        notes.push(priceAlertPositions.map(position => position.symbol).join("、") + " 已碰到停損或停利線，請先檢查紀律，不自動下單。");
      }
            if (riskCards.length || highRiskTexts.length) {
        notes.push("有高風險紀錄，請先確認槓桿、部位大小與最大可承受虧損。");
      }
      if (activeCards.length >= 5) {
        notes.push("進行中的投資事項偏多，建議先收斂觀察清單。");
      }
      return notes;
    }

    function renderInvestmentDashboard() {
      if (!investmentDashboard || getProfile() !== "investment") return;
      const cards = getInvestmentCards();
      const activeCards = cards.filter(card => card.status === "進行中");
      const stats = {
        觀察: activeCards.filter(card => card.category === "觀察").length,
        交易: activeCards.filter(card => card.category === "交易").length,
        到價: activeCards.filter(card => card.category === "價格提醒").length,
        分析: activeCards.filter(card => card.category === "市場分析" || card.category === "潛力分析").length,
        風險: activeCards.filter(card => card.category === "風險").length
      };
      investmentStats.innerHTML = Object.entries(stats).map(([label, count]) => (
        `<div class="status-pill">${label} ${count} 筆</div>`
      )).join("");

      const notes = getInvestmentRiskNotes(cards);
      investmentRiskBox.innerHTML = [
        "<p class='today-focus-title'>紀律檢查</p>",
        notes.length
          ? notes.map(note => `<p class="hint">${note}</p>`).join("")
          : "<p class='hint'>目前沒有明顯高風險訊號。仍請自行確認交易理由與停損條件。</p>"
      ].join("");
      renderInvestmentPositions();
      renderInvestmentRiskConfig();
      renderInvestmentJournal();
      renderInvestmentStrategies();
      renderMarketBriefs();
    }

    function isInvestmentText(text) {
      const clean = String(text || "").replace(/[，。！？,.!?s]/g, "");
      const hasSymbol = /台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|[A-Z]{1,6}|d{4,6}/i.test(clean);
      const hasInvestmentAction = /股票|投資|持股|持倉|買進|賣出|成交|加碼|減碼|進場|出場|數量|觀察|跌到|漲到|現價|收盤|報價|停損|停利|到價|觀察價|目標價|策略|部位|財報|籌碼|技術面|基本面|本益比|殖利率|ETF|大盤|盤勢|復盤|FOMO/i.test(clean);
      const hasMarketContext = /美股|台股|那斯達克|NASDAQ|標普|S&P|道瓊|費半|FOMC|CPI|PCE|非農|美債|美元指數|地緣政治/i.test(clean);
      return hasMarketContext || (hasSymbol && hasInvestmentAction);
    }

    function detectButlerContext(text) {
      const clean = String(text || "").replace(/[，。！？,.!?s]/g, "");
      if (isHealthMeasurementText(text) || /血壓|血糖|吃藥|打針|胰島素|回診|診所|醫院|拿藥|頭暈|胸悶|不舒服/.test(clean)) return "elder";
      if (isInvestmentText(text)) return "investment";
      if (/訂單|出貨|宅配|物流|收款|庫存|客人訂|客戶訂|包材|原料|幾顆|幾份/.test(clean)) return "business";
      if (/學生|家長|批改|考卷|班務|點名|教案|研習/.test(clean)) return "teacher";
      if (/作業|功課|段考|期中考|期末考|課表|讀書計畫|交報告/.test(clean)) return "student";
      if (/菜市場|買菜|超市|家務|倒垃圾|洗衣|掃地|煮飯|接送孩子|家庭採買/.test(clean)) return "home";
      return "";
    }

    const butlerContextLabels = {
      personal: "個人事項",
      investment: "投資紀律",
      elder: "健康照護",
      student: "學生讀書",
      teacher: "老師班務",
      home: "家庭生活",
      business: "小生意"
    };
    function persistButlerFollowup() {
      try {
        storage.setJSON(BUTLER_FOLLOWUP_KEY, pendingButlerFollowup);
      } catch (_) {}
      renderButlerFollowup();
    }

    function clearButlerFollowup(message) {
      pendingButlerFollowup = null;
      persistButlerFollowup();
      if (message) {
        lifeNoteStatus.textContent = message;
        voiceText.textContent = message;
      }
    }

    function renderButlerFollowup() {
      if (!butlerFollowup || !butlerFollowupQuestion) return;
      const expired = pendingButlerFollowup && Date.now() - Number(pendingButlerFollowup.createdAt || 0) > 86400000;
      if (expired) pendingButlerFollowup = null;
      butlerFollowup.classList.toggle("hidden", !pendingButlerFollowup);
      butlerFollowupQuestion.textContent = pendingButlerFollowup ? pendingButlerFollowup.question : "";
    }

    function getInvestmentSymbol(text) {
      const match = String(text || "").match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      return match ? match[0].toUpperCase() : "";
    }

    function hasTimeDetail(text) {
      return /(?:上午|下午|早上|晚上|中午|凌晨)?\s*\d{1,2}(?:[:：]\d{1,2})?\s*(?:點|時|分)?|今天|明天|後天|星期[一二三四五六日天]|週[一二三四五六日天]/.test(String(text || ""));
    }

    function buildButlerFollowup(text, context) {
      const clean = String(text || "").trim();
      if (!clean || /先不用|不用問|不確定|還不知道/.test(clean)) return null;
      if (context === "investment" && /買|賣|成交|加碼|減碼|進場|出場/.test(clean)) {
        const symbol = getInvestmentSymbol(clean);
        if (symbol && !/\d+(?:\.\d+)?\s*(?:張|股|單位|手)/.test(clean)) {
          return { type: "investment-quantity", context, symbol, original: clean, question: symbol + " 的買賣數量是多少？例如「1 張」。" };
        }
        if (symbol && !/(?:成交價|價格|均價|買在|賣在|@\s*)\s*\d+(?:\.\d+)?/.test(clean)) {
          return { type: "investment-price", context, symbol, original: clean, question: symbol + " 的成交價是多少？例如「930 元」。" };
        }
      }
      if (context === "investment" && /觀察|追蹤|到價|提醒/.test(clean) && !/(?:等到|跌到|漲到|低於|高於|突破|跌破|觀察價|目標價)\s*\d+(?:\.\d+)?/.test(clean)) {
        return { type: "investment-condition", context, symbol: getInvestmentSymbol(clean), original: clean, question: "要在什麼價格或條件提醒你？例如「跌到 900」。" };
      }
      if (context === "business" && /訂單|客人|客戶|訂了|要/.test(clean) && !/\d+(?:\.\d+)?\s*(?:顆|份|個|盒|包|組|件|箱|斤)/.test(clean)) {
        return { type: "quantity", context, original: clean, question: "這一筆數量是多少？例如「20 顆」。" };
      }
      if (/提醒|開會|回診|診所|拿藥|出貨|繳費|接送|交作業/.test(clean) && !hasTimeDetail(clean)) {
        return { type: "time", context, original: clean, question: "這件事要什麼時候提醒？例如「明天上午十點」。" };
      }
      return null;
    }
    function askButlerFollowup(text, context) {
      const next = buildButlerFollowup(text, context);
      if (!next) return false;
      pendingButlerFollowup = { ...next, createdAt: Date.now() };
      persistButlerFollowup();
      voiceText.textContent = next.question;
      updateFloatingStatus(next.question);
      speak(next.question);
      return true;
    }

    function isMatchingFollowupAnswer(text, pending) {
      if (!pending) return false;
      const clean = String(text || "").trim();
      if (pending.type === "time") return hasTimeDetail(clean);
      if (pending.type === "quantity" || pending.type === "investment-quantity") return /\d+(?:\.\d+)?\s*(?:張|股|單位|手|顆|份|個|盒|包|組|件|箱|斤)/.test(clean);
      if (pending.type === "investment-price") return /\d+(?:\.\d+)?\s*(?:元|塊)?/.test(clean);
      if (pending.type === "investment-condition") return /(?:等到|跌到|漲到|低於|高於|突破|跌破)?\s*\d+(?:\.\d+)?/.test(clean);
      return false;
    }
    function handlePendingButlerAnswer(text) {
      if (!pendingButlerFollowup) return false;
      const clean = String(text || "").trim();
      if (/先不用|不用了|取消|還不知道/.test(clean)) {
        clearButlerFollowup("好，先照原本內容記著，之後想到再補充。");
        speak("好，之後想到再補充。");
        return true;
      }
      if (!isMatchingFollowupAnswer(clean, pendingButlerFollowup)) return false;

      const pending = pendingButlerFollowup;
      pendingButlerFollowup = null;
      persistButlerFollowup();

      if (pending.type.startsWith("investment-")) {
        let supplement = pending.symbol ? pending.symbol + " " : "";
        if (pending.type === "investment-quantity") supplement += "數量 " + clean;
        else if (pending.type === "investment-price") supplement += "成交價 " + clean;
        else supplement += "觀察條件 " + clean;
        saveLifeNote(supplement);
        if (pending.type === "investment-quantity" && !/(?:成交價|價格|均價|買在|賣在|@\s*)\s*\d+(?:\.\d+)?/.test(pending.original)) {
          pendingButlerFollowup = {
            type: "investment-price",
            context: "investment",
            symbol: pending.symbol,
            original: pending.original,
            question: pending.symbol + " 的成交價是多少？例如「930 元」。",
            createdAt: Date.now()
          };
          persistButlerFollowup();
          voiceText.textContent = pendingButlerFollowup.question;
          speak(pendingButlerFollowup.question);
        } else {
          lifeNoteStatus.textContent = "已把回答補回原本的投資紀錄。";
        }
        return true;
      }

      const category = classifyLifeNote(pending.original);
      const target = findOpenTask(category, pending.original);
      if (target) {
        if (pending.type === "time") target.reminderAt = inferTaskReminder(pending.original + " " + clean, category);
        else if (!target.items.includes(clean)) target.items.push(clean);
        target.updatedAt = new Date().toISOString();
        persistTaskCards();
        logEvent("管家補充", target.title + "：" + clean);
      }
      const reply = target ? "好，已經補到「" + target.title + "」。" : "好，我已經補充記下來。";
      lifeNoteStatus.textContent = reply;
      voiceText.textContent = reply;
      updateFloatingStatus(reply);
      speak(reply);
      return true;
    }
    function extractInvestmentTrade(text) {
      if (!isInvestmentText(text)) return null;
      const clean = String(text || "").replace(/，/g, ",");
      if (!/買|賣|加碼|減碼|成交|進場|出場|出清/.test(clean)) return null;
      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      if (!symbolMatch) return null;
      const action = /賣|減碼|出場|出清/.test(clean) ? "賣出" : "買進";
      const numbers = Array.from(clean.matchAll(/\d+(?:\.\d+)?/g)).map(match => Number(match[0]));
      const qtyMatch = clean.match(/(\d+(?:\.\d+)?)\s*(張|股|顆|枚|單位|手)/);
      const stopLossMatch = clean.match(/(?:停損|止損|跌破)\s*(\d+(?:\.\d+)?)/);
      const takeProfitMatch = clean.match(/(?:停利|止盈|漲到|目標價)\s*(\d+(?:\.\d+)?)/);
      const symbol = symbolMatch[0].toUpperCase();
      const quantity = qtyMatch ? Number(qtyMatch[1]) : null;
      const unit = qtyMatch ? qtyMatch[2] : "";
      const excluded = new Set([quantity, stopLossMatch ? Number(stopLossMatch[1]) : null, takeProfitMatch ? Number(takeProfitMatch[1]) : null].filter(Boolean));
      if (/^\d+$/.test(symbol)) excluded.add(Number(symbol));
      const price = numbers.find(num => !excluded.has(num)) || null;
      if (!price && !quantity && !stopLossMatch && !takeProfitMatch) return null;
      return {
        symbol,
        action,
        price,
        quantity,
        unit,
        stopLoss: stopLossMatch ? Number(stopLossMatch[1]) : null,
        takeProfit: takeProfitMatch ? Number(takeProfitMatch[1]) : null,
        note: clean,
        ts: new Date().toLocaleString("zh-TW")
      };
    }

    function upsertInvestmentPosition(text) {
      const trade = extractInvestmentTrade(text);
      if (!trade) return false;
      let position = investmentPositions.find(item => item.symbol === trade.symbol && item.status !== "已出場");
      if (!position) {
        position = {
          id: Date.now(),
          symbol: trade.symbol,
          market: guessInvestmentMarket(trade.symbol),
          status: trade.action === "賣出" ? "已出場" : "持有中",
          quantity: 0,
          unit: trade.unit || "",
          avgPrice: null,
          currentPrice: null,
          lastPriceAt: null,
          watchPrice: null,
          potentialScore: null,
          potentialTags: [],
          potentialRisks: [],
          thesis: "",
          stopLoss: null,
          takeProfit: null,
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        investmentPositions.unshift(position);
      }
      if (trade.action === "買進") {
        const oldQty = Number(position.quantity || 0);
        const addQty = Number(trade.quantity || 0);
        if (trade.price && addQty) {
          const oldCost = oldQty && position.avgPrice ? oldQty * position.avgPrice : 0;
          position.avgPrice = (oldCost + trade.price * addQty) / Math.max(oldQty + addQty, 1);
        } else if (trade.price && !position.avgPrice) {
          position.avgPrice = trade.price;
        }
        if (addQty) position.quantity = oldQty + addQty;
        if (trade.unit) position.unit = trade.unit;
        position.status = "持有中";
      } else {
        const sellQty = Number(trade.quantity || 0);
        if (sellQty && position.quantity) position.quantity = Math.max(Number(position.quantity) - sellQty, 0);
        if (!sellQty || position.quantity === 0) position.status = "已出場";
      }
      if (trade.stopLoss) position.stopLoss = trade.stopLoss;
      if (trade.takeProfit) position.takeProfit = trade.takeProfit;
      const tradeReason = extractTradeReason(trade.note);
      if (tradeReason) position.thesis = tradeReason;
      refreshTradeConfirmation(position);
      position.notes.unshift(trade.ts + " " + trade.action + (trade.price ? " @ " + formatMaybeNumber(trade.price) : "") + (trade.quantity ? " " + formatMaybeNumber(trade.quantity) + trade.unit : ""));
      position.notes = position.notes.slice(0, 8);
      position.updatedAt = new Date().toISOString();
      investmentPositions = investmentPositions.slice(0, 50);
      persistInvestmentPositions();
      return true;
    }

    function extractInvestmentConfirmation(text) {
      if (!isInvestmentText(text)) return null;
      const clean = String(text || "").replace(/，/g, ",");
      if (!/(停損|止損|停利|止盈|理由|因為|看好|最大可虧損|部位|數量|成交價|均價)/.test(clean)) return null;
      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      if (!symbolMatch) return null;
      const stopLossMatch = clean.match(/(?:停損|止損|跌破)\s*(\d+(?:\.\d+)?)/);
      const takeProfitMatch = clean.match(/(?:停利|止盈|目標價|漲到)\s*(\d+(?:\.\d+)?)/);
      const priceMatch = clean.match(/(?:成交價|均價|價格)\s*(\d+(?:\.\d+)?)/);
      if (orderSummaryCache && orderSummaryCache.stats) {
        const orderStats = orderSummaryCache.stats;
        if (Number(orderStats.todayCount || 0) > 0 || Number(orderStats.overdueCount || 0) > 0) {
          lines.push("訂單：今天 " + Number(orderStats.todayCount || 0) + " 筆，逾期 " + Number(orderStats.overdueCount || 0) + " 筆");
        }
        if (Number(orderStats.unpaidAmount || 0) > 0) {
          lines.push("未收款：NT$ " + orderMoney(orderStats.unpaidAmount));
        }
      }
      const qtyMatch = clean.match(/(?:部位|數量)?\s*(\d+(?:\.\d+)?)\s*(張|股|顆|枚|單位|手)/);
      return {
        symbol: symbolMatch[0].toUpperCase(),
        stopLoss: stopLossMatch ? Number(stopLossMatch[1]) : null,
        takeProfit: takeProfitMatch ? Number(takeProfitMatch[1]) : null,
        price: priceMatch ? Number(priceMatch[1]) : null,
        quantity: qtyMatch ? Number(qtyMatch[1]) : null,
        unit: qtyMatch ? qtyMatch[2] : "",
        reason: extractTradeReason(clean),
        note: clean,
        ts: new Date().toLocaleString("zh-TW")
      };
    }

    function refreshTradeConfirmation(position) {
      const discipline = evaluateTradeDiscipline(position);
      position.discipline = discipline;
      position.pendingConfirmation = Number(position.quantity || 0) > 0 && discipline.score < 85;
      if (position.pendingConfirmation) {
        position.status = "待確認";
      } else if (Number(position.quantity || 0) > 0 && position.status !== "已出場") {
        position.status = "持有中";
      }
      return discipline;
    }

    function upsertInvestmentConfirmation(text) {
      const confirmation = extractInvestmentConfirmation(text);
      if (!confirmation) return false;
      const position = investmentPositions.find(item => item.symbol === confirmation.symbol && item.status !== "已出場");
      if (!position) return false;
      if (confirmation.stopLoss) position.stopLoss = confirmation.stopLoss;
      if (confirmation.takeProfit) position.takeProfit = confirmation.takeProfit;
      if (confirmation.price) position.avgPrice = confirmation.price;
      if (confirmation.quantity && !Number(position.quantity || 0)) position.quantity = confirmation.quantity;
      if (confirmation.unit && !position.unit) position.unit = confirmation.unit;
      if (confirmation.reason) position.thesis = confirmation.reason;
      position.notes = position.notes || [];
      position.notes.unshift(confirmation.ts + " 補齊交易計畫：" + confirmation.note);
      position.notes = position.notes.slice(0, 8);
      position.updatedAt = new Date().toISOString();
      refreshTradeConfirmation(position);
      persistInvestmentPositions();
      logEvent("投資-確認", confirmation.symbol + " 補齊交易計畫");
      return true;
    }

    function extractInvestmentWatch(text) {
      if (!isInvestmentText(text)) return null;
      const clean = String(text || "").replace(/，/g, ",");
      if (!/(觀察|追蹤|潛力|等待|等到|題材|加入觀察|放入口袋|候選)/.test(clean)) return null;
      if (/(今天買|買了|成交|進場|出場|賣了|出清)/.test(clean)) return null;
      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      if (!symbolMatch) return null;
      const symbol = symbolMatch[0].toUpperCase();
      const waitMatch = clean.match(/(?:等待價|等到|回到|低於|跌到|觀察價|甜甜價)\s*(\d+(?:\.\d+)?)/);
      return {
        symbol,
        watchPrice: waitMatch ? Number(waitMatch[1]) : null,
        thesis: clean,
        score: scoreInvestmentPotential(clean),
        tags: extractPotentialTags(clean),
        risks: extractPotentialRisks(clean),
        ts: new Date().toLocaleString("zh-TW")
      };
    }

    function scoreInvestmentPotential(text) {
      let score = 50;
      const positives = ["AI", "人工智慧", "半導體", "雲端", "資料中心", "電動車", "高股息", "現金流", "成長", "轉強", "突破", "訂單", "殖利率"];
      const negatives = ["戰爭", "地緣", "升息", "衰退", "虧損", "財報差", "跌破", "高估", "匯率", "裁員", "法說保守", "風險"];
      positives.forEach(word => { if (text.includes(word)) score += 6; });
      negatives.forEach(word => { if (text.includes(word)) score -= 7; });
      if (/(等待|等到|觀察價|停損|停利)/.test(text)) score += 8;
      return Math.max(5, Math.min(95, score));
    }

    function extractPotentialTags(text) {
      const tags = [];
      ["AI", "半導體", "高股息", "金融", "航運", "電動車", "雲端", "美股", "台股", "ETF", "加密貨幣"].forEach(tag => {
        if (text.includes(tag)) tags.push(tag);
      });
      return tags.slice(0, 5);
    }

    function extractPotentialRisks(text) {
      const risks = [];
      ["地緣", "戰爭", "升息", "匯率", "財報", "高估", "流動性", "法規", "跌破", "虧損"].forEach(risk => {
        if (text.includes(risk)) risks.push(risk);
      });
      return risks.slice(0, 5);
    }

    function upsertInvestmentWatch(text) {
      const watch = extractInvestmentWatch(text);
      if (!watch) return false;
      let position = investmentPositions.find(item => item.symbol === watch.symbol && item.status !== "已出場");
      if (!position) {
        position = {
          id: Date.now(),
          symbol: watch.symbol,
          market: guessInvestmentMarket(watch.symbol),
          status: "觀察中",
          quantity: 0,
          unit: "",
          avgPrice: null,
          currentPrice: null,
          lastPriceAt: null,
          stopLoss: null,
          takeProfit: null,
          watchPrice: null,
          potentialScore: null,
          potentialTags: [],
          potentialRisks: [],
          thesis: "",
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        investmentPositions.unshift(position);
      }
      position.status = position.quantity ? "持有中" : "觀察中";
      if (watch.watchPrice) position.watchPrice = watch.watchPrice;
      position.potentialScore = watch.score;
      position.potentialTags = watch.tags;
      position.potentialRisks = watch.risks;
      position.thesis = watch.thesis;
      position.notes = position.notes || [];
      position.notes.unshift(watch.ts + " 觀察：" + watch.thesis);
      position.notes = position.notes.slice(0, 8);
      position.updatedAt = new Date().toISOString();
      investmentPositions = investmentPositions.slice(0, 50);
      persistInvestmentPositions();
      logEvent("投資-觀察", watch.symbol + " 潛力分數 " + watch.score);
      return true;
    }

    function extractInvestmentPriceUpdate(text) {
      const updates = extractInvestmentPriceUpdates(text);
      return updates[0] || null;
    }

    function extractInvestmentPriceUpdates(text) {
      if (!isInvestmentText(text)) return [];
      const clean = String(text || "").replace(/，/g, ",");
      if (!/(現價|目前|最新|收盤|報價|價格|市價)/.test(clean)) return [];
      const symbolSource = "台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\\b[A-Z]{1,6}\\b|\\b\\d{4,6}\\b";
      const matcher = new RegExp("(" + symbolSource + ")\\s*(?:現價|目前|最新|收盤|報價|價格|市價)?\\s*(\\d+(?:\\.\\d+)?)", "gi");
      const updates = [];
      const seen = new Set();
      for (const match of clean.matchAll(matcher)) {
        const symbol = match[1].toUpperCase();
        const price = Number(match[2]);
        if (!symbol || !price || seen.has(symbol)) continue;
        if (/^\\d+$/.test(symbol) && Number(symbol) === price) continue;
        seen.add(symbol);
        updates.push({
          symbol,
          price,
          note: clean,
          ts: new Date().toLocaleString("zh-TW")
        });
      }
      if (updates.length) return updates;

      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      if (!symbolMatch) return [];
      const symbol = symbolMatch[0].toUpperCase();
      const numbers = Array.from(clean.matchAll(/\d+(?:\.\d+)?/g)).map(match => Number(match[0]));
      const excluded = new Set();
      if (/^\d+$/.test(symbol)) excluded.add(Number(symbol));
      const price = numbers.find(num => !excluded.has(num));
      if (!price) return [];
      return [{ symbol, price, note: clean, ts: new Date().toLocaleString("zh-TW") }];
    }

    function applyInvestmentPriceUpdate(update) {
      let position = investmentPositions.find(item => item.symbol === update.symbol && item.status !== "已出場");
      if (!position) {
        position = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          symbol: update.symbol,
          market: guessInvestmentMarket(update.symbol),
          status: "觀察中",
          quantity: 0,
          unit: "",
          avgPrice: null,
          currentPrice: null,
          lastPriceAt: null,
          watchPrice: null,
          potentialScore: null,
          potentialTags: [],
          potentialRisks: [],
          thesis: "",
          stopLoss: null,
          takeProfit: null,
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        investmentPositions.unshift(position);
      }
      position.currentPrice = update.price;
      position.lastPriceAt = new Date().toISOString();
      position.notes = position.notes || [];
      position.notes.unshift(update.ts + " 現價 " + formatMaybeNumber(update.price));
      position.notes = position.notes.slice(0, 8);
      position.updatedAt = new Date().toISOString();
      logEvent("投資-現價", update.symbol + " 現價 " + formatMaybeNumber(update.price));
      return position;
    }

    function upsertInvestmentPrice(text) {
      const updates = extractInvestmentPriceUpdates(text);
      if (!updates.length) return false;
      updates.forEach(applyInvestmentPriceUpdate);
      investmentPositions = investmentPositions.slice(0, 50);
      persistInvestmentPositions();
      return updates.length;
    }

    function loadInvestmentRiskConfig() {
      try {
        investmentRiskConfig = storage.getJSON(INVESTMENT_RISK_CONFIG_KEY, { capital: 0, maxLoss: 0, maxPositionPct: 20 });
      } catch (_) {
        investmentRiskConfig = { capital: 0, maxLoss: 0, maxPositionPct: 20 };
      }
      if (capitalInput) capitalInput.value = investmentRiskConfig.capital || "";
      if (maxLossInput) maxLossInput.value = investmentRiskConfig.maxLoss || "";
      if (maxPositionPctInput) maxPositionPctInput.value = investmentRiskConfig.maxPositionPct || 20;
      renderInvestmentRiskConfig();
    }

    function saveInvestmentRiskConfig() {
      investmentRiskConfig = {
        capital: Number(capitalInput && capitalInput.value ? capitalInput.value : 0),
        maxLoss: Number(maxLossInput && maxLossInput.value ? maxLossInput.value : 0),
        maxPositionPct: Number(maxPositionPctInput && maxPositionPctInput.value ? maxPositionPctInput.value : 20),
        updatedAt: new Date().toISOString()
      };
      try {
        storage.setJSON(INVESTMENT_RISK_CONFIG_KEY, investmentRiskConfig);
      } catch (_) {}
      renderInvestmentRiskConfig();
      renderInvestmentDashboard();
      actionStatus.textContent = "已儲存資金控管設定。";
    }

    function getPositionCost(position) {
      const qty = Number(position.quantity || 0);
      const avg = Number(position.avgPrice || 0);
      if (!qty || !avg) return null;
      return qty * avg;
    }

    function evaluateRiskLimits(position) {
      const notes = [];
      const cost = getPositionCost(position);
      const maxLoss = getMaxLossAmount(position);
      const capital = Number(investmentRiskConfig.capital || 0);
      const maxLossLimit = Number(investmentRiskConfig.maxLoss || 0);
      const maxPositionPct = Number(investmentRiskConfig.maxPositionPct || 0);
      const maxPositionValue = capital && maxPositionPct ? capital * maxPositionPct / 100 : 0;

      if (maxLossLimit && maxLoss !== null && maxLoss > maxLossLimit) {
        notes.push("單筆最大可虧損超過上限 " + formatMaybeNumber(maxLossLimit));
      }
      if (maxPositionValue && cost !== null && cost > maxPositionValue) {
        notes.push("單檔投入超過 " + maxPositionPct + "% 上限");
      }
      if (capital && cost !== null && cost > capital) {
        notes.push("投入金額超過總資金設定");
      }

      return {
        ok: notes.length === 0,
        notes,
        cost,
        maxLoss,
        positionPct: capital && cost !== null ? cost / capital * 100 : null
      };
    }

    function getPortfolioRiskSummary() {
      const active = investmentPositions.filter(position => position.status !== "已出場");
      const holdings = active.filter(position => Number(position.quantity || 0) > 0);
      const totalCost = holdings.reduce((sum, position) => sum + (getPositionCost(position) || 0), 0);
      const totalMaxLoss = holdings.reduce((sum, position) => sum + (getMaxLossAmount(position) || 0), 0);
      const overLimit = holdings.filter(position => !evaluateRiskLimits(position).ok);
      return { holdings, totalCost, totalMaxLoss, overLimit };
    }

    function renderInvestmentRiskConfig() {
      if (!investmentRiskConfigBox) return;
      const summary = getPortfolioRiskSummary();
      const capital = Number(investmentRiskConfig.capital || 0);
      const exposurePct = capital && summary.totalCost ? summary.totalCost / capital * 100 : null;
      investmentRiskConfigBox.innerHTML = [
        "<p class='today-focus-title'>資金控管</p>",
        "<p class='hint'>總投入：" + formatMaybeNumber(summary.totalCost) + (exposurePct !== null ? "（" + exposurePct.toFixed(1) + "%）" : "") + "｜最大可虧損合計：約 " + formatMaybeNumber(summary.totalMaxLoss) + "</p>",
        summary.overLimit.length ? "<p class='hint'><span class='warn'>超過設定：</span>" + summary.overLimit.map(position => position.symbol).join("、") + "</p>" : "<p class='hint'>目前沒有超過資金控管上限的持倉。</p>",
        "<p class='hint'>設定：單筆最大可虧損 " + (investmentRiskConfig.maxLoss || "未設") + "｜單檔投入上限 " + (investmentRiskConfig.maxPositionPct || 20) + "%</p>"
      ].join("");
    }

    function extractTradeReason(text) {
      const clean = String(text || "");
      const match = clean.match(/(?:理由|因為|看好|買進理由|交易理由|進場理由)[:：]?\s*([^，。,.]+)/);
      return match ? match[1].trim() : "";
    }

    function evaluateTradeDiscipline(position) {
      const checks = [
        { key: "reason", label: "買進理由", pass: Boolean(position.thesis || (position.notes || []).some(note => /(理由|因為|看好|題材)/.test(note))) },
        { key: "quantity", label: "部位大小", pass: Number(position.quantity || 0) > 0 },
        { key: "avgPrice", label: "成交/均價", pass: Number(position.avgPrice || 0) > 0 },
        { key: "stopLoss", label: "停損", pass: Number(position.stopLoss || 0) > 0 },
        { key: "takeProfit", label: "停利", pass: Number(position.takeProfit || 0) > 0 },
        { key: "maxLoss", label: "最大可虧損", pass: getMaxLossAmount(position) !== null }
      ];
      const passed = checks.filter(item => item.pass).length;
      const score = Math.round((passed / checks.length) * 100);
      const missing = checks.filter(item => !item.pass).map(item => item.label);
      return { score, passed, total: checks.length, missing };
    }

    function getMaxLossAmount(position) {
      const qty = Number(position.quantity || 0);
      const avg = Number(position.avgPrice || 0);
      const stop = Number(position.stopLoss || 0);
      if (!qty || !avg || !stop || stop >= avg) return null;
      return (avg - stop) * qty;
    }

    function getTradeDisciplineHint(position) {
      const result = evaluateTradeDiscipline(position);
      if (result.score >= 85) return "紀律完整，可以照計畫追蹤，不需要追價。";
      if (result.score >= 60) return "紀律尚可，但建議補齊：" + result.missing.join("、") + "。";
      return "交易計畫不足，先補齊：" + result.missing.join("、") + "，再考慮下一步。";
    }

    function getPositionPnl(position) {
      const avg = Number(position.avgPrice || 0);
      const price = Number(position.currentPrice || 0);
      const qty = Number(position.quantity || 0);
      if (!avg || !price || !qty) return null;
      const amount = (price - avg) * qty;
      const percent = ((price / avg) - 1) * 100;
      return { amount, percent };
    }

    function getPriceFreshness(position) {
      if (!position.currentPrice || !position.lastPriceAt) {
        return { label: "尚未更新現價", days: Infinity, isStale: true, isVeryStale: false };
      }
      const updated = new Date(position.lastPriceAt);
      if (Number.isNaN(updated.getTime())) {
        return { label: "現價時間不明", days: Infinity, isStale: true, isVeryStale: false };
      }
      const diffDays = Math.floor((Date.now() - updated.getTime()) / (24 * 60 * 60 * 1000));
      if (diffDays <= 0) return { label: "今天更新", days: 0, isStale: false, isVeryStale: false };
      if (diffDays === 1) return { label: "1 天前更新", days: 1, isStale: true, isVeryStale: false };
      if (diffDays >= 3) return { label: "超過 3 天未更新", days: diffDays, isStale: true, isVeryStale: true };
      return { label: diffDays + " 天前更新", days: diffDays, isStale: true, isVeryStale: false };
    }

    function getPositionAlert(position) {
      const price = Number(position.currentPrice || 0);
      const stopLoss = Number(position.stopLoss || 0);
      const takeProfit = Number(position.takeProfit || 0);
      if (!price) return "還沒更新現價，可以說：台積電現價 930。";
      if (stopLoss && price <= stopLoss) return "已到停損線，請先冷靜檢查紀律，不要讓 AI 自動下單。";
      if (takeProfit && price >= takeProfit) return "已到停利目標，可以檢查是否分批出場或更新計畫。";
      if (stopLoss && price <= stopLoss * 1.02) return "接近停損線，建議今天優先確認風險。";
      if (takeProfit && price >= takeProfit * 0.98) return "接近停利目標，建議先想好分批策略。";
      return "價格在計畫區間內，保持紀律追蹤。";
    }

    function guessInvestmentMarket(symbol) {
      if (/^\d{4,6}$/.test(symbol) || ["台積電", "鴻海", "聯發科"].includes(symbol)) return "台股";
      if (["BTC", "ETH", "比特幣", "以太幣"].includes(symbol)) return "加密貨幣";
      return "美股/其他";
    }

    function persistInvestmentPositions() {
      try {
        storage.setJSON(INVESTMENT_POSITIONS_KEY, investmentPositions);
      } catch (_) {}
      renderInvestmentPositions();
      renderInvestmentDashboard();
    }

    function renderInvestmentPositions() {
      if (!investmentPositionList) return;
      const active = investmentPositions.filter(position => position.status !== "已出場").slice(0, 8);
      if (!active.length) {
        investmentPositionList.innerHTML = "<p class='hint'>還沒有投資追蹤。可以說：今天買台積電 5 股 920 元，停損 880，停利 980，理由 AI 需求成長。也可以一次更新：台積電現價 930，鴻海現價 210。</p>";
        return;
      }
      investmentPositionList.innerHTML = active.map((position, index) => {
        const freshness = getPriceFreshness(position);
        const discipline = evaluateTradeDiscipline(position);
        const maxLoss = getMaxLossAmount(position);
        const riskLimit = evaluateRiskLimits(position);
        const risk = !position.stopLoss ? "<span class='warn'>尚未設定停損</span>" : "停損 " + formatMaybeNumber(position.stopLoss);
        const target = position.takeProfit ? "停利 " + formatMaybeNumber(position.takeProfit) : "尚未設定停利";
        const qty = position.quantity ? formatMaybeNumber(position.quantity) + (position.unit || "") : "觀察中";
        const avg = position.avgPrice ? "均價 " + formatMaybeNumber(position.avgPrice) : "均價未記";
        const current = position.currentPrice ? "現價 " + formatMaybeNumber(position.currentPrice) : "尚未更新現價";
        const wait = position.watchPrice ? "等待價 " + formatMaybeNumber(position.watchPrice) : "未設定等待價";
        const score = Number.isFinite(Number(position.potentialScore)) ? "潛力 " + Number(position.potentialScore) + "/100" : "潛力未評分";
        const tagText = position.potentialTags && position.potentialTags.length ? "題材：" + position.potentialTags.join("、") : "題材待補";
        const riskText = position.potentialRisks && position.potentialRisks.length ? "風險：" + position.potentialRisks.join("、") : "風險待補";
        const pnl = getPositionPnl(position);
        const pnlText = pnl ? "估算損益 " + (pnl.amount >= 0 ? "+" : "") + formatMaybeNumber(pnl.amount) + "（" + (pnl.percent >= 0 ? "+" : "") + pnl.percent.toFixed(2) + "%）" : "損益待現價與均價齊全";
        const alert = getPositionAlert(position);
        const staleClass = freshness.isVeryStale ? "<span class='warn'>價格過期</span>" : freshness.label;
        const missing = discipline.missing.length ? "缺：" + discipline.missing.join("、") : "檢查項目齊全";
        const maxLossText = maxLoss === null ? "最大可虧損待計算" : "最大可虧損約 " + formatMaybeNumber(maxLoss);
        const positionPctText = riskLimit.positionPct !== null ? "投入佔比 " + riskLimit.positionPct.toFixed(1) + "%" : "投入佔比待總資金";
        const riskLimitText = riskLimit.ok ? "資金控管 OK" : "資金控管提醒：" + riskLimit.notes.join("、");
        return "<div class='list-item'><strong>" + position.symbol + "</strong> · " + position.market + "<br>" + qty + " · " + avg + "<br>" + current + " · " + staleClass + "<br>" + pnlText + "<br>" + wait + " · " + score + "<br>紀律 " + discipline.score + "/100 · " + maxLossText + "<br>" + positionPctText + " · " + riskLimitText + "<br><span class='hint'>" + missing + "</span><br>" + tagText + "<br>" + riskText + "<br>" + risk + " · " + target + "<br><span class='hint'>" + alert + "</span><br><span class='hint'>" + getTradeDisciplineHint(position) + "</span><br><span class='hint'>狀態：" + (position.status || "觀察中") + "</span><br><button class='mini-btn' type='button' data-close-position='" + index + "'>標記已出場</button></div>";
      }).join("");
      investmentPositionList.querySelectorAll("[data-close-position]").forEach(btn => {
        btn.addEventListener("click", () => {
          const position = active[Number(btn.dataset.closePosition)];
          if (!position) return;
          position.status = "已出場";
          position.updatedAt = new Date().toISOString();
          persistInvestmentPositions();
          logEvent("投資持倉", position.symbol + " 已標記出場");
        });
      });
    }

    function formatMaybeNumber(value) {
      return Number.isFinite(Number(value)) ? Number(value).toFixed(2).replace(/\.00$/, "") : value;
    }

    function saveMarketBrief() {
      const text = marketBriefInput ? marketBriefInput.value.trim() : "";
      if (!text) {
        actionStatus.textContent = "請先輸入市場分析內容。";
        return;
      }
      marketBriefs.unshift({
        text,
        ts: new Date().toLocaleString("zh-TW"),
        source: "manual"
      });
      marketBriefs = marketBriefs.slice(0, 20);
      try {
        storage.setJSON(MARKET_BRIEFS_KEY, marketBriefs);
      } catch (_) {}
      marketBriefInput.value = "";
      logEvent("市場分析", text);
      saveLifeNote(text);
      renderMarketBriefs();
      actionStatus.textContent = "已儲存市場分析。";
    }

    function insertMarketTemplate(type) {
      if (!marketBriefInput) return;
      const dateText = new Date().toLocaleDateString("zh-TW");
      const templates = {
        morning: [
          `每日市場早報 ${dateText}`,
          "1. 前一日美股：道瓊 / 標普500 / 那斯達克 / 費半：",
          "2. 大型科技股：NVDA / AAPL / MSFT / TSLA / META：",
          "3. 利率與美元：10 年期美債殖利率 / 美元指數：",
          "4. 商品與避險：油價 / 黃金 / 比特幣：",
          "5. 地緣政治：中東 / 台海 / 關稅 / 制裁 / 選舉：",
          "6. 今日可能受影響標的：",
          "7. 操作紀律：只觀察或提醒，不因單一消息追單。"
        ],
        potential: [
          `標的潛力分析 ${dateText}`,
          "標的：",
          "1. 題材：AI / 電動車 / 半導體 / 金融 / 能源 / 其他：",
          "2. 基本面：營收、毛利、獲利、成長性：",
          "3. 技術面：趨勢、支撐、壓力、量能：",
          "4. 籌碼面：法人、融資、主力、散戶熱度：",
          "5. 估值：本益比、股價位置、同業比較：",
          "6. 風險：匯率、法規、競爭、地緣政治、景氣循環：",
          "7. 紀律：觀察價、停損、停利、單筆最大可承受虧損："
        ],
        risk: [
          `投資風險檢查 ${dateText}`,
          "1. 是否使用槓桿、融資、期貨或選擇權：",
          "2. 是否連續加碼或攤平：",
          "3. 是否沒有停損：",
          "4. 是否單一標的或單一產業太集中：",
          "5. 是否因恐懼錯過而追高：",
          "6. 若最壞情境發生，最大虧損金額：",
          "7. 結論：先觀察 / 降低部位 / 暫停操作 / 等待確認："
        ]
      };
      marketBriefInput.value = templates[type].join("\n");
      actionStatus.textContent = "已套用分析模板。";
      marketBriefInput.focus();
    }

    function renderMarketBriefs() {
      if (!marketBriefList) return;
      if (!marketBriefs.length) {
        marketBriefList.innerHTML = "<p class='hint'>目前沒有市場分析筆記。可以先手動輸入前一天美股、地緣政治、利率匯率或產業題材。</p>";
        return;
      }
      marketBriefList.innerHTML = marketBriefs.slice(0, 5).map((item, index) => (
        `<div class="list-item"><strong>市場分析</strong><br>${item.text}<br><span class="hint">${item.ts}</span><br><button class="delete-btn" type="button" data-delete-market-brief="${index}">刪除這筆</button></div>`
      )).join("");
      marketBriefList.querySelectorAll("[data-delete-market-brief]").forEach(btn => {
        btn.addEventListener("click", () => {
          captureUndoSnapshot("刪除市場分析");
          marketBriefs.splice(Number(btn.dataset.deleteMarketBrief), 1);
          try {
            storage.setJSON(MARKET_BRIEFS_KEY, marketBriefs);
          } catch (_) {}
          renderMarketBriefs();
          renderInvestmentDashboard();
        });
      });
    }

    function recordMood(mood) {
      captureUndoSnapshot(`心情：${mood}`);
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
      captureUndoSnapshot(`新增藥物：${name}`);
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

    function applyInvestmentGuardrails(text) {
      if (!isInvestmentText(text)) return false;
      const clean = text.replace(/[，。！？,.!?\s]/g, "");
      if (!/槓桿|融資|期貨|選擇權|爆倉|重壓|歐印|allin|all in|借錢|信貸|連續加碼/i.test(clean)) return false;
      const message = "我先標記為高風險投資事項。這裡只做紀律提醒，不會自動下單；請先確認最大虧損、停損條件和是否使用槓桿。";
      logEvent("投資風險", text);
      saveLifeNote(text);
      voiceText.innerHTML = `<span class="warn">高風險提醒：</span>${message}`;
      updateFloatingStatus(message);
      speak(message);
      return true;
    }

    function classifyLifeNote(text) {
      const clean = text.replace(/[，。！？,.!?\s]/g, "");
      const activeContext = detectButlerContext(text) || getProfile();
      if (activeContext === "personal") {
        if (/會議|開會|討論|簡報|議程|meeting/i.test(clean)) return "會議";
        if (/買|採買|補貨|咖啡|午餐|晚餐|文具|耗材/.test(clean)) return "採買";
        if (/付款|繳費|匯款|帳單|發票|收據|信用卡|房租/.test(clean)) return "付款";
        if (/打給|聯絡|回覆|回電|約|客戶|朋友|同事|家人/.test(clean)) return "聯絡";
        if (/文件|合約|報告|資料|表格|上傳|下載|寄信|email|mail/i.test(clean)) return "文件";
        if (/運動|吃藥|看醫生|診所|牙醫|健康|睡覺|休息/.test(clean)) return "健康";
      }
      if (activeContext === "investment") {
        if (/美股|那斯達克|NASDAQ|標普|S&P|道瓊|費半|NVDA|TSLA|AAPL|前一天|昨晚|昨天|美元|殖利率|利率|CPI|PCE|FOMC|非農|油價|黃金|地緣|戰爭|中東|台海|關稅|制裁/i.test(clean)) return "市場分析";
        if (/潛力|分析|題材|基本面|技術面|籌碼|財報|法說|營收|毛利|估值|本益比|成長性|護城河/.test(clean)) return "潛力分析";
        if (/觀察|加入清單|追蹤|盯|看看|到.*提醒|跌到|漲到|突破|跌破/.test(clean)) return "觀察";
        if (/買|賣|加碼|減碼|進場|出場|成交|入場|出清/.test(clean)) return "交易";
        if (/提醒|到價|價格|目標價/.test(clean)) return "價格提醒";
        if (/停損|停利|止損|止盈|風報比|風險報酬/.test(clean)) return "停損停利";
        if (/衝動|害怕|貪心|追高|殺低|紀律|理由|日記|復盤/.test(clean)) return "投資日記";
        if (/風險|槓桿|融資|期貨|選擇權|爆倉|重壓| allin |all in/i.test(clean)) return "風險";
      }
      if (activeContext === "student") {
        if (/作業|習題|功課/.test(clean)) return "作業";
        if (/考試|小考|段考|期中|期末/.test(clean)) return "考試";
        if (/報告|簡報|專題/.test(clean)) return "報告";
        if (/壓力|累|讀不下去|焦慮/.test(clean)) return "壓力";
      }
      if (activeContext === "teacher") {
        if (/批改|作業|作文|考卷/.test(clean)) return "批改";
        if (/會議|開會|研習/.test(clean)) return "會議";
        if (/家長|聯絡/.test(clean)) return "家長聯絡";
        if (/學生|情緒|缺席/.test(clean)) return "學生關懷";
      }
      if (activeContext === "home") {
        if (/買|菜市場|超市|補貨/.test(clean)) return "採買";
        if (/倒垃圾|洗衣|掃地|整理|煮飯/.test(clean)) return "家務";
        if (/接|送|孩子|學校/.test(clean)) return "接送";
      }
      if (activeContext === "business") {
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
      if (/會議|開會|討論|簡報|議程/i.test(text)) return "meeting";
      if (/付款|繳費|匯款|帳單|發票|收據|信用卡|房租/.test(text)) return "payment";
      if (/打給|聯絡|回覆|回電|約|客戶|朋友|同事|家人/.test(text)) return "contact";
      if (/文件|合約|報告|資料|表格|上傳|下載|寄信|email|mail/i.test(text)) return "document";
      const investmentSymbol = text.match(/\b[A-Z]{1,6}\b|\b\d{4,6}\b|台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣/i);
      if (/美股|那斯達克|NASDAQ|標普|S&P|道瓊|費半/i.test(text) && category === "市場分析") return "market-us";
      if (/地緣|戰爭|中東|台海|關稅|制裁/i.test(text) && category === "市場分析") return "market-geopolitics";
      if (/美元|殖利率|利率|CPI|PCE|FOMC|非農|油價|黃金/i.test(text) && category === "市場分析") return "market-macro";
      if (investmentSymbol && ["觀察", "交易", "價格提醒", "停損停利", "市場分析", "潛力分析", "投資日記", "風險"].includes(category)) {
        return `invest-${investmentSymbol[0].toUpperCase()}`;
      }
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
      if (card.category === "會議") return `我整理到「${card.title}」${itemPart}。等等可以再補時間、地點和要準備的資料。`;
      if (card.category === "付款") return `我記到「${card.title}」${itemPart}。我會提醒你確認金額、期限和收據。`;
      if (card.category === "聯絡") return `我放到「${card.title}」${itemPart}。你可以再補要聯絡的人和要說的事。`;
      if (card.category === "文件") return `我整理到「${card.title}」${itemPart}。需要準備、寄出或上傳都可以再補充。`;
      if (card.category === "觀察") return `我加入「${card.title}」${itemPart}。這是觀察提醒，不會自動下單。`;
      if (card.category === "交易") return `我記到「${card.title}」${itemPart}。建議補上理由、停損、停利和可承受虧損。`;
      if (card.category === "價格提醒") return `我設定成「${card.title}」${itemPart}。到條件時只提醒你檢查，不會替你交易。`;
      if (card.category === "停損停利") return `我整理到「${card.title}」${itemPart}。這會用來提醒你遵守原本紀律。`;
      if (card.category === "市場分析") return `我整理到「${card.title}」${itemPart}。這會作為投資背景檢查，不直接等於買賣訊號。`;
      if (card.category === "潛力分析") return `我加入「${card.title}」${itemPart}。後續會從題材、基本面、技術面、風險與估值角度整理。`;
      if (card.category === "投資日記") return `我寫進「${card.title}」${itemPart}。之後週報會幫你回顧情緒與決策。`;
      if (card.category === "風險") return `我標記為「${card.title}」${itemPart}。請先確認部位、槓桿和最大可承受損失。`;
      return `我幫你整理到「${card.title}」${itemPart}，這件事我會記著。`;
    }

    function buildTaskReminderMessage(card) {
      const items = card.items.length ? `，項目有：${card.items.join("、")}` : "";
      const profile = profiles[getProfile()] || profiles.personal;
      const prefix = profile.reminderName || "提醒你";
      const lead = prefix ? `${prefix}，提醒你` : "提醒你";
      if (card.category === "醫療") return `${lead}「${card.title}」${items}。出門記得帶健保卡、藥袋和水。`;
      if (card.topicKey === "market") return `${lead}「菜市場買菜」${items}。記得帶購物袋。`;
      if (card.category === "出貨") return `${lead}「${card.title}」${items}。包裹、地址和電話先確認一下。`;
      if (card.category === "訂餐") return `${lead}「${card.title}」${items}。可以先確認要幾份。`;
      if (card.category === "繳費" || card.category === "付款") return `${lead}「${card.title}」${items}。金額、期限和收據先確認。`;
      if (card.category === "會議") return `${lead}「${card.title}」${items}。時間、地點和資料先確認。`;
      if (card.category === "聯絡") return `${lead}「${card.title}」${items}。可以先整理要說的重點。`;
      if (card.category === "文件") return `${lead}「${card.title}」${items}。檔案、附件和期限先確認。`;
      if (card.category === "觀察") return `${lead}「${card.title}」${items}。先看條件是否真的成立，不要因為提醒就直接追單。`;
      if (card.category === "交易") return `${lead}「${card.title}」${items}。下單前確認理由、停損、停利與部位大小。`;
      if (card.category === "價格提醒") return `${lead}「${card.title}」${items}。這只是到價提醒，不代表買賣建議。`;
      if (card.category === "停損停利") return `${lead}「${card.title}」${items}。請按原策略檢查，不要臨時放寬風險。`;
      if (card.category === "市場分析") return `${lead}「${card.title}」${items}。先確認消息來源與市場反應，不要只因單一事件下單。`;
      if (card.category === "潛力分析") return `${lead}「${card.title}」${items}。請同時檢查利多、利空、估值與停損條件。`;
      if (card.category === "投資日記") return `${lead}「${card.title}」${items}。記得回顧當時理由是否仍成立。`;
      if (card.category === "風險") return `${lead}「${card.title}」${items}。若有槓桿、重壓或連續加碼，先暫停確認。`;
      return `${lead}「${card.title}」${items}。`;
    }

    function reminderWasDelivered(card) {
      return Boolean(card.lastReminderFor && card.lastReminderFor === card.reminderAt);
    }

    function markReminderDelivered(card) {
      card.lastReminderFor = card.reminderAt;
      card.lastReminderAt = new Date().toISOString();
      try { storage.setJSON(TASK_KEY, taskCards); } catch (_) {}
    }

    function deliverTaskReminder(card, recovered = false) {
      if (!card || card.status !== "進行中" || reminderWasDelivered(card)) return;
      markReminderDelivered(card);
      const baseMessage = buildTaskReminderMessage(card);
      const message = recovered ? `你剛剛可能錯過提醒。${baseMessage}` : baseMessage;
      logEvent(recovered ? "補發提醒" : "任務提醒", message);
      actionStatus.textContent = message;
      lifeNoteStatus.textContent = message;
      updateFloatingStatus(message);
      speak(message);
      showLocalNotification(recovered ? "管家補發提醒" : "管家提醒", message);
      startFollowupWatch(card.title);
    }

    function recoverMissedTaskReminders() {
      if (reminderRecoveryTimer) clearTimeout(reminderRecoveryTimer);
      const now = Date.now();
      const oldest = now - 7 * 24 * 60 * 60 * 1000;
      const missed = taskCards.filter(card => {
        const dueAt = card.reminderAt ? new Date(card.reminderAt).getTime() : 0;
        return card.status === "進行中" && dueAt >= oldest && dueAt <= now && !reminderWasDelivered(card);
      });
      if (!missed.length) return;
      reminderRecoveryTimer = setTimeout(() => {
        const pending = missed.filter(card => card.status === "進行中" && !reminderWasDelivered(card));
        if (!pending.length) return;
        if (pending.length === 1) {
          deliverTaskReminder(pending[0], true);
          return;
        }
        pending.forEach(markReminderDelivered);
        const titles = pending.slice(0, 3).map(card => card.title).join("、");
        const message = `你有 ${pending.length} 件提醒可能錯過：${titles}${pending.length > 3 ? "等" : ""}。我已幫你放到今天最重要。`;
        logEvent("補發提醒", message);
        actionStatus.textContent = message;
        lifeNoteStatus.textContent = message;
        updateFloatingStatus(message);
        speak(message);
        showLocalNotification("管家補發提醒", message);
      }, 500);
    }

    function scheduleTaskReminder(card) {
      if (!card.reminderAt || card.status !== "進行中" || reminderWasDelivered(card)) return;
      if (taskReminderTimers[card.id]) clearTimeout(taskReminderTimers[card.id]);
      const delay = new Date(card.reminderAt).getTime() - Date.now();
      if (delay <= 0) return;
      const maxDelay = 24 * 60 * 60 * 1000;
      taskReminderTimers[card.id] = setTimeout(() => {
        if (delay > maxDelay) {
          scheduleTaskReminder(card);
          return;
        }
        deliverTaskReminder(card);
      }, Math.min(delay, maxDelay));
    }

    function scheduleAllTaskReminders() {
      Object.values(taskReminderTimers).forEach(timer => clearTimeout(timer));
      taskReminderTimers = {};
      taskCards.forEach(scheduleTaskReminder);
      recoverMissedTaskReminders();
    }

    function refreshReminderReliability() {
      if (document.visibilityState && document.visibilityState !== "visible") return;
      scheduleAllTaskReminders();
      renderSystemStatus();
      renderTodayFocus();
    }

    function makeTaskTitle(category, text) {
      if (category === "購物" && /菜市場|市場|買菜/.test(text)) return "菜市場買菜";
      if (category === "醫療" && /拿藥|領藥|診所|藥局/.test(text)) return "診所拿藥";
      if (category === "醫療") return "醫療事項";
      if (category === "訂餐") return "訂餐";
      if (category === "出貨") return "出貨";
      if (category === "繳費") return "繳費";
      if (category === "會議") return "會議安排";
      if (category === "採買") return "採買清單";
      if (category === "付款") return "付款與帳單";
      if (category === "聯絡") return "聯絡事項";
      if (category === "文件") return "文件處理";
      if (category === "健康") return "健康事項";
      if (category === "觀察") return "投資觀察清單";
      if (category === "交易") return "交易紀錄";
      if (category === "價格提醒") return "到價提醒";
      if (category === "停損停利") return "停損停利紀律";
      if (category === "市場分析") return "市場分析";
      if (category === "潛力分析") return "潛力分析";
      if (category === "投資日記") return "投資日記";
      if (category === "風險") return "投資風險檢查";
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
      renderInvestmentDashboard();
      scheduleAllTaskReminders();
      scheduleInvestmentReminders();
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

    async function saveLifeNote(textFromVoice) {
      const text = (textFromVoice || lifeNoteInput.value).trim();
      if (!text) {
        lifeNoteStatus.textContent = "請先輸入想記下來的事情。";
        return;
      }
      if (handleUndoCommand(text)) {
        lifeNoteInput.value = "";
        return;
      }
      if (handlePendingButlerAnswer(text)) {
        lifeNoteInput.value = "";
        return;
      }
      if (await handleButlerBriefQuery(text)) {
        lifeNoteInput.value = "";
        return;
      }
      if (await handleOrderSummaryQuery(text)) {
        lifeNoteInput.value = "";
        return;
      }
      const detectedContext = detectButlerContext(text);
      if (isHealthMeasurementText(text) && handleHealthCapture(text)) {
        lifeNoteInput.value = "";
        updateFloatingStatus("管家已自動整理到健康紀錄");
        return;
      }
      captureUndoSnapshot(text);
      const priceUpdated = upsertInvestmentPrice(text);
      const tracked = upsertInvestmentPosition(text);
      const confirmed = !tracked && !priceUpdated ? upsertInvestmentConfirmation(text) : false;
      const watched = !tracked && !priceUpdated && !confirmed ? upsertInvestmentWatch(text) : false;
      const strategized = !tracked && !priceUpdated && !confirmed ? upsertInvestmentStrategy(text) : false;
      const journaled = upsertInvestmentJournal(text);
      upsertTaskCard(text);
      if (priceUpdated) {
        lifeNoteStatus.textContent = "已更新 " + priceUpdated + " 檔現價，並重新檢查停損停利、價格新鮮度與估算損益。";
      } else if (tracked) {
        lifeNoteStatus.textContent = "已加入投資持倉追蹤，之後可以補一句：台積電現價 930。";
      } else if (watched) {
        lifeNoteStatus.textContent = "已加入觀察清單，並整理潛力分數、題材與風險。";
      }
      if (detectedContext && detectedContext !== getProfile()) {
        const autoRouteText = "管家自動判斷為「" + (butlerContextLabels[detectedContext] || "相關事項") + "」";
        lifeNoteStatus.textContent = (lifeNoteStatus.textContent ? lifeNoteStatus.textContent + "｜" : "") + autoRouteText;
        updateFloatingStatus(autoRouteText);
      }
      askButlerFollowup(text, detectedContext || getProfile());
      lifeNoteInput.value = "";
    }

    function completeTaskCard(index) {
      const card = taskCards[index];
      if (!card) return;
      captureUndoSnapshot(`完成：${card.title}`);
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
        btn.addEventListener("click", async () => {
          const card = taskCards[Number(btn.dataset.testRemindTask)];
          if (!card) return;
          captureUndoSnapshot(`設定測試提醒：${card.title}`);
          const notificationReady = await requestLocalNotificationPermission();
          card.reminderAt = new Date(Date.now() + 10 * 1000).toISOString();
          card.lastReminderFor = "";
          card.lastReminderAt = "";
          card.updatedAt = new Date().toISOString();
          persistTaskCards();
          const reply = `好，10 秒後測試提醒「${card.title}」。${notificationReady ? "也會顯示系統通知。" : "請先保持管家頁面開啟。"}`;
          lifeNoteStatus.textContent = reply;
          updateFloatingStatus(reply);
          speak(reply);
        });
      });

      document.querySelectorAll("[data-remind-task]").forEach(btn => {
        btn.addEventListener("click", async () => {
          const card = taskCards[Number(btn.dataset.remindTask)];
          if (!card) return;
          captureUndoSnapshot(`設定提醒：${card.title}`);
          const notificationReady = await requestLocalNotificationPermission();
          card.reminderAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
          card.lastReminderFor = "";
          card.lastReminderAt = "";
          card.updatedAt = new Date().toISOString();
          persistTaskCards();
          const reply = `好，我等一下再提醒你「${card.title}」。${notificationReady ? "也會顯示系統通知。" : "請先保持管家頁面開啟。"}`;
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
        const profile = profiles[getProfile()] || profiles.personal;
        const prefix = profile.reminderName ? `${profile.reminderName}，` : "";
        speak(`${prefix}${title}還沒收到回覆，完成後直接說好了就行。`);
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
      captureUndoSnapshot("健康紀錄");
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
        const reply = getProfile() === "elder"
          ? "好，阿嬤你直接跟我說數字就好，例如血壓 128/75，血糖 110。"
          : "好，你直接跟我說數字就好，例如血壓 128/75，血糖 110。";
        voiceText.textContent = reply;
        speak(reply);
        startFollowupWatch("健康數字回報");
        return true;
      }

      return false;
    }

    async function parseVoice(text) {
      const clean = text.replace(/[，。！？,.!?\s]/g, "");
      if (applyKeywordRules(text)) return;
      if (applyInvestmentGuardrails(text)) return;
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
      await saveLifeNote(text);
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

      recognition.onresult = async (e) => {
        clearTimeout(recognitionTimeout);
        const text = e.results[0][0].transcript || "";
        await parseVoice(text);
      };
      recognition.onerror = () => {
        clearTimeout(recognitionTimeout);
        fallbackToText("麥克風未授權或語音失敗");
      };
      recognition.onend = () => {
        clearTimeout(recognitionTimeout);
        voiceBtn.classList.remove("listening");
        voiceBtn.textContent = "跟管家說";
        voiceMode = "idle";
      };
      voiceMode = "listening";
      hideVoiceFallback();
      try {
        recognition.start();
      } catch (_) {
        voiceMode = "idle";
        voiceBtn.classList.remove("listening");
        voiceBtn.textContent = "跟管家說";
        fallbackToText("麥克風目前無法啟動");
        return;
      }
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

    function showVoiceFallback(reason, initialText = "") {
      if (!voiceFallbackBox || !voiceFallbackInput) return;
      voiceText.textContent = `${reason}，可以直接打字給管家。`;
      voiceFallbackBox.classList.remove("hidden");
      voiceFallbackInput.value = initialText;
      voiceFallbackBox.scrollIntoView({ behavior: "smooth", block: "center" });
      voiceFallbackInput.focus();
    }

    function hideVoiceFallback() {
      if (!voiceFallbackBox) return;
      voiceFallbackBox.classList.add("hidden");
    }

    async function submitVoiceFallback() {
      const text = voiceFallbackInput ? voiceFallbackInput.value.trim() : "";
      if (!text) {
        voiceText.textContent = "請先說或輸入一件事情。";
        if (voiceFallbackInput) voiceFallbackInput.focus();
        return;
      }
      hideVoiceFallback();
      if (voiceFallbackInput) voiceFallbackInput.value = "";
      await parseVoice(text);
    }

    function fallbackToText(reason) {
      showVoiceFallback(reason);
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
      summary.innerHTML = logs.slice(0, 8).map((item, index) => (
        `<div class="list-item"><strong>${item.kind}</strong><br>${item.detail}<br><span class="hint">${item.ts}</span><br><button class="delete-btn" type="button" data-delete-log="${index}">刪除這筆</button></div>`
      )).join("");

      summary.querySelectorAll("[data-delete-log]").forEach(btn => {
        btn.addEventListener("click", () => deleteLogEntry(Number(btn.dataset.deleteLog)));
      });
    }

    function deleteLogEntry(index) {
      if (!Number.isInteger(index) || index < 0 || index >= logs.length) return;
      captureUndoSnapshot("刪除紀錄");
      const removed = logs.splice(index, 1)[0];
      storage.setJSON(STORE_KEY, logs);
      renderSummary();
      renderSystemStatus();
      renderTodayFocus();
      actionStatus.textContent = `已刪除：${removed.kind}`;
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
        getProfile() === "elder" ? "阿嬤近 7 筆健康摘要" : "近 7 筆健康摘要",
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
      if (getProfile() === "investment") {
        generateInvestmentReport();
        if (weeklyReportText && investmentReportText) weeklyReportText.value = investmentReportText.value;
        return;
      }
      const latest = logs.slice(0, 20);
      const healthCount = latest.filter(x => x.kind === "健康").length;
      const alertCount = latest.filter(x => x.kind === "緊急" || x.kind === "升級通知").length;
      const medicineCount = latest.filter(x => String(x.detail).includes("吃藥")).length;
      const measureCount = latest.filter(x => String(x.detail).includes("量")).length;
      const lines = [
        getProfile() === "elder" ? "乖孫管家家人週報" : "智能管家週報",
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
      if (getProfile() === "investment" && !weeklyReportText.value.trim() && investmentReportText.value.trim()) {
        weeklyReportText.value = investmentReportText.value;
      }
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

    const investmentReminderPlan = [
      { key: "morning", time: "08:30", title: "今日投資雷達", message: "早安，先看今日投資雷達：持倉、觀察清單、停損停利和市場風險都整理一下。" },
      { key: "close", time: "14:10", title: "收盤現價更新", message: "收盤後可以補一句：台積電現價 930。更新後我會重新檢查停損停利。" },
      { key: "journal", time: "21:30", title: "投資日記整理", message: "晚上花一分鐘記錄今天為什麼買、為什麼沒買、明天先看哪一檔。" }
    ];

    function loadInvestmentReminderConfig() {
      try {
        investmentReminderConfig = storage.getJSON(INVESTMENT_REMINDERS_KEY, { enabled: false });
      } catch (_) {
        investmentReminderConfig = { enabled: false };
      }
      renderInvestmentReminderStatus();
    }

    function saveInvestmentReminderConfig() {
      try {
        storage.setJSON(INVESTMENT_REMINDERS_KEY, investmentReminderConfig);
      } catch (_) {}
      renderInvestmentReminderStatus();
    }

    function renderInvestmentReminderStatus() {
      if (!investmentReminderStatus) return;
      const statusText = investmentReminderConfig.enabled ? "已開啟" : "未開啟";
      const next = investmentReminderConfig.enabled ? getNextInvestmentReminder() : null;
      investmentReminderStatus.innerHTML = [
        "<p class='today-focus-title'>投資提醒排程</p>",
        "<p class='hint'>狀態：" + statusText + "</p>",
        next ? "<p class='hint'>下一個提醒：" + next.time + "｜" + next.title + "</p>" : "<p class='hint'>開啟後會提醒：08:30 今日雷達、14:10 更新現價、21:30 投資日記。</p>",
        "<p class='hint'>提醒只協助整理紀律，不提供買賣指令，也不自動下單。</p>"
      ].join("");
    }

    function getNextInvestmentReminder() {
      const now = new Date();
      return investmentReminderPlan
        .map(item => ({ ...item, at: getNextDailyTime(item.time, now) }))
        .sort((a, b) => a.at - b.at)[0];
    }

    function getNextDailyTime(hhmm, now = new Date()) {
      const [hour, minute] = hhmm.split(":").map(Number);
      const target = new Date(now);
      target.setHours(hour, minute, 0, 0);
      if (target <= now) target.setDate(target.getDate() + 1);
      return target;
    }

    async function requestLocalNotificationPermission() {
      if (!("Notification" in window)) return false;
      if (Notification.permission === "granted") return true;
      if (Notification.permission === "denied") return false;
      try {
        const result = await Notification.requestPermission();
        return result === "granted";
      } catch (_) {
        return false;
      }
    }

    function showLocalNotification(title, body) {
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      try {
        if (navigator.serviceWorker && navigator.serviceWorker.ready) {
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, {
              body,
              icon: "./icons/icon-192.png",
              badge: "./icons/icon-192.png",
              tag: `butler-${title}-${String(body).slice(0, 24)}`,
              renotify: false,
              data: { url: "./app.html" }
            });
          }).catch(() => new Notification(title, { body }));
        } else {
          new Notification(title, { body });
        }
      } catch (_) {}
    }

    function fireInvestmentReminder(item, isTest = false) {
      const prefix = isTest ? "測試提醒：" : "投資提醒：";
      const message = prefix + item.message;
      reminder.textContent = item.title + "｜" + item.message;
      actionStatus.textContent = message;
      updateFloatingStatus(message);
      speak(message);
      logEvent("投資提醒", item.title + "｜" + item.message);
      showLocalNotification(item.title, item.message);
      if (item.key === "morning") generateInvestmentReport();
    }

    function scheduleInvestmentReminders() {
      investmentReminderTimers.forEach(timer => clearTimeout(timer));
      investmentReminderTimers = [];
      if (!investmentReminderConfig.enabled) {
        renderInvestmentReminderStatus();
        return;
      }
      const now = new Date();
      investmentReminderPlan.forEach(item => {
        const target = getNextDailyTime(item.time, now);
        const delay = target.getTime() - now.getTime();
        const timer = setTimeout(() => {
          fireInvestmentReminder(item);
          scheduleInvestmentReminders();
        }, delay);
        investmentReminderTimers.push(timer);
      });
      renderInvestmentReminderStatus();
    }

    async function enableInvestmentReminders() {
      await requestLocalNotificationPermission();
      investmentReminderConfig = {
        enabled: true,
        enabledAt: new Date().toISOString(),
        plan: investmentReminderPlan.map(item => ({ key: item.key, time: item.time, title: item.title }))
      };
      saveInvestmentReminderConfig();
      scheduleInvestmentReminders();
      actionStatus.textContent = "已開啟投資提醒：早上雷達、收盤現價、晚上日記。";
    }

    function disableInvestmentReminders() {
      investmentReminderConfig = { enabled: false, disabledAt: new Date().toISOString() };
      saveInvestmentReminderConfig();
      scheduleInvestmentReminders();
      actionStatus.textContent = "已關閉投資提醒。";
    }

    async function testInvestmentReminder() {
      await requestLocalNotificationPermission();
      const item = investmentReminderPlan[0];
      setTimeout(() => fireInvestmentReminder(item, true), 10 * 1000);
      actionStatus.textContent = "已安排 10 秒後測試投資提醒。";
    }

    const investmentStrategyTemplates = {
      "回檔買進": {
        label: "回檔買進",
        description: "等價格回到計畫區，不追高，確認停損與等待價。",
        requires: ["等待價", "停損", "停利", "買進理由"]
      },
      "突破買進": {
        label: "突破買進",
        description: "突破關鍵價後才進場，避免假突破，必須設定失敗出場點。",
        requires: ["突破價", "停損", "停利", "成交量或理由"]
      },
      "高股息長期持有": {
        label: "高股息長期持有",
        description: "重視現金流與長期持有，不因短線波動追進追出。",
        requires: ["持有理由", "資金比例", "停損或再平衡規則", "配息觀察"]
      }
    };

    function extractInvestmentStrategy(text) {
      if (!isInvestmentText(text)) return null;
      const clean = String(text || "").trim();
      if (!/(策略|套用|使用|改成|模式)/.test(clean)) return null;
      const strategyName = Object.keys(investmentStrategyTemplates).find(name => clean.includes(name));
      if (!strategyName) return null;
      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      if (!symbolMatch) return null;
      return {
        symbol: symbolMatch[0].toUpperCase(),
        strategyName,
        note: clean,
        ts: new Date().toLocaleString("zh-TW")
      };
    }

    function getStrategyGaps(position) {
      const template = investmentStrategyTemplates[position.strategyName];
      if (!template) return [];
      const gaps = [];
      template.requires.forEach(item => {
        if (item.includes("等待") && !position.watchPrice) gaps.push(item);
        else if (item.includes("突破") && !position.breakoutPrice) gaps.push(item);
        else if (item.includes("停損") && !position.stopLoss) gaps.push(item);
        else if (item.includes("停利") && !position.takeProfit) gaps.push(item);
        else if ((item.includes("理由") || item.includes("持有")) && !position.thesis) gaps.push(item);
        else if (item.includes("資金") && !Number(position.quantity || 0)) gaps.push(item);
        else if (item.includes("配息") && !(position.notes || []).some(note => /配息|殖利率|股息/.test(note))) gaps.push(item);
        else if (item.includes("成交量") && !(position.notes || []).some(note => /量|成交量|突破/.test(note))) gaps.push(item);
      });
      return [...new Set(gaps)];
    }

    function upsertInvestmentStrategy(text) {
      const strategy = extractInvestmentStrategy(text);
      if (!strategy) return false;
      let position = investmentPositions.find(item => item.symbol === strategy.symbol && item.status !== "已出場");
      if (!position) {
        position = {
          id: Date.now(),
          symbol: strategy.symbol,
          market: guessInvestmentMarket(strategy.symbol),
          status: "觀察中",
          quantity: 0,
          unit: "",
          avgPrice: null,
          currentPrice: null,
          lastPriceAt: null,
          watchPrice: null,
          potentialScore: null,
          potentialTags: [],
          potentialRisks: [],
          thesis: "",
          stopLoss: null,
          takeProfit: null,
          notes: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        investmentPositions.unshift(position);
      }
      position.strategyName = strategy.strategyName;
      position.strategyUpdatedAt = new Date().toISOString();
      position.notes = position.notes || [];
      position.notes.unshift(strategy.ts + " 策略：" + strategy.strategyName + "｜" + strategy.note);
      position.notes = position.notes.slice(0, 8);
      position.updatedAt = new Date().toISOString();
      persistInvestmentPositions();
      renderInvestmentStrategies();
      logEvent("投資策略", strategy.symbol + "｜" + strategy.strategyName);
      return true;
    }

    function renderInvestmentStrategies() {
      if (!investmentStrategyBox) return;
      const activeStrategies = investmentPositions
        .filter(position => position.status !== "已出場" && position.strategyName)
        .slice(0, 5);
      investmentStrategyBox.innerHTML = [
        "<p class='today-focus-title'>策略模板</p>",
        "<p class='hint'>內建：" + Object.keys(investmentStrategyTemplates).join("｜") + "</p>",
        ...(activeStrategies.length ? activeStrategies.map(position => {
          const gaps = getStrategyGaps(position);
          return "<p class='hint'>" + position.symbol + "｜" + position.strategyName + (gaps.length ? "｜缺：" + gaps.join("、") : "｜策略條件齊全") + "</p>";
        }) : ["<p class='hint'>可以輸入：台積電套用回檔買進策略。</p>"])
      ].join("");
    }

    function extractInvestmentJournal(text) {
      if (!isInvestmentText(text)) return null;
      const clean = String(text || "").trim();
      if (!clean) return null;
      const emotionMap = [
        { key: "FOMO", words: ["FOMO", "怕錯過", "怕噴", "追不上"] },
        { key: "追高", words: ["追高", "衝動", "忍不住", "看到漲"] },
        { key: "焦慮", words: ["焦慮", "緊張", "害怕", "睡不著", "怕跌"] },
        { key: "貪心", words: ["貪心", "想賺快", "梭哈", "重壓"] },
        { key: "後悔", words: ["後悔", "早知道", "賣太早", "買太晚"] },
        { key: "冷靜", words: ["冷靜", "照計畫", "紀律", "等回檔", "不追"] }
      ];
      const emotions = emotionMap.filter(item => item.words.some(word => clean.includes(word))).map(item => item.key);
      const isJournal = /(日記|心得|心情|檢討|復盤|今天沒買|今天買|賣了|買了|觀察|交易)/.test(clean) || emotions.length > 0;
      if (!isJournal) return null;
      const symbolMatch = clean.match(/台積電|鴻海|聯發科|0050|00878|BTC|ETH|比特幣|以太幣|\b[A-Z]{1,6}\b|\b\d{4,6}\b/i);
      return {
        id: Date.now(),
        symbol: symbolMatch ? symbolMatch[0].toUpperCase() : "整體",
        text: clean,
        emotions: emotions.length ? emotions : ["未標記"],
        riskFlag: emotions.some(item => ["FOMO", "追高", "焦慮", "貪心"].includes(item)),
        ts: new Date().toLocaleString("zh-TW"),
        createdAt: new Date().toISOString()
      };
    }

    function upsertInvestmentJournal(text) {
      const entry = extractInvestmentJournal(text);
      if (!entry) return false;
      investmentJournal.unshift(entry);
      investmentJournal = investmentJournal.slice(0, 80);
      try {
        storage.setJSON(INVESTMENT_JOURNAL_KEY, investmentJournal);
      } catch (_) {}
      const position = investmentPositions.find(item => item.symbol === entry.symbol && item.status !== "已出場");
      if (position) {
        position.lastEmotion = entry.emotions.join("、");
        position.emotionRisk = entry.riskFlag;
        position.notes = position.notes || [];
        position.notes.unshift(entry.ts + " 情緒：" + entry.emotions.join("、") + "｜" + entry.text);
        position.notes = position.notes.slice(0, 8);
        position.updatedAt = new Date().toISOString();
        persistInvestmentPositions();
      }
      renderInvestmentJournal();
      logEvent("投資日記", entry.symbol + "｜" + entry.emotions.join("、"));
      return true;
    }

    function getInvestmentEmotionSummary() {
      const recent = investmentJournal.slice(0, 20);
      const counts = recent.reduce((acc, item) => {
        (item.emotions || ["未標記"]).forEach(emotion => {
          acc[emotion] = (acc[emotion] || 0) + 1;
        });
        return acc;
      }, {});
      const risky = recent.filter(item => item.riskFlag).length;
      return { recent, counts, risky };
    }

    function renderInvestmentJournal() {
      if (!investmentJournalBox) return;
      const summary = getInvestmentEmotionSummary();
      const emotionText = Object.keys(summary.counts).length
        ? Object.entries(summary.counts).map(([label, count]) => label + " " + count).join("｜")
        : "尚未記錄交易情緒";
      investmentJournalBox.innerHTML = [
        "<p class='today-focus-title'>投資日記與情緒</p>",
        "<p class='hint'>最近情緒：" + emotionText + "</p>",
        summary.risky ? "<p class='hint'><span class='warn'>提醒：</span>最近有 " + summary.risky + " 筆可能受情緒影響，先降速檢查紀律。</p>" : "<p class='hint'>目前沒有明顯情緒交易警訊。</p>",
        ...(summary.recent.length ? summary.recent.slice(0, 3).map(item => "<p class='hint'>" + item.ts + "｜" + item.symbol + "｜" + item.emotions.join("、") + "｜" + item.text + "</p>") : ["<p class='hint'>可以輸入：今天買台積電有點 FOMO，但停損停利都有照計畫。</p>"])
      ].join("");
    }

    function getInvestmentRadarItems() {
      return investmentPositions
        .filter(position => position.status !== "已出場")
        .map(position => {
          const price = Number(position.currentPrice || 0);
          const stopLoss = Number(position.stopLoss || 0);
          const takeProfit = Number(position.takeProfit || 0);
          const watchPrice = Number(position.watchPrice || 0);
          const score = Number(position.potentialScore || 0);
          const freshness = getPriceFreshness(position);
          const riskLimit = evaluateRiskLimits(position);
          const strategyGaps = getStrategyGaps(position);
          let priority = 20;
          const reasons = [];

          if (strategyGaps.length) {
            priority = Math.max(priority, 64);
            reasons.push("策略條件待補：" + strategyGaps.join("、"));
          }

          if (position.emotionRisk) {
            priority = Math.max(priority, 72);
            reasons.push("最近情緒偏 " + (position.lastEmotion || "未標記"));
          }

          if (position.pendingConfirmation) {
            priority = Math.max(priority, 94);
            reasons.push("交易待確認，需補齊計畫");
          }

          if (!riskLimit.ok) {
            priority = Math.max(priority, 90);
            reasons.push("資金控管超標：" + riskLimit.notes.join("、"));
          }

          if (price && stopLoss && price <= stopLoss) {
            priority = Math.max(priority, 98);
            reasons.push("已碰到停損線");
          } else if (price && stopLoss && price <= stopLoss * 1.02) {
            priority = Math.max(priority, 88);
            reasons.push("接近停損線");
          }

          if (price && takeProfit && price >= takeProfit) {
            priority = Math.max(priority, 92);
            reasons.push("已達停利目標");
          } else if (price && takeProfit && price >= takeProfit * 0.98) {
            priority = Math.max(priority, 78);
            reasons.push("接近停利目標");
          }

          if (price && watchPrice && price <= watchPrice) {
            priority = Math.max(priority, 82);
            reasons.push("已到等待價");
          } else if (price && watchPrice && price <= watchPrice * 1.03) {
            priority = Math.max(priority, 68);
            reasons.push("接近等待價");
          }

          if (freshness.isVeryStale) {
            priority = Math.max(priority, 76);
            reasons.push("價格超過 3 天未更新");
          } else if (freshness.isStale) {
            priority = Math.max(priority, 58);
            reasons.push(freshness.label);
          }
          if (!price) {
            priority = Math.max(priority, 60);
            reasons.push("尚未更新現價");
          }
          if (!stopLoss && Number(position.quantity || 0)) {
            priority = Math.max(priority, 74);
            reasons.push("持倉尚未設定停損");
          }
          if (score >= 75 && !Number(position.quantity || 0)) {
            priority = Math.max(priority, 62);
            reasons.push("高潛力觀察標的");
          }

          return { position, priority, reasons };
        })
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 10);
    }

    function describeInvestmentPosition(position) {
      const freshness = getPriceFreshness(position);
      const discipline = evaluateTradeDiscipline(position);
      const maxLoss = getMaxLossAmount(position);
      const riskLimit = evaluateRiskLimits(position);
      const qty = position.quantity ? formatMaybeNumber(position.quantity) + (position.unit || "") : "觀察中";
      const avg = position.avgPrice ? formatMaybeNumber(position.avgPrice) : "未記";
      const current = position.currentPrice ? formatMaybeNumber(position.currentPrice) : "未更新";
      const watch = position.watchPrice ? formatMaybeNumber(position.watchPrice) : "未設";
      const stop = position.stopLoss ? formatMaybeNumber(position.stopLoss) : "未設";
      const take = position.takeProfit ? formatMaybeNumber(position.takeProfit) : "未設";
      const score = Number.isFinite(Number(position.potentialScore)) ? Number(position.potentialScore) + "/100" : "未評分";
      const pnl = getPositionPnl(position);
      const pnlText = pnl ? "，估算損益 " + (pnl.amount >= 0 ? "+" : "") + formatMaybeNumber(pnl.amount) + "（" + (pnl.percent >= 0 ? "+" : "") + pnl.percent.toFixed(2) + "%）" : "";
      const maxLossText = maxLoss === null ? "未能計算最大可虧損" : "最大可虧損約 " + formatMaybeNumber(maxLoss);
      const riskLimitText = riskLimit.ok ? "資金控管 OK" : "資金控管提醒：" + riskLimit.notes.join("、");
      return position.symbol + "｜" + qty + "｜均價 " + avg + "｜現價 " + current + "｜" + freshness.label + "｜等待 " + watch + "｜停損 " + stop + "｜停利 " + take + "｜潛力 " + score + "｜紀律 " + discipline.score + "/100｜" + maxLossText + "｜" + riskLimitText + pnlText;
    }

    function buildInvestmentRadarReport() {
      const cards = getInvestmentCards();
      const activeCards = cards.filter(card => card.status === "進行中");
      const activePositions = investmentPositions.filter(position => position.status !== "已出場");
      const holdings = activePositions.filter(position => Number(position.quantity || 0) > 0);
      const watchOnly = activePositions.filter(position => !Number(position.quantity || 0));
      const radarItems = getInvestmentRadarItems();
      const riskNotes = getInvestmentRiskNotes(cards);
      const recentBriefs = marketBriefs.slice(0, 5);
      const emotionSummary = getInvestmentEmotionSummary();
      const today = new Date().toLocaleString("zh-TW");

      const lines = [
        "智能管家｜投資紀律｜今日雷達",
        "產生時間：" + today,
        "提醒：這是紀律與風險整理，不是買賣建議，也不會自動下單。",
        "",
        "一、今天優先看",
        ...(radarItems.length ? radarItems.slice(0, 5).map((item, i) => (i + 1) + ". " + item.position.symbol + "：" + (item.reasons.join("、") || "例行追蹤") + "｜優先度 " + item.priority + "/100") : ["目前沒有需要優先處理的標的。"]),
        "",
        "二、持倉狀態",
        ...(holdings.length ? holdings.map((position, i) => (i + 1) + ". " + describeInvestmentPosition(position)) : ["目前沒有持倉。"]),
        "",
        "三、觀察清單",
        ...(watchOnly.length ? watchOnly.map((position, i) => (i + 1) + ". " + describeInvestmentPosition(position) + (position.thesis ? "｜理由：" + position.thesis : "")) : ["目前沒有觀察標的。"]),
        "",
        "四、市場與消息筆記",
        ...(recentBriefs.length ? recentBriefs.map((item, i) => (i + 1) + ". " + item.text + "（" + item.ts + "）") : ["尚未紀錄今日市場、美股、地緣政治或產業筆記。"]),
        "",
        "五、風險提醒",
        ...(riskNotes.length ? riskNotes.map(note => "- " + note) : ["- 目前沒有明顯風險提醒；仍請確認部位大小、停損與資金控管。"]),
        "",
        "六、今天可以補的資料",
        "- 對持倉補一句：台積電現價 930。",
        "- 對觀察標的補一句：加入觀察台積電，AI 題材，等到 900 以下再看，風險是美股轉弱。",
        "- 對風險補一句：今天美股科技股轉弱，美元走強，中東地緣風險升高。",
        "",
        "七、待辦統計",
        "投資任務：" + activeCards.length + " 件｜持倉：" + holdings.length + " 檔｜觀察：" + watchOnly.length + " 檔｜市場筆記：" + marketBriefs.length + " 則"
      ];
      return lines.join("\n");
    }

    function generateInvestmentReport() {
      if (!investmentReportText) return;
      const report = buildInvestmentRadarReport();
      investmentReportText.value = report;
      actionStatus.textContent = "已產生今日投資雷達。";
      logEvent("投資雷達", "已產生今日投資雷達");
    }

    async function copyInvestmentReport() {
      const text = investmentReportText ? investmentReportText.value.trim() : "";
      if (!text) {
        actionStatus.textContent = "請先產生投資週報。";
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        actionStatus.textContent = "已複製投資週報。";
      } catch (_) {
        investmentReportText.select();
        document.execCommand("copy");
        actionStatus.textContent = "已嘗試複製投資週報。";
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
        medicines,
        customActions,
        marketBriefs,
        investmentPositions,
        investmentJournal
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
        customActions = Array.isArray(payload.customActions) ? payload.customActions.slice(0, 6) : customActions;
        marketBriefs = Array.isArray(payload.marketBriefs) ? payload.marketBriefs.slice(0, 20) : marketBriefs;
        investmentPositions = Array.isArray(payload.investmentPositions) ? payload.investmentPositions.slice(0, 50) : investmentPositions;
        investmentJournal = Array.isArray(payload.investmentJournal) ? payload.investmentJournal.slice(0, 80) : investmentJournal;
        try {
          storage.setJSON(STORE_KEY, logs);
          storage.setJSON(HABIT_KEY, habits);
          storage.setJSON(TASK_KEY, taskCards);
          storage.setJSON(KEYWORD_RULES_KEY, keywordRules);
          storage.setJSON(MOOD_KEY, moodLogs);
          storage.setJSON(MEDICINE_KEY, medicines);
          storage.setJSON(CUSTOM_ACTIONS_KEY, customActions);
          storage.setJSON(MARKET_BRIEFS_KEY, marketBriefs);
          storage.setJSON(INVESTMENT_POSITIONS_KEY, investmentPositions);
          storage.setJSON(INVESTMENT_JOURNAL_KEY, investmentJournal);
          storage.remove(UNDO_SNAPSHOT_KEY);
        } catch (_) {}
        lastUndoSnapshot = null;
        renderUndoAction();
        renderSummary();
        renderHabits();
        renderTaskCards();
        renderKeywordRules();
        renderMoodTrend();
        renderMedicines();
        renderCustomActions();
        renderHabitRadar();
        renderHealthTrend();
        renderInvestmentDashboard();
        renderInvestmentPositions();
        renderMarketBriefs();
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
        storage.remove(CUSTOM_ACTIONS_KEY);
        storage.remove(MARKET_BRIEFS_KEY);
        storage.remove(INVESTMENT_POSITIONS_KEY);
        storage.remove(INVESTMENT_REMINDERS_KEY);
        storage.remove(INVESTMENT_RISK_CONFIG_KEY);
        storage.remove(INVESTMENT_JOURNAL_KEY);
        storage.remove(UNDO_SNAPSHOT_KEY);
      } catch (_) {}
      habits = [];
      taskCards = [];
      keywordRules = [];
      moodLogs = [];
      medicines = [];
      customActions = [];
      marketBriefs = [];
      investmentPositions = [];
      investmentJournal = [];
      lastUndoSnapshot = null;
      renderUndoAction();
      backupText.value = "";
      doctorSummaryText.value = "";
      weeklyReportText.value = "";
      renderSummary();
      renderHabits();
      renderTaskCards();
      renderKeywordRules();
      renderMoodTrend();
      renderMedicines();
      renderCustomActions();
      renderHabitRadar();
      renderHealthTrend();
      renderInvestmentDashboard();
      renderInvestmentPositions();
      renderMarketBriefs();
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
    saveLifeNoteBtn.addEventListener("click", () => saveLifeNote());
    if (saveOrderConnectionBtn) saveOrderConnectionBtn.addEventListener("click", saveOrderConnection);
    if (refreshOrderSummaryBtn) refreshOrderSummaryBtn.addEventListener("click", fetchOrderSummary);
    if (answerFollowupBtn) answerFollowupBtn.addEventListener("click", toggleVoiceByClick);
    if (skipFollowupBtn) skipFollowupBtn.addEventListener("click", () => {
      clearButlerFollowup("好，先照原本內容記著，之後想到再補充。");
    });
    document.querySelectorAll("[data-butler-example]").forEach(btn => {
      btn.addEventListener("click", () => {
        const example = btn.dataset.butlerExample || "";
        if (getView() === "grandma") {
          showVoiceFallback("我先把示範句放在這裡，你可以修改後送出", example);
          return;
        }
        lifeNoteInput.value = example;
        lifeNoteInput.scrollIntoView({ behavior: "smooth", block: "center" });
        lifeNoteInput.focus();
        actionStatus.textContent = "管家已幫你放進輸入框，確認後按「讓管家幫我整理」。";
      });
    });
    document.getElementById("doctorBtn").addEventListener("click", exportDoctorSummary);
    document.getElementById("copyDoctorBtn").addEventListener("click", copyDoctorSummary);
    document.getElementById("familyBtn").addEventListener("click", () => {
      const message = getProfile() === "elder" ? "手動通知：請關心阿嬤。" : "手動通知：請查看個人事項重要事項。";
      notifyFamily(message);
    });
    document.getElementById("saveWebhookBtn").addEventListener("click", saveWebhookConfig);
    document.getElementById("testModeBtn").addEventListener("click", () => setMode("test"));
    document.getElementById("liveModeBtn").addEventListener("click", () => setMode("live"));
    document.getElementById("grandmaViewToggle").addEventListener("change", () => setView("grandma"));
    document.getElementById("familyViewToggle").addEventListener("change", () => setView("family"));
    weeklyBtn.addEventListener("click", generateWeeklyReport);
    copyWeeklyBtn.addEventListener("click", copyWeeklyReport);
    document.getElementById("exportDataBtn").addEventListener("click", exportDataBackup);
    document.getElementById("importDataBtn").addEventListener("click", importDataBackup);
    document.getElementById("clearDataBtn").addEventListener("click", clearTestData);
    document.getElementById("saveAlertRulesBtn").addEventListener("click", saveAlertRules);
    document.getElementById("careChatBtn").addEventListener("click", () => showCareMessage("chat"));
    document.getElementById("careMusicBtn").addEventListener("click", () => showCareMessage("music"));
    document.getElementById("saveKeywordBtn").addEventListener("click", saveKeywordRule);
    document.getElementById("iconModeBtn").addEventListener("click", toggleIconMode);
    document.getElementById("addMedicineBtn").addEventListener("click", addMedicine);
    if (elderSpeakBtn) elderSpeakBtn.addEventListener("click", handleElderSpeak);
    if (undoLastBtn) undoLastBtn.addEventListener("click", undoLastAction);
    if (voiceFallbackSubmitBtn) voiceFallbackSubmitBtn.addEventListener("click", submitVoiceFallback);
    if (voiceFallbackCancelBtn) voiceFallbackCancelBtn.addEventListener("click", () => {
      hideVoiceFallback();
      voiceText.textContent = "好，想到事情再跟我說。";
    });
    if (voiceFallbackInput) voiceFallbackInput.addEventListener("keydown", event => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") submitVoiceFallback();
    });
    elderEmergencyBtn.addEventListener("click", handleElderEmergency);
    elderFamilyBtn.addEventListener("click", handleElderFamily);
    elderDoneBtn.addEventListener("click", handleElderDone);
    addCustomActionBtn.addEventListener("click", addCustomAction);
    if (investmentReportBtn) investmentReportBtn.addEventListener("click", generateInvestmentReport);
    if (copyInvestmentReportBtn) copyInvestmentReportBtn.addEventListener("click", copyInvestmentReport);
    if (enableInvestmentRemindersBtn) enableInvestmentRemindersBtn.addEventListener("click", enableInvestmentReminders);
    if (disableInvestmentRemindersBtn) disableInvestmentRemindersBtn.addEventListener("click", disableInvestmentReminders);
    if (testInvestmentReminderBtn) testInvestmentReminderBtn.addEventListener("click", testInvestmentReminder);
    if (saveRiskConfigBtn) saveRiskConfigBtn.addEventListener("click", saveInvestmentRiskConfig);
    if (saveMarketBriefBtn) saveMarketBriefBtn.addEventListener("click", saveMarketBrief);
    if (morningBriefTemplateBtn) morningBriefTemplateBtn.addEventListener("click", () => insertMarketTemplate("morning"));
    if (potentialTemplateBtn) potentialTemplateBtn.addEventListener("click", () => insertMarketTemplate("potential"));
    if (riskTemplateBtn) riskTemplateBtn.addEventListener("click", () => insertMarketTemplate("risk"));
    if (clearMarketBriefBtn) clearMarketBriefBtn.addEventListener("click", () => {
      if (marketBriefInput) marketBriefInput.value = "";
      actionStatus.textContent = "已清空市場分析輸入。";
    });
    skipWizardBtn.addEventListener("click", () => completeSetup());
    document.querySelectorAll("[data-wizard-profile]").forEach(btn => {
      btn.addEventListener("click", () => completeSetup(btn.dataset.wizardProfile));
    });
    document.querySelectorAll("[data-mood]").forEach(btn => {
      btn.addEventListener("click", () => recordMood(btn.dataset.mood));
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") refreshReminderReliability();
    });
    window.addEventListener("focus", refreshReminderReliability);

    floatingActionBtn.addEventListener("click", () => {
      if (getView() === "grandma") {
        toggleVoiceByClick();
        return;
      }
      lifeNoteInput.scrollIntoView({ behavior: "smooth", block: "center" });
      lifeNoteInput.focus();
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
      safeRun("投資儀表板", renderInvestmentDashboard);
      safeRun("市場分析", renderMarketBriefs);
      safeRun("自訂快捷鍵", renderCustomActions);
      safeRun("任務提醒", scheduleAllTaskReminders);
      safeRun("時程", renderTimeline);
      safeRun("通知設定", loadWebhookConfig);
      safeRun("警戒值", loadAlertRules);
      safeRun("測試模式", renderMode);
      safeRun("視圖", renderView);
      safeRun("情境", renderProfile);
      safeRun("管家追問", renderButlerFollowup);
      safeRun("復原操作", renderUndoAction);
      safeRun("訂單摘要", renderOrderSummary);
      if (getOrderConnectionToken() && location.protocol !== "file:") {
        safeRun("訂單同步", fetchOrderSummary);
      }
      safeRun("設定精靈", showSetupWizardIfNeeded);
      profileSelect.addEventListener("change", () => setProfile(profileSelect.value));
      safeRun("PWA", registerServiceWorker);
    }

    function registerServiceWorker() {
      if (!("serviceWorker" in navigator)) return;
      if (location.protocol === "file:") return;
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
      navigator.serviceWorker.register("./sw.js").then(registration => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      }).catch(error => {
        console.warn("Service worker registration failed", error);
      });
    }

    bootApp();
  
