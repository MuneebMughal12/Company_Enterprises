import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Starting_pic from "../assets/Homepage/Startingpic.jpg";
import Global_pic from "../assets/Homepage/Global_pic.jpg";
import { motion, AnimatePresence } from "framer-motion";

const countersData = [
  { id: 1, label: "YEARS OF EXPERIENCE", value: 20 },
  { id: 2, label: "TEAM OF EXPERTS", value: 100 },
  { id: 3, label: "SERVICES", value: 30 },
  { id: 4, label: "GLOBAL & LOCAL BRAND PARTNERSHIPS", value: 200 },
];

const servicesOptions = [
  "Services",
  "3D WALKTHROUGHS",
  "3D EXTERIOR RENDERS",
  "3D INTERIOR RENDERS",
  "360 VIRTUAL TOURS",
  "BRAND IDENTITY DESIGN",
  "OUTDOOR MEDIA DESIGN",
];

export default function ContactSection() {
  const [counters, setCounters] = useState(countersData.map(() => 0));
  const [fullscreenImg, setFullscreenImg] = useState(null); // ← new state

  useEffect(() => {
    countersData.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000;
      const stepTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = start;
          return newCounters;
        });
        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  const getStarted = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name, email, phone, service, message },
        "YOUR_USER_ID"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Please try again.")
      );
  };

  const WHATSAPP_NUMBER = "923248233065";

  return (
    <div>
      {/* IMAGE 1 */}
      <div className="flex justify-center items-center h-screen mt-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <motion.img
          id="Starting_pic"
          src={Starting_pic}
          alt="Starting Pic"
          className="
            w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%]
            rounded-xl shadow-lg object-cover cursor-pointer
          "
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: 0 }}
          onClick={() => setFullscreenImg(Starting_pic)}
        />
      </div>

      {/* COUNTERS + FORM */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto font-sans">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {countersData.map((counter, index) => (
            <div key={counter.id}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
                {counters[index]}+
              </h2>
              <p className="text-[#8c8d8f] text-sm sm:text-base mt-2 font-medium">
                {counter.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl sm:text-3xl text-[#8c8d8f] mb-4 leading-snug">
              360° CREATIVE SOLUTIONS <br className="hidden sm:block" /> THAT SELL
              REAL ESTATE SMARTER
            </h3>
            <p className="text-[#54595f] text-sm sm:text-base leading-relaxed">
              We empower Real estate Developers, Project Marketers, and Sales
              Teams with complete 360° creative solutions tailored to their
              specific needs.
            </p>
            <p className="text-[#54595f] text-sm sm:text-base leading-relaxed">
              Transforming your vision into stunning CGI, animation, and marketing
              tools that elevate your project, attract buyers, and accelerate
              sales.
            </p>
          </div>

          <div className="space-y-4 w-full max-w-md mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="w-full border border-[#8c8d8f] px-4 py-3 rounded focus:outline-none focus:border-black"
              />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#8c8d8f] px-4 py-3 rounded focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                id="phone"
                type="text"
                placeholder="Contact No."
                className="w-full border border-[#8c8d8f] px-4 py-3 rounded focus:outline-none focus:border-black"
              />
              <select
                id="service"
                className="w-full border border-[#8c8d8f] px-4 py-3 rounded focus:outline-none focus:border-black bg-white"
              >
                {servicesOptions.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              id="message"
              placeholder="Message"
              rows={4}
              className="w-full border border-[#8c8d8f] px-4 py-3 rounded focus:outline-none focus:border-black resize-none"
            ></textarea>

            <button
              onClick={getStarted}
              className="w-full py-3 text-white font-semibold rounded bg-gradient-to-r from-[#727272] to-[#2d2d2d] hover:from-black hover:to-black transition-all duration-300"
            >
              GET STARTED
            </button>

            <p className="mt-2 text-center text-sm text-black/60">
              In a hurry? Give us a call now at{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                +{WHATSAPP_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE 2 */}
      <div className="flex justify-center items-center h-screen mt-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <motion.img
          id="Global_pic"
          src={Global_pic}
          alt="Global Pic"
          className="
            w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%]
            rounded-xl shadow-lg object-cover cursor-pointer
          "
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: 0 }}
          onClick={() => setFullscreenImg(Global_pic)}
        />
      </div>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {fullscreenImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImg(null)} // close on click
          >
            <motion.img
              src={fullscreenImg}
              alt="Full screen"
              className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
