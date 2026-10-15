"use client";

import { useState } from "react";
import {
  portfolioData,
  SkillCategory,
} from "@/data/portfolio-data";
import {
  Search,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Server,
  Cloud,
  Activity,
  UserCheck,
  X,
} from "lucide-react";

const categoryIcons: Record<string, typeof Terminal> = {
  cicd: Layers,
  containers: Server,
  iac: Cpu,
  aws: Cloud,
  monitoring: Activity,
  "os-scripting": Terminal,
  "soft-skills": UserCheck,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(" ");

  const categories: SkillCategory[] = portfolioData.skillsCategories;

  const trimmedQuery = searchQuery.trim();

  const filteredCategories = categories
    .map((cat) => {
      if (activeCategory !== "all" && cat.slug !== activeCategory) {
        return null;
      }

      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(trimmedQuery.toLowerCase())
      );

      if (trimmedQuery && filteredSkills.length === 0) {
        return null;
      }

      return {
        ...cat,
        skills: filteredSkills,
      };
    })
    .filter((cat): cat is SkillCategory => cat !== null);

  const totalSkillCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>ATS Parsed & Verified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical Skills & Competencies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Categorized technologies and platforms honed across 1.5+ years of real-world cloud
              engineering and production deployments.
            </p>
          </div>

          {/* Real-time search filter */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery.trim() ? searchQuery : ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Terraform)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-xs"
            />
            {trimmedQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear skill search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 text-xs font-medium no-scrollbar">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-2 rounded-xl border transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === "all"
                ? "bg-cyan-600 border-cyan-600 text-white font-bold shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            All Skills ({totalSkillCount})
          </button>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-3.5 py-2 rounded-xl border transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-cyan-600 border-cyan-600 text-white font-bold shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat.title} ({cat.skills.length})
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.slug] || Terminal;
            return (
              <div
                key={cat.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-cyan-400 hover:shadow-md transition-all group shadow-xs"
              >
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      {cat.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => {
                    const isMatched =
                      trimmedQuery.length > 0 &&
                      skill.name.toLowerCase().includes(trimmedQuery.toLowerCase());
                    return (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                          isMatched
                            ? "bg-cyan-600 border-cyan-600 text-white font-bold scale-105 shadow-xs"
                            : "bg-slate-50 border-slate-200 text-slate-700 font-medium hover:border-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 border border-dashed border-slate-300 rounded-2xl bg-white">
            <p className="text-slate-500 text-sm">
              No skills found matching &ldquo;{trimmedQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-3 text-xs text-cyan-600 font-bold hover:underline font-mono"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
