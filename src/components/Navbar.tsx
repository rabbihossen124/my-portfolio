"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import personalPhoto from "@/assat/photo-1.png";
import { portfolioData } from "@/data/portfolioData";
import { MenuIcon, CloseIcon, MailIcon } from "./Icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06090e]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 no-underline"
          aria-label={`${portfolioData.personal.name} - Home`}
        >
          <div
            className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-sky-400/60 shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-sky-400 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.5)] shrink-0 bg-slate-900"
            title={portfolioData.personal.name}
          >
            <Image
              src={personalPhoto}
              alt={portfolioData.personal.name}
              className="object-cover object-top w-full h-full"
              priority
              width={36}
              height={36}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] font-semibold text-sky-400 tracking-wider uppercase">
              {portfolioData.personal.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
          >
            <MailIcon size={16} />
            <span>Let&apos;s Talk</span>
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-sky-400 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed top-[68px] inset-x-0 bg-[#080c14]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-300 bg-white/[0.02] border border-white/5 hover:text-white hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="opacity-40">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold px-5 py-3 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-md shadow-sky-500/30"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MailIcon size={16} />
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
};
