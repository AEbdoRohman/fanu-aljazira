import Link from "next/link";

export default function Button({ text, link, size, color = "primary" }) {
  const sizeClasses = size ? "w-9/12 md:w-auto" : "";
  const colorClasses = {
    primary: "bg-primary hover:bg-primary/90 text-maintext",
    secondary: "bg-secondary hover:bg-secondary/90 text-primary",
    third: "bg-third hover:bg-third/90 border border-primary text-maintext",
    fourth: "bg-fourth hover:bg-fourth/90 border-primary text-primary",
  };
  return (
    <Link
      href={link}
      className={`{inline-block ${sizeClasses} ${
        colorClasses[color] || colorClasses.primary
      } text-xl  px-8 py-3 rounded-lg font-semibold hover:bg-${color}/90 transition-all`}
      aria-label={text}
    >
      {text}
    </Link>
  );
}
