import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const VISITORS_FILE = join(process.cwd(), ".visitors.json");

async function getVisitorCount(): Promise<number> {
  try {
    const data = await readFile(VISITORS_FILE, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.count || 0;
  } catch {
    // File doesn't exist yet
    return 0;
  }
}

async function incrementVisitorCount(): Promise<number> {
  try {
    const current = await getVisitorCount();
    const newCount = current + 1;
    await writeFile(VISITORS_FILE, JSON.stringify({ count: newCount }));
    return newCount;
  } catch {
    // Fallback: return current count if write fails
    return await getVisitorCount();
  }
}

export async function GET() {
  const count = await incrementVisitorCount();
  return Response.json({ visitors: count });
}
