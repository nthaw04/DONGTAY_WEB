"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { cormorantGaramond } from "@/app/fonts";
import { LANDING_TEXT } from "@/lib/constants";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          delay: 0.2,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center border-b border-black/10 px-6 pt-28 pb-20 lg:px-10"
    >
      <Image
        src="/images/du_an/tieu-bieu.jpg"
        alt={LANDING_TEXT.hero.imageAlt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        <h1
          className={`${cormorantGaramond.className} hero-anim relative z-10 max-w-9xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl`}
        >
          <span className="block">{LANDING_TEXT.hero.titleLine1}</span>
          <span className="mt-1 block">{LANDING_TEXT.hero.titleLine2}</span>
        </h1>

        <p className="hero-anim relative z-10 mt-3 max-w-3xl text-base leading-relaxed font-medium tracking-tight text-white/80 sm:text-lg">
          {LANDING_TEXT.hero.description}
        </p>

        {/* <Button
          asChild
          className="hero-anim relative z-10 mt-6 h-12 rounded-none bg-white px-8 text-sm font-semibold tracking-tighter text-black uppercase transition-colors hover:bg-[#f59e0b]"
        >
          <a href="#lien-he">{LANDING_TEXT.hero.cta}</a>
        </Button> */}
      </div>
    </section>
  );
};
