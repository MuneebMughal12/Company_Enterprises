import React from "react";
import { motion } from "framer-motion";
import Add1 from "../assets/Homepage/Add1.png";
import Add2 from "../assets/Homepage/Add2.webp";
import Add3 from "../assets/Homepage/add3.webp";
import Add4 from "../assets/Homepage/add4.png";
import Add5 from "../assets/Homepage/add5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ValueAddSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1600px] px-4 text-neutral-800 shadow-lg rounded-lg ">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-10 border-b-2 border-black/30 inline-block pb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          Value Add
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Collage */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="col-span-2 overflow-hidden rounded-lg shadow-md" variants={fadeUp}>
                <img src={Add1} alt="Opulence Vista" className="w-full h-full object-cover" />
              </motion.div>

              <div className="col-span-2 grid grid-cols-2 gap-4">
                <motion.div className="overflow-hidden rounded-lg shadow-md" variants={fadeUp}>
                  <img src={Add2} alt="Taj Darbar Piazza" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div className="overflow-hidden rounded-lg shadow-md" variants={fadeUp}>
                  <img src={Add3} alt="Ahmad Heights" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: paragraph, images, bullet list */}
          <motion.div
            className="lg:col-span-5 w-full max-w-[800px] mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {/* Paragraph */}
            <motion.p
              className="text-sm md:text-[15px] leading-7 text-justify mb-4"
              variants={fadeUp}
            >
              <span className="font-bold text-[#1a237e]">GEOCON</span> is renowned
              for crafting distinctive and enduring architectural experiences. Guided
              by a deep respect for context and culture, our philosophy revolves
              around designing spaces that reflect their environment and heritage.
              Our dedicated team of architects and designers continues to shape
              meaningful environments — creating architecture that inspires,
              connects, and enhances the world around us.
            </motion.p>

            {/* Two images row */}
            <motion.div className="flex flex-col md:flex-row gap-4 mb-4" variants={fadeUp}>
              <div className="overflow-hidden rounded-lg flex-1 min-w-[200px]">
                <img
                  src={Add4}
                  alt="Classic Facade"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
              <div className="overflow-hidden rounded-lg flex-1 min-w-[200px]">
                <img
                  src={Add5}
                  alt="Modern Tower"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Bullet list below images */}
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm md:text-[15px] leading-6"
              variants={fadeUp}
            >
              {[
                "Creative & Innovative",
                "Professional Relationships",
                "Track Record of Delivery",
                "Trusted Partners",
                "Facilitating Teamwork",
                "Commercially Experienced",
                "Flexibility & Speed of Service",
                "Passionate Leadership",
                "Driving Progress",
                "Commitment to Sustainability",
                "‘Can Do’ Philosophy",
                "Technical Excellence",
              ].map((item) => (
                <motion.li key={item} className="flex items-start gap-2" variants={fadeUp}>
                  <span className="text-[#0288d1] text-lg leading-6">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
