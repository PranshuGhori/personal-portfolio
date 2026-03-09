"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[30rem] h-[30rem] bg-cyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Currently seeking Fall 2025 and Summer 2026 data analytics and ML internships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col h-full justify-between hover:border-electric-blue/20 transition-colors">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:pranshughori203@gmail.com" className="flex items-center text-slate-300 hover:text-electric-blue transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-electric-blue/10 transition-colors">
                      <Mail className="w-5 h-5 text-electric-blue" />
                    </div>
                    <span className="text-lg">pranshughori203@gmail.com</span>
                  </a>
                  <a href="tel:+12126410815" className="flex items-center text-slate-300 hover:text-cyan transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-cyan/10 transition-colors">
                      <Phone className="w-5 h-5 text-cyan" />
                    </div>
                    <span className="text-lg">+1 (212) 641-0815</span>
                  </a>
                  <div className="flex items-center text-slate-300 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-violet/10 transition-colors">
                      <MapPin className="w-5 h-5 text-violet" />
                    </div>
                    <span className="text-lg">Tempe, AZ</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="bg-gradient-to-r from-electric-blue/10 to-violet/10 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-white font-semibold mb-2">Resume</h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Download my full resume to see a complete list of my skills, experiences, and academic achievements.
                  </p>
                  <Button variant="primary" className="w-full" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input 
                    id="subject" 
                    type="text" 
                    placeholder="Opportunity discussed" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Hello Pranshu..." 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <Button variant="default" className="w-full mt-4 h-12 text-md">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
