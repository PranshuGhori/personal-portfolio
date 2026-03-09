"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Target, Server, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Data-driven problem solver with a passion for building intelligent systems."
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
              I am a <strong className="text-white">Data Analytics student at Arizona State University</strong> maintaining a 4.0 GPA, specializing in building end-to-end Python and SQL workflows while applying machine learning to complex structured data problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My hands-on experience spans <span className="text-electric-blue">data validation, feature engineering, and robust model evaluation</span>. Whether it's managing lifecycle integrations for university networks or analyzing massive datasets, I focus on delivering scalable, analytics-driven reporting and transparent insights.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am particularly drawn to <strong className="text-white">data science, credit risk analysis, fraud analytics, and developing robust SaaS-based architectures</strong> where data can safely and directly impact business outcomes.
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
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning</h3>
              <p className="text-sm text-slate-400">
                Predictive modeling, regression, classification, and robust cross-validation pipelines.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-violet/30 transition-colors sm:translate-y-8">
              <div className="p-3 bg-violet/10 rounded-lg mb-4 text-violet">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Data Engineering</h3>
              <p className="text-sm text-slate-400">
                Data auditing, cleaning, reconciliation, and feature engineering from raw sources.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-start border border-white/5 hover:border-cyan/30 transition-colors">
              <div className="p-3 bg-cyan/10 rounded-lg mb-4 text-cyan">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Analytics Setup</h3>
              <p className="text-sm text-slate-400">
                End-to-end Python/SQL workflows reporting dynamic business trends via dashboards.
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
