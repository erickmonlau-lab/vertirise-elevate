import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTranslation } from "./I18nContext-YBdn5qPK.mjs";
import { n as require_ScrollTrigger, t as ScrollTrigger$1 } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BvDIVAH-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_ScrollTrigger = require_ScrollTrigger();
function BeforeAfter({ before, after }) {
	const containerRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const handlePointerDown = (e) => {
		dragging.current = true;
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	const handlePointerMove = (e) => {
		if (!dragging.current || !containerRef.current) return;
		if (e.pointerType === "touch") {}
		const rect = containerRef.current.getBoundingClientRect();
		const p = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
		containerRef.current.style.setProperty("--position", `${p}%`);
	};
	const handlePointerUp = (e) => {
		dragging.current = false;
		e.currentTarget.releasePointerCapture(e.pointerId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none bg-navy",
		style: { "--position": "50%" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: "Después",
				loading: "eager",
				decoding: "sync",
				className: "absolute inset-0 w-full h-full object-cover pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10",
				style: {
					transform: "translate3d(calc(var(--position) - 100%), 0, 0)",
					willChange: "transform"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: before,
					alt: "Antes",
					loading: "eager",
					decoding: "sync",
					className: "absolute inset-0 w-full h-full object-cover max-w-none",
					style: {
						transform: "translate3d(calc(100% - var(--position)), 0, 0)",
						willChange: "transform"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none",
				children: "ANTES"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none",
				children: "DESPUÉS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30 pointer-events-none",
				style: {
					left: "var(--position)",
					willChange: "left"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 w-14 h-14 -translate-y-1/2 -ml-7 bg-transparent z-40 touch-none flex items-center justify-center cursor-ew-resize",
				style: {
					left: "var(--position)",
					willChange: "left"
				},
				onPointerDown: handlePointerDown,
				onPointerMove: handlePointerMove,
				onPointerUp: handlePointerUp,
				onPointerCancel: handlePointerUp,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20 pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "#0096FF",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 6l-6 6 6 6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 6l6 6-6 6" })]
					})
				})
			})
		]
	});
}
var vertigo_facade_default = "/assets/vertigo-facade-XvGiVA1d.png";
gsapWithCSS.registerPlugin(ScrollTrigger$1);
function CinematicShowcase() {
	const { t } = useTranslation();
	const containerRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		if (!containerRef.current || !contentRef.current) return;
		gsapWithCSS.to(".parallax-bg", {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true
			},
			y: "15%",
			ease: "none"
		});
		gsapWithCSS.from(contentRef.current.children, {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 70%",
				once: true
			},
			y: 40,
			opacity: 0,
			duration: 1.2,
			stagger: .2,
			ease: "power3.out"
		});
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		className: "relative py-[200px] w-full bg-navy overflow-hidden",
		id: "cuidamos",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: vertigo_facade_default,
					alt: "Fachada de cristal",
					className: "parallax-bg absolute top-[-10%] left-0 w-full h-[120%] object-cover object-top opacity-30 mix-blend-luminosity z-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-20" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: contentRef,
			className: "relative z-30 flex flex-col items-center justify-center px-6 max-w-[800px] mx-auto text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-white/60",
							children: t("cinematic.badge")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[40px] md:text-[54px] lg:text-[64px] font-light text-white tracking-tight leading-[1.05] mb-8 drop-shadow-sm",
					children: t("cinematic.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[16px] md:text-[18px] text-white/70 font-light max-w-2xl leading-relaxed mb-12",
					children: t("cinematic.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col sm:flex-row gap-5 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacto",
						className: "group inline-flex items-center justify-center h-14 px-10 bg-electric text-white font-bold tracking-wider uppercase text-[13px] hover:bg-electric/90 transition-colors",
						children: t("cinematic.btn")
					})
				})
			]
		})]
	});
}
var hero_default = "/assets/hero-Cyy4bQVT.webp";
var service_cristales_default = "/assets/service-cristales-yrEgx9tX.webp";
var service_fachadas_default = "/assets/service-fachadas-BNsW8e9F.webp";
var service_solar_default = "/assets/service-solar-DW8u5GD4.webp";
var service_lineas_default = "/assets/service-lineas-D1tazc1p.webp";
var icon_cristales_pastel_default = "/assets/icon-cristales-pastel-M9qYp4yR.png";
var icon_fachadas_pastel_default = "/assets/icon-fachadas-pastel-CevUXHx3.png";
var icon_solar_pastel_default = "/assets/icon-solar-pastel-BaJ883wo.png";
var icon_lineas_pastel_default = "/assets/icon-lineas-pastel-D6al8Ufu.png";
var logo_diset_default = "/assets/logo-diset-CYCVq2tD.webp";
var before_cristales_default = "/assets/before-cristales-BvNxThJX.webp";
var after_cristales_default = "/assets/after-cristales-C32AHh-e.webp";
var before_fachada_default = "/assets/before-fachada-DxOPM2FW.webp";
var after_fachada_default = "/assets/after-fachada-D7wsVht7.webp";
var before_solares_default = "/assets/before-solares-BIhsAanP.webp";
var after_solares_default = "/assets/after-solares-B5nyrZ0Z.webp";
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(import_ScrollTrigger.ScrollTrigger);
var PHONE = "936 556 161";
var PHONE_HREF = "tel:+34936556161";
var WA_HREF = "https://wa.me/34936556161?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20gratuito.";
var stats = [
	{
		value: 25,
		suffix: "+",
		label: "Años liderando trabajos verticales"
	},
	{
		value: 4500,
		suffix: "+",
		label: "Proyectos completados"
	},
	{
		value: 300,
		suffix: "+",
		label: "Comunidades atendidas"
	},
	{
		value: 98,
		suffix: "%",
		label: "Clientes satisfechos"
	}
];
var services = [
	{
		title: "Limpieza de Cristales",
		desc: "Cristaleras, ventanales y escaparates en altura con acabado profesional sin marcas ni residuos.",
		customIcon: icon_cristales_pastel_default,
		theme: "white"
	},
	{
		title: "Limpieza de Fachadas",
		desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.",
		customIcon: icon_fachadas_pastel_default,
		theme: "light"
	},
	{
		title: "Limpieza de Placas Solares",
		desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.",
		customIcon: icon_solar_pastel_default,
		theme: "photo",
		img: service_solar_default
	},
	{
		title: "Líneas de Vida",
		desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.",
		customIcon: icon_lineas_pastel_default,
		theme: "white"
	}
];
var benefits = [
	{
		title: "+30",
		desc: "Años de experiencia técnica",
		icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.41-1.41l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0-.11 1.3z",
		color: "bg-[#e91e63]"
	},
	{
		title: "+10.000",
		desc: "Proyectos completados",
		icon: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
		color: "bg-[#03a9f4]"
	},
	{
		title: "+29.560",
		desc: "Horas de trabajo seguro",
		icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm10 16-5-5",
		color: "bg-[#cddc39]"
	},
	{
		title: "+2.900",
		desc: "Empresas asistidas",
		icon: "M3 21h18M5 21V7l8-4v18M13 3l8 4v14M7 11h2M7 15h2M15 11h2M15 15h2",
		color: "bg-[#3f51b5]"
	}
];
var process = [
	{
		n: "1",
		t: "Atendemos tu consulta",
		d: "Se concretará una evaluación técnica gratuita de la fachada o cubierta para poder planificar de forma específica.",
		shape: "triangle",
		color: "bg-[#e91e63]"
	},
	{
		n: "2",
		t: "Concertamos una visita",
		d: "Llámanos y un especialista vertical atenderá tu consulta de manera inmediata para coordinar el acceso.",
		shape: "square",
		color: "bg-[#e91e63]"
	},
	{
		n: "3",
		t: "Realizamos la limpieza",
		d: "Acordaremos una fecha en la que nuestros técnicos se colgarán para realizar el trabajo de limpieza o mantenimiento.",
		shape: "circle",
		color: "bg-[#e91e63]"
	}
];
var testimonials = [
	{
		name: "Marta Vidal",
		initials: "MV",
		role: "Administradora de Fincas",
		location: "Eixample, Barcelona",
		project: "Limpieza de fachada · Comunidad de 64 viviendas",
		quote: "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel."
	},
	{
		name: "Jordi Soler",
		initials: "JS",
		role: "Facility Manager",
		location: "Grupo Industrial, Sant Andreu",
		project: "Mantenimiento cubiertas · Líneas de vida",
		quote: "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles."
	},
	{
		name: "Anna Roig",
		initials: "AR",
		role: "Directora de Operaciones",
		location: "Hotel BCN, Eixample",
		project: "Limpieza de cristales · Mantenimiento trimestral",
		quote: "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%."
	}
];
var successCases = [
	{
		title: "Hotel Miramar Barcelona",
		type: "Limpieza de Fachada",
		location: "Barceloneta, Barcelona",
		duration: "5 días",
		result: "3.200 m² recuperados",
		problem: "Pérdida de imagen por acumulación de depósitos y residuos orgánicos.",
		solution: "Hidrolimpieza vertical de presión controlada sin andamios.",
		resultDesc: "Restauración completa sin interrumpir la actividad del hotel.",
		img: service_fachadas_default,
		featured: true
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
		img: service_cristales_default,
		featured: false
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
		img: service_solar_default,
		featured: false
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
		img: service_lineas_default,
		featured: false
	}
];
var beforeAfterCases = [
	{
		label: "Cristales",
		before: before_cristales_default,
		after: after_cristales_default,
		desc: "Ventanales corporativos"
	},
	{
		label: "Fachadas",
		before: before_fachada_default,
		after: after_fachada_default,
		desc: "Fachada de piedra"
	},
	{
		label: "Placas Solares",
		before: before_solares_default,
		after: after_solares_default,
		desc: "Instalación fotovoltaica"
	}
];
var sectors = [
	{
		name: "Comunidades de propietarios",
		desc: "Mantenimiento y limpiezas en altura de patios de luces, medianeras y fachadas en edificios de comunidades de vecinos, evitando costosos andamiajes.",
		icon: "M4 21h16 M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14 M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4 M9 9h2 M13 9h2 M9 13h2 M13 13h2",
		color: "text-[#FF007F]"
	},
	{
		name: "Hoteles y Hostales",
		desc: "La imagen exterior es vital. Realizamos limpiezas integrales de muros cortina, cristales y fachadas en hoteles sin interrumpir su actividad diaria comercial.",
		icon: "M4 21h16 M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16 M12 7l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z M9 17h6 M9 14h6",
		color: "text-[#00E5FF]"
	},
	{
		name: "Naves y centros logísticos",
		desc: "Limpieza especializada de cubiertas, claraboyas y estructuras industriales complejas. Aplicamos tratamientos específicos y sistemas anticaídas certificados.",
		icon: "M2 21h20 M4 21V9l4-3 4 3v-2l4-3 4 3v12 M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5 M18 9V4h2v5",
		color: "text-[#39FF14]"
	}
];
function AnimatedCounter({ to, suffix }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const animated = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !animated.current) {
				animated.current = true;
				const duration = 1600;
				const start = performance.now();
				const tick = (now) => {
					const elapsed = now - start;
					const progress = Math.min(elapsed / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					setCount(Math.floor(eased * to));
					if (progress < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .3 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [count.toLocaleString("es-ES"), suffix]
	});
}
function Reveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.from(ref.current, {
			scrollTrigger: {
				trigger: ref.current,
				start: "top 85%",
				once: true
			},
			y: 50,
			opacity: 0,
			duration: 1,
			delay: delay / 1e3,
			ease: "power3.out"
		});
	}, { scope: ref });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children
	});
}
function Logo({ white }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_diset_default,
			alt: "DISET Limpiezas Verticales",
			height: 48,
			className: `h-10 md:h-12 w-auto object-contain transition-all duration-300 ${white ? "brightness-0 invert" : ""}`
		})
	});
}
function Nav() {
	const { t, setLanguage, language } = useTranslation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
		{
			href: "#servicios",
			label: t("nav.services")
		},
		{
			href: "#proyectos",
			label: t("nav.projects")
		},
		{
			href: "#proceso",
			label: t("nav.process")
		},
		{
			href: "#cobertura",
			label: t("nav.coverage")
		},
		{
			href: "#contacto",
			label: t("nav.contact")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: `pointer-events-auto w-full max-w-6xl transition-all duration-500 bg-white rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 border border-slate-100 ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] translate-y-0" : "shadow-lg md:translate-y-2"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between w-full md:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						onClick: () => setMobileOpen(false),
						className: "scale-90 md:scale-100 origin-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { white: false })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider bg-slate-50 rounded-md shadow-sm border border-slate-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage("es"),
									className: `min-w-[40px] px-2 py-2 text-center transition-colors rounded-l-md ${language === "es" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
									children: "ES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-3 bg-slate-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage("ca"),
									className: `min-w-[40px] px-2 py-2 text-center transition-colors ${language === "ca" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
									children: "CA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-3 bg-slate-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage("en"),
									className: `min-w-[40px] px-2 py-2 text-center transition-colors rounded-r-md ${language === "en" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
									children: "EN"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMobileOpen((o) => !o),
							"aria-label": "Abrir menú",
							className: "flex flex-col justify-center items-center w-8 h-8 rounded-lg gap-1 transition-all hover:bg-slate-50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "opacity-0" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-4 h-[2px] rounded-full transition-all duration-300 bg-navy ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}` })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-6 text-sm font-bold text-navy",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-electric transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[11px] font-bold text-slate-400 tracking-wider bg-slate-50 rounded-md shadow-sm border border-slate-100",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLanguage("es"),
								className: `min-w-[44px] px-3 py-2 text-center transition-colors rounded-l-md ${language === "es" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
								children: "ES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-3 bg-slate-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLanguage("ca"),
								className: `min-w-[44px] px-3 py-2 text-center transition-colors ${language === "ca" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
								children: "CA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-3 bg-slate-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLanguage("en"),
								className: `min-w-[44px] px-3 py-2 text-center transition-colors rounded-r-md ${language === "en" ? "text-navy bg-slate-200" : "hover:text-navy active:bg-slate-200"}`,
								children: "EN"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PHONE_HREF,
						className: "inline-flex items-center gap-2 px-5 h-9 rounded-full bg-electric text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(0,150,255,0.4)] hover:-translate-y-0.5 transition-all",
						children: t("nav.call")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `md:hidden overflow-hidden transition-all duration-400 ease-in-out w-full ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1 border-t border-slate-100 pt-2 pb-1 mt-2",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							onClick: () => setMobileOpen(false),
							className: "px-2 py-2 text-navy font-bold text-sm hover:text-electric transition-all rounded-md hover:bg-slate-50",
							children: l.label
						}, l.href))
					})
				})
			]
		})
	}) });
}
function Hero() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-center overflow-hidden bg-navy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center opacity-85"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-hero" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-[220px] pb-[160px] w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-[11px] font-bold tracking-[0.2em] uppercase animate-[fade-in_0.8s_ease-out]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-electric animate-pulse" }), t("hero.badge")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-8 text-[52px] sm:text-[64px] md:text-[72px] xl:text-[88px] font-extrabold leading-[0.95] tracking-tighter text-white max-w-[1000px] animate-[fade-up_1s_cubic-bezier(.22,.61,.36,1)_both]",
						children: [
							t("hero.title1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/80 font-light",
								children: t("hero.title2")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
							" ",
							t("hero.title3")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-[20px] md:text-[24px] text-white/70 max-w-[800px] leading-relaxed font-light animate-[fade-up_1s_0.15s_cubic-bezier(.22,.61,.36,1)_both]",
						children: t("hero.desc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-wrap items-center gap-5 animate-[fade-up_1s_0.3s_cubic-bezier(.22,.61,.36,1)_both]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "group inline-flex items-center justify-center gap-3 h-14 px-8 bg-electric text-white font-bold hover:bg-electric/90 transition-colors",
							children: t("hero.btn.quote")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_HREF,
							className: "inline-flex items-center justify-center gap-3 h-14 px-8 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
							}), t("hero.btn.call")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-[96px] text-white/50 text-sm font-medium tracking-wide animate-[fade-in_1s_0.6s_both]",
						children: "Más de 4.500 proyectos ejecutados con precisión técnica."
					})
				]
			})
		})]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0",
				children: [
					{
						icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
						text: "Técnicos certificados IRATA"
					},
					{
						icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
						text: "25+ años de experiencia"
					},
					{
						icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
						text: "+300 comunidades atendidas"
					},
					{
						icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
						text: "Presupuesto en 24h"
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-ink/70 text-[13px] font-bold uppercase tracking-wider",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						className: "text-electric",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: item.icon })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text })]
				}, i))
			})
		})
	});
}
function Stats() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-[96px] md:py-[120px] grid grid-cols-2 md:grid-cols-4 gap-[64px] md:gap-8",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				className: "text-center md:text-left flex flex-col items-center md:items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[54px] md:text-[64px] font-light text-ink tracking-tighter leading-none mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
							to: s.value,
							suffix: s.suffix
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/30 mb-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14px] font-medium text-ink/60 uppercase tracking-widest leading-relaxed max-w-[200px]",
						children: t(`stats.${i + 1}.label`) || s.label
					})
				]
			}, t(`stats.${i + 1}.label`) || s.label))
		})
	});
}
function Sectors() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-slate-50 py-[160px] border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] md:text-[36px] font-light leading-tight text-navy tracking-tight",
					children: "Especialistas por sector corporativo"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16",
				children: sectors.map((sector, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex flex-col h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-8 p-5 bg-white rounded-2xl w-fit shadow-soft border border-slate-100 group-hover:shadow-elev transition-shadow duration-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "text-electric",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: sector.icon })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-ink font-bold text-[22px] mb-4 tracking-tight group-hover:text-electric transition-colors",
								children: sector.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/60 leading-relaxed mb-8 text-[15px] max-w-[340px] flex-1",
								children: sector.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-ink font-bold text-[13px] uppercase tracking-wider hover:text-electric transition-colors cursor-pointer w-fit mt-auto",
								children: [t("sectors.btn"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "group-hover:translate-x-1 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
								})]
							})
						]
					})
				}, sector.name))
			})]
		})
	});
}
function Services() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-[160px] md:py-[220px] bg-white scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24 lg:mb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex-1 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
							children: t("services.badge")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[52px] md:text-[64px] lg:text-[80px] font-light leading-[0.95] text-navy tracking-tighter",
						children: [
							t("services.title1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: t("services.title2")
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "lg:w-[420px] shrink-0 lg:pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink/60 leading-relaxed text-[18px] md:text-[20px] font-light",
						children: t("services.desc")
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 divide-y divide-slate-100 border-y border-slate-100",
				children: services.map((s, i) => {
					const prefix = `services.${i + 1}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative p-8 md:p-12 bg-white rounded-[24px] shadow-soft border border-slate-100 hover:shadow-elev hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col md:flex-row gap-8 md:gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 md:w-24 md:h-24 shrink-0 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-inner border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.customIcon,
									alt: t(`${prefix}.title`),
									className: "w-full h-full object-contain object-left"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[28px] md:text-[32px] font-bold text-navy tracking-tight leading-tight group-hover:text-electric transition-colors",
										children: t(`${prefix}.title`)
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-6 md:justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-ink/60 text-[16px] leading-relaxed max-w-[500px]",
										children: t(`${prefix}.desc`)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 font-bold text-[13px] uppercase tracking-wider text-ink group-hover:text-electric transition-colors shrink-0 md:mb-1",
										children: ["Saber más", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "group-hover:translate-x-1 transition-transform",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})]
									})]
								})]
							})]
						})
					}, s.title);
				})
			})]
		})
	});
}
function BeforeAfterSection() {
	const { t } = useTranslation();
	const [activeCase, setActiveCase] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proyectos",
		className: "py-[160px] md:py-[220px] bg-[#0a111a] scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-4xl mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-white/60",
							children: t("beforeAfter.badge")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[52px] md:text-[64px] lg:text-[80px] font-light text-white leading-[0.95] tracking-tighter",
						children: [
							t("beforeAfter.title.1"),
							" se ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "ven"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-white/60 leading-relaxed max-w-xl text-[18px] md:text-[20px] font-light",
						children: t("beforeAfter.desc")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row gap-12 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:w-1/3 flex lg:flex-col gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0",
						children: beforeAfterCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveCase(i),
							className: `relative flex items-start lg:items-center gap-6 shrink-0 w-[280px] lg:w-full border-b transition-all duration-500 text-left group pb-8 pt-2 ${activeCase === i ? "border-electric" : "border-white/10 hover:border-white/30"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `text-[13px] font-bold uppercase tracking-[0.15em] transition-colors mt-1 lg:mt-0 ${activeCase === i ? "text-electric" : "text-white/40 group-hover:text-white/80"}`,
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-[20px] lg:text-[28px] font-light tracking-tight transition-colors mb-2 ${activeCase === i ? "text-white" : "text-white/60 group-hover:text-white"}`,
									children: t(`beforeAfter.${i + 1}.label`) || c.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-[14px] leading-relaxed transition-colors ${activeCase === i ? "text-white/60" : "text-transparent h-0 overflow-hidden"}`,
									children: t(`beforeAfter.${i + 1}.desc`) || c.desc
								})]
							})]
						}, t(`beforeAfter.${i + 1}.label`) || c.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:w-2/3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] md:aspect-[16/10] relative bg-white/5 border border-white/10 shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
								before: beforeAfterCases[activeCase].before,
								after: beforeAfterCases[activeCase].after
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between items-center text-white/40 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estado Previo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Intervención DISET" })]
						})]
					})]
				})
			})]
		})
	});
}
function SuccessCases() {
	const { t } = useTranslation();
	const [featured, ...rest] = successCases;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-[160px] bg-white border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
							children: t("cases.badge")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[52px] md:text-[64px] lg:text-[80px] font-light leading-[0.95] text-navy tracking-tighter",
						children: [
							t("cases.title.1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "precisión"
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col md:flex-row gap-0 border border-slate-100 hover:shadow-soft transition-shadow duration-500 mb-8 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: featured.img,
							alt: featured.title,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4 flex gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 bg-white/90 text-navy text-[10px] font-bold uppercase tracking-widest backdrop-blur-md",
								children: featured.type
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:w-1/2 p-10 md:p-14 flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-3 text-electric text-[10px] font-bold tracking-[0.2em] uppercase mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-px bg-electric" }), "Caso Destacado"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[28px] md:text-[36px] font-bold text-navy mb-4 tracking-tight",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-5 text-[13px] text-ink/60 font-bold uppercase tracking-wider mb-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "12",
											r: "10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 6v6l4 2" })]
									}), featured.duration]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 12l2 2 4-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "12",
											r: "10"
										})]
									}), featured.result]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-6",
								children: [
									{
										label: "Problema",
										text: featured.problem
									},
									{
										label: "Solución",
										text: featured.solution
									},
									{
										label: "Resultado",
										text: featured.resultDesc
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pl-4 border-l-2 border-electric/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-bold uppercase tracking-widest text-electric mb-1.5",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[15px] text-ink/70 leading-relaxed",
										children: item.text
									})]
								}, item.label))
							})
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8",
					children: rest.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group border border-slate-100 hover:shadow-soft transition-all duration-500 overflow-hidden bg-white h-full flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[16/10] overflow-hidden relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: t(`cases.${i + 1}.title`) || c.title,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 flex gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 bg-white/90 text-navy text-[10px] font-bold uppercase tracking-widest backdrop-blur-md",
										children: t(`cases.${i + 1}.type`) || c.type
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-8 flex-1 flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-navy text-[20px] tracking-tight mb-2 group-hover:text-electric transition-colors",
										children: t(`cases.${i + 1}.title`) || c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-ink/50 uppercase tracking-widest font-bold mb-6",
										children: c.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 pt-6 border-t border-slate-100 mt-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4 text-[12px] font-bold text-navy uppercase tracking-wider",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
													width: "14",
													height: "14",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "12",
														cy: "12",
														r: "10"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 6v6l4 2" })]
												}), c.duration]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-electric",
												children: t(`cases.${i + 1}.result`) || c.result
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] text-ink/70 leading-relaxed",
											children: t(`cases.${i + 1}.resultDesc`) || c.resultDesc
										}) })]
									})
								]
							})]
						})
					}, t(`cases.${i + 1}.title`) || c.title))
				})
			]
		})
	});
}
function Benefits() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-[160px] md:py-[220px] bg-white border-b border-slate-100",
		id: "beneficios",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row gap-16 lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 lg:sticky top-32 h-fit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
								children: "Garantía Corporativa"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[52px] md:text-[64px] lg:text-[80px] font-light leading-[0.95] text-navy tracking-tighter",
							children: [
								"La referencia técnica en ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: "trabajos verticales"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-ink/60 text-[18px] md:text-[20px] leading-relaxed max-w-lg font-light mb-16",
							children: "Los equipos y protocolos utilizados en nuestras intervenciones son de máxima seguridad, garantizando resultados impecables en todos nuestros proyectos, sin alterar la actividad de sus instalaciones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-10 md:p-12 bg-slate-50 border border-slate-100 relative overflow-hidden group max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-1 bg-electric" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[28px] md:text-[32px] font-bold text-navy tracking-tight mb-4 leading-tight",
									children: "¿Necesita una intervención técnica en altura?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink/60 text-[16px] leading-relaxed mb-10 max-w-[400px]",
									children: "Solicite una visita técnica gratuita. Nuestro equipo especializado contactará con usted en menos de 24 horas."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WA_HREF,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "20",
											height: "20",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
										}), "WhatsApp"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contacto",
										className: "inline-flex items-center justify-center gap-3 h-14 px-8 bg-electric text-white font-bold hover:bg-electric/90 transition-colors",
										children: "Presupuesto"
									})]
								})
							]
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 flex flex-col gap-6 lg:gap-8 pt-8 lg:pt-0",
					children: benefits.map((b, i) => {
						const prefix = `benefits.${i + 1}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col md:flex-row items-start gap-8 p-10 lg:p-14 border border-slate-100 bg-white hover:bg-slate-50 transition-colors duration-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 flex items-center justify-center shrink-0 mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "40",
										height: "40",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "text-electric",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: b.icon })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors",
									children: t(`${prefix}.title`)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light",
									children: t(`${prefix}.desc`)
								})] })]
							})
						}, b.title);
					})
				})]
			})
		})
	});
}
function VideoSection() {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const VIDEO_ID = "aBf0OXTJgkA";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-[160px] bg-slate-50 border-b border-border relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10 relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
							children: "DISET en acción"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[32px] md:text-[40px] lg:text-[48px] font-light leading-[1.1] text-navy tracking-tight mb-6",
						children: [
							"Resolviendo trabajos donde ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "otros no llegan"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[16px] text-ink/70 leading-relaxed font-light mb-12",
						children: "Nuestro equipo de técnicos certificados opera con los más altos estándares de seguridad en toda la provincia de Barcelona. Sin subcontratas. Sin excusas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-6",
						children: [
							{
								n: "25+",
								l: "Años de trayectoria"
							},
							{
								n: "4.5K+",
								l: "Proyectos completados"
							},
							{
								n: "IRATA",
								l: "Técnicos certificados"
							},
							{
								n: "100%",
								l: "Compromiso de seguridad"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-slate-200 p-6 flex flex-col justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[24px] font-light text-navy",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] font-bold text-ink/50 uppercase tracking-wide mt-2",
								children: s.l
							})]
						}, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center lg:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full max-w-[380px] rounded-none overflow-hidden border border-slate-200 shadow-elev group",
							style: { aspectRatio: "9/16" },
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								className: "absolute inset-0 w-full h-full",
								src: `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`,
								title: "DISET Limpiezas Verticales — equipo en acción",
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
								allowFullScreen: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setPlaying(true),
								className: "absolute inset-0 w-full h-full cursor-pointer bg-navy",
								"aria-label": "Reproducir vídeo DISET en acción",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
										alt: "DISET técnicos en trabajos verticales",
										className: "w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1200ms]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-20 bg-electric flex items-center justify-center text-white hover:bg-white hover:text-electric transition-colors shadow-[0_0_40px_rgba(0,150,255,0.4)] animate-pulse-glow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "24",
												height: "24",
												viewBox: "0 0 24 24",
												fill: "currentColor",
												stroke: "currentColor",
												strokeWidth: "1",
												strokeLinejoin: "round",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "6 4 20 12 6 20 6 4" })
											})
										})
									})
								]
							})
						})
					})
				})]
			})
		})
	});
}
function Process() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proceso",
		className: "py-[160px] md:py-[220px] bg-slate-50 border-b border-border scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-24 md:mb-32 text-center md:text-left max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center md:justify-start gap-4 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
						children: t("process.badge") || "Metodología"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[52px] md:text-[64px] lg:text-[80px] font-light leading-[0.95] text-navy tracking-tighter",
					children: ["Nuestro proceso de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "trabajo"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-20 lg:gap-32",
				children: process.map((p, i) => {
					const prefix = `process.${i + 1}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "relative group flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:block absolute -top-12 -left-8 text-[180px] lg:text-[240px] font-bold text-slate-200/50 leading-none select-none -z-10 group-hover:text-electric/5 transition-colors duration-700 tracking-tighter",
								children: ["0", p.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:hidden text-[64px] font-bold text-slate-200 leading-none select-none -mb-4 tracking-tighter",
								children: ["0", p.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 md:ml-[120px] lg:ml-[200px] z-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[32px] md:text-[40px] lg:text-[48px] font-bold text-navy tracking-tight mb-6 group-hover:text-electric transition-colors",
									children: t(`${prefix}.title`) || p.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink/60 text-[18px] md:text-[20px] leading-relaxed max-w-2xl font-light",
									children: t(`${prefix}.desc`) || p.d
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block w-[1px] h-full bg-slate-200 absolute right-[20%] top-0 bottom-0" })
						]
					}, p.n);
				})
			})]
		})
	});
}
function Testimonials() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-[160px] bg-white border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-4 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
								children: "Garantía de Calidad"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-10 text-[52px] md:text-[64px] lg:text-[80px] font-light text-navy leading-[0.95] tracking-tighter",
						children: [
							t("testimonials.title.1"),
							" en nuestra ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "precisión"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-4 border border-slate-100 rounded-full px-6 py-3 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "#0096FF",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-4 bg-slate-200" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-bold text-navy",
								children: "9.8/10 en satisfacción (Google Reviews)"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-8",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-50 border border-slate-100 p-10 h-full flex flex-col group hover:shadow-soft hover:border-electric/30 transition-all duration-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex gap-1",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "#0096FF",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[15px] leading-relaxed text-ink/70 mb-8 flex-1",
								children: [
									"\"",
									" + (t(`testimonials.${i + 1}.quote` as TranslationKey) || t.quote) + ",
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mt-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full text-electric font-bold text-[14px]",
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-[14px] text-navy",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[12px] text-ink/50 uppercase tracking-widest",
									children: t.location
								})] })]
							})
						]
					})
				}, i))
			})]
		})
	});
}
function Coverage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cobertura",
		className: "py-[160px] bg-white scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
							children: "Cobertura Operativa"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[52px] md:text-[64px] lg:text-[80px] font-light text-navy leading-[0.95] tracking-tighter mb-10",
						children: [
							"Toda Barcelona",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"y ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "provincia"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[16px] md:text-[18px] text-ink/70 leading-relaxed font-light max-w-md mb-16",
						children: "Operamos en toda Cataluña con equipos propios y vehículos adaptados para intervenciones de alta exigencia técnica."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-y-12 gap-x-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-electric/30 pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[32px] font-light text-navy mb-2",
									children: "+300"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-bold tracking-wide uppercase text-ink/50",
									children: [
										"Comunidades",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"atendidas"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-electric/30 pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[32px] font-light text-navy mb-2",
									children: "25+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-bold tracking-wide uppercase text-ink/50",
									children: [
										"Años de",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"experiencia"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-electric/30 pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[32px] font-light text-navy mb-2",
									children: "100%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-bold tracking-wide uppercase text-ink/50",
									children: [
										"Personal",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"propio"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-electric/30 pl-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[32px] font-light text-navy mb-2",
									children: "24h"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-bold tracking-wide uppercase text-ink/50",
									children: [
										"Respuesta",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"rápida"
									]
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full aspect-square lg:aspect-auto lg:h-[640px] bg-slate-50 border border-slate-200 overflow-hidden group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Ubicación DISET",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359223363065!2d2.1814110766324225!3d41.41750007129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a321200df13b%3A0xc319138ce3ed8966!2sCarrer%20de%20Cuzco%2C%2039%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses",
							className: "w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000",
							style: { border: 0 },
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 border border-slate-200 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-navy text-[14px] mb-1",
									children: "Central Operativa DISET"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[13px] text-ink/60 mb-3",
									children: "Carrer de Cuzco, 39-41, Barcelona"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-electric font-bold text-[13px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
									}), PHONE]
								})
							]
						})]
					})
				})]
			})
		})
	});
}
function Certifications() {
	const { t } = useTranslation();
	const certs = [
		{
			name: "IRATA",
			desc: t("certs.1.desc"),
			detail: t("certs.1.detail"),
			icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
		},
		{
			name: "PRL",
			desc: t("certs.2.desc"),
			detail: t("certs.2.detail"),
			icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		},
		{
			name: t("certs.3.title"),
			desc: t("certs.3.desc"),
			detail: t("certs.3.detail"),
			icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
		},
		{
			name: "EN 795",
			desc: t("certs.4.desc"),
			detail: t("certs.4.detail"),
			icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
		},
		{
			name: "ISO",
			desc: t("certs.5.desc"),
			detail: t("certs.5.detail"),
			icon: "M20 6 9 17l-5-5"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-[160px] bg-slate-50 relative overflow-hidden border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60",
							children: t("certs.badge")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[32px] md:text-[40px] lg:text-[48px] font-light text-navy leading-[1.1] tracking-tight",
						children: [
							"Cumplimiento normativo y ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "seguridad integral"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] text-ink/60 max-w-sm font-medium leading-relaxed",
					children: t("certs.desc")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
				children: certs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-8 border border-slate-200 hover:border-electric/30 hover:shadow-soft transition-all duration-300 h-full flex flex-col group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "#0096FF",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: c.icon })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[16px] font-bold text-navy tracking-tight",
									children: c.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] text-navy font-bold mb-3",
								children: t(`beforeAfter.${i + 1}.desc`) || c.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] text-ink/60 leading-relaxed flex-1",
								children: c.detail
							})
						]
					})
				}, c.name))
			})]
		})
	});
}
function ContactForm({ light = false }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const body = `Nombre: ${data.get("nombre")}%0ATeléfono: ${data.get("telefono")}%0AEmail: ${data.get("email")}%0AServicio: ${data.get("servicio")}%0AMensaje: ${data.get("mensaje")}`;
		window.location.href = `mailto:info@disetlimpiezasverticales.com?subject=Solicitud%20de%20Presupuesto%20Gratuito&body=${body}`;
		setSent(true);
	};
	const lbl = light ? "block text-navy text-[11px] font-bold uppercase tracking-widest mb-3" : "block text-white/80 text-[11px] font-bold uppercase tracking-widest mb-3";
	const inp = light ? "w-full py-4 px-6 bg-transparent border-b border-slate-200 text-ink placeholder-ink/30 text-[15px] focus:outline-none focus:border-electric transition-colors rounded-none" : "w-full py-4 px-6 bg-white/5 border border-white/10 text-white placeholder-white/30 text-[15px] focus:outline-none focus:border-electric transition-colors rounded-none";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-full bg-electric/15 flex items-center justify-center mx-auto mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "#0096FF",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: `text-[24px] font-light mb-2 ${light ? "text-navy" : "text-white"}`,
				children: [
					"Solicitud ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "enviada"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: light ? "text-ink/60" : "text-white/60",
				children: "Un técnico se pondrá en contacto en las próximas 24 horas."
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "nombre",
					className: lbl,
					children: "Nombre *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "nombre",
					name: "nombre",
					required: true,
					type: "text",
					placeholder: "Su nombre",
					className: inp
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "telefono",
					className: lbl,
					children: "Teléfono *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "telefono",
					name: "telefono",
					required: true,
					type: "tel",
					placeholder: "Su teléfono",
					className: inp
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "email",
					className: lbl,
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "email",
					name: "email",
					type: "email",
					placeholder: "su@email.com",
					className: inp
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "servicio",
					className: lbl,
					children: "Servicio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "servicio",
					name: "servicio",
					className: light ? "w-full py-4 px-6 bg-transparent border-b border-slate-200 text-ink text-[15px] focus:outline-none focus:border-electric transition-colors appearance-none rounded-none" : "w-full py-4 px-6 bg-white/5 border border-white/10 text-white text-[15px] focus:outline-none focus:border-electric transition-colors appearance-none rounded-none",
					style: light ? void 0 : { colorScheme: "dark" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Seleccione un servicio…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Limpieza de Cristales",
							children: "Limpieza de Cristales"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Limpieza de Fachadas",
							children: "Limpieza de Fachadas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Limpieza de Placas Solares",
							children: "Limpieza de Placas Solares"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Instalación de Líneas de Vida",
							children: "Instalación de Líneas de Vida"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Otros trabajos verticales",
							children: "Otros trabajos verticales"
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "mensaje",
					className: lbl,
					children: "Mensaje"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "mensaje",
					name: "mensaje",
					rows: 3,
					placeholder: "Describa brevemente su proyecto…",
					className: light ? "w-full px-6 py-4 bg-transparent border-b border-slate-200 text-ink placeholder-ink/30 text-[15px] focus:outline-none focus:border-electric transition-colors resize-none rounded-none" : "w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 text-[15px] focus:outline-none focus:border-electric transition-colors resize-none rounded-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full h-16 bg-electric text-white font-bold tracking-wider uppercase text-[13px] hover:bg-electric/90 transition-colors flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Solicitar Presupuesto" })
				}), !light && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/40 text-[11px] uppercase tracking-widest text-center mt-4",
					children: "Sin compromiso · Respuesta en 24h"
				})]
			})
		]
	}) });
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacto",
		className: "py-[160px] relative overflow-hidden bg-navy scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-start min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "min-w-0 pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-electric/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold tracking-[0.2em] uppercase text-white/60",
								children: "Contacto Comercial"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[40px] md:text-[54px] lg:text-[64px] font-light text-white leading-[1.05] tracking-tight mb-8",
							children: [
								"Solicite una ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: "propuesta técnica"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16px] md:text-[18px] text-white/60 leading-relaxed font-light mb-16 max-w-lg",
							children: "Un técnico especializado analizará su caso y le presentará una solución a medida, sin compromisos ni costes ocultos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PHONE_HREF,
									className: "group flex items-center gap-6 p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-electric/30 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 bg-white border border-slate-200 flex items-center justify-center text-electric shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/50 font-bold uppercase tracking-widest mb-1",
										children: "Llámenos directamente"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[20px] font-bold text-white tracking-tight group-hover:text-electric transition-colors",
										children: PHONE
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WA_HREF,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center gap-6 p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#25D366]/50 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 bg-[#25D366] flex items-center justify-center text-white shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/50 font-bold uppercase tracking-widest mb-1",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[16px] font-bold text-white tracking-tight group-hover:text-[#25D366] transition-colors",
										children: "Escríbanos ahora"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:info@disetlimpiezasverticales.com",
									className: "group flex items-center gap-6 p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-electric/30 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 bg-white/10 flex items-center justify-center text-electric shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "22,6 12,13 2,6" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/50 font-bold uppercase tracking-widest mb-1",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[16px] font-bold text-white tracking-tight group-hover:text-electric transition-colors",
										children: "info@disetlimpiezasverticales.com"
									})] })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "w-full max-w-full min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-10 sm:p-14 border border-slate-100 max-w-full overflow-hidden w-full mx-auto shadow-elev relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-1 bg-electric" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[28px] font-bold text-navy mb-2 tracking-tight",
								children: "Datos del proyecto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/60 text-[14px] mb-10",
								children: "Complete el formulario y le responderemos en 24h."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { light: true })
						]
					})
				})]
			})
		})]
	});
}
function Footer() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 mb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4 lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_diset_default,
								alt: "Vertirise Elevate",
								className: "h-8 w-auto invert brightness-0 opacity-100"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/60 text-[14px] leading-relaxed mb-8 max-w-sm",
							children: "Especialistas en trabajos verticales, mantenimiento integral y soluciones en altura para edificios y estructuras de gran complejidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-[14px] text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "10",
											r: "3"
										})]
									}), "Carrer de Cuzco, 39-41, 08030 Barcelona"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "22,6 12,13 2,6" })]
									}), "info@disetlimpiezasverticales.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
									}), "935 22 43 05"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-8 lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6",
							children: t("nav.process")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-4 text-[14px] text-white/80 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Presentación"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Trabaja con nosotros"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Metodología"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Certificaciones"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-4 text-[14px] text-white/80 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Aviso Legal"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Política de Cookies"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Política de Privacidad"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-electric transition-colors",
									children: "Política de devoluciones"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6",
							children: "Zonas de Trabajo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-4 text-[14px] text-white/80 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza en Barcelona" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza en Maresme" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza en Girona" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza en Tarragona" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza en Lleida" })
							]
						})] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-white/40 text-[13px] font-medium tracking-wide",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" DISET Trabajos Verticales. ",
						t("footer.rights")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
						})
					})]
				})]
			})]
		})
	});
}
function StickyMobileCTA() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: PHONE_HREF,
				className: "flex-1 h-12 rounded-xl bg-electric text-white font-bold flex items-center justify-center gap-2 shadow-glow active:scale-95 transition-transform",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Llamar"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: WA_HREF,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex-1 h-12 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "WhatsApp"
				})]
			})]
		})
	});
}
function VibrantCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-navy py-[120px] overflow-hidden border-b border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-electric/5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center z-10 flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[52px] md:text-[64px] lg:text-[80px] font-light text-white tracking-tighter mb-8 max-w-5xl leading-[0.95]",
					children: [
						"Tu seguridad en altura es nuestra prioridad. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: "Soluciones sin límites."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/60 text-[16px] md:text-[18px] mb-12 max-w-2xl leading-relaxed font-light",
					children: "Contamos con más de 25 años de experiencia en el sector del mantenimiento y la limpieza vertical de alta complejidad en Cataluña."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PHONE_HREF,
					className: "group flex items-center justify-center gap-4 bg-white text-navy font-bold h-14 px-8 tracking-wide text-[13px] uppercase hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pide tu propuesta técnica" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "group-hover:translate-x-1 transition-transform",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
					})]
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sectors, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessCases, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicShowcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VibrantCTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coverage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMobileCTA, {})
		]
	});
}
//#endregion
export { Index as component };
