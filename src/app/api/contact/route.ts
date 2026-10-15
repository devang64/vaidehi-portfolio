import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam bot honeypot detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Spam detected." }, { status: 200 });
    }

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECEIVER || "vaidehisavaliya8@gmail.com";
    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY || "2e7b358f-4d88-4fc8-8ded-f009b955480d";

    // 1. Try sending via Nodemailer (Gmail / SMTP)
    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: emailUser,
          pass: emailPass.replace(/\s+/g, ""),
        },
      });

      const mailOptions = {
        from: `"${name} (Portfolio Inquiry)" <${emailUser}>`,
        replyTo: email,
        to: recipient,
        subject: `[Portfolio Inquiry] ${subject || "New Message"} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received from Vaidehi Savaliya's Portfolio Website</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;">${subject || "General Inquiry"}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <h3 style="color: #334155; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</h3>
              <p style="color: #1e293b; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || "Inquiry")}" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: "Email sent successfully via SMTP." });
    }

    // 2. Try sending via Web3Forms API
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          subject: `[Portfolio Inquiry] ${subject || "New Message"} - from ${name}`,
          message,
          to_email: recipient,
        }),
      });

      const result = await response.json();
      if (result.success) {
        return NextResponse.json({ success: true, message: "Email sent successfully via Web3Forms." });
      }
    }

    // 3. If no server credentials configured yet, inform client to use mailto fallback
    return NextResponse.json(
      {
        success: false,
        requiresConfig: true,
        message:
          "Email server credentials not configured yet. Please configure EMAIL_USER & EMAIL_PASS in your environment or use direct mailto link.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact Form API Error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or reach out directly." },
      { status: 500 }
    );
  }
}
