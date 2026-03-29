"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, LineChart, Home as HomeIcon, BrainCircuit, Network, Bot } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "RAG Agent",
    icon: <BrainCircuit className="w-6 h-6 text-electric-blue" />,
    tech: ["LangChain", "FAISS", "FastAPI", "Python", "OpenAI"],
    aiTag: true,
    summary: [
      "Retrieval-Augmented Generation pipeline with document ingestion and vector indexing",
      "FAISS vector store for fast semantic similarity search over embedded knowledge base",
      "LangChain orchestration for context retrieval, prompt construction, and LLM reasoning",
      "FastAPI backend exposing a query endpoint for real-time Q&A over custom documents",
      "Designed for extensibility — swap vector store or LLM provider without re-architecting"
    ],
    github: "https://github.com",
    demo: "https://github.com",
    glowColor: "electric-blue",
    placeholder: true,
  },
  {
    title: "Multi-Agent System",
    icon: <Network className="w-6 h-6 text-violet" />,
    tech: ["LangGraph", "Python", "OpenAI", "Anthropic"],
    aiTag: true,
    summary: [
      "Graph-based multi-agent architecture using LangGraph StateGraph",
      "Specialized agents for planning, tool execution, and reflection in a cyclic workflow",
      "Shared agent state with typed annotations for inter-agent communication",
      "Conditional routing logic to handle retries, tool failures, and escalation paths",
      "Modular node design — agents can be hot-swapped or extended independently"
    ],
    github: "https://github.com",
    demo: "https://github.com",
    glowColor: "violet",
    placeholder: true,
  },
  {
    title: "Corporate Brochure Generator",
    icon: <BrainCircuit className="w-6 h-6 text-orange-400" />,
    tech: ["Python", "xAI Grok", "LLM", "Web Scraping", "Jupyter"],
    aiTag: true,
    summary: [
      "End-to-end pipeline that scrapes any corporate website and generates a polished company brochure",
      "Fetches all links from a homepage, then uses Grok to filter only relevant pages (About, Products, Careers, etc.)",
      "Scrapes each selected page and passes consolidated content to Grok for brochure generation",
      "Outputs formatted Markdown ready for publishing or export",
      "Modular structure: scraper.py handles all web utilities, brochure.ipynb orchestrates the full pipeline"
    ],
    github: "https://github.com/PranshuGhori/Corporate-Brochure-Generator",
    demo: "https://github.com/PranshuGhori/Corporate-Brochure-Generator",
    glowColor: "orange",
    placeholder: false,
  },
  {
    title: "RAG Q&A — Powered by LLM (Grok)",
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    tech: ["LangChain", "xAI Grok", "ChromaDB", "OpenAI Embeddings", "FastAPI", "Streamlit"],
    aiTag: true,
    summary: [
      "Production-ready RAG pipeline — ingest PDFs, TXT files, or URLs into a persisted ChromaDB vector store",
      "OpenAI embeddings for retrieval; Grok LLM for grounded, streaming answers with source citations",
      "Three interfaces: Rich CLI with conversation memory, Streamlit chat UI, and FastAPI REST + SSE streaming",
      "Modular rag/ core package (config, chain, ingest) shared across all interfaces",
      "Docker Compose support for one-command deployment"
    ],
    github: "https://github.com/PranshuGhori/documentloader",
    demo: "https://github.com/PranshuGhori/documentloader",
    glowColor: "cyan",
    placeholder: false,
  },
  {
    title: "California Housing Price Prediction",
    icon: <HomeIcon className="w-6 h-6 text-electric-blue" />,
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    aiTag: false,
    summary: [
      "Built an end-to-end regression ML pipeline",
      "Used stratified train/test split, preprocessing with ColumnTransformer, and unified Pipeline",
      "Engineered predictive features like log transforms, ratio metrics, geo-cluster similarity",
      "Evaluated using cross-validation and RMSE",
      "Saved deployable artifact with joblib"
    ],
    github: "https://github.com/PranshuGhori/california-housing-price-prediction",
    demo: "https://github.com/PranshuGhori/california-housing-price-prediction",
    glowColor: "electric-blue",
    placeholder: false,
  },
  {
    title: "U.S. Flight Delay & Cancellation Analysis",
    icon: <LineChart className="w-6 h-6 text-violet" />,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    aiTag: false,
    summary: [
      "Analyzed 3 million U.S. flight records",
      "Identified delay and cancellation patterns by airline, route, season, and operational cause",
      "Engineered time-based features such as hour, weekday, and season",
      "Found late aircraft and carrier operations were major contributors to delay minutes",
      "Produced visual reports with actionable insights"
    ],
    github: "https://github.com/PranshuGhori/flightdata-eda",
    demo: "https://github.com/PranshuGhori/flightdata-eda",
    glowColor: "violet",
    placeholder: false,
  },
];

const GLOW_CLASSES: Record<string, { hover: string; bar: string; icon: string; dot: string; btn: string }> = {
  "electric-blue": {
    hover: "hover:border-electric-blue/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
    bar: "bg-electric-blue",
    icon: "group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30",
    dot: "bg-electric-blue/70",
    btn: "",
  },
  violet: {
    hover: "hover:border-violet/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    bar: "bg-violet",
    icon: "group-hover:bg-violet/10 group-hover:border-violet/30",
    dot: "bg-violet/70",
    btn: "bg-gradient-to-r from-violet to-fuchsia-600 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border-none",
  },
  orange: {
    hover: "hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    bar: "bg-orange-400",
    icon: "group-hover:bg-orange-400/10 group-hover:border-orange-400/30",
    dot: "bg-orange-400/70",
    btn: "bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] border-none",
  },
  cyan: {
    hover: "hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    bar: "bg-cyan-400",
    icon: "group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30",
    dot: "bg-cyan-400/70",
    btn: "bg-gradient-to-r from-cyan-500 to-electric-blue text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] border-none",
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="AI agents, RAG systems, and data pipelines — built end-to-end."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {PROJECTS.map((project, index) => {
            const g = GLOW_CLASSES[project.glowColor] ?? GLOW_CLASSES["electric-blue"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col group overflow-hidden ${g.hover}`}>
                  <div className={`h-2 w-full ${g.bar}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${g.icon} transition-colors`}>
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.aiTag && (
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-electric-blue/10 text-electric-blue border border-electric-blue/30">
                            AI Focus
                          </span>
                        )}
                        {project.placeholder && (
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 text-slate-400 border border-white/10">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mt-2">
                      {project.summary.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                          <span className={`min-w-[5px] h-[5px] rounded-full mt-2 mr-3 ${g.dot}`} />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6 border-t border-white/5 gap-4">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                    <Button
                      variant={project.glowColor === "electric-blue" ? "primary" : "default"}
                      size="sm"
                      className={`w-full ${project.glowColor !== "electric-blue" ? g.btn : ""}`}
                      asChild
                    >
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
