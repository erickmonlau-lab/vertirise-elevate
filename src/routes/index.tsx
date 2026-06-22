import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { BeforeAfter } from "@/components/BeforeAfter";

import heroImg from "@/assets/hero.webp";
import cristalesImg from "@/assets/service-cristales.webp";
import fachadasImg from "@/assets/service-fachadas.webp";
import solarImg from "@/assets/service-solar.webp";
import lineasImg from "@/assets/service-lineas.webp";
import logoDiset from "@/assets/logo-diset.webp";

import beforeCristalesImg from "@/assets/before-cristales.webp";
import afterCristalesImg from "@/assets/after-cristales.webp";
import beforeFachadaImg from "@/assets/before-fachada.webp";
import afterFachadaImg from "@/assets/after-fachada.webp";
import beforeSolaresImg from "@/assets/before-solares.webp";
import afterSolaresImg from "@/assets/after-solares.webp";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "DISET · Trabajos Verticales y Limpieza en Altura en Barcelona" },
      { name: "description", content: "Especialistas en trabajos verticales en Barcelona: limpieza de cristales, fachadas, placas solares e instalación de líneas de vida. +25 años de experiencia, +4500 proyectos. Llame al 936 556 161." },
      { property: "og:title", content: "DISET · Especialistas en Trabajos Verticales Barcelona" },
      { property: "og:description", content: "Limpieza en altura para empresas, industrias y comunidades en Barcelona y provincia. Presupuesto gratuito en 24h." },
    ],
  }),
  component: Index,
});

const PHONE = "936 556 161";
const PHONE_HREF = "tel:+34936556161";

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

const beforeAfterCases = [
  {
    label: "Cristales",
    before: beforeCristalesImg,
    after: afterCristalesImg,
    desc: "Ventanales corporativos",
  },
  {
    label: "Fachadas",
    before: beforeFachadaImg,
    after: afterFachadaImg,
    desc: "Fachada de piedra",
  },
  {
    label: "Placas Solares",
    before: beforeSolaresImg,
    after: afterSolaresImg,
    desc: "Instalación fotovoltaica",
  },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
];

