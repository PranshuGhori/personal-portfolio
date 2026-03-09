"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Data Analytics Assistant",
    company: "ET Network Infrastructure Expansion – Arizona State University",
    date: "Jun 2025 – Present",
    bullets: [
      "Used ServiceNow to monitor and manage network hardware inventory across lifecycle stages",
      "Exported structured inventory datasets and analyzed them using Excel and Python",
      "Performed data auditing, cleaning, and reconciliation including null/duplicate/outlier validation",
      "Delivered concise reports and dashboards summarizing asset status trends"
    ],
    color: "electric-blue"
  },
  {
    role: "Web Assistant",
    company: "Global HyPT Center – Arizona State University",
    date: "Dec 2024 – Jun 2025",
    bullets: [
      "Maintained and updated university web pages following accessibility and design standards",
      "Used HTML and CSS to edit layouts and fix formatting inconsistencies",
      "Performed QA validation before publication for layout, links, and responsive performance"
    ],
    color: "violet"
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
                  ${exp.color === 'electric-blue' ? 'bg-electric-blue border-electric-blue/20 shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'bg-violet border-violet/20 shadow-[0_0_10px_rgba(139,92,246,0.8)]'}
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
                          <span className={`min-w-[5px] h-[5px] rounded-full mt-2 mr-3 ${exp.color === 'electric-blue' ? 'bg-electric-blue' : 'bg-violet'}`} />
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
