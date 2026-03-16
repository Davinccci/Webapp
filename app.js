const dimensions = [
  { key: "pace", label: "节奏" },
  { key: "climate", label: "气候" },
  { key: "culture", label: "文化" },
  { key: "food", label: "美食" },
  { key: "cost", label: "成本" },
  { key: "nature", label: "自然" }
];

const tagLabels = {
  ancient: "古城底蕴",
  art: "艺术氛围",
  balanced: "平衡感",
  beach: "海滩生活",
  beer: "休闲社交",
  breeze: "通风舒适",
  budget: "低生活压力",
  business: "职业机会",
  clear: "空气清透",
  coastal: "滨海气质",
  cold: "偏冷气候",
  college: "年轻学术感",
  culture: "文化体验",
  dry: "干爽天气",
  fast: "高效节奏",
  flex: "弹性生活",
  food: "美食密度",
  garden: "园林审美",
  history: "历史感",
  humid: "湿润体感",
  ice: "冬季特色",
  inland: "稳定日常",
  innovative: "创新氛围",
  island: "度假感",
  lake: "湖景生活",
  metro: "城市便利度",
  mild: "温和气候",
  modern: "现代都市感",
  mountain: "山景户外",
  museum: "展馆资源",
  nature: "自然亲近感",
  nightlife: "夜生活",
  premium: "资源密度",
  quality: "生活品质",
  quiet: "安静独处",
  relax: "松弛感",
  river: "江河景观",
  scenic: "风景值",
  sea: "海边生活",
  seasonal: "四季分明",
  shopping: "商业配套",
  slow: "慢生活",
  space: "空间感",
  sunny: "日照充足",
  tea: "休闲社交",
  tech: "科技产业",
  tropical: "热带氛围",
  walk: "步行友好",
  warm: "温暖体感",
  water: "临水氛围",
  winter: "冬日体验"
};

