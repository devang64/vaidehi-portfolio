export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "IaC" | "CI/CD" | "Cloud";
  summary: string;
  bullets: string[];
  technologies: string[];
  architecture: string[];
  githubUrl?: string;
  articleUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  description: string;
  topics: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  slug: string;
  skills: { name: string; level?: string }[];
}

export const portfolioData = {
  personal: {
    name: "VAIDEHI SAVALIYA",
    title: "DevOps Engineer",
    subTitle: "AWS Certified Solutions Architect – Associate | Cloud & CI/CD Specialist",
    tagline:
      "Automating CI/CD pipelines, scaling resilient AWS infrastructure, and provisioning declarative Infrastructure as Code.",
    summary:
      "DevOps Engineer with 1.5+ years of hands-on experience in CI/CD automation, AWS infrastructure, and container deployments. Built and maintained pipelines with Jenkins, GitHub Actions, and AWS CodePipeline, provisioned infrastructure with Terraform, and ran containerized applications on Docker, Amazon ECS, and Amazon EKS. AWS Certified Solutions Architect – Associate, with a strong base in Linux and Bash scripting.",
    email: "vaidehisavaliya8@gmail.com",
    phone: "+91 8849906237",
    location: "Surat, Gujarat, India (Open to Remote & Global Roles)",
    linkedin: "https://www.linkedin.com/in/vaidehisavaliya8/",
    github: "https://github.com/VaidehiSavaliya",
    medium: "https://medium.com/@vaidehisavaliya8",
    website: "https://vaidehisavaliya.dev",
    status: "Open to DevOps & Cloud Opportunities",
    metrics: [
      { label: "Experience", value: "1.5+ Yrs", detail: "CI/CD & Cloud Infrastructure" },
      { label: "Production Releases", value: "20+", detail: "Across AWS, DigitalOcean & Multi-Cloud" },
      { label: "AWS Certifications", value: "2x", detail: "Solutions Architect & Cloud Practitioner" },
      { label: "IaC Automation", value: "100%", detail: "Declarative Terraform Stacks" },
    ],
  },

  skillsCategories: [
    {
      title: "CI/CD & Version Control",
      slug: "cicd",
      skills: [
        { name: "AWS CodePipeline" },
        { name: "Jenkins" },
        { name: "GitHub Actions" },
        { name: "Git & GitHub" },
        { name: "Automated Deployments" },
      ],
    },
    {
      title: "Containers & Orchestration",
      slug: "containers",
      skills: [
        { name: "Docker" },
        { name: "Kubernetes (K8s)" },
        { name: "Amazon ECS" },
        { name: "Amazon EKS" },
        { name: "Amazon ECR" },
      ],
    },
    {
      title: "Infrastructure as Code (IaC)",
      slug: "iac",
      skills: [
        { name: "Terraform" },
        { name: "AWS CloudFormation" },
        { name: "Modular Architecture" },
        { name: "Remote State & S3 Locking" },
      ],
    },
    {
      title: "AWS Cloud Ecosystem",
      slug: "aws",
      skills: [
        { name: "Amazon EC2" },
        { name: "Amazon S3" },
        { name: "AWS IAM & Policies" },
        { name: "Amazon VPC & Subnets" },
        { name: "Application Load Balancer (ALB)" },
        { name: "AWS Lambda" },
        { name: "Amazon RDS" },
        { name: "Amazon CloudFront" },
        { name: "AWS CloudTrail" },
        { name: "Amazon Route 53" },
        { name: "AWS Secrets Manager" },
      ],
    },
    {
      title: "Monitoring & Observability",
      slug: "monitoring",
      skills: [
        { name: "Prometheus" },
        { name: "Grafana" },
        { name: "Amazon CloudWatch" },
        { name: "Metric Alarms" },
        { name: "Log Aggregation" },
      ],
    },
    {
      title: "Operating Systems & Scripting",
      slug: "os-scripting",
      skills: [
        { name: "Linux (Ubuntu / Debian / RHEL)" },
        { name: "Bash Shell Scripting" },
        { name: "Windows Server" },
        { name: "CLI Automation" },
      ],
    },
    {
      title: "Professional Competencies",
      slug: "soft-skills",
      skills: [
        { name: "Technical Communication" },
        { name: "Technical Writing (Medium Author)" },
        { name: "Teamwork & Agile Delivery" },
        { name: "Problem Solving & Incident Response" },
        { name: "Leadership" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "autotroph",
      role: "Junior DevOps Engineer",
      company: "Autotroph Infotech",
      location: "Surat, India",
      period: "Feb 2026 – Oct 2026",
      startDate: "2026-02",
      endDate: "2026-10",
      summary:
        "Engineered end-to-end automated deployment pipelines in AWS CodePipeline, orchestrating containerized applications with Docker on Amazon ECS and Amazon EKS.",
      bullets: [
        "Built and maintained CI/CD pipelines in AWS CodePipeline to automate application deployments, minimizing manual deployment steps.",
        "Deployed and managed containerized applications with Docker on Amazon ECS and Amazon EKS, ensuring high availability and seamless updates.",
        "Monitored infrastructure and application performance using Prometheus, Grafana, and Amazon CloudWatch to ensure optimal cluster health.",
        "Configured IAM users, roles, and policies adhering to least-privilege security principles, and supported enterprise Linux and Windows Server environments.",
      ],
      skills: [
        "AWS CodePipeline",
        "Docker",
        "Amazon ECS",
        "Amazon EKS",
        "Prometheus",
        "Grafana",
        "Amazon CloudWatch",
        "AWS IAM",
        "Linux",
        "Windows Server",
      ],
    },
    {
      id: "rejoicehub",
      role: "DevOps Engineer",
      company: "Rejoicehub LLP",
      location: "Surat, India",
      period: "May 2025 – Jan 2026",
      startDate: "2025-05",
      endDate: "2026-01",
      summary:
        "Managed CI/CD deployment pipelines with Jenkins and GitHub Actions while provisioning secure, scalable multi-cloud infrastructure with Terraform.",
      bullets: [
        "Improved CI/CD workflows in Jenkins and GitHub Actions, making deployments faster, more reliable, and repeatable.",
        "Supported 20+ application releases across AWS, DigitalOcean, and Contabo while optimizing cloud resource usage.",
        "Designed and provisioned secure, scalable AWS infrastructure with Terraform using modular IaC best practices.",
        "Wrote Bash scripts to automate deployments, monitoring, and routine infrastructure maintenance tasks.",
      ],
      skills: [
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "AWS",
        "DigitalOcean",
        "Contabo",
        "Bash Scripting",
        "CI/CD Workflows",
      ],
    },
    {
      id: "f13",
      role: "AWS Cloud Intern",
      company: "F13 Technologies",
      location: "India",
      period: "Jul 2024 – Oct 2024",
      startDate: "2024-07",
      endDate: "2024-10",
      summary:
        "Designed core AWS cloud architectures and assisted in migrating on-premises applications to AWS following Well-Architected Framework guidelines.",
      bullets: [
        "Designed AWS architectures using EC2, S3, RDS, Lambda, and API Gateway for scalable workloads.",
        "Assisted in migrating on-premises applications to AWS to improve performance and lower infrastructure costs.",
        "Prepared architecture and configuration documentation in line with AWS best practices.",
      ],
      skills: [
        "Amazon EC2",
        "Amazon S3",
        "Amazon RDS",
        "AWS Lambda",
        "Amazon API Gateway",
        "Cloud Migration",
        "AWS Documentation",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "infrastructure-automation",
      title: "Infrastructure Automation (AWS & Terraform)",
      category: "IaC",
      summary:
        "Automated a complete AWS cloud setup with Terraform covering VPC, subnets, security groups, EC2, and an Application Load Balancer.",
      bullets: [
        "Automated a complete AWS setup with Terraform, covering VPC, subnets, security groups, EC2, and an Application Load Balancer.",
        "Improved consistency and reduced deployment errors through Infrastructure as Code.",
        "Published comprehensive technical documentation on Medium explaining automated AWS network setup with Terraform.",
      ],
      technologies: ["Terraform", "AWS VPC", "Subnets", "Security Groups", "EC2", "ALB", "S3"],
      architecture: [
        "Custom Multi-AZ VPC Architecture",
        "Public & Private Subnet Segmentation",
        "Application Load Balancer Ingress",
        "Declarative Terraform State Management",
      ],
      githubUrl: "https://github.com/VaidehiSavaliya",
      articleUrl: "https://medium.com/@vaidehisavaliya8",
    },
    {
      id: "cicd-automation-framework",
      title: "CI/CD Automation Framework (AWS, Jenkins & Docker)",
      category: "CI/CD",
      summary:
        "Built an automated CI/CD pipeline for a two-tier application using Jenkins and Docker on AWS for reliable and repeatable releases.",
      bullets: [
        "Built an automated CI/CD pipeline for a two-tier application using Jenkins and Docker on AWS.",
        "Increased release frequency and made deployments reliable and repeatable.",
        "Containerized application tiers with multi-stage Docker builds and automated rolling updates.",
      ],
      technologies: ["Jenkins", "Docker", "AWS", "Amazon ECS", "Git", "Bash"],
      architecture: [
        "Automated Git Webhook Triggers",
        "Multi-stage Jenkins Pipeline Execution",
        "Docker Containerization & Image Packaging",
        "Zero-Downtime Deployment to AWS",
      ],
      githubUrl: "https://github.com/VaidehiSavaliya",
    },
  ] as Project[],

  certifications: [
    {
      id: "aws-saa",
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Verified Credential",
      credentialUrl: "https://aws.amazon.com/verification",
      description:
        "Validated ability to design secure, scalable, and cost-efficient cloud architectures using AWS best practices.",
      topics: [
        "Resilient Multi-AZ & Auto-Scaling Architectures",
        "High-Performing Compute & Storage (ALB, RDS, S3)",
        "Secure Applications (IAM, VPC, Security Groups)",
        "Cost-Optimized Cloud Resources",
      ],
      badgeColor: "from-amber-500 to-orange-500",
    },
    {
      id: "aws-ccp",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Verified Credential",
      credentialUrl: "https://aws.amazon.com/verification",
      description:
        "Gained foundational knowledge of AWS services, cloud security, billing, and basic architecture.",
      topics: [
        "Cloud Concepts & Global Infrastructure",
        "Cloud Security & Shared Responsibility Model",
        "Core AWS Services & Cloud Architecture",
        "Billing, Pricing Models & Account Management",
      ],
      badgeColor: "from-blue-500 to-cyan-500",
    },
  ] as Certification[],

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Sutex Bank College of Computer Applications & Science",
      period: "2021 – 2024",
      location: "Surat, Gujarat, India",
      honors: "Awarded the MYSY Scholarship, a merit-based recognition given to promising students.",
      coursework: [
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Linux & Cloud Fundamentals",
      ],
    },
  ],

  atsPlainText: `VAIDEHI SAVALIYA
DevOps Engineer | AWS Certified Solutions Architect – Associate
Email: vaidehisavaliya8@gmail.com | Phone: +91 8849906237
LinkedIn: linkedin.com/in/vaidehisavaliya8 | GitHub: github.com/VaidehiSavaliya
Location: Surat, Gujarat, India (Open to Remote Roles)

PROFILE
DevOps Engineer with 1.5+ years of hands-on experience in CI/CD automation, AWS infrastructure, and container deployments. Built and maintained pipelines with Jenkins, GitHub Actions, and AWS CodePipeline, provisioned infrastructure with Terraform, and ran containerized applications on Docker, Amazon ECS, and Amazon EKS. AWS Certified Solutions Architect – Associate, with a strong base in Linux and Bash scripting.

PROFESSIONAL EXPERIENCE
Junior DevOps Engineer | Autotroph Infotech
Feb 2026 – Oct 2026 | Surat, India
• Built and maintained CI/CD pipelines in AWS CodePipeline to automate application deployments.
• Deployed and managed containerized applications with Docker on Amazon ECS and Amazon EKS.
• Monitored infrastructure and application performance using Prometheus, Grafana, and Amazon CloudWatch.
• Configured IAM users, roles, and policies, and supported Linux and Windows Server environments.

DevOps Engineer | Rejoicehub LLP
May 2025 – Jan 2026 | Surat, India
• Improved CI/CD workflows in Jenkins and GitHub Actions, making deployments faster and more reliable.
• Supported 20+ application releases across AWS, DigitalOcean, and Contabo while optimizing cloud resource usage.
• Designed and provisioned secure, scalable AWS infrastructure with Terraform.
• Wrote Bash scripts to automate deployments, monitoring, and routine infrastructure tasks.

AWS Cloud Intern | F13 Technologies
Jul 2024 – Oct 2024 | India
• Designed AWS architectures using EC2, S3, RDS, Lambda, and API Gateway.
• Assisted in migrating on-premises applications to AWS to improve performance and lower infrastructure costs.
• Prepared architecture and configuration documentation in line with AWS best practices.

SKILLS
CI/CD: Jenkins, GitHub Actions, AWS CodePipeline, Git
Containers and Orchestration: Docker, Kubernetes, Amazon ECS, Amazon EKS
Infrastructure as Code: Terraform, AWS CloudFormation
AWS Cloud: EC2, S3, IAM, VPC, ALB, Lambda, RDS, CloudFront, CloudTrail, Route53, Secret Manager
Monitoring: Prometheus, Grafana, Amazon CloudWatch
Operating Systems and Scripting: Linux, Windows Server, Bash
Soft Skills: Communication, Teamwork, Problem-Solving, Leadership

EDUCATION
Bachelor of Computer Application (BCA) | 2021 – 2024
Sutex Bank College of Computer Applications & Science
• Awarded the MYSY Scholarship, a merit-based recognition given to promising students.

CERTIFICATES
• AWS Certified Cloud Practitioner | Amazon Web Services (AWS)
  Gained foundational knowledge of AWS services, cloud security, billing and basic architecture.
• AWS Certified Solution Architect - Associate | Amazon Web Services (AWS)
  Validated ability to design secure, scalable and cost-efficient cloud architectures using AWS best practices.

PROJECTS
Infrastructure Automation (AWS & Terraform)
• Built an automated CI/CD pipeline for a two-tier application using Jenkins and Docker on AWS.
• Increased release frequency and made deployments reliable and repeatable.
CI/CD Automation Framework (AWS, Jenkins & Docker)
• Automated a complete AWS setup with Terraform, covering VPC, subnets, security groups, EC2, and an Application Load Balancer.
• Improved consistency and reduced deployment errors through Infrastructure as Code.
`,
};
