"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { siteConfig, footerLinks } from "@/lib/site-data";

const linkColumns: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Product", links: footerLinks.product },
  { title: "Company", links: footerLinks.company },
  { title: "Legal", links: footerLinks.legal },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-[#F8F5F0] border-t border-[#E5E1DA]">
      {/* Main section */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#525252]">
              {siteConfig.description}
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[#101010]">
                Stay in the loop
              </h3>
              <p className="mt-1 text-xs text-[#767676]">
                Product updates and tips. No spam, ever.
              </p>

              {subscribed ? (
                <p className="mt-4 text-sm font-medium text-[#0B57D0]">
                  Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 rounded-full border border-[#E5E1DA] bg-white px-4 py-2 text-sm text-[#101010] placeholder:text-[#767676] outline-none focus:border-[#0B57D0] focus:ring-2 focus:ring-[#0B57D0]/20 transition-all"
                  />
                  <Button size="sm">Subscribe</Button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-[#101010]">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#525252] hover:text-[#101010] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5E1DA]">
        <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#767676]">
            &copy; 2024 {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#767676]">
              <ShieldCheck size={14} />
              Your data is always safe and encrypted.
            </span>
          </div>

        </div>
        <div className="mt-4 border-t border-[#E5E1DA] pt-4 text-center">
          <p className="text-xs text-[#767676]">
            GROVELEY LIMITED · Company number 16021027
          </p>
          <p className="mt-1 text-xs text-[#767676]">
            Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
