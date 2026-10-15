import type { Metadata } from "next";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import {
  FileDown,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import ResumePrintButton from "@/components/ResumePrintButton";

export const metadata: Metadata = {
  title: "ATS-Optimized Resume | Vaidehi Savaliya - DevOps Engineer",
  description:
    "Clean, single-column, ATS-parsed resume of Vaidehi Savaliya. DevOps Engineer with 1.5+ years of experience in CI/CD, AWS, Terraform, Docker, ECS, and EKS.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  const { personal, experiences, projects, skillsCategories, certifications, education } =
    portfolioData;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans print:p-0 selection:bg-slate-200">
      {/* Top Floating Control Bar (Hidden when printing) */}
      <aside aria-label="Resume Actions" className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white py-3 px-4 shadow-md no-print">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Interactive Portfolio</span>
          </Link>

          <div className="flex items-center space-x-2">
            <a
              href="/Vaidehi_Savaliya_Resume.pdf"
              download="Vaidehi_Savaliya_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <ResumePrintButton />
          </div>
        </div>
      </aside>

      {/* Main Single-Column ATS Resume Document */}
      <main className="max-w-4xl mx-auto py-10 px-6 sm:px-12 print:max-w-none print:py-4 print:px-6">
        {/* Header Section */}
        <header className="border-b-2 border-gray-900 pb-4 mb-6 text-center">
          <h1 className="text-3xl font-black tracking-tight text-gray-950 uppercase">
            {personal.name}
          </h1>
          <p className="text-base font-bold text-gray-700 mt-1 uppercase tracking-wide">
            {personal.title} | AWS Certified Solutions Architect – Associate
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-600 mt-2 font-mono">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${personal.email}`} className="hover:underline">
                {personal.email}
              </a>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${personal.phone}`} className="hover:underline">
                {personal.phone}
              </a>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/vaidehisavaliya8
              </a>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" />
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/VaidehiSavaliya
              </a>
            </span>
          </div>
        </header>

        {/* Section 1: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 font-mono">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            {personal.summary}
          </p>
        </section>

        {/* Section 2: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 font-mono">
            Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-800">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline">
                <span className="font-bold sm:w-56 shrink-0 text-gray-900">
                  {cat.title}:
                </span>
                <span className="text-gray-700">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3 font-mono">
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experiences.map((exp) => (
              <article key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950">{exp.role}</h3>
                    <p className="text-xs font-semibold text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-xs text-gray-600 font-mono sm:text-right">
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="mt-2 list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-800">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3 font-mono">
            Key Projects
          </h2>
          <div className="space-y-4">
            {projects.map((proj) => (
              <article key={proj.id}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-950">{proj.title}</h3>
                  <span className="text-xs font-mono text-gray-500">
                    {proj.technologies.slice(0, 4).join(", ")}
                  </span>
                </div>
                <ul className="mt-1.5 list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-800">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5: Certifications */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 font-mono">
            Certifications
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-gray-800">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-gray-950">{cert.name}</span> –{" "}
                  <span className="text-gray-700">{cert.issuer}</span>
                  <p className="text-xs text-gray-600 mt-0.5">{cert.description}</p>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-semibold shrink-0">
                  {cert.issueDate}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 font-mono">
            Education
          </h2>
          <div className="text-xs sm:text-sm text-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-bold text-gray-950">{education[0].degree}</h3>
                <p className="text-gray-700">{education[0].institution}</p>
              </div>
              <span className="font-mono text-xs text-gray-600">{education[0].period}</span>
            </div>
            <p className="text-xs text-emerald-800 font-medium mt-1">
              • {education[0].honors}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