const questions = [
  {
    text: "你更偏好的生活节奏是？",
    options: [
      { label: "快节奏，高效率", tags: ["fast", "modern", "metro"] },
      { label: "慢节奏，松弛感", tags: ["slow", "relax", "walk"] },
      { label: "适中，有秩序", tags: ["balanced", "culture", "scenic"] },
      { label: "喜欢偶尔冲刺，平时轻松", tags: ["flex", "modern", "relax"] }
    ]
  },
  {
    text: "理想的城市气候是？",
    options: [
      { label: "温暖湿润，靠近海风", tags: ["coastal", "warm", "humid"] },
      { label: "四季分明，秋冬偏冷", tags: ["cold", "history", "seasonal"] },
      { label: "四季如春，阳光充足", tags: ["mild", "sunny", "nature"] },
      { label: "干爽清透，降雨不多", tags: ["dry", "clear", "sunny"] }
    ]
  },
  {
    text: "周末你更想做什么？",
    options: [
      { label: "城市漫步 + 咖啡小店", tags: ["walk", "art", "slow"] },
      { label: "夜生活 + 演出派对", tags: ["nightlife", "fast", "modern"] },
      { label: "山水风景 + 轻徒步", tags: ["nature", "mountain", "scenic"] },
      { label: "展馆市集 + 文化体验", tags: ["culture", "museum", "art"] }
    ]
  },
  {
    text: "你更看重城市的哪一面？",
    options: [
      { label: "历史文化底蕴", tags: ["history", "culture", "ancient"] },
      { label: "创新科技与产业", tags: ["tech", "modern", "business"] },
      { label: "美食与生活舒适度", tags: ["food", "relax", "slow"] },
      { label: "生活效率与便利度", tags: ["metro", "fast", "shopping"] }
    ]
  },
  {
    text: "你更偏好的居住环境？",
    options: [
      { label: "滨海城市，空气清新", tags: ["coastal", "sea", "breeze"] },
      { label: "内陆城市，生活稳定", tags: ["inland", "balanced", "culture"] },
      { label: "岛屿或度假感", tags: ["island", "beach", "relax"] },
      { label: "山城或丘陵，景观丰富", tags: ["mountain", "scenic", "nature"] }
    ]
  },
  {
    text: "你的工作与通勤偏好？",
    options: [
      { label: "高密度中心区，通勤快", tags: ["metro", "fast", "business"] },
      { label: "多中心城市，步行友好", tags: ["walk", "balanced", "culture"] },
      { label: "远程或弹性，空间更重要", tags: ["relax", "space", "slow"] },
      { label: "靠近产业园或科技区", tags: ["tech", "modern", "inland"] }
    ]
  },
  {
    text: "你的社交与生活方式？",
    options: [
      { label: "圈层丰富，社交密集", tags: ["nightlife", "fast", "metro"] },
      { label: "熟人友好，氛围温和", tags: ["relax", "slow", "culture"] },
      { label: "兴趣社群多，活动充足", tags: ["art", "culture", "modern"] },
      { label: "更喜欢独处与自然", tags: ["nature", "walk", "quiet"] }
    ]
  },
  {
    text: "预算和生活方式倾向？",
    options: [
      { label: "高投入，追求资源密度", tags: ["premium", "fast", "metro"] },
      { label: "中等支出，性价比", tags: ["balanced", "food", "walk"] },
      { label: "低压生活，轻消费", tags: ["slow", "relax", "budget"] },
      { label: "追求空间感与生活品质", tags: ["space", "nature", "quality"] }
    ]
  },
  {
    text: "如果选一个理想晨间场景，你更偏向？",
    options: [
      { label: "地铁穿梭，快速进入状态", tags: ["metro", "fast", "business"] },
      { label: "阳光洒进房间，慢慢吃早饭", tags: ["slow", "relax", "sunny"] },
      { label: "沿河沿海散步，城市慢慢醒来", tags: ["walk", "coastal", "breeze"] },
      { label: "楼下就是咖啡馆和展览空间", tags: ["art", "culture", "modern"] }
    ]
  },
  {
    text: "你更喜欢什么样的城市景观？",
    options: [
      { label: "高楼天际线，现代感拉满", tags: ["modern", "metro", "fast"] },
      { label: "古建街区，越逛越有味道", tags: ["history", "culture", "ancient"] },
      { label: "山海湖河，随手就是风景", tags: ["nature", "scenic", "mountain"] },
      { label: "街巷烟火，日常感最动人", tags: ["food", "relax", "balanced"] }
    ]
  },
  {
    text: "理想中的夜晚氛围更像哪一种？",
    options: [
      { label: "灯火通明，活动不断", tags: ["nightlife", "modern", "fast"] },
      { label: "好友小聚，边吃边聊", tags: ["food", "relax", "tea"] },
      { label: "安静散步，早点回家", tags: ["quiet", "walk", "slow"] },
      { label: "演出展览，文化活动丰富", tags: ["culture", "art", "museum"] }
    ]
  },
  {
    text: "对于城市规模，你更在意哪种体验？",
    options: [
      { label: "超大城市，机会密度第一", tags: ["metro", "business", "premium"] },
      { label: "大而不挤，功能齐全就好", tags: ["balanced", "modern", "walk"] },
      { label: "小而美，舒服比热闹重要", tags: ["slow", "relax", "quality"] },
      { label: "靠自然吃饭，城市只是背景", tags: ["nature", "mountain", "scenic"] }
    ]
  },
  {
    text: "面对吃这件事，你属于哪一派？",
    options: [
      { label: "餐厅选择越多越幸福", tags: ["food", "metro", "modern"] },
      { label: "爱本地老店和街边小馆", tags: ["food", "history", "culture"] },
      { label: "吃得健康清爽更重要", tags: ["mild", "nature", "quality"] },
      { label: "有特色夜宵才算完整", tags: ["food", "nightlife", "relax"] }
    ]
  },
  {
    text: "你对工作机会和成长空间的态度是？",
    options: [
      { label: "想要更卷一点，但机会要多", tags: ["fast", "business", "tech"] },
      { label: "稳定上升，别太消耗自己", tags: ["balanced", "business", "inland"] },
      { label: "工作只是生活的一部分", tags: ["slow", "relax", "space"] },
      { label: "希望创意和表达空间更大", tags: ["art", "culture", "modern"] }
    ]
  },
  {
    text: "你更容易被哪类城市气质吸引？",
    options: [
      { label: "先锋感，大家都往前冲", tags: ["modern", "tech", "innovative"] },
      { label: "文脉感，越住越有故事", tags: ["history", "culture", "museum"] },
      { label: "度假感，像天天在放松", tags: ["island", "beach", "relax"] },
      { label: "宜居感，过日子特别顺", tags: ["balanced", "walk", "quality"] }
    ]
  },
  {
    text: "如果长期定居，你最不能妥协的是？",
    options: [
      { label: "通勤和办事效率", tags: ["fast", "metro", "shopping"] },
      { label: "自然环境和呼吸感", tags: ["nature", "breeze", "scenic"] },
      { label: "文化内容和精神食粮", tags: ["culture", "art", "history"] },
      { label: "生活成本别太紧绷", tags: ["budget", "balanced", "slow"] }
    ]
  }
];

