"use client";

import { motion } from "framer-motion";

const expertiseCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      "AWS (S3, EMR, Glue, Redshift, Lambda, SageMaker)",
      "Microsoft Azure (Data Factory, Synapse, ADLS, Azure ML)",
      "Google Cloud Platform (BigQuery, Dataflow, Pub/Sub, Vertex AI)",
      "Databricks",
      "Snowflake",
      "Microsoft Fabric",
      "Kubernetes (EKS/AKS/GKE)",
      "Docker",
    ],
  },
  {
    title: "Data Engineering & ETL",
    skills: [
      "Apache Airflow",
      "Apache NiFi",
      "Talend",
      "Informatica",
      "dbt",
      "SSIS",
      "Pentaho",
      "Alteryx",
      "Batch & Real-Time Pipelines",
      "Workflow Orchestration",
    ],
  },
  {
    title: "Big Data Technologies",
    skills: [
      "Apache Spark (PySpark, Spark SQL)",
      "Kafka",
      "Hadoop",
      "Hive",
      "HDFS",
      "HBase",
      "Presto/Trino",
    ],
  },
  {
    title: "Stream Processing",
    skills: [
      "Spark Streaming",
      "Kafka Streams",
      "AWS Kinesis",
      "Apache Flink",
    ],
  },
  {
    title: "Databases & Vectors",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Amazon Redshift",
      "BigQuery",
      "Vector Databases (Pinecone, Weaviate, FAISS)",
    ],
  },
  {
    title: "AI/ML & LLMs",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "MLflow",
      "Feature Engineering",
      "Model Deployment",
      "MLOps",
      "LLM Integration",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LlamaIndex",
    ],
  },
  {
    title: "Data Governance & Architecture",
    skills: [
      "Data Quality Management",
      "Metadata Management",
      "Data Lineage & Cataloging",
      "Data Lake & Lakehouse Architecture",
      "Delta Lake",
      "Data Governance Frameworks",
      "Data Mesh Concepts",
    ],
  },
  {
    title: "Platform & Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Amazon QuickSight",
      "Plotly",
      "Matplotlib",
      "Microservices",
      "API Design",
      "Internal Data Platforms",
      "Self-Service Analytics",
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      "Python",
      "SQL",
      "Scala",
      "Java",
      "Bash",
      "Pandas",
      "NumPy",
      "REST APIs",
      "Jira",
      "Confluence",
      "Agile/Scrum",
    ],
  },
  {
    title: "Domain & Leadership",
    skills: [
      "Healthcare (EHR/EMR, HL7, FHIR, HIPAA)",
      "Financial Services & Fraud Analytics",
      "Retail & Supply Chain Analytics",
      "Real-Time Streaming Platforms",
      "Team Leadership & Mentoring",
      "Architecture Strategy",
      "Enterprise Delivery",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm font-medium text-primary mb-12 tracking-widest uppercase">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-foreground font-semibold text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
