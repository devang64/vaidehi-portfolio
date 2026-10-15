"use client";

import { portfolioData, Certification } from "@/data/portfolio-data";
import { Award, GraduationCap, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CertificationsSection() {
  const certifications: Certification[] = portfolioData.certifications;
  const education = portfolioData.education[0];

  return (
    <section id="certifications" className="py-20 relative bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Credentials & Formal Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AWS Certifications & Academic Background
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Industry-validated technical excellence backed by rigorous AWS examinations and formal
            computer applications education.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all shadow-xs"
            >
              {/* Top Accent Gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.badgeColor}`}
              />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-800 font-bold tracking-wider uppercase">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      {cert.name}
                    </h3>
                  </div>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Verify credential on AWS"
                  title="Verify credential on AWS"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                {cert.description}
              </p>

              {/* Core Validated Topics */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Validated Competencies
                </p>
                {cert.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {cert.issueDate}
                </span>
                <span className="text-slate-400 font-medium">Official AWS Verification</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-700 uppercase tracking-wider font-bold">
                  Formal Education
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-1">{education.institution}</p>
                <p className="text-xs text-slate-500 mt-0.5">{education.location}</p>
              </div>
            </div>

            <div className="md:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-cyan-800 font-mono text-xs font-bold">
                {education.period}
              </span>
            </div>
          </div>

          {/* Scholarship & Honors */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
            <div className="flex items-center space-x-2 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Merit Recognition</span>
            </div>
            <p className="text-sm text-slate-800 font-medium">{education.honors}</p>
          </div>

          {/* Key Coursework */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
              Relevant Foundations & Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
