import Image from "next/image";

const projects = [
  "Khu nhà ở Đông Tây Riverside",
  "Nhà máy kết cấu thép Đông Tây",
  "Tổ hợp văn phòng DT Signature",
  "Trung tâm logistics Đông Tây Hub",
  "Khu phức hợp thương mại Axis",
  "Hạ tầng kỹ thuật Green Avenue",
];

export const ProjectsSection = () => {
  return (
    <section id="du-an" className="border-b border-black/10 bg-zinc-50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          Năng lực triển khai
        </p>
        <h2 className="text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
          Dự án tiêu biểu
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((projectName, index) => (
            <article
              key={projectName}
              className="group overflow-hidden border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/images/storm.jpg"
                  alt={projectName}
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
                  {projectName}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
