import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center pt-10 md:pt-20 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="w-full text-center z-10">
        <h1
          className="text-3xl md:text-6xl font-bold text-maintext leading-snug"
          data-aos="zoom-in"
        >
          برودة مثالية... أداء مضمون
        </h1>
        <h2
          className="text-md md:text-3xl font-semibold text-third mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          حلول تكييف وتبريد متكاملة لأقصى درجات الراحة في كل مكان
        </h2>
        <div className="mt-8 md:mt-14" data-aos="fade-up" data-aos-delay="300">
          <p className="text-maintext text-sm md:text-xl font-semibold pb-2">
            نقدم خدمات تركيب وصيانة المكيفات والثلاجات بأعلى معايير الجودة،
            باستخدام أحدث التقنيات لضمان أداء فعّال وموفر للطاقة.
          </p>
          <p className="text-sm md:text-xl font-semibold text-maintext">
            فريقنا من المتخصصين جاهز لخدمتك أينما كنت — سرعة في الاستجابة، ودقة
            في التنفيذ، ونتائج تدوم طويلاً.
          </p>
        </div>
        <div
          className="mt-10 flex justify-center flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button text="احجز خدمتك الآن" link="/#contact" size color="fourth" />
          <Button
            text="تواصل عبر واتساب"
            link="https://wa.me/966551228659"
            size
          />
        </div>
      </div>
    </section>
  );
}
