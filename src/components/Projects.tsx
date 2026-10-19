import React from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ExternalLinkIcon, GitHubIcon, CodeWindowIcon } from "./Icons";

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A showcase of web applications focusing on clean interfaces, robust code, and smooth performance.
          </p>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {/* Card Mockup Visual Header */}
              <div className="bg-slate-950/80 border-b border-white/10 p-6 flex flex-col justify-between min-h-[170px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  {project.status && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-sky-300">
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 opacity-85">
                  <div className="w-3/5 h-2 rounded-full bg-sky-500/20" />
                  <div className="h-2 rounded-full bg-white/[0.06]" />
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    <div className="h-9 rounded-md bg-white/[0.03] border border-dashed border-white/10" />
                    <div className="h-9 rounded-md bg-white/[0.03] border border-dashed border-white/10" />
                    <div className="h-9 rounded-md bg-white/[0.03] border border-dashed border-white/10" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-sky-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 flex-1 text-sm font-semibold py-2 px-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/25 hover:bg-sky-400 hover:text-slate-950 hover:border-sky-400 transition-all duration-200 shadow-sm"
                      title={`Visit live demo for ${project.title}`}
                    >
                      <ExternalLinkIcon size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center flex-1 text-sm font-medium py-2 px-3 rounded-lg bg-white/[0.02] text-slate-500 border border-white/5 opacity-60">
                      <span>Demo In Progress</span>
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 flex-1 text-sm font-semibold py-2 px-3 rounded-lg bg-white/[0.03] text-slate-300 border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      title={`View repository for ${project.title}`}
                    >
                      <GitHubIcon size={16} />
                      <span>Code</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Guide banner for adding projects */}
        <div className="mt-12 p-5 bg-slate-900/40 border border-dashed border-white/15 rounded-2xl flex items-center justify-between gap-4 flex-col sm:flex-row">
          <div className="flex items-center gap-3">
            <CodeWindowIcon size={22} className="text-sky-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-400">
              <strong className="text-white">Customizing Projects:</strong> Add your own live URLs, GitHub repos, and details in{" "}
              <code className="text-sky-300">src/data/portfolioData.ts</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
