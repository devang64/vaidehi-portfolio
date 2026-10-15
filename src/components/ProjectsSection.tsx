"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio-data";
import {
  FolderGit2,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  X,
  Workflow,
  Cpu,
} from "lucide-react";
import { GithubIcon, MediumIcon } from "./icons";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = portfolioData.projects;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => (activeFilter === "IaC" ? p.category === "IaC" : p.category === "CI/CD"));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-800 text-xs font-mono uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-700" />
              <span>Production Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured DevOps Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Real-world cloud infrastructure deployments built with Terraform, Docker containers, and
              automated CI/CD pipelines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {["All", "IaC", "CI/CD"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-white text-cyan-700 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {filter === "All"
                  ? "All Projects"
                  : filter === "IaC"
                  ? "Infrastructure as Code"
                  : "CI/CD Pipelines"}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 flex items-center gap-1.5">
                    {project.category === "IaC" ? (
                      <Cpu className="w-3.5 h-3.5 text-cyan-700" />
                    ) : (
                      <Workflow className="w-3.5 h-3.5 text-cyan-700" />
                    )}
                    {project.category === "IaC" ? "Terraform & AWS" : "Jenkins & Docker"}
                  </span>

                  <div className="flex items-center space-x-1.5">
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
                        title="Read Medium Article"
                        aria-label="Read Medium Article"
                      >
                        <MediumIcon className="w-4 h-4 text-emerald-700" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors mb-2.5">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed font-normal">{project.summary}</p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-600" />
                    Architecture Highlights
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                    {project.architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-center space-x-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                        <span className="truncate">{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Technologies & CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 hover:underline cursor-pointer"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Architecture Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest">
                Architecture Blueprint
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                    Implementation Details
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.bullets.map((b, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-bold mb-2">
                    Complete Infrastructure Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white border border-slate-300 text-slate-800 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-2">
                    Architectural Invariants & Best Practices
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {selectedProject.architecture.map((a, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-mono font-bold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-700 flex items-center space-x-1.5 shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
