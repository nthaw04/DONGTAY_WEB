import Image from "next/image";
import { LANDING_TEXT } from "@/lib/constants";

export const ProjectsSection = () => {
  return (
    <section id="du-an" className="border-b border-black/10 bg-zinc-50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          {LANDING_TEXT.projects.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-black tracking-tight text-black ">
          {LANDING_TEXT.projects.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_TEXT.projects.items.map((project, index) => (
            <article
              key={`${project.name}-${project.year}`}
              className="group overflow-hidden border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={560}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Dự án 0{index + 1}
                </p>
                <h3 className="mt-2 text-lg leading-snug font-bold text-black">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-[#f59e0b]">
                  Năm {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
