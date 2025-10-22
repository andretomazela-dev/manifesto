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
        <section className="container py-12 md:py-16">
          <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">Nosso Manifesto</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            COMUNICAÇÃO COM PROPÓSITO. ESTRATÉGIA COM CONSCIÊNCIA.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            Acreditamos que a comunicação é uma ferramenta poderosa para transformar o mundo. Mas transformação de verdade só
            acontece quando há espaço para todo mundo. Por isso, nossa atuação é guiada por valores que fazem sentido para nós e
            para as pessoas e marcas que acreditam no mesmo.
          </p>
        </section>

        <section className="container grid md:grid-cols-2 gap-10 items-start pb-6">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/manifesto-hands.webp"
              alt="Mãos erguidas representando diversidade e união"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">O que a gente defende?</h2>
            <ul className="space-y-4 text-gray-800">
              <li><strong>🌍 Justiça Social</strong><br/> O mundo só será bom para TODO MUNDO quando houver distribuição de riqueza e equidade de oportunidades.</li>
              <li><strong>🌱 Direitos dos Povos Originários</strong><br/> Território, cultura e reparação. Isso é o mínimo que os povos originários merecem.</li>
              <li><strong>✊🏿 Reparação Histórica</strong><br/> Os descendentes de povos escravizados têm direito à terra, às posses, à dignidade. Sem "mas", sem "e se".</li>
              <li><strong>🕊️ Liberdade Religiosa (com responsabilidade)</strong><br/> Todas as religiões merecem respeito… menos as que promovem ódio e preconceito. Respeitamos, mas não somos ingênuos.</li>
              <li><strong>❤️‍🩹 Saúde e Educação de Qualidade</strong><br/> Direito de todos, dever do Estado. Viva o SUS!</li>
              <li><strong>🌈 Diversidade e Inclusão</strong><br/> O preconceito é ignorância. A sexualidade de cada um é livre, natural e merece respeito.</li>
              <li><strong>💪 Quebrando Padrões</strong><br/> A diversidade de corpos é linda. Padrões de beleza são só… padrões. E estamos aqui para desconstruí-los.</li>
              <li><strong>🤝 Conexões Reais</strong><br/> Curtidas não substituem relações reais. Bora viver o mundo offline também!</li>
              <li><strong>🧠 Saúde Mental é Prioridade</strong><br/> Cuidar da mente deveria ser tão comum quanto escovar os dentes. (Inclusive, já escovou hoje?)</li>
            </ul>
          </div>
        </section>

        <section className="container grid md:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Não é só sobre comunicação. É sobre impacto.</h2>
            <p className="mt-4 text-gray-700">
              A Tomazela | Estratégia &amp; Comunicação nasceu para conectar marcas e projetos a públicos que compartilham valores reais.
              Aqui, a comunicação vai além do marketing: ela constrói narrativas, fortalece causas e dá voz a quem precisa ser ouvido.
            </p>
            <p className="mt-3 text-gray-700">
              Se você compartilha essa visão, estamos juntos.
            </p>
            <Link href="/#contato" className="inline-block mt-5 btn btn-primary rounded-2xl">
              Entre em contato
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/manifesto-planet.webp"
              alt="Planeta criativo simbolizando um mundo conectado"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
