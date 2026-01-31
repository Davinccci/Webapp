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
const model = process.env.OPENAI_MODEL || "gpt-3.5-turbo";

if (!apiKey) {
  console.warn("Missing OPENAI_API_KEY. /api/analyze will return 500.");
}

const client = apiKey ? new OpenAI({ apiKey, baseURL }) : null;

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/analyze", async (req, res) => {
  if (!client) {
    res.status(500).json({ error: "OPENAI_API_KEY not configured" });
    return;
  }

  const { userProfile, cityProfile, cityName, cityDesc } = req.body || {};
  if (!userProfile || !cityProfile || !cityName) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const systemPrompt = "你是城市生活方式分析师。请根据用户画像与城市画像生成轻松、诙谐、口语化的中文解读。";
  const userPrompt = [
    "输出必须是 JSON，且仅包含以下两个字段：",
    "- userAnalysis: 字符串",
    "- cityAnalysis: 字符串",
    "",
    "要求：",
    "1) 语气轻松诙谐，像朋友聊天，避免模板感与生硬句式。",
    "2) userAnalysis 重点描述用户偏好画像特征与倾向。",
    "3) cityAnalysis 重点描述城市画像优势与可能需要取舍的点。",
    "4) 每段 180-260 字，至少 3 句。",
    "5) 允许适度使用俏皮比喻，但不要浮夸。",
    "",
    `用户画像（0-10 分）：${JSON.stringify(userProfile)}`,
    `城市画像（0-10 分）：${JSON.stringify(cityProfile)}`,
    `城市名称：${cityName}`,
    `城市简介：${cityDesc || ""}`
  ].join("\n");

  try {
    const response = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 350
    });

    const text = response.choices?.[0]?.message?.content || "";
    let payload;
    try {
      payload = JSON.parse(text);
    } catch (error) {
      payload = {
        userAnalysis: text.trim(),
        cityAnalysis: ""
      };
    }

    res.json(payload);
  } catch (error) {
    console.error("Analyze error:", error);
    res.status(500).json({ error: "Analyze failed" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
