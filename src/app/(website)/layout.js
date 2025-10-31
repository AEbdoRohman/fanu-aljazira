"use client";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function WebsiteLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      {children}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
