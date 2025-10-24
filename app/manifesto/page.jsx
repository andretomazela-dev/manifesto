"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <div>
      <Header />

      <main className="bg-white">
        {/* Intro */}
        <section className="container py-12 md:py-16">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
            Nosso Manifesto
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            COMUNICAÇÃO COM PROPÓSITO. ESTRATÉGIA COM CONSCIÊNCIA.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            Acreditamos que a comunicação é uma ferramenta poderosa para
            transformar o mundo. Mas transformação de verdade só acontece quando
            há espaço para todo mundo. Por isso, nossa atuação é guiada por
            valores que fazem sentido para nós e para quem compartilha dessa visão.
          </p>
        </section>

        {/* BLOCO 1 — Texto à ESQUERDA / Imagem à DIREITA */}
        <section className="container grid md:grid-cols-12 gap-10 items-start">
          {/* Texto */}
          <div className="md:col-span-7 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">O que a gente defende?</h2>
            <ul className="space-y-4 text-gray-800 leading-relaxed">
              <li>
                <strong>🌍 Justiça Social</strong><br />
                O mundo só será bom para todo mundo quando houver distribuição
                de riqueza e equidade de oportunidades.
              </li>
              <li>
                <strong>🌱 Direitos dos Povos Originários</strong><br />
                Território, cultura e reparação. Isso é o mínimo que os povos
                originários merecem.
              </li>
              <li>
                <strong>✊🏿 Reparação Histórica</strong><br />
                Os descendentes de povos escravizados têm direito à terra, às
                posses e à dignidade. Sem &quot;mas&quot; e sem &quot;e se&quot;.
              </li>
              <li>
                <strong>🕊️ Liberdade Religiosa (com responsabilidade)</strong><br />
                Todas as religiões merecem respeito, exceto as que promovem ódio
                e preconceito. Respeitamos, mas não somos ingênuos.
              </li>
              <li>
                <strong>❤️‍🩹 Saúde e Educação de Qualidade</strong><br />
                Direito de todos, dever do Estado. Viva o SUS.
              </li>
              <li>
                <strong>🌈 Diversidade e Inclusão</strong><br />
                O preconceito é ignorância. A sexualidade de cada pessoa é livre,
                natural e merece respeito.
              </li>
              <li>
                <strong>💪 Quebrando Padrões</strong><br />
                A diversidade de corpos é linda. Padrões de beleza são apenas padrões.
                E estamos aqui para desconstruí-los.
              </li>
              <li>
                <strong>🤝 Conexões Reais</strong><br />
                Curtidas não substituem relações verdadeiras. É preciso viver o mundo
                offline também.
              </li>
              <li>
                <strong>🧠 Saúde Mental é Prioridade</strong><br />
                Cuidar da mente deveria ser tão comum quanto escovar os dentes.
                (Inclusive, já escovou hoje?)
              </li>
            </ul>
          </div>

          {/* Imagem vertical (mãos) */}
          <div className="md:col-span-5 order-1 md:order-2 mb-10 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-card relative h-[320px] md:h-[520px] lg:h-[560px]">
              <Image
                src="/manifesto-hands.webp"
                alt="Mãos erguidas representando diversidade e união"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* espaço entre blocos */}
        <div className="container mt-12 md:mt-16" />

        {/* BLOCO 2 — Imagem à ESQUERDA / Texto à DIREITA */}
        <section className="container grid md:grid-cols-12 gap-10 items-center">
          {/* Imagem (planeta) */}
          <div className="md:col-span-6 mb-10 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-card relative h-[340px] md:h-[420px] lg:h-[440px]">
              <Image
                src="/manifesto-planet.webp"
                alt="Planeta criativo simbolizando um mundo conectado"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Não é só sobre comunicação. É sobre impacto.
            </h2>
            <p className="mt-4 text-gray-700">
              A Tomazela | Estratégia &amp; Comunicação nasceu para conectar
              marcas e projetos a públicos que compartilham valores reais. Aqui,
              a comunicação vai além do marketing: constrói narrativas,
              fortalece causas e dá voz a quem precisa ser ouvido.
            </p>
            <p className="mt-3 text-gray-700">
              Se você compartilha essa visão, estamos juntos.
            </p>
            <Link
              href="/#contato"
              className="inline-block mt-6 bg-[#FF4D00] text-white font-semibold py-2.5 px-5 rounded-2xl hover:opacity-90 transition"
            >
              Entre em contato
            </Link>
          </div>
        </section>

        {/* respiro antes do footer */}
        <div className="h-10 md:h-12" />
      </main>

      <Footer />
    </div>
  );
}
