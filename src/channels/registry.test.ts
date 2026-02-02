import { describe, expect, it } from "vitest";

import {
  formatChannelSelectionLine,
  listChatChannels,
  normalizeChatChannelId,
} from "./registry.js";

describe("channel registry", () => {
  it("normalizes aliases", () => {
    expect(normalizeChatChannelId("lark")).toBe("feishu");
    expect(normalizeChatChannelId("web")).toBeNull();
  });

  it("keeps Feishu first in the default order", () => {
    const channels = listChatChannels();
    expect(channels[0]?.id).toBe("feishu");
  });

  it("formats selection lines with docs labels", () => {
    const channels = listChatChannels();
    const first = channels[0];
    if (!first) {
      throw new Error("Missing channel metadata.");
    }
    const line = formatChannelSelectionLine(first, (path, label) =>
      [label, path].filter(Boolean).join(":"),
    );
    expect(line).toContain("Docs:");
    expect(line).toContain("/channels/feishu");
  });
});
