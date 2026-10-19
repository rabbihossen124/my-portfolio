import React from "react";
import Image from "next/image";
import personalPhoto from "@/assat/photo-1.png";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRightIcon, DownloadIcon, SparklesIcon, CodeWindowIcon } from "./Icons";

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-16">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start z-10 order-2 lg:order-1">
          {/* Availability Badge */}
          {personal.availability.isAvailable ? (
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400 mb-6"
              title={personal.availability.helperNote}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personal.availability.statusText}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-xs font-medium text-slate-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-slate-500" aria-hidden="true" />
              <span>Currently fully committed</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-lg font-semibold text-sky-400 tracking-wide mb-3">
            <SparklesIcon size={18} />
            <span>Hello, world</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
            Hi, I&apos;m <span className="bg-gradient-to-r from-white via-slate-100 to-sky-400 bg-clip-text text-transparent">{personal.name}</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
              {personal.role}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-9">
            {personal.shortBio}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <span>View My Projects</span>
              <ArrowUpRightIcon size={16} />
            </a>

            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <DownloadIcon size={16} />
              <span>Resume &amp; Education</span>
            </a>
          </div>

          {/* Tech Quick Highlights */}
          <div className="w-full pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Tech Stack:</span>
            <div className="flex flex-wrap items-center gap-2">
              {["TypeScript", "React", "Next.js", "Tailwind CSS", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/10 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Actual Personal Photo Asset */}
        <div className="flex justify-center items-center relative order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[1/1.15]">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-radial from-sky-500/25 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-0"
              aria-hidden="true"
            />
            <div className="group relative w-full h-full rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl shadow-black/70 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1">
              <Image
                src={personalPhoto}
                alt={`${personal.name} - ${personal.role}`}
                className="object-cover object-top w-full h-full"
                priority
                sizes="(max-width: 768px) 320px, 420px"
              />

              {/* Floating Status / Tech Pill */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-[#06090e]/85 backdrop-blur-md border border-white/15 flex items-center gap-3 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400 shrink-0">
                  <CodeWindowIcon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{personal.role}</span>
                  <span className="text-xs text-slate-400">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
