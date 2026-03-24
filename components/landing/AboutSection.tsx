import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="gioi-thieu" className="border-b border-black/10 bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            Về chúng tôi
          </p>
          <h2 className="text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Giới thiệu
          </h2>
          <p className="mt-8 text-base leading-8 font-medium text-zinc-700 sm:text-lg">
            CÔNG TY TNHH ĐÔNG TÂY hoạt động trong lĩnh vực thi công và phát
            triển công trình dân dụng, công nghiệp và hạ tầng. Chúng tôi theo
            đuổi tiêu chuẩn thi công nghiêm ngặt, tiến độ minh bạch và giải pháp
            bền vững để mang đến giá trị lâu dài cho từng dự án.
          </p>
        </div>

        <div className="relative overflow-hidden border border-black/10 bg-zinc-100">
          <Image
            src="/images/storm.jpg"
            alt="Đội ngũ triển khai công trình của Đông Tây"
            width={1200}
            height={900}
            className="h-96 w-full object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};
