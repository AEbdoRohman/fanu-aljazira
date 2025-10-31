import { FaSnapchatGhost, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const socials = [
    {
      name: "سناب شات",
      href: "https://snapchat.com/add/username",
      icon: <FaSnapchatGhost className="text-amber-300 size-4 md:size-5" />,
    },
    {
      name: "تيك توك",
      href: "https://www.tiktok.com/@username",
      icon: <FaTiktok className="text-black size-4 md:size-5" />,
    },
    {
      name: "انستاجرام",
      href: "https://www.instagram.com/username",
      icon: <FaInstagram className="text-pink-500 size-4 md:size-5" />,
    },
    {
      name: "X",
      href: "https://twitter.com/username",
      icon: <FaXTwitter className="text-black size-4 md:size-5" />,
    },
  ];

  return (
    <div className="flex gap-x-4 mt-3">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`تابعنا على ${item.name}`}
          className="flex items-center justify-center size-8 md:size-10 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-500 ease-in-out"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
