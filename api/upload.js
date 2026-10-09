import { put } from "@vercel/blob";

export default {
  async fetch(request) {
    const blob = await put("notes/hello.txt", "这是一段存在 Vercel Blob 里的文字", {
      access: "public",
      addRandomSuffix: true,
    });
    return Response.json({ url: blob.url });
  },
};
