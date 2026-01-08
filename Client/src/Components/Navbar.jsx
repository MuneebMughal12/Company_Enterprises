// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const delayClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 100);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const link =
    "text-[12px] font-semibold tracking-[0.22em] opacity-90 hover:opacity-100 transition-opacity";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-black to-[#3b3b3b] shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-3 text-white">
        {/* Logo */}
        <Link to="/" className="mr-6 block leading-none">
          <div className="text-[22px] font-extrabold tracking-[0.20em]">
            GEOCON
          </div>
          <div className="mt-0.5 text-[9px] tracking-[0.25em] opacity-70">
            SINCE 2005
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center text-white/95">
          <li className="pr-6">
            <Link to="/about" className={link}>
              ABOUT
            </Link>
          </li>

          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />

          <li
            className="relative px-6"
            onMouseEnter={openDropdown}
            onMouseLeave={delayClose}
          >
            <button
              type="button"
              onClick={toggleDropdown}
              className={`${link} inline-flex items-center gap-2`}
            >
              PORTFOLIO
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur">
                <Link to="/structural_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  Structural Design
                </Link>
                <Link to="/architectural_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  Architectural Design
                </Link>
                <Link to="/mep_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  MEP Design
                </Link>
                <Link to="/3d_exterior_renders" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  3D EXTERIOR RENDERS
                </Link>
                <Link to="/3d_interior_renders" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  3D INTERIOR RENDERS
                </Link>
              </div>
            )}
          </li>

          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />

          <li className="pl-6">
            <Link to="/enquiry" className={link}>
              ENQUIRE
            </Link>
          </li>

          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />

          <li className="pl-6">
            <Link to="/company_profile" className={link}>
              COMPANY PROFILE
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-900/95 border-t border-white/10 md:hidden shadow-xl backdrop-blur z-50">
            <ul className="flex flex-col p-4 gap-2">
              <li>
                <Link to="/about_us" className="text-sm font-semibold text-white/90 hover:text-white">
                  ABOUT
                </Link>
              </li>

              <li>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left text-sm font-semibold text-white/90 flex items-center justify-between hover:text-white"
                >
                  PORTFOLIO
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <ul className="mt-2 ml-4 flex flex-col gap-1">
                    <li><Link to="/structural_design">Structural Design</Link></li>
                    <li><Link to="/architectural_design">Architectural Design</Link></li>
                    <li><Link to="/mep_design">MEP Design</Link></li>
                    <li><Link to="/3d_exterior_renders">3D EXTERIOR RENDERS</Link></li>
                    <li><Link to="/3d_interior_renders">3D INTERIOR RENDERS</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/enquiry" className="text-sm font-semibold text-white/90 hover:text-white">
                  ENQUIRE
                </Link>
              </li>

              <li>
                <Link to="/company_profile" className="text-sm font-semibold text-white/90 hover:text-white">
                  COMPANY PROFILE
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
