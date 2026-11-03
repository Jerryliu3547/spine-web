import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://spinetwin.tech"),
  title: "SpineTwin | Autonomous Surgical AI & Biomechanical Foundries",
  description:
    "An infinite biomechanics team for spine surgery. Autonomous surgical planning, finite element analysis, and musculoskeletal simulation.",
  icons: {
    icon: [
      { url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" },
      { url: `${basePath}/icon.png`, sizes: "512x512", type: "image/png" },
      { url: `${basePath}/favicon.ico`, sizes: "any" },
    ],
    shortcut: `${basePath}/apple-icon.png`,
    apple: [
      { url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" },
      { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={`${basePath}/apple-icon.png`} type="image/png" sizes="180x180" />
        <link rel="icon" href={`${basePath}/icon.png`} type="image/png" sizes="512x512" />
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="shortcut icon" href={`${basePath}/apple-icon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-icon.png`} sizes="180x180" />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} sizes="180x180" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
