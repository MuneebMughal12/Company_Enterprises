import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const phoneNumber = "+923119019327";
const waMessage = "Hello! WHAT KIND OF HELP DO YOU NEED FROM GEOCON?"; 
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904274/Clip_12_1_jqyzgg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-16 lg:px-36 text-white max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Boutique <br /> Real Estate <br /> Creative Agency
        </motion.h1>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 rounded-full p-3 hover:scale-110 transition-transform z-50 shadow-lg"
      >
                <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </a>
    </section>
  );
}
