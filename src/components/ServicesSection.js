import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const acServices = [
  {
    title: "تركيب المكيفات",
    description:
      "خدمة تركيب احترافية لجميع أنواع المكيفات مع مراعاة أدق التفاصيل لضمان تبريد مثالي وأداء مستقر يدوم طويلاً.",
    image: "/install.png",
  },
  {
    title: "صيانة المكيفات الدورية",
    description:
      "نقدّم صيانة دورية متكاملة تشمل الفحص والتنظيف واستبدال القطع التالفة، للحفاظ على كفاءة جهازك طوال العام.",
    image: "/maintenance.webp",
  },
  {
    title: "تنظيف المكيفات العميق",
    description:
      "تنظيف داخلي وخارجي باستخدام معدات متخصصة لإزالة الأوساخ والبكتيريا وتحسين جودة الهواء وكفاءة التبريد.",
    image: "/cleaning.png",
  },
  {
    title: "نقل وتركيب المكيفات",
    description:
      "نقوم بفك، نقل، وإعادة تركيب المكيفات بأمان تام وباحترافية عالية، مع اختبار شامل بعد التركيب للتأكد من عملها المثالي.",
    image: "/moving.png",
  },
  {
    title: "صيانة الثلاجات والفريزرات",
    description:
      "نوفّر حلولاً سريعة ودقيقة لأعطال الثلاجات والفريزرات، مع ضمان الحفاظ على التبريد المثالي للمنتجات.",
    image: "/fridge.png",
  },
  {
    title: "صيانة الغسالات الأوتوماتيكية",
    description:
      "خدمة فحص وصيانة شاملة للغسالات تضمن أداءً ثابتًا ودورات غسيل نظيفة، مع إصلاح الأعطال الكهربائية والميكانيكية.",
    image: "/washer.png",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="pb-20 px-4 md:px-20 pt-20 bg-background"
      dir="rtl"
    >
      <div className="container mx-auto">
        <SectionTitle title="خدماتنا" />
        <p className="text-center text-SecondText text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed">
          نقدم حلولاً متكاملة في مجال التبريد والتكييف تشمل التركيب، الصيانة،
          والتنظيف، بالإضافة إلى صيانة الأجهزة المنزلية مثل الثلاجات والغسالات.
          نهدف إلى تقديم خدمات سريعة، دقيقة، وبجودة تليق بثقتكم.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {acServices.map((service, index) => (
            <Link href="#contact" key={index}>
              <div
                className="group bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl "
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-primary text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-SecondText text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
