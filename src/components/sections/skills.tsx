"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const SKILL_GROUPS = [
  {
    title: "Agentic AI & LLM Engineering",
    accent: "electric-blue",
    hoverBorder: "hover:border-electric-blue/20",
    badgeHover: "hover:border-electric-blue/50 hover:bg-electric-blue/10",
    skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "LLM Evaluation", "NLP", "OpenAI API", "Anthropic Claude", "Azure OpenAI", "GPT-4o", "xAI Grok", "FAISS", "Pinecone", "Azure AI Search", "Vector Databases", "Embeddings", "LangSmith", "Azure Application Insights"],
  },
  {
    title: "Machine Learning & Deep Learning",
    accent: "violet",
    hoverBorder: "hover:border-violet/20",
    badgeHover: "hover:border-violet/50 hover:bg-violet/10",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "LSTMs", "Hugging Face", "Deep Learning", "Generative AI", "Fine-Tuning", "Statistical Learning", "Feature Engineering", "Computer Vision"],
  },
  {
    title: "Software Engineering",
    accent: "cyan",
    hoverBorder: "hover:border-cyan-400/20",
    badgeHover: "hover:border-cyan-400/50 hover:bg-cyan-400/10",
    skills: ["Python", "Go", "Java", "SQL", "Algorithms & Data Structures", "Scalable Architecture", "Design Patterns", "FastAPI", "REST APIs", "Git/GitHub"],
  },
  {
    title: "Data & Visualization",
    accent: "orange",
    hoverBorder: "hover:border-orange-400/20",
    badgeHover: "hover:border-orange-400/50 hover:bg-orange-400/10",
    skills: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Power BI", "Excel", "Jupyter", "Alteryx", "Amazon Redshift", "ServiceNow", "Azure Video Indexer", "MLOps"],
  },
];

const ACCENT_BAR: Record<string, string> = {
  "electric-blue": "bg-electric-blue",
  violet: "bg-violet",
  cyan: "bg-cyan-400",
  orange: "bg-orange-400",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The stack I use to design, build, and deploy intelligent AI systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className={`glass p-8 rounded-3xl border border-white/5 shadow-xl ${group.hoverBorder} transition-colors`}
            >
              <h3 className="text-lg font-semibold mb-5 text-white flex items-center">
                <span className={`w-8 h-px ${ACCENT_BAR[group.accent]} mr-4 shrink-0`} />
                {group.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className={`px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 ${group.badgeHover} hover:text-white transition-all cursor-default text-slate-300`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
