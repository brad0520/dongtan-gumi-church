import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "동탄구미교회 | Dongtan Gumi Church",
  description:
    "경기도 화성시 동탄에 위치한 동탄구미교회입니다. 따뜻한 가족 같은 공동체, 말씀과 기도로 함께 성장하는 교회입니다.",
  keywords: [
    "동탄구미교회",
    "동탄교회",
    "화성시교회",
    "구미교회",
    "동탄구",
    "예배",
    "기독교",
    "교회 홈페이지",
    "동탄 장지안길",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "동탄구미교회",
    title: "동탄구미교회 | Dongtan Gumi Church",
    description:
      "경기도 화성시 동탄에 위치한 동탄구미교회. 따뜻한 가족 같은 공동체, 말씀과 기도로 함께 성장하는 교회",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "동탄구미교회" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "동탄구미교회 | Dongtan Gumi Church",
    description:
      "경기도 화성시 동탄에 위치한 동탄구미교회. 따뜻한 가족 같은 공동체, 말씀과 기도로 함께 성장하는 교회",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
