"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ContactCTA({ phone = "966509485046" }) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <section
      className=" text-primary flex flex-col items-center justify-center gap-6 p-10 md:p-16 text-center shadow-lg"
      dir="rtl"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold">
        لا تدع العطل يوقفك — نحن هنا لخدمتك فورًا!
      </h2>

      <p className="text-lg md:text-xl  max-w-2xl leading-relaxed">
        سواء كان مكيفك لا يبرد، أو ثلاجتك توقفت عن العمل، فريقنا جاهز لخدمتك
        بسرعة واحترافية. اتصل بنا الآن واحصل على صيانة فورية بضمان الجودة.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <a
          href={telHref}
          className="inline-flex items-center gap-3 bg-fourth text-maintext px-8 py-3 rounded-lg font-semibold shadow hover:bg-fourth/90 transition"
        >
          <FaPhone className="w-5 h-5" />
          اتصل الآن
        </a>

        <a
          href="https://wa.me/966551228659"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl inline-flex items-center gap-3 border-2 border-third text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          <FaWhatsapp className="w-5 h-5" />
          تواصل عبر واتساب
        </a>
      </div>
    </section>
  );
}
