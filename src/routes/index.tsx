import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { BeforeAfter } from "@/components/BeforeAfter";

import heroImg from "@/assets/hero.jpg";
import cristalesImg from "@/assets/service-cristales.jpg";
import fachadasImg from "@/assets/service-fachadas.jpg";
import solarImg from "@/assets/service-solar.jpg";
import lineasImg from "@/assets/service-lineas.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DISET · Trabajos Verticales y Limpieza en Altura en Barcelona" },
      { name: "description", content: "Especialistas en trabajos verticales en Barcelona: limpieza de cristales, fachadas, placas solares e instalación de líneas de vida. +25 años de experiencia, +4500 proyectos." },
      { property: "og:title", content: "DISET · Especialistas en Trabajos Verticales" },
      { property: "og:description", content: "Limpieza en altura para empresas, industrias y comunidades en Barcelona y provincia." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: 25, suffix: "+", label: "Años de experiencia" },
  { value: 4500, suffix: "+", label: "Proyectos ejecutados" },
  { value: 300, suffix: "+", label: "Comunidades atendidas" },
  { value: 98, suffix: "%", label: "Satisfacción cliente" },
];

const services = [
  { title: "Limpieza de Cristales", desc: "Cristaleras, ventanales y escaparates en altura con acabado profesional sin marcas ni residuos.", img: cristalesImg },
  { title: "Limpieza de Fachadas", desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.", img: fachadasImg },
  { title: "Limpieza de Placas Solares", desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.", img: solarImg },
  { title: "Instalación de Líneas de Vida", desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.", img: lineasImg },
];

const benefits = [
  { title: "Personal certificado", desc: "Técnicos IRATA y trabajos en altura RD 2177/2004." },
  { title: "Seguridad homologada", desc: "Equipos EPI certificados y protocolos auditados." },
  { title: "Rapidez de ejecución", desc: "Movilización en 48h y obras coordinadas al detalle." },
  { title: "Cobertura Barcelona", desc: "Servicio en toda la ciudad y provincia de Barcelona." },
  { title: "Garantía de calidad", desc: "Resultado garantizado por escrito en cada proyecto." },
  { title: "Presupuestos rápidos", desc: "Valoración técnica y oferta en menos de 24 horas." },
];

const process = [
  { n: "01", t: "Contacto inicial", d: "Atendemos su consulta y recopilamos los datos del inmueble." },
  { n: "02", t: "Visita técnica", d: "Inspeccionamos in situ y evaluamos accesos y riesgos." },
  { n: "03", t: "Propuesta detallada", d: "Presupuesto cerrado con planificación y plan de seguridad." },
  { n: "04", t: "Ejecución", d: "Equipo certificado realiza el trabajo con coordinación total." },
  { n: "05", t: "Entrega y garantía", d: "Certificación, documentación y garantía por escrito." },
];

const testimonials = [
  { name: "Marta Vidal", role: "Administradora de Fincas, Eixample", quote: "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel." },
  { name: "Jordi Soler", role: "Facility Manager, Grupo Industrial", quote: "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles." },
  { name: "Anna Roig", role: "Directora de Operaciones, Hotel BCN", quote: "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%." },
];

const clients = ["Acciona", "Grupo Mango", "Iberdrola", "Naturgy", "Hospital Clínic", "FCC", "Renfe", "Sanitas", "Aigües BCN", "Caixabank"];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-lg bg-[var(--gradient-accent)] grid place-items-center shadow-glow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" /><path d="M5 8l7-6 7 6" /><circle cx="12" cy="15" r="3" />
        </svg>
      </div>
      <span className="font-extrabold text-xl tracking-tight text-navy">DISET</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className={`transition-colors ${scrolled ? "" : "[&_span]:!text-white [&_div]:shadow-none"}`}>
          <Logo />
        </a>
        <nav className={`hidden md:flex items-center gap-9 text-sm font-semibold ${scrolled ? "text-ink" : "text-white"}`}>
          <a href="#servicios" className="hover:text-electric transition-colors">Servicios</a>
          <a href="#proyectos" className="hover:text-electric transition-colors">Proyectos</a>
          <a href="#proceso" className="hover:text-electric transition-colors">Proceso</a>
          <a href="#cobertura" className="hover:text-electric transition-colors">Cobertura</a>
          <a href="#contacto" className="hover:text-electric transition-colors">Contacto</a>
        </nav>
        <a href="tel:+34900000000" className="hidden sm:inline-flex items-center gap-2 px-5 h-11 rounded-full bg-electric text-white text-sm font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
          900 000 000
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(13,59,102,0.92)_0%,rgba(13,59,102,0.75)_45%,rgba(13,59,102,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_50%,rgba(0,150,255,0.25),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase animate-[fade-in_0.8s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Trabajos verticales · Barcelona
          </div>
          <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]">
            Especialistas en <span className="bg-gradient-to-r from-white to-electric bg-clip-text text-transparent">trabajos verticales</span> y limpieza en altura en Barcelona
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fade-up_1s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]">
            Limpieza de cristales, fachadas, placas solares e instalación de líneas de vida para empresas, industrias y comunidades.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <a href="#contacto" className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all">
              Solicitar Presupuesto
              <span className="w-7 h-7 rounded-full bg-white/20 grid place-items-center group-hover:translate-x-1 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </a>
            <a href="tel:+34900000000" className="inline-flex items-center gap-3 h-14 px-7 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/25 hover:bg-white hover:text-navy transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              Llamar Ahora
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-white/70 text-sm animate-[fade-in_1s_0.6s_both]">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => <div key={i} className="w-9 h-9 rounded-full border-2 border-navy bg-gradient-to-br from-electric to-white" />)}
            </div>
            <div>
              <div className="text-white font-bold">+4.500 proyectos</div>
              <div>completados con éxito</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold tracking-widest uppercase animate-bounce">
        Scroll
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-extrabold text-navy tracking-tight">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClientsMarquee() {
  const items = [...clients, ...clients];
  return (
    <section className="bg-mist py-14 overflow-hidden">
      <Reveal className="text-center mb-8">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Empresas que confían en nosotros</p>
      </Reveal>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {items.map((c, i) => (
            <div key={i} className="text-2xl md:text-3xl font-extrabold text-navy/40 hover:text-navy transition-colors tracking-tight">
              {c}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-mist to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-mist to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Servicios</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Todo lo que su edificio<br />necesita, <span className="text-electric">en altura</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Un único proveedor técnico para todos los trabajos en altura, con personal homologado y la garantía de más de 25 años de experiencia.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-2xl bg-mist border border-border hover:border-electric/40 hover:shadow-elev transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={640} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-electric font-bold text-sm group-hover:gap-3 transition-all">
                    Más información
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section id="proyectos" className="py-28 lg:py-36 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Antes / Después</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Resultados que se<br />ven, a primera vista.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <BeforeAfter before={beforeImg} after={afterImg} />
          <p className="mt-6 text-sm text-muted-foreground text-center font-semibold">Arrastre el control deslizante para comparar</p>
        </Reveal>
      </div>
    </section>
  );
}

function Benefits() {
  const icons = [
    "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    "M20 6 9 17l-5-5",
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  ];
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Por qué DISET</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            La referencia técnica<br />en trabajos en altura.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60} className="bg-white">
              <div className="p-10 h-full hover:bg-mist transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-navy/5 text-navy grid place-items-center group-hover:bg-electric group-hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icons[i]} />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-navy">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-28 lg:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Vídeo corporativo</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            Conozca a DISET en movimiento.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elev group cursor-pointer">
            <img src={heroImg} alt="Vídeo corporativo DISET" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
            <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-24 h-24 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"><polygon points="6 4 20 12 6 20 6 4" /></svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Proceso</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Un método claro,<br />de principio a fin.
          </h2>
        </Reveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-mist border border-border grid place-items-center text-electric font-extrabold text-xl group-hover:bg-electric group-hover:text-white transition-all relative z-10">
                    {p.n}
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-navy">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Testimonios</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Lo que dicen<br />nuestros clientes.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="h-full bg-white rounded-2xl p-8 border border-border hover:shadow-elev hover:-translate-y-1 transition-all duration-500">
                <div className="flex gap-1 text-electric">
                  {[...Array(5)].map((_, k) => (
                    <svg key={k} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-ink">"{t.quote}"</p>
                <div className="mt-7 pt-6 border-t border-border">
                  <div className="font-extrabold text-navy">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cobertura" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Cobertura</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Toda Barcelona<br />y provincia.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
            Operamos en toda la provincia con equipos propios y vehículos preparados para intervenciones rápidas. Sin subcontratas.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm font-semibold text-navy">
            {["Barcelona ciudad", "L'Hospitalet", "Badalona", "Sabadell", "Terrassa", "Mataró", "Sant Cugat", "Granollers"].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric" /> {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-elev bg-mist">
            <iframe
              title="Cobertura DISET Barcelona"
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.85,41.25,2.45,41.65&layer=mapnik"
              className="w-full h-full grayscale-[0.4]"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-electric/30 animate-ping" style={{ width: 80, height: 80, left: -40, top: -40 }} />
                <div className="w-5 h-5 rounded-full bg-electric ring-4 ring-white shadow-glow" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_30%,rgba(0,150,255,0.4),transparent_70%)]" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center text-white">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" /> Disponibles ahora
          </span>
          <h2 className="mt-7 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02]">
            Solicite su presupuesto<br /><span className="bg-gradient-to-r from-white to-electric bg-clip-text text-transparent">en menos de 24 horas.</span>
          </h2>
          <p className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            Cuéntenos su proyecto y un técnico le contactará con una propuesta clara, cerrada y sin compromiso.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:info@diset.es" className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-electric text-white font-bold shadow-glow hover:-translate-y-0.5 transition-all">
              Solicitar Presupuesto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="tel:+34900000000" className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-white text-navy font-bold hover:-translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              900 000 000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--gradient-accent)] grid place-items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" /><path d="M5 8l7-6 7 6" /><circle cx="12" cy="15" r="3" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">DISET</span>
            </div>
            <p className="mt-5 max-w-md leading-relaxed text-white/60">
              Especialistas en trabajos verticales y limpieza en altura en Barcelona y provincia. +25 años elevando los estándares del sector.
            </p>
          </div>
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5">Servicios</h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => <li key={s.title}><a href="#servicios" className="hover:text-electric transition-colors">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>C/ Industrial, 24<br />08018 Barcelona</li>
              <li><a href="tel:+34900000000" className="hover:text-electric">900 000 000</a></li>
              <li><a href="mailto:info@diset.es" className="hover:text-electric">info@diset.es</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} DISET. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-electric">Aviso legal</a>
            <a href="#" className="hover:text-electric">Política de privacidad</a>
            <a href="#" className="hover:text-electric">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ClientsMarquee />
        <Services />
        <BeforeAfterSection />
        <Benefits />
        <VideoSection />
        <Process />
        <Testimonials />
        <Coverage />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
