import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  CodeWindowIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from "./Icons";
import { BackToTop } from "./BackToTop";

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = 2026;

  return (
    <footer className="bg-[#04060a] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Brand with SVG Window Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0" title="Developer Portfolio">
              <CodeWindowIcon size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white">{personal.name}</span>
              <span className="text-xs text-slate-500">{personal.role} • Modern Web Applications</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {personal.socialLinks.github && (
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
            )}

            {personal.socialLinks.linkedin && (
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
            )}

            {personal.socialLinks.twitter && (
              <a
                href={personal.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="X (Twitter) Profile"
              >
                <TwitterIcon size={18} />
              </a>
            )}

            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Email Me Directly"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {personal.name}. All rights reserved. Built with Next.js &amp; Tailwind CSS.
          </p>

          <BackToTop />
        </div>
      </div>
    </footer>
  );
};
