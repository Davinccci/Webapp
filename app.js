const questions = [
  {
    text: "你更偏好的生活节奏是？",
    options: [
      { label: "快节奏，高效率", tags: ["fast", "modern", "metro"] },
      { label: "慢节奏，松弛感", tags: ["slow", "relax", "walk"] },
      { label: "适中，有秩序", tags: ["balanced", "culture", "scenic"] }
    ]
  },
  {
    text: "理想的城市气候是？",
    options: [
      { label: "温暖湿润，靠近海风", tags: ["coastal", "warm", "humid"] },
      { label: "四季分明，秋冬偏冷", tags: ["cold", "history", "seasonal"] },
      { label: "四季如春，阳光充足", tags: ["mild", "sunny", "nature"] }
    ]
  },
  {
    text: "周末你更想做什么？",
    options: [
      { label: "城市漫步 + 咖啡小店", tags: ["walk", "art", "slow"] },
      { label: "夜生活 + 演出派对", tags: ["nightlife", "fast", "modern"] },
      { label: "山水风景 + 轻徒步", tags: ["nature", "mountain", "scenic"] }
    ]
  },
  {
    text: "你更看重城市的哪一面？",
    options: [
      { label: "历史文化底蕴", tags: ["history", "culture", "ancient"] },
      { label: "创新科技与产业", tags: ["tech", "modern", "business"] },
      { label: "美食与生活舒适度", tags: ["food", "relax", "slow"] }
    ]
  },
  {
    text: "你更偏好的居住环境？",
    options: [
      { label: "滨海城市，空气清新", tags: ["coastal", "sea", "breeze"] },
      { label: "内陆城市，生活稳定", tags: ["inland", "balanced", "culture"] },
      { label: "岛屿或度假感", tags: ["island", "beach", "relax"] }
    ]
  },
  {
    text: "预算和生活方式倾向？",
    options: [
      { label: "高投入，追求资源密度", tags: ["premium", "fast", "metro"] },
      { label: "中等支出，性价比", tags: ["balanced", "food", "walk"] },
      { label: "低压生活，轻消费", tags: ["slow", "relax", "budget"] }
    ]
  }
];

const cities = [
  { name: "上海", tags: ["coastal", "modern", "fast", "nightlife", "shopping", "business", "metro", "humid"] },
  { name: "北京", tags: ["history", "culture", "fast", "cold", "museum", "metro", "ancient"] },
  { name: "成都", tags: ["food", "slow", "culture", "inland", "tea", "relax"] },
  { name: "杭州", tags: ["lake", "scenic", "tech", "mild", "slow", "culture", "walk"] },
  { name: "深圳", tags: ["modern", "fast", "coastal", "tech", "innovative", "warm", "business"] },
  { name: "厦门", tags: ["coastal", "slow", "art", "mild", "island", "walk", "breeze"] },
  { name: "昆明", tags: ["mild", "nature", "slow", "mountain", "sunny", "budget"] },
  { name: "哈尔滨", tags: ["cold", "winter", "ice", "culture", "history", "seasonal"] },
  { name: "西安", tags: ["history", "culture", "food", "inland", "ancient"] },
  { name: "青岛", tags: ["coastal", "beer", "mild", "walk", "history", "breeze"] },
  { name: "三亚", tags: ["tropical", "coastal", "beach", "relax", "sunny", "warm", "island"] },
  { name: "重庆", tags: ["mountain", "food", "nightlife", "fast", "inland"] }
];

const state = {
  step: 0,
  answers: new Map()
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const stepIndicator = document.getElementById("stepIndicator");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resultsSection = document.getElementById("results");
const resultGrid = document.getElementById("resultGrid");
const restartBtn = document.getElementById("restartBtn");

const totalSteps = questions.length;

const renderQuestion = () => {
  const question = questions[state.step];
  questionEl.textContent = question.text;
  stepIndicator.textContent = `问题 ${state.step + 1} / ${totalSteps}`;
  progressBar.style.width = `${((state.step + 1) / totalSteps) * 100}%`;

  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${state.step}`;
    input.value = index;
    if (state.answers.get(state.step) === index) {
      input.checked = true;
      label.classList.add("option--active");
    }

    input.addEventListener("change", () => {
      state.answers.set(state.step, index);
      document.querySelectorAll(".option").forEach((optionEl) => {
        optionEl.classList.remove("option--active");
      });
      label.classList.add("option--active");
    });

    const text = document.createElement("span");
    text.textContent = option.label;

    label.appendChild(input);
    label.appendChild(text);
    optionsEl.appendChild(label);
  });

  prevBtn.disabled = state.step === 0;
  nextBtn.textContent = state.step === totalSteps - 1 ? "查看结果" : "下一步";
};

const computeResults = () => {
  const selectedTags = [];
  state.answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex].options[optionIndex];
    selectedTags.push(...option.tags);
  });

  const scores = cities.map((city) => {
    const matched = city.tags.filter((tag) => selectedTags.includes(tag));
    return {
      name: city.name,
      score: matched.length,
      matched
    };
  });

  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};

const renderResults = () => {
  resultGrid.innerHTML = "";
  const topMatches = computeResults();
  topMatches.forEach((result, index) => {
    const card = document.createElement("div");
    card.className = "result-card";
    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${result.name}`;
    const score = document.createElement("div");
    score.className = "result-score";
    score.textContent = `匹配度 ${result.score}`;

    const tags = document.createElement("div");
    tags.className = "tags";
    result.matched.slice(0, 6).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });

    card.appendChild(title);
    card.appendChild(score);
    card.appendChild(tags);
    resultGrid.appendChild(card);
  });

  resultsSection.classList.add("active");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

nextBtn.addEventListener("click", () => {
  if (!state.answers.has(state.step)) {
    nextBtn.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 300, iterations: 1 }
    );
    return;
  }

  if (state.step < totalSteps - 1) {
    state.step += 1;
    renderQuestion();
  } else {
    renderResults();
  }
});

prevBtn.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  state.step = 0;
  state.answers.clear();
  resultsSection.classList.remove("active");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuestion();
