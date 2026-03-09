import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-3xl font-bold tracking-tighter text-gradient mb-6">
          Pranshu Ghori
        </div>
        <p className="text-slate-400 text-center max-w-md mb-8">
          Data Analytics Student | Machine Learning Enthusiast <br />
          Building End-to-End Data & ML Workflows.
        </p>

        <div className="flex space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-electric-blue transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:pranshughori203@gmail.com"
            className="text-slate-400 hover:text-cyan transition-colors hover:scale-110 transform duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="w-full h-px border-t border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Pranshu Ghori. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#about" className="hover:text-slate-300">About</Link>
            <Link href="#projects" className="hover:text-slate-300">Projects</Link>
            <Link href="#contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
