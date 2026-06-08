const VISITORS_KEY = "visitors:count";

// In-memory fallback for local development
let memoryCount = 500;

async function getVisitorCount(): Promise<number> {
  // Try to use Vercel KV if available
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      const count = await kv.get<number>(VISITORS_KEY);
      return count || 0;
    } catch {
      return memoryCount;
    }
  }
  // Fallback to in-memory counter for local development
  return memoryCount;
}

async function incrementVisitorCount(): Promise<number> {
  // Try to use Vercel KV if available
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      const count = await kv.incr(VISITORS_KEY);
      return count;
    } catch {
      memoryCount++;
      return memoryCount;
    }
  }
  // Fallback to in-memory counter for local development
  memoryCount++;
  return memoryCount;
}

export async function GET() {
  const count = await incrementVisitorCount();
  return Response.json({ visitors: count });
}
