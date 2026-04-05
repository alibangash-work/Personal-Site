"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Solutions Architect",
    company: "ScienceSoft",
    period: "FEB 2024 – PRESENT",
    location: "Remote",
    highlights: [
      "Designed and delivered end-to-end data solutions on AWS and Azure, aligning architecture with business requirements across healthcare and financial domains.",
      "Translated business needs into scalable data architectures, enabling efficient data ingestion, transformation, and analytics workflows.",
      "Defined and implemented lakehouse solutions using S3, Databricks, and Snowflake to support both batch and real-time analytics use cases.",
      "Architected intelligent data access solutions by integrating structured datasets with large language model-based querying.",
      "Designed real-time data processing solutions using Apache Kafka and Spark Streaming for high-volume transactional systems.",
      "Led development of machine learning solutions using MLflow and cloud-native services such as SageMaker and Azure Machine Learning.",
      "Established data governance, security, and compliance solutions including data lineage, access control, and regulatory adherence.",
      "Collaborated with stakeholders and cross-functional teams to define solution architecture and improve system performance and scalability.",
    ],
  },
  {
    title: "Lead Data Engineer",
    company: "NexHealth",
    period: "APR 2021 – JAN 2024",
    location: "San Francisco, CA",
    highlights: [
      "Engineered scalable healthcare pipelines processing EHR and claims datasets with Apache Spark, Python, and Airflow, enabling near real-time analytics for clinical reporting and population health insights.",
      "Orchestrated HL7 and FHIR ingestion frameworks with Apache NiFi and Kafka, consolidating patient, provider, and clinical records from multiple hospital systems.",
      "Architected a cloud-based lakehouse architecture on AWS (S3, Glue, Redshift) and Databricks, leveraging Delta Lake to support large-scale healthcare analytics and regulatory reporting.",
      "Implemented HIPAA-compliant data governance frameworks, including encryption, access controls, and metadata management using AWS Glue Data Catalog and lineage tracking.",
      "Modeled enterprise data warehouse schemas in Snowflake utilizing Star Schema and Data Vault methodologies to power executive healthcare KPI dashboards.",
      "Automated monitoring and testing of ETL pipelines using Airflow workflows, CI/CD pipelines, and Docker, improving data reliability and reducing pipeline failures by 35%.",
      "Produced analytics-ready datasets supporting Tableau and Power BI dashboards, enabling leadership to monitor clinical performance metrics and patient outcomes.",
    ],
  },
  {
    title: "Senior Data Engineer",
    company: "SentiLink",
    period: "JAN 2019 – MAR 2021",
    location: "New York, NY",
    highlights: [
      "Developed large-scale batch and streaming data pipelines using Apache Spark, Kafka, and Hadoop, processing millions of financial transactions for fraud detection and risk analysis.",
      "Built and optimized distributed data storage solutions using HDFS, Amazon S3, and Hive, enabling scalable analytics across multi-terabyte financial datasets.",
      "Designed data warehouse solutions using dimensional modeling and Kimball methodology, improving financial reporting performance and supporting real-time business intelligence.",
      "Automated ETL workflows using Apache Airflow and Talend, enabling seamless ingestion from transactional systems into Amazon Redshift and Snowflake.",
      "Collaborated with data science teams to deploy machine learning models using Python, Scikit-learn, and MLflow, supporting predictive risk scoring and financial forecasting.",
      "Implemented data governance and quality validation frameworks, ensuring regulatory compliance and improving data accuracy across reporting systems.",
      "Delivered executive dashboards (Tableau, Power BI) providing actionable insights into fraud trends, revenue performance, and operational KPIs.",
    ],
  },
  {
    title: "ETL & Data Warehouse Engineer",
    company: "FourKites",
    period: "JAN 2015 – DEC 2018",
    location: "Chicago, IL",
    highlights: [
      "Developed and maintained enterprise ETL pipelines using Informatica, Talend, and SSIS, integrating high-volume retail and POS datasets into centralized warehouse systems.",
      "Designed scalable data warehouse architectures (Star & Snowflake schemas) enabling advanced analytics for supply chain and sales performance.",
      "Led migration of on-premise data systems to AWS and BigQuery, improving scalability and reducing infrastructure costs.",
      "Built data ingestion pipelines using Apache NiFi, enabling near real-time data flow for inventory and sales tracking.",
      "Optimized complex SQL queries and Spark jobs, improving performance across large-scale retail datasets.",
      "Implemented data quality and governance frameworks, ensuring reliable reporting and consistency across business-critical datasets.",
      "Delivered BI dashboards (Power BI, Tableau) supporting operational decision-making across inventory, sales, and supply chain functions.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Professional Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Career Journey
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 11 years of progressive experience in data engineering and architecture, leading complex projects across multiple industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="bg-card border border-border/50 rounded-xl p-6 md:ml-16 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium text-primary">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.slice(0, 4).map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                    {exp.highlights.length > 4 && (
                      <div className="text-sm text-primary font-medium mt-3">
                        +{exp.highlights.length - 4} more achievements
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
