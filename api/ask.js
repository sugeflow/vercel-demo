import { generateText } from "ai";

export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const question = searchParams.get("q") ?? "用两句话解释 CDN 是什么。";

    const { text, usage } = await generateText({
      model: process.env.AI_MODEL ?? "deepseek/deepseek-v4-flash",
      system: "你是一个回答简洁的中文助手。",
      prompt: question,
    });

    return Response.json({ answer: text, usage });
  },
};
