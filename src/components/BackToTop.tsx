"use client";

import React from "react";
import { ArrowUpIcon } from "./Icons";

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-400 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-sky-500/30 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
      aria-label="Back to top of page"
    >
      <span>Back to top</span>
      <ArrowUpIcon size={14} />
    </button>
  );
};
