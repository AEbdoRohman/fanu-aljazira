import Image from "next/image";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative -top-6 md:-top-12 pb-16 px-4 md:px-10 lg:px-20  text-center"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-8/12" data-aos="fade-up">
          <Image
            src="/service.png"
            alt="about"
            width={800}
            height={400}
            className="object-cover rounded-2xl shadow-lg mx-auto"
          />
        </div>

        <div
          className="mt-10 space-y-6 md:w-9/12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-secondary text-3xl md:text-5xl font-bold">
            من نحن
          </h1>
          <p className="text-SecondText text-lg leading-relaxed">
            نحن شركة متخصصة في أنظمة التبريد والتكييف، نضع راحة عملائنا في
            المقام الأول من خلال تقديم خدمات احترافية تشمل التركيب، الصيانة،
            والتنظيف الدقيق لجميع أنواع المكيفات والأجهزة.
          </p>
          <p className="text-SecondText text-lg leading-relaxed">
            نؤمن أن جودة العمل تبدأ من التفاصيل، لذا نستخدم أحدث التقنيات
            والمعدات لضمان أداء مثالي، تبريد فعّال، واستهلاك أقل للطاقة. فريقنا
            المدرب يلتزم بالمواعيد ويضمن لك تجربة خدمة خالية من المتاعب.
          </p>
          <p className="text-SecondText text-lg leading-relaxed">
            نحن لا نقدم مجرد خدمة صيانة، بل نقدم تجربة راحة متكاملة تضمن لك
            أجواءً باردة ومنعشة طوال العام.
          </p>
          <div className="flex items-center justify-center pt-4">
            <Button
              text="تواصل معنا عبر واتساب"
              link="https://wa.me/966551228659"
              color="fourth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
