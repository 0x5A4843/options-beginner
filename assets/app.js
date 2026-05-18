const audienceContext = {
  futuresExperience: "交易期货",
  optionsLevel: "期权新手",
};

const scrollDurationMs = 900;

const screens = [
  {
    kicker: "为什么还要学期权？",
    title: "期货能做方向，期权多了什么？",
    action: "看一个例子",
    utterances: [
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        line: "期货已经能用杠杆放大收益了。",
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        line: "我看涨就做多，看跌就做空。",
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        line: "那我为什么还要学股指期权？",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "期权不是来替代期货的。",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "期货更像是在押方向：涨还是跌。",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "但期权多给你几种玩法。",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "有时候你不一定非要猜对方向，",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "也可以交易波动会不会变大，",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "或者价格会不会突破某个位置。",
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        line: "所以期权不是另一个期货？",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "对。",
      },
      {
        button: "下一段",
        role: "期权老师",
        mood: "steady",
        line: "它更像是给你的交易工具箱里，多放了一套工具。",
      },
      {
        button: "下一段",
        role: "期权新手",
        mood: "curious",
        line: "我感觉还是有点抽象，",
      },
      {
        button: "看一个例子",
        role: "期权新手",
        mood: "curious",
        line: "能举一些更直观的例子么？",
      },
    ],
  },
  {
    kicker: "经典例子 1",
    title: "宽跨式：怕它不动，不怕它大动",
    action: "看下一个例子",
    visual: {
      type: "wide-strangle",
      label: "宽跨式例子",
      current: "4000",
      callStrike: "4100 认购",
      putStrike: "3900 认沽",
      upperProfit: "4180 以上赚钱",
      lowerProfit: "3820 以下赚钱",
      lossRange: "中间晃，亏权利金",
    },
    utterances: [
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        line: "那你说个更具体的例子。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "比如指数现在在 4000 附近。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "你不知道它要涨还是跌，",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "但你觉得它快要大动了。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        line: "这种时候做期货就麻烦。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        line: "做多怕它往下，",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        line: "做空又怕它往上。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "期权里有一种思路：",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "买 4100 认购，",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "再买 3900 认沽。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权新手",
        mood: "curious",
        line: "这就是宽跨式？",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "对，宽跨式。",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "它赌的不是先猜涨跌，",
      },
      {
        button: "下一段",
        activeHighlight: "none",
        role: "期权老师",
        mood: "steady",
        line: "而是赌指数会不会走出一段大行情。",
      },
      {
        button: "下一段",
        activeHighlight: "profit",
        role: "期权老师",
        mood: "steady",
        line: "假设总共花了 80 点权利金。",
      },
      {
        button: "下一段",
        activeHighlight: "profit",
        role: "期权老师",
        mood: "steady",
        line: "涨超 4180，开始赚钱。",
      },
      {
        button: "下一段",
        activeHighlight: "profit",
        role: "期权老师",
        mood: "steady",
        line: "跌破 3820，也开始赚钱。",
      },
      {
        button: "下一段",
        activeHighlight: "loss",
        role: "期权老师",
        mood: "steady",
        line: "如果在这中间，",
      },
      {
        button: "下一段",
        activeHighlight: "loss",
        role: "期权老师",
        mood: "steady",
        line: "指数来回晃但没走远，",
      },
      {
        button: "下一段",
        activeHighlight: "loss",
        role: "期权老师",
        mood: "steady",
        line: "那就亏这笔权利金。",
      },
      {
        button: "下一段",
        activeHighlight: "all",
        role: "期权新手",
        mood: "curious",
        line: "明白了。",
      },
      {
        button: "下一段",
        activeHighlight: "all",
        role: "期权新手",
        mood: "curious",
        line: "它不是怕涨，也不是怕跌，",
      },
      {
        button: "看下一个例子",
        activeHighlight: "all",
        role: "期权新手",
        mood: "curious",
        line: "它怕的是不怎么动。",
      },
    ],
  },
];

let currentScreenIndex = 0;
let currentUtteranceIndex = 0;
let lastDialogueScrollTop = 0;

function getSpeakerKind(role) {
  return role === "期权老师" ? "teacher" : "student";
}

