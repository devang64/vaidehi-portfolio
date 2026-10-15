import { portfolioData } from "@/data/portfolio-data";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.title,
    description: portfolioData.personal.summary,
    url: portfolioData.personal.website,
    email: `mailto:${portfolioData.personal.email}`,
    telephone: portfolioData.personal.phone,
    sameAs: [
      portfolioData.personal.linkedin,
      portfolioData.personal.github,
      portfolioData.personal.medium,
    ],
    knowsAbout: [
      "DevOps",
      "Cloud Architecture",
      "Amazon Web Services (AWS)",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Amazon ECS",
      "CI/CD Automation",
      "Jenkins",
      "GitHub Actions",
      "AWS CodePipeline",
      "Prometheus",
      "Grafana",
      "Linux Administration",
      "Bash Scripting",
    ],
    hasCredential: portfolioData.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
    })),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: portfolioData.education[0].institution,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: portfolioData.personal.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
