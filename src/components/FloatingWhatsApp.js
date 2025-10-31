"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping"></span>

      <a
        href="https://wa.me/966551228659"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="relative w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110 animate-bounce"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
