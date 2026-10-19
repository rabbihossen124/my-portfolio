"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCapIcon,
  DownloadIcon,
  FileIcon,
  SparklesIcon,
} from "./Icons";

export const Resume = () => {
  const { resume } = portfolioData;
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
            My academic foundation in Computer Science &amp; Technology and downloadable CV.
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
                    <span className="text-xs text-slate-400">Computer Science &amp; Engineering</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Fresher Developer
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
                    {["Frontend Development", "JavaScript / TypeScript", "React & Next.js", "Algorithms & Data Structures", "Database Systems"].map((tag) => (
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
              <span>Actively seeking junior web developer roles, internships &amp; open collaborations.</span>
            </div>
          </div>

          {/* Download Resume Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-6">
                <FileIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Get Full Resume</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Download a clean, printable PDF copy of my technical skillset, projects, academic coursework, and contact details.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6 flex flex-col gap-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Target Role:</span>
                  <span className="font-semibold text-white">Junior Web Developer</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">Jashore, Khulna, Bangladesh / Remote</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Availability:</span>
                  <span className="font-semibold text-emerald-400">Open to Opportunities</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={resume.pdfPath}
                download={resume.hasResumePdf ? "resume.pdf" : undefined}
                className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold px-6 py-4 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 cursor-pointer"
                onClick={handleDownloadClick}
              >
                <DownloadIcon size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              {(!resume.hasResumePdf || showHelper) && (
                <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/10 text-xs text-slate-400 leading-relaxed">
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