const cities = [
  {
    name: "上海",
    tags: ["coastal", "modern", "fast", "nightlife", "shopping", "business", "metro", "humid"],
    profile: { pace: 9, climate: 6, culture: 7, food: 8, cost: 3, nature: 4 },
    desc: "国际化资源密集，效率高，生活方式多元。"
  },
  {
    name: "北京",
    tags: ["history", "culture", "fast", "cold", "museum", "metro", "ancient"],
    profile: { pace: 8, climate: 5, culture: 10, food: 7, cost: 4, nature: 6 },
    desc: "历史底蕴深厚，公共资源丰富，文化体验浓。"
  },
  {
    name: "广州",
    tags: ["coastal", "food", "business", "warm", "nightlife", "modern"],
    profile: { pace: 7, climate: 8, culture: 7, food: 10, cost: 5, nature: 5 },
    desc: "务实开放，烟火气重，美食体验一流。"
  },
  {
    name: "深圳",
    tags: ["modern", "fast", "coastal", "tech", "innovative", "warm", "business"],
    profile: { pace: 9, climate: 7, culture: 6, food: 7, cost: 4, nature: 6 },
    desc: "创新动能强，成长机会多，节奏快。"
  },
  {
    name: "杭州",
    tags: ["lake", "scenic", "tech", "mild", "slow", "culture", "walk"],
    profile: { pace: 6, climate: 7, culture: 8, food: 7, cost: 5, nature: 9 },
    desc: "山水与科技共存，节奏适中，宜居度高。"
  },
  {
    name: "苏州",
    tags: ["culture", "garden", "slow", "water", "walk", "scenic"],
    profile: { pace: 5, climate: 7, culture: 9, food: 7, cost: 6, nature: 8 },
    desc: "江南园林气质，生活精致而从容。"
  },
  {
    name: "南京",
    tags: ["history", "culture", "balanced", "inland", "college"],
    profile: { pace: 6, climate: 6, culture: 9, food: 7, cost: 6, nature: 7 },
    desc: "历史与现代并存，生活节奏平衡。"
  },
  {
    name: "成都",
    tags: ["food", "slow", "culture", "inland", "tea", "relax"],
    profile: { pace: 4, climate: 6, culture: 8, food: 10, cost: 7, nature: 6 },
    desc: "松弛感强，美食丰富，生活舒适。"
  },
  {
    name: "重庆",
    tags: ["mountain", "food", "nightlife", "fast", "inland"],
    profile: { pace: 7, climate: 6, culture: 7, food: 9, cost: 7, nature: 7 },
    desc: "立体山城，热情鲜活，夜生活旺盛。"
  },
  {
    name: "武汉",
    tags: ["river", "inland", "college", "food", "balanced"],
    profile: { pace: 6, climate: 6, culture: 7, food: 8, cost: 6, nature: 6 },
    desc: "江河交汇，通达度高，生活成本适中。"
  },
  {
    name: "长沙",
    tags: ["food", "nightlife", "culture", "relax", "inland"],
    profile: { pace: 6, climate: 7, culture: 7, food: 9, cost: 7, nature: 5 },
    desc: "烟火气十足，年轻活力与美食并存。"
  },
  {
    name: "西安",
    tags: ["history", "culture", "food", "inland", "ancient"],
    profile: { pace: 5, climate: 5, culture: 10, food: 8, cost: 7, nature: 6 },
    desc: "古城氛围浓厚，文化体验丰富。"
  },
  {
    name: "天津",
    tags: ["history", "coastal", "culture", "balanced", "food"],
    profile: { pace: 5, climate: 6, culture: 8, food: 7, cost: 6, nature: 5 },
    desc: "生活节奏稳，城市格局舒展。"
  },
  {
    name: "青岛",
    tags: ["coastal", "beer", "mild", "walk", "history", "breeze"],
    profile: { pace: 5, climate: 7, culture: 7, food: 7, cost: 6, nature: 7 },
    desc: "海风与欧式街区交织，宜居舒适。"
  },
  {
    name: "厦门",
    tags: ["coastal", "slow", "art", "mild", "island", "walk", "breeze"],
    profile: { pace: 4, climate: 8, culture: 7, food: 7, cost: 5, nature: 8 },
    desc: "海岛气质浓，生活节奏舒缓。"
  },
  {
    name: "大连",
    tags: ["coastal", "breeze", "history", "mild", "walk"],
    profile: { pace: 5, climate: 7, culture: 7, food: 7, cost: 6, nature: 7 },
    desc: "北方滨海城市，清爽宜居。"
  },
  {
    name: "昆明",
    tags: ["mild", "nature", "slow", "mountain", "sunny", "budget"],
    profile: { pace: 4, climate: 9, culture: 6, food: 7, cost: 8, nature: 9 },
    desc: "气候舒适，生活成本友好，自然资源丰富。"
  },
  {
    name: "丽江",
    tags: ["nature", "slow", "culture", "mountain", "scenic"],
    profile: { pace: 3, climate: 7, culture: 7, food: 6, cost: 7, nature: 10 },
    desc: "自然风光突出，适合慢生活。"
  },
  {
    name: "三亚",
    tags: ["tropical", "coastal", "beach", "relax", "sunny", "warm", "island"],
    profile: { pace: 4, climate: 9, culture: 5, food: 7, cost: 4, nature: 9 },
    desc: "海岛度假感强，阳光充足。"
  },
  {
    name: "哈尔滨",
    tags: ["cold", "winter", "ice", "culture", "history", "seasonal"],
    profile: { pace: 5, climate: 3, culture: 8, food: 7, cost: 7, nature: 6 },
    desc: "冬季特色突出，城市氛围独特。"
  }
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
const topCityName = document.getElementById("topCityName");
const topCityDesc = document.getElementById("topCityDesc");
const topCityMeta = document.getElementById("topCityMeta");
const userAnalysis = document.getElementById("userAnalysis");
const cityAnalysis = document.getElementById("cityAnalysis");
const radarChart = document.getElementById("radarChart");
const toggleMatchesBtn = document.getElementById("toggleMatchesBtn");
const questionCount = document.getElementById("questionCount");
const cityCount = document.getElementById("cityCount");
const selectionHint = document.getElementById("selectionHint");
const userKeywordTags = document.getElementById("userKeywordTags");
const matchReasons = document.getElementById("matchReasons");

const totalSteps = questions.length;
let analysisRequestId = 0;
const analysisCache = new Map();

const updateCounts = () => {
  if (questionCount) {
    questionCount.textContent = `${questions.length} 个问题`;
  }
  if (cityCount) {
    cityCount.textContent = `${cities.length} 座候选城市`;
  }
};

const getSelectedTags = () => {
  const selectedTags = [];
  state.answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex].options[optionIndex];
    selectedTags.push(...option.tags);
  });
  return selectedTags;
};