function Logo({ white = false }: { white?: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src={logoDiset}
        alt="DISET Limpiezas Verticales"
        height={44}
        className={`h-11 w-auto object-contain transition-all duration-300 ${white ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#cobertura", label: "Cobertura" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || mobileOpen ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-18 md:h-20 flex items-center justify-between gap-4">
          <a href="#top" onClick={() => setMobileOpen(false)}>
            <Logo white={!scrolled && !mobileOpen} />
          </a>

          {/* Desktop nav */}
          <nav className={`hidden md:flex items-center gap-9 text-sm font-semibold ${scrolled ? "text-ink" : "text-white"}`}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-electric transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 pl-3.5 pr-4 h-10 md:h-11 rounded-full bg-electric text-white text-sm font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              </span>
              <span className="hidden sm:inline">Llamar gratis</span>
              <span className="sm:hidden">Llamar</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Abrir menú"
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-1.5 transition-all ${scrolled || mobileOpen ? "bg-mist" : "bg-white/15 backdrop-blur-sm"}`}
            >
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? "max-h-80 border-t border-border shadow-soft" : "max-h-0"}`}>
          <nav className="flex flex-col bg-white px-5 py-4 gap-1">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-navy font-semibold text-base hover:bg-mist hover:text-electric transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona"
          width={1920} height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center scale-105"
        />
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

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-3 animate-[fade-up_1s_0.25s_cubic-bezier(0.22,1,0.36,1)_both]">
            {["Presupuesto gratuito", "Técnicos certificados", "Cobertura Barcelona y provincia"].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-1.5 text-sm text-white/90 font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <a href="#contacto" className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all">
              Solicitar Presupuesto Gratuito
              <span className="w-7 h-7 rounded-full bg-white/20 grid place-items-center group-hover:translate-x-1 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-3 h-14 px-7 rounded-full bg-white text-navy font-bold shadow-soft hover:shadow-elev hover:-translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              Llamar Ahora
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-white/70 text-sm animate-[fade-in_1s_0.6s_both]">
            <div className="flex -space-x-2">
              {heroAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Operario DISET ${i + 1}`}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full border-2 border-navy object-cover"
                />
              ))}
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
                  <h3 className="text-3xl font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-7 inline-flex items-center gap-2 text-electric font-bold text-base group-hover:gap-3 transition-all">
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
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="proyectos" className="py-28 lg:py-36 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Antes / Después</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Resultados que se<br />ven, a primera vista.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Deslice el control para comparar el estado de cada superficie antes y después de nuestra intervención.
          </p>
        </Reveal>

        {/* Case selector tabs — mobile horizontal scroll, desktop grid */}
        <Reveal delay={80}>
          {/* Mobile: horizontal scroll row */}
          <div className="flex md:hidden gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveCase(i)}
                className={`relative shrink-0 w-28 overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${
                  activeCase === i
                    ? "border-electric shadow-glow scale-[1.02]"
                    : "border-border hover:border-electric/40"
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={c.after} alt={c.label} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${ activeCase === i ? "brightness-100" : "brightness-75" }`} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent">
                  <div className="text-white font-extrabold text-xs leading-tight">{c.label}</div>
                  <div className="text-white/70 text-[10px] mt-0.5 leading-tight">{c.desc}</div>
                </div>
                {activeCase === i && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-electric grid place-items-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveCase(i)}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${
                  activeCase === i
                    ? "border-electric shadow-glow scale-[1.02]"
                    : "border-border hover:border-electric/40 hover:shadow-soft"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.after} alt={c.label} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${ activeCase === i ? "brightness-100" : "brightness-75" }`} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent">
                  <div className={`text-base font-extrabold ${activeCase === i ? "text-white" : "text-white/90"}`}>{c.label}</div>
                  <div className="text-sm text-white/70 mt-0.5">{c.desc}</div>
                </div>
                {activeCase === i && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-electric grid place-items-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <BeforeAfter
            before={beforeAfterCases[activeCase].before}
            after={beforeAfterCases[activeCase].after}
          />
          <p className="mt-6 text-sm text-muted-foreground text-center font-semibold">
            Arrastre el control deslizante para comparar · {beforeAfterCases[activeCase].label}
          </p>
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
  const [playing, setPlaying] = useState(false);
  const VIDEO_ID = "aBf0OXTJgkA";

  return (
    <section className="py-28 lg:py-36 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <Reveal>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">DISET en acción</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              Profesionales que trabajan donde otros no llegan.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              Nuestro equipo de técnicos certificados en trabajos verticales opera con los más altos estándares de seguridad en toda la provincia de Barcelona.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "+25", l: "Años de experiencia" },
                { n: "+4.500", l: "Proyectos completados" },
                { n: "IRATA", l: "Técnicos certificados" },
                { n: "24h", l: "Respuesta garantizada" },
              ].map((s) => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-electric">{s.n}</div>
                  <div className="text-sm text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Vertical video column */}
          <Reveal delay={120}>
            <div className="flex justify-center">
              {/* Container sized for a 9:16 vertical video, max height constrained */}
              <div className="relative w-full max-w-[320px] lg:max-w-[360px] rounded-2xl overflow-hidden shadow-elev" style={{ aspectRatio: '9/16' }}>
                {playing ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="DISET Limpiezas Verticales — equipo en acción"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                    aria-label="Reproducir vídeo DISET en acción"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                      alt="DISET técnicos en trabajos verticales"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-20 h-20 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round">
                          <polygon points="6 4 20 12 6 20 6 4" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">Ver vídeo</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
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
                <div className="relative pb-2">
                  <div className="w-20 h-20 rounded-2xl bg-mist border border-border grid place-items-center text-electric font-extrabold text-2xl relative z-10">
                    {p.n}
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-navy">{p.t}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{p.d}</p>
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
        <Reveal className="mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, k) => (
                <svg key={k} width="20" height="20" viewBox="0 0 24 24" fill="#0096FF"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
              ))}
            </div>
            <span className="text-sm font-bold text-electric">+4.500 proyectos satisfechos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Lo que dicen<br />nuestros clientes.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="flex flex-col bg-white rounded-2xl p-8 border border-border hover:shadow-elev hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="flex gap-1 text-electric mb-5">
                  {[...Array(5)].map((_, k) => (
                    <svg key={k} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
                  ))}
                </div>
                {/* Large decorative quote */}
                <div className="text-6xl leading-none font-bold mb-3" style={{ color: '#0096FF', opacity: 0.25 }} aria-hidden>❝</div>
                <p className="text-lg leading-relaxed text-ink flex-1">{t.quote}</p>
                <div className="mt-8 pt-5 border-t border-border">
                  <div className="font-extrabold text-navy">{t.name}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{t.role}</div>
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
          {/* Address & hours */}
          <div className="mt-10 p-6 rounded-2xl bg-mist border border-border space-y-4">
            <div className="flex items-start gap-3">
              <svg className="text-electric mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <div>
                <div className="font-extrabold text-navy text-sm">Dirección</div>
                <div className="text-muted-foreground text-sm">Carrer de Cuzco, 39-41<br />08030 Barcelona</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="text-electric mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <div>
                <div className="font-extrabold text-navy text-sm">Horario de atención</div>
                <div className="text-muted-foreground text-sm">Lunes a Viernes: 08:00 – 19:00</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="text-electric mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              <div>
                <div className="font-extrabold text-navy text-sm">Teléfono</div>
                <a href={PHONE_HREF} className="text-electric font-bold text-sm hover:underline">{PHONE}</a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-elev bg-mist">
            <iframe
              title="Ubicación DISET — Carrer de Cuzco 39-41, Barcelona"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359223363065!2d2.1814110766324225!3d41.41750007129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a321200df13b%3A0xc319138ce3ed8966!2sCarrer%20de%20Cuzco%2C%2039%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
              className="w-full h-full grayscale-[0.2]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm({ light = false }: { light?: boolean }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const telefono = data.get("telefono") as string;
    const email = data.get("email") as string;
    const servicio = data.get("servicio") as string;
    const mensaje = data.get("mensaje") as string;

    const body = `Nombre: ${nombre}%0ATel%C3%A9fono: ${telefono}%0AEmail: ${email}%0AServicio: ${servicio}%0AMensaje: ${mensaje}`;
    window.location.href = `mailto:info@disetlimpiezasverticales.com?subject=Solicitud%20de%20Presupuesto%20Gratuito&body=${body}`;
    setSent(true);
  };

  const lbl = light ? "block text-navy text-sm font-semibold mb-1.5" : "block text-white/80 text-sm font-semibold mb-1.5";
  const inp = light
    ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric transition-all"
    : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all";
  const sel = light
    ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink text-sm focus:outline-none focus:border-electric transition-all appearance-none"
    : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all appearance-none";
  const ta = light
    ? "w-full px-4 py-3 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric transition-all resize-none"
    : "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all resize-none";

  return (
    <div>
      {sent ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-electric/15 grid place-items-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <h3 className={`text-2xl font-extrabold mb-2 ${light ? "text-navy" : "text-white"}`}>¡Solicitud enviada!</h3>
          <p className={light ? "text-muted-foreground" : "text-white/80"}>Un técnico le contactará en menos de 24 horas.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className={lbl}>Nombre *</label>
              <input id="nombre" name="nombre" required type="text" placeholder="Su nombre" className={inp} />
            </div>
            <div>
              <label htmlFor="telefono" className={lbl}>Teléfono *</label>
              <input id="telefono" name="telefono" required type="tel" placeholder="Su teléfono" className={inp} />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={lbl}>Email</label>
            <input id="email" name="email" type="email" placeholder="su@email.com" className={inp} />
          </div>
          <div>
            <label htmlFor="servicio" className={lbl}>Servicio</label>
            <select id="servicio" name="servicio" className={sel} style={light ? undefined : { colorScheme: "dark" }}>
              <option value="">Seleccione un servicio…</option>
              <option value="Limpieza de Cristales">Limpieza de Cristales</option>
              <option value="Limpieza de Fachadas">Limpieza de Fachadas</option>
              <option value="Limpieza de Placas Solares">Limpieza de Placas Solares</option>
              <option value="Instalación de Líneas de Vida">Instalación de Líneas de Vida</option>
              <option value="Otros trabajos verticales">Otros trabajos verticales</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className={lbl}>Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={3} placeholder="Describa brevemente su proyecto…" className={ta} />
          </div>
          <button type="submit" className="w-full rounded-xl bg-electric text-white font-bold shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 py-3.5">
            Solicitar Presupuesto Gratuito
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
          {!light && <p className="text-white/50 text-xs text-center">Sin compromiso · Respuesta en menos de 24 horas</p>}
        </form>
      )}
    </div>
  );
}

function CTA() {

  return (
    <section id="contacto" className="py-20 lg:py-32 relative overflow-hidden bg-[#0a1628]">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/60 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: headline + contact info */}
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-xs font-semibold tracking-wider uppercase text-electric">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" /> Respuesta en menos de 24h
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] break-words">
              Solicite su presupuesto <span className="text-electric">gratuito.</span>
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed text-base lg:text-lg">
              Un técnico especializado revisará su caso y le enviará una propuesta cerrada, sin costes ocultos ni compromisos.
            </p>

            {/* Contact options */}
            <div className="mt-10 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric grid place-items-center shrink-0 shadow-glow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">Llámenos directamente</div>
                  <div className="text-white font-extrabold text-xl group-hover:text-electric transition-colors">{PHONE}</div>
                  <div className="text-white/40 text-xs mt-0.5">Lun – Vie · 08:00 – 19:00</div>
                </div>
                <svg className="ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/40 text-sm">o escríbanos</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <a
                href="mailto:info@disetlimpiezasverticales.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold text-[13px] sm:text-base tracking-tight group-hover:text-electric transition-colors truncate">info@disetlimpiezasverticales.com</div>
                </div>
                <svg className="ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120} className="w-full max-w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-elev max-w-full overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy mb-1 leading-tight">Solicitar presupuesto gratuito</h3>
              <p className="text-muted-foreground text-sm mb-6">Sin compromiso · Respuesta en menos de 24 horas</p>
              <ContactForm light />
            </div>
          </Reveal>

        </div>
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
            <Logo white />
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
              <li>Carrer de Cuzco, 39-41<br />08030 Barcelona</li>
              <li className="text-white/50 text-xs">Lun – Vie · 08:00 – 19:00</li>
              <li><a href={PHONE_HREF} className="hover:text-electric font-semibold">{PHONE}</a></li>
              <li><a href="mailto:info@disetlimpiezasverticales.com" className="hover:text-electric">info@disetlimpiezasverticales.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} DISET Limpiezas Verticales. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-electric">Aviso legal</a>
            <a href="#" className="hover:text-electric">Privacidad</a>
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
