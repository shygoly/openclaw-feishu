import type {
  BlockStreamingCoalesceConfig,
  DmPolicy,
  GroupPolicy,
  MarkdownConfig,
} from "./types.base.js";
import type { ChannelHeartbeatVisibilityConfig } from "./types.channels.js";
import type { DmConfig } from "./types.messages.js";
import type { GroupToolPolicyConfig } from "./types.tools.js";

export type FeishuGroupConfig = {
  requireMention?: boolean;
  tools?: GroupToolPolicyConfig;
  skills?: string[];
  enabled?: boolean;
  allowFrom?: Array<string | number>;
  systemPrompt?: string;
};

export type FeishuConfig = {
  enabled?: boolean;
  appId?: string;
  appSecret?: string;
  encryptKey?: string;
  verificationToken?: string;
  domain?: "feishu" | "lark";
  connectionMode?: "websocket" | "webhook";
  webhookPath?: string;
  webhookPort?: number;
  capabilities?: string[];
  markdown?: MarkdownConfig;
  configWrites?: boolean;
  dmPolicy?: DmPolicy;
  allowFrom?: Array<string | number>;
  groupPolicy?: GroupPolicy;
  groupAllowFrom?: Array<string | number>;
  requireMention?: boolean;
  groups?: Record<string, FeishuGroupConfig>;
  historyLimit?: number;
  dmHistoryLimit?: number;
  dms?: Record<string, DmConfig>;
  textChunkLimit?: number;
  chunkMode?: "length" | "newline";
  blockStreamingCoalesce?: BlockStreamingCoalesceConfig;
  mediaMaxMb?: number;
  heartbeat?: ChannelHeartbeatVisibilityConfig;
  renderMode?: "auto" | "raw" | "card";
};
