export type SOSItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

export const SOSs: SOSItem[] = [
  {
    image: "/images/flood-relief-qb.png",
    title: "Cứu trợ khẩn cấp Lệ Thủy - Quảng Bình",
    slug: "cuu-tro-khan-cap-le-thuy-quang-binh",
    location: "Huyện Lệ Thủy, Quảng Bình",
    date: "2025-10-15",
    time: "07:30 AM",
  },
  {
    image: "/images/rescue-ht.png",
    title: "Đội cứu hộ tiếp cận vùng ngập sâu Hương Khê",
    slug: "doi-cuu-ho-tiep-can-huong-khe",
    location: "Huyện Hương Khê, Hà Tĩnh",
    date: "2025-10-16",
    time: "09:00 AM",
  },
  {
    image: "/images/supplies-qt.png",
    title: "Phân phát nhu yếu phẩm xã Hải Lăng",
    slug: "phan-phat-nhu-yeu-pham-hai-lang",
    location: "Huyện Hải Lăng, Quảng Trị",
    date: "2025-10-18",
    time: "08:30 AM",
  },
  {
    image: "/images/training-hue.png",
    title: "Tập huấn kỹ năng sơ cấp cứu tình nguyện viên",
    slug: "tap-huan-ky-nang-so-cap-cuu",
    location: "TP. Huế, Thừa Thiên Huế",
    date: "2025-09-20",
    time: "02:00 PM",
  },
  {
    image: "/images/charity-dn.png",
    title: "Chiến dịch gom áo ấm mùa đông",
    slug: "chien-dich-gom-ao-am-mua-dong",
    location: "TP. Đà Nẵng",
    date: "2025-11-01",
    time: "08:00 AM",
  },
  {
    image: "/images/evacuation-qnam.png",
    title: "Sơ tán người dân vùng sạt lở Nam Trà My",
    slug: "so-tan-nguoi-dan-nam-tra-my",
    location: "Huyện Nam Trà My, Quảng Nam",
    date: "2025-10-25",
    time: "10:00 AM",
  },
  {
    image: "/images/medical-qngai.png",
    title: "Khám chữa bệnh miễn phí sau bão",
    slug: "kham-chua-benh-mien-phi-sau-bao",
    location: "Huyện Bình Sơn, Quảng Ngãi",
    date: "2025-11-05",
    time: "07:00 AM",
  },
];

