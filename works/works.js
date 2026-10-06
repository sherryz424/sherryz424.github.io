if ("scrollRestoration" in history) history.scrollRestoration = "manual";

const mediaUrl = (relativePath) => `/media/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
const releaseVideoAliases = new Map([
  ["个人项目视频/the post-linguistic era.mov", "post-linguistic-era.mp4"],
  ["个人项目视频/signal lag.MP4", "signal-lag.mp4"],
  ["个人项目视频/traces imprinted.MP4", "traces-imprinted.mp4"],
  ["个人项目视频/EcoSyntax.MP4", "ecosyntax.mp4"],
  ["可交互气候生态箱（2022）/Magic Eco-Box.mp4", "magic-eco-box.mp4"],
  ["emoji and everthing——emoji在当今时代的使用可视化视频（2022）/emoji使用与表达数据可视化（林可欣 李嘉懿 沈骐一 张馨然 ）/最终作业/emoji使用与表达数据可视化.mp4", "emoji-and-everything.mp4"],
  ["中药材功效可视化动态海报（2023）/TDMovieOut.0.mov", "materia-medica-01.mp4"],
  ["中药材功效可视化动态海报（2023）/TDMovieOut.1.mov", "materia-medica-02.mp4"],
  ["中药材功效可视化动态海报（2023）/TDMovieOut.2.mov", "materia-medica-03.mp4"],
  ["中药材功效可视化动态海报（2023）/TDMovieOut.3.mov", "materia-medica-04.mp4"]
]);
const releaseVideoBase = "https://github.com/sherryz424/sherryz424.github.io/releases/download/media-v1";
const videoUrl = (relativePath) => {
  const alias = releaseVideoAliases.get(relativePath);
  if (!alias) return mediaUrl(relativePath);
  return location.hostname === "sherryz424.github.io"
    ? `${releaseVideoBase}/${encodeURIComponent(alias)}`
    : `/release-media/${encodeURIComponent(alias)}`;
};

const projects = [
  {
    id: "post-linguistic-era",
    title: "The Post-Linguistic Era",
    year: "2024",
    type: "Interactive installation",
    role: "Concept, interaction, fabrication, sound",
    media: "Stainless steel, capacitive sensing, spatial audio",
    tools: "Arduino, MPR121, SuperCollider, C4D",
    lead: "A tactile musical instrument that asks what remains when language is no longer our primary way of understanding one another.",
    context: "Nonverbal communication can feel immediate yet remain ambiguous. The work begins with that tension: intimacy can coexist with uncertainty and loneliness.",
    approach: "Laser-cut gesture plates become capacitive interfaces. Touch is translated into a spatial sound composition, turning familiar bodily signs into an unstable shared score.",
    outcome: "The audience performs communication rather than observing it. Meaning emerges through contact, timing and the presence of other bodies.",
    tags: ["Embodied communication", "Non-verbal language", "Spatial sound"],
    cover: "所有项目封面图/the post- linguistic era.png",
    video: "个人项目视频/the post-linguistic era.mov",
    videoMime: "video/quicktime"
  },
  {
    id: "signal-lag",
    title: "Signal Lag",
    year: "2024",
    type: "Interactive installation",
    role: "Research, system design, moving image",
    media: "LCD/TFT array, rear projection, interviews",
    tools: "Arduino, Processing, TouchDesigner, After Effects",
    lead: "A fragmented screen system contrasts urgent institutional messages with delayed, intimate replies from home.",
    context: "Institutional structures organise attention and emotion. Personal messages are pushed to the edges even when they carry the greatest emotional weight.",
    approach: "A grid of small displays receives task instructions while interview footage sits behind the system. Serial communication choreographs the clash between both channels.",
    outcome: "The installation makes emotional suppression spatial: duty stays legible and immediate, while private feeling arrives as latency and interruption.",
    tags: ["Institutional time", "Emotional latency", "Screen systems"],
    cover: "所有项目封面图/signal lag.png",
    video: "个人项目视频/signal lag.MP4",
    videoMime: "video/mp4"
  },
  {
    id: "traces-imprinted",
    title: "Traces Imprinted",
    year: "2024",
    type: "Interactive publication",
    role: "Editorial design, interaction, creative coding",
    media: "Hand-bound book, iPad, live camera projection",
    tools: "p5.js, photography, printmaking",
    lead: "A publishing system about fingerprints, tourist attention and the traces left by looking.",
    context: "Tourism often frames places as consumable images. The work asks how the observer becomes part of the surface being observed.",
    approach: "A hand-bound experimental book, newsprint posters and an iPad narrative are connected by a live camera projection that captures physical marks.",
    outcome: "Reading becomes a visible act of leaving evidence. The visitor’s own touch complicates the distance between image, place and spectator.",
    tags: ["Gaze & trace", "Publishing as interface", "Tourist image"],
    cover: "所有项目封面图/traces imprinted.png",
    video: "个人项目视频/traces imprinted.MP4",
    videoMime: "video/mp4"
  },
  {
    id: "ecosyntax",
    title: "EcoSyntax",
    year: "2022",
    type: "Speculative design",
    role: "World-building, art direction, 3D production",
    media: "Narrative film, synthetic plant models, posters",
    tools: "Cinema 4D, After Effects, editorial design",
    lead: "A government-funded synthetic ecosystem imagined for 2100, where engineered plants reveal humanity’s impulse to govern nature.",
    context: "Climate adaptation is often framed as a technical problem. EcoSyntax treats it as a political language of ownership, extraction and control.",
    approach: "Nine engineered species are documented through propaganda-like films, product taxonomies, cultivation diagrams and physical display models.",
    outcome: "The project presents a seductive but unstable future in which ecological repair and state authority become impossible to separate.",
    tags: ["Synthetic ecologies", "Climate governance", "Speculative botany"],
    cover: "所有项目封面图/ecosystem.png",
    video: "个人项目视频/EcoSyntax.MP4",
    videoMime: "video/mp4",
    imageRoot: "个人项目中EcoSyntax其他产出（2022）/",
    imageRules: [
      ["Species / propaganda system", (p) => p.includes("/合成植物宣传海报/")],
      ["Physical specimens / 3D-printed models", (p) => p.includes("/植物展示3D打印模型/")],
      ["Cultivation environments", (p) => p.includes("/模型图片/植物培养环境/")],
      ["Image studies / poster material", (p) => p.includes("/模型图片/海报用图/")],
      ["Synthetic species / individual renders", (p) => p.includes("/模型图片/独立植物渲染图/")]
    ]
  },
  {
    id: "magic-eco-box",
    title: "Magic Eco-Box",
    year: "2022",
    type: "Physical computing",
    role: "Interaction design, prototyping, fabrication",
    media: "Interactive terrarium, light, mist, water, sound",
    tools: "Arduino, PAJ7620U2, WS2812, relays",
    lead: "A gesture-controlled terrarium that turns weather into a small, responsive stage.",
    context: "The project explores how invisible environmental systems can become tangible through embodied control.",
    approach: "Hand gestures trigger sunny, dark, rain, fog and storm states through coordinated LEDs, pumps, misting and audio.",
    outcome: "A compact physical interface transforms technical input into an immediately legible atmospheric experience.",
    tags: ["Microclimate rituals", "Gesture as control", "Environmental sensing"],
    cover: "所有项目封面图/可交互气候生态箱（2022）.png",
    video: "可交互气候生态箱（2022）/Magic Eco-Box.mp4",
    videoMime: "video/mp4"
  },
  {
    id: "pure-land-of-sound",
    title: "A Pure Land of Sound",
    year: "2022",
    type: "Data storytelling",
    role: "Field research, information design, mapping",
    media: "Sound map, web layout, printed foldout",
    tools: "Data collection, mapping, editorial design",
    lead: "A low-decibel campus map translating twelve environments and three time periods into routes for quieter movement.",
    context: "Noise is usually represented as a problem to remove. This project instead treats quietness as a spatial quality that can be discovered and shared.",
    approach: "Decibel readings, sound categories and survey responses were recorded across campus, then shaped into temporal paths and quiet routes.",
    outcome: "The final map offers both an analytical view of the soundscape and a practical invitation to move through campus differently.",
    tags: ["Quiet infrastructures", "Acoustic cartography", "Field observation"],
    cover: "所有项目封面图/需要一片声音净土——华东师范大学校园低分贝声音地图可视化（2022）.jpg",
    imageRoot: "需要一片声音净土——华东师范大学校园低分贝声音地图可视化（2022）/",
    imageRules: [
      ["Field observation / acoustic sites", (p) => p.includes("/实拍/")],
      ["Spatial translation / web layouts", (p) => p.includes("/网页排版/")]
    ],
    documents: [
      ["Sound map", "需要一片声音净土——华东师范大学校园低分贝声音地图可视化（2022）/声音地图.pdf"],
      ["Printed foldout", "需要一片声音净土——华东师范大学校园低分贝声音地图可视化（2022）/三折页.pdf"]
    ]
  },
  {
    id: "emoji-and-everything",
    title: "Emoji and Everything",
    year: "2022",
    type: "Data visualisation",
    role: "Data design, motion design, collaboration",
    media: "Animated film, large-format poster",
    tools: "After Effects, information graphics",
    lead: "An animated study of how emoji use and emotional expression change across social platforms and over time.",
    context: "Emoji feel universal, yet their frequency and emotional function differ by platform, audience and moment.",
    approach: "Usage patterns are organised into colourful comparative systems, then animated so shifts in expression can be read as rhythm.",
    outcome: "A dense dataset becomes a playful visual language that mirrors the speed and multiplicity of online conversation.",
    tags: ["Networked expression", "Platform language", "Data in motion"],
    cover: "所有项目封面图/emoji使用与表达数据可视化海报.jpg",
    video: "emoji and everthing——emoji在当今时代的使用可视化视频（2022）/emoji使用与表达数据可视化（林可欣 李嘉懿 沈骐一 张馨然 ）/最终作业/emoji使用与表达数据可视化.mp4",
    videoMime: "video/mp4",
    imageRoot: "emoji and everthing——emoji在当今时代的使用可视化视频（2022）/",
    imageRules: [
      ["Final poster", (p) => p.endsWith("/emoji使用与表达数据可视化海报.jpg")],
      ["Final film / frame grammar", (p) => p.includes("/最终作业/单帧/")]
    ],
    hideUnmatchedImages: true
  },
  {
    id: "everglades-diversity",
    title: "Everglades Plant Diversity",
    year: "2022",
    type: "Information design",
    role: "Research, data visualisation",
    media: "Editorial data poster",
    tools: "Data analysis, graphic design",
    lead: "An editorial visualisation of plant diversity in Florida’s Everglades.",
    context: "Species data can describe ecological richness while hiding the relationships that make an ecosystem fragile.",
    approach: "Plant groups and their distribution are reorganised into a legible comparative visual system.",
    outcome: "A compact research poster makes biodiversity patterns visible without separating data from place.",
    tags: ["Ecological legibility", "Biodiversity", "Data as landscape"],
    cover: "网站优化素材/everglades.jpg"
  },
  {
    id: "chinese-medicine",
    title: "Materia Medica in Motion",
    year: "2023",
    type: "Motion poster",
    role: "Visual system, animation",
    media: "Four generative motion posters",
    tools: "TouchDesigner, motion design",
    lead: "A dynamic poster series translating traditional Chinese medicinal functions into moving visual behaviours.",
    context: "The language of traditional medicine is vivid but difficult to communicate through conventional diagrams.",
    approach: "Four motion studies connect medicinal properties to rhythm, texture, density and transformation.",
    outcome: "Abstract movement becomes an interpretive layer between historic knowledge and contemporary visual culture.",
    tags: ["Embodied knowledge", "Materia medica", "Generative motion"],
    cover: "所有项目封面图/中药材功效可视化动态海报（2023）.png",
    hideCoverInNarrative: true,
    disableVideoPoster: true,
    portraitVideos: new Set([
      "中药材功效可视化动态海报（2023）/TDMovieOut.1.mov",
      "中药材功效可视化动态海报（2023）/TDMovieOut.2.mov"
    ]),
    videos: [
      ["Motion study 01", "中药材功效可视化动态海报（2023）/TDMovieOut.0.mov"],
      ["Motion study 02", "中药材功效可视化动态海报（2023）/TDMovieOut.1.mov"],
      ["Motion study 03", "中药材功效可视化动态海报（2023）/TDMovieOut.2.mov"],
      ["Motion study 04", "中药材功效可视化动态海报（2023）/TDMovieOut.3.mov"]
    ]
  },
  {
    id: "photography",
    title: "Photography",
    year: "2022—24",
    type: "Photography",
    role: "Photographer, editor",
    media: "Street, architecture, image ethics",
    tools: "Digital photography, sequencing",
    lead: "An ongoing photographic practice attentive to human movement, spatial structure and the ethics of the image.",
    context: "The camera does more than record; it changes the relationship between observer, subject and public space.",
    approach: "Street scenes and architectural fragments are edited as sequences rather than isolated images.",
    outcome: "The archive acts as a visual research method that feeds the wider design practice.",
    tags: ["Public space", "Image ethics", "Spatial observation"],
    cover: "所有项目封面图/摄影作品.png",
    imageRoot: "摄影作品（2022-2024）/",
    imageRules: [
      ["Street / human movement", (p) => p.includes("/人文街拍/")],
      ["Image ethics / traces of home", (p) => p.includes("/伦理与图像/")],
      ["Light as structure", (p) => p.includes("/光影/")],
      ["Architecture / spatial structure", (p) => p.includes("/建筑空间结构/")],
      ["Poetry / photographic sequence", (p) => p.includes("/诗与摄影/")]
    ]
  }
];


const projectZh = {
  "post-linguistic-era": {
    title: "后语言时代", type: "互动装置", role: "概念、交互、制作、声音", media: "不锈钢、电容感应、空间音频", tools: "Arduino、MPR121、SuperCollider、C4D",
    lead: "一件可触摸的音乐装置，讨论当语言不再是理解彼此的主要方式时，还会留下什么。",
    context: "非语言交流看似直接，却依然可能含混。作品以这种张力为起点：亲密感、迟疑与孤独可以同时存在。",
    approach: "激光切割的手势金属片被转化为电容式界面。触摸会触发空间声音组合，使熟悉的身体手势成为一套不稳定的共同乐谱。",
    outcome: "观众需要亲自参与交流。意义在接触、时间关系与他人的共同在场中生成。",
    tags: ["身体交流","非语言表达","空间声音"]
  },
  "signal-lag": {
    title: "信号延迟", type: "互动装置", role: "研究、系统设计、影像", media: "LCD/TFT 屏幕阵列、背投、访谈", tools: "Arduino、Processing、TouchDesigner、After Effects",
    lead: "一组碎片化屏幕将紧迫的机构信息与来自家庭、延迟抵达的私人回应并置。",
    context: "机构结构会组织人的注意力与情绪。私人消息常被挤到边缘，即使它们承载着更强烈的情感。",
    approach: "小型显示屏阵列持续接收任务指令，访谈影像位于系统后方。串口通信控制两类信息之间的冲突与节奏。",
    outcome: "装置把情绪压抑转化为空间关系：职责清晰、即时，私人感受则以延迟和打断的形式出现。",
    tags: ["机构时间","情绪延迟","屏幕系统"]
  },
  "traces-imprinted": {
    title: "印迹", type: "互动出版", role: "编辑设计、交互、创意编程", media: "手工装订书、iPad、实时摄像投影", tools: "p5.js、摄影、版画",
    lead: "一套讨论指纹、游客凝视以及观看留下痕迹的出版系统。",
    context: "旅游常把地点处理成可消费的图像。这个项目关注观察者如何进入自己正在观看的表面。",
    approach: "手工实验书、新闻纸海报与 iPad 叙事通过实时摄像投影连接起来，摄像头持续捕捉实体痕迹。",
    outcome: "阅读成为可见的留痕行为。观众自己的触碰改变了图像、地点与观看者之间原本的距离。",
    tags: ["凝视与痕迹","出版即界面","旅游图像"]
  },
  "ecosyntax": {
    title: "生态句法", type: "思辨设计", role: "世界构建、艺术指导、三维制作", media: "叙事影像、合成植物模型、海报", tools: "Cinema 4D、After Effects、编辑设计",
    lead: "一个设定在 2100 年、由政府资助的合成生态系统，借工程植物讨论人类支配自然的冲动。",
    context: "气候适应常被视作技术问题。EcoSyntax 把它处理为一套关于所有权、采掘与控制的政治语言。",
    approach: "九种工程植物通过宣传式影像、产品分类、培养图示与实体展示模型被完整记录。",
    outcome: "项目构建了一个诱人却不稳定的未来，生态修复与国家权力在其中彼此纠缠。",
    tags: ["合成生态","气候治理","思辨植物学"]
  },
  "magic-eco-box": {
    title: "魔法生态箱", type: "实体计算", role: "交互设计、原型、制作", media: "互动生态箱、灯光、雾、水、声音", tools: "Arduino、PAJ7620U2、WS2812、继电器",
    lead: "一个由手势控制的生态箱，把天气变化转化为小型、可响应的舞台。",
    context: "项目关注如何通过身体控制，让不可见的环境系统变得可感知。",
    approach: "不同手势触发晴天、阴暗、下雨、起雾与暴风状态，由灯光、水泵、雾化与声音协同完成。",
    outcome: "一个紧凑的实体界面把技术输入转化为可以立即理解的环境体验。",
    tags: ["微气候仪式","手势控制","环境感知"]
  },
  "pure-land-of-sound": {
    title: "一片声音净土", type: "数据叙事", role: "田野研究、信息设计、地图", media: "声音地图、网页排版、印刷折页", tools: "数据采集、地图、编辑设计",
    lead: "一张校园低分贝声音地图，把十二个环境与三个时间段转译成寻找安静空间的路径。",
    context: "噪音通常被当作需要消除的问题。这个项目把安静视作一种可以被发现、共享的空间品质。",
    approach: "在校园不同地点记录分贝、声音类别与问卷反馈，再将数据整理为时间路径与安静路线。",
    outcome: "最终地图同时提供声音景观的分析视图，也邀请使用者以不同方式穿行校园。",
    tags: ["安静基础设施","声学制图","田野观察"]
  },
  "emoji-and-everything": {
    title: "Emoji 与一切", type: "数据可视化", role: "数据设计、动态设计、协作", media: "动画影像、大幅海报", tools: "After Effects、信息图形",
    lead: "一项动态研究，观察 Emoji 的使用与情绪表达如何随社交平台和时间发生变化。",
    context: "Emoji 看似通用，实际使用频率与情绪功能会随着平台、受众和时间而变化。",
    approach: "使用模式被整理为彩色比较系统，再通过动画呈现，使表达方式的变化能够被读成节奏。",
    outcome: "密集数据被转化为活跃的视觉语言，对应网络交流的速度与多重性。",
    tags: ["网络表达","平台语言","动态数据"]
  },
  "everglades-diversity": {
    title: "大沼泽地植物多样性", type: "信息设计", role: "研究、数据可视化", media: "编辑型数据海报", tools: "数据分析、平面设计",
    lead: "一幅关于佛罗里达大沼泽地植物多样性的编辑型可视化作品。",
    context: "物种数据能够描述生态丰富度，也可能掩盖使生态系统变得脆弱的关系。",
    approach: "植物类别及其分布被重新组织成清晰的比较视觉系统。",
    outcome: "一张紧凑的研究海报让生物多样性模式变得可见，同时保留数据与地点之间的联系。",
    tags: ["生态可读性","生物多样性","数据景观"]
  },
  "chinese-medicine": {
    title: "动态本草", type: "动态海报", role: "视觉系统、动画", media: "四张生成式动态海报", tools: "TouchDesigner、动态设计",
    lead: "一组动态海报，把传统中药功效转译为运动中的视觉行为。",
    context: "传统医药语言具有强烈的形象性，却很难通过常规图示完整传达。",
    approach: "四组动态研究把药性与节奏、纹理、密度和变化方式建立联系。",
    outcome: "抽象运动成为历史知识与当代视觉文化之间的一层解释媒介。",
    tags: ["身体知识","本草","生成式动态"]
  },
  "photography": {
    title: "摄影", type: "摄影", role: "摄影、编辑", media: "街头、建筑、图像伦理", tools: "数码摄影、影像编排",
    lead: "一项持续进行的摄影实践，关注人的移动、空间结构与图像伦理。",
    context: "相机在记录现场的同时，会改变观察者、被摄者与公共空间之间的关系。",
    approach: "街头场景和建筑片段被编辑为连续序列，而非彼此孤立的单张照片。",
    outcome: "这套档案成为视觉研究方法，并持续进入更广泛的设计实践。",
    tags: ["公共空间","图像伦理","空间观察"]
  }
};

const ui = {
  en: {
    home: "Home", works: "Works", about: "About", contact: "Contact", role: "Designer & Creative Technologist",
    worksCount: "10 works · 2022—24", index: "Index", selectWork: "Select a work", readingLenses: "Reading lenses",
    all: "All", embodiment: "Embodiment", language: "Language", ecology: "Ecology", care: "Care", observation: "Observation", systems: "Systems", data: "Data", imageCulture: "Image culture",
    images: "images", image: "image", autoOn: "Auto · On", autoOff: "Auto · Off", previousImage: "Previous image", nextImage: "Next image",
    originalVideo: "Original resolution · original frame rate", unsupportedVideo: "Your browser does not support this video format.",
    sourceDocument: "Source document", openDocument: "Open source document ↗", additionalMaterial: "Additional project material",
    projectIndexImage: "Project index image", movingImage: "Moving image / documentation", projectImage: "Project image",
    year: "Year", practice: "Practice", contribution: "Contribution", materialSystem: "Material / system",
    premise: "Premise", method: "Method", position: "Position", previous: "Previous", next: "Next", projectLenses: "Project lenses",
    motion01: "Motion study 01", motion02: "Motion study 02", motion03: "Motion study 03", motion04: "Motion study 04",
    langButton: "EN / 中", themeLight: "Light", themeDark: "Dark", themeSystem: "Auto"
  },
  zh: {
    home: "首页", works: "作品", about: "关于", contact: "联系", role: "设计师与创意技术实践者",
    worksCount: "10 件作品 · 2022—24", index: "索引", selectWork: "选择作品", readingLenses: "阅读视角",
    all: "全部", embodiment: "身体", language: "语言", ecology: "生态", care: "关怀", observation: "观察", systems: "系统", data: "数据", imageCulture: "图像文化",
    images: "张图片", image: "张图片", autoOn: "自动 · 开", autoOff: "自动 · 关", previousImage: "上一张", nextImage: "下一张",
    originalVideo: "原始分辨率 · 原始帧率", unsupportedVideo: "你的浏览器不支持此视频格式。",
    sourceDocument: "源文件", openDocument: "打开源文件 ↗", additionalMaterial: "其他项目材料",
    projectIndexImage: "项目索引图", movingImage: "动态影像 / 文档", projectImage: "项目图片",
    year: "年份", practice: "实践类型", contribution: "个人贡献", materialSystem: "材料 / 系统",
    premise: "背景", method: "方法", position: "结果", previous: "上一个", next: "下一个", projectLenses: "项目视角",
    motion01: "动态研究 01", motion02: "动态研究 02", motion03: "动态研究 03", motion04: "动态研究 04",
    langButton: "中 / EN", themeLight: "白天", themeDark: "黑夜", themeSystem: "跟随系统"
  }
};

const getLanguage = () => localStorage.getItem("xinran-language") === "zh" ? "zh" : "en";
let language = getLanguage();
const tx = (key) => ui[language][key] || key;
const lp = (project, key) => language === "zh" && projectZh[project.id]?.[key] != null ? projectZh[project.id][key] : project[key];
const lensKey = {
  All: "all", Embodiment: "embodiment", Language: "language", Ecology: "ecology", Care: "care",
  Observation: "observation", Systems: "systems", Data: "data", "Image culture": "imageCulture"
};
const localLens = (lens) => tx(lensKey[lens] || lens);
const sectionZh = {
  "Species / propaganda system": "物种 / 宣传系统",
  "Physical specimens / 3D-printed models": "实体样本 / 3D 打印模型",
  "Cultivation environments": "培养环境",
  "Image studies / poster material": "图像研究 / 海报素材",
  "Synthetic species / individual renders": "合成物种 / 单体渲染",
  "Field observation / acoustic sites": "田野观察 / 声音地点",
  "Spatial translation / web layouts": "空间转译 / 网页排版",
  "Final poster": "最终海报",
  "Final film / frame grammar": "最终影像 / 帧语言",
  "Street / human movement": "街头 / 人的移动",
  "Image ethics / traces of home": "图像伦理 / 家的痕迹",
  "Light as structure": "光作为结构",
  "Architecture / spatial structure": "建筑 / 空间结构",
  "Poetry / photographic sequence": "诗 / 摄影序列",
  "Sound map": "声音地图",
  "Printed foldout": "印刷折页",
  "Motion study 01": "动态研究 01",
  "Motion study 02": "动态研究 02",
  "Motion study 03": "动态研究 03",
  "Motion study 04": "动态研究 04"
};
const ls = (title) => language === "zh" ? (sectionZh[title] || title) : title;

const lensOrder = ["All", "Embodiment", "Language", "Ecology", "Care", "Observation", "Systems", "Data", "Image culture"];
const projectLenses = {
  "post-linguistic-era": ["Embodiment", "Language"],
  "signal-lag": ["Systems", "Image culture"],
  "traces-imprinted": ["Embodiment", "Observation", "Image culture"],
  "ecosyntax": ["Ecology", "Systems", "Image culture"],
  "magic-eco-box": ["Embodiment", "Ecology", "Systems"],
  "pure-land-of-sound": ["Observation", "Data", "Systems"],
  "emoji-and-everything": ["Language", "Data", "Image culture"],
  "everglades-diversity": ["Ecology", "Data", "Observation"],
  "chinese-medicine": ["Data", "Image culture"],
  "photography": ["Observation", "Image culture"]
};
projects.forEach((project) => { project.lenses = projectLenses[project.id] || []; });
let activeLens = "All";

const list = document.querySelector("#project-list");
const detail = document.querySelector("#work-detail");
const projectIndex = new Map(projects.map((project, index) => [project.id, { project, index }]));
let allImages = [];

function applyStaticLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (ui[language][key]) node.textContent = ui[language][key];
  });
  const button = document.querySelector(".lang-button");
  if (button) button.textContent = tx("langButton");
  const themeLabels = { light: tx("themeLight"), dark: tx("themeDark"), system: tx("themeSystem") };
  document.querySelectorAll("[data-theme-label]").forEach((node) => {
    node.textContent = themeLabels[node.dataset.themeLabel] || node.textContent;
  });
}

function renderIndex() {
  const currentId = location.hash.slice(1) || projects[0].id;
  const visible = activeLens === "All" ? projects : projects.filter((project) => project.lenses.includes(activeLens));
  list.innerHTML = `
    <div class="lens-key" aria-label="Content lenses">
      <span class="lens-key__label">${tx("readingLenses")}</span>
      <div class="lens-filter" role="group" aria-label="${tx("readingLenses")}">
        ${lensOrder.map((lens) => `<button type="button" data-lens="${lens}" aria-pressed="${lens === activeLens}">${localLens(lens)}</button>`).join("")}
      </div>
    </div>
    <div class="project-index-list">
      ${visible.map((project) => {
        const index = projects.indexOf(project);
        return `
          <button class="project-index-button" type="button" data-project-id="${project.id}" aria-current="${project.id === currentId}">
            <span class="num">${String(index + 1).padStart(2, "0")}</span>
            <span class="name">${lp(project, "title")}</span>
            <span class="year">${project.year}</span>
            <span class="index-tags">${lp(project, "tags").slice(0, 2).join(" · ")}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function imageMarkup(path, label, eager = false) {
  return `<img src="${mediaUrl(path)}" alt="${escapeHtml(label)}" loading="${eager ? "eager" : "lazy"}" decoding="async" />`;
}

function singleImageSection(title, path, project, eager = false) {
  return `
    <section class="media-sequence media-sequence--single">
      <header class="sequence-heading"><span>${ls(title)}</span><span>01 ${tx("image")}</span></header>
      <figure class="sequence-single">${imageMarkup(path, `${lp(project, "title")} — ${ls(title)}`, eager)}</figure>
    </section>
  `;
}

function carouselSection(title, paths, project) {
  if (!paths.length) return "";
  if (paths.length === 1) return singleImageSection(title, paths[0], project);
  const originalSlides = paths.map((path, index) => `
    <figure class="carousel-slide" data-carousel-slide data-slide-index="${index}">
      ${imageMarkup(path, `${lp(project, "title")} — ${ls(title)} — ${index + 1}`)}
      <figcaption>${String(index + 1).padStart(2, "0")} / ${String(paths.length).padStart(2, "0")}</figcaption>
    </figure>
  `).join("");
  const cloneSlides = paths.map((path, index) => `
    <figure class="carousel-slide" data-carousel-clone aria-hidden="true">
      ${imageMarkup(path, `${lp(project, "title")} — ${ls(title)} — ${index + 1}`)}
      <figcaption>${String(index + 1).padStart(2, "0")} / ${String(paths.length).padStart(2, "0")}</figcaption>
    </figure>
  `).join("");

  return `
    <section class="media-sequence media-sequence--carousel">
      <header class="sequence-heading">
        <span>${ls(title)}</span>
        <span class="sequence-actions">
          <span>${String(paths.length).padStart(2, "0")} ${tx("images")}</span>
          <button type="button" class="carousel-autoplay" data-carousel-autoplay aria-pressed="true">${tx("autoOn")}</button>
        </span>
      </header>
      <div class="carousel-shell" data-carousel-shell>
        <button class="carousel-control carousel-control--prev" type="button" aria-label="${tx("previousImage")}" data-carousel-prev>←</button>
        <div class="media-carousel" data-carousel data-original-count="${paths.length}" tabindex="0">
          ${originalSlides}${cloneSlides}
        </div>
        <button class="carousel-control carousel-control--next" type="button" aria-label="${tx("nextImage")}" data-carousel-next>→</button>
      </div>
    </section>
  `;
}

function videoSection(title, path, mime, project) {
  const poster = project.cover && !project.disableVideoPoster ? ` poster="${mediaUrl(project.cover)}"` : "";
  const portraitClass = project.portraitVideos?.has(path) ? " media-sequence--portrait-video" : "";
  return `
    <section class="media-sequence media-sequence--video${portraitClass}">
      <header class="sequence-heading"><span>${ls(title)}</span><span>${tx("originalVideo")}</span></header>
      <figure class="sequence-video">
        <video controls preload="auto" playsinline${poster} aria-label="${escapeHtml(`${lp(project, "title")} — ${ls(title)}`)}">
          <source src="${videoUrl(path)}" type="video/mp4" />
          <source src="${mediaUrl(path)}" type="${mime}" />
          ${tx("unsupportedVideo")}
        </video>
      </figure>
    </section>
  `;
}

function pairedVideoSection(items, project) {
  return `
    <section class="media-sequence media-sequence--video-pair">
      <div class="video-pair-grid">
        ${items.map(([title, path]) => {
          const poster = project.cover && !project.disableVideoPoster ? ` poster="${mediaUrl(project.cover)}"` : "";
          return `
            <figure class="sequence-video sequence-video--paired">
              <figcaption>${ls(title)}</figcaption>
              <video controls preload="auto" playsinline${poster} aria-label="${escapeHtml(`${lp(project, "title")} — ${ls(title)}`)}">
                <source src="${videoUrl(path)}" type="video/mp4" />
                <source src="${mediaUrl(path)}" type="video/quicktime" />
                ${tx("unsupportedVideo")}
              </video>
            </figure>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function documentSection(title, path, project) {
  return `
    <section class="media-sequence media-sequence--document">
      <header class="sequence-heading"><span>${ls(title)}</span><span>${tx("sourceDocument")}</span></header>
      <figure class="sequence-document">
        <object data="${mediaUrl(path)}" type="application/pdf" aria-label="${escapeHtml(`${lp(project, "title")} — ${ls(title)}`)}">
          <a href="${mediaUrl(path)}" target="_blank" rel="noreferrer">${tx("openDocument")}</a>
        </object>
      </figure>
    </section>
  `;
}

function projectImages(project) {
  if (!project.imageRoot) return [];
  return allImages.filter((path) => path.startsWith(project.imageRoot));
}

function groupedImageSections(project) {
  const sourceImages = projectImages(project);
  const used = new Set();
  const sections = [];

  for (const [title, matcher] of project.imageRules || []) {
    const matches = sourceImages.filter((path) => matcher(path));
    matches.forEach((path) => used.add(path));
    if (matches.length) sections.push(carouselSection(title, matches, project));
  }

  const unmatched = sourceImages.filter((path) => !used.has(path));
  if (!project.hideUnmatchedImages && unmatched.length) sections.push(carouselSection(tx("additionalMaterial"), unmatched, project));
  return sections.join("");
}

function mediaNarrativeMarkup(project) {
  const sections = [];
  if (project.coverDocument) sections.push(documentSection(tx("projectIndexImage"), project.coverDocument, project));
  if (project.video) sections.push(videoSection(tx("movingImage"), project.video, project.videoMime || "video/mp4", project));
  if (project.id === "chinese-medicine" && project.videos?.length === 4) {
    sections.push(videoSection(project.videos[0][0], project.videos[0][1], "video/quicktime", project));
    sections.push(pairedVideoSection(project.videos.slice(1, 3), project));
    sections.push(videoSection(project.videos[3][0], project.videos[3][1], "video/quicktime", project));
  } else {
    for (const [title, path] of project.videos || []) sections.push(videoSection(title, path, "video/quicktime", project));
  }
  sections.push(groupedImageSections(project));
  for (const path of project.extraImages || []) sections.push(singleImageSection(tx("projectImage"), path, project));
  for (const [title, path] of project.documents || []) sections.push(documentSection(title, path, project));
  return `<div class="media-narrative">${sections.join("")}</div>`;
}

function renderProject(id, updateHistory = true) {
  const match = projectIndex.get(id) || projectIndex.get(projects[0].id);
  const { project, index } = match;
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  document.querySelectorAll(".project-index-button").forEach((button) => {
    button.setAttribute("aria-current", button.dataset.projectId === project.id ? "true" : "false");
  });

  detail.innerHTML = `
    <header class="detail-heading">
      <h1>${lp(project, "title")}</h1>
      <span class="detail-number">${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span>
    </header>
    <div class="detail-lead">
      <div>
        <p class="eyebrow">${lp(project, "type")} · ${project.year}</p>
        <div class="project-tags" aria-label="${tx("projectLenses")}">${lp(project, "tags").map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
      <p>${lp(project, "lead")}</p>
    </div>
    ${mediaNarrativeMarkup(project)}
    <section class="metadata-grid" aria-label="Project metadata">
      <div class="metadata-item"><span class="metadata-label">${tx("year")}</span><span class="metadata-value">${project.year}</span></div>
      <div class="metadata-item"><span class="metadata-label">${tx("practice")}</span><span class="metadata-value">${lp(project, "type")}</span></div>
      <div class="metadata-item"><span class="metadata-label">${tx("contribution")}</span><span class="metadata-value">${lp(project, "role")}</span></div>
      <div class="metadata-item"><span class="metadata-label">${tx("materialSystem")}</span><span class="metadata-value">${lp(project, "media")}<br />${lp(project, "tools")}</span></div>
    </section>
    <section class="narrative-grid">
      <div class="narrative-block"><h2>${tx("premise")}</h2><p>${lp(project, "context")}</p></div>
      <div class="narrative-block"><h2>${tx("method")}</h2><p>${lp(project, "approach")}</p></div>
      <div class="narrative-block"><h2>${tx("position")}</h2><p>${lp(project, "outcome")}</p></div>
    </section>
    <nav class="project-pagination" aria-label="Adjacent projects">
      <button type="button" data-next-project="${previous.id}"><small>${tx("previous")}</small><span>← ${lp(previous, "title")}</span></button>
      <button type="button" data-next-project="${next.id}"><small>${tx("next")}</small><span>${lp(next, "title")} →</span></button>
    </nav>
  `;

  document.title = `${lp(project, "title")} — Xinran Zhang`;
  if (updateHistory) history.pushState({ project: project.id }, "", `#${project.id}`);
  bindDetailInteractions();
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
}

function bindDetailInteractions() {
  detail.querySelectorAll("[data-next-project]").forEach((button) => {
    button.addEventListener("click", () => {
      renderProject(button.dataset.nextProject);
    });
  });

  detail.querySelectorAll("[data-carousel-shell]").forEach((shell) => {
    const rail = shell.querySelector("[data-carousel]");
    const originals = [...rail.querySelectorAll("[data-carousel-slide]")];
    const autoButton = shell.closest(".media-sequence")?.querySelector("[data-carousel-autoplay]");
    let autoEnabled = true;
    let pauseUntil = 0;
    let lastFrame = performance.now();
    let cycleWidth = 0;
    let autoPosition = rail.scrollLeft;

    const measureCycle = () => {
      const firstClone = rail.querySelector("[data-carousel-clone]");
      if (firstClone && originals[0]) cycleWidth = firstClone.offsetLeft - originals[0].offsetLeft;
    };

    const normalise = () => {
      if (!cycleWidth) measureCycle();
      if (cycleWidth > 0 && rail.scrollLeft >= cycleWidth) {
        rail.scrollLeft -= cycleWidth;
        autoPosition = rail.scrollLeft;
      }
    };

    const nearestOriginalIndex = () => {
      normalise();
      const x = rail.scrollLeft;
      let nearest = 0;
      let distance = Infinity;
      originals.forEach((slide, index) => {
        const d = Math.abs(slide.offsetLeft - x);
        if (d < distance) {
          distance = d;
          nearest = index;
        }
      });
      return nearest;
    };

    const stepOne = (direction) => {
      if (!originals.length) return;
      measureCycle();
      const current = nearestOriginalIndex();
      let target = null;

      if (direction > 0 && current === originals.length - 1) {
        target = rail.querySelector("[data-carousel-clone]");
      } else if (direction < 0 && current === 0) {
        rail.scrollLeft += cycleWidth;
        target = originals[originals.length - 1];
      } else {
        target = originals[current + direction];
      }

      target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      pauseUntil = performance.now() + 1800;
      window.setTimeout(() => { autoPosition = rail.scrollLeft; }, 900);
    };

    shell.querySelector("[data-carousel-prev]")?.addEventListener("click", () => stepOne(-1));
    shell.querySelector("[data-carousel-next]")?.addEventListener("click", () => stepOne(1));

    autoButton?.addEventListener("click", () => {
      autoEnabled = !autoEnabled;
      autoButton.setAttribute("aria-pressed", String(autoEnabled));
      autoButton.textContent = autoEnabled ? tx("autoOn") : tx("autoOff");
      lastFrame = performance.now();
    });

    rail.addEventListener("pointerdown", () => { pauseUntil = performance.now() + 2200; });
    rail.addEventListener("wheel", () => { pauseUntil = performance.now() + 1200; }, { passive: true });
    new ResizeObserver(measureCycle).observe(rail);
    requestAnimationFrame(() => { measureCycle(); normalise(); });

    const tick = (now) => {
      const dt = Math.min(40, now - lastFrame);
      lastFrame = now;
      if (autoEnabled && now >= pauseUntil && !document.hidden) {
        autoPosition += dt * 0.028;
        rail.scrollLeft = autoPosition;
        normalise();
      } else {
        autoPosition = rail.scrollLeft;
      }
      if (rail.isConnected) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

async function initialise() {
  renderIndex();
  try {
    const response = await fetch("/media-index.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Media index ${response.status}`);
    const index = await response.json();
    allImages = index.images || [];
  } catch (error) {
    console.error("Could not load project media index", error);
  }

  renderProject(location.hash.slice(1) || projects[0].id, false);
}

list.addEventListener("click", (event) => {
  const lensButton = event.target.closest("[data-lens]");
  if (lensButton) {
    activeLens = lensButton.dataset.lens;
    renderIndex();
    return;
  }

  const button = event.target.closest("[data-project-id]");
  if (!button) return;
  renderProject(button.dataset.projectId);
});

document.querySelector(".lang-button")?.addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  localStorage.setItem("xinran-language", language);
  applyStaticLanguage();
  renderIndex();
  renderProject(location.hash.slice(1) || projects[0].id, false);
});

window.addEventListener("popstate", () => renderProject(location.hash.slice(1), false));
applyStaticLanguage();
initialise();
