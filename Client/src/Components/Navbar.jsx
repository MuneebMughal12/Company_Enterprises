// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
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
  const toggleDropdown = () => (dropdownOpen ? setDropdownOpen(false) : openDropdown());
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const link = "text-[12px] font-semibold tracking-[0.22em] opacity-90 hover:opacity-100 transition-opacity";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-black to-[#3b3b3b] shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-3 text-white">
        {/* Left: Logo */}
        <a href="/" className="mr-6 block leading-none">
          <div className="text-[22px] font-extrabold tracking-[0.20em]">GEOCON</div>
          <div className="mt-0.5 text-[9px] tracking-[0.25em] opacity-70">SINCE 2005</div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center text-white/95">
          <li className="pr-6">
            <a href="/about_us" className={link}>ABOUT</a>
          </li>
          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />
          <li className="relative px-6" onMouseEnter={openDropdown} onMouseLeave={delayClose}>
            <button type="button" onClick={toggleDropdown} className={`${link} inline-flex items-center gap-2`}>
              PORTFOLIO
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur">
                <a href="/structural_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">Structural Design </a>
                <a href="/architectural_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">Architectural Design </a>
                <a href="/mep_design" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">MEP Design </a>
                <a href="/3d_exterior_renders" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">3D EXTERIOR RENDERS</a>
                <a href="/3d_interior_renders" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">3D INTERIOR RENDERS</a>
              </div>
            )}
          </li>
          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />
          <li className="pl-6">
            <a href="/enquiry" className={link}>ENQUIRE</a>
          </li>
          <li className="mx-2 h-5 w-px bg-white/30" aria-hidden />
          <li className="pl-6">
          <a href="/company_profile" className={link}>COMPANY PROFILE</a>
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
              <li><a href="/about_us" className="text-sm font-semibold text-white/90 hover:text-white">ABOUT</a></li>
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left text-sm font-semibold text-white/90 flex items-center justify-between hover:text-white"
                >
                  PORTFOLIO
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 ml-4 flex flex-col gap-1">
                    <li><a href="/structural_design" className="text-sm text-white/80 hover:text-white">Structural Design </a></li>
                    <li><a href="/architectural_design" className="text-sm text-white/80 hover:text-white">Architectural Design </a></li>
                    <li><a href="/mep_design" className="text-sm text-white/80 hover:text-white">MEP Design </a></li>
                    <li><a href="/3d_exterior_renders" className="text-sm text-white/80 hover:text-white">3D EXTERIOR RENDERS</a></li>
                    <li><a href="/3d_interior_renders" className="text-sm text-white/80 hover:text-white">3D INTERIOR RENDERS</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/enquiry" className="text-sm font-semibold text-white/90 hover:text-white">ENQUIRE</a></li>
              <li><a href="/company_profile" className="text-sm font-semibold text-white/90 hover:text-white">COMPANY PROFILE</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
