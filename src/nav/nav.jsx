import React, { useEffect, useState, useRef } from "react";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import Logo from "../assets/logomain.png";
import "./nav.css";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  // Simple nav items array (easy to extend)
  const items = ["Home", "About Us", "Services", "Contact"];

  return (
    <header className="w-full px-4 md:px-8 py-3">
      <section className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo-wrapper flex-shrink-0">
          <img
            src={Logo}
            alt="mela-tech logo"
            className="object-contain w-full h-full"
            style={{ maxWidth: 220, maxHeight: 72 }}
          />
        </div>

        {/* Desktop nav (md+) */}
        <nav className="hidden md:flex items-center gap-3 flex-row px-8 py-2 opacity-100 text-white md:rounded-full">
          <ul className="flex gap-3 items-center">
            {items.map((it) => (
              <li
                key={it}
                className="py-2 px-6 rounded-2xl hover:bg-blue-600/20 cursor-pointer text-sm md:text-base"
              >
                {it}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: hamburger on mobile */}
        <div
          className="md:hidden flex items-center relative z-30"
          ref={menuRef}
        >
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
          >
            {/* Use iconsax if available, else fallback SVG */}
            {typeof HambergerMenu === "function" ? (
              isOpen ? (
                <CloseSquare size={24} variant="outline" />
              ) : (
                <HambergerMenu size={24} variant="outline" />
              )
            ) : isOpen ? (
              // fallback close icon
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // fallback hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:block"></div>
      </section>

      {/* Mobile menu (below header) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden transition-[max-height,opacity,transform] duration-200 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 mb-4 rounded-lg bg-cyan-400/40 backdrop-blur-md shadow-sm">
          <ul className="flex flex-col gap-2 p-4 text-white">
            {items.map((it) => (
              <li
                key={it}
                className="py-3 px-4 rounded-lg hover:bg-white/10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavSection;
