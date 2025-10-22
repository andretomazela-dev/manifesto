"use client";
import Image from "next/image";

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0 11.99 11.99 0 0 0 0 12c0 2.11.55 4.06 1.61 5.83L0 24l6.32-1.65A11.86 11.86 0 0 0 12 24h.01A12 12 0 0 0 24 12c0-3.2-1.25-6.2-3.48-8.52zm-8.5 18.02h-.01a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-3.75.98.99-3.66-.24-.38A9.98 9.98 0 1 1 12.02 21.5zm5.46-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.76.97-.93 1.17-.34.22-.64.07c-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
    </svg>
  );
}
function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7H9.35V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.38ZM5.34 7.43A2.06 2.06 0 1 1 5.35 3.3a2.06 2.06 0 0 1-.01 4.13ZM6.99 20.45H3.7V9h3.29v11.45Z" />
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 .002 7.002A3.5 3.5 0 0 0 12 9.5ZM18 6.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FF4D00] text-white py-12 px-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <Image
          src="/logo-tomazela-br-fundotransp.png"
          alt="Tomazela | Estratégia & Comunicação"
          width={180}
          height={55}
          className="mb-2"
          priority
        />

        <p className="text-sm">Santa Cecília | São Paulo SP</p>

        <a
          href="mailto:andre@andretomazela.com.br"
          className="text-sm hover:underline break-all"
        >
          andre@andretomazela.com.br
        </a>

        <div className="flex justify-center gap-8 mt-3">
          <a
            href="https://wa.me/message/TUNCL3KFQIECM1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition"
          >
            <IconWhatsApp />
          </a>
          <a
            href="https://www.linkedin.com/in/tomazela/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <IconLinkedIn />
          </a>
          <a
            href="https://www.instagram.com/andretomazela/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition"
          >
            <IconInstagram />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/80">
        © {new Date().getFullYear()} Tomazela | Estratégia & Comunicação
      </div>
    </footer>
  );
}
