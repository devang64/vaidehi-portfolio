"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  FileDown,
  ExternalLink,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";

export default function ContactSection() {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "DevOps Engineer Role Inquiry",
    message: "",
    honeypot: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2e7b358f-4d88-4fc8-8ded-f009b955480d",
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `[Portfolio] DevOps Role Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: "Vaidehi Portfolio Website",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(
          data.message || "Unable to deliver message automatically. Please reach out via email directly."
        );
      }
    } catch (err) {
      console.error("Submission failed", err);
      setErrorMessage(
        "Network error sending message. Please try again or email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-700" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build Resilient Cloud Systems
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Open to full-time DevOps, Cloud Infrastructure, and SRE opportunities. Reach out directly
            or schedule an introductory interview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Contact Details</h3>

              {/* Email Block */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-3 truncate">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-500 font-bold">Email Address</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-cyan-700 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Block */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-3 truncate">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-500 font-bold">Phone / WhatsApp</p>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors truncate block font-mono"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Block */}
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-500 font-bold">Location & Availability</p>
                  <p className="text-sm font-semibold text-slate-900">{personal.location}</p>
                </div>
              </div>

              {/* Social Platforms */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-400 text-xs font-mono font-semibold transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-400 text-xs font-mono font-semibold transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-400 text-xs font-mono font-semibold transition-all shadow-xs"
                >
                  <MediumIcon className="w-4 h-4 text-emerald-700" />
                  <span>Medium</span>
                </a>
              </div>

              {/* Resume download & Webview CTA buttons: Keep ONLY Download PDF & Webview */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href="/Vaidehi_Savaliya_Resume.pdf"
                  download="Vaidehi_Savaliya_Resume.pdf"
                  className="flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-sm hover:from-cyan-500 hover:to-teal-500 transition-all text-center"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <Link
                  href="/resume"
                  className="flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-cyan-700 hover:border-cyan-500 font-bold text-xs sm:text-sm shadow-xs transition-all text-center"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-600" />
                  <span>Webview</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Direct Message</h3>
              <p className="text-sm text-slate-600 mb-6">
                Have a DevOps opening or project inquiry? Fill out the form below to reach Vaidehi directly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Delivered to Vaidehi&apos;s Inbox!</h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message has been forwarded directly to <span className="font-mono text-cyan-800 font-semibold">{personal.email}</span>. Vaidehi will review your inquiry and reply to <span className="font-semibold text-slate-900">{formData.email}</span> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setErrorMessage(null);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "DevOps Engineer Role Inquiry",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-mono font-bold rounded-xl bg-white border border-slate-300 text-cyan-700 hover:bg-slate-50 cursor-pointer shadow-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Web3Forms Access Key for direct email delivery to Vaidehi */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="2e7b358f-4d88-4fc8-8ded-f009b955480d"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Vaidehi Portfolio Website"
                  />
                  {/* Anti-spam honeypot */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex-1 space-y-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="text-xs text-red-700">
                          You can also reach out directly to{" "}
                          <a
                            href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || "Inquiry")}`}
                            className="font-bold underline hover:text-red-950"
                          >
                            {personal.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-600 font-bold mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-xs disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-600 font-bold mb-1">
                        Your Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-xs disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-600 font-bold mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-xs disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-600 font-bold mb-1">
                      Message / Role Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vaidehi, we are looking for a DevOps Engineer with your AWS, Terraform, and CI/CD expertise..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none shadow-xs disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message to Vaidehi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
