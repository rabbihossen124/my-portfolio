"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  MailIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "./Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject line.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your details message.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message should be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true || data.message)) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch {
      setSubmitError(
        "Could not send automatically via network. You can click below to send directly using your email app."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackMailto = `mailto:${personal.email}?subject=${encodeURIComponent(
    `[Portfolio] ${formData.subject || "Message"}`
  )}&body=${encodeURIComponent(
    `Hi ${personal.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{contact.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col gap-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Details</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prefer direct communication? Reach out through any of these platforms or send a direct email.
              </p>

              <div className="flex flex-col gap-3.5">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 text-slate-200 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                >
                  <div className="text-sky-400 flex items-center justify-center shrink-0">
                    <MailIcon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                      {personal.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 text-slate-200">
                  <div className="text-sky-400 flex items-center justify-center shrink-0">
                    <MapPinIcon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-medium text-slate-200">{personal.location}</span>
                  </div>
                </div>

                {/* GitHub */}
                {personal.socialLinks.github && (
                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 text-slate-200 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                  >
                    <div className="text-sky-400 flex items-center justify-center shrink-0">
                      <GitHubIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">GitHub</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                        {personal.socialLinks.github.replace(/https?:\/\/(www\.)?github\.com\/?/, "@")}
                      </span>
                    </div>
                    <ExternalLinkIcon size={14} className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {/* LinkedIn */}
                {personal.socialLinks.linkedin && (
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 text-slate-200 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                  >
                    <div className="text-sky-400 flex items-center justify-center shrink-0">
                      <LinkedInIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">LinkedIn</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                        {personal.socialLinks.linkedin.replace(/https?:\/\/(www\.)?linkedin\.com\/in\/?/, "@")}
                      </span>
                    </div>
                    <ExternalLinkIcon size={14} className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {/* Twitter / X */}
                {personal.socialLinks.twitter && (
                  <a
                    href={personal.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 text-slate-200 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                  >
                    <div className="text-sky-400 flex items-center justify-center shrink-0">
                      <TwitterIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">X (Twitter)</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                        {personal.socialLinks.twitter.replace(/https?:\/\/(www\.)?(x|twitter)\.com\/?/, "@")}
                      </span>
                    </div>
                    <ExternalLinkIcon size={14} className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400">
                Fill out the form below to deliver your message directly to my inbox.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span>Your Name</span>
                  {errors.name && <span className="text-xs text-rose-400 font-normal" role="alert">{errors.name}</span>}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-xl bg-[#06090e]/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                    errors.name
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  }`}
                  aria-invalid={!!errors.name}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span>Your Email</span>
                  {errors.email && <span className="text-xs text-rose-400 font-normal" role="alert">{errors.email}</span>}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-xl bg-[#06090e]/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                    errors.email
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  }`}
                  aria-invalid={!!errors.email}
                />
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span>Subject</span>
                  {errors.subject && <span className="text-xs text-rose-400 font-normal" role="alert">{errors.subject}</span>}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-3 rounded-xl bg-[#06090e]/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                    errors.subject
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  }`}
                  aria-invalid={!!errors.subject}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span>Details Message</span>
                  {errors.message && <span className="text-xs text-rose-400 font-normal" role="alert">{errors.message}</span>}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your details message..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#06090e]/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 resize-y min-h-[120px] ${
                    errors.message
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  }`}
                  rows={5}
                  aria-invalid={!!errors.message}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 self-start cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MailIcon size={16} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>

            {/* Success Feedback Banner */}
            {submitSuccess && (
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm leading-relaxed mt-5 flex items-start gap-3">
                <CheckIcon size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-400 text-base mb-1">Message Sent Successfully!</h4>
                  <p className="text-slate-300">
                    Thank you! Your message has been sent to <strong className="text-white">{personal.email}</strong>.
                  </p>
                  <p className="text-xs text-emerald-400/80 mt-1">
                    (Note: When sending the first message via FormSubmit, click the one-time activation link sent to your Gmail inbox to confirm delivery.)
                  </p>
                </div>
              </div>
            )}

            {/* Error / Fallback Banner */}
            {submitError && (
              <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-slate-200 text-sm leading-relaxed mt-5">
                <p className="text-rose-300 font-medium mb-3">{submitError}</p>
                <a
                  href={fallbackMailto}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-sm"
                >
                  <MailIcon size={15} />
                  <span>Send via Email Client</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
