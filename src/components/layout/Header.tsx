"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  PhoneForwarded,
  ListOrdered,
  Headphones,
  Sparkles,
  BarChart3,
  PhoneCall,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks, featureDropdownItems } from "@/lib/site-data";

const iconMap: Record<string, React.ElementType> = {
  PhoneForwarded,
  ListOrdered,
  Headphones,
  Sparkles,
  BarChart3,
  PhoneCall,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-[#E5E1DA]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#525252]">
          {navLinks.map((link) =>
            link.label === "Features" ? (
              <li
                key={link.label}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1 transition-colors hover:text-[#101010] cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[480px] rounded-2xl border border-[#E5E1DA] bg-white p-4 shadow-xl"
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {featureDropdownItems.map((item) => {
                          const Icon = iconMap[item.icon];
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#F8F5F0]"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#0B57D0]">
                                {Icon && <Icon size={18} />}
                              </span>
                              <div>
                                <span className="block text-sm font-semibold text-[#101010]">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-[#767676] leading-snug mt-0.5">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-3 border-t border-[#E5E1DA] pt-3">
                        <Link
                          href="/features"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-center text-sm font-medium text-[#0B57D0] hover:text-[#063B91] transition-colors"
                        >
                          View all features &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#101010]"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/demo"
            className="text-sm font-medium text-[#525252] hover:text-[#101010] transition-colors"
          >
            Talk to sales
          </Link>
          <Button href="/trial" size="sm">
            Start free trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-[#101010] cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

    </header>
      {/* Mobile menu - rendered outside header to avoid stacking context issues */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full w-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1DA]">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#101010] cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#101010] hover:bg-[#F8F5F0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 mb-2 border-t border-[#E5E1DA] pt-4 px-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#767676]">
                  Features
                </span>
              </div>
              {featureDropdownItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#525252] hover:bg-[#F8F5F0] transition-colors"
                  >
                    {Icon && <Icon size={16} className="text-[#0B57D0]" />}
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-6 flex flex-col gap-3 px-4">
                <Button href="/trial" size="md" className="w-full">
                  Start free trial
                </Button>
                <Button href="/demo" variant="secondary" size="md" className="w-full">
                  Talk to sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
