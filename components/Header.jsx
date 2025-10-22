'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-sm border-b ${scrolled ? 'border-gray-200' : 'border-transparent'}`}>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-tomazela.png"
            alt="Tomazela"
            width={440}
            height={120}
            priority
            className={`w-auto transition-all duration-200 ${scrolled ? 'h-[85px] sm:h-[105px]' : 'h-[100px] sm:h-[125px]'}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/#servicos" className="hover:text-brand">Serviços</a>
          <Link href="/manifesto" className="hover:text-brand">Manifesto</Link>
          <a href="/#sobre" className="hover:text-brand">Quem somos</a>
          <a href="/#contato" className="btn btn-primary rounded-2xl">Fale com a gente</a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-200 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button className="mb-4" onClick={() => setMenuOpen(false)}>Fechar</button>
          <nav className="flex flex-col gap-4">
            <a href="/#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <Link href="/manifesto" onClick={() => setMenuOpen(false)}>Manifesto</Link>
            <a href="/#sobre" onClick={() => setMenuOpen(false)}>Quem somos</a>
            <a href="/#contato" className="btn btn-primary rounded-2xl" onClick={() => setMenuOpen(false)}>Fale com a gente</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