const buildUserProfile = () => {
  const profile = {
    pace: 5,
    climate: 5,
    culture: 5,
    food: 5,
    cost: 5,
    nature: 5
  };

  const weights = {
    fast: { pace: 2 },
    slow: { pace: -2 },
    balanced: { pace: 1 },
    relax: { pace: -1, nature: 1 },
    metro: { pace: 1 },
    modern: { pace: 1 },
    nightlife: { pace: 1 },
    culture: { culture: 2 },
    history: { culture: 2 },
    museum: { culture: 1 },
    art: { culture: 1 },
    food: { food: 2 },
    budget: { cost: 2 },
    premium: { cost: -2 },
    coastal: { climate: 1, nature: 1 },
    warm: { climate: 1 },
    cold: { climate: -1 },
    mild: { climate: 2 },
    sunny: { climate: 1, nature: 1 },
    nature: { nature: 2 },
    mountain: { nature: 2 },
    beach: { nature: 2 },
    scenic: { nature: 1, culture: 1 },
    walk: { pace: -1 },
    business: { pace: 1 },
    tech: { pace: 1 },
    space: { cost: 1, nature: 1 },
    shopping: { pace: 1 },
    island: { nature: 2, climate: 1 },
    inland: { climate: -1 },
    dry: { climate: -1 },
    clear: { climate: 1 }
  };

  state.answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex].options[optionIndex];
    option.tags.forEach((tag) => {
      const delta = weights[tag];
      if (!delta) {
        return;
      }

      Object.entries(delta).forEach(([key, value]) => {
        profile[key] += value;
      });
    });
  });

  Object.keys(profile).forEach((key) => {
    profile[key] = Math.max(1, Math.min(10, profile[key]));
  });

  return profile;
};

