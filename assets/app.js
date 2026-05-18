const audienceContext = {
  futuresExperience: "交易期货",
  optionsLevel: "期权新手",
};

const scrollDurationMs = 900;

const screens = [
  {
    kicker: "为什么还要学期权？",
    title: "期货之外，期权多了什么？",
    action: "看一个例子",
    messages: [
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "期货已经能用杠杆放大收益了。",
          "我看涨就做多，看跌就做空。",
          "那我为什么还要学股指期权？",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "期权不是来替代期货的。",
          "期货更像是在押方向：涨还是跌。",
          "但期权多给你几种玩法。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "有时候你不一定非要猜对方向，",
          "也可以交易波动会不会变大，",
          "或者价格会不会突破某个位置。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: ["所以期权不是另一个期货？"],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "对。",
          "它更像是给你的交易工具箱里，",
          "多放了一套工具。",
        ],
      },
      {
        button: "看一个例子",
        role: "期权新手",
        mood: "curious",
        lines: [
          "我感觉还是有点抽象，",
          "能结合实际的场景给一点更具体的例子么？",
        ],
      },
    ],
  },
  {
    kicker: "经典例子 1",
    title: "不判断方向，押注大波动",
    action: "看下一个例子",
    visual: {
      type: "wide-strangle",
      label: "指数价格图",
      current: "4000",
      callStrike: "4100 认购",
      putStrike: "3900 认沽",
      upperProfit: "4180 以上赚钱",
      lowerProfit: "3820 以下赚钱",
      lossRange: "中间晃，亏权利金",
    },
    messages: [
      {
        button: "下一段",
        activeHighlight: "none",
        chartStage: "price",
        role: "期权老师",
        mood: "steady",
        lines: [
          "市场已经横盘很久了。",
          "我认为市场会有大波动，",
          "但是我不能确定方向。",
        ],
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        lines: [
          "这种时候做期货就麻烦。",
          "做多怕它往下砸，",
          "做空又怕它往上冲。",
        ],
      },
      {
        button: "下一段",
        activeHighlight: "none",
        chartStage: "price",
        role: "期权老师",
        mood: "steady",
        lines: [
          "那就换个想法。",
          "不先押涨跌，",
          "而是押它会不会走远。",
        ],
      },
      {
        button: "下一段",
        activeHighlight: "none",
        chartStage: "strikes",
        role: "期权老师",
        mood: "steady",
        lines: [
          "比如指数现在 4000。",
          "上面买 4100 认购，",
          "下面买 3900 认沽。",
        ],
      },
      {
        button: "下一段",
        activeHighlight: "profit",
        chartStage: "breakEven",
        role: "期权老师",
        mood: "steady",
        lines: [
          "假设总共花了 80 点权利金。",
          "涨超 4180，开始赚钱。",
          "跌破 3820，也开始赚钱。",
        ],
      },
      {
        button: "下一段",
        activeHighlight: "loss",
        chartStage: "breakEven",
        role: "期权老师",
        mood: "steady",
        lines: [
          "如果一直在这中间晃，",
          "没涨远，也没跌远，",
          "那就亏这笔权利金。",
        ],
      },
      {
        button: "看下一个例子",
        activeHighlight: "all",
        chartStage: "all",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这类组合，名字就叫宽跨式。",
          "它不是怕涨，也不是怕跌。",
          "它怕的是不怎么动。",
        ],
      },
    ],
  },
];

let currentScreenIndex = 0;
let currentMessageIndex = 0;
let lastDialogueScrollTop = 0;

function getSpeakerKind(role) {
  return role === "期权老师" ? "teacher" : "student";
}

function renderDialogueLine(item) {
  const speakerKind = getSpeakerKind(item.role);
  const messageLines = item.lines.map((line) => `<p>${line}</p>`).join("");

  return `
    <article class="dialogue-card ${speakerKind} ${item.mood}">
      <div class="pixel-avatar avatar-${speakerKind}" aria-hidden="true">
        <span class="pixel-eye left"></span>
        <span class="pixel-eye right"></span>
        <span class="pixel-mouth"></span>
      </div>
      <div class="bubble">
        <p class="speaker speaker-${speakerKind}">${item.role}</p>
        ${messageLines}
      </div>
    </article>
  `;
}

function isHighlightActive(activeHighlight, zone) {
  return activeHighlight === zone || activeHighlight === "all";
}

