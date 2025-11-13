import React, { useEffect, useState } from "react";
import { MapPin, ArrowUp } from "lucide-react";

/** details */
const BRAND = {
  name: "GEOCON",
  since: "SINCE 2005",
  email: "info@geocon.net",
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Divider */}
      <div className="w-full border-t border-black/10" />

      <footer className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 py-10 text-neutral-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="tracking-[0.35em] text-2xl font-extrabold">{
              BRAND.name
            }</div>
            <div className="mt-1 text-[10px] tracking-[0.35em] text-black/60">
              {BRAND.since}
            </div>

            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 inline-block text-sm tracking-wide text-black/80 hover:text-black"
            >
              {BRAND.email.toUpperCase()}
            </a>
          </div>

          {/* Around the world */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.25em] text-black/80">
              AROUND THE WORLD
            </h4>
            <ul className="mt-4 space-y-3">
              {[ "PAKISTAN"].map((place) => (
                <li key={place} className="flex items-center gap-2 text-black/75">
                  <MapPin size={16} className="text-black/60" />
                  <span className="text-sm">{place}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.25em] text-black/80">
              OUR SERVICES
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-black/75">
              {[
                "Exterior Rendering",
                "Interior Rendering",
                "Branding & Design",
                "Digital Marketing",
                "360 Virtual Tours",
                "3D Walkthroughs",
              ].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-black">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.25em] text-black/80">
              QUICK LINKS
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-black/75">
              {[
                { name: "ABOUT", href: "/about" },
                { name: "CONTACT", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-black">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* tiny copyright (optional) */}
        <p className="mt-10 text-xs tracking-wide text-black/50">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </footer>
      {/* Back to top (bottom-right) */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-6 z-50 grid h-10 w-10 place-items-center rounded-md bg-neutral-900 text-white shadow-lg hover:bg-black transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
