"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

export default function ContactCTA({ phone = "966509485046" }) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <section
      id="contactCTA"
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

      <div className="mt-10 flex justify-center flex-wrap gap-4">
        <Button text="اتصل بنا" link="tel:/966551228659" color="fourth" size />
        <Button
          text="تواصل عبر واتساب"
          link="https://wa.me/966551228659"
          color="maintext"
          size
          icon={<FaWhatsapp />}
        />
      </div>
    </section>
  );
}
