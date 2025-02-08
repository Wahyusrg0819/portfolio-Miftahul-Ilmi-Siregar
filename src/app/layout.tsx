import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Miftahul Ilmi Siregar | Portfolio Sastra Jepang",
  description: "Portfolio Miftahul Ilmi Siregar, mahasiswi semester 8 Sastra Bahasa Jepang Universitas Negeri Padang",
  keywords: ["portfolio", "sastra jepang", "bahasa jepang", "universitas negeri padang", "miftahul ilmi siregar"],
  icons: {
    icon: '/icons/flower.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/icons/flower.ico" />
      </head>
      <body className={`${nunito.className} bg-pink-50 text-gray-800 min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
