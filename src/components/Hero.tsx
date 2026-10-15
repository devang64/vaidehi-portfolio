import { portfolioData } from "@/data/portfolio-data";
import {
  FileDown,
  Mail,
  ShieldCheck,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-100/60 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-teal-100/50 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-mono text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-5" />
            <span className="font-semibold text-slate-800">{personal.status}</span>
            <span className="text-slate-300">|</span>
            <span className="text-cyan-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              AWS Certified
            </span>
          </div>

          {/* Headline Name */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              {personal.name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-teal-700 to-indigo-700 tracking-wide font-mono">
              DevOps Engineer
            </p>
          </div>

          {/* Subtitle summary */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            {personal.summary}
          </p>

          {/* Location & Quick Info */}
          <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{personal.location}</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Download Resume Button */}
            <a
              href="/Vaidehi_Savaliya_Resume.pdf"
              download="Vaidehi_Savaliya_Resume.pdf"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-sm shadow-md shadow-cyan-600/20 hover:from-cyan-500 hover:to-teal-500 transition-all hover:scale-105 active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Contact Link */}
            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 hover:text-cyan-700 text-sm font-semibold transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links Bar including LinkedIn and Medium */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-slate-600 text-xs font-mono">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4 text-slate-800" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 transition-all shadow-xs"
            >
              <MediumIcon className="w-4 h-4 text-emerald-700" />
              <span>Medium Articles</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>{personal.email}</span>
            </a>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="w-full pt-8 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {personal.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md hover:border-cyan-500/50 transition-all text-center"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-teal-700 font-mono">
                    {metric.value}
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{metric.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#pipeline"
            className="flex flex-col items-center space-y-1.5 text-xs font-mono text-slate-400 hover:text-cyan-600 transition-colors"
          >
            <span>EXPLORE DEVOPS WORKFLOW</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
