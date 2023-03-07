import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`container mx-auto px-6 md:px-0 h-full ${inter.className}`}>
      <Header />
      <main id="main-content" className="w-full h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