export const LANDING_TEXT = {
  metadata: {
    title: "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
    description: "Kiến tạo công trình vững bền cùng giải pháp xây dựng cao cấp.",
  },
  logo: "Đông Tây",
  navItems: [
    { href: "#gioi-thieu", label: "Giới thiệu" },
    { href: "#du-an", label: "Dự án" },
    { href: "#doi-tac", label: "Sơ đồ tổ chức" },
    { href: "#lien-he", label: "Liên hệ" },
  ],
  hero: {
    imageAlt: "Dự án hạ tầng giao thông",
    badge: "Premium Construction",
    titleLine1: "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG",
    titleLine2: "& KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
    subtitle: "Kiến tạo công trình vững bền",
    description:
      "Chất lượng chuẩn mực, tiến độ minh bạch cho mọi dự án.",
    cta: "Nhận tư vấn dự án",
  },
  about: {
    eyebrow: "Về chúng tôi",
    title: "Giới thiệu",
    descriptionParagraphs: [
      "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG VÀ KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY được thành lập theo giấy chứng nhận đăng ký doanh nghiệp số 0304826616 do Sở kế hoạch đầu tư TP Hồ Chí Minh cấp lần đầu ngày 01 tháng 02 năm 2007, đăng ký thay đổi lần thứ 2 ngày 29 tháng 03 năm 2023.",
      "Phòng thí nghiệm địa kỹ thuật đã được cấp giấy chứng nhận đủ điều kiện hoạt động thí nghiệm chuyên ngành xây dựng của Sở Xây dựng Tp HCM: Phòng thí nghiệm Địa kỹ thuật được Sở Xây Dựng cấp mã số dấu LAS - XD 58.031 theo quyết định số: 95/GCN-SXD-KT&VLXD ngày 01/11/2024). Bên cạnh đó Phòng thí nghiệm chuyên ngành xây dựng của Công ty đã xây dựng, áp dụng và được chứng nhận hệ thống quản lý phòng thí nghiệm theo các yêu cầu của tiêu chuẩn TCVN ISO/IEC 17025 : 2024.",
      "Công ty rất sẵn sàng hợp tác phát triển trong nước, ngoài nước và quốc tế với các đối tác phù hợp, đồng thời sẵn sàng chia sẻ kinh nghiệm nghề nghiệp nhằm cùng nhau phát triển trên tiêu chí: “Phát triển bền vững – Nâng cao và đảm bảo chất lượng công trình”.",
      "Trung tâm xin gửi lời cảm ơn chân thành đến các quý Chủ đầu tư, quý Ban quản lý, Đơn vị tư vấn giám sát, Nhà thầu thi công xây lắp và các đơn vị đối tác đã quan tâm, tạo điều kiện và hợp tác cùng Trung tâm. Trung tâm luôn mong muốn nhận được sự quan tâm, hợp tác và góp ý của Quý khách hàng trong thời gian tới.",
      "Trân trọng cảm ơn và kính chào!"
    ],
  },
  fieldSurvey: {
    eyebrow: "Năng lực hiện trường",
    title: "KHẢO SÁT - THÍ NGHIỆM",
    items: [
      {
        image: "/images/cong_trinh/ct_1.jpg",
        title: "Khảo sát hiện trường 01",
      },
      {
        image: "/images/cong_trinh/ct_2.jpg",
        title: "Khảo sát hiện trường 02",
      },
      {
        image: "/images/cong_trinh/ct_3.jpg",
        title: "Khảo sát hiện trường 03",
      },
      {
        image: "/images/cong_trinh/ct_4.jpg",
        title: "Khảo sát hiện trường 04",
      },
      {
        image: "/images/cong_trinh/ct_5.jpg",
        title: "Khảo sát hiện trường 05",
      },
      {
        image: "/images/cong_trinh/ct_6.jpg",
        title: "Khảo sát hiện trường 06",
      },
      {
        image: "/images/cong_trinh/1.jpg",
        title: "Khảo sát hiện trường 07",
      },
      {
        image: "/images/cong_trinh/2.jpg",
        title: "Khảo sát hiện trường 08",
      },
      {
        image: "/images/cong_trinh/3.jpg",
        title: "Khảo sát hiện trường 09",
      },
      {
        image: "/images/cong_trinh/4.jpg",
        title: "Khảo sát hiện trường 10",
      },
      {
        image: "/images/cong_trinh/5.jpg",
        title: "Khảo sát hiện trường 11",
      },
    ],
  },
  projects: {
    eyebrow: "Năng lực triển khai",
    title: "Dự án tiêu biểu",
    items: [
      {
        name: "Cao tốc Chơn Thành - Đức Hòa",
        year: "2026",
        image: "/images/du_an/tieu-bieu.jpg",
      },
      {
        name: "Tuyến Mỹ An - Cao Lãnh",
        year: "2025",
        image: "/images/du_an/cao-lanh.jpg",
      },
      {
        name: "Cầu Sông Ông Đốc - Cà Mau",
        year: "2024",
        image: "/images/du_an/cau-song-ong-doc.png",
      },
      {
        name: "Đường trục Đông Tây TP Cà Mau",
        year: "2023",
        image: "/images/du_an/CM7.jpg",
      },
      {
        name: "Nút giao Nguyễn Khoái - TP.HCM",
        year: "2022",
        image: "/images/du_an/nguyen-khoai.jpg",
      },
      {
        name: "Tuyến Vành đai 2 - Cà Mau",
        year: "2021",
        image: "/images/du_an/tieu-bieu.jpg",
      },
    ],
  },
  partners: {
    eyebrow: "Cơ cấu vận hành",
    title: "Sơ Đồ Tổ Chức Của Công Ty",
    names: [
      "VietBuild",
      "An Pha Steel",
      "Metro Lighting",
      "VN Cement",
      "Alpha Facade",
      "Sunline Glass",
      "BlueStone",
      "City Materials",
    ],
  },
  cta: {
    eyebrow: "Bắt đầu dự án mới",
    title: "Đồng hành cùng chúng tôi",
    button: "Liên hệ tư vấn ngay",
  },
  footer: {
    companyName:
      "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
    companyDescription:
      "Đơn vị thi công và phát triển công trình theo định hướng chất lượng, bền vững và hiệu quả vận hành dài hạn.",
    menuTitle: "Menu",
    contactTitle: "Liên hệ",
    contacts: ["Hotline: 0913 682 617", "Email: dongtayco@gmail.com", "123/3 Đỗ Xuân Hợp, P.Phước Long B, Tp Thủ Đức, Tp Hồ Chí Minh"],
    workingHoursTitle: "Giờ làm việc",
    workingHours: [
      "Thứ 2 - Thứ 7: 08:00 - 11:30, 13:00 - 17:00",
      "Chủ nhật: Nghỉ",
    ],
    copyright:
      "© 2026 CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
    rights: "All rights reserved.",
  },
} as const;

export default SOSs;
