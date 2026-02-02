import type { OpenClawConfig } from "../../config/config.js";

type HeartbeatRecipientsResult = { recipients: string[]; source: string };

type HeartbeatRecipientsOpts = { to?: string; all?: boolean };

export function resolveWhatsAppHeartbeatRecipients(
  _cfg: OpenClawConfig,
  _opts: HeartbeatRecipientsOpts = {},
): HeartbeatRecipientsResult {
  return { recipients: [], source: "disabled" };
}
