"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Manifesto | Tomazela",
  description: "No que acreditamos: comunicação com propósito, estratégia com consciência.",
};

export default function ManifestoPage() {
  const Item = ({ title, children }) => (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{children}</p>
      </div>
    </li>
  );

  return (
    <div>
      <Header />

      <section className="container py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Nosso Manifesto</h1>
            <p className="mt-3 text-xl font-bold text-orange-600">
              Comunicação com propósito.<br className="hidden md:block" /> Estratégia com consciência.
            </p>
            <p className="mt-5 text-gray-700">
              Acreditamos que a comunicação é uma ferramenta poderosa para transformar o mundo.
              Mais transformação de verdade acontece quando há espaço para todo mundo.
              Por isso, nossa atuação é guiada por valores que fazem sentido para nós e para as pessoas e marcas
              que acreditam no mesmo.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card bg-white">
            <img
              src="/manifesto/mãos-diversidade.webp"
              alt="Mãos diversas levantadas — diversidade e inclusão"
              className="block w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-16 border-t">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">O que a gente defende?</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            <Item title="Reparação Histórica">
              Os descendentes de povos escravizados têm direito à terra, às posses e à dignidade. Sem “mas”, sem “se”.
            </Item>
            <Item title="Liberdade Religiosa (com responsabilidade)">
              Religiões não podem oprimir. Respeito mútuo — sem que se promova ódio e preconceito.
            </Item>
            <Item title="Saúde e Educação de Qualidade">
              Direitos e deveres do Estado. Viva o SUS!
            </Item>
            <Item title="Direito de existir">
              A pluralidade de corpos e identidades é saudada: cada um é livre, natural e merece respeito.
            </Item>
            <Item title="Quebrando Padrões">
              A diversidade é linda. Padrões de beleza são só… padrões. Estamos aqui para desconstruí-los.
            </Item>
            <Item title="Conexões Reais">
              Curtidas não substituem relações. Bora viver o mundo offline também!
            </Item>
            <Item title="Saúde Mental é Prioridade">
              Cuidar da mente deveria ser tão comum quanto escovar os dentes (inclusive: já escovou hoje?).
            </Item>
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card bg-white order-2 md:order-1">
            <img
              src="/manifesto/planeta-impacto.webp"
              alt="Planeta: impacto positivo"
              className="block w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-orange-600">
              Não é só sobre comunicação. É sobre impacto.
            </h3>
            <p className="mt-4 text-gray-700">
              A Tomazela | Estratégia & Comunicação nasceu para conectar marcas e projetos a públicos que compartilham valores reais.
              Aqui, a comunicação vai além do marketing: cria narrativas, fortalece causas e dá voz a quem precisa ser ouvido.
            </p>
            <a href="/#contato" className="inline-block mt-6 btn btn-primary rounded-2xl px-6">
              Entre em contato
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
