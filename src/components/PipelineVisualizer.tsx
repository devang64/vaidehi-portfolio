"use client";

import { useState } from "react";
import {
  GitBranch,
  Layers,
  Box,
  Cpu,
  Server,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface PipelineStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: typeof GitBranch;
  color: string;
  badgeColor: string;
  technologies: string[];
  responsibilities: string[];
  metrics: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: "source",
    stepNumber: "01",
    title: "Source & GitOps",
    subtitle: "Branching, Pull Requests & Webhooks",
    icon: GitBranch,
    color: "from-blue-600 to-indigo-600",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    technologies: ["Git", "GitHub", "Automated Webhooks", "Branch Protections"],
    responsibilities: [
      "Structured feature branching with semantic commit messages and protected main branches.",
      "Automated webhook triggers dispatched on push/pull request to CI servers.",
      "Code review gates ensuring all infrastructure changes undergo peer approval.",
    ],
    metrics: "Instant triggers with 0% dropped commits",
  },
  {
    id: "build",
    stepNumber: "02",
    title: "Continuous Integration",
    subtitle: "Automated Build, Lint & Test",
    icon: Layers,
    color: "from-cyan-600 to-blue-600",
    badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
    technologies: ["AWS CodePipeline", "Jenkins", "GitHub Actions", "Bash Automation"],
    responsibilities: [
      "Built and maintained declarative CI pipelines automating unit tests and linting.",
      "Reduced build friction and deployment wait times through dependency caching.",
      "Integrated secret management using AWS Secrets Manager rather than plaintext files.",
    ],
    metrics: "Accelerated release cycle reliability across 20+ releases",
  },
  {
    id: "container",
    stepNumber: "03",
    title: "Container Packaging",
    subtitle: "Docker Multi-Stage & ECR",
    icon: Box,
    color: "from-teal-600 to-emerald-600",
    badgeColor: "text-teal-700 bg-teal-50 border-teal-200",
    technologies: ["Docker", "Multi-stage Builds", "Amazon ECR", "Security Scanning"],
    responsibilities: [
      "Authored lightweight Dockerfiles utilizing multi-stage builds and Alpine bases.",
      "Built, tagged, and published images to Amazon Elastic Container Registry (ECR).",
      "Ensured containers run with non-root security contexts adhering to cloud hardening.",
    ],
    metrics: "Reduced container footprint to under 50MB",
  },
  {
    id: "iac",
    stepNumber: "04",
    title: "Infrastructure as Code",
    subtitle: "Terraform Modular Provisioning",
    icon: Cpu,
    color: "from-indigo-600 to-purple-600",
    badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
    technologies: ["Terraform", "AWS CloudFormation", "Remote State (S3)", "DynamoDB Locking"],
    responsibilities: [
      "Designed and provisioned secure, scalable AWS infrastructure with modular Terraform.",
      "Covered VPCs, multi-AZ subnets, security groups, EC2, and Application Load Balancers.",
      "Implemented remote state with S3 and state locking with DynamoDB to eliminate team race conditions.",
    ],
    metrics: "100% reproducible environments with zero configuration drift",
  },
  {
    id: "deploy",
    stepNumber: "05",
    title: "Container Orchestration",
    subtitle: "Amazon ECS & Amazon EKS",
    icon: Server,
    color: "from-amber-600 to-orange-600",
    badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
    technologies: ["Amazon ECS", "Amazon EKS (Kubernetes)", "Application Load Balancer", "Auto Scaling"],
    responsibilities: [
      "Deployed and managed containerized workloads across Amazon ECS and Kubernetes on Amazon EKS.",
      "Configured health check routes and zero-downtime rolling updates with ALB target groups.",
      "Configured IAM roles for service accounts (IRSA) and task execution roles for least privilege.",
    ],
    metrics: "Zero-downtime blue/green & rolling updates",
  },
  {
    id: "monitoring",
    stepNumber: "06",
    title: "Observability & Alerting",
    subtitle: "Prometheus, Grafana & CloudWatch",
    icon: Activity,
    color: "from-emerald-600 to-teal-600",
    badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
    technologies: ["Prometheus", "Grafana", "Amazon CloudWatch", "SNS Incident Alerts"],
    responsibilities: [
      "Configured Prometheus exporters and custom Grafana dashboards for cluster-wide metrics.",
      "Set up CloudWatch Alarms on CPU, memory, 5xx errors, and target response latency.",
      "Proactively resolved resource bottlenecks before affecting production users.",
    ],
    metrics: "Sub-minute incident detection and 99.9% availability",
  },
];

export default function PipelineVisualizer() {
  const [selectedStageId, setSelectedStageId] = useState<string>("iac");

  const selectedStage =
    pipelineStages.find((s) => s.id === selectedStageId) || pipelineStages[3];

  return (
    <section id="pipeline" className="py-20 relative bg-slate-100/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-800 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>Interactive DevOps Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Automated CI/CD Lifecycle
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Click any stage of the pipeline below to inspect how I automate, containerize, provision, and
            monitor production environments.
          </p>
        </div>

        {/* Pipeline Stage Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {pipelineStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`flex flex-col text-left p-4 rounded-xl border transition-all relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer ${
                  isSelected
                    ? "bg-white border-cyan-500 shadow-md scale-[1.02]"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs"
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stage.color}`}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected
                        ? `bg-gradient-to-tr ${stage.color} text-white font-bold`
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">{stage.stepNumber}</span>
                </div>

                <h3
                  className={`text-sm font-bold mb-1 transition-colors ${
                    isSelected ? "text-cyan-700" : "text-slate-800 group-hover:text-slate-900"
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1">{stage.subtitle}</p>

                <div className="mt-3 flex items-center text-[11px] font-mono text-slate-500 group-hover:text-cyan-600 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-md relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedStage.color}`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Overview & Tech Tags */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center space-x-3">
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${selectedStage.badgeColor}`}
                >
                  STAGE {selectedStage.stepNumber}
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Production Proven
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">{selectedStage.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{selectedStage.subtitle}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Key Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-mono text-slate-500 font-bold">Target Outcome & Impact</p>
                <p className="text-sm font-bold text-emerald-700 mt-1">
                  {selectedStage.metrics}
                </p>
              </div>
            </div>

            {/* Right Column: Key DevOps Responsibilities */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-600" />
                Vaidehi&apos;s Hands-on Implementation
              </h4>

              <div className="space-y-3">
                {selectedStage.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
