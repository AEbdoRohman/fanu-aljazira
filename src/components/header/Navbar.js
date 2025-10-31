"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import Image from "next/image";

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: crypto.randomUUID(), title: "الرئيسية", href: "/" },
    { id: crypto.randomUUID(), title: "من نحن", href: "/#about" },
    { id: crypto.randomUUID(), title: "خدماتنا", href: "/#services" },
    { id: crypto.randomUUID(), title: "انجازاتنا", href: "/#stats" },
  ];

  return (
    <nav className="relative">
      <ul
        className={`hidden md:flex gap-6 text-2xl font-bold ${
          scrolled ? "text-maintext" : "text-maintext"
        }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      {/* menu icon */}
      <button
        className="md:hidden text-maintext cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="فتح القائمة"
      >
        <HiMenuAlt2 size={32} />
      </button>

      <div
        className={`md:hidden fixed -top-4 -left-6 h-screen w-72 bg-fourth shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "-translate-x-1" : "-translate-x-full"
        }`}
      >
        {/* close icon */}
        <button
          className="absolute top-4 right-4 text-secondary cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="اغلاق القائمة"
        >
          <IoMdClose size={28} />
        </button>
        <div className="flex items-center justify-center mt-10">
          <Image src="/log.png" alt="logo" width={120} height={100} />
        </div>

        <ul className="flex flex-col gap-6 mt-8 px-6 text-maintext text-xl font-semibold">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {link.title}
              </Link>
              <div className="mt-2 border-t border-hover"></div>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed -top-4 left-0 w-screen h-screen bg-black bg-opacity-60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
