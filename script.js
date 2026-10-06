const mediaUrl = (relativePath) => `/media/${relativePath.split("/").map(encodeURIComponent).join("/")}`;

const homeProjects = [
  { id: "post-linguistic-era", title: "The Post-Linguistic Era", titleZh: "后语言时代", year: "2024", cover: "所有项目封面图/the post- linguistic era.png" },
  { id: "signal-lag", title: "Signal Lag", titleZh: "信号延迟", year: "2024", cover: "所有项目封面图/signal lag.png" },
  { id: "traces-imprinted", title: "Traces Imprinted", titleZh: "印迹", year: "2024", cover: "所有项目封面图/traces imprinted.png" },
  { id: "ecosyntax", title: "EcoSyntax", titleZh: "生态句法", year: "2022", cover: "所有项目封面图/ecosystem.png" },
  { id: "magic-eco-box", title: "Magic Eco-Box", titleZh: "魔法生态箱", year: "2022", cover: "所有项目封面图/可交互气候生态箱（2022）.png" },
  { id: "pure-land-of-sound", title: "A Pure Land of Sound", titleZh: "一片声音净土", year: "2022", cover: "所有项目封面图/需要一片声音净土——华东师范大学校园低分贝声音地图可视化（2022）.jpg" },
  { id: "emoji-and-everything", title: "Emoji and Everything", titleZh: "Emoji 与一切", year: "2022", cover: "所有项目封面图/emoji使用与表达数据可视化海报.jpg" },
  { id: "everglades-diversity", title: "Everglades Plant Diversity", titleZh: "大沼泽地植物多样性", year: "2022", cover: "assets/projects/everglades.jpg", localCover: true },
  { id: "chinese-medicine", title: "Materia Medica in Motion", titleZh: "动态本草", year: "2023", cover: "所有项目封面图/中药材功效可视化动态海报（2023）.png" },
  { id: "photography", title: "Photography", titleZh: "摄影", year: "2022—24", cover: "所有项目封面图/摄影作品.png" }
];

const ui = {
  en: {
    role: "Designer & Creative Technologist",
    navWorks: "Works",
    navAbout: "About",
    navContact: "Contact",
    practiceIndex: "Practice index · 2022—2024",
    heroTitle: "Systems for feeling, sensing and imagining.",
    heroCopy: "Interactive installations, speculative worlds, information systems and image practices.",
    orbitCenter: "10 works · one practice",
    interactionNote: "Hover to pause · Select a work to open",
    aboutNumber: "About / 01",
    aboutCopy: "Xinran Zhang (Sherry) is a Shanghai-born designer and creative technologist. Her practice bridges physical computing, real-time visual systems and multimodal interaction.",
    startConversation: "Start a conversation",
    footerDiscipline: "Information Experience Design",
    langButton: "EN / 中",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "Auto"
  },
  zh: {
    role: "设计师与创意技术实践者",
    navWorks: "作品",
    navAbout: "关于",
    navContact: "联系",
    practiceIndex: "实践索引 · 2022—2024",
    heroTitle: "为感知、体验与想象构建系统。",
    heroCopy: "互动装置、思辨设计、信息系统与图像实践。",
    orbitCenter: "10 件作品 · 一条实践线索",
    interactionNote: "悬停暂停 · 点击作品进入",
    aboutNumber: "关于 / 01",
    aboutCopy: "张馨然（Sherry）是一名来自上海的设计师与创意技术实践者。她的实践涵盖实体计算、实时视觉系统与多模态交互。",
    startConversation: "与我联系",
    footerDiscipline: "信息体验设计",
    langButton: "中 / EN",
    themeLight: "白天",
    themeDark: "黑夜",
    themeSystem: "跟随系统"
  }
};

const getLanguage = () => localStorage.getItem("xinran-language") === "zh" ? "zh" : "en";
let language = getLanguage();

function localTitle(project) {
  return language === "zh" ? project.titleZh : project.title;
}

function applyLanguage() {
  const strings = ui[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (strings[key]) node.textContent = strings[key];
  });
  const langButton = document.querySelector(".lang-button");
  if (langButton) langButton.textContent = strings.langButton;
  const themeLabels = { light: strings.themeLight, dark: strings.themeDark, system: strings.themeSystem };
  document.querySelectorAll("[data-theme-label]").forEach((node) => {
    node.textContent = themeLabels[node.dataset.themeLabel] || node.textContent;
  });
  document.title = language === "zh"
    ? "张馨然 — 设计师与创意技术实践者"
    : "Xinran Zhang — Designer & Creative Technologist";
}

