import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = process.env.OPENAI_BASE_URL || "https://api.chatanywhere.tech/v1";
const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

if (!apiKey) {
  console.warn("Missing OPENAI_API_KEY. /api/analyze will return 500.");
}

const client = apiKey ? new OpenAI({ apiKey, baseURL }) : null;

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    aiConfigured: Boolean(client),
    model,
    baseURL
  });
});

const extractJsonObject = (text) => {
  const trimmed = String(text || "").trim();
  if (!trimmed) {
    return null;
  }

  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fencedMatch?.[1]?.trim() || trimmed;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    return null;
  }

  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch (error) {
    return null;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.post("/api/analyze", async (req, res) => {
  if (!client) {
    res.status(500).json({ error: "OPENAI_API_KEY not configured" });
    return;
  }

  const { userProfile, cityProfile, cityName, cityDesc, userKeywords, matchReasons } = req.body || {};
  if (!userProfile || !cityProfile || !cityName) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const systemPrompt = "你是城市生活方式分析师。请根据用户画像与城市画像生成轻松、诙谐、口语化的中文解读。";
  const userPrompt = [
    "输出必须是 JSON，且仅包含以下四个字段：",
    "- userAnalysis: 字符串",
    "- cityAnalysis: 字符串",
    "- userKeywords: 字符串数组，4 到 6 项",
    "- matchReasons: 字符串数组，3 项",
    "",
    "要求：",
    "1) 语气轻松诙谐，像朋友聊天，避免模板感与生硬句式。",
    "2) userAnalysis 重点描述用户偏好画像特征与倾向。",
    "3) cityAnalysis 重点描述城市画像优势与可能需要取舍的点。",
    "4) userKeywords 用短语形式，像标签，但要比词库更像真实用户偏好总结。",
    "5) matchReasons 每条 28-50 字，直接说明为什么匹配、哪里合拍、哪里要权衡。",
    "6) 每段 180-260 字，至少 3 句。",
    "7) 允许适度使用俏皮比喻，但不要浮夸。",
    "",
    `用户画像（0-10 分）：${JSON.stringify(userProfile)}`,
    `城市画像（0-10 分）：${JSON.stringify(cityProfile)}`,
    `城市名称：${cityName}`,
    `城市简介：${cityDesc || ""}`,
    `前端初步偏好关键词：${JSON.stringify(userKeywords || [])}`,
    `前端初步匹配理由：${JSON.stringify(matchReasons || [])}`
  ].join("\n");

  try {
    let response;
    let lastError;

    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        response = await client.chat.completions.create({
          model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 650
        });
        break;
      } catch (error) {
        lastError = error;
        if (attempt === 2) {
          throw error;
        }
        await sleep(1200);
      }
    }

    const text = response.choices?.[0]?.message?.content || "";
    const payload = extractJsonObject(text) || {
      userAnalysis: text.trim(),
      cityAnalysis: "",
      userKeywords: Array.isArray(userKeywords) ? userKeywords : [],
      matchReasons: Array.isArray(matchReasons) ? matchReasons : []
    };

    res.json(payload);
  } catch (error) {
    console.error("Analyze error:", error?.message || error);
    res.status(500).json({ error: "Analyze failed" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
