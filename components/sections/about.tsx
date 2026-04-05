"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Code } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "11+ Years Experience",
    description: "Designing scalable data platforms across healthcare, finance, and retail sectors"
  },
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Proficient in AWS, Azure, Databricks, Snowflake, Spark, Kafka, and Airflow"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading cross-functional teams and mentoring data engineers"
  },
  {
    icon: Target,
    title: "AI & ML Integration",
    description: "Building intelligent analytics with LLMs and RAG systems"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate About Data-Driven Solutions
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Data Solutions Architect with 11+ years of experience designing and building scalable, AI-driven data platforms and ETL/ELT pipelines across healthcare, financial services, and retail domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hands-on expertise in developing cloud-native lakehouse architectures on AWS, Azure, and Databricks, with proficiency in Python, SQL, Apache Spark, Apache Airflow, and Kafka.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in integrating machine learning workflows, LLMs, and retrieval-augmented generation (RAG) systems to enable intelligent analytics and business insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at leading cross-functional teams, mentoring engineers, and aligning AI and data strategies with organizational goals.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
