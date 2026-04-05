"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:alibangash.work@gmail.com",
    icon: Mail,
    value: "alibangash.work@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+16506643363",
    icon: Phone,
    value: "(650) 664-3363",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-bangash-tech/",
    icon: Linkedin,
    value: "ali-bangash-tech",
  },
  {
    label: "GitHub",
    href: "https://github.com/alibangash-work",
    icon: Github,
    value: "alibangash-work",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing data architecture, engineering challenges, or potential opportunities? I'd love to connect and explore how we can collaborate.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h4 className="text-xl font-semibold text-foreground mb-8 text-center">Contact Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg hover:bg-secondary border border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{link.label}</div>
                  <div className="text-sm text-muted-foreground">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              I typically respond to messages within 24 hours. For urgent inquiries, please call directly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
