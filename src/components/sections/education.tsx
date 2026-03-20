"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <SectionHeading 
          title="Education" 
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-violet/30 transition-colors">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-violet/10 rounded-xl text-violet">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Arizona State University</h3>
                    <p className="text-violet font-medium">Tempe, AZ</p>
                  </div>
                </div>
                
                <div className="mb-2 space-y-1">
                  <h4 className="text-xl text-slate-200 font-semibold">B.S. Business Data Analytics <span className="text-sm font-normal text-slate-400">(STEM-Designated)</span></h4>
                  <h4 className="text-xl text-slate-200 font-semibold">B.S. Artificial Intelligence <span className="text-sm font-normal text-slate-400">(STEM-Designated)</span></h4>
                  <p className="text-xs text-violet font-medium uppercase tracking-wider">Concurrent Degrees</p>
                </div>
                <p className="text-slate-400 mb-6">Aug 2024 – Dec 2027</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <span className="text-slate-300 font-medium mr-2">GPA:</span>
                    <span className="text-white font-bold">4.00</span>
                    <span className="text-slate-500 text-sm ml-1">/ 4.00</span>
                  </div>
                  
                  <div className="flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-electric-blue mr-2" />
                    <span className="text-slate-300 text-sm font-medium">Dean's Honor List (Fall 2024, Spring 2025)</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-full bg-white/5 border border-white/10 shrink-0">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-electric-blue to-violet">
                  ASU
                </span>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
