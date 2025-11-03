"use client";

import { useState, useEffect, useRef } from "react";
import { FaUsers, FaBriefcase, FaClock } from "react-icons/fa";

const stats = [
  { title: "عملاء سعداء", value: 180, icon: FaUsers },
  { title: "مشاريع منجزة", value: 240, icon: FaBriefcase },
  { title: "سنوات الخبرة", value: 7, icon: FaClock },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-10 md:py-20 text-center text-primary bg-[url('/stats.webp')] bg-contain bg-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-maintext mb-12">
          إنجازاتنا تتحدث عنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              start={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ title, value, start, icon: Icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        startValue = value;
        clearInterval(counter);
      }
      setCount(Math.floor(startValue));
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div className="flex flex-col items-center justify-center bg-card/50 rounded-2xl shadow p-4 md:p-6 hover:scale-105 transition-transform duration-500">
      <div className="bg-fourth p-4 rounded-full mb-4">
        <Icon className="text-maintext size-6 md:size-10" />
      </div>
      <span className="text-3xl md:text-5xl font-semibold text-fourth mb-2">
        {count}+
      </span>
      <h3 className="text-xl md:text-2xl font-semibold text-fourth">{title}</h3>
    </div>
  );
}
