"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { LANDING_TEXT } from "@/lib/constants";

const CARD_HEIGHT = 200;
const CARD_GAP = 16;
const CARD_STEP = CARD_HEIGHT + CARD_GAP;
const VIEWPORT_HEIGHT = CARD_HEIGHT * 2 + CARD_GAP;

const ABOUT_HIGHLIGHTS = [
  "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG VÀ KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
  "0304826616",
  "01 tháng 02 năm 2007",
  "29 tháng 03 năm 2023",
  "LAS - XD 58.031",
  "95/GCN-SXD-KT&VLXD",
  "01/11/2024",
  "TCVN ISO/IEC 17025 : 2024",
  "Phát triển bền vững – Nâng cao và đảm bảo chất lượng công trình",
].sort((a, b) => b.length - a.length);

const renderHighlightedParagraph = (paragraph: string) => {
  const parts: Array<{ text: string; highlight: boolean }> = [];
  let cursor = 0;

  while (cursor < paragraph.length) {
    let nextIndex = -1;
    let matchedText = "";

    for (const phrase of ABOUT_HIGHLIGHTS) {
      const index = paragraph.indexOf(phrase, cursor);

      if (index === -1) continue;

      if (nextIndex === -1 || index < nextIndex) {
        nextIndex = index;
        matchedText = phrase;
      }
    }

    if (nextIndex === -1) {
      parts.push({ text: paragraph.slice(cursor), highlight: false });
      break;
    }

    if (nextIndex > cursor) {
      parts.push({ text: paragraph.slice(cursor, nextIndex), highlight: false });
    }

    parts.push({ text: matchedText, highlight: true });
    cursor = nextIndex + matchedText.length;
  }

  return parts.map((part, index) =>
    part.highlight ? (
      <strong key={`${part.text}-${index}`} className="font-semibold text-zinc-950">
        {part.text}
      </strong>
    ) : (
      <Fragment key={`${part.text}-${index}`}>{part.text}</Fragment>
    ),
  );
};

export const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const projectItems = LANDING_TEXT.projects.items;

  const loopProjects = useMemo(
    () => [
      ...projectItems,
      projectItems[0],
      projectItems[1],
    ],
    [projectItems],
  );

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setEnableTransition(true);
    }, 3200);

    return () => clearInterval(sliderInterval);
  }, []);

  useEffect(() => {
    if (activeIndex !== projectItems.length) return;

    const resetTimer = setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, 750);

    return () => clearTimeout(resetTimer);
  }, [activeIndex, projectItems.length]);

  return (
    <section
      id="gioi-thieu"
      className="border-b border-black/10 bg-white px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 tracking-tighter lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            {LANDING_TEXT.about.eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            {LANDING_TEXT.about.title}
          </h2>
          {LANDING_TEXT.about.descriptionParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-sm leading-7 font-normal tracking-tight text-zinc-600 sm:text-[15px]"
            >
              {renderHighlightedParagraph(paragraph)}
            </p>
          ))}
        </div>

        <aside id="du-an" className="lg:col-span-1">
          <div className="p-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f59e0b]">
              {LANDING_TEXT.projects.eyebrow}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight font-black tracking-tight text-black">
              {LANDING_TEXT.projects.title}
            </h3>

            <div
              className="relative mt-5 overflow-hidden"
              style={{ height: `${VIEWPORT_HEIGHT}px` }}
            >
              <div
                className="space-y-3"
                style={{
                  transform: `translateY(-${activeIndex * CARD_STEP}px)`,
                  transition: enableTransition ? "transform 700ms ease" : "none",
                }}
              >
                {loopProjects.map((project, index) => (
                  <article
                    key={`${project.name}-${project.year}-${index}`}
                    className="group overflow-hidden border border-black/10 bg-white"
                    style={{ height: `${CARD_HEIGHT}px` }}
                  >
                    <div className="flex h-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={200}
                        className="h-full w-32 object-cover sm:w-40"
                      />

                      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                          Dự án {String((index % projectItems.length) + 1).padStart(2, "0")}
                        </p>
                        <h4 className="mt-1 wrap-break-word text-base leading-7 font-bold text-black sm:text-lg">
                          {project.name}
                        </h4>
                        <p className="text-xs font-semibold tracking-[0.12em] text-[#f59e0b]">
                          Năm {project.year}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
