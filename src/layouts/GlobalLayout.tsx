import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}
