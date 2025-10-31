export default function SectionTitle({ title }) {
  return (
    <div
      className="flex items-center justify-center gap-4 mb-8"
      data-aos="fade-up"
    >
      <span className="flex-1 max-w-[100px] md:max-w-[150px] h-[2px] bg-third mt-6"></span>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary whitespace-nowrap">
        {title}
      </h2>
      <span className="flex-1 max-w-[100px] md:max-w-[150px] h-[2px] bg-third mt-6"></span>
    </div>
  );
}
