---
summary: "Feishu/Lark channel support status, capabilities, and configuration"
read_when:
  - You want to connect OpenClaw to Feishu/Lark
  - You need Feishu channel config reference
---
# Feishu (Lark)

Status: production-ready for bot DMs + group chats via Feishu/Lark App.

## Quick setup (beginner)
1) Create a Feishu/Lark App and enable the event subscription.
2) Copy the App ID + App Secret.
3) Set the credentials:
   - Env: `FEISHU_APP_ID=...` and `FEISHU_APP_SECRET=...`
   - Or config: `channels.feishu.appId` + `channels.feishu.appSecret`.
4) Start the gateway.
5) DM access defaults to pairing; approve the pairing code on first contact.

Minimal config:
```json5
{
  channels: {
    feishu: {
      enabled: true,
      appId: "cli_xxx",
      appSecret: "xxx",
      dmPolicy: "pairing"
    }
  }
}
```

## What it is
- A Feishu/Lark bot channel owned by the Gateway.
- Deterministic routing: replies go back to Feishu; the model never chooses channels.
- DMs share the agent's main session; groups stay isolated (`agent:<agentId>:feishu:group:<chatId>`).

## Setup details
### Credentials
- `channels.feishu.appId` / `channels.feishu.appSecret` (or env equivalents).
- Optional: `channels.feishu.encryptKey` + `channels.feishu.verificationToken` for webhook security.

### Connection mode
- `channels.feishu.connectionMode`: `websocket` (default) or `webhook`.
- `webhook` uses `channels.feishu.webhookPath` and `channels.feishu.webhookPort`.

### Domain
- `channels.feishu.domain`: `feishu` (default) or `lark`.

### DM + group policies
- `channels.feishu.dmPolicy`: `pairing` (default), `allowlist`, or `open`.
- `channels.feishu.groupPolicy`: `allowlist` (default), `open`, or `disabled`.
- `channels.feishu.allowFrom` and `channels.feishu.groupAllowFrom` control allowlists.

## Behavior
- Replies always route back to the same Feishu chat.
- Group replies require a mention by default (`channels.feishu.requireMention`).
- Media uploads are supported; size limits are capped by `channels.feishu.mediaMaxMb`.

## Troubleshooting
- If events are not arriving, confirm the Feishu/Lark App event subscription and credentials.
- For webhook mode, ensure the gateway port is reachable and matches `webhookPort`.

More help: [Channel troubleshooting](/channels/troubleshooting).
