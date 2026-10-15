import os

def create_resume_pdf(filename):
    # PDF generation helper
    # 2 pages: standard Letter (612 x 792 pt)
    
    # Page 1 operations: Header, Profile, Experience
    p1_ops = []
    
    # Header
    p1_ops.append("BT /F1 18 Tf 54 745 Td (VAIDEHI SAVALIYA) Tj ET")
    p1_ops.append("BT /F1 11 Tf 54 728 Td (DevOps Engineer | AWS Certified Solutions Architect - Associate) Tj ET")
    p1_ops.append("BT /F2 8.5 Tf 54 713 Td (Email: vaidehisavaliya8@gmail.com  |  Phone: +91 8849906237  |  Surat, India) Tj ET")
    p1_ops.append("BT /F2 8.5 Tf 54 701 Td (LinkedIn: linkedin.com/in/vaidehisavaliya8  |  GitHub: github.com/VaidehiSavaliya) Tj ET")
    p1_ops.append("0.5 0.5 0.5 RG 1.5 w 54 690 m 558 690 l S")

    # PROFILE
    p1_ops.append("BT /F1 11 Tf 54 674 Td (PROFILE) Tj ET")
    p1_ops.append("0.7 0.7 0.7 RG 0.5 w 54 669 m 558 669 l S")
    
    summary_lines = [
        "DevOps Engineer with 1.5+ years of hands-on experience in CI/CD automation, AWS infrastructure, and container deployments.",
        "Built and maintained pipelines with Jenkins, GitHub Actions, and AWS CodePipeline, provisioned infrastructure with Terraform,",
        "and ran containerized applications on Docker, Amazon ECS, and Amazon EKS. AWS Certified Solutions Architect - Associate,",
        "with a strong base in Linux and Bash scripting."
    ]
    y = 654
    for line in summary_lines:
        p1_ops.append(f"BT /F2 9 Tf 54 {y} Td ({line}) Tj ET")
        y -= 13

    # PROFESSIONAL EXPERIENCE
    y -= 8
    p1_ops.append(f"BT /F1 11 Tf 54 {y} Td (PROFESSIONAL EXPERIENCE) Tj ET")
    p1_ops.append(f"0.7 0.7 0.7 RG 0.5 w 54 {y-5} m 558 {y-5} l S")
    y -= 20

    # Role 1: Autotroph Infotech
    p1_ops.append(f"BT /F1 10 Tf 54 {y} Td (Junior DevOps Engineer) Tj ET")
    p1_ops.append(f"BT /F2 9 Tf 440 {y} Td (Feb 2026 - Oct 2026) Tj ET")
    y -= 14
    p1_ops.append(f"BT /F2 9.5 Tf 54 {y} Td (Autotroph Infotech  -  Surat, India) Tj ET")
    y -= 15
    role1_bullets = [
        "Built and maintained CI/CD pipelines in AWS CodePipeline to automate application deployments.",
        "Deployed and managed containerized applications with Docker on Amazon ECS and Amazon EKS.",
        "Monitored infrastructure and application performance using Prometheus, Grafana, and Amazon CloudWatch.",
        "Configured IAM users, roles, and policies, and supported Linux and Windows Server environments."
    ]
    for b in role1_bullets:
        p1_ops.append(f"BT /F2 8.5 Tf 64 {y} Td (\\(bull\\)  {b}) Tj ET")
        y -= 13

    # Role 2: Rejoicehub LLP
    y -= 6
    p1_ops.append(f"BT /F1 10 Tf 54 {y} Td (DevOps Engineer) Tj ET")
    p1_ops.append(f"BT /F2 9 Tf 440 {y} Td (May 2025 - Jan 2026) Tj ET")
    y -= 14
    p1_ops.append(f"BT /F2 9.5 Tf 54 {y} Td (Rejoicehub LLP  -  Surat, India) Tj ET")
    y -= 15
    role2_bullets = [
        "Improved CI/CD workflows in Jenkins and GitHub Actions, making deployments faster and more reliable.",
        "Supported 20+ application releases across AWS, DigitalOcean, and Contabo while optimizing cloud resource usage.",
        "Designed and provisioned secure, scalable AWS infrastructure with Terraform.",
        "Wrote Bash scripts to automate deployments, monitoring, and routine infrastructure tasks."
    ]
    for b in role2_bullets:
        p1_ops.append(f"BT /F2 8.5 Tf 64 {y} Td (\\(bull\\)  {b}) Tj ET")
        y -= 13

    # Role 3: F13 Technologies
    y -= 6
    p1_ops.append(f"BT /F1 10 Tf 54 {y} Td (AWS Cloud Intern) Tj ET")
    p1_ops.append(f"BT /F2 9 Tf 440 {y} Td (Jul 2024 - Oct 2024) Tj ET")
    y -= 14
    p1_ops.append(f"BT /F2 9.5 Tf 54 {y} Td (F13 Technologies  -  India) Tj ET")
    y -= 15
    role3_bullets = [
        "Designed AWS architectures using EC2, S3, RDS, Lambda, and API Gateway.",
        "Assisted in migrating on-premises applications to AWS to improve performance and lower infrastructure costs.",
        "Prepared architecture and configuration documentation in line with AWS best practices."
    ]
    for b in role3_bullets:
        p1_ops.append(f"BT /F2 8.5 Tf 64 {y} Td (\\(bull\\)  {b}) Tj ET")
        y -= 13

    # Page 1 footer
    p1_ops.append("BT /F2 8 Tf 260 25 Td (Page 1 of 2  -  Vaidehi Savaliya Resume) Tj ET")

    # Page 2 operations: Skills, Projects, Certifications, Education
    p2_ops = []
    y2 = 745
    p2_ops.append(f"BT /F1 11 Tf 54 {y2} Td (TECHNICAL SKILLS) Tj ET")
    p2_ops.append(f"0.7 0.7 0.7 RG 0.5 w 54 {y2-5} m 558 {y2-5} l S")
    y2 -= 18

    skills = [
        ("CI/CD:", "Jenkins, GitHub Actions, AWS CodePipeline, Git"),
        ("Containers & Orchestration:", "Docker, Kubernetes, Amazon ECS, Amazon EKS"),
        ("Infrastructure as Code:", "Terraform, AWS CloudFormation"),
        ("AWS Cloud:", "EC2, S3, IAM, VPC, ALB, Lambda, RDS, CloudFront, CloudTrail, Route53, Secret Manager"),
        ("Monitoring:", "Prometheus, Grafana, Amazon CloudWatch"),
        ("Operating Systems & Scripting:", "Linux (Ubuntu/Debian/RHEL), Windows Server, Bash"),
        ("Soft Skills:", "Communication, Teamwork, Problem-Solving, Leadership")
    ]
    for label, val in skills:
        p2_ops.append(f"BT /F1 8.5 Tf 54 {y2} Td ({label}) Tj ET")
        p2_ops.append(f"BT /F2 8.5 Tf 190 {y2} Td ({val}) Tj ET")
        y2 -= 14

    # PROJECTS
    y2 -= 8
    p2_ops.append(f"BT /F1 11 Tf 54 {y2} Td (PROJECTS) Tj ET")
    p2_ops.append(f"0.7 0.7 0.7 RG 0.5 w 54 {y2-5} m 558 {y2-5} l S")
    y2 -= 18

    # Project 1
    p2_ops.append(f"BT /F1 10 Tf 54 {y2} Td (Infrastructure Automation \\(AWS & Terraform\\)) Tj ET")
    y2 -= 13
    proj1_bullets = [
        "Automated a complete AWS setup with Terraform, covering VPC, subnets, security groups, EC2, and an Application Load Balancer.",
        "Improved consistency and reduced deployment errors through Infrastructure as Code."
    ]
    for b in proj1_bullets:
        p2_ops.append(f"BT /F2 8.5 Tf 64 {y2} Td (\\(bull\\)  {b}) Tj ET")
        y2 -= 13

    # Project 2
    y2 -= 4
    p2_ops.append(f"BT /F1 10 Tf 54 {y2} Td (CI/CD Automation Framework \\(AWS, Jenkins & Docker\\)) Tj ET")
    y2 -= 13
    proj2_bullets = [
        "Built an automated CI/CD pipeline for a two-tier application using Jenkins and Docker on AWS.",
        "Increased release frequency and made deployments reliable and repeatable."
    ]
    for b in proj2_bullets:
        p2_ops.append(f"BT /F2 8.5 Tf 64 {y2} Td (\\(bull\\)  {b}) Tj ET")
        y2 -= 13

    # CERTIFICATES
    y2 -= 8
    p2_ops.append(f"BT /F1 11 Tf 54 {y2} Td (CERTIFICATES) Tj ET")
    p2_ops.append(f"0.7 0.7 0.7 RG 0.5 w 54 {y2-5} m 558 {y2-5} l S")
    y2 -= 18

    p2_ops.append(f"BT /F1 9.5 Tf 54 {y2} Td (AWS Certified Solutions Architect - Associate) Tj ET")
    p2_ops.append(f"BT /F2 9 Tf 400 {y2} Td (Amazon Web Services \\(AWS\\)) Tj ET")
    y2 -= 13
    p2_ops.append(f"BT /F2 8.5 Tf 64 {y2} Td (\\(bull\\)  Validated ability to design secure, scalable and cost-efficient cloud architectures using AWS best practices.) Tj ET")
    y2 -= 16

    p2_ops.append(f"BT /F1 9.5 Tf 54 {y2} Td (AWS Certified Cloud Practitioner) Tj ET")
    p2_ops.append(f"BT /F2 9 Tf 400 {y2} Td (Amazon Web Services \\(AWS\\)) Tj ET")
    y2 -= 13
    p2_ops.append(f"BT /F2 8.5 Tf 64 {y2} Td (\\(bull\\)  Gained foundational knowledge of AWS services, cloud security, billing and basic architecture.) Tj ET")
    y2 -= 20

    # EDUCATION
    p2_ops.append(f"BT /F1 11 Tf 54 {y2} Td (EDUCATION) Tj ET")
    p2_ops.append(f"0.7 0.7 0.7 RG 0.5 w 54 {y2-5} m 558 {y2-5} l S")
    y2 -= 18

    p2_ops.append(f"BT /F1 9.5 Tf 54 {y2} Td (Bachelor of Computer Application) Tj ET")
    p2_ops.append(f"BT /F2 9 Tf 440 {y2} Td (2021 - 2024) Tj ET")
    y2 -= 14
    p2_ops.append(f"BT /F2 9 Tf 54 {y2} Td (Sutex Bank College of Computer Applications & Science - Surat, India) Tj ET")
    y2 -= 14
    p2_ops.append(f"BT /F2 8.5 Tf 64 {y2} Td (\\(bull\\)  Awarded the MYSY Scholarship, a merit-based recognition given to promising students.) Tj ET")

    # Page 2 footer
    p2_ops.append("BT /F2 8 Tf 260 25 Td (Page 2 of 2  -  Vaidehi Savaliya Resume) Tj ET")

    content1 = "\n".join(p1_ops).encode("latin1")
    content2 = "\n".join(p2_ops).encode("latin1")

    # Build objects
    objects = []
    
    # Obj 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # Obj 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>")
    # Obj 3: Page 1
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 7 0 R >>")
    # Obj 4: Page 2
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 8 0 R >>")
    # Obj 5: Font Bold
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # Obj 6: Font Regular
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # Obj 7: Content 1
    objects.append(f"<< /Length {len(content1)} >>\nstream\n".encode("latin1") + content1 + b"\nendstream")
    # Obj 8: Content 2
    objects.append(f"<< /Length {len(content2)} >>\nstream\n".encode("latin1") + content2 + b"\nendstream")

    # Construct final PDF
    out = [b"%PDF-1.4\n"]
    offsets = []
    
    for i, obj in enumerate(objects, 1):
        offsets.append(sum(len(chunk) for chunk in out))
        out.append(f"{i} 0 obj\n".encode("latin1"))
        out.append(obj)
        out.append(b"\nendobj\n")

    xref_offset = sum(len(chunk) for chunk in out)
    out.append(f"xref\n0 {len(objects) + 1}\n".encode("latin1"))
    out.append(b"0000000000 65535 f \n")
    for off in offsets:
        out.append(f"{off:010d} 00000 n \n".encode("latin1"))

    out.append(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode("latin1"))

    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "wb") as f:
        f.write(b"".join(out))

create_resume_pdf("public/Vaidehi_Savaliya_Resume.pdf")
print("PDF created successfully at public/Vaidehi_Savaliya_Resume.pdf")
