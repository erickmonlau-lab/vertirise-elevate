import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CinematicShowcase } from "@/components/CinematicShowcase";

import heroImg from "@/assets/hero.webp";
import cristalesImg from "@/assets/service-cristales.webp";
import fachadasImg from "@/assets/service-fachadas.webp";
import solarImg from "@/assets/service-solar.webp";
import lineasImg from "@/assets/service-lineas.webp";

import iconCristales from "@/assets/icon-cristales-pastel.png";
import iconFachadas from "@/assets/icon-fachadas-pastel.png";
import iconSolar from "@/assets/icon-solar-pastel.png";
import iconLineas from "@/assets/icon-lineas-pastel.png";
import logoDiset from "@/assets/logo-diset.webp";

import beforeCristalesImg from "@/assets/before-cristales.webp";
import afterCristalesImg from "@/assets/after-cristales.webp";
import beforeFachadaImg from "@/assets/before-fachada.webp";
import afterFachadaImg from "@/assets/after-fachada.webp";
import beforeSolaresImg from "@/assets/before-solares.webp";
import afterSolaresImg from "@/assets/after-solares.webp";

export const Route = createFileRoute("/")({
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
const WA_HREF = "https://wa.me/34936556161?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20gratuito.";

const stats = [
  { value: 25, suffix: "+", label: "Años liderando trabajos verticales" },
  { value: 4500, suffix: "+", label: "Proyectos completados" },
  { value: 300, suffix: "+", label: "Comunidades atendidas" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
];

const services = [
  { title: "Limpieza de Cristales", desc: "Cristaleras, ventanales y escaparates en altura con acabado profesional sin marcas ni residuos.", img: cristalesImg, customIcon: iconCristales, color: "bg-[#ffafcc]" },
  { title: "Limpieza de Fachadas", desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.", img: fachadasImg, customIcon: iconFachadas, color: "bg-[#a2d2ff]" },
  { title: "Limpieza de Placas Solares", desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.", img: solarImg, customIcon: iconSolar, color: "bg-[#fdf0d5]" },
  { title: "Líneas de Vida", desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.", img: lineasImg, customIcon: iconLineas, color: "bg-[#81b29a]" },
];

const benefits = [
  { title: "Personal certificado", desc: "Técnicos IRATA y trabajos en altura RD 2177/2004.", icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { title: "Seguridad homologada", desc: "Equipos EPI certificados y protocolos auditados.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" },
  { title: "Rapidez de ejecución", desc: "Movilización en 48h y obras coordinadas al detalle.", icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z" },
  { title: "Cobertura Barcelona", desc: "Servicio en toda la ciudad y provincia de Barcelona.", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  { title: "Garantía de calidad", desc: "Resultado garantizado por escrito en cada proyecto.", icon: "M20 6 9 17l-5-5" },
  { title: "Presupuestos rápidos", desc: "Valoración técnica y oferta en menos de 24 horas.", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" },
];

const process = [
  { n: "01", t: "Contacto", d: "Recopilamos los datos y requisitos técnicos de su proyecto.", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" },
  { n: "02", t: "Inspección", d: "Evaluamos accesos, anclajes y riesgos estructurales in situ.", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  { n: "03", t: "Presupuesto", d: "Entregamos valoración cerrada y planificación detallada.", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
  { n: "04", t: "Ejecución", d: "Intervención del equipo técnico y entrega con garantía.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" },
];

const testimonials = [
  {
    name: "Marta Vidal",
    initials: "MV",
    role: "Administradora de Fincas",
    location: "Eixample, Barcelona",
    project: "Limpieza de fachada · Comunidad de 64 viviendas",
    quote: "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel.",
  },
  {
    name: "Jordi Soler",
    initials: "JS",
    role: "Facility Manager",
    location: "Grupo Industrial, Sant Andreu",
    project: "Mantenimiento cubiertas · Líneas de vida",
    quote: "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles.",
  },
  {
    name: "Anna Roig",
    initials: "AR",
    role: "Directora de Operaciones",
    location: "Hotel BCN, Eixample",
    project: "Limpieza de cristales · Mantenimiento trimestral",
    quote: "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%.",
  },
];

const successCases = [
  {
    title: "Hotel Miramar Barcelona",
    type: "Limpieza de Fachada",
    location: "Barceloneta, Barcelona",
    duration: "5 días",
    result: "3.200 m² recuperados",
    problem: "Pérdida de imagen por acumulación de depósitos y residuos orgánicos.",
    solution: "Hidrolimpieza vertical de presión controlada sin andamios.",
    resultDesc: "Restauración completa sin interrumpir la actividad del hotel.",
    img: fachadasImg,
    featured: true,
  },
  {
    title: "Comunidad Sant Gervasi",
    type: "Limpieza de Cristales",
    location: "Sant Gervasi, Barcelona",
    duration: "2 días",
    result: "280 m² de cristal",
    problem: "Residuos de cal y obra en cristalería a gran altura.",
    solution: "Acceso por cuerdas con sistema de limpieza en seco.",
    resultDesc: "Acabado impecable sin marcas en tiempo récord.",
    img: cristalesImg,
    featured: false,
  },
  {
    title: "Nave Industrial Zona Franca",
    type: "Placas Solares",
    location: "Zona Franca, Barcelona",
    duration: "1 día",
    result: "+28% eficiencia",
    problem: "Pérdida de rendimiento por suciedad de 14 meses.",
    solution: "Limpieza con agua osmotizada y cepillado fotovoltaico.",
    resultDesc: "Recuperación del 28% de eficiencia energética demostrada.",
    img: solarImg,
    featured: false,
  },
  {
    title: "Torre Corporativa Diagonal",
    type: "Líneas de Vida",
    location: "Diagonal, Barcelona",
    duration: "3 días",
    result: "Certificación EN 795",
    problem: "Ausencia de sistema anticaídas para el mantenimiento.",
    solution: "Instalación perimetral homologada con anclajes.",
    resultDesc: "Edificio operativo de forma segura para mantenimientos.",
    img: lineasImg,
    featured: false,
  },
];

const beforeAfterCases = [
  { label: "Cristales", before: beforeCristalesImg, after: afterCristalesImg, desc: "Ventanales corporativos" },
  { label: "Fachadas", before: beforeFachadaImg, after: afterFachadaImg, desc: "Fachada de piedra" },
  { label: "Placas Solares", before: beforeSolaresImg, after: afterSolaresImg, desc: "Instalación fotovoltaica" },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
];

const sectors = [
  { name: "Comunidades", icon: "M4 21h16 M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14 M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4 M9 9h2 M13 9h2 M9 13h2 M13 13h2" },
  { name: "Oficinas", icon: "M8 21V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18 M4 21h16 M10 6h4 M10 10h4 M10 14h4 M10 18h4" },
  { name: "Hoteles", icon: "M4 21h16 M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16 M12 7l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z M9 17h6 M9 14h6" },
  { name: "Fachadas de vidrio", icon: "M4 4h16v16H4z M4 9h16 M4 14h16 M4 19h16 M9 4v16 M14 4v16 M19 4v16 M6 4l12 12 M14 4l6 6" },
  { name: "Centros comerciales", icon: "M3 21h18 M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M10 14h4 M10 18h4" },
  { name: "Naves industriales", icon: "M2 21h20 M4 21V9l4-3 4 3v-2l4-3 4 3v12 M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5 M18 9V4h2v5" },
];

// — Counter with count-up animation —
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{count.toLocaleString("es-ES")}{suffix}</span>;
}

// — Logo —
function Logo({ white }: { white: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src={logoDiset}
        alt="DISET Limpiezas Verticales"
        height={48}
        className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${white ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}

// — Nav (White initially, Dark Glass on scroll) —
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
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
        <header className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 bg-white rounded-2xl md:rounded-full px-5 md:px-8 py-3.5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-100 ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] translate-y-0" : "shadow-lg md:translate-y-2"}`}>
          
          <div className="flex items-center justify-between">
            <a href="#top" onClick={() => setMobileOpen(false)}>
              <Logo white={false} />
            </a>
            
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Abrir menú"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-1.5 transition-all hover:bg-slate-50"
            >
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-navy">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-electric transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider">
              <button className="text-navy transition-colors">ES</button>
              <span className="text-slate-200">|</span>
              <button className="hover:text-navy transition-colors">CA</button>
              <span className="text-slate-200">|</span>
              <button className="hover:text-navy transition-colors">EN</button>
            </div>
            
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-5 h-10 rounded-full bg-electric text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(0,150,255,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Llamar
            </a>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <nav className="flex flex-col gap-2 border-t border-slate-100 pt-4 pb-2">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 text-navy font-bold text-base hover:text-electric transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-2 py-4 mt-2 border-t border-slate-50 text-sm font-bold text-slate-400">
                <button className="text-navy">ES</button>
                <span className="text-slate-200">|</span>
                <button className="hover:text-navy">CA</button>
                <span className="text-slate-200">|</span>
                <button className="hover:text-navy">EN</button>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

// — Hero —
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
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.85)_40%,rgba(10,22,40,0.4)_100%)]" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#040b14]/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full mt-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase animate-[fade-in_0.8s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            25+ años de experiencia · Barcelona
          </div>
          <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]">
            Especialistas en <span className="text-electric">trabajos verticales</span> y limpieza en altura en Barcelona
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fade-up_1s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]">
            Limpieza de cristales, fachadas, placas solares e instalación de líneas de vida para empresas, industrias y comunidades.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <a href="#contacto" className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold hover:shadow-elev hover:-translate-y-0.5 transition-all">
              Solicitar Presupuesto
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
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, k) => (
                  <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill="#0096FF"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
                ))}
              </div>
              <div className="text-white font-bold">+4.500 proyectos</div>
              <div>completados con éxito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// — Trust Bar —
function TrustBar() {
  const items = [
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", text: "Técnicos certificados IRATA" },
    { icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", text: "25+ años de experiencia" },
    { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", text: "+300 comunidades atendidas" },
    { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", text: "Presupuesto en 24h" },
  ];
  return (
    <div className="bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-semibold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              <span>{item.text}</span>
              {i < items.length - 1 && <span className="hidden md:block w-px h-4 bg-white/20 ml-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// — Stats —
function Stats() {
  return (
    <section className="bg-[#0a1628] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className={`text-center px-4 md:px-6 py-8 md:py-4 border-white/10 ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i < stats.length - 1 ? "md:border-r" : ""}`}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              <AnimatedCounter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-wider leading-snug max-w-[140px] mx-auto">{s.label}</div>
            <div className="mt-3 w-8 h-0.5 bg-electric mx-auto rounded-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// — Sectors (Replaces Client Logos) —
function Sectors() {
  return (
    <section className="bg-mist pt-10 pb-16 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-electric text-sm md:text-base font-extrabold tracking-widest uppercase mb-3 block">Experiencia en los entornos más exigentes</span>
          <div className="w-12 h-1 bg-electric mx-auto rounded-full opacity-60" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={i * 50} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white border border-border shadow-sm grid place-items-center mb-4 group-hover:border-electric/50 group-hover:shadow-soft transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy group-hover:text-electric transition-colors">
                  <path d={sector.icon} />
                </svg>
              </div>
              <h3 className="text-navy font-bold text-base tracking-wide leading-tight group-hover:text-electric transition-colors">{sector.name}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// — Services —
function Services() {
  return (
    <section id="servicios" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Servicios Especializados</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy tracking-tight">
              Soluciones integrales, <span className="text-electric">en altura</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm md:text-base">
              Toda la capacidad técnica de un único proveedor para el mantenimiento integral de su edificio.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className={`group ${s.color} rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden relative`}>
                
                <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-6 origin-bottom-left">
                  <img src={s.customIcon} alt={s.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-navy mb-3 tracking-tight z-10">
                  {s.title}
                </h3>
                
                <p className="text-navy/80 font-medium leading-relaxed mb-8 flex-1 z-10">
                  {s.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-navy font-bold text-sm z-10">
                  Más información
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



// — Before/After —
function BeforeAfterSection() {
  const [activeCase, setActiveCase] = useState(0);
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-[#0a1628] industrial-texture border-y border-white/5 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Antes / Después</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            Resultados que se<br />ven, a primera vista.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
            Deslice el control para comparar el estado de cada superficie antes y después de nuestra intervención.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {/* Mobile */}
          <div className="flex md:hidden gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
            {beforeAfterCases.map((c, i) => (
              <button key={c.label} onClick={() => setActiveCase(i)} className={`relative shrink-0 w-28 overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40"}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={c.after} alt={c.label} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent">
                  <div className="text-white font-extrabold text-xs leading-tight">{c.label}</div>
                  <div className="text-white/70 text-[10px] mt-0.5 leading-tight">{c.desc}</div>
                </div>
                {activeCase === i && <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-electric grid place-items-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></div>}
              </button>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
            {beforeAfterCases.map((c, i) => (
              <button key={c.label} onClick={() => setActiveCase(i)} className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40 hover:shadow-soft"}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.after} alt={c.label} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent">
                  <div className={`text-base font-extrabold ${activeCase === i ? "text-white" : "text-white/90"}`}>{c.label}</div>
                  <div className="text-sm text-white/70 mt-0.5">{c.desc}</div>
                </div>
                {activeCase === i && <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-electric grid place-items-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></div>}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <BeforeAfter before={beforeAfterCases[activeCase].before} after={beforeAfterCases[activeCase].after} />
          <p className="mt-6 text-sm text-white/50 text-center font-semibold">
            Arrastre el control deslizante para comparar · {beforeAfterCases[activeCase].label}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// — Success Cases —
function SuccessCases() {
  const [featured, ...rest] = successCases;
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Casos reales</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Proyectos ejecutados<br />con resultados reales.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Más de 4.500 intervenciones técnicas completadas. Cada proyecto, una solución a medida.
          </p>
        </Reveal>

        <Reveal>
          <article className="group relative rounded-2xl overflow-hidden border border-border hover:border-electric/40 hover:shadow-elev transition-all duration-500 mb-6 md:mb-8">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
                <img src={featured.img} alt={featured.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-electric text-white text-xs font-bold">{featured.type}</span>
                  <span className="px-3 py-1 rounded-full bg-navy/80 text-white text-xs font-semibold backdrop-blur-sm">{featured.location}</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-electric" />
                  Caso Destacado
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">{featured.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>{featured.duration}</span>
                  <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>{featured.result}</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Problema", text: featured.problem, color: "bg-red-50 border-red-100" },
                    { label: "Solución", text: featured.solution, color: "bg-blue-50 border-blue-100" },
                    { label: "Resultado", text: featured.resultDesc, color: "bg-green-50 border-green-100" },
                  ].map(item => (
                    <div key={item.label} className={`p-4 rounded-xl border ${item.color}`}>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                      <p className="text-sm text-ink leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="group rounded-2xl border border-border hover:border-electric/40 hover:shadow-elev hover:-translate-y-1 transition-all duration-500 overflow-hidden bg-white h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-electric text-white text-[10px] font-bold">{c.type}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-navy text-lg mb-1 group-hover:text-electric transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.location}</p>
                  <div className="flex gap-3 text-xs font-semibold text-navy mb-4">
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>{c.duration}</span>
                    <span className="text-electric">{c.result}</span>
                  </div>
                  <div className="space-y-2 border-t border-border pt-4 mt-auto">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Resultado</div>
                    <p className="text-xs text-ink leading-relaxed">{c.resultDesc}</p>
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

// — Mid CTA —
function MidCTA() {
  return (
    <section className="py-14 bg-[#0a1628] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">¿Necesitas una intervención en altura?</div>
          <div className="text-white text-2xl md:text-3xl font-extrabold text-balance">Solicita una visita técnica gratuita.</div>
          <div className="text-white/80 text-sm mt-3 text-balance">Sin compromiso · Respuesta garantizada en menos de&nbsp;24h</div>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z"/></svg>
            WhatsApp
          </a>
          <a href="#contacto" className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-electric text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow">
            Solicitar visita
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// — Benefits —
function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-[#02040a] border-y border-white/5 relative overflow-hidden" id="beneficios">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14 relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Por qué DISET</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white tracking-tight">
            La referencia técnica<br />en trabajos en altura.
          </h2>
        </div>

        {/* Mobile: Horizontal Snap Scroll. Desktop: Bento Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div 
              key={b.title} 
              className="snap-center shrink-0 w-[85vw] sm:w-[300px] lg:w-auto group relative p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-electric/40 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/10 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 text-white grid place-items-center group-hover:bg-electric/20 group-hover:border-electric/50 group-hover:text-electric transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,150,255,0.3)] mb-8">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-electric transition-colors duration-300 tracking-tight mb-4">
                  {b.title}
                </h3>
                <p className="text-lg text-white/60 leading-relaxed font-medium">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="mt-4 flex justify-center gap-2 lg:hidden opacity-50">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-glow">
             <path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>
           </svg>
           <span className="text-sm font-semibold text-white uppercase tracking-widest">Desliza</span>
        </div>
      </div>
    </section>
  );
}

// — Video Section —
function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const VIDEO_ID = "aBf0OXTJgkA";

  return (
    <section className="py-24 lg:py-32 bg-[#080f1d] overflow-hidden industrial-texture relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">DISET en acción</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              25 años resolviendo trabajos donde otros no pueden intervenir.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Nuestro equipo de técnicos certificados opera con los más altos estándares de seguridad en toda la provincia de Barcelona. Sin subcontratas. Sin excusas.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "25+", l: "Años de experiencia" },
                { n: "+4.500", l: "Proyectos completados" },
                { n: "IRATA", l: "Técnicos certificados" },
                { n: "24h", l: "Respuesta garantizada" },
              ].map((s) => (
                <div key={s.l} className="bg-white/[0.04] border border-white/8 rounded-xl p-4 hover:border-electric/30 transition-colors">
                  <div className="text-2xl font-extrabold text-electric">{s.n}</div>
                  <div className="text-sm text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px] lg:max-w-[360px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,150,255,0.15)]" style={{ aspectRatio: '9/16' }}>
                {playing ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="DISET Limpiezas Verticales — equipo en acción"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full group cursor-pointer" aria-label="Reproducir vídeo DISET en acción">
                    <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`} alt="DISET técnicos en trabajos verticales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-20 h-20 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform animate-pulse-glow">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"><polygon points="6 4 20 12 6 20 6 4" /></svg>
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

// — Process (Linear Flow) —
function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Proceso</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Un método claro,<br />de principio a fin.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[44px] left-6 right-6 h-px bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="bg-mist border border-border rounded-xl p-6 hover:border-electric/30 hover:shadow-soft transition-all flex flex-col group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-electric/50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-electric">
                      <path d={p.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">Paso {p.n}</span>
                </div>
                <h3 className="text-lg font-extrabold text-navy mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// — Testimonials —
function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-12 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, k) => (
                <svg key={k} width="22" height="22" viewBox="0 0 24 24" fill="#0096FF"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
              ))}
            </div>
            <div className="text-2xl font-black text-white">★★★★★ 4.9/5</div>
            <p className="text-white/70 text-sm">Basado en clientes reales de toda la provincia de Barcelona</p>
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            Lo que dicen<br />nuestros clientes.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="flex flex-col bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-electric/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="flex gap-1 text-electric mb-5">
                  {[...Array(5)].map((_, k) => <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>)}
                </div>
                <p className="text-base leading-relaxed text-white/90 flex-1 italic">"{t.quote}"</p>
                <div className="mt-5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 inline-block self-start">
                  <span className="text-electric text-xs font-bold">{t.project}</span>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white font-bold flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                    <div className="text-xs text-white/50">{t.location}</div>
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

// — Coverage (Google Maps) —
function Coverage() {
  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left column: Text & Metrics */}
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Cobertura</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Toda Barcelona<br />y provincia.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md mb-12">
            Operamos en toda la provincia con equipos propios y vehículos preparados para intervenciones rápidas. Sin subcontratas.
          </p>
          
          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            <div className="border-l-[3px] border-electric pl-5">
              <div className="text-3xl lg:text-4xl font-extrabold text-navy">+300</div>
              <div className="text-sm font-semibold text-muted-foreground mt-1">Comunidades<br/>atendidas</div>
            </div>
            <div className="border-l-[3px] border-electric pl-5">
              <div className="text-3xl lg:text-4xl font-extrabold text-navy">25+</div>
              <div className="text-sm font-semibold text-muted-foreground mt-1">Años de<br/>experiencia</div>
            </div>
            <div className="border-l-[3px] border-electric pl-5">
              <div className="text-3xl lg:text-4xl font-extrabold text-navy">100%</div>
              <div className="text-sm font-semibold text-muted-foreground mt-1">Personal propio<br/>y certificado</div>
            </div>
            <div className="border-l-[3px] border-electric pl-5">
              <div className="text-3xl lg:text-4xl font-extrabold text-navy">24h</div>
              <div className="text-sm font-semibold text-muted-foreground mt-1">Respuesta rápida<br/>garantizada</div>
            </div>
          </div>
        </Reveal>

        {/* Right column: Google Maps */}
        <Reveal delay={120}>
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-elev border border-border group">
            <iframe
              title="Ubicación DISET — Carrer de Cuzco 39-41, Barcelona"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359223363065!2d2.1814110766324225!3d41.41750007129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a321200df13b%3A0xc319138ce3ed8966!2sCarrer%20de%20Cuzco%2C%2039%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
              className="w-full h-full saturate-50 group-hover:saturate-100 transition-all duration-1000"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-border shadow-soft flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-mist border border-border grid place-items-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="font-bold text-navy text-sm">Cobertura en toda Barcelona y provincia</div>
                <div className="text-xs text-muted-foreground mt-0.5">Sede: Carrer de Cuzco, 39-41</div>
                <div className="text-xs text-electric font-semibold mt-1 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                  {PHONE}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/5 rounded-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// — Certifications (High Contrast, Solid Cards) —
function Certifications() {
  const certs = [
    { name: "IRATA", desc: "Industrial Rope Access Trade Association", detail: "Formación continua en acceso por cuerdas de nivel internacional", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" },
    { name: "PRL", desc: "Prevención de Riesgos Laborales", detail: "Cumplimiento total de la normativa española de seguridad laboral", icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
    { name: "Seguro RC", desc: "Responsabilidad Civil", detail: "Cobertura de responsabilidad civil para todos los trabajos ejecutados", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
    { name: "EN 795", desc: "Normativa Líneas de Vida", detail: "Instalaciones anticaídas certificadas según norma europea EN 795", icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z" },
    { name: "ISO", desc: "Calidad y Gestión", detail: "Protocolos de calidad documentados y auditados externamente", icon: "M20 6 9 17l-5-5" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] industrial-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Certificaciones</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-[1.05]">
            Técnicos certificados<br />y máxima seguridad.
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto leading-relaxed">
            Nuestro cliente compra seguridad antes que limpieza. Por eso invertimos en certificaciones y formación continua.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="h-full">
              <div className="p-6 rounded-xl bg-white/[0.06] border border-white/15 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 grid place-items-center shrink-0 group-hover:bg-electric/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon} />
                    </svg>
                  </div>
                  <div className="text-xl font-black text-white">{c.name}</div>
                </div>
                <div className="text-sm text-white/70 font-semibold mb-2">{c.desc}</div>
                <div className="text-sm text-white/50 leading-relaxed flex-1">{c.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// — Contact Form —
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

  const lbl = light ? "block text-navy text-sm font-bold mb-1.5" : "block text-white/80 text-sm font-bold mb-1.5";
  const inp = light
    ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all"
    : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all";
  const sel = light
    ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all appearance-none"
    : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all appearance-none";
  const ta = light
    ? "w-full px-4 py-3 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all resize-none"
    : "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all resize-none";

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
          <button type="submit" className="w-full rounded-xl bg-electric text-white font-bold text-sm sm:text-base shadow-glow hover:-translate-y-0.5 hover:shadow-elev transition-all py-4 px-4">
            <span className="truncate">Solicitar Presupuesto</span>
          </button>
          {!light && <p className="text-white/80 text-xs text-center text-balance">Sin compromiso · Respuesta en 24h</p>}
        </form>
      )}
    </div>
  );
}

// — CTA —
function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-32 relative overflow-hidden bg-[#0a1628] scroll-mt-20 md:scroll-mt-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/60 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start min-w-0">
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-xs font-semibold tracking-wider uppercase text-electric">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0096FF]" /> Respuesta en menos de 24h
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] break-words">
              Solicite su <span className="text-electric">presupuesto.</span>
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed text-base lg:text-lg">
              Un técnico especializado revisará su caso y le enviará una propuesta cerrada, sin costes ocultos ni compromisos.
            </p>

            <div className="mt-10 space-y-4">
              <a href={PHONE_HREF} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft min-w-0">
                <div className="w-12 h-12 rounded-xl bg-electric grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Llámenos directamente</div>
                  <div className="text-white font-extrabold text-xl group-hover:text-electric transition-colors truncate">{PHONE}</div>
                  <div className="text-white/40 text-xs mt-0.5">Lun – Vie · 08:00 – 19:00</div>
                </div>
                <svg className="ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>

              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all group shadow-soft min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z"/></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">WhatsApp</div>
                  <div className="text-white font-bold group-hover:text-[#25D366] transition-colors truncate">Escríbanos ahora</div>
                </div>
                <svg className="ml-auto text-white/30 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>

              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/40 text-sm whitespace-nowrap">o escríbanos</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <a href="mailto:info@disetlimpiezasverticales.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold text-[clamp(11px,3.5vw,16px)] tracking-tight group-hover:text-electric transition-colors truncate">info@disetlimpiezasverticales.com</div>
                </div>
                <svg className="ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full max-w-full min-w-0">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-elev max-w-full overflow-hidden w-full mx-auto md:max-w-[28rem] lg:max-w-none">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy mb-1 leading-tight">Solicitar presupuesto</h3>
              <p className="text-slate-500 text-sm mb-6 text-balance">Sin compromiso · Respuesta en 24h</p>
              <ContactForm light />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// — Footer —
function Footer() {
  return (
    <footer className="bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Scattered background icons for premium effect */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-[0.03] rotate-12 pointer-events-none">
        <img src={iconLineas} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-40 w-32 h-32 opacity-[0.03] -rotate-12 pointer-events-none">
        <img src={iconCristales} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-40 right-1/4 w-24 h-24 opacity-[0.03] rotate-45 pointer-events-none">
        <img src={iconFachadas} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoDiset} alt="Vertirise Elevate" className="h-10 w-auto invert brightness-0 opacity-90" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Carrer de Cuzco, 39-41, 08030 Barcelona</p>
            <p className="text-slate-400 text-sm mb-6">info@vertirise.com</p>
            <div className="text-slate-400 text-sm">
              <p className="font-semibold text-slate-300 mb-1">Horario:</p>
              <p>L-V de 8h a 18h</p>
              <p className="mt-1 font-bold text-white text-lg">935 22 43 05</p>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-electric transition-colors">Presentación</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Trabaja con nosotros</a></li>
              <li><a href="#" className="hover:text-electric transition-colors flex items-center gap-2">Política de cancelación, reembolso y devolución</a></li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Políticas</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-electric transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Zonas de Trabajo */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Trabajamos en toda Cataluña</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-electric"></div>Limpieza en Barcelona</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-electric"></div>Limpieza en Maresme</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-electric"></div>Limpieza en Girona</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-electric"></div>Limpieza en Tarragona</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-electric"></div>Limpieza en Lleida</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vertirise Elevate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// — Sticky Mobile CTA —
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
      <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
        <a href={PHONE_HREF} className="flex-1 h-12 rounded-xl bg-electric text-white font-bold flex items-center justify-center gap-2 shadow-glow active:scale-95 transition-transform">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
          <span className="font-semibold">Llamar</span>
        </a>
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z"/></svg>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

function VibrantCTA() {
  return (
    <section className="relative bg-[#00a8e8] py-24 md:py-32 overflow-hidden border-b-[20px] border-navy">
      {/* Floating scattered background icons */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] opacity-[0.15] -rotate-12 pointer-events-none mix-blend-overlay">
        <img src={iconCristales} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] opacity-[0.15] rotate-45 pointer-events-none mix-blend-overlay">
        <img src={iconLineas} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 left-1/2 w-[250px] h-[250px] opacity-[0.15] rotate-12 pointer-events-none mix-blend-overlay">
        <img src={iconFachadas} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 right-1/4 w-[200px] h-[200px] opacity-[0.15] -rotate-45 pointer-events-none mix-blend-overlay">
        <img src={iconSolar} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy tracking-tight mb-8">
          Tu seguridad en altura es nuestra prioridad. <br className="hidden md:block"/><span className="text-white">Adiós suciedad.</span>
        </h2>
        <p className="text-navy/90 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
          Contamos con más de 25 años de experiencia en el sector del mantenimiento y la limpieza vertical en Cataluña.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-3 px-10 h-16 rounded-full bg-navy text-white text-lg font-bold hover:bg-white hover:text-navy hover:-translate-y-1 transition-all shadow-xl">
          Pide tu presupuesto
        </a>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Sectors />
        <Services />
        <BeforeAfterSection />
        <SuccessCases />
        <MidCTA />
        <Benefits />
        <VibrantCTA />
        <VideoSection />
        <Process />
        <Testimonials />
        <Coverage />
        <Certifications />
        <CTA />
      </main>
      {/* Footer */}
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
