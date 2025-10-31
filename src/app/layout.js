import { IBM_Plex_Sans as Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "خدمة صيانة الأجهزة المنزلية | اتصل الآن",
  description:
    "نقدّم خدمات صيانة شاملة للثلاجات والغسالات والمكيفات مع فنيين محترفين وضمان على العمل. اتصل بنا الآن للحصول على خدمة سريعة وموثوقة.",
  keywords: [
    "صيانة ثلاجات",
    "صيانة غسالات",
    "صيانة مكيفات",
    "تصليح أجهزة منزلية",
    "خدمة صيانة الرياض",
  ],
  authors: [{ name: "Ranan" }],
  openGraph: {
    title: "خدمة صيانةالمكيفات والأجهزة المنزلية",
    description:
      "نقدّم خدمات صيانة احترافية للثلاجات والغسالات والمكيفات في جميع مناطق الرياض. استجابة سريعة وخدمة مضمونة.",
    url: "https://www.tabreedkom.com",
    siteName: "",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمة صيانة الأجهزة المنزلية | اتصل الآن",
    description:
      "صيانة فورية للأجهزة المنزلية من قبل خبراء متخصصين — اتصل الآن!",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="g8k0c6IqvTXtpUH962QIU5iGs8x2BlFOqR80zbEbbyY"
        />
      </head>
      <GoogleTagManager gtmId="GTM-KLGPLGWJ" />
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
