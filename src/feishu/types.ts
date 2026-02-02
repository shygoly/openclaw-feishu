import type { FeishuConfig, FeishuGroupConfig } from "../config/types.feishu.js";
import type { MentionTarget } from "./mention.js";

export type { FeishuConfig, FeishuGroupConfig };

export type FeishuDomain = "feishu" | "lark";
export type FeishuConnectionMode = "websocket" | "webhook";

export type ResolvedFeishuAccount = {
  accountId: string;
  enabled: boolean;
  configured: boolean;
  appId?: string;
  domain: FeishuDomain;
};

export type FeishuIdType = "open_id" | "user_id" | "union_id" | "chat_id";

export type FeishuMessageContext = {
  chatId: string;
  messageId: string;
  senderId: string;
  senderOpenId: string;
  senderName?: string;
  chatType: "p2p" | "group";
  mentionedBot: boolean;
  rootId?: string;
  parentId?: string;
  content: string;
  contentType: string;
  /** Mention forward targets (excluding the bot itself) */
  mentionTargets?: MentionTarget[];
  /** Extracted message body (after removing @ placeholders) */
  mentionMessageBody?: string;
};

export type FeishuSendResult = {
  messageId: string;
  chatId: string;
};

export type FeishuProbeResult = {
  ok: boolean;
  error?: string;
  appId?: string;
  botName?: string;
  botOpenId?: string;
};

export type FeishuMediaInfo = {
  path: string;
  contentType?: string;
  placeholder: string;
};
