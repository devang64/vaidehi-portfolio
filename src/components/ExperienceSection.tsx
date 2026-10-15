"use client";

import { portfolioData, Experience } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences: Experience[] = portfolioData.experiences;

  return (
    <section id="experience" className="py-20 relative bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-700" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional DevOps Experience
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A chronological timeline of hands-on impact across cloud architecture, automated CI/CD
            pipelines, and container orchestration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-300 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="relative pl-6 md:pl-10 group"
              aria-labelledby={`exp-${exp.id}`}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-cyan-600 group-hover:bg-cyan-600 group-hover:scale-125 transition-all shadow-sm" />

              {/* Date Column for large screens (positioned left) */}
              <div className="hidden md:block absolute -left-36 top-1 w-28 text-right font-mono text-xs font-bold text-slate-600">
                <time dateTime={exp.startDate}>{exp.period}</time>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 group-hover:border-cyan-300 group-hover:shadow-md transition-all shadow-xs">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
                      {index === 0 ? "Latest Role" : "Previous Role"}
                    </span>
                    <h3
                      id={`exp-${exp.id}`}
                      className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5"
                    >
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-teal-700 mt-0.5">{exp.company}</p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-500 space-y-1 font-medium">
                    <span className="flex items-center gap-1.5 md:hidden font-mono text-cyan-800 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={exp.startDate}>{exp.period}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-700 mb-5 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* ATS Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-slate-800">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 font-bold mr-1">Technologies:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
