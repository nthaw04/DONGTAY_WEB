"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANDING_TEXT } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const logoSubline = "LAS - XD 58.031";

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("top");

      if (!heroSection) {
        setIsPastHero(window.scrollY > 40);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const headerHeight = 64;

      setIsPastHero(window.scrollY + headerHeight >= heroBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt={LANDING_TEXT.logo} className="h-9 w-9 object-contain sm:h-11 sm:w-11" />
          </span>

          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "text-base font-black tracking-[0.02em] transition-colors duration-300 sm:text-[19px]",
                isPastHero ? "text-zinc-950" : "text-white",
              )}
            >
              {LANDING_TEXT.logo}
            </span>
            <span
              className={cn(
                "mt-0.5 text-xs font-medium tracking-[0.08em] transition-colors duration-300 sm:text-xs",
                isPastHero ? "text-zinc-600" : "text-white/72",
              )}
            >
              {logoSubline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 md:flex">
          {LANDING_TEXT.navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors duration-300 hover:text-[#f59e0b]",
                  isPastHero ? "text-black/75" : "text-white/80",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center border border-white/25 md:hidden",
              isPastHero ? "text-black border-black/25" : "text-white",
            )}
            aria-label="Mở menu"
          >
            <Menu className="h-4.5 w-4.5" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[82%] border-l border-black/10 bg-white p-6">
            <div className="mt-8 flex flex-col gap-4">
              {LANDING_TEXT.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold text-black/80 transition-colors hover:text-[#f59e0b]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
