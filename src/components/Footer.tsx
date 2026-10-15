import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-200 bg-white py-12 no-print relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand Info with VS logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-tr from-cyan-600 to-indigo-600 text-xs italic tracking-tighter">
                V
              </div>
            </div>
            <div>
              <span className="font-extrabold text-slate-900">{personal.name}</span>
              <p className="text-xs text-slate-500 font-mono">
                DevOps Engineer • AWS Solutions Architect
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-medium text-slate-600">
            <Link href="#about" className="hover:text-cyan-700 transition-colors">
              About
            </Link>
            <Link href="#pipeline" className="hover:text-cyan-700 transition-colors">
              Pipeline
            </Link>
            <Link href="#skills" className="hover:text-cyan-700 transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-cyan-700 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-cyan-700 transition-colors">
              Projects
            </Link>
            <Link href="#certifications" className="hover:text-cyan-700 transition-colors">
              Certifications
            </Link>
            <Link href="/resume" className="hover:text-cyan-700 transition-colors">
              Webview (Resume)
            </Link>
            <Link href="#contact" className="hover:text-cyan-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons including LinkedIn and Medium */}
          <div className="flex items-center space-x-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-slate-300 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-slate-800" />
            </a>
            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors"
              aria-label="Medium Technical Articles"
              title="Medium Technical Articles"
            >
              <MediumIcon className="w-4 h-4 text-emerald-700" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-cyan-700 hover:border-slate-300 transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4 text-cyan-600" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vaidehi Savaliya. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] text-slate-500">
              AWS Infrastructure & CI/CD Automated
            </span>
          </div>
          <a
            href="#about"
            className="flex items-center space-x-1 text-slate-500 hover:text-cyan-700 font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
