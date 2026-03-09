"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const TOOLS = [
  "Python", "SQL", "Pandas", "NumPy", "scikit-learn", "PyTorch", 
  "HTML", "CSS", "Excel", "Tableau", "Power BI", "Git/GitHub", 
  "Jupyter", "ServiceNow"
];

const CONCEPTS = [
  "Machine Learning Pipelines", "Feature Engineering", "Data Validation", 
  "Model Evaluation", "Cross-Validation", "Regression / Classification", 
  "RMSE, MAE, Precision, Recall, F1", "Bias-Variance Tradeoff", "Leakage Prevention"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="Tools and concepts I use to build scalable data ecosystems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Tools & Tech */}
          <div className="glass p-8 rounded-3xl border border-white/5 shadow-xl hover:border-electric-blue/20 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-px bg-electric-blue mr-4" />
              Tools & Languages
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap gap-3"
            >
              {TOOLS.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-electric-blue/50 hover:bg-electric-blue/10 hover:text-white transition-all cursor-default text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Concepts */}
          <div className="glass p-8 rounded-3xl border border-white/5 shadow-xl hover:border-violet/20 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-px bg-violet mr-4" />
              Core Concepts
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap gap-3"
            >
              {CONCEPTS.map((concept) => (
                <motion.span
                  key={concept}
                  variants={item}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-violet/50 hover:bg-violet/10 hover:text-white transition-all cursor-default text-slate-300"
                >
                  {concept}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
