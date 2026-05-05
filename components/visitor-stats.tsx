"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export function VisitorStats() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="mt-12 pt-8 border-t border-border/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Visitors Stat */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center md:items-start p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/30 hover:border-primary/20 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Portfolio Visitors</span>
          </div>
          <div className="text-3xl font-bold text-foreground">
            {visitors !== null ? visitors.toLocaleString() : "—"}
          </div>
          <span className="text-xs text-muted-foreground mt-1">Total visitors</span>
        </motion.div>

        {/* Experience Stat */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center md:items-start p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/30 hover:border-primary/20 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <span className="text-lg font-bold text-primary">+</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Years of Experience</span>
          </div>
          <div className="text-3xl font-bold text-foreground">11</div>
          <span className="text-xs text-muted-foreground mt-1">In data engineering</span>
        </motion.div>

        {/* Projects Stat */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center md:items-start p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/30 hover:border-primary/20 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <span className="text-lg font-bold text-primary">✓</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Major Projects</span>
          </div>
          <div className="text-3xl font-bold text-foreground">20+</div>
          <span className="text-xs text-muted-foreground mt-1">Completed successfully</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
