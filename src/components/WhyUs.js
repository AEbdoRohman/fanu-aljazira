import { FaCogs, FaShieldAlt, FaBolt, FaSmileBeam } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function WhyUs() {
  const features = [
    {
      icon: <FaCogs className="text-secondary text-5xl mb-3" />,
      title: "خبرة تتحدث عن نفسها",
      description:
        "نمتلك سنوات من الخبرة في مجال التبريد والتكييف، مما يضمن لك خدمة دقيقة ونتائج تدوم طويلًا.",
    },
    {
      icon: <FaShieldAlt className="text-secondary text-5xl mb-3" />,
      title: "جودة مضمونة",
      description:
        "نلتزم باستخدام أدوات وقطع غيار أصلية ومعتمدة، مع ضمان فعلي على الخدمة والأداء.",
    },
    {
      icon: <FaBolt className="text-secondary text-5xl mb-3" />,
      title: "استجابة سريعة",
      description:
        "فريق الدعم الفني جاهز للوصول إليك في أقصر وقت، لتقديم حلول فورية وفعالة دون تأخير.",
    },
    {
      icon: <FaSmileBeam className="text-secondary text-5xl mb-3" />,
      title: "رضا العملاء أولويتنا",
      description:
        "نؤمن أن العميل هو شريك النجاح، لذلك نحرص على تقديم تجربة مريحة واحترافية في كل مرة.",
    },
  ];

  return (
    <section
      id="whyus"
      className="py-20 bg-gradient-to-b from-background to-hover px-4 md:px-10 lg:px-20"
      dir="rtl"
    >
      <div className="text-center mb-14">
        <SectionTitle title="لماذا تختارنا؟" />
        <p className="text-SecondText text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          نضع بين يديك تجربة خدمة متكاملة تجمع بين الاحتراف، الدقة، والالتزام،
          لأن راحتك هي هدفنا الأول.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-card text-center rounded-2xl shadow-lg border border-border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 p-8"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-secondary text-2xl font-bold mb-3 mt-3">
              {item.title}
            </h3>
            <p className="text-SecondText text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
