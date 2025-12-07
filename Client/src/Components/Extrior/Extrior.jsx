import React from "react";
import { motion } from "framer-motion";
import image0 from "./0.webp";
import image3 from "./3.webp";
import bgImage from "./0.webp";


const exteriorImages = [
  { id: 1, src: image0, alt: "Masterplan aerial exterior", gridClass: "md:col-span-2" },
  { id: 2, src: image3, alt: "Balcony detail" },
  { id: 3, src: image3, alt: "Waterfront twin towers" },
  { id: 4, src: image0, alt: "Mid rise apartments" },
  { id: 5, src: image0, alt: "Urban mixed use street" },
  { id: 6, src: image0, alt: "Dynamic façade closeup", gridClass: "md:col-span-2" },
  { id: 7, src: image0, alt: "City skyline sunset" },
  { id: 8, src: image0, alt: "Luxury balcony night view" },
  { id: 9, src: image0, alt: "Hotel drop off" },
  { id: 10, src: image0, alt: "Glass tower lobby" },
  { id: 11, src: image0, alt: "Stepped green terraces" },
  { id: 12, src: image0, alt: "Corner tower daytime", gridClass: "md:col-span-2" },
  { id: 13, src: image0, alt: "Boulevard with trees" },
  { id: 14, src: image0, alt: "Residence 1" },
  { id: 15, src: image0, alt: "Residence 2" },
  { id: 16, src: image0, alt: "Residence 3" },
  { id: 17, src: image0, alt: "Residence 4" },
  { id: 18, src: image0, alt: "Residence 5" },
  { id: 19, src: image0, alt: "Residence 6" },
  { id: 20, src: image0, alt: "Residence 7" },
];

function ExteriorRendering() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % exteriorImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? exteriorImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full bg-white text-neutral-900">

      {/* Hero */}
      <section
        className="h-[730px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 flex items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white/90 text-left">
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
              exterior renders capture every detail, texture, and play of light.
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
              A selection of visual works curated to showcase atmosphere & scale.
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
                onClick={() => openModal(index)}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center">

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-[-60px] text-white text-4xl font-bold px-3 py-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              ❮
            </button>

            {/* Image */}
            <img
              src={exteriorImages[selectedIndex].src}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-[-60px] text-white text-4xl font-bold px-3 py-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              ❯
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ExteriorRendering;
