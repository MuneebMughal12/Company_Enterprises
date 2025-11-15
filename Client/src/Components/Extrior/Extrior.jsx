import React from "react";
import { motion } from "framer-motion";

const exteriorImages = [
  // Top row
  {
    id: 1,
    src: "/images/exterior/exterior-1.webp",
    alt: "Masterplan aerial exterior",
    gridClass: "md:col-span-2",
  },
  {
    id: 2,
    src: "/images/exterior/exterior-2.webp",
    alt: "Balcony detail",
    gridClass: "",
  },

  // Second row
  {
    id: 3,
    src: "/images/exterior/exterior-3.webp",
    alt: "Waterfront twin towers",
    gridClass: "",
  },
  {
    id: 4,
    src: "/images/exterior/exterior-4.webp",
    alt: "Mid rise apartments",
    gridClass: "",
  },
  {
    id: 5,
    src: "/images/exterior/exterior-5.webp",
    alt: "Urban mixed use street",
    gridClass: "",
  },

  // Third row
  {
    id: 6,
    src: "/images/exterior/exterior-6.webp",
    alt: "Dynamic façade closeup",
    gridClass: "md:col-span-2",
  },
  {
    id: 7,
    src: "/images/exterior/exterior-7.webp",
    alt: "City skyline sunset",
    gridClass: "",
  },
  {
    id: 8,
    src: "/images/exterior/exterior-8.webp",
    alt: "Luxury balcony night view",
    gridClass: "",
  },

  // Fourth row
  {
    id: 9,
    src: "/images/exterior/exterior-9.webp",
    alt: "Hotel drop off",
    gridClass: "",
  },
  {
    id: 10,
    src: "/images/exterior/exterior-10.webp",
    alt: "Glass tower lobby",
    gridClass: "",
  },
  {
    id: 11,
    src: "/images/exterior/exterior-11.webp",
    alt: "Stepped green terraces",
    gridClass: "",
  },

  // Fifth row
  {
    id: 12,
    src: "/images/exterior/exterior-12.webp",
    alt: "Corner tower daytime",
    gridClass: "md:col-span-2",
  },
  {
    id: 13,
    src: "/images/exterior/exterior-13.webp",
    alt: "Boulevard with trees",
    gridClass: "",
  },

  // Extra images to go beyond twenty
  { id: 14, src: "/images/exterior/exterior-14.webp", alt: "Residence 1" },
  { id: 15, src: "/images/exterior/exterior-15.webp", alt: "Residence 2" },
  { id: 16, src: "/images/exterior/exterior-16.webp", alt: "Residence 3" },
  { id: 17, src: "/images/exterior/exterior-17.webp", alt: "Residence 4" },
  { id: 18, src: "/images/exterior/exterior-18.webp", alt: "Residence 5" },
  { id: 19, src: "/images/exterior/exterior-19.webp", alt: "Residence 6" },
  { id: 20, src: "/images/exterior/exterior-20.webp", alt: "Residence 7" },
];

function ExteriorRendering() {
  return (
    <div className="w-full bg-white text-neutral-900">

      {/* Hero */}
      <section className="h-[430px] bg-[#d7d7d7] flex items-center">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white/90">
            Exterior <br /> Rendering
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              3D REALISTIC EXTERIOR RENDERS
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-700 max-w-md">
              Your project, reimagined in stunning 3D. Our photorealistic
              exterior renders capture every detail, texture, and play of light,
              bringing your architecture to life and creating visuals that leave
              a lasting impression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Crafted for impact
            </p>
            <p className="mt-3 text-xs text-neutral-700">
              A selection of our visual works curated to showcase scale,
              atmosphere, and context for modern developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {exteriorImages.map((img, index) => (
            <motion.div
              key={img.id}
              className={`overflow-hidden bg-neutral-200 ${img.gridClass || ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExteriorRendering;