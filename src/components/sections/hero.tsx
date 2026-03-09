"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Terminal, Database, DatabaseZap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-electric-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[30rem] h-[30rem] bg-violet/10 rounded-full blur-[100px]" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{ maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)" }}
        />
      </div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Available for Summer 2026 Internships</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Pranshu Ghori</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-slate-300 mb-4 max-w-2xl mx-auto md:mx-0"
          >
            Data Analytics Student | Machine Learning Enthusiast <br/> Building End-to-End Data & ML Workflows.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-lg"
          >
            ASU student focused on Python, SQL, machine learning, analytics, and real-world data systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button size="lg" variant="primary" className="w-full sm:w-auto group" asChild>
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Premium Visual / Floating UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full max-w-md hidden md:block perspective-1000"
        >
          <div className="relative glass border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-violet/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-500 font-mono">model_pipeline.py</div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start">
                  <span className="text-violet mr-3">1</span>
                  <span className="text-pink-400">import</span>
                  <span className="text-slate-300 ml-2">pandas</span>
                  <span className="text-pink-400 ml-2">as</span>
                  <span className="text-slate-300 ml-2">pd</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">2</span>
                  <span className="text-pink-400">from</span>
                  <span className="text-slate-300 ml-2">sklearn.ensemble</span>
                  <span className="text-pink-400 ml-2">import</span>
                  <span className="text-electric-blue ml-2">RandomForestRegressor</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">3</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">4</span>
                  <span className="text-slate-400 italic"># Initialize ML Pipeline</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">5</span>
                  <span className="text-slate-300">model = RandomForestRegressor(</span>
                </div>
                <div className="flex items-start ml-8">
                  <span className="text-violet mr-3">6</span>
                  <span className="text-cyan">n_estimators</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-orange-400">100</span>
                  <span className="text-slate-300">,</span>
                </div>
                <div className="flex items-start ml-8">
                  <span className="text-violet mr-3">7</span>
                  <span className="text-cyan">random_state</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-orange-400">42</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">8</span>
                  <span className="text-slate-300">)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">9</span>
                </div>
                <div className="flex items-start">
                  <span className="text-violet mr-3">10</span>
                  <span className="text-electric-blue">print</span>
                  <span className="text-slate-300">(</span>
                  <span className="text-green-400">"Deploying data solutions..."</span>
                  <span className="text-slate-300">)</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass border-white/10 p-4 rounded-xl shadow-lg flex items-center space-x-3 backdrop-blur-md"
            >
              <div className="bg-electric-blue/20 p-2 rounded-lg">
                <DatabaseZap className="text-electric-blue w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Data Optimized</div>
                <div className="text-[10px] text-green-400">99.9% Accuracy</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured Metrics Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-6 z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1">4.0</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Cum. GPA</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1">10+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Projects Built</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1">2027</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Graduation Year</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold text-white mb-1 text-electric-blue">Data / ML</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Primary Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
