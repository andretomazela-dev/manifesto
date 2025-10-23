"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const [cfToken, setCfToken] = useState(""); // token do Turnstile

  const scrollToId = (hash) => {
    const id = hash.startsWith("#") ? hash : `#${hash}`;
    const el = document.querySelector(id);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = header?.offsetHeight ? header.offsetHeight + 12 : 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    // Carrega o script do Turnstile e registra callback global
    if (typeof window !== "undefined") {
      if (!window.onTurnstileVerify) {
        window.onTurnstileVerify = (token) => setCfToken(token);
      }
      const already = document.querySelector('script[data-turnstile="1"]');
      if (!already) {
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        s.async = true;
        s.defer = true;
        s.setAttribute("data-turnstile", "1");
        document.body.appendChild(s);
      }
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => scrollToId(window.location.hash), 0);
    }
  }, []);

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
        setCfToken(""); // reset token
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
        id=\"home\"
        className=\"container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center scroll-mt-28\"
      >
        <div>
          <h1 className=\"text-3xl md:text-5xl font-extrabold leading-tight\">
            Comunicação sob medida para marcas e organizações de impacto.
          </h1>
        <p className=\"mt-4 text-lg text-gray-700\">
          Estratégia que posiciona, conteúdo que conecta e relações que abrem 
          portas. Clareza, método e propósito em cada projeto.
          </p>
          <div className=\"mt-6 flex gap-3\">
            <a
              href=\"#servicos\"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(\"#servicos\");
              }}
              className=\"btn btn-primary\"
            >
              Ver serviços
            </a>
          </div>
          <p className=\"mt-6 text-sm text-gray-600\">
            São Paulo • Brasil •{' '}
            <a className=\"underline\" href=\"mailto:andre@andretomazela.com.br\">
              andre@andretomazela.com.br
            </a>
          </p>
        </div>

        <div className=\"rounded-2xl shadow-card overflow-hidden bg-white flex items-center justify-center\">
          <img
            src=\"/social-media-entertainment-lifestyle-graphic-concept.jpg\"
            alt=\"Marca Tomazela\"
            className=\"block w-full h-auto object-contain max-h-[280px] md:max-h-[360px]\"
            loading=\"lazy\"
          />
        </div>
      </section>

      {/* SERVIÇOS (mantido) */}
      <section id=\"servicos\" className=\"bg-gray-50 py-14 md:py-16 scroll-mt-28\">
        <div className=\"container\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">
            O que podemos fazer por você
          </h2>
          <p className=\"mt-2 text-gray-600 max-w-prose\">
            Serviços pensados para empresas e organizações de impacto. Objetivo:
            ampliar visibilidade, fortalecer reputação e criar relações
            consistentes.
          </p>

          <div className=\"mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5\">
            {/* ...seus cards existentes aqui, sem alterações... */}
          </div>

          <a
            href=\"#contato\"
            onClick={(e) => {
              e.preventDefault();
              scrollToId(\"#contato\");
            }}
            className=\"inline-block mt-8 btn btn-primary\"
          >
            Montar meu pacote
          </a>
        </div>
      </section>

      {/* SOBRE (mantido) */}
      <section id=\"sobre\" className=\"py-14 md:py-16 bg-white scroll-mt-28\">
        <div className=\"container grid md:grid-cols-2 gap-10 items-center\">
          <div className=\"rounded-2xl overflow-hidden shadow-card bg-white flex items-center justify-center\">
            <img
              src=\"/Foto André.png\"
              alt=\"André Tomazela\"
              className=\"block w-full h-auto object-contain max-h-[320px] md:max-h-[360px] lg:max-h-[380px]\"
              loading=\"lazy\"
            />
          </div>
          <div>
            <h2 className=\"text-2xl md:text-3xl font-bold\">Quem é André Tomazela</h2>
            <p className=\"mt-4 text-gray-700\">
              Jornalista e estrategista de comunicação com experiência em
              empresas, agências e projetos editoriais. Entrega clara, sem
              enrolação, com foco em resultado.
            </p>
            <p className=\"mt-3 text-gray-700\">
              Pós-graduação em Gestão da Comunicação em Mídias Digitais
              (Senac-SP). Reportagens e especiais para o Valor Econômico.
              Atuação com organizações de impacto e negócios.
            </p>
            <a
              href=\"#contato\"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(\"#contato\");
              }}
              className=\"inline-block mt-5 btn btn-outline\"
            >
              Falar com o André
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id=\"contato\"
        className=\"py-14 md:py-16 bg-gradient-to-t from-orange-50 to-white border-t scroll-mt-28\"
      >
        <div className=\"container\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Vamos conversar?</h2>
          <p className=\"mt-2 text-gray-700 max-w-prose\">
            Conte rápido seu objetivo. Eu respondo com um caminho claro e um
            pacote de soluções sob medida.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className=\"grid gap-3 md:grid-cols-3\">
              <input name=\"nome\" placeholder=\"Nome\" required className={`md:col-span-1 ${inputCls}`} />
              <input type=\"email\" name=\"email\" placeholder=\"E-mail\" required className={`md:col-span-1 ${inputCls}`} />
              <input name=\"telefone\" placeholder=\"Telefone (opcional)\" className={`md:col-span-1 ${inputCls}`} />
              <textarea name=\"mensagem\" placeholder=\"Como posso ajudar?\" rows={5} className={`md:col-span-3 ${inputCls}`} />

              {/* Honeypot invisível */}
              <input type=\"text\" name=\"website\" tabIndex=\"-1\" autoComplete=\"off\" className=\"hidden\" />

              {/* Token hidden */}
              <input type=\"hidden\" name=\"turnstile\" value={cfToken} />

              {/* Widget Turnstile */}
              <div className=\"md:col-span-3\">
                <div
                  className=\"cf-turnstile mt-1\"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  data-callback=\"onTurnstileVerify\"
                />
              </div>

              <div className=\"md:col-span-3 flex justify-end\">
                <button type=\"submit\" disabled={!cfToken || sending} className=\"btn btn-primary rounded-2xl px-6 disabled:opacity-60\">
                  {sending ? \"Enviando...\" : \"Enviar\"}
                </button>
              </div>
            </form>
          ) : (
            <div className=\"p-4 rounded-xl border border-green-200 bg-green-50 text-green-700\">
              Mensagem enviada! Eu te respondo em breve 😉
            </div>
          )}

          {err && (
            <div className=\"mt-3 p-3 rounded-md border border-red-200 bg-red-50 text-red-700\">
              {err}
            </div>
          )}

          <div className=\"mt-6 text-sm text-gray-600 flex flex-wrap gap-4 items-center\">
            <a className=\"underline\" href=\"mailto:andre@andretomazela.com.br\">
              andre@andretomazela.com.br
            </a>
            <span>•</span>
            <a className=\"underline\" href=\"https://wa.me/message/TUNCL3KFQIECM1\">
              WhatsApp
            </a>
            <span>•</span>
            <a className=\"underline\" href=\"https://www.linkedin.com/in/tomazela/\">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
