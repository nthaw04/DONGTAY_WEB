"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#du-an", label: "Dự án" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#lien-he", label: "Liên hệ" },
];

export const Header = () => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("top");

      if (!heroSection) {
        setIsPastHero(window.scrollY > 40);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const headerHeight = 80;

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
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className={cn(
            "text-xl font-black tracking-[0.18em] transition-colors duration-300 sm:text-2xl",
            isPastHero ? "text-black" : "text-white",
          )}
        >
          ĐÔNG TÂY
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors duration-300 hover:text-[#f59e0b]",
                  isPastHero ? "text-black/75" : "text-white/80",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
