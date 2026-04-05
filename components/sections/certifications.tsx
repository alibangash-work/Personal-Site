"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft Certified: Azure Data Engineer",
    credential: "DP-203",
  },
  {
    title: "Databricks Certified Data Engineer Professional",
    credential: "Professional",
  },
  {
    title: "AWS Certified Data Analytics",
    credential: "Specialty",
  },
  {
    title: "Google Professional Data Engineer",
    credential: "Professional",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm font-medium text-primary mb-12 tracking-widest uppercase">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
            >
              <h3 className="text-foreground font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-medium">{cert.credential}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
