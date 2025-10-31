"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[70%]">
      <div
        className={`container mx-auto flex items-center justify-between border border-border rounded-lg py-1 px-3 md:px-8 transition-bg duration-700 ease-in-out 
       ${scrolled ? "bg-fourth" : "bg-fourth"} `}
      >
        <Link href="/" className="relative w-28 h-16 ">
          <Image src="/log.png" alt="logo" fill className="object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <Navbar scrolled={scrolled} />
          <div className="hidden md:block">
            <Button text="اتصل بنا" link="tel:966551228659" />
          </div>
        </div>
      </div>
    </header>
  );
}
