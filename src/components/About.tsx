import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Behind the Code
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A developer who values intentional craft, readable logic, and seamless interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Bio & Core Facts */}
          <div className="flex flex-col gap-6">
            <div className="text-lg sm:text-xl font-semibold text-white leading-snug border-l-4 border-sky-400 pl-4">
              {about.introHeading}
            </div>

            {about.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Structured Details Box */}
            <div className="flex flex-col gap-4 mt-3 p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 pb-3.5 border-b border-white/5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider sm:min-w-[110px]">Location</span>
                <span className="text-sm text-slate-200 sm:text-right font-medium">{about.details.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 pb-3.5 border-b border-white/5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider sm:min-w-[110px]">Education</span>
                <span className="text-sm text-slate-200 sm:text-right font-medium">{about.details.education}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 pb-3.5 border-b border-white/5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider sm:min-w-[110px]">Career Goal</span>
                <span className="text-sm text-slate-200 sm:text-right font-medium">{about.details.careerGoals}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider sm:min-w-[110px]">Languages</span>
                <span className="text-sm text-slate-200 sm:text-right font-medium">{about.details.languages}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Development Principles */}
          <div className="flex flex-col gap-5">
            {about.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="p-6 bg-slate-900/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:translate-x-1 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded font-semibold">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
