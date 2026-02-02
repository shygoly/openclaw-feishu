# 🦞 OpenClaw 飞书版 — 个人 AI 助手

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

<p align="center">
  <strong>飞书专用版本 | Feishu Specialized Edition</strong>
</p>

<p align="center">
  <a href="https://github.com/shygoly/openclaw-feishu/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/shygoly/openclaw-feishu/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/shygoly/openclaw-feishu/releases"><img src="https://img.shields.io/github/v/release/shygoly/openclaw-feishu?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

## 项目介绍

**OpenClaw 飞书版** 是基于 [OpenClaw](https://github.com/openclaw/openclaw) 的专用变体，专门为飞书（Feishu）优化。

这个版本：
- ✅ **飞书预配置** — 开箱即用，无需复杂配置
- ✅ **精简专注** — 移除了其他消息渠道，只保留飞书集成
- ✅ **完整功能** — 保留 OpenClaw 的所有核心 AI 助手功能
- ✅ **本地运行** — 在自己的设备上运行，完全私密

### 核心功能

- 🤖 **AI 助手** — 通过飞书与 Claude/GPT 对话
- 🎯 **智能回复** — 支持长上下文、思考链、工具调用
- 🔌 **可扩展** — 支持自定义技能和工具集成
- 🎨 **Canvas 渲染** — 实时交互式画布支持
- 🔐 **隐私优先** — 所有数据本地处理，无云存储

## 快速开始

### 系统要求

- **Node.js** ≥ 22
- **macOS / Linux / Windows (WSL2)**

### 安装

```bash
# 克隆项目
git clone https://github.com/shygoly/openclaw-feishu.git
cd openclaw-feishu

# 安装依赖
pnpm install

# 构建项目
pnpm build

# 运行初始化向导
pnpm openclaw onboard --install-daemon
```

### 配置飞书

1. **获取飞书凭证**
   - 访问 [飞书开发者平台](https://open.feishu.cn/)
   - 创建应用并获取 App ID 和 App Secret

2. **配置 OpenClaw**
   ```bash
   openclaw config set feishu.appId "YOUR_APP_ID"
   openclaw config set feishu.appSecret "YOUR_APP_SECRET"
   ```

3. **启动网关**
   ```bash
   openclaw gateway --port 18789
   ```

### 使用示例

```bash
# 通过飞书发送消息
openclaw message send --to "@user" --message "Hello from OpenClaw"

# 与 AI 助手对话
openclaw agent --message "帮我总结一下今天的会议" --thinking high

# 查看频道状态
openclaw channels status --probe
```

## 开发

### 项目结构

```
openclaw-feishu/
├── src/
│   ├── feishu/           # 飞书集成核心代码
│   ├── channels/         # 频道管理
│   ├── cli/              # CLI 命令
│   ├── commands/         # 命令实现
│   └── ...
├── extensions/
│   └── feishu/           # 飞书扩展插件
├── docs/
│   └── channels/
│       └── feishu.md     # 飞书文档
└── package.json
```

### 常用命令

```bash
# 类型检查和构建
pnpm build

# 运行测试
pnpm test

# 代码检查和格式化
pnpm lint
pnpm format

# 开发模式（自动重载）
pnpm gateway:watch

# 运行 CLI
pnpm openclaw <command>
```

## 配置

### 基本配置

编辑 `~/.openclaw/config.json` 或使用 CLI：

```bash
# 设置 AI 模型
openclaw config set model.provider anthropic
openclaw config set model.name claude-opus-4-5

# 设置飞书
openclaw config set feishu.appId "YOUR_APP_ID"
openclaw config set feishu.appSecret "YOUR_APP_SECRET"
```

### 环境变量

```bash
# 飞书配置
export FEISHU_APP_ID="your_app_id"
export FEISHU_APP_SECRET="your_app_secret"

# AI 模型
export ANTHROPIC_API_KEY="your_api_key"
# 或
export OPENAI_API_KEY="your_api_key"
```

## 文档

- 📖 [飞书集成文档](./docs/channels/feishu.md)
- 🔧 [配置指南](https://docs.openclaw.ai/configuration)
- 🚀 [部署指南](https://docs.openclaw.ai/install/docker)
- 💡 [常见问题](https://docs.openclaw.ai/start/faq)

## 支持的 AI 模型

### Anthropic
- Claude 3.5 Sonnet
- Claude 3.5 Haiku
- Claude Opus 4.5

### OpenAI
- GPT-4o
- GPT-4 Turbo
- GPT-3.5 Turbo

## 故障排除

### 飞书连接失败

```bash
# 检查飞书配置
openclaw config get feishu

# 查看详细日志
openclaw channels status --probe

# 运行诊断
openclaw doctor
```

### 网关无法启动

```bash
# 检查端口占用
lsof -i :18789

# 查看日志
tail -f ~/.openclaw/logs/gateway.log

# 重启网关
pkill -f openclaw-gateway
openclaw gateway --port 18789 --verbose
```

## 许可证

MIT License — 详见 [LICENSE](./LICENSE)

## 致谢

- 基于 [OpenClaw](https://github.com/openclaw/openclaw) 项目
- 感谢所有贡献者和社区支持

## 相关链接

- 🌐 [OpenClaw 官网](https://openclaw.ai)
- 📚 [OpenClaw 文档](https://docs.openclaw.ai)
- 💬 [Discord 社区](https://discord.gg/clawd)
- 🐛 [问题反馈](https://github.com/shygoly/openclaw-feishu/issues)

---

**OpenClaw 飞书版** — 在飞书上运行你自己的 AI 助手 🚀
