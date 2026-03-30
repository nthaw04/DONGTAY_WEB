import { LANDING_TEXT } from "@/lib/constants";

export const FooterSection = () => {
  return (
    <footer id="lien-he" className="bg-zinc-100 px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 border-b border-black/10 pb-12 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <h3 className="text-lg font-black tracking-wide text-black">{LANDING_TEXT.footer.companyName}</h3>
          <p className="mt-4 text-sm leading-7 font-medium text-zinc-600">
            {LANDING_TEXT.footer.companyDescription}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            {LANDING_TEXT.footer.menuTitle}
          </h4>
          <ul className="mt-4 space-y-3">
            {LANDING_TEXT.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#f59e0b]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            {LANDING_TEXT.footer.contactTitle}
          </h4>
          <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-600">
            {LANDING_TEXT.footer.contacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            {LANDING_TEXT.footer.workingHoursTitle}
          </h4>
          <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-600">
            {LANDING_TEXT.footer.workingHours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            Vị trí
          </h4>
          <div className="mt-4 overflow-hidden border border-black/10 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7511481391803!2d106.7658198753198!3d10.830346358196264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527aadd069d8b%3A0xc88b4b29abaa28c!2zMTIzIMSQLiDEkOG7lyBYdcOibiBI4bujcCwgUGjGsOG7m2MgTG9uZyBCLCBQaMaw4bubYyBMb25nLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1774880265540!5m2!1sen!2s"
              className="h-70 w-full md:h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Đông Tây"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-2 pt-6 text-xs font-medium text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">{LANDING_TEXT.footer.copyright}</p>
        <p>{LANDING_TEXT.footer.rights}</p>
      </div>
    </footer>
  );
};
