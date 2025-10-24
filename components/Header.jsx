"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemCls =
    "text-gray-800 hover:text-orange-600 transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo-tomazela-br-fundobranco.png"
            alt="Tomazela Estratégia e Comunicação"
            className={`w-auto transition-all duration-200 ${
              scrolled ? "h-[80px] sm:h-[92px]" : "h-[96px] sm:h-[110px]"
            }`}
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className={navItemCls}>
            Serviços
          </a>
          <a href="/manifesto" className={navItemCls}>
            Manifesto
          </a>
          <a href="#sobre" className={navItemCls}>
            Quem somos
          </a>

          {/* Botão Fale com a gente */}
          <a
            href="#contato"
            className="btn btn-primary px-5 py-2 rounded-full text-white font-semibold"
          >
            Fale com a gente
          </a>

          {/* Ícone Instagram */}
          <a
            href="https://www.instagram.com/tomazelacomunica"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Tomazela"
            className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-full border border-transparent hover:border-orange-500 hover:bg-orange-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF4D00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </nav>

        {/* Menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Drawer mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <a
              href="#servicos"
              onClick={() => setMenuOpen(false)}
              className={navItemCls}
            >
              Serviços
            </a>
            <a
              href="/manifesto"
              onClick={() => setMenuOpen(false)}
              className={navItemCls}
            >
              Manifesto
            </a>
            <a
              href="#sobre"
              onClick={() => setMenuOpen(false)}
              className={navItemCls}
            >
              Quem somos
            </a>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary text-center py-2 rounded-full text-white font-semibold"
            >
              Fale com a gente
            </a>

            {/* Ícone Instagram (mobile) */}
            <a
              href="https://www.instagram.com/tomazelacomunica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Tomazela"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-transparent hover:border-orange-500 hover:bg-orange-50 transition self-start mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF4D00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
