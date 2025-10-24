"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
      // Honeypot
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
            {/* 1 */}
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

            {/* 2 */}
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

            {/* 3 */}
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

            {/* 4 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1-4-4h10a4 4 0 0 1 4 4z"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Redes sociais</h3>
              <p className="text-sm text-gray-600 mt-2">
                Planejamento e execução de conteúdo alinhado ao seu público.
              </p>
            </div>

            {/* 5 */}
            <div className="card">
              <div className="mb-3 text-orange-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
