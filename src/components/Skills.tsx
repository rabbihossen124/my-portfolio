import React from "react";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import {
  CodeWindowIcon,
  GlobeIcon,
  TerminalIcon,
  GitHubIcon,
  SparklesIcon,
} from "./Icons";

// Helper to render appropriate icon for each tech
const getSkillIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("github") || lower.includes("git")) return <GitHubIcon size={18} />;
  if (lower.includes("react") || lower.includes("next") || lower.includes("state")) return <SparklesIcon size={18} />;
  if (lower.includes("api") || lower.includes("rest") || lower.includes("web")) return <GlobeIcon size={18} />;
  if (lower.includes("devtools") || lower.includes("terminal") || lower.includes("npm")) return <TerminalIcon size={18} />;
  return <CodeWindowIcon size={18} />;
};

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            Skills &amp; Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Toolset
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Technologies and tooling I utilize to design, build, test, and deliver modern web software.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {skills.categories.map((category) => {
            const categoryItems = skills.items.filter((item: SkillItem) => item.category === category);
            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryItems.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-slate-900/90 hover:border-sky-500/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 transition-all duration-200 group-hover:bg-sky-500/20 group-hover:text-white group-hover:border-sky-500/40">
                        {getSkillIcon(skill.name)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span className="text-xs text-slate-500">{category}</span>
                      </div>
                      {skill.highlight && (
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400 ml-auto opacity-70" title="Core technology" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="text-center text-xs text-slate-500 mt-4 p-3 bg-white/[0.02] border border-dashed border-white/10 rounded-xl">
            💡 All technologies and categories are defined in <code className="text-sky-300">src/data/portfolioData.ts</code>. You can customize, add, or reorganize skills anytime.
          </div>
        </div>
      </div>
    </section>
  );
};
