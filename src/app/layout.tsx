import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Supports weights 300-800
import '@fontsource-variable/merriweather-sans';
import '@fontsource/michroma';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evyco",
  description: "Evyco General Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
          <Navbar />
          {children}
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
