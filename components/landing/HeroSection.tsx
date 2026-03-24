"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { cormorantGaramond } from "@/app/fonts";

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
        src="/images/hero.jpg"
        alt="Dự án hạ tầng giao thông"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <p className="hero-anim relative z-10 mb-4 text-sm font-semibold tracking-tighter uppercase text-white/80">
          Premium Construction
        </p>

        <h1
          className={`${cormorantGaramond.className} hero-anim relative z-10 max-w-10xl text-6xl leading-none font-bold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl`}
        >
          CÔNG TY TNHH ĐÔNG TÂY
        </h1>

        <p className="hero-anim relative z-10 mt-8 max-w-3xl text-lg leading-relaxed font-medium tracking-tighter text-white/90 sm:text-xl">
          Kiến tạo công trình vững bền
        </p>

        <p className="hero-anim relative z-10 mt-3 max-w-3xl text-base leading-relaxed font-medium tracking-tighter text-white/80 sm:text-lg">
          Chất lượng thi công chuẩn mực, tiến độ minh bạch và giải pháp xây dựng
          bền vững cho mọi quy mô dự án.
        </p>

        <Button
          asChild
          className="hero-anim relative z-10 mt-12 h-12 rounded-none bg-white px-8 text-sm font-semibold tracking-tighter text-black uppercase transition-colors hover:bg-[#f59e0b]"
        >
          <a href="#lien-he">Nhận tư vấn dự án</a>
        </Button>
      </div>
    </section>
  );
};
