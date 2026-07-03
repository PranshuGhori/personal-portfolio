"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, BrainCircuit } from "lucide-react";
import Link from "next/link";

const TYPED_ROLES = ["LLM Agents", "RAG Systems", "Agentic Workflows", "Production AI"];

// Token styles for the hero code card — mirrors the real Video Compliance QA pipeline
const TOK: Record<string, string> = {
  kw: "text-pink-400",
  mod: "text-slate-300",
  cls: "text-electric-blue",
  fn: "text-cyan",
  str: "text-green-400",
  com: "text-slate-400 italic",
  pl: "text-slate-300",
};

const CODE_LINES: { c: string; t: string }[][] = [
  [
    { c: "kw", t: "from" }, { c: "mod", t: " langgraph.graph " },
    { c: "kw", t: "import" }, { c: "cls", t: " StateGraph" },
  ],
  [
    { c: "kw", t: "from" }, { c: "mod", t: " azure.search.documents " },
    { c: "kw", t: "import" }, { c: "cls", t: " SearchClient" },
  ],
  [],
  [{ c: "com", t: "# Multimodal compliance audit: video → RAG → report" }],
  [
    { c: "pl", t: "graph = " }, { c: "cls", t: "StateGraph" },
    { c: "pl", t: "(AuditState)" },
  ],
  [
    { c: "pl", t: "graph." }, { c: "fn", t: "add_node" },
    { c: "pl", t: "(" }, { c: "str", t: "\"ingest\"" },
    { c: "pl", t: ", index_video)   " }, { c: "com", t: "# transcript + OCR" },
  ],
  [
    { c: "pl", t: "graph." }, { c: "fn", t: "add_node" },
    { c: "pl", t: "(" }, { c: "str", t: "\"retrieve\"" },
    { c: "pl", t: ", hybrid_search) " }, { c: "com", t: "# Azure AI Search" },
  ],
  [
    { c: "pl", t: "graph." }, { c: "fn", t: "add_node" },
    { c: "pl", t: "(" }, { c: "str", t: "\"audit\"" },
    { c: "pl", t: ", flag_violations) " }, { c: "com", t: "# GPT-4o" },
  ],
  [
    { c: "pl", t: "graph." }, { c: "fn", t: "add_edge" },
    { c: "pl", t: "(" }, { c: "str", t: "\"ingest\"" },
    { c: "pl", t: ", " }, { c: "str", t: "\"retrieve\"" }, { c: "pl", t: ")" },
  ],
  [
    { c: "pl", t: "graph." }, { c: "fn", t: "add_edge" },
    { c: "pl", t: "(" }, { c: "str", t: "\"retrieve\"" },
    { c: "pl", t: ", " }, { c: "str", t: "\"audit\"" }, { c: "pl", t: ")" },
  ],
  [
    { c: "pl", t: "app = graph." }, { c: "fn", t: "compile" }, { c: "pl", t: "()" },
  ],
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = words[wordIndex];
      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      setText(current.slice(0, charIndex));
      let delay = deleting ? 40 : 85;
      if (!deleting && charIndex === current.length) {
        deleting = true;
        delay = 2200;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const duration = reduced ? 0 : 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  const tiltRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-electric-blue/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] w-[30rem] h-[30rem] bg-violet/10 rounded-full blur-[100px]"
        />
        
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
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Data Science Co-Op @ Command Credit Corp</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I&apos;m <span className="text-gradient">Pranshu Ghori</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-slate-300 mb-4 max-w-2xl mx-auto md:mx-0"
          >
            AI Engineer · <span className="text-gradient">{typed}</span>
            <span className="type-cursor text-electric-blue" aria-hidden="true">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-lg"
          >
            I build AI systems that ship — agentic RAG pipelines on Azure, LLM-powered workflows, and the production data infrastructure on AWS that feeds them.
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full max-w-md hidden md:block"
          style={{ perspective: 1000 }}
        >
          <motion.div
            ref={tiltRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative glass border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-violet/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-500 font-mono">compliance_graph.py</div>
              </div>

              <div className="space-y-2.5 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex items-start whitespace-pre">
                    <span className="text-violet mr-3 w-4 text-right select-none shrink-0">{i + 1}</span>
                    <span>
                      {line.map((tok, j) => (
                        <span key={j} className={TOK[tok.c]}>{tok.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass border-white/10 p-4 rounded-xl shadow-lg flex items-center space-x-3 backdrop-blur-md"
            >
              <div className="bg-electric-blue/20 p-2 rounded-lg">
                <BrainCircuit className="text-electric-blue w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Audit Agent Online</div>
                <div className="text-[10px] text-green-400">Video · RAG · GPT-4o</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-6 z-20"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1"><CountUp value={4.0} decimals={1} /></span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Cum. GPA</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1"><CountUp value={5} suffix="+" /></span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">AI Agents Built</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1"><CountUp value={2027} /></span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Graduation Year</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold mb-1 text-electric-blue">AWS · Azure</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Production Cloud</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
