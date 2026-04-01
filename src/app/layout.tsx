import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // It's better to specify weights
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Saucam Financials",
  description: "Top financial application for personal and business finance management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
