"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ novo
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");

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
      if ((fd.get("website") || "").toString().trim()) {
        setSent(true);
        form.reset();
        return;
      }

      const res = await fetch("https://formspree.io/f/meorrlvp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        setSent(true);
        form.reset();
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
            {/* ... TODOS OS CARDS IDENTICOS ... */}
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

      {/* SOBRE */}
      <section id="sobre" className="py-14 md:py-16 bg-white scroll-mt-28">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card bg-white flex items-center justify-center">
            
            {/* ✅ FOTO OTIMIZADA COM next/image */}
            <Image
              src="/andretomazelafoto.png"
              alt="André Tomazela"
              width={500}
              height={600}
              priority={true}
              className="object-cover w-full h-auto max-h-[380px] md:max-h-[420px] lg:max-h-[460px] rounded-2xl"
            />

          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Quem é André Tomazela</h2>

            <div className="mt-4 max-w-prose text-gray-700 space-y-4 leading-relaxed">
              <p>
                Jornalista pela Unesp-Bauru, com especialização em Jornalismo Institucional (PUC-SP) e
                pós-graduação em Gestão da Comunicação em Mídias Digitais (Senac-SP).
              </p>

              <p>
                Há mais de 20 anos atuo em empresas, agências e organizações, unindo estratégia e execução
                para fortalecer cultura, reputação e resultados.
              </p>

              <div>
                <p className="font-semibold">Atuação principal</p>
                <ul className="list-disc pl-5 grid gap-1">
                  <li>Comunicação interna e endomarketing</li>
                  <li>Cultura organizacional e jornadas do colaborador</li>
                  <li>Conteúdo estratégico e gestão de canais digitais</li>
                </ul>
              </div>

              <p>
                Como repórter do <span className="font-semibold">Valor Econômico</span>, produzo matérias para projetos especiais nas editorias
                de sustentabilidade, meio ambiente, infraestrutura e logística, inovação, agronegócios e COP 30.
              </p>

              <p className="italic">
                Acredito em comunicação assertiva, acessível e orientada a resultado, que respeita pessoas,
                fortalece cultura e constrói reputação.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/tomazela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Ver LinkedIn
              </Link>

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("#contato");
                }}
                className="inline-block btn btn-outline"
              >
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="py-14 md:py-16 bg-gradient-to-t from-orange-50 to-white border-t scroll-mt-28"
      >
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 mb-6 text-gray-700 max-w-prose">
            Conte rápido seu objetivo. Eu respondo com um caminho claro e um
            pacote de soluções sob medida.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-3">
              <input
                name="nome"
                placeholder="Nome"
                required
                className={`md:col-span-1 ${inputCls}`}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className={`md:col-span-1 ${inputCls}`}
              />
              <input
                name="telefone"
                placeholder="Telefone (opcional)"
                className={`md:col-span-1 ${inputCls}`}
              />
              <textarea
                name="mensagem"
                placeholder="Como posso ajudar?"
                rows={5}
                className={`md:col-span-3 ${inputCls}`}
              />

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="md:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary rounded-2xl px-6"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-xl border border-green-200 bg-green-50 text-green-700">
              Mensagem enviada! Eu te respondo em breve 😉
            </div>
          )}

          {err && (
            <div className="mt-3 p-3 rounded-md border border-red-200 bg-red-50 text-red-700">
              {err}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-4 items-center">
            <a className="underline" href="mailto:andre@andretomazela.com.br">
              andre@andretomazela.com.br
            </a>
            <span>•</span>
            <a className="underline" href="https://wa.me/message/TUNCL3KFQIECM1">
              WhatsApp
            </a>
            <span>•</span>
            <a className="underline" href="https://www.linkedin.com/in/tomazela/">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
