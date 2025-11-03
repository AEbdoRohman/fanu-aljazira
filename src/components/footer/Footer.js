"use client";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";

const links = [
  { id: 2, title: "من نحن", href: "/#about" },
  { id: 3, title: "خدماتنا", href: "/#services" },
  // { id: 1, title: "اعمالنا", href: "/works" },
  { id: 6, title: "اتصل بنا", href: "/#contact" },
];
export default function Footer() {
  return (
    <footer className="bg-fourth text-maintext">
      <div className="container mx-auto px-4 py-10">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/log.png"
                alt="logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-justify">
              نقدم خدمات صيانة شاملة ومعتمدة، باستخدام احدث الادوات وبايدي فريق
              متخصص لضمان اداء مثالي وطول عمر اجهزتك
            </p>
          </div>
          {/* quick links */}
          <div className="mx-4 md:mx-10">
            <h3 className=" mx-auto text-2xl font-bold text-center pb-2 border-b-2 border-secondary inline-block">
              روابط سريعة
            </h3>
            <ul className="mt-4 grid grid-cols-1  gap-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-base md:text-xl font-semibold  transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-4 md:mx-0">
            <h3 className=" mx-auto text-2xl font-bold text-center pb-2 border-b-2 border-secondary inline-block">
              تواصل معنا
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:966551228659" className="hover:underline">
                  966551228659
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineMail />
                <a
                  href="mailto:fun@funaljazirah.com"
                  className="hover:underline"
                >
                  fun@funaljazirah.com{" "}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot />
                <a href="https://maps.app.goo.gl/Zk7SWVkFhA1nMBASA">
                  النرجس، الرياض، المملكة العربية السعودية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact us */}
          <div>
            <h3 className=" mx-auto text-2xl font-bold text-center pb-2 border-b-2 border-secondary inline-block">
              معلومات التواصل
            </h3>
            <div className="mt-6  space-y-3">
              <div className="mt-4">
                <SocialLinks />
              </div>

              <p>
                <strong>ساعات العمل:</strong>
                <br />
                الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً
              </p>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="mt-6 pt-3 border-t border-secondary">
          <div className="mt-3 w-full flex flex-col md:flex-row items-center justify-between gap-2 text-base ">
            <p>
              جميع الحقوق محفوظة &copy; {new Date().getFullYear()} فن الجزيرة
            </p>
            <p className="text-sm flex items-center gap-2">
              تم التطوير بواسطة{" "}
              <a
                href="https://wa.me/201208651583"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="text-secondary underline  transition-colors"
              >
                Abdelrahman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