const buildMetaTags = (profile) => {
  const entries = dimensions.map((dimension) => ({
    label: dimension.label,
    value: profile[dimension.key]
  }));

  const sorted = [...entries].sort((a, b) => b.value - a.value);
  const strengths = sorted.slice(0, 2).map((item) => `${item.label}强`);
  const weaknesses = sorted.slice(-2).map((item) => `${item.label}弱`);
  return [...strengths, ...weaknesses];
};

const getTopTagLabels = (tags, limit = 6) => {
  const frequency = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tagLabels[tag] || tag);
};

const calculateProfileSimilarity = (userProfile, cityProfile) => {
  const totalDifference = dimensions.reduce((sum, dimension) => {
    return sum + Math.abs(userProfile[dimension.key] - cityProfile[dimension.key]);
  }, 0);
  const maxDifference = dimensions.length * 9;
  return 1 - totalDifference / maxDifference;
};

const calculateTagMatchRate = (selectedTags, cityTags) => {
  if (!selectedTags.length) {
    return 0;
  }

  const tagFrequency = selectedTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const weightedMatches = cityTags.reduce((sum, tag) => sum + (tagFrequency[tag] || 0), 0);
  return Math.min(1, weightedMatches / selectedTags.length);
};

const buildMatchReasons = (userProfile, city, matchedTags, profileSimilarity) => {
  const topUserNeeds = buildMetaTags(userProfile).slice(0, 2).join("、");
  const topCityStrengths = buildMetaTags(city.profile).slice(0, 2).join("、");
  const tradeoffDimension = buildMetaTags(city.profile).slice(2).join("、");
  const keywordLabels = getTopTagLabels(matchedTags, 3);

  return [
    keywordLabels.length
      ? `你的选择和 ${city.name} 重合最多的是 ${keywordLabels.join("、")}。`
      : `${city.name} 的标签重合不算多，但画像维度比较贴近。`,
    `画像相似度约 ${Math.round(profileSimilarity * 100)}%，你在意的 ${topUserNeeds}，它在 ${topCityStrengths} 上也给得出来。`,
    `需要权衡的是 ${tradeoffDimension}，更适合接受“优点明显、短板可管理”的城市选择。`
  ];
};

