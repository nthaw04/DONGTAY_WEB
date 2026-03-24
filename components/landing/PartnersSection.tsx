const partners = [
  "VietBuild",
  "An Pha Steel",
  "Metro Lighting",
  "VN Cement",
  "Alpha Facade",
  "Sunline Glass",
  "BlueStone",
  "City Materials",
];

export const PartnersSection = () => {
  return (
    <section id="doi-tac" className="border-b border-black/10 bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          Hợp tác chiến lược
        </p>
        <h2 className="text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
          Khách hàng & Đối tác
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center border border-black/10 bg-zinc-50 px-4"
            >
              <span className="text-center text-sm font-bold tracking-wide text-zinc-700 sm:text-base">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
