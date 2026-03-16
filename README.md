# 城市匹配器

一个前后端一体的小应用：通过 16 道偏好题生成用户画像，匹配更适合的城市，并结合 AI 输出更自然的中文解读。

## 当前能力

- 16 道问题，20 座候选城市
- 结果页展示雷达图、偏好关键词、匹配理由
- 综合匹配度由标签契合度和画像相似度共同组成
- 后端代理 AI 分析，未配置 Key 时自动回退本地模板

## 本地运行

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量文件并填写 Key：

Linux / macOS:

```bash
cp .env.example .env
```

Windows:

```powershell
copy .env.example .env
```

3. 按需填写 `.env`。

如果不填写 `OPENAI_API_KEY`，应用也能运行，但结果页会使用本地模板文案。

4. 启动服务：

```bash
npm start
```

5. 访问 `http://localhost:3000/`。

## 环境变量

```env
OPENAI_API_KEY=your_api_key
OPENAI_BASE_URL=https://api.chatanywhere.tech/v1
OPENAI_MODEL=gpt-4o-mini
PORT=3000
```

### 使用 ChatAnywhere（适用于无法访问官方 API 的网络）

已默认支持兼容 OpenAI 接口的第三方服务。你可以在 `.env` 中设置：

```
OPENAI_BASE_URL=https://api.chatanywhere.tech/v1
OPENAI_MODEL=gpt-4o-mini
OPENAI_API_KEY=你的 chatanywhere key
```

接口格式与 OpenAI 兼容文档一致，示例请参考 ChatAnywhere 文档。https://api.chatanywhere.tech/#/

> 注意：AI 解读通过 `server.js` 转发，前端不会暴露 API Key。
> 如果后端无法连接 OpenAI（网络/代理/防火墙），页面会自动回退到本地模板，并在文案中标注“当前为本地模板”。

## 健康检查

访问 `http://localhost:3000/api/health` 可确认服务是否启动，以及 AI 是否已配置。

## 结果解释

- 标签契合度：你的问卷标签和城市标签的重合程度
- 画像相似度：你的 6 维偏好画像和城市画像的接近程度
- 综合匹配度：`标签契合度 45% + 画像相似度 55%`

## 线上部署

项目是一个标准 Node.js 服务，前端静态页面和 `/api/analyze` 都由 `server.js` 提供。

常见部署方式：

1. `npm install`
2. 配置 `.env`
3. 使用 `npm start` 或 systemd / PM2 常驻运行
4. 用 Nginx / Caddy 反向代理到应用端口

仓库中包含一个示例 systemd 服务文件：`choose-your-city.service`。

## 当前线上地址

- `https://oneclaw.com.cn/choose-your-city/`
- `https://oneclaw.com.cn/projects/choose-your-city/`
