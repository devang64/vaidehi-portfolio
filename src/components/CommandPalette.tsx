"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Layers,
  Cpu,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  FileDown,
  ExternalLink,
  X,
  CornerDownLeft,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "pipeline",
      title: "Interactive CI/CD Pipeline Visualizer",
      subtitle: "Explore 6-stage DevOps deployment workflow",
      icon: Layers,
      href: "#pipeline",
    },
    {
      id: "skills",
      title: "Technical Skills Matrix",
      subtitle: "AWS, Terraform, Docker, K8s, Jenkins",
      icon: Cpu,
      href: "#skills",
    },
    {
      id: "experience",
      title: "Work Experience Timeline",
      subtitle: "Autotroph Infotech & Rejoicehub LLP",
      icon: Briefcase,
      href: "#experience",
    },
    {
      id: "projects",
      title: "Featured Cloud Projects",
      subtitle: "Terraform IaC & CI/CD Framework",
      icon: FolderGit2,
      href: "#projects",
    },
    {
      id: "certifications",
      title: "AWS Certifications & Education",
      subtitle: "Solutions Architect, Cloud Practitioner & BCA",
      icon: Award,
      href: "#certifications",
    },
    {
      id: "contact",
      title: "Get in Touch",
      subtitle: "Send a direct message to Vaidehi",
      icon: Mail,
      href: "#contact",
    },
    {
      id: "download-pdf",
      title: "Download Resume (PDF)",
      subtitle: "Direct ATS-optimized PDF resume file",
      icon: FileDown,
      action: () => {
        const link = document.createElement("a");
        link.href = "/Vaidehi_Savaliya_Resume.pdf";
        link.download = "Vaidehi_Savaliya_Resume.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "webview-resume",
      title: "Webview (Dedicated ATS Resume)",
      subtitle: "Open single-column web resume at /resume",
      icon: ExternalLink,
      href: "/resume",
    },
  ];

  const filteredActions = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/80">
          <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section, skill, or action (e.g. Terraform, Resume)..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-500 font-mono ml-2 shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.map((action) => {
            const Icon = action.icon;
            if (action.href) {
              return (
                <a
                  key={action.id}
                  href={action.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-cyan-700 group-hover:scale-105 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {action.title}
                      </p>
                      <p className="text-xs text-slate-500">{action.subtitle}</p>
                    </div>
                  </div>
                  <CornerDownLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 transition-colors" />
                </a>
              );
            }

            return (
              <button
                key={action.id}
                onClick={action.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 transition-colors group cursor-pointer text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {action.title}
                    </p>
                    <p className="text-xs text-slate-500">{action.subtitle}</p>
                  </div>
                </div>
                <CornerDownLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 transition-colors" />
              </button>
            );
          })}

          {filteredActions.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Tip: Press ⌘K anywhere to open this menu</span>
          <span>Quick Navigation</span>
        </div>
      </div>
    </div>
  );
}
