import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// === LOCAL IMAGES (your files) ===
// import large from "../assets/ShowcasePage/large.webp";
// import rightTall from "../assets/ShowcasePage/rightTall.webp";
// import leftLarge from "../assets/ShowcasePage/leftLarge.webp";
// import rTop from "../assets/ShowcasePage/rTop.webp";
// import rBottom from "../assets/ShowcasePage/rBottom.webp";
// import wide from "../assets/ShowcasePage/wide.webp";
import large from "../assets/Homepage/Add1.png";
import rightTall from "../assets/Homepage/Add2.webp";
import leftLarge from "../assets/Homepage/add3.webp";
import rTop from "../assets/Homepage/add4.png";
import rBottom from "../assets/Homepage/add1.png";
import wide from "../assets/Homepage/add5.png";

// ---------- DATA ----------
const OUTSIDE = {
  blurb:
    "Experience photorealistic exterior renders that capture every detail of your project. Transforming your vision into visuals that inspire, engage, and sell.",
  imgs: { large, rightTall, leftLarge, rTop, rBottom, wide },
};

const INSIDE = {
  heading: "INSIDE THE VISION",
  blurb:
    "Step into lifelike interiors crafted with precision. Realistic interior renders that capture every detail, texture, and design intent.",
  imgs: {
    leftTall:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    rightTop:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
    rightGrid1:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    rightGrid2:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    rightGrid3:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop",
    bottom1:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop",
    bottom2:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    bottom3:
      "https://images.unsplash.com/photo-1501856777435-29889d1b3a5d?q=80&w=1200&auto=format&fit=crop",
  },
};

// ---------- UI HELPERS ----------
const HRule = () => <div className="h-px w-10 bg-black/20 md:w-16" aria-hidden />;

