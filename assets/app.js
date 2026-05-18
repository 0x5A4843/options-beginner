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
  {
    kicker: "核心场景 2",
    title: "事件驱动，亏损封顶",
    action: "看下一个场景",
    visual: {
      type: "scenario",
      label: "事件行情",
      chips: ["政策", "数据", "跳涨跳跌"],
      payoff: "小权利金 / 大弹性",
    },
    messages: [
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "有些行情不是天天有。",
          "比如政策、库存数据，",
          "或者碳酸锂这种品种突然暴动。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "这种我也想参与。",
          "但期货要是方向错了，",
          "亏起来太快。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这时可以买期权。",
          "最多亏权利金，",
          "不会因为保证金不够被打爆。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "如果行情真走出来，",
          "小权利金也可能撬动大弹性。",
          "这就是买方最吸引人的地方。",
        ],
      },
      {
        button: "看下一个场景",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这类做法，",
          "通常就是买入虚值期权。",
          "后面再细讲怎么选。",
        ],
      },
    ],
  },
  {
    kicker: "核心场景 3",
    title: "浮盈锁定，保留上行",
    action: "看下一个场景",
    visual: {
      type: "scenario",
      label: "利润护航",
      chips: ["已有浮盈", "怕回撤", "留住上涨"],
      payoff: "下方有保护 / 上方还在",
    },
    messages: [
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "还有一种很常见的情况。",
          "利润已经挺厚，",
          "但你不想马上下车。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "对，卖了怕后面继续涨。",
          "不卖又怕突然回撤，",
          "尤其夜盘跳空很难受。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "期权可以换个处理方式。",
          "你继续拿着原来的仓位，",
          "再买一个下跌保护。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "它像给利润买保险。",
          "真跌下来，下面有人兜底；",
          "继续涨，你也还在车上。",
        ],
      },
      {
        button: "看下一个场景",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这类组合，",
          "叫保护性看跌。",
          "核心是锁风险，不锁收益。",
        ],
      },
    ],
  },
  {
    kicker: "核心场景 4",
    title: "横盘收租，资产增效",
    action: "看下一个场景",
    visual: {
      type: "scenario",
      label: "震荡行情",
      chips: ["横盘", "时间流逝", "收权利金"],
      payoff: "把等待变收入",
    },
    messages: [
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "有时候市场不大涨，",
          "也不大跌，",
          "资产躺着不动。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "这种最烦。",
          "看着没方向，",
          "资金又被占着。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "如果你判断短期难大涨，",
          "可以考虑卖出一些期权，",
          "把时间价值收回来。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "如果本来就想低位接货，",
          "也可以挂一个愿意接的位置，",
          "没接到也先收权利金。",
        ],
      },
      {
        button: "看下一个场景",
        role: "期权老师",
        mood: "steady",
        lines: [
          "常见做法是备兑 Call，",
          "或者现金担保 Put。",
          "但卖方风险后面要单独讲。",
        ],
      },
    ],
  },
  {
    kicker: "核心场景 5",
    title: "波动率坍塌，不靠方向",
    action: "看下一个场景",
    visual: {
      type: "scenario",
      label: "事件落地",
      chips: ["事件前贵", "不确定消失", "权利金缩水"],
      payoff: "赚波动率回落",
    },
    messages: [
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "重大事件前，",
          "市场都紧张，",
          "事件前期权很贵。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "贵是因为大家都想买保险？",
          "但事件落地以后，",
          "好像反而没那么刺激了。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "对。",
          "不确定性消失以后，",
          "期权价格可能快速缩水。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这就是波动率坍塌。",
          "你不是只靠猜涨跌，",
          "而是在赚恐慌降温。",
        ],
      },
      {
        button: "看下一个场景",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这类思路常见于双卖或者铁鹰。",
          "听起来很香，",
          "但风险边界必须先讲清楚。",
        ],
      },
    ],
  },
  {
    kicker: "核心场景 6",
    title: "现货平替，提高效率",
    action: "完成",
    visual: {
      type: "scenario",
      label: "资金效率",
      chips: ["少占资金", "接近现货", "保留弹性"],
      payoff: "用小资金控制大敞口",
    },
    messages: [
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "还有一种更进阶的玩法。",
          "你长期看好一个资产，",
          "但买现货太占钱。",
        ],
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        lines: [
          "期货虽然省钱，",
          "但有保证金压力，",
          "还要考虑展期和基差。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "有些深实值期权，",
          "涨跌会比较接近现货，",
          "但占用资金少很多。",
        ],
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        lines: [
          "你可以把它理解成，",
          "用更少的钱，",
          "获得接近现货的方向敞口。",
        ],
      },
      {
        button: "完成",
        role: "期权老师",
        mood: "steady",
        lines: [
          "这类做法叫深实值 Call。",
          "它不是入门第一步，",
          "但值得放进工具箱。",
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

function renderScenarioVisual(visual) {
  return `
    <section class="chart-card scenario-visual" aria-label="${visual.label}">
      <div class="chart-title">${visual.label}</div>
      <div class="scenario-flow">
        ${visual.chips.map((chip) => `<span class="scenario-chip">${chip}</span>`).join("")}
      </div>
      <div class="scenario-payoff">${visual.payoff}</div>
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

  if (visual.type === "scenario") {
    return renderScenarioVisual(visual);
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

  if (currentScreenIndex === screens.length - 1) {
    return;
  }

  currentScreenIndex = Math.min(currentScreenIndex + 1, screens.length - 1);
  currentMessageIndex = 0;
  lastDialogueScrollTop = 0;
  renderScreen(screens[currentScreenIndex]);
}

renderScreen(screens[currentScreenIndex]);
