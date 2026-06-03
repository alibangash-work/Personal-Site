import { kv } from "@vercel/kv";

const VISITORS_KEY = "visitors:count";

async function getVisitorCount(): Promise<number> {
  try {
    const count = await kv.get<number>(VISITORS_KEY);
    return count || 0;
  } catch {
    return 0;
  }
}

async function incrementVisitorCount(): Promise<number> {
  try {
    const count = await kv.incr(VISITORS_KEY);
    return count;
  } catch {
    // Fallback: return current count if increment fails
    return await getVisitorCount();
  }
}

export async function GET() {
  const count = await incrementVisitorCount();
  return Response.json({ visitors: count });
}
