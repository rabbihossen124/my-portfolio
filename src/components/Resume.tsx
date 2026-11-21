"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCapIcon,
  DownloadIcon,
  EyeIcon,
  FileIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from "./Icons";

export const Resume = () => {
  const { resume, personal } = portfolioData;
  const [showHelper, setShowHelper] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!resume.hasResumePdf) {
      e.preventDefault();
      setShowHelper(true);
    }
  };

  return (
    <section id="resume" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            Education &amp; Resume
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Academic Background &amp; Resume
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            My academic foundation in Computer Science &amp; Technology, technical credentials, and downloadable CV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                    <GraduationCapIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                    <span className="text-xs text-slate-400">Computer Science &amp; Technology</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Frontend Developer
                </span>
              </div>

              {resume.education.map((edu, index) => (
                <div key={index} className="pt-2">
                  <h4 className="text-lg font-bold text-white mb-1.5">{edu.degree}</h4>
                  <div className="text-sm text-sky-400 font-medium mb-2">{edu.institution}</div>
                  <div className="font-mono text-xs text-slate-400 mb-4 inline-block bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                    {edu.period}
                  </div>
                  {edu.details && (
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {edu.details}
                    </p>
                  )}

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      "Frontend Development",
                      "JavaScript (ES6+)",
                      "TypeScript",
                      "React.js",
                      "Next.js App Router",
                      "Tailwind CSS",
                      "RESTful APIs",
                      "MongoDB",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
              <SparklesIcon size={16} className="text-sky-400 shrink-0" />
              <span>Actively seeking Frontend Developer roles, internships &amp; open collaborations.</span>
            </div>
          </div>

          {/* Resume & CV Card with View and Download buttons */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                    <FileIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Official Resume</h3>
                    <span className="text-xs text-slate-400">Curriculum Vitae (PDF)</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-medium text-sky-400">
                  Updated &amp; Verified
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {resume.summary}
              </p>

              {/* Interactive Resume Visual Preview */}
              {resume.previewImagePath && (
                <div className="mb-6">
                  <a
                    href={resume.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full rounded-xl overflow-hidden border border-white/15 bg-slate-950/80 shadow-xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-sky-500/20"
                    title="Click to view full PDF resume"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={resume.previewImagePath}
                        alt="Rabbi - Frontend Developer Resume Preview"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent group-hover:from-slate-950/60 transition-colors" />

                      {/* Overlay CTA Badge */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-slate-950/40">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400 text-slate-950 text-xs font-bold shadow-lg shadow-sky-500/40">
                          <EyeIcon size={16} />
                          <span>Click to View Full PDF</span>
                          <ExternalLinkIcon size={13} />
                        </span>
                      </div>
                    </div>

                    <div className="px-4 py-2 bg-slate-950/90 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-[11px] text-sky-400">Rabbi — Frontend Developer</span>
                      <span className="flex items-center gap-1 text-[11px] hover:text-white">
                        <span>Preview</span>
                        <ExternalLinkIcon size={12} />
                      </span>
                    </div>
                  </a>
                </div>
              )}

              {/* Key Details Snapshot */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6 flex flex-col gap-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Target Role:</span>
                  <span className="font-semibold text-white">{personal.role}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">{personal.location}</span>
                </div>
                {personal.phone && (
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Contact Phone:</span>
                    <span className="font-semibold text-white">{personal.phone}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Direct Email:</span>
                  <span className="font-semibold text-sky-300">{personal.email}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: View Resume & Download Resume */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* View Resume Button */}
                <a
                  href={resume.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-sky-400/50 hover:text-sky-300 transition-all duration-200 shadow-sm cursor-pointer"
                  title="Open resume PDF in new tab"
                >
                  <EyeIcon size={18} className="text-sky-400" />
                  <span>View Resume</span>
                  <ExternalLinkIcon size={14} className="opacity-60" />
                </a>

                {/* Download Resume Button */}
                <a
                  href={resume.pdfPath}
                  download={resume.hasResumePdf ? "Rabbi_Frontend_Developer_Resume.pdf" : undefined}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 cursor-pointer"
                  onClick={handleDownloadClick}
                  title="Download resume PDF to your device"
                >
                  <DownloadIcon size={18} />
                  <span>Download Resume</span>
                </a>
              </div>

              {(!resume.hasResumePdf || showHelper) && (
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/10 text-xs text-slate-400 leading-relaxed">
                  <strong className="text-white">📄 PDF Notice:</strong> Place your resume PDF at <code className="text-sky-300">public/resume.pdf</code> and set <code className="text-sky-300">hasResumePdf: true</code> in <code className="text-sky-300">src/data/portfolioData.ts</code>.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
