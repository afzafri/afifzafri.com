import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afif Zafri - Full Stack Developer & Team Lead",
  description: "Full Stack Developer & Team Lead based in Selangor, Malaysia. Specializing in PHP/Laravel backend engineering for enterprise solutions. Passionate about building scalable web applications and contributing to open source communities.",
  keywords: ["Afif Zafri", "Laravel Developer", "PHP Developer", "Full Stack Developer", "Team Lead", "Backend Developer", "Malaysia", "Selangor", "Enterprise Solutions", "Open Source"],
  authors: [{ name: "Afif Zafri" }],
  creator: "Afif Zafri",
  publisher: "Afif Zafri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afifzafri.com",
    title: "Afif Zafri - Full Stack Developer & Team Lead",
    description: "Full Stack Developer & Team Lead specializing in Laravel/PHP. Building enterprise web solutions in Malaysia.",
    siteName: "Afif Zafri",
  },
  twitter: {
    card: "summary",
    title: "Afif Zafri - Full Stack Developer & Team Lead",
    description: "Full Stack Developer & Team Lead specializing in Laravel/PHP. Building enterprise web solutions in Malaysia.",
    creator: "@afzafri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
