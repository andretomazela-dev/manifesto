"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const [cfToken, setCfToken] = useState("");
  const TURNSTILE_SITE_KEY =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  // Scroll suave
  const scrollToId = (hash) => {
    const id = hash.startsWith("#") ? hash : `#${hash}`;
    const el = document.querySelector(id);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = header?.offsetHeight ? header.offsetHeight + 12 : 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Carrega e inicializa o Turnstile
  useEffect(() => {
    if (typeof window === "undefined" || !TURNSTILE_SITE_KEY) return;

    if (!window.onTurnstileVerify) {
      window.onTurnstileVerify = (token) => setCfToken(token);
    }

    const renderWidget = () => {
      const el = document.getElementById("cf-container");
      if (!el || !window.turnstile) return;
      window.turnstile.render("#cf-container", {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setCfToken(token),
        "expired-callback": () => setCfToken(""),
        theme: "light",
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    }

    // Fallback: libera o botão após 3s se não houver token
    const fallback = setTimeout(() => setCfToken("manual-ok"), 3000);
    return () => clearTimeout(fallback);
  }, [TURNSTILE_SITE_KEY]);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => scrollToId(window.location.hash), 0);
    }
  }, []);

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErr("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setCfToken("");
      } else {
        const j = await res.json().catch(() => ({}));
        setErr(j.error || "Não foi possível enviar.");
      }
    } catch {
      setErr("Falha de rede.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 " +
    "px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500";

  return (
    <div>
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center scroll-mt-28"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Comunicação sob medida para marcas e organizações de impacto.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Estratégia que posiciona, conteúdo que conecta e relações que abrem
            portas. Clareza, método e propósito em cada projeto.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#servicos");
              }}
              className="btn btn-primary"
            >
              Ver serviços
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            São Paulo • Brasil •{" "}
            <a className="underline" href="mailto:andre@andretomazela.com.br">
              andre@andretomazela.com.br
            </a>
          </p>
        </div>

        <div className="rounded-2xl shadow-card overflow-hidden bg-white flex items-center justify-center">
          <img
            src="/social-media-entertainment-lifestyle-graphic-concept.jpg"
            alt="Marca Tomazela"
            className="block w-full h-auto object-contain max-h-[280px] md:max-h-[360px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-14 md:py-16 scroll-mt-28">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">
            O que podemos fazer por você
          </h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Serviços pensados para empresas e organizações de impacto. Objetivo:
            ampliar visibilidade, fortalecer reputação e criar relações
            consistentes.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Todos os cards mantidos */}
            {/* (1) Posicionamento */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Posicionamento e narrativas de marca</h3>
              <p className="text-sm text-gray-600 mt-2">
                Identidade verbal e narrativa para marcas, projetos e lideranças
                que querem comunicar com autenticidade e propósito.
              </p>
            </div>

            {/* (2) Imprensa */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11v2a4 4 0 0 0 4 4h1"></path>
                  <path d="M21 8v8"></path>
                  <path d="M7 15v-6"></path>
                  <path d="M21 8l-13 4"></path>
                  <path d="M21 16l-13-4"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Relações com a imprensa</h3>
              <p className="text-sm text-gray-600 mt-2">
                Criação de pautas e materiais estratégicos para fortalecer sua
                marca na mídia.
              </p>
            </div>

            {/* (3) Estratégia */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"></path>
                  <path d="M12 8l1.2 2.4 2.6.4-1.9 1.9.5 2.7L12 14.5 9.6 15.4l.5-2.7-1.9-1.9 2.6-.4L12 8Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Estratégia e reputação</h3>
              <p className="text-sm text-gray-600 mt-2">
                Diagnóstico e plano de comunicação para fortalecer reputação e
                alinhar propósito, voz e presença.
              </p>
            </div>

            {/* (4) Redes sociais */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Redes sociais</h3>
              <p className="text-sm text-gray-600 mt-2">
                Planejamento e execução de conteúdo alinhado ao seu público.
              </p>
            </div>

            {/* (5) Comunicação interna */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Comunicação interna e cultura</h3>
              <p className="text-sm text-gray-600 mt-2">
                Campanhas e ações de engajamento que fortalecem diálogo e
                pertencimento.
              </p>
            </div>

            {/* (6) Influenciadores */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z"></path>
                  <path d="M19 14l.8 1.8L22 16l-1.8.8L19 19l-.8-2.2L16 16l2.2-.2L19 14Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Parcerias com influenciadores</h3>
              <p className="text-sm text-gray-600 mt-2">
                Conexões estratégicas para amplificar sua mensagem.
              </p>
            </div>

            {/* (7) Conteúdo */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </div>
              <h3 className="font-semibold">Criação de conteúdo</h3>
              <p className="text-sm text-gray-600 mt-2">
                Textos e materiais que posicionam sua organização no mercado.
              </p>
            </div>

            {/* (8) Eventos */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="font-semibold">Planejamento de eventos</h3>
              <p className="text-sm text-gray-600 mt-2">
                Organização e divulgação de ações que destaquem sua marca.
              </p>
            </div>

            {/* (9) CTA final */}
            <div
              className="rounded-2xl p-6 bg-[#FF4D00] text-white shadow-lg hover:opacity-90 transition cursor-pointer ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D00]"
              role="button"
              tabIndex={0}
              onClick={() => scrollToId("#contato")}
              onKeyDown={(e) => e.key === "Enter" && scrollToId("#contato")}
            >
              <div className="mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
              <h3 className="font-semibold">O que mais você precisa?</h3>
              <p className="text-sm mt-2 opacity-95">
                Montamos um pacote sob medida, de acordo com suas necessidades.
              </p>
              <span className="mt-3 inline-block text-xs font-semibold bg-white/15 rounded-full px-3 py-1">
                Clique para falar com a gente
              </span>
            </div>
          </div>

          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#contato");
            }}
            className="inline-block mt-8 btn btn-primary"
          >
            Montar meu pacote
          </a>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="py-14 md:py-16 bg-gradient-to-t from-orange-50 to-white border-t scroll-mt-28"
      >
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 text-gray-700 max-w-prose">
            Conte rápido seu objetivo. Eu respondo com um caminho claro e um
            pacote de soluções sob medida.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-3">
              <input name="nome" placeholder="Nome" required className={`md:col-span-1 ${inputCls}`} />
              <input type="email" name="email" placeholder="E-mail" required className={`md:col-span-1 ${inputCls}`} />
              <input name="telefone" placeholder="Telefone (opcional)" className={`md:col-span-1 ${inputCls}`} />
              <textarea name="mensagem" placeholder="Como posso ajudar?" rows={5} className={`md:col-span-3 ${inputCls}`} />

              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />
              <input type="hidden" name="turnstile" value={cfToken} />

              {TURNSTILE_SITE
