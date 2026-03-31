import type { Metadata } from "next";
import "./globals.css";
import { googleSansFlex, sfUIDisplay } from "./fonts";
import { LANDING_TEXT } from "@/lib/constants";

export const metadata: Metadata = {
  title: LANDING_TEXT.metadata.title,
  description: LANDING_TEXT.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sfUIDisplay.variable} ${googleSansFlex.variable}`}>
      <body
        suppressHydrationWarning
        className={`${sfUIDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