const computeResults = () => {
  const selectedTags = getSelectedTags();
  const tagFrequency = selectedTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const userProfile = buildUserProfile();

  return cities
    .map((city) => {
      const matched = city.tags.filter((tag) => tagFrequency[tag]);
      const tagMatchRate = calculateTagMatchRate(selectedTags, city.tags);
      const profileSimilarity = calculateProfileSimilarity(userProfile, city.profile);
      const matchRate = Math.round(tagMatchRate * 45 + profileSimilarity * 55);

      return {
        city,
        score: matchRate,
        matchRate,
        tagMatchRate,
        matched,
        profileSimilarity,
        reasons: buildMatchReasons(userProfile, city, matched, profileSimilarity)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};

const setSelectionHint = () => {
  if (!selectionHint) {
    return;
  }

  selectionHint.textContent = state.answers.has(state.step)
    ? "已记录本题选择，可以继续下一题。"
    : "请选择一个最符合你的选项。";
};

const selectOption = (questionIndex, optionIndex, label) => {
  state.answers.set(questionIndex, optionIndex);
  document.querySelectorAll(".option").forEach((optionEl) => {
    optionEl.classList.remove("option--active");
  });
  label.classList.add("option--active");
  setSelectionHint();
};

const renderQuestion = () => {
  const question = questions[state.step];
  const progress = Math.round(((state.step + 1) / totalSteps) * 100);

  questionEl.textContent = question.text;
  stepIndicator.textContent = `问题 ${state.step + 1} / ${totalSteps}`;
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute("aria-valuenow", String(progress));

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

    const activateOption = () => {
      input.checked = true;
      selectOption(state.step, index, label);
    };

    input.addEventListener("change", activateOption);
    label.addEventListener("click", () => {
      activateOption();
    });

    const text = document.createElement("span");
    text.textContent = option.label;

    label.appendChild(input);
    label.appendChild(text);
    optionsEl.appendChild(label);
  });

  prevBtn.disabled = state.step === 0;
  nextBtn.textContent = state.step === totalSteps - 1 ? "查看结果" : "下一步";
  setSelectionHint();
};

const renderRadar = (cityProfile, userProfile) => {
  if (!radarChart) {
    return;
  }

  const size = 320;
  const dpr = window.devicePixelRatio || 1;
  radarChart.width = size * dpr;
  radarChart.height = size * dpr;
  radarChart.style.width = `${size}px`;
  radarChart.style.height = `${size}px`;

  const ctx = radarChart.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const center = size / 2;
  const radius = size * 0.32;
  const axisCount = dimensions.length;

  ctx.strokeStyle = "rgba(31, 42, 46, 0.12)";
  ctx.lineWidth = 1;

  for (let level = 1; level <= 4; level += 1) {
    const levelRadius = (radius * level) / 4;
    ctx.beginPath();
    for (let i = 0; i < axisCount; i += 1) {
      const angle = (Math.PI * 2 * i) / axisCount - Math.PI / 2;
      const x = center + Math.cos(angle) * levelRadius;
      const y = center + Math.sin(angle) * levelRadius;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.stroke();
  }

  dimensions.forEach((dimension, index) => {
    const angle = (Math.PI * 2 * index) / axisCount - Math.PI / 2;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.fillStyle = "#5a6a70";
    ctx.font = "12px 'Source Han Serif SC', serif";
    const labelX = center + Math.cos(angle) * (radius + 14);
    const labelY = center + Math.sin(angle) * (radius + 14);
    ctx.fillText(dimension.label, labelX - 10, labelY + 4);
  });

  const drawPolygon = (profile, fill, stroke) => {
    ctx.beginPath();
    dimensions.forEach((dimension, index) => {
      const value = profile[dimension.key] / 10;
      const angle = (Math.PI * 2 * index) / axisCount - Math.PI / 2;
      const x = center + Math.cos(angle) * radius * value;
      const y = center + Math.sin(angle) * radius * value;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  drawPolygon(cityProfile, "rgba(50, 182, 179, 0.28)", "rgba(18, 155, 124, 0.9)");
  drawPolygon(userProfile, "rgba(255, 179, 77, 0.28)", "rgba(255, 111, 97, 0.9)");
};

const buildAnalysisText = (userProfile, cityProfile) => {
  const userMeta = buildMetaTags(userProfile);
  const cityMeta = buildMetaTags(cityProfile);
  const strongestUser = userMeta.slice(0, 2).join("、");
  const weakestUser = userMeta.slice(2).join("、");
  const strongestCity = cityMeta.slice(0, 2).join("、");
  const weakestCity = cityMeta.slice(2).join("、");
  return {
    user: `你的偏好雷达显示，${strongestUser}是你的“加分项”主场，你对这些体验更敏感，也更愿意为它们腾出预算和时间。相对来说，${weakestUser}排在后面，说明这几项对你而言属于“锦上添花”，有固然好，但不是刚需。整体看，你是那种愿意把生活过得顺滑、体感舒服、且有一点点仪式感的人。`,
    city: `这座城市在${strongestCity}上的表现很亮眼，等于把你喜欢的部分摆在了桌面正中间；日常体验更容易被你感知到，也更容易形成“这城市懂我”的直觉。另一方面，${weakestCity}相对弱一点，意味着你可能需要在这些方面做些取舍，或通过生活方式的小调整来补位。总体来说，它更像是一位合拍的搭子，优点明显、短板可控。`
  };
};

const setAnalysisText = (userText, cityText) => {
  if (userAnalysis) {
    userAnalysis.textContent = userText;
  }
  if (cityAnalysis) {
    cityAnalysis.textContent = cityText;
  }
};

const renderUserKeywords = (tags) => {
  if (!userKeywordTags) {
    return;
  }

  userKeywordTags.innerHTML = "";
  tags.forEach((label) => {
    const span = document.createElement("span");
    span.textContent = label;
    userKeywordTags.appendChild(span);
  });
};

const renderMatchReasons = (reasons) => {
  if (!matchReasons) {
    return;
  }

  matchReasons.innerHTML = "";
  reasons.forEach((reason) => {
    const item = document.createElement("li");
    item.textContent = reason;
    matchReasons.appendChild(item);
  });
};

const fetchAnalysis = async (userProfile, city, signal) => {
  const selectedTags = getSelectedTags();
  const userKeywords = getTopTagLabels(selectedTags, 6);
  const matchReasons = buildMatchReasons(
    userProfile,
    city,
    city.tags.filter((tag) => selectedTags.includes(tag)),
    calculateProfileSimilarity(userProfile, city.profile)
  );
  const apiUrl = new URL("./api/analyze", window.location.href);

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({
      userProfile,
      cityProfile: city.profile,
      cityName: city.name,
      cityDesc: city.desc,
      userKeywords,
      matchReasons
    })
  });

  if (!response.ok) {
    throw new Error("analysis failed");
  }

  return response.json();
};

const fetchAnalysisWithRetry = async (userProfile, city) => {
  let lastError;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const result = await fetchAnalysis(userProfile, city, controller.signal);
      clearTimeout(timeoutId);
      return result;
    } catch (error) {
      clearTimeout(timeoutId);
      lastError = error;
      if (attempt === 2) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  }

  throw lastError;
};

const updateAnalysis = async (match, userProfile) => {
  const cacheKey = match.city.name;
  const cached = analysisCache.get(cacheKey);
  const requestId = ++analysisRequestId;

  setAnalysisText("正在生成你的个性解读...", "正在生成城市画像解读...");
  renderUserKeywords(["正在生成偏好关键词..."]);
  renderMatchReasons(["正在生成匹配理由...", "请稍候，AI 正在整理你的偏好。", "马上就好。"]);

  if (cached) {
    setAnalysisText(cached.userAnalysis, cached.cityAnalysis);
    renderUserKeywords(cached.userKeywords);
    renderMatchReasons(cached.matchReasons);
    return;
  }

  const fallback = buildAnalysisText(userProfile, match.city.profile);
  const fallbackKeywords = getTopTagLabels(getSelectedTags(), 6);
  const fallbackReasons = match.reasons;

  try {
    const result = await fetchAnalysisWithRetry(userProfile, match.city);
    if (requestId !== analysisRequestId) {
      return;
    }

    const userText = result.userAnalysis || fallback.user;
    const cityText = result.cityAnalysis || fallback.city;
    const keywords = Array.isArray(result.userKeywords) && result.userKeywords.length
      ? result.userKeywords
      : fallbackKeywords;
    const reasons = Array.isArray(result.matchReasons) && result.matchReasons.length
      ? result.matchReasons
      : fallbackReasons;

    analysisCache.set(cacheKey, {
      userAnalysis: userText,
      cityAnalysis: cityText,
      userKeywords: keywords,
      matchReasons: reasons
    });
    setAnalysisText(userText, cityText);
    renderUserKeywords(keywords);
    renderMatchReasons(reasons);
  } catch (error) {
    if (requestId !== analysisRequestId) {
      return;
    }

    setAnalysisText(
      `${fallback.user}（当前为本地模板）`,
      `${fallback.city}（当前为本地模板）`
    );
    renderUserKeywords(fallbackKeywords);
    renderMatchReasons(fallbackReasons);
  }
};

const renderTopMatch = (match, userProfile) => {
  topCityName.textContent = match.city.name;
  topCityDesc.textContent = `${match.city.desc} 综合匹配度 ${match.matchRate}% ，由标签契合 ${Math.round(match.tagMatchRate * 100)}% 和画像相似 ${Math.round(match.profileSimilarity * 100)}% 共同组成。`;

  topCityMeta.innerHTML = "";
  [
    ...buildMetaTags(match.city.profile),
    `标签契合 ${Math.round(match.tagMatchRate * 100)}%`,
    `画像相似 ${Math.round(match.profileSimilarity * 100)}%`
  ].forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    topCityMeta.appendChild(span);
  });

  renderRadar(match.city.profile, userProfile);
  updateAnalysis(match, userProfile);
};

