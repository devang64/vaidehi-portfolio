import type { Metadata } from "next";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import {
  FileDown,
  ArrowLeft,
} from "lucide-react";
import ResumePrintButton from "@/components/ResumePrintButton";

export const metadata: Metadata = {
  title: "Resume | Vaidehi Savaliya - DevOps Engineer",
  description:
    "Official resume of Vaidehi Savaliya. DevOps Engineer with 1.5+ years of experience in CI/CD, AWS, Terraform, Docker, ECS, and EKS. AWS Certified Solutions Architect – Associate.",
  alternates: {
    canonical: "https://vaidehi-portfolio-bay.vercel.app/resume",
  },
  openGraph: {
    title: "Resume | Vaidehi Savaliya - DevOps Engineer",
    description:
      "Official resume of Vaidehi Savaliya. DevOps Engineer with 1.5+ years of experience in CI/CD, AWS, Terraform, Docker, ECS, and EKS.",
    url: "https://vaidehi-portfolio-bay.vercel.app/resume",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  const { personal, skillsCategories } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-100/70 text-gray-900 font-sans print:bg-white print:p-0 selection:bg-slate-200">
      {/* Top Floating Control Bar (Hidden when printing) */}
      <aside aria-label="Resume Actions" className="sticky top-0 z-40 bg-white border-b border-slate-200 text-slate-800 py-3 px-4 shadow-xs no-print">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center space-x-2">
            <a
              href="/Vaidehi_Savaliya_Resume.pdf"
              download="Vaidehi_Savaliya_Resume.pdf"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-xs rounded-lg shadow-xs transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <ResumePrintButton />
          </div>
        </div>
      </aside>

      {/* Main Single-Column Resume Document matching the exact PDF */}
      <div className="max-w-3xl mx-auto my-8 p-8 sm:p-12 bg-white border border-slate-200 shadow-sm print:max-w-none print:m-0 print:border-none print:shadow-none print:p-0">
        {/* Header Section */}
        <header className="text-center pb-4 mb-5 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-800">
            {personal.name}
          </h1>
          <p className="text-sm font-semibold text-gray-800 mt-1">
            DevOps Engineer
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-gray-700 mt-2 font-mono">
            <span>
              <a href={`tel:${personal.phone}`} className="hover:underline">
                {personal.phone}
              </a>
            </span>
            <span>|</span>
            <span>
              <a href={`mailto:${personal.email}`} className="hover:underline">
                {personal.email}
              </a>
            </span>
            <span>|</span>
            <span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Linkedin
              </a>
            </span>
            <span>|</span>
            <span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Github
              </a>
            </span>
            <span>|</span>
            <span>
              <Link href="/" className="hover:underline text-blue-700 font-bold">
                Portfolio
              </Link>
            </span>
          </div>
        </header>

        {/* 1. PROFILE */}
        <section className="mb-5">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2 font-mono">
            PROFILE
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
            {personal.summary}
          </p>
        </section>

        {/* 2. TECHNICAL SKILLS */}
        <section className="mb-5">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2 font-mono">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-800">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline">
                <span className="font-bold sm:w-60 shrink-0 text-gray-950">
                  {cat.title}:
                </span>
                <span className="text-gray-800">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WORK EXPERIENCE */}
        <section className="mb-5">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2.5 font-mono">
            WORK EXPERIENCE
          </h2>
          <div className="space-y-4">
            {/* Autotroph Infotech */}
            <article>
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-gray-950">Autotroph Infotech</h3>
                <span className="text-xs font-mono text-gray-600">Feb 2026 – Oct 2026</span>
              </div>
              <p className="text-xs font-semibold text-gray-700">Junior DevOps Engineer</p>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-800">
                <li>Built and maintained CI/CD pipelines in <span className="font-bold text-gray-950">AWS CodePipeline</span> to automate application deployments.</li>
                <li>Deployed and managed containerized applications with <span className="font-bold text-gray-950">Docker</span> on <span className="font-bold text-gray-950">Amazon ECS</span> and <span className="font-bold text-gray-950">Amazon EKS</span>.</li>
                <li>Monitored infrastructure and application performance using <span className="font-bold text-gray-950">Prometheus, Grafana, and Amazon CloudWatch</span>.</li>
                <li>Configured <span className="font-bold text-gray-950">IAM users, roles, and policies</span>, and supported Linux and Windows Server environments.</li>
              </ul>
            </article>

            {/* Rejoicehub LLP */}
            <article>
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-gray-950">Rejoicehub LLP</h3>
                <span className="text-xs font-mono text-gray-600">May 2025 – Jan 2026</span>
              </div>
              <p className="text-xs font-semibold text-gray-700">DevOps Engineer</p>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-800">
                <li>Improved CI/CD workflows in <span className="font-bold text-gray-950">Jenkins and GitHub Actions</span>, making deployments faster and more reliable.</li>
                <li>Supported 20+ releases across <span className="font-bold text-gray-950">AWS, DigitalOcean, and Contabo</span> while optimizing cloud resource usage.</li>
                <li>Designed and provisioned secure, scalable AWS infrastructure with <span className="font-bold text-gray-950">Terraform</span>.</li>
                <li>Wrote <span className="font-bold text-gray-950">Bash scripts</span> to automate deployments, monitoring, and routine infrastructure tasks.</li>
              </ul>
            </article>

            {/* F13 Technologies */}
            <article>
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-gray-950">F13 Technologies</h3>
                <span className="text-xs font-mono text-gray-600">Jul 2024 – Oct 2024</span>
              </div>
              <p className="text-xs font-semibold text-gray-700">AWS Cloud Intern</p>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-800">
                <li>Designed AWS architectures using <span className="font-bold text-gray-950">EC2, S3, RDS, Lambda, and API Gateway</span>.</li>
                <li>Assisted in migrating on-premises applications to AWS to improve performance and lower infrastructure costs.</li>
                <li>Prepared architecture and configuration documentation in line with AWS best practices.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* 4. PROJECTS */}
        <section className="mb-5">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2.5 font-mono">
            PROJECTS
          </h2>
          <div className="space-y-3.5">
            <article>
              <h3 className="text-xs sm:text-sm font-bold text-gray-950">CI/CD Automation Framework</h3>
              <p className="text-xs text-gray-600 font-mono">AWS, Jenkins &amp; Docker</p>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-800">
                <li>Built an automated CI/CD pipeline for a two-tier application using <span className="font-bold text-gray-950">Jenkins and Docker on AWS</span>.</li>
                <li>Increased release frequency and made deployments reliable and repeatable.</li>
              </ul>
            </article>

            <article>
              <h3 className="text-xs sm:text-sm font-bold text-gray-950">Infrastructure Automation</h3>
              <p className="text-xs text-gray-600 font-mono">AWS &amp; Terraform</p>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-800">
                <li>Automated a complete AWS setup with <span className="font-bold text-gray-950">Terraform</span>, covering VPC, subnets, security groups, EC2, and an <span className="font-bold text-gray-950">ALB</span>.</li>
                <li>Improved consistency and reduced deployment errors through Infrastructure as Code.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* 5. CERTIFICATES */}
        <section className="mb-5">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2 font-mono">
            CERTIFICATES
          </h2>
          <div className="space-y-1 text-xs sm:text-sm text-gray-800">
            <p>
              <span className="font-bold text-gray-950">AWS Certified Solutions Architect – Associate</span> – Amazon Web Services (AWS)
            </p>
            <p>
              <span className="font-bold text-gray-950">AWS Certified Cloud Practitioner</span> – Amazon Web Services (AWS)
            </p>
          </div>
        </section>

        {/* 6. EDUCATION */}
        <section className="mb-3">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2 font-mono">
            EDUCATION
          </h2>
          <div className="text-xs sm:text-sm text-gray-800">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-bold text-gray-950">Bachelor of Computer Applications (BCA)</h3>
              <span className="font-mono text-xs text-gray-600">2021 – 2024</span>
            </div>
            <p className="text-gray-700 text-xs">Sutex Bank College of Computer Applications &amp; Science</p>
            <p className="text-xs text-gray-800 mt-1">
              • Awarded the MYSY Scholarship, a merit-based recognition given to promising students.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
