import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond, sfUIDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH ĐÔNG TÂY",
  description: "Kiến tạo công trình vững bền cùng giải pháp xây dựng cao cấp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfUIDisplay.className} ${sfUIDisplay.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
