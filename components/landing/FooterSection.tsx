const menuItems = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#du-an", label: "Dự án" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#lien-he", label: "Liên hệ" },
];

export const FooterSection = () => {
  return (
    <footer id="lien-he" className="bg-zinc-100 px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 border-b border-black/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-black tracking-wide text-black">CÔNG TY TNHH ĐÔNG TÂY</h3>
          <p className="mt-4 text-sm leading-7 font-medium text-zinc-600">
            Đơn vị thi công và phát triển công trình theo định hướng chất lượng,
            bền vững và hiệu quả vận hành dài hạn.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            Menu
          </h4>
          <ul className="mt-4 space-y-3">
            {menuItems.map((item) => (
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
            Liên hệ
          </h4>
          <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-600">
            <li>Hotline: 0901 234 567</li>
            <li>Email: contact@dongtay.vn</li>
            <li>Hải Châu, Đà Nẵng</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-800">
            Giờ làm việc
          </h4>
          <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-600">
            <li>Thứ 2 - Thứ 6: 08:00 - 17:30</li>
            <li>Thứ 7: 08:00 - 12:00</li>
            <li>Chủ nhật: Nghỉ</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between pt-6 text-xs font-medium text-zinc-500">
        <p>© 2026 CÔNG TY TNHH ĐÔNG TÂY</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};
