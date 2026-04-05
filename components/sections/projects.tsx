"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "HealthTech Analytics Platform",
    subtitle: "Real-Time Healthcare Data Lakehouse",
    description:
      "Designed a scalable healthcare lakehouse on AWS S3 and Databricks using Delta Lake, ingesting HL7/FHIR clinical data from multiple hospital systems.",
    technologies: ["AWS S3", "Databricks", "Delta Lake", "Apache Spark", "Airflow"],
    highlights: [
      "Multi-hospital EHR integration",
      "Population health analytics",
      "Clinical reporting automation",
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "FinTech Data Platform",
    subtitle: "Streaming Fraud Detection & ML Feature Store",
    description:
      "Developed real-time streaming pipelines using Kafka, Spark Streaming, and Snowflake to process high-volume financial transactions for fraud detection.",
    technologies: ["Kafka", "Spark Streaming", "Snowflake", "Databricks", "MLflow"],
    highlights: [
      "Real-time fraud detection",
      "ML feature engineering pipeline",
      "Risk analytics dashboard",
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Retail Intelligence Hub",
    subtitle: "Customer Analytics & Recommendation Engine",
    description:
      "Built a comprehensive retail analytics platform processing customer behavior data, inventory metrics, and sales patterns for personalized recommendations.",
    technologies: ["Azure Synapse", "Databricks", "Python", "TensorFlow", "Power BI"],
    highlights: [
      "Customer segmentation models",
      "Real-time inventory optimization",
      "Personalized recommendation system",
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Featured Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Recent Work & Achievements
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of impactful data platform projects that demonstrate expertise in scalable architecture and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Project header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-border/50">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Let's Discuss Your Project
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
