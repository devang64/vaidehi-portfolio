import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vaidehi-portfolio-bay.vercel.app"),
  title: "Vaidehi Savaliya | DevOps Engineer & AWS Certified Solutions Architect",
  description:
    "DevOps Engineer with 1.5+ years of hands-on experience in CI/CD automation (Jenkins, GitHub Actions, AWS CodePipeline), AWS infrastructure, Terraform IaC, Docker, ECS, and EKS. AWS Certified Solutions Architect – Associate.",
  keywords: [
    "Vaidehi Savaliya",
    "DevOps Engineer",
    "AWS Certified Solutions Architect",
    "Cloud Engineer",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Amazon EKS",
    "Amazon ECS",
    "CI/CD Pipeline",
    "Jenkins",
    "GitHub Actions",
    "AWS CodePipeline",
    "Prometheus",
    "Grafana",
    "CloudWatch",
    "Linux",
    "Bash Scripting",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  authors: [
    { name: "Vaidehi Savaliya", url: "https://www.linkedin.com/in/vaidehisavaliya8/" },
  ],
  creator: "Vaidehi Savaliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaidehi-portfolio-bay.vercel.app",
    title: "Vaidehi Savaliya | DevOps Engineer & AWS Certified Solutions Architect",
    description:
      "Explore the portfolio, cloud projects, and infrastructure automation expertise of Vaidehi Savaliya. AWS Certified Solutions Architect – Associate.",
    siteName: "Vaidehi Savaliya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidehi Savaliya | DevOps Engineer & AWS Certified Solutions Architect",
    description:
      "DevOps Engineer specializing in AWS, Terraform, Docker, Kubernetes, and CI/CD automation.",
    creator: "@VaidehiSavaliya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vaidehi-portfolio-bay.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
