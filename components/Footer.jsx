"use client";
import Image from "next/image";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FF4D00] text-white py-10 px-6">
      <div className="flex flex-col items-center text-center space-y-3">
        <Image
          src="/logo-tomazela-br-fundotransp.png"
          alt="Tomazela | Estratégia & Comunicação"
          width={130}
          height={40}
          className="mb-2"
        />

        <p className="text-sm">Santa Cecília | São Paulo SP</p>

        {/* E-mail */}
        <a
          href="mailto:andre@andretomazela.com.br"
          className="text-sm hover:underline break-all"
        >
          andre@andretomazela.com.br
        </a>

        {/* Ícones de contato */}
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="https://wa.me/5511968468668"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/andretomazela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/andretomazela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white/80">
        © {new Date().getFullYear()} Tomazela | Estratégia & Comunicação
      </div>
    </footer>
  );
}
