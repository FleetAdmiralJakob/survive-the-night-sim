import { query } from "./_generated/server";

export const getFlags = query({
  args: {},
  handler: async (ctx) => {
    return {
      showTestPage: process.env.NODE_ENV === "development",
    };
  },
});