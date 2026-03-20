"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrainCircuit, Network, Database } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="AI Engineer building production-grade agents and intelligent systems."
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
              I'm pursuing concurrent degrees in <strong className="text-white">B.S. Artificial Intelligence</strong> and <strong className="text-white">B.S. Business Data Analytics (STEM)</strong> at Arizona State University, maintaining a 4.0 GPA. My focus sits at the intersection of language models, autonomous agents, and real-world data systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in <span className="text-electric-blue">LLM engineering, agentic orchestration with LangGraph, and RAG pipeline design</span>. From building multi-agent systems with shared state and conditional routing to wiring retrieval layers over vector databases like FAISS and Pinecone — I engineer AI systems that reason, retrieve, and act.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm particularly drawn to <strong className="text-white">autonomous AI agents, domain-specific tooling, and applied generative AI</strong> — systems where language models move beyond chat and become reliable components in production workflows.
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
            <div className="glass p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-electric-blue/30 transition-colors">
              <div className="p-3 bg-electric-blue/10 rounded-lg mb-4 text-electric-blue">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">LLM Engineering</h3>
              <p className="text-sm text-slate-400">
                Prompt engineering, API integration, and chaining LLMs into reliable, production-grade pipelines.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-violet/30 transition-colors sm:translate-y-8">
              <div className="p-3 bg-violet/10 rounded-lg mb-4 text-violet">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Agentic Systems</h3>
              <p className="text-sm text-slate-400">
                Multi-agent orchestration with LangGraph — planning, tool use, reflection, and conditional routing.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-cyan/30 transition-colors">
              <div className="p-3 bg-cyan/10 rounded-lg mb-4 text-cyan">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">RAG & Retrieval</h3>
              <p className="text-sm text-slate-400">
                Vector search, embeddings, and knowledge retrieval systems using FAISS and Pinecone.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col justify-center items-center border border-white/5 bg-gradient-to-br from-electric-blue/5 to-violet/5 sm:translate-y-8">
               <div className="text-center">
                 <div className="text-4xl font-bold text-gradient mb-1">4.0</div>
                 <div className="text-sm text-slate-400 uppercase tracking-widest">GPA @ ASU</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
