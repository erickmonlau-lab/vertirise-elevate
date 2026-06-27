"use client";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "../i18n/I18nContext";
import type { Language, TranslationKey } from "../i18n/translations";

gsap.registerPlugin(ScrollTrigger);
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";

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
      {
        name: "description",
        content:
          "Especialistas en trabajos verticales en Barcelona: limpieza de cristales, fachadas, placas solares e instalación de líneas de vida. +25 años de experiencia, +4500 proyectos. Llame al 936 556 161.",
      },
      { property: "og:title", content: "DISET · Especialistas en Trabajos Verticales Barcelona" },
      {
        property: "og:description",
        content:
          "Limpieza en altura para empresas, industrias y comunidades en Barcelona y provincia. Presupuesto gratuito en 24h.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "936 556 161";
const PHONE_HREF = "tel:+34936556161";
const WA_HREF =
  "https://wa.me/34936556161?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20gratuito.";

const statsData = [
  { value: 25, suffix: "+", labelKey: "benefits.stat1.label" as const },
  { value: 4500, suffix: "+", labelKey: "benefits.stat2.label" as const },
  { value: 300, suffix: "+", labelKey: "benefits.stat3.label" as const },
  { value: 98, suffix: "%", labelKey: "benefits.stat4.label" as const },
];

const services = [
  {
    titleKey: "services.1.title" as const,
    descKey: "services.1.desc" as const,
    customIcon: iconCristales,
    color: "bg-white",
    filter: "hue-rotate(270deg) saturate(2.5)",
    clip: "none",
    objectClass: "object-contain object-center scale-95",
  },
  {
    titleKey: "services.2.title" as const,
    descKey: "services.2.desc" as const,
    customIcon: iconFachadas,
    color: "bg-white",
    filter: "hue-rotate(80deg) saturate(2.5)",
    clip: "none",
    objectClass: "object-contain object-bottom",
  },
  {
    titleKey: "services.3.title" as const,
    descKey: "services.3.desc" as const,
    customIcon: iconSolar,
    color: "bg-white",
    filter: "saturate(2.5)",
    clip: "none",
    objectClass: "object-contain object-bottom",
  },
  {
    titleKey: "services.4.title" as const,
    descKey: "services.4.desc" as const,
    customIcon: iconLineas,
    color: "bg-white",
    filter: "hue-rotate(90deg) saturate(2.5)",
    clip: "inset(0 0 11% 0)",
    objectClass: "object-contain object-bottom scale-105 origin-bottom",
  },
];

const benefitsData = [
  {
    titleKey: "benefits.1.title" as const,
    descKey: "benefits.1.desc" as const,
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.41-1.41l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0-.11 1.3z",
    color: "bg-[#e91e63]",
  },
  {
    titleKey: "benefits.2.title" as const,
    descKey: "benefits.2.desc" as const,
    icon: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
    color: "bg-[#03a9f4]",
  },
  {
    titleKey: "benefits.3.title" as const,
    descKey: "benefits.3.desc" as const,
    icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm10 16-5-5",
    color: "bg-[#cddc39]",
  },
  {
    titleKey: "benefits.4.title" as const,
    descKey: "benefits.4.desc" as const,
    icon: "M3 21h18M5 21V7l8-4v18M13 3l8 4v14M7 11h2M7 15h2M15 11h2M15 15h2",
    color: "bg-[#3f51b5]",
  },
];

const processData = [
  { n: "1", titleKey: "process.1.title" as const, descKey: "process.1.desc" as const, shape: "triangle" },
  { n: "2", titleKey: "process.2.title" as const, descKey: "process.2.desc" as const, shape: "square" },
  { n: "3", titleKey: "process.3.title" as const, descKey: "process.3.desc" as const, shape: "circle" },
];

const testimonials = [
  {
    name: "Marta Vidal",
    initials: "MV",
    role: "Administradora de Fincas",
    location: "Eixample, Barcelona",
    project: "Limpieza de fachada · Comunidad de 64 viviendas",
    quote:
      "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel.",
  },
  {
    name: "Jordi Soler",
    initials: "JS",
    role: "Facility Manager",
    location: "Grupo Industrial, Sant Andreu",
    project: "Mantenimiento cubiertas · Líneas de vida",
    quote:
      "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles.",
  },
  {
    name: "Anna Roig",
    initials: "AR",
    role: "Directora de Operaciones",
    location: "Hotel BCN, Eixample",
    project: "Limpieza de cristales · Mantenimiento trimestral",
    quote:
      "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%.",
  },
];

const successCases = [
  {
    titleKey: "cases.1.title" as const,
    typeKey: "cases.type.fachada" as const,
    locationKey: "cases.1.location" as const,
    durationKey: "cases.1.duration" as const,
    resultKey: "cases.1.result" as const,
    problemKey: "cases.1.problem" as const,
    solutionKey: "cases.1.solution" as const,
    resultDescKey: "cases.1.resultDesc" as const,
    img: fachadasImg,
    featured: true,
  },
  {
    titleKey: "cases.2.title" as const,
    typeKey: "cases.type.cristales" as const,
    locationKey: "cases.2.location" as const,
    durationKey: "cases.2.duration" as const,
    resultKey: "cases.2.result" as const,
    problemKey: "cases.2.problem" as const,
    solutionKey: "cases.2.solution" as const,
    resultDescKey: "cases.2.resultDesc" as const,
    img: cristalesImg,
    featured: false,
  },
  {
    titleKey: "cases.3.title" as const,
    typeKey: "cases.type.solares" as const,
    locationKey: "cases.3.location" as const,
    durationKey: "cases.3.duration" as const,
    resultKey: "cases.3.result" as const,
    problemKey: "cases.3.problem" as const,
    solutionKey: "cases.3.solution" as const,
    resultDescKey: "cases.3.resultDesc" as const,
    img: solarImg,
    featured: false,
  },
  {
    titleKey: "cases.4.title" as const,
    typeKey: "cases.type.lineas" as const,
    locationKey: "cases.4.location" as const,
    durationKey: "cases.4.duration" as const,
    resultKey: "cases.4.result" as const,
    problemKey: "cases.4.problem" as const,
    solutionKey: "cases.4.solution" as const,
    resultDescKey: "cases.4.resultDesc" as const,
    img: lineasImg,
    featured: false,
  },
];

const beforeAfterCases = [
  {
    labelKey: "beforeafter.case1.label" as const,
    descKey: "beforeafter.case1.desc" as const,
    before: beforeCristalesImg,
    after: afterCristalesImg,
  },
  {
    labelKey: "beforeafter.case2.label" as const,
    descKey: "beforeafter.case2.desc" as const,
    before: beforeFachadaImg,
    after: afterFachadaImg,
  },
  {
    labelKey: "beforeafter.case3.label" as const,
    descKey: "beforeafter.case3.desc" as const,
    before: beforeSolaresImg,
    after: afterSolaresImg,
  },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
];

const sectorsData = [
  {
    nameKey: "sectors.1.title" as const,
    descKey: "sectors.1.desc" as const,
    icon: "M4 21h16 M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14 M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4 M9 9h2 M13 9h2 M9 13h2 M13 13h2",
    color: "text-[#FF007F]",
  },
  {
    nameKey: "sectors.2.title" as const,
    descKey: "sectors.2.desc" as const,
    icon: "M4 21h16 M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16 M12 7l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z M9 17h6 M9 14h6",
    color: "text-[#00E5FF]",
  },
  {
    nameKey: "sectors.3.title" as const,
    descKey: "sectors.3.desc" as const,
    icon: "M2 21h20 M4 21V9l4-3 4 3v-2l4-3 4 3v12 M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5 M18 9V4h2v5",
    color: "text-[#39FF14]",
  },
];

// — Counter with count-up animation —
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {count.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}

// — Reveal Component (Optimized to run once) —
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: delay / 1000,
        ease: "power3.out",
      });
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// — Logo —
function Logo({ white }: { white: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src={logoDiset}
        alt="DISET Limpiezas Verticales"
        height={48}
        className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${white ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

// — Nav (White initially, Dark Glass on scroll) —
function Nav() {
  const { t, setLanguage, language } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#cobertura", label: t("nav.coverage") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <>
      <div className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
        <header
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 bg-white rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 border border-slate-100 ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] translate-y-0" : "shadow-lg md:translate-y-2"}`}
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            <a
              href="#top"
              onClick={() => setMobileOpen(false)}
              className="scale-90 md:scale-100 origin-left"
            >
              <Logo white={false} />
            </a>

            <div className="flex items-center gap-1 md:hidden">
              <div className="flex items-center text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider bg-slate-50 rounded-md shadow-sm border border-slate-100">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`w-9 py-2 text-center transition-colors rounded-l-md ${language === "es" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
                >
                  ES
                </button>
                <span className="w-px h-3 bg-slate-300"></span>
                <button
                  type="button"
                  onClick={() => setLanguage("ca")}
                  className={`w-9 py-2 text-center transition-colors ${language === "ca" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
                >
                  CA
                </button>
                <span className="w-px h-3 bg-slate-300"></span>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`w-9 py-2 text-center transition-colors rounded-r-md ${language === "en" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Abrir menú"
                className="flex flex-col justify-center items-center w-8 h-8 rounded-lg gap-1 transition-all hover:bg-slate-50"
              >
                <span
                  className={`block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </button>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-navy">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-electric transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 tracking-wider bg-slate-50 rounded-md shadow-sm border border-slate-100">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`w-10 py-2 text-center transition-colors rounded-l-md ${language === "es" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                ES
              </button>
              <span className="w-px h-3 bg-slate-300"></span>
              <button
                type="button"
                onClick={() => setLanguage("ca")}
                className={`w-10 py-2 text-center transition-colors ${language === "ca" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                CA
              </button>
              <span className="w-px h-3 bg-slate-300"></span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`w-10 py-2 text-center transition-colors rounded-r-md ${language === "en" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`}
              >
                EN
              </button>
            </div>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-5 h-9 rounded-full bg-electric text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(0,150,255,0.4)] hover:-translate-y-0.5 transition-all"
            >
              {t("nav.call")}
            </a>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out w-full ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="flex flex-col gap-1 border-t border-slate-100 pt-2 pb-1 mt-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 text-navy font-bold text-sm hover:text-electric transition-all rounded-md hover:bg-slate-50"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

// — Hero —
function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.85)_40%,rgba(10,22,40,0.4)_100%)]" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#040b14]/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full mt-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase animate-[fade-in_0.8s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            {t("hero.badge")}
          </div>
          <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]">
            {t("hero.title1")} <span className="text-electric">{t("hero.title2")}</span>{" "}
            {t("hero.title3")}
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fade-up_1s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]">
            {t("hero.desc")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold hover:shadow-elev hover:-translate-y-0.5 transition-all"
            >
              {t("hero.btn.quote")}
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 h-14 px-7 rounded-full bg-white text-navy font-bold shadow-soft hover:shadow-elev hover:-translate-y-0.5 transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {t("hero.btn.call")}
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
                  <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill="#0096FF">
                    <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
                  </svg>
                ))}
              </div>
              <div className="text-white font-bold">{t("trustbar.projects")}</div>
              <div>{t("trustbar.completed")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// — Trust Bar —
function TrustBar() {
  const { t } = useTranslation();
  const items = [
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", textKey: "trust.irata" as const },
    { icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", textKey: "trust.experience" as const },
    { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", textKey: "trust.communities" as const },
    { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", textKey: "trust.quote" as const },
  ];
  return (
    <div className="bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-semibold"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0096FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={item.icon} />
              </svg>
              <span>{t(item.textKey)}</span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-white/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// — Stats —
function Stats() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#0a1628] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4">
        {statsData.map((s, i) => (
          <Reveal
            key={s.labelKey}
            delay={i * 80}
            className={`text-center px-4 md:px-6 py-8 md:py-4 border-white/10 ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i < statsData.length - 1 ? "md:border-r" : ""}`}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              <AnimatedCounter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-wider leading-snug max-w-[140px] mx-auto">
              {t(s.labelKey)}
            </div>
            <div className="mt-3 w-8 h-0.5 bg-electric mx-auto rounded-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// — Sectors (Replaces Client Logos) —
function Sectors() {
  const { t } = useTranslation();
  
  // Custom colors requested by user
  const circleColors = ["bg-[#e91e63]", "bg-[#03a9f4]", "bg-[#39FF14] text-navy"];
  
  return (
    <section className="bg-[#f8fafc] pt-20 pb-24 border-y border-border overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy tracking-tight">
            {t("sectors.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectorsData.map((sector, i) => (
            <Reveal key={sector.nameKey} delay={i * 100}>
              <article className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-2 right-4 text-[100px] font-black text-slate-200 leading-none z-0 select-none">
                  0{i + 1}
                </div>
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10 ${circleColors[i]} ${i !== 2 ? 'text-white' : ''}`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={sector.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 tracking-tight relative z-10">
                  {t(sector.nameKey)}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm flex-grow relative z-10">
                  {t(sector.descKey)}
                </p>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-sm hover:text-electric transition-colors cursor-pointer w-fit relative z-10 mt-auto">
                  {t("sectors.more")}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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

// — Services —
function Services() {
  const { t } = useTranslation();
  return (
    <section id="servicios" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-electric">
              {t("services.badge")}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy tracking-tight">
              {t("services.title1")} <span className="text-electric">{t("services.title2")}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm md:text-base">
              {t("services.desc")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {services.map((s, i) => {
            return (
              <Reveal key={s.titleKey} delay={i * 100}>
                <article
                  className={`group ${s.color} rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col cursor-pointer relative`}
                >
                  <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500 origin-bottom-left">
                    <img
                      src={s.customIcon}
                      alt={t(s.titleKey as TranslationKey)}
                      className={`w-full h-full mix-blend-multiply ${s.objectClass || "object-contain object-bottom"}`}
                      style={{ filter: s.filter, clipPath: s.clip }}
                    />
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy mb-3 tracking-tight z-10">
                    {t(s.titleKey as TranslationKey)}
                  </h3>

                  <p className="text-navy/80 font-medium leading-relaxed mb-8 flex-1 z-10">
                    {t(s.descKey as TranslationKey)}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-navy font-bold text-sm z-10">
                    {t("services.more")}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// — Before/After —
function BeforeAfterSection() {
  const { t } = useTranslation();
  const [activeCase, setActiveCase] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section
      id="proyectos"
      className="py-24 lg:py-32 bg-[#0a1628] industrial-texture border-y border-white/5 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-sm font-bold tracking-[0.15em] uppercase text-electric">
            {t("beforeafter.badge")}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            {t("beforeafter.title")}
            <br />
            {t("beforeafter.title2")}
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
            {t("beforeafter.desc")}
          </p>
        </Reveal>

        <Reveal delay={80}>
          {/* Mobile */}
          <div className="flex md:hidden gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.labelKey}
                onClick={() => setActiveCase(i)}
                className={`relative shrink-0 w-28 overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40"}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.after}
                    alt={c.labelKey}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent">
                  <div className="text-white font-extrabold text-xs leading-tight">{t(c.labelKey)}</div>
                  <div className="text-white/70 text-[10px] mt-0.5 leading-tight">{t(c.descKey)}</div>
                </div>
                {activeCase === i && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-electric grid place-items-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.labelKey}
                onClick={() => setActiveCase(i)}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40 hover:shadow-soft"}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.after}
                    alt={c.labelKey}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent">
                  <div
                    className={`text-base font-extrabold ${activeCase === i ? "text-white" : "text-white/90"}`}
                  >
                    {t(c.labelKey)}
                  </div>
                  <div className="text-sm text-white/70 mt-0.5">{t(c.descKey)}</div>
                </div>
                {activeCase === i && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-electric grid place-items-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            {beforeAfterCases.map((c, i) => (
              <div
                key={`ba-${i}`}
                className={activeCase === i ? "block animate-in fade-in duration-500" : "hidden"}
              >
                <BeforeAfter before={c.before} after={c.after} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50 text-center font-semibold">
            {t("beforeafter.drag")} · {t(beforeAfterCases[activeCase].labelKey)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// — Success Cases —
function SuccessCases() {
  const { t } = useTranslation();
  const [featured, ...rest] = successCases;
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-sm font-bold tracking-[0.15em] uppercase text-electric">
            {t("cases.badge")}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            {t("cases.title")}
            <br />
            {t("cases.title2")}
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            {t("stats.2")} {t("cases.desc")}
          </p>
        </Reveal>

        <Reveal>
          <article className="group relative rounded-2xl overflow-hidden border border-border hover:border-electric/40 hover:shadow-elev transition-all duration-500 mb-6 md:mb-8">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
                <img
                  src={featured.img}
                  alt={t(featured.titleKey as any)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-electric text-white text-xs font-bold">
                    {t(featured.typeKey)}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-navy/80 text-white text-xs font-semibold backdrop-blur-sm">
                    {t(featured.locationKey as any)}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-electric" />
                  {t("cases.featured")}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">
                  {t(featured.titleKey as any)}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {t(featured.durationKey as any)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span>{t(featured.resultKey as any)}</span>
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: t("cases.problem"),
                      text: t(featured.problemKey as any),
                      color: "bg-red-50 border-red-100",
                    },
                    {
                      label: t("cases.solution"),
                      text: t(featured.solutionKey as any),
                      color: "bg-blue-50 border-blue-100",
                    },
                    {
                      label: t("cases.result"),
                      text: t(featured.resultDescKey as any),
                      color: "bg-green-50 border-green-100",
                    },
                  ].map((item) => (
                    <div key={item.label} className={`p-4 rounded-xl border ${item.color}`}>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </div>
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
            <Reveal key={c.titleKey} delay={i * 100}>
              <article className="group rounded-2xl border border-border hover:border-electric/40 hover:shadow-elev hover:-translate-y-1 transition-all duration-500 overflow-hidden bg-white h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={t(c.titleKey as any)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-electric text-white text-[10px] font-bold">
                      {t(c.typeKey as any)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-navy text-lg mb-1 group-hover:text-electric transition-colors">
                    {t(c.titleKey as any)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{t(c.locationKey as any)}</p>
                  <div className="flex gap-3 text-xs font-semibold text-navy mb-4">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {t(c.durationKey as any)}
                    </span>
                    <span className="text-electric">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="inline mr-1"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {t(c.resultKey as any)}
                    </span>
                  </div>
                  <div className="space-y-2 border-t border-border pt-4 mt-auto">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {t("cases.result")}
                    </div>
                    <p className="text-xs text-ink leading-relaxed">{t(c.resultDescKey as any)}</p>
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
// — Benefits —
function Benefits() {
  const { t } = useTranslation();
  return (
    <section
      className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden scroll-mt-20 md:scroll-mt-24"
      id="beneficios"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-20 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="relative z-10 pt-4 md:pt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-navy tracking-tight">
                {t("benefits.header")}
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                {t("benefits.subheader")}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {benefitsData.map((b, i) => (
            <Reveal
              key={b.titleKey}
              delay={i * 100}
              className="flex flex-col gap-5 p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md ${b.color}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={b.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy tracking-tight mb-2">
                  {t(b.titleKey)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(b.descKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Full-width CTA strip at the bottom */}
      <div className="w-full bg-[#0a1628] border-y border-electric py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="text-electric shrink-0">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m13 2-2 9h9l-11 11 2-9H2l11-11z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-black text-white tracking-tight">
              {t("benefits.cta.title")}
            </h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-2">
              {t("benefits.cta.desc")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-electric text-white font-bold hover:bg-electric/80 transition-colors text-sm shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" />
              </svg>
              {t("benefits.cta.wa")}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border-2 border-white text-white font-bold hover:bg-white/10 transition-colors text-sm"
            >
              {t("benefits.cta.visit")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// — Video Section —
function VideoSection() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const VIDEO_ID = "aBf0OXTJgkA";

  return (
    <section className="py-24 lg:py-32 bg-[#080f1d] overflow-hidden industrial-texture relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-electric">
              {t("video.badge") || "DISET en acción"}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              25 años resolviendo trabajos donde otros no pueden intervenir.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Nuestro equipo de técnicos certificados opera con los más altos estándares de
              seguridad en toda la provincia de Barcelona. Sin subcontratas. Sin excusas.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "25+", l: t("benefits.stat1.label") },
                { n: "+4.500", l: t("benefits.stat2.label") },
                { n: "IRATA", l: t("benefits.stat3.label") },
                { n: "24h", l: t("benefits.stat4.label") },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white/[0.04] border border-white/8 rounded-xl p-4 hover:border-electric/30 transition-colors"
                >
                  <div className="text-2xl font-extrabold text-electric">{s.n}</div>
                  <div className="text-sm text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex justify-center">
              <div
                className="relative w-full max-w-[320px] lg:max-w-[360px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,150,255,0.15)]"
                style={{ aspectRatio: "9/16" }}
              >
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
                      <div className="w-20 h-20 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform animate-pulse-glow">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="white"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        >
                          <polygon points="6 4 20 12 6 20 6 4" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
                        Ver vídeo
                      </span>
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
  const { t } = useTranslation();
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-[#eef2f6] scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-navy tracking-tight">
            {t("process.title") || "Nuestro proceso de trabajo"}
          </h2>
        </Reveal>

        <div className="relative mt-10 md:mt-20">
          {/* Horizontal Line on Desktop */}
          <div className="hidden md:block absolute top-7 left-14 right-14 border-t-2 border-dashed border-electric/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative z-10">
            {processData.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Mobile vertical line connecting steps */}
                {i !== processData.length - 1 && (
                  <div className="md:hidden absolute top-14 bottom-[-3rem] left-1/2 w-0.5 border-l-2 border-dashed border-electric/30 -translate-x-1/2 z-0" />
                )}
                
                {/* Big Number Circle */}
                <div className="w-14 h-14 rounded-full bg-electric text-white text-2xl font-black flex items-center justify-center mb-6 relative z-10 shrink-0 shadow-lg ring-8 ring-[#eef2f6]">
                  {p.n}
                </div>

                <div className="md:pr-8">
                  <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">
                    {t(p.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {t(p.descKey)}
                  </p>
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
  const { t } = useTranslation();
  const bgColors = ["bg-[#E65100]", "bg-[#0F9D58]", "bg-[#4285F4]"];

  return (
    <section className="py-24 lg:py-32 bg-[#eef2f6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16 flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-4 bg-white shadow-sm border border-slate-200 rounded-full px-4 py-2">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex text-lg font-bold tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
          </div>
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-navy tracking-tight">
              {t("testimonials.title")}
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              {t("testimonials.title2")}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <article className="flex flex-col bg-white border border-slate-200 shadow-sm rounded-[24px] p-6 lg:p-8 h-full relative hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-center mb-4 pr-10 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${bgColors[i % 3]} text-white font-medium text-xl flex items-center justify-center shrink-0`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-[17px] leading-tight truncate">
                      {item.name}
                    </div>
                    <div className="text-[13px] text-slate-500 mt-0.5">
                      {t(`testimonials.ago.${i + 1}` as any)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[2px] mb-4 relative z-10">
                  {[...Array(5)].map((_, k) => (
                    <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
                      <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
                    </svg>
                  ))}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M16.5 8L10.5 14.5L7.5 11.5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="text-[15px] leading-relaxed text-slate-600 flex-1 relative z-10">
                  {t(`testimonials.${i + 1}.text` as any)}
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
  const { t } = useTranslation();
  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column: Text & Metrics */}
        <Reveal>
          <span className="text-sm font-bold tracking-[0.15em] uppercase text-electric">
            {t("coverage.badge")}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            {t("coverage.title")}
            <br />{t("coverage.title2")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md mb-12">
            {t("coverage.desc")}
          </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              <div className="border-l-[3px] border-electric pl-5">
                <div className="text-3xl lg:text-4xl font-extrabold text-navy">+300</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">
                  {t("coverage.stat1")}
                </div>
              </div>
              <div className="border-l-[3px] border-electric pl-5">
                <div className="text-3xl lg:text-4xl font-extrabold text-navy">25+</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">
                  {t("coverage.stat2")}
                </div>
              </div>
              <div className="border-l-[3px] border-electric pl-5">
                <div className="text-3xl lg:text-4xl font-extrabold text-navy">100%</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">
                  {t("coverage.stat3")}
                </div>
              </div>
              <div className="border-l-[3px] border-electric pl-5">
                <div className="text-3xl lg:text-4xl font-extrabold text-navy">24h</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">
                  {t("coverage.stat4")}
                </div>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0096FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-navy text-sm">
                  {t("coverage.metro")}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Sede: Carrer de Cuzco, 39-41
                </div>
                <div className="text-xs text-electric font-semibold mt-1 flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
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
  const { t } = useTranslation();
  const certs = [
    {
      name: "IRATA",
      desc: t("certs.1.desc"),
      detail: t("certs.1.detail"),
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    },
    {
      name: "PRL",
      desc: t("certs.2.desc"),
      detail: t("certs.2.detail"),
      icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    },
    {
      name: t("certs.3.title"),
      desc: t("certs.3.desc"),
      detail: t("certs.3.detail"),
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
    },
    {
      name: "EN 795",
      desc: t("certs.4.desc"),
      detail: t("certs.4.detail"),
      icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
    },
    { name: "ISO", desc: t("certs.5.desc"), detail: t("certs.5.detail"), icon: "M20 6 9 17l-5-5" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-black tracking-[0.15em] uppercase text-electric">
            {t("certs.badge")}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            {t("certs.title1")}
            <br />
            {t("certs.title2")}
          </h2>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl font-medium">
            {t("certs.desc")}
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-electric text-white shadow-lg hover:-translate-y-1 transition-transform">
                <div className="shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={c.icon} />
                  </svg>
                </div>
                <div className="text-lg font-black tracking-tight">
                  {c.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={400}>
          <div className="mt-12 text-center text-white/40 text-sm font-medium">
            Todos nuestros técnicos operan bajo estos estándares
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// — Contact Form —
function ContactForm({ light = false }: { light?: boolean }) {
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();

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

  const lbl = light
    ? "block text-navy text-sm font-bold mb-1.5"
    : "block text-white/80 text-sm font-bold mb-1.5";
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
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0096FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className={`text-2xl font-extrabold mb-2 ${light ? "text-navy" : "text-white"}`}>
            {t("contact.success")}
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className={lbl}>
                {t("contact.name")} *
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                type="text"
                placeholder={t("contact.name")}
                className={inp}
              />
            </div>
            <div>
              <label htmlFor="telefono" className={lbl}>
                {t("contact.phone")} *
              </label>
              <input
                id="telefono"
                name="telefono"
                required
                type="tel"
                placeholder={t("contact.phone")}
                className={inp}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={lbl}>
              {t("contact.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              className={inp}
            />
          </div>
          <div>
            <label htmlFor="servicio" className={lbl}>
              {t("contact.service")}
            </label>
            <select
              id="servicio"
              name="servicio"
              className={sel}
              style={light ? undefined : { colorScheme: "dark" }}
            >
              <option value="">{t("contact.service.placeholder")}</option>
              <option value="cristales">{t("contact.service.cristales")}</option>
              <option value="fachadas">{t("contact.service.fachadas")}</option>
              <option value="solares">{t("contact.service.solares")}</option>
              <option value="lineas">{t("contact.service.lineas")}</option>
              <option value="otros">{t("contact.service.other")}</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className={lbl}>
              {t("contact.message")}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              placeholder={t("contact.message.placeholder")}
              className={ta}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-electric text-white font-bold text-sm sm:text-base shadow-glow hover:-translate-y-0.5 hover:shadow-elev transition-all py-4 px-4"
          >
            <span className="truncate">{t("contact.submit")}</span>
          </button>
          {!light && (
            <p className="text-white/80 text-xs text-center text-balance">
              {t("contact.privacy")}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

// — CTA —
function CTA() {
  const { t } = useTranslation();
  return (
    <section
      id="contacto"
      className="py-20 lg:py-32 relative overflow-hidden bg-[#f8fafc] scroll-mt-20 md:scroll-mt-24"
    >
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start min-w-0">
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-xs font-semibold tracking-wider uppercase text-electric">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0096FF]" />{" "}
              {t("cta.badge")}
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05] break-words">
              {t("cta.title")} <span className="text-electric">{t("cta.title2")}</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-base lg:text-lg">
              {t("cta.desc")}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 group min-w-0"
              >
                <div className="w-10 h-10 rounded-full bg-electric/10 grid place-items-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0096FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    {t("cta.phone")}
                  </div>
                  <div className="text-navy font-extrabold text-xl group-hover:text-electric transition-colors truncate">
                    {PHONE}
                  </div>
                </div>
              </a>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group min-w-0"
              >
                <div className="w-10 h-10 rounded-full bg-electric/10 grid place-items-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0096FF">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    WhatsApp
                  </div>
                  <div className="text-navy font-bold group-hover:text-electric transition-colors truncate">
                    {t("cta.wa")}
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@disetlimpiezasverticales.com"
                className="flex items-center gap-4 group min-w-0"
              >
                <div className="w-10 h-10 rounded-full bg-electric/10 grid place-items-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0096FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-navy font-bold text-[clamp(11px,3.5vw,16px)] tracking-tight group-hover:text-electric transition-colors truncate">
                    info@disetlimpiezasverticales.com
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full max-w-full min-w-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm max-w-full overflow-hidden w-full mx-auto md:max-w-[28rem] lg:max-w-none">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy mb-1 leading-tight">
                {t("cta.title")} {t("cta.title2")}
              </h3>
              <p className="text-slate-500 text-sm mb-6 text-balance">
                {t("cta.desc")}
              </p>
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
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoDiset}
                alt="Vertirise Elevate"
                className="h-10 w-auto invert brightness-0 opacity-90"
              />
            </div>
            <p className="text-slate-400 text-sm mb-2">Carrer de Cuzco, 39-41, 08030 Barcelona</p>
            <p className="text-slate-400 text-sm mb-6">info@vertirise.com</p>
            <div className="text-slate-400 text-sm">
              <p className="font-semibold text-slate-300 mb-1">{t("footer.schedule.label")}:</p>
              <p>{t("footer.schedule")}</p>
              <p className="mt-1 font-bold text-white text-lg">935 22 43 05</p>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.company")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.work")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors flex items-center gap-2">
                  {t("footer.company.cancel")}
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.legal")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.notice")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.cookies")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Zonas de Trabajo */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">
              {t("footer.zones")}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.barcelona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.maresme")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.girona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.tarragona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.lleida")}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vertirise Elevate. {t("footer.rights")}
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
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 h-12 rounded-xl bg-electric text-white font-bold flex items-center justify-center gap-2 shadow-glow active:scale-95 transition-transform"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="font-semibold">Llamar</span>
        </a>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" />
          </svg>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

function VibrantCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-[#00a8e8] py-24 md:py-32 overflow-hidden border-b-[20px] border-navy">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy tracking-tight mb-8">
          Tu seguridad en altura es nuestra prioridad. <br className="hidden md:block" />
          <span className="text-white">Adiós suciedad.</span>
        </h2>
        <p className="text-navy/90 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
          Contamos con más de 25 años de experiencia en el sector del mantenimiento y la limpieza
          vertical en Cataluña.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 px-10 h-16 rounded-full bg-navy text-white text-lg font-bold hover:bg-white hover:text-navy hover:-translate-y-1 transition-all shadow-xl"
        >
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
        <Services />
        <BeforeAfterSection />
        <Sectors />
        <Benefits />
        <Process />
        <Certifications />
        <SuccessCases />
        <Testimonials />
        <Coverage />
        <FAQ />
        <CTA />
      </main>
      {/* Footer */}
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
