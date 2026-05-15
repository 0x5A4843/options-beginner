const firstScreen = {
  title: "一个很自然的问题",
  dialogue: [
    {
      role: "像素新手",
      mood: "curious",
      lines: ["我都能做股指期货了，", "为什么还要学股指期权？"],
    },
  ],
  note: ["这个问题很正常。", "期权不是拿来替代期货的。", "它是多给你一种选择。"],
};

function renderDialogueLine(item) {
  return `
    <article class="dialogue-card ${item.mood}">
      <div class="pixel-avatar" aria-hidden="true">
        <span class="pixel-eye left"></span>
        <span class="pixel-eye right"></span>
      </div>
      <div class="bubble">
        <p class="speaker">${item.role}</p>
        ${item.lines.map((line) => `<p>${line}</p>`).join("")}
      </div>
    </article>
  `;
}

function renderFirstScreen(screen) {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="screen-copy">
      <p class="section-label">为什么还要学期权？</p>
      <h2>${screen.title}</h2>
    </div>
    <div class="dialogue-list">
      ${screen.dialogue.map(renderDialogueLine).join("")}
    </div>
    <div class="lesson-note">
      ${screen.note.map((line) => `<p>${line}</p>`).join("")}
    </div>
    <button class="primary-action" type="button">继续</button>
  `;
}

renderFirstScreen(firstScreen);
