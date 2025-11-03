import Link from "next/link";

export default function Button({ text, link, size, color = "primary", icon }) {
  const sizeClasses = size ? "w-9/12 md:w-auto" : "";
  const colorClasses = {
    primary: "bg-primary hover:bg-primary/90 text-maintext",
    secondary: "bg-secondary hover:bg-secondary/90 text-primary",
    maintext:
      "bg-maintext hover:bg-maintext/90 border border-primary text-primary",
    fourth: "bg-fourth hover:bg-fourth/90 border-primary text-maintext",
  };
  return (
    <Link
      href={link}
      className={`{inline-block ${sizeClasses} ${
        colorClasses[color] || colorClasses.primary
      } text-xl  px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-${color}/90 transition-all flex items-center justify-center gap-2`}
      aria-label={text}
    >
      {icon}
      {text}
    </Link>
  );
}
