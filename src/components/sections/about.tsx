"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrainCircuit, Network, Database, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="AI engineer shipping production-grade agents, RAG systems, and the data pipelines behind them."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m pursuing concurrent degrees in <strong className="text-white">B.S. Artificial Intelligence (STEM)</strong> and <strong className="text-white">B.S. Business Data Analytics (STEM)</strong> at Arizona State University, maintaining a 4.0 GPA. My focus sits at the intersection of language models, autonomous agents, and real-world data systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently, I&apos;m a <strong className="text-white">Data Science Co-Op at Command Credit Corp</strong>, building production data pipelines on AWS serverless infrastructure (Lambda, SST) and shipping statistical risk models over a 72M-record dataset — including a distribution-driven classification scheme now used for risk segmentation by the credit underwriting team.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in <span className="text-electric-blue">LLM engineering, agentic orchestration with LangGraph, and RAG pipeline design</span>. From building multimodal compliance auditing systems on Azure — using Azure Video Indexer, Azure AI Search, and GPT-4o — to production RAG pipelines over FAISS and Pinecone, I engineer AI systems that reason, retrieve, and act with full observability via LangSmith and Azure Application Insights.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m particularly drawn to <strong className="text-white">autonomous AI agents, domain-specific tooling, and applied generative AI</strong> — systems where language models move beyond chat and become reliable, observable components in production workflows. My data science and ML engineering background grounds the AI work in statistical rigor and solid engineering fundamentals.
            </p>
          </motion.div>

          {/* Visual/Cards Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="glass lift p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-electric-blue/30 transition-colors">
              <div className="p-3 bg-electric-blue/10 rounded-lg mb-4 text-electric-blue">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">LLM Engineering</h3>
              <p className="text-sm text-slate-400">
                Prompt engineering, API integration, and chaining LLMs into reliable, production-grade pipelines.
              </p>
            </div>

            <div className="glass lift p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-violet/30 transition-colors sm:translate-y-8">
              <div className="p-3 bg-violet/10 rounded-lg mb-4 text-violet">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Agentic Systems</h3>
              <p className="text-sm text-slate-400">
                Multi-agent orchestration with LangGraph — planning, tool use, reflection, and conditional routing.
              </p>
            </div>

            <div className="glass lift p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-cyan/30 transition-colors">
              <div className="p-3 bg-cyan/10 rounded-lg mb-4 text-cyan">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">RAG & Retrieval</h3>
              <p className="text-sm text-slate-400">
                Vector search, embeddings, and knowledge retrieval using FAISS, Pinecone, and Azure AI Search.
              </p>
            </div>

            <div className="glass lift rounded-2xl border border-white/5 hover:border-electric-blue/30 overflow-hidden relative group sm:translate-y-8 min-h-[220px]">
              <Image
                src="/pranshu.jpeg"
                alt="Pranshu Ghori"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover object-[center_70%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-semibold">Pranshu Ghori</div>
                <div className="flex items-center text-xs text-slate-300 mt-0.5">
                  <MapPin className="w-3 h-3 mr-1 text-electric-blue" />
                  Tempe, AZ
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