function renderDialogueLine(item) {
  const speakerKind = getSpeakerKind(item.role);

  return `
    <article class="dialogue-card ${speakerKind} ${item.mood}">
      <div class="pixel-avatar avatar-${speakerKind}" aria-hidden="true">
        <span class="pixel-eye left"></span>
        <span class="pixel-eye right"></span>
        <span class="pixel-mouth"></span>
      </div>
      <div class="bubble">
        <p class="speaker speaker-${speakerKind}">${item.role}</p>
        <p>${item.line}</p>
      </div>
    </article>
  `;
}

function isHighlightActive(activeHighlight, zone) {
  return activeHighlight === zone || activeHighlight === "all";
}

function renderWideStrangleChart(visual, activeHighlight = "none") {
  const profitUpClass = isHighlightActive(activeHighlight, "profit") ? "is-active" : "";
  const profitDownClass = isHighlightActive(activeHighlight, "profit") ? "is-active" : "";
  const lossClass = isHighlightActive(activeHighlight, "loss") ? "is-active" : "";

  return `
    <section class="chart-card" aria-label="${visual.label}">
      <div class="chart-title">${visual.label}</div>
      <svg class="wide-strangle-chart" viewBox="0 0 320 190" role="img" aria-label="${visual.label}">
        <rect class="profit-zone up ${profitUpClass}" x="28" y="18" width="264" height="42"></rect>
        <rect class="loss-zone ${lossClass}" x="28" y="60" width="264" height="70"></rect>
        <rect class="profit-zone down ${profitDownClass}" x="28" y="130" width="264" height="42"></rect>

        <line class="chart-threshold upper" x1="28" y1="60" x2="292" y2="60"></line>
        <line class="chart-threshold lower" x1="28" y1="130" x2="292" y2="130"></line>
        <line class="chart-current" x1="160" y1="18" x2="160" y2="172"></line>

        <path class="chart-price-path" d="M38 96 C72 91, 98 102, 130 96 S178 88, 202 96"></path>
        <path class="chart-profit-path up" d="M202 96 C232 80, 252 48, 286 28"></path>
        <path class="chart-profit-path down" d="M202 96 C232 112, 252 146, 286 166"></path>

        <text class="chart-label up" x="38" y="46">${visual.upperProfit}</text>
        <text class="chart-label middle" x="58" y="100">${visual.lossRange}</text>
        <text class="chart-label down" x="38" y="158">${visual.lowerProfit}</text>
        <text class="chart-label current" x="132" y="184">现在 ${visual.current}</text>
      </svg>
      <div class="chart-legend">
        <span>${visual.callStrike}</span>
        <span>${visual.putStrike}</span>
      </div>
    </section>
  `;
}

function renderVisual(visual, activeHighlight) {
  if (!visual) {
    return "";
  }

  if (visual.type === "wide-strangle") {
    return renderWideStrangleChart(visual, activeHighlight);
  }

  return "";
}

function getVisibleUtterances(screen) {
  const visibleUtterances = screen.utterances.slice(0, currentUtteranceIndex + 1);
  return visibleUtterances;
}

function getButtonText(screen) {
  if (currentUtteranceIndex < screen.utterances.length - 1) {
    return screen.utterances[currentUtteranceIndex].button || "下一段";
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
  const visibleUtterances = getVisibleUtterances(screen);
  const currentUtterance = screen.utterances[currentUtteranceIndex];
  const activeHighlight = currentUtterance.activeHighlight || "none";

  app.innerHTML = `
    <div class="screen-copy">
      <p class="section-label">${screen.kicker}</p>
      <h2>${screen.title}</h2>
    </div>
    ${renderVisual(screen.visual, activeHighlight)}
    <div class="dialogue-panel" aria-label="对话内容">
      <div class="dialogue-list">
        ${visibleUtterances.map(renderDialogueLine).join("")}
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

  if (currentUtteranceIndex < screen.utterances.length - 1) {
    currentUtteranceIndex += 1;
    renderScreen(screen);
    return;
  }

  currentScreenIndex = Math.min(currentScreenIndex + 1, screens.length - 1);
  currentUtteranceIndex = 0;
  lastDialogueScrollTop = 0;
  renderScreen(screens[currentScreenIndex]);
}

renderScreen(screens[currentScreenIndex]);
