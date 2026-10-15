"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileDown,
  Menu,
  X,
  ExternalLink,
  Search,
  ChevronDown,
} from "lucide-react";
import { VLogoIcon } from "./icons";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-900/5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/60"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo with V badge */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          >
            <VLogoIcon className="w-10 h-10 rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200 shrink-0" />
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg group-hover:text-cyan-600 transition-colors">
                Vaidehi Savaliya
              </span>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs text-slate-500 font-mono">DevOps Engineer</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="#about"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              href="#pipeline"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Pipeline
            </Link>
            <Link
              href="#skills"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs: Search & Resume Dropdown */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 border border-slate-200 rounded-lg transition-all"
              title="Search Portfolio (Cmd+K / Ctrl+K)"
              aria-label="Search Portfolio"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-500 font-mono shadow-xs">
                ⌘K
              </kbd>
            </button>

            {/* Resume Dropdown (contains Download PDF and Webview) */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-sm shadow-cyan-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-slate-200 p-1.5 shadow-xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a
                      href="/Vaidehi_Savaliya_Resume.pdf"
                      download="Vaidehi_Savaliya_Resume.pdf"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center space-x-2.5 px-3 py-2.5 text-xs font-medium rounded-lg hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                        <FileDown className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Download PDF</p>
                        <p className="text-[10px] text-slate-500">Official ATS resume file</p>
                      </div>
                    </a>

                    <Link
                      href="/resume"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center space-x-2.5 px-3 py-2.5 text-xs font-medium rounded-lg hover:bg-teal-50 hover:text-teal-800 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Webview</p>
                        <p className="text-[10px] text-slate-500">Dedicated ATS web view</p>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="/Vaidehi_Savaliya_Resume.pdf"
              download="Vaidehi_Savaliya_Resume.pdf"
              className="p-2 text-white bg-cyan-600 rounded-lg shadow-sm"
              aria-label="Download PDF"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <Link
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            href="#pipeline"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Pipeline Visualizer
          </Link>
          <Link
            href="#skills"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Technical Skills
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Work Experience
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Cloud Projects
          </Link>
          <Link
            href="#certifications"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Certifications
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <a
              href="/Vaidehi_Savaliya_Resume.pdf"
              download="Vaidehi_Savaliya_Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-lg text-sm shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2 bg-slate-100 border border-slate-300 text-slate-800 font-bold rounded-lg text-sm"
            >
              <ExternalLink className="w-4 h-4 text-cyan-600" />
              <span>Webview (ATS Resume)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
