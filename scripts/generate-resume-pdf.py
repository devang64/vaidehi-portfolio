import os

def create_resume_pdf(filename):
    # Standard Letter: 612 x 792 pt
    ops = []
    
    # Blue color: #1e40af -> RGB (0.118, 0.251, 0.686)
    # Dark grey: #1f2937 -> RGB (0.122, 0.161, 0.216)
    # Line grey: #cbd5e1 -> RGB (0.8, 0.835, 0.882)
    
    # HEADER
    # Name centered
    ops.append("0.118 0.251 0.686 rg")
    ops.append("BT /F1 18 Tf 230 752 Td (Vaidehi Savaliya) Tj ET")
    
    # Title centered
    ops.append("0.122 0.161 0.216 rg")
    ops.append("BT /F1 10.5 Tf 262 738 Td (DevOps Engineer) Tj ET")
    
    # Contact info centered
    ops.append("0.25 0.25 0.25 rg")
    ops.append("BT /F2 8.5 Tf 115 725 Td (+91 8849906237  |  vaidehisavaliya8@gmail.com  |  Linkedin  |  Github  |  Portfolio) Tj ET")

    y = 708

    def add_section_header(title, cur_y):
        commands = []
        commands.append("0.118 0.251 0.686 rg")
        commands.append(f"BT /F1 10.5 Tf 36 {cur_y} Td ({title}) Tj ET")
        commands.append("0.75 0.75 0.75 RG 0.5 w")
        commands.append(f"36 {cur_y - 4} m 576 {cur_y - 4} l S")
        return commands, cur_y - 16

    # 1. PROFILE
    cmds, y = add_section_header("PROFILE", y)
    ops.extend(cmds)
    
    ops.append("0.15 0.15 0.15 rg")
    profile_lines = [
        "DevOps Engineer with 1.5+ years of hands-on experience in CI/CD automation, AWS infrastructure, and container",
        "deployments. Built and maintained pipelines with Jenkins, GitHub Actions, and AWS CodePipeline, provisioned",
        "infrastructure with Terraform, and ran containerized applications on Docker, Amazon ECS, and Amazon EKS. AWS",
        "Certified Solutions Architect - Associate, with a strong base in Linux and Bash scripting."
    ]
    for line in profile_lines:
        ops.append(f"BT /F2 8.5 Tf 36 {y} Td ({line}) Tj ET")
        y -= 11.5

    # 2. TECHNICAL SKILLS
    y -= 5
    cmds, y = add_section_header("TECHNICAL SKILLS", y)
    ops.extend(cmds)

    skills = [
        ("CI/CD:", "Jenkins, GitHub Actions, AWS CodePipeline, Git"),
        ("Containers & Orchestration:", "Docker, Kubernetes, Amazon ECS, Amazon EKS"),
        ("Infrastructure as Code:", "Terraform, AWS CloudFormation"),
        ("AWS Cloud:", "EC2, S3, IAM, VPC, ALB, Lambda, RDS, CloudFront, CloudTrail, Route 53, Secrets Manager"),
        ("Monitoring:", "Prometheus, Grafana, Amazon CloudWatch"),
        ("Operating Systems & Scripting:", "Linux, Windows Server, Bash"),
        ("Soft Skills:", "Communication, Teamwork, Problem-Solving, Leadership"),
    ]
    for label, val in skills:
        ops.append("0.1 0.1 0.1 rg")
        ops.append(f"BT /F1 8.5 Tf 36 {y} Td ({label}) Tj ET")
        ops.append("0.2 0.2 0.2 rg")
        ops.append(f"BT /F2 8.5 Tf 175 {y} Td ({val}) Tj ET")
        y -= 11.5

    # 3. WORK EXPERIENCE
    y -= 5
    cmds, y = add_section_header("WORK EXPERIENCE", y)
    ops.extend(cmds)

    # Job 1: Autotroph Infotech
    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (Autotroph Infotech) Tj ET")
    ops.append("0.25 0.25 0.25 rg")
    ops.append(f"BT /F2 8.5 Tf 488 {y} Td (Feb 2026 - Oct 2026) Tj ET")
    y -= 11
    ops.append("0.2 0.2 0.2 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (Junior DevOps Engineer) Tj ET")
    y -= 11.5

    job1_bullets = [
        ("Built and maintained CI/CD pipelines in ", "AWS CodePipeline", " to automate application deployments."),
        ("Deployed and managed containerized applications with ", "Docker", " on Amazon ECS and Amazon EKS."),
        ("Monitored infrastructure and application performance using ", "Prometheus, Grafana, and Amazon CloudWatch", "."),
        ("Configured ", "IAM users, roles, and policies", ", and supported Linux and Windows Server environments.")
    ]
    for b_prefix, b_bold, b_suffix in job1_bullets:
        ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj /F1 8.5 Tf ({b_bold}) Tj /F2 8.5 Tf ({b_suffix}) Tj ET")
        y -= 11

    # Job 2: Rejoicehub LLP
    y -= 2
    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (Rejoicehub LLP) Tj ET")
    ops.append("0.25 0.25 0.25 rg")
    ops.append(f"BT /F2 8.5 Tf 488 {y} Td (May 2025 - Jan 2026) Tj ET")
    y -= 11
    ops.append("0.2 0.2 0.2 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (DevOps Engineer) Tj ET")
    y -= 11.5

    job2_bullets = [
        ("Improved CI/CD workflows in ", "Jenkins and GitHub Actions", ", making deployments faster and more reliable."),
        ("Supported 20+ releases across ", "AWS, DigitalOcean, and Contabo", " while optimizing cloud resource usage."),
        ("Designed and provisioned secure, scalable AWS infrastructure with ", "Terraform", "."),
        ("Wrote ", "Bash scripts", " to automate deployments, monitoring, and routine infrastructure tasks.")
    ]
    for b_prefix, b_bold, b_suffix in job2_bullets:
        ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj /F1 8.5 Tf ({b_bold}) Tj /F2 8.5 Tf ({b_suffix}) Tj ET")
        y -= 11

    # Job 3: F13 Technologies
    y -= 2
    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (F13 Technologies) Tj ET")
    ops.append("0.25 0.25 0.25 rg")
    ops.append(f"BT /F2 8.5 Tf 492 {y} Td (Jul 2024 - Oct 2024) Tj ET")
    y -= 11
    ops.append("0.2 0.2 0.2 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (AWS Cloud Intern) Tj ET")
    y -= 11.5

    job3_bullets = [
        ("Designed AWS architectures using ", "EC2, S3, RDS, Lambda, and API Gateway", "."),
        ("Assisted in migrating on-premises applications to AWS to improve performance and lower infrastructure costs.", "", ""),
        ("Prepared architecture and configuration documentation in line with AWS best practices.", "", "")
    ]
    for b_prefix, b_bold, b_suffix in job3_bullets:
        if b_bold:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj /F1 8.5 Tf ({b_bold}) Tj /F2 8.5 Tf ({b_suffix}) Tj ET")
        else:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj ET")
        y -= 11

    # 4. PROJECTS
    y -= 5
    cmds, y = add_section_header("PROJECTS", y)
    ops.extend(cmds)

    # Project 1
    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (CI/CD Automation Framework) Tj ET")
    y -= 10.5
    ops.append("0.3 0.3 0.3 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (AWS, Jenkins & Docker) Tj ET")
    y -= 11
    p1_bullets = [
        ("Built an automated CI/CD pipeline for a two-tier application using ", "Jenkins and Docker on AWS", "."),
        ("Increased release frequency and made deployments reliable and repeatable.", "", "")
    ]
    for b_prefix, b_bold, b_suffix in p1_bullets:
        if b_bold:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj /F1 8.5 Tf ({b_bold}) Tj /F2 8.5 Tf ({b_suffix}) Tj ET")
        else:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj ET")
        y -= 11

    # Project 2
    y -= 2
    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (Infrastructure Automation) Tj ET")
    y -= 10.5
    ops.append("0.3 0.3 0.3 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (AWS & Terraform) Tj ET")
    y -= 11
    p2_bullets = [
        ("Automated a complete AWS setup with ", "Terraform", ", covering VPC, subnets, security groups, EC2, and an ALB."),
        ("Improved consistency and reduced deployment errors through Infrastructure as Code.", "", "")
    ]
    for b_prefix, b_bold, b_suffix in p2_bullets:
        if b_bold:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj /F1 8.5 Tf ({b_bold}) Tj /F2 8.5 Tf ({b_suffix}) Tj ET")
        else:
            ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  {b_prefix}) Tj ET")
        y -= 11

    # 5. CERTIFICATES
    y -= 5
    cmds, y = add_section_header("CERTIFICATES", y)
    ops.extend(cmds)

    ops.append("0.1 0.1 0.1 rg")
    ops.append(f"BT /F1 8.5 Tf 36 {y} Td (AWS Certified Solutions Architect - Associate) Tj /F2 8.5 Tf ( - Amazon Web Services \\(AWS\\)) Tj ET")
    y -= 11.5
    ops.append(f"BT /F1 8.5 Tf 36 {y} Td (AWS Certified Cloud Practitioner) Tj /F2 8.5 Tf ( - Amazon Web Services \\(AWS\\)) Tj ET")
    y -= 11.5

    # 6. EDUCATION
    y -= 5
    cmds, y = add_section_header("EDUCATION", y)
    ops.extend(cmds)

    ops.append("0.05 0.05 0.05 rg")
    ops.append(f"BT /F1 9.5 Tf 36 {y} Td (Bachelor of Computer Applications \\(BCA\\)) Tj ET")
    ops.append("0.25 0.25 0.25 rg")
    ops.append(f"BT /F2 8.5 Tf 516 {y} Td (2021 - 2024) Tj ET")
    y -= 11
    ops.append("0.2 0.2 0.2 rg")
    ops.append(f"BT /F2 8.5 Tf 36 {y} Td (Sutex Bank College of Computer Applications & Science) Tj ET")
    y -= 11
    ops.append(f"BT /F2 8.5 Tf 46 {y} Td (\\(bull\\)  Awarded the MYSY Scholarship, a merit-based recognition given to promising students.) Tj ET")

    content = "\n".join(ops).encode("latin1")

    # Build PDF Objects
    objects = []
    # Obj 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # Obj 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # Obj 3: Page 1 (612 x 792 pt Letter)
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>")
    # Obj 4: Font Bold
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # Obj 5: Font Regular
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # Obj 6: Content
    objects.append(f"<< /Length {len(content)} >>\nstream\n".encode("latin1") + content + b"\nendstream")

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
print("New 1-page PDF created successfully at public/Vaidehi_Savaliya_Resume.pdf")