function renderWideStrangleChart(visual, activeHighlight = "none", chartStage = "price") {
  const showStrikes = ["strikes", "breakEven", "all"].includes(chartStage);
  const showBreakEven = ["breakEven", "all"].includes(chartStage);
  const profitUpClass = isHighlightActive(activeHighlight, "profit") ? "is-active" : "";
  const profitDownClass = isHighlightActive(activeHighlight, "profit") ? "is-active" : "";
  const lossClass = isHighlightActive(activeHighlight, "loss") ? "is-active" : "";

  return `
    <section class="chart-card" aria-label="${visual.label}">
      <div class="chart-title">${visual.label}</div>
      <svg class="wide-strangle-chart price-chart" viewBox="0 0 320 190" role="img" aria-label="${visual.label}">
        <rect class="price-chart-area" x="28" y="18" width="264" height="154"></rect>
        ${showBreakEven ? `<rect class="profit-zone up ${profitUpClass}" x="28" y="18" width="264" height="42"></rect>` : ""}
        ${showBreakEven ? `<rect class="loss-zone ${lossClass}" x="28" y="60" width="264" height="70"></rect>` : ""}
        ${showBreakEven ? `<rect class="profit-zone down ${profitDownClass}" x="28" y="130" width="264" height="42"></rect>` : ""}

        ${showBreakEven ? `<line class="chart-threshold upper" x1="28" y1="60" x2="292" y2="60"></line>` : ""}
        ${showBreakEven ? `<line class="chart-threshold lower" x1="28" y1="130" x2="292" y2="130"></line>` : ""}
        ${showStrikes ? `<line class="chart-strike upper" x1="28" y1="78" x2="292" y2="78"></line>` : ""}
        ${showStrikes ? `<line class="chart-strike lower" x1="28" y1="112" x2="292" y2="112"></line>` : ""}
        <line class="chart-current" x1="160" y1="18" x2="160" y2="172"></line>

        <path class="chart-price-path" d="M38 98 C62 94, 84 101, 108 97 S150 93, 174 98 S216 104, 244 98 S276 92, 288 96"></path>
        ${showBreakEven ? `<path class="chart-profit-path up" d="M206 96 C232 78, 252 48, 286 28"></path>` : ""}
        ${showBreakEven ? `<path class="chart-profit-path down" d="M206 98 C232 116, 252 146, 286 166"></path>` : ""}

        ${showBreakEven ? `<text class="chart-label up" x="38" y="46">${visual.upperProfit}</text>` : ""}
        ${showBreakEven ? `<text class="chart-label middle" x="58" y="100">${visual.lossRange}</text>` : ""}
        ${showBreakEven ? `<text class="chart-label down" x="38" y="158">${visual.lowerProfit}</text>` : ""}
        ${showStrikes ? `<text class="chart-label strike" x="38" y="75">${visual.callStrike}</text>` : ""}
        ${showStrikes ? `<text class="chart-label strike" x="38" y="124">${visual.putStrike}</text>` : ""}
        <text class="chart-label current" x="132" y="184">现在 ${visual.current}</text>
      </svg>
      <div class="chart-legend">
        <span>${showBreakEven ? visual.upperProfit : "横盘区间"}</span>
        <span>${showBreakEven ? visual.lowerProfit : "等待突破"}</span>
      </div>
    </section>
  `;
}

function renderVisual(visual, activeHighlight, chartStage) {
  if (!visual) {
    return "";
  }

  if (visual.type === "wide-strangle") {
    return renderWideStrangleChart(visual, activeHighlight, chartStage);
  }

  return "";
}

function getVisibleMessages(screen) {
  const visibleMessages = screen.messages.slice(0, currentMessageIndex + 1);
  return visibleMessages;
}

function getButtonText(screen) {
  if (currentMessageIndex < screen.messages.length - 1) {
    return screen.messages[currentMessageIndex].button || "下一段";
  }

  return screen.action;
}

function getCurrentDialogueScrollTop() {
  const panel = document.querySelector(".dialogue-panel");
  return panel ? panel.scrollTop : 0;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function slowScrollTo(panel, targetTop) {
  const startTop = panel.scrollTop;
  const distance = targetTop - startTop;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / scrollDurationMs, 1);
    panel.scrollTop = startTop + distance * easeInOutCubic(progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function scrollDialogueToLatest() {
  const panel = document.querySelector(".dialogue-panel");

  if (!panel) {
    return;
  }

  panel.scrollTop = lastDialogueScrollTop;
  const targetTop = Math.max(panel.scrollHeight - panel.clientHeight, 0);
  slowScrollTo(panel, targetTop);
}

function renderScreen(screen) {
  const app = document.querySelector("#app");
  const visibleMessages = getVisibleMessages(screen);
  const currentMessage = screen.messages[currentMessageIndex];
  const activeHighlight = currentMessage.activeHighlight || "none";
  const chartStage = currentMessage.chartStage || "price";

  app.innerHTML = `
    <div class="screen-copy">
      <p class="section-label">${screen.kicker}</p>
      <h2>${screen.title}</h2>
    </div>
    ${renderVisual(screen.visual, activeHighlight, chartStage)}
    <div class="dialogue-panel" aria-label="对话内容">
      <div class="dialogue-list">
        ${visibleMessages.map(renderDialogueLine).join("")}
      </div>
    </div>
    <button class="primary-action" type="button">${getButtonText(screen)}</button>
  `;

  app.querySelector(".primary-action").addEventListener("click", advanceTutorial);
  scrollDialogueToLatest();
}

function advanceTutorial() {
  const screen = screens[currentScreenIndex];
  lastDialogueScrollTop = getCurrentDialogueScrollTop();

  if (currentMessageIndex < screen.messages.length - 1) {
    currentMessageIndex += 1;
    renderScreen(screen);
    return;
  }

  currentScreenIndex = Math.min(currentScreenIndex + 1, screens.length - 1);
  currentMessageIndex = 0;
  lastDialogueScrollTop = 0;
  renderScreen(screens[currentScreenIndex]);
}

renderScreen(screens[currentScreenIndex]);
