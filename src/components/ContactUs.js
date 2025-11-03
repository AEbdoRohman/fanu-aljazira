"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="container mx-auto px-4 ">
        <SectionTitle title="تواصل معنا" />

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <div className="w-full md:w-7/12 flex flex-col space-y-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg text-primary font-semibold"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="ادخل الاسم"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg text-primary font-semibold"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="ادخل البريد الإلكتروني"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg text-primary font-semibold"
                >
                  تفاصيل الطلب
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="ادخل تفاصيل الطلب"
                  className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                ارسل طلبك
              </button>
              {isSubmitted && <p className="text-green-500">تم الارسال</p>}
            </form>
          </div>

          <div className="w-full md:w-5/12  rounded-2xl relative">
            <div className="w-full h-[200px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.57913260494!2d46.627901699999995!3d24.912333599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eeff7f5620483%3A0xdb2d2392068a2dd4!2z2YXZiNiz2LPYqSDZgdmGINin2YTYrNiy2YrYsdmHINmB2YbZiiDYqtio2LHZitivINiq2YPZitmBINi12YrYp9mG2Kkg2KvZhNin2KzYp9iqINi62LPYp9mE2KfYqg!5e0!3m2!1sar!2seg!4v1761931674994!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
