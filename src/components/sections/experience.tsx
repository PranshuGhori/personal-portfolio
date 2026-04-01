"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Data Analytics Assistant",
    company: "ET Network Infrastructure – Arizona State University",
    date: "Jun 2025 – Present",
    bullets: [
      "Analyzed network hardware inventory data in Python, Pandas, and SQL across 1,000+ assets — identifying discrepancies, null fields, and duplicate records to improve data quality for audit cycles.",
      "Built automated ETL pipelines to clean, reconcile, and visualize inventory datasets using Python and Power BI — eliminating manual reconciliation steps and delivering recurring dashboards to infrastructure leadership."
    ],
    color: "electric-blue"
  },
  {
    role: "Web Assistant",
    company: "Global HyPT Center – Arizona State University",
    date: "Dec 2024 – Jun 2025",
    bullets: [
      "Maintained 20+ university web pages using HTML and CSS; performed pre-publication QA validation catching layout breaks, dead links, and responsive failures before production."
    ],
    color: "violet"
  },
  {
    role: "ML Engineer Intern",
    company: "Bigscal Technologies Pvt. Ltd.",
    date: "May 2023 – Sep 2023",
    bullets: [
      "Assisted the ML engineering team building end-to-end production ML pipelines — contributing to data preprocessing, feature engineering, and model training workflows using Python and Scikit-learn.",
      "Built and tested classification and regression models using Scikit-learn, supporting model selection, hyperparameter tuning, and performance benchmarking across multiple production use cases.",
      "Supported MLOps workflows by contributing to model deployment and monitoring tasks — gaining hands-on experience with production-grade ML lifecycle management and pipeline integration."
    ],
    color: "orange"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey in data analytics and web technologies."
        />

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 mt-12 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div 
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#020617] -translate-x-[9px] md:-translate-x-1/2 mt-1.5 z-10
                  ${exp.color === 'electric-blue' ? 'bg-electric-blue border-electric-blue/20 shadow-[0_0_10px_rgba(0,240,255,0.8)]' : exp.color === 'violet' ? 'bg-violet border-violet/20 shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'bg-orange-400 border-orange-400/20 shadow-[0_0_10px_rgba(251,146,60,0.8)]'}
                `} 
              />
              
              <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2" />
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 p-4 text-left ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors shadow-lg group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-xs font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {exp.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm font-medium text-slate-300 mb-6">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                          <span className={`min-w-[5px] h-[5px] rounded-full mt-2 mr-3 ${exp.color === 'electric-blue' ? 'bg-electric-blue' : exp.color === 'violet' ? 'bg-violet' : 'bg-orange-400'}`} />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Vertical line specifically for Desktop centered view */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-electric-blue/50 via-violet/50 to-transparent -translate-x-1/2 z-0" />
        </div>
      </div>
    </section>
  );
}
