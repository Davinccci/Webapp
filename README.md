# Webapp

## 本地运行（包含 AI 解读）

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量文件并填写 Key：

```bash
copy .env.example .env
```

3. 启动后端：

```bash
npm start
```

4. 访问 `http://localhost:3000/` 体验前端页面。

### 使用 ChatAnywhere（适用于无法访问官方 API 的网络）

已默认支持兼容 OpenAI 接口的第三方服务。你可以在 `.env` 中设置：

```
OPENAI_BASE_URL=https://api.chatanywhere.tech/v1
OPENAI_MODEL=gpt-5
OPENAI_API_KEY=你的 chatanywhere key
```

接口格式与 OpenAI 兼容文档一致，示例请参考 ChatAnywhere 文档。https://api.chatanywhere.tech/#/

> 注意：AI 解读通过 `server.js` 转发，前端不会暴露 API Key。
> 如果后端无法连接 OpenAI（网络/代理/防火墙），页面会自动回退到本地模板，并在文案中标注“当前为本地模板”。
