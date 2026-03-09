"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, LineChart, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "California Housing Price Prediction",
    icon: <HomeIcon className="w-6 h-6 text-electric-blue" />,
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    summary: [
      "Built an end-to-end regression ML pipeline",
      "Used stratified train/test split, preprocessing with ColumnTransformer, and unified Pipeline",
      "Engineered predictive features like log transforms, ratio metrics, geo-cluster similarity",
      "Evaluated using cross-validation and RMSE",
      "Saved deployable artifact with joblib"
    ],
    github: "https://github.com",
    demo: "https://github.com",
    glowColor: "electric-blue"
  },
  {
    title: "U.S. Flight Delay & Cancellation Analysis",
    icon: <LineChart className="w-6 h-6 text-violet" />,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    summary: [
      "Analyzed 3 million U.S. flight records",
      "Identified delay and cancellation patterns by airline, route, season, and operational cause",
      "Engineered time-based features such as hour, weekday, and season",
      "Found late aircraft and carrier operations were major contributors to delay minutes",
      "Produced visual reports with actionable insights"
    ],
    github: "https://github.com",
    demo: "https://github.com",
    glowColor: "violet"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world data problems solved with end-to-end machine learning and analytics workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full flex flex-col group overflow-hidden ${
                  project.glowColor === 'electric-blue' 
                    ? 'hover:border-electric-blue/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]' 
                    : 'hover:border-violet/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
                }`}
              >
                <div className={`h-2 w-full ${project.glowColor === 'electric-blue' ? 'bg-electric-blue' : 'bg-violet'}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${
                      project.glowColor === 'electric-blue' ? 'group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30' : 'group-hover:bg-violet/10 group-hover:border-violet/30'
                    } transition-colors`}>
                      {project.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <ul className="space-y-3 mt-2">
                    {project.summary.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-400">
                        <span className={`min-w-[5px] h-[5px] rounded-full mt-2 mr-3 ${project.glowColor === 'electric-blue' ? 'bg-electric-blue/70' : 'bg-violet/70'}`} />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 border-t border-white/5 gap-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button variant={project.glowColor === 'electric-blue' ? 'primary' : 'default'} size="sm" className={`w-full ${project.glowColor !== 'electric-blue' ? 'bg-gradient-to-r from-violet to-fuchsia-600 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border-none' : ''}`} asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
