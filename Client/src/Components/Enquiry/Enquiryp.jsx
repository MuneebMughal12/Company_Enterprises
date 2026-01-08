import React, { useEffect, useRef, useState } from "react";

function useInView(options = { threshold: 0.2 }) {
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

function SlideIn({ children, from = "left", delay = 0, className = "" }) {
  const { ref, inView } = useInView();

  const base =
    "opacity-0 translate-y-2 transition-all duration-700 ease-out will-change-transform";
  const dir =
    from === "right" ? "translate-x-8" : from === "left" ? "-translate-x-8" : "";
  const show = inView ? "opacity-100 translate-x-0 translate-y-0" : "";

  return (
    <div
      ref={ref}
      className={`${base} ${dir} ${show} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


export default function ContactSection() {
  return (
    <div className="bg-white text-black">
      <style>{`
        /* subtle hero zoom */
        @keyframes heroZoom { 0% { transform: scale(1); } 100% { transform: scale(1.03); } }
        .hero-zoom { animation: heroZoom 10s ease-in-out infinite alternate; }

        /* input focus */
        .input-base { transition: border-color 200ms ease; }
        .input-base:focus { outline: none; border-color: rgba(0,0,0,.55); }
      `}</style>

      {/* HERO */}
      <section className="relative h-[280px] md:h-[520px] overflow-hidden">
        <div className="absolute inset-0 hero-zoom">
          <img
            src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2400&auto=format&fit=crop"
            alt="Contact banner"
            className="h-full w-full object-cover"
          />
        </div>

        {/* dark gradient overlay (left strong, right fade) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Your Queries,
            <br />
            Our Priority
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          {/* LEFT COLUMN (slide from left) */}
          <SlideIn from="left">
            <h2 className="text-[20px] font-medium uppercase tracking-[0.18em] text-black/90">
              We&apos;re Just A
              <br />
              Message Away
            </h2>

            <div className="mt-8 h-px w-40 bg-black/30" />

            <p className="mt-10 max-w-md text-[16px] leading-7 text-black/55">
              Ready to take the next step towards turning your architectural
              dreams into reality? The Pixarch team is here to assist you every
              step of the way. Whether you have questions, inquiries, or are
              eager to discuss your project&apos;s details, we&apos;re all ears.
            </p>

            <div className="mt-10 space-y-5 text-[14px] text-black/70">
              <div className="flex items-center gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black/15">
                  {/* phone icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 3.5h3l1.5 4-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5L16 12l4 1.5v3c0 1-1 2-2 2C10.8 18.5 5.5 13.2 5.5 6c0-1 1-2 1-2.5Z"
                      stroke="rgba(0,0,0,.65)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">+923453814080</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black/15">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 3.5h3l1.5 4-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5L16 12l4 1.5v3c0 1-1 2-2 2C10.8 18.5 5.5 13.2 5.5 6c0-1 1-2 1-2.5Z"
                      stroke="rgba(0,0,0,.65)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">+923119019327</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black/15">
                  {/* mail icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.5 7.5h15v10h-15v-10Z"
                      stroke="rgba(0,0,0,.65)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8l7 6 7-6"
                      stroke="rgba(0,0,0,.65)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">geogroupofcompanies.com</span>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <span className="text-[16px] tracking-wide text-black/70">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {["f", "in", "yt", "ig"].map((x) => (
                  <button
                    key={x}
                    type="button"
                    className="grid h-9 w-9 place-items-center rounded-full bg-black/15 text-[13px] font-semibold text-black/70 transition hover:bg-black/20"
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </SlideIn>

          {/* RIGHT COLUMN (slide from right) */}
          <SlideIn from="right" delay={80}>
            <p className="max-w-xl text-[16px] leading-7 text-black/55">
              Our team of experts works closely with you to create a bespoke 3D
              Visualization experience that is tailored to your specific needs.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 space-y-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="input-base h-12 w-full border border-black/25 px-4 text-[13px] text-black/80 placeholder:text-black/35"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="input-base h-12 w-full border border-black/25 px-4 text-[13px] text-black/80 placeholder:text-black/35"
                  placeholder="Email Address"
                  type="email"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="input-base h-12 w-full border border-black/25 px-4 text-[13px] text-black/80 placeholder:text-black/35"
                  placeholder="Contact No."
                  type="tel"
                />

                <div className="relative">
                  <select className="input-base h-12 w-full appearance-none border border-black/25 bg-white px-4 text-[16px] text-black/60">
                    <option>Services</option>
                    <option>3D Visualization</option>
                    <option>Walkthroughs</option>
                    <option>3D Animation</option>
                    <option>Brand & Marketing</option>
                  </select>

                  {/* dropdown arrow */}
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <textarea
                className="input-base min-h-[220px] w-full resize-none border border-black/25 px-4 py-3 text-[13px] text-black/80 placeholder:text-black/35"
                placeholder="Message"
              />

              <button
                type="submit"
                className="h-12 rounded-sm bg-black px-10 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-gray-600 active:scale-[0.99]"
              >
                Get Started
              </button>
            </form>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