const ExploreButton = ({ children = "EXPLORE MORE", href = "#!" }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-md border border-black/20 bg-gradient-to-r from-[#727272] to-[#2d2d2d] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
  >
    {children} <span aria-hidden>↗</span>
  </a>
);

/** Aspect-ratio wrapper. Pass "auto" to keep the image’s natural ratio. */
const ratioClass = {
  "16/9": "pt-[56.25%]",
  "21/9": "pt-[42.85%]",
  "4/3": "pt-[75%]",
  "3/2": "pt-[66.66%]",
  "3/4": "pt-[133.33%]",
};
function Frame({ ratio = "16/9", className = "", children }) {
  if (ratio === "auto") {
    return <div className={`relative w-full ${className}`}>{children}</div>;
  }
  return (
    <div className={`relative w-full ${ratioClass[ratio]} ${className}`}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

// ---------- ANIMATIONS ----------
const animations = [
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
];

export default function ShowcasePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const allImages = [...Object.values(OUTSIDE.imgs), ...Object.values(INSIDE.imgs)];

  const openLightbox = (i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % allImages.length);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);

  const rowGap = "gap-2 sm:gap-3 lg:gap-6";

  // fit: contain on mobile, cover on md+ avoids weird crops
  // pos: keep key subject visible
  const renderAnimatedImage = (
    src,
    alt,
    index,
    ratio = "16/9",
    { fit = "object-contain md:object-cover", pos = "object-center", extra = "" } = {}
  ) => {
    const anim = animations[index % animations.length];
    return (
      <Frame ratio={ratio} className={extra}>
        <motion.img
          key={`${index}-${src}`}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onClick={() => openLightbox(index)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6 }}
          variants={anim}
          className={`block h-full w-full rounded-lg ${fit} ${pos} cursor-pointer`}
          style={{ display: "block" }}
        />
      </Frame>
    );
  };

  return (
    <main className="mx-auto w-full max-w-[1720px] px-3 sm:px-4 md:px-6 lg:px-8 pb-16 pt-6 text-neutral-900">
      {/* OUTSIDE */}
      <section className="mb-12">
        <div className={`mb-4 grid grid-cols-12 ${rowGap} md:items-start`}>
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <HRule />
            <h2 className="text-[15px] font-semibold tracking-[0.35em] text-black/80">
              THE VISION OUTSIDE
            </h2>
          </div>
          <p className="col-span-12 md:col-span-8 text-[14px] leading-6 text-black/70">
            {OUTSIDE.blurb}
          </p>
        </div>

        {/* Row 1 */}
        <div className={`grid grid-cols-12 ${rowGap}`}>
          <div className="col-span-12 md:col-span-9">
            {renderAnimatedImage(OUTSIDE.imgs.large, "Exterior hero", 0, "21/9", {
              fit: "object-cover",
              pos: "object-center",
            })}
          </div>
          <div className="col-span-12 md:col-span-3">
            {renderAnimatedImage(OUTSIDE.imgs.rightTall, "Exterior tower", 1, "3/4", {
              fit: "object-contain md:object-cover",
              pos: "object-top",
            })}
          </div>
        </div>

        {/* Row 2 */}
        <div className={`mt-4 grid grid-cols-12 ${rowGap}`}>
          <div className="col-span-12 md:col-span-6">
            {renderAnimatedImage(OUTSIDE.imgs.leftLarge, "Villa facade", 2, "3/2", {
              fit: "object-contain md:object-cover",
              pos: "object-center",
            })}
          </div>
          <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-2 sm:gap-3 lg:gap-6">
            {renderAnimatedImage(OUTSIDE.imgs.rTop, "Balcony detail", 3, "16/9", {
              fit: "object-contain md:object-cover",
              pos: "object-[50%_40%]",
            })}
            {renderAnimatedImage(OUTSIDE.imgs.rBottom, "Balcony detail", 4, "16/9", {
              fit: "object-contain md:object-cover",
              pos: "object-center",
            })}
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-4">
          {renderAnimatedImage(OUTSIDE.imgs.wide, "Lakeside tower", 5, "21/9", {
            fit: "object-cover",
            pos: "object-center",
          })}
        </div>

        <div className="mt-4 flex justify-end">
          <ExploreButton />
        </div>
      </section>

      {/* INSIDE */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <HRule />
          <h2 className="text-[15px] font-semibold tracking-[0.35em] text-black/80">
            DESIGN, VISUALIZED, PERFECTED
          </h2>
        </div>

        <div className={`mb-4 mt-6 grid grid-cols-12 ${rowGap}`}>
          <div className="col-span-12 md:col-span-6">
            {renderAnimatedImage(INSIDE.imgs.leftTall, "Wardrobe interior", 6, "3/2", {
              fit: "object-contain md:object-cover",
              pos: "object-center",
            })}
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h3 className="text-[17px] font-semibold tracking-[0.25em] text-black/70 mb-2">
              {INSIDE.heading}
            </h3>
            <p className="text-[14px] leading-6 text-black/70">{INSIDE.blurb}</p>
          </div>
        </div>

        {/* 3-up grid */}
        <div className={`grid grid-cols-12 ${rowGap}`}>
          {[INSIDE.imgs.rightGrid1, INSIDE.imgs.rightGrid2, INSIDE.imgs.rightGrid3].map(
            (img, i) => (
              <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
                {renderAnimatedImage(img, `Interior ${i + 1}`, i + 8, "4/3", {
                  fit: "object-contain md:object-cover",
                  pos: "object-center",
                })}
              </div>
            )
          )}
        </div>

        {/* bottom 3-up */}
        <div className={`mt-4 grid grid-cols-12 ${rowGap}`}>
          {[INSIDE.imgs.bottom1, INSIDE.imgs.bottom2, INSIDE.imgs.bottom3].map((img, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
              {renderAnimatedImage(img, `Interior bottom ${i + 1}`, i + 11, "4/3", {
                fit: "object-contain md:object-cover",
                pos: "object-center",
              })}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <ExploreButton />
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
            aria-label="Close"
          >
            <FiX />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-5xl hover:text-gray-300 transition"
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <img
            src={allImages[lightboxIndex]}
            alt="Full view"
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg shadow-2xl border border-white/10"
            style={{ display: "block" }}
          />
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-5xl hover:text-gray-300 transition"
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}
