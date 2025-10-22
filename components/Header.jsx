"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-[130px] md:w-[150px] transition-all duration-300">
            <Image
              src="/logo-tomazela-br.png"
              alt="Tomazela | Estratégia & Comunicação"
              width={150}
              height={55}
              className={`transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
              priority
            />
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-10 text-base text-gray-900 font-medium">
          <li>
            <Link
              href="/#servicos"
              className="hover:text-[#FF4D00] transition-colors"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/manifesto"
              className="hover:text-[#FF4D00] transition-colors"
            >
              Manifesto
            </Link>
          </li>
          <li>
            <Link
              href="/#quem-somos"
              className="hover:text-[#FF4D00] transition-colors"
            >
              Quem somos
            </Link>
          </li>
        </ul>

        {/* BOTÃO */}
        <Link
          href="/#contato"
          className="hidden md:inline-block bg-[#FF4D00] text-white font-semibold py-2 px-6 rounded-xl hover:opacity-90 transition"
        >
          Fale com a gente
        </Link>

        {/* MENU MOBILE */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* MENU MOBILE ABERTO */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
            <li>
              <Link href="/#servicos" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/manifesto" onClick={() => setIsMenuOpen(false)}>
                Manifesto
              </Link>
            </li>
            <li>
              <Link href="/#quem-somos" onClick={() => setIsMenuOpen(false)}>
                Quem somos
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                className="inline-block bg-[#FF4D00] text-white font-semibold py-2 px-5 rounded-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale com a gente
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
