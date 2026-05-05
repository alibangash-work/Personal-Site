"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const response = await fetch("/api/visitors");
        const data = await response.json();
        setVisitors(data.visitors);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    }

    fetchVisitorCount();
  }, []);

  if (visitors === null) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span>{visitors.toLocaleString()} visitor{visitors !== 1 ? "s" : ""}</span>
    </div>
  );
}
