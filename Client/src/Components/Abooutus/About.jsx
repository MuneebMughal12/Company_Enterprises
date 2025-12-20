import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * AboutUs.jsx
 * React + Tailwind only (no backend).
 * Animations: CSS + IntersectionObserver (scroll reveal), hover, accordion.
 */

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(el);
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Reveal({ children, className = "", delay = 0 }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={["reveal", inView ? "reveal--in" : "", className].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Card({ title, desc, tone = "light" }) {
  const base =
    "border border-black/10 transition-transform duration-300 hover:-translate-y-1";
  const tones = tone === "dark" ? "bg-[#d8d8d8]" : "bg-white";

  return (
    <div className={`${base} ${tones} p-10 md:p-12`}>
      <h3 className="text-[13px] font-semibold tracking-[0.14em] uppercase text-black/90">
        {title}
      </h3>
      <p className="mt-4 max-w-sm text-[12px] leading-6 text-black/60">
        {desc}
      </p>
    </div>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="border border-black/10">
      {items.map((it, idx) => {
        const isOpen = idx === open;

        return (
          <div
            key={it.title}
            className="border-b border-black/10 last:border-b-0"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 bg-white px-6 py-4 text-left transition hover:bg-black/[0.02]"
            >
              <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-black/80">
                {it.title}
              </span>
              <span className="select-none text-xl text-black/60">
                {isOpen ? "–" : "+"}
              </span>
            </button>

            <div
              className={[
                "acc-panel overflow-hidden bg-white px-6",
                isOpen ? "acc-open" : "acc-closed",
              ].join(" ")}
            >
              <div className="py-4">
                <p className="text-[12px] leading-6 text-black/60">{it.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutUs() {
  // ✅ WhatsApp Button Setup
  const phoneNumber = "+923119019327";
  const waMessage = "Hello! WHAT KIND OF HELP DO YOU NEED FROM GEOCON?";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  const heroImage = useMemo(
    () =>
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2400&auto=format&fit=crop",
    []
  );

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ✅ Page Animations */}
      <style>{`
        /* Scroll reveal */
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity 700ms ease, transform 700ms ease; }
        .reveal--in { opacity: 1; transform: translateY(0); }

        /* Hero subtle zoom */
        @keyframes heroZoom { 0% { transform: scale(1); } 100% { transform: scale(1.04); } }
        .hero-zoom { animation: heroZoom 10s ease-in-out infinite alternate; }

        /* Accordion animation */
        .acc-panel { transition: max-height 350ms ease; }
        .acc-open { max-height: 220px; }
        .acc-closed { max-height: 0px; }
      `}</style>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 rounded-full bg-green-500 p-3 shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl text-white sm:text-3xl" />
      </a>

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden md:h-[700px]">
        <div className="absolute inset-0 hero-zoom">
          <img
            src={heroImage}
            alt="About banner"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      {/* INTRO ROW */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="flex gap-4">
              <div className="mt-1 h-16 w-[2px] bg-black/30" />
              <h2 className="max-w-md text-[18px] font-semibold uppercase leading-7 tracking-[0.12em] text-black/90">
                Turning Unbuilt <br />
                Developments Into <br />
                Visual Stories
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-md text-[12px] leading-6 text-black/60">
              We equip property developers, marketers, architects and sales teams
              with compelling CGI visuals, dynamic animations and advanced
              presentation tools that bring their projects to life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GREY SECTION 1 */}
      <section className="bg-[#e6e6e6]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* top cards */}
          <div className="grid overflow-hidden border border-black/10 md:grid-cols-2">
            <Reveal>
              <Card
                title="Photorealistic Renders & Animations"
                desc="Transforming visionary projects into lifelike visual experiences."
                tone="light"
              />
            </Reveal>
            <Reveal delay={120}>
              <Card
                title="Photorealistic Walkthroughs"
                desc="Unbuilt architecture experienced in lifelike detail, driving curiosity and sales."
                tone="dark"
              />
            </Reveal>
          </div>

          {/* experience text */}
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <h3 className="text-[14px] font-semibold text-black/85">
                  The Experience
                </h3>
                <p className="mt-5 text-[12px] leading-6 text-black/60">
                  We design walkthroughs tailored to your project, shaping every
                  element of the space to guide customers naturally towards a
                  purchase decision. To achieve the highest standard of
                  photorealism, every 360-degree image is created with the same
                  precision and detail as our marketing CGI renders.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="text-[12px] leading-6 text-black/60">
                <p>
                  By modelling each space, we ensure outstanding image quality,
                  efficiency and consistency across both renders and walkthroughs.
                  Whether it is an entire floor plan or selected spaces that
                  capture the essence of your project, the result is an experience
                  that leaves buyers captivated.
                </p>
                <p className="mt-5">
                  Our team of 3D artists crafts interiors that mirror the finishes
                  schedule with such accuracy that buyers are left asking:{" "}
                  <span className="italic text-black/70">“Is this real?”</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* bottom cards */}
          <div className="mt-14 grid overflow-hidden border border-black/10 md:grid-cols-2">
            <Reveal>
              <Card
                title="360 Marketing Services"
                desc="From vision to visual, we deliver complete 360 marketing solutions for property developers, marketers, architects and sales teams."
                tone="dark"
              />
            </Reveal>
            <Reveal delay={120}>
              <Card
                title="The Experience"
                desc="From vision to visual, our 360-degree marketing services are designed to surround your project with impact at every touchpoint."
                tone="light"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE + ACCORDION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/90">
                Who We Are
              </h3>
              <p className="mt-5 max-w-md text-[12px] leading-6 text-black/60">
                Pixarch is Pakistan&apos;s leading creative content studio. We
                specialise in producing digital assets that elevate projects
                across luxury residential, real estate, commercial and cultural
                domains. Our strength lies in combining artistry with practical
                problem-solving. Every project reflects a balance of efficient
                workflows and a creative approach to visual communication.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/90">
                What We Offer
              </h3>
              <ul className="mt-5 space-y-2 text-[12px] text-black/60">
                {[
                  "3D Animation",
                  "VR Experience",
                  "Still Images",
                  "Product Rendering",
                  "Concept Creation",
                  "Brand Identity",
                  "Web Development",
                  "360-Degree Marketing Services",
                  "Research & Analysis",
                  "Strategy & Consulting",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/90">
                Why Choose Us?
              </h3>
            </Reveal>

            <Reveal delay={120} className="mt-6">
              <Accordion
                items={[
                  {
                    title: "A Drive For Excellence!",
                    body:
                      "We believe striving for perfection pushes us closer to excellence. This principle guides everything we do. Our commitment is simple: to deliver rendering services that not only meet expectations but rise above industry standards.",
                  },
                  {
                    title: "Your Investment Matters",
                    body:
                      "We treat every project like a long-term partnership—focused on value, quality, and measurable impact across your marketing touchpoints.",
                  },
                  {
                    title: "Great Experiences Come From Great Teams",
                    body:
                      "Our team blends creative direction with technical precision to deliver consistent results, on time and with clear communication.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* GET A QUOTE */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/90">
            Get A Quote
          </h3>
          <p className="mt-3 max-w-2xl text-[12px] leading-6 text-black/60">
            Our team of experts works closely with you to create a bespoke 3D
            visualization experience that is tailored to your specific needs.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 md:flex-row md:items-center"
          >
            <input
              className="h-10 w-full border border-black/20 bg-white px-3 text-[12px] outline-none transition focus:border-black/50"
              placeholder="Full Name"
              type="text"
            />
            <select className="h-10 w-full border border-black/20 bg-white px-3 text-[12px] outline-none transition focus:border-black/50">
              <option>Services</option>
              <option>3D Animation</option>
              <option>VR Experience</option>
              <option>Still Images</option>
              <option>Walkthroughs</option>
              <option>Marketing</option>
            </select>
            <input
              className="h-10 w-full border border-black/20 bg-white px-3 text-[12px] outline-none transition focus:border-black/50"
              placeholder="Contact No."
              type="tel"
            />

            <button
              type="submit"
              className="h-10 w-full bg-black px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-black/90 active:scale-[0.99] md:ml-auto md:w-[160px]"
            >
              Send Enquiry
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
