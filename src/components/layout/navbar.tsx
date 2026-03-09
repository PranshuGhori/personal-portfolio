"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass border-white/10 shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gradient">
          PG.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-electric-blue",
                activeSection === link.href.substring(1)
                  ? "text-electric-blue"
                  : "text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="#resume">Resume</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 flex flex-col items-center py-6 space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base font-medium transition-colors hover:text-electric-blue",
                activeSection === link.href.substring(1)
                  ? "text-electric-blue"
                  : "text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col w-full px-8 space-y-3 pt-4 border-t border-white/10">
            <Button variant="ghost" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link href="#contact" className="w-full">Contact</Link>
            </Button>
            <Button variant="primary" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link href="#resume" className="w-full">Resume</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