const renderOtherMatches = (matches, userProfile) => {
  resultGrid.innerHTML = "";
  matches.slice(1).forEach((result, index) => {
    const card = document.createElement("div");
    card.className = "result-card";

    const title = document.createElement("h3");
    title.textContent = `${index + 2}. ${result.city.name}`;

    const score = document.createElement("div");
    score.className = "result-score";
    score.textContent = `综合 ${result.matchRate}% · 画像 ${Math.round(result.profileSimilarity * 100)}%`;

    const tags = document.createElement("div");
    tags.className = "tags";
    getTopTagLabels(result.matched, 4).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });

    card.appendChild(title);
    card.appendChild(score);
    card.appendChild(tags);

    card.addEventListener("click", () => {
      renderTopMatch(result, userProfile);
      document.querySelectorAll(".result-card").forEach((item) => {
        item.classList.remove("active");
      });
      card.classList.add("active");
    });

    resultGrid.appendChild(card);
  });
};

const renderResults = () => {
  const selectedTags = getSelectedTags();
  const userProfile = buildUserProfile();
  const topMatches = computeResults();

  if (topMatches[0]) {
    renderTopMatch(topMatches[0], userProfile);
  }

  renderUserKeywords(getTopTagLabels(selectedTags, 6));
  renderOtherMatches(topMatches, userProfile);

  resultsSection.classList.add("active");
  resultGrid.classList.add("is-hidden");
  toggleMatchesBtn.textContent = "查看其他匹配";
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
  analysisRequestId += 1;
  resultsSection.classList.remove("active");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toggleMatchesBtn.addEventListener("click", () => {
  const hidden = resultGrid.classList.toggle("is-hidden");
  toggleMatchesBtn.textContent = hidden ? "查看其他匹配" : "收起其他匹配";
});

updateCounts();
renderQuestion();