const orbit = document.querySelector("#home-orbit");
const orbitWrap = document.querySelector(".orbit-wrap");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function renderOrbit() {
  orbit.innerHTML = homeProjects.map((project, index) => {
    const title = localTitle(project);
    const coverSrc = project.localCover ? `./${project.cover}` : project.cover ? mediaUrl(project.cover) : "";
    const visual = coverSrc
      ? `<img src="${coverSrc}" alt="${title} 封面" loading="${index < 5 ? "eager" : "lazy"}" decoding="async" />`
      : `<object data="${mediaUrl(project.coverDocument)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" type="application/pdf" aria-label="${title} 封面"></object>`;

    return `
      <a class="project-card" href="./works/#${project.id}" aria-label="${language === "zh" ? "打开" : "Open"} ${title}" data-orbit-index="${index}">
        <span class="project-card-content">
          <span class="project-thumb">${visual}</span>
          <span class="card-meta"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><span class="card-year">${project.year}</span></span>
          <span class="card-title">${title}</span>
        </span>
      </a>
    `;
  }).join("");
  cards = [...orbit.querySelectorAll(".project-card")];
}

let cards = [];
let orbitStart = performance.now();
let orbitPausedAt = null;
let orbitPauseOffset = 0;

function layoutOrbit(timestamp) {
  const width = orbitWrap.clientWidth;
  const height = orbitWrap.clientHeight;
  if (!width || !height) {
    requestAnimationFrame(layoutOrbit);
    return;
  }

  const elapsed = reducedMotion.matches ? 0 : timestamp - orbitStart - orbitPauseOffset;
  const cycleMs = 62000;
  const spin = (elapsed / cycleMs) * Math.PI * 2;
  const rx = width * 0.405;
  const ry = height * 0.305;
  const tilt = -16 * Math.PI / 180;
  let focusCard = null;
  let focusDepth = -Infinity;

  cards.forEach((card, index) => {
    const theta = spin - Math.PI / 2 + (Math.PI * 2 * index / cards.length);
    const localX = Math.cos(theta) * rx;
    const localY = Math.sin(theta) * ry;
    const x = localX * Math.cos(tilt) - localY * Math.sin(tilt);
    const y = localX * Math.sin(tilt) + localY * Math.cos(tilt);
    const depth = (Math.sin(theta) + 1) / 2;
    const depthCurve = Math.pow(depth, 2.7);
    const scale = width < 600 ? 0.6 + depthCurve * 0.6 : 0.69 + depthCurve * 0.82;
    const opacity = 0.56 + depth * 0.44;

    card.style.left = `${width / 2 + x}px`;
    card.style.top = `${height / 2 + y}px`;
    card.style.setProperty("--orbit-scale", scale.toFixed(4));
    card.style.setProperty("--orbit-opacity", opacity.toFixed(4));
    card.style.setProperty("--orbit-gray", (1 - depthCurve).toFixed(4));
    card.style.zIndex = String(10 + Math.round(depth * 80));

    if (depth > focusDepth) {
      focusDepth = depth;
      focusCard = card;
    }
  });

  cards.forEach((card) => card.classList.toggle("is-focus", card === focusCard));
  if (!reducedMotion.matches && orbitPausedAt === null) requestAnimationFrame(layoutOrbit);
}

function resumeOrbit() {
  if (orbitPausedAt !== null) {
    orbitPauseOffset += performance.now() - orbitPausedAt;
    orbitPausedAt = null;
    requestAnimationFrame(layoutOrbit);
  }
}

function pauseOrbit() {
  if (orbitPausedAt === null) orbitPausedAt = performance.now();
}

orbitWrap.addEventListener("mouseenter", pauseOrbit);
orbitWrap.addEventListener("mouseleave", resumeOrbit);
orbitWrap.addEventListener("focusin", pauseOrbit);
orbitWrap.addEventListener("focusout", (event) => {
  if (!orbitWrap.contains(event.relatedTarget)) resumeOrbit();
});
reducedMotion.addEventListener?.("change", () => requestAnimationFrame(layoutOrbit));
new ResizeObserver(() => requestAnimationFrame(layoutOrbit)).observe(orbitWrap);

document.querySelector(".lang-button").addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  localStorage.setItem("xinran-language", language);
  applyLanguage();
  renderOrbit();
  requestAnimationFrame(layoutOrbit);
});

applyLanguage();
renderOrbit();
requestAnimationFrame(layoutOrbit);
