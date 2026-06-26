import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqCg4zrn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.style.transitionDelay = `${delay}ms`;
					e.target.classList.add("is-visible");
					obs.unobserve(e.target);
				}
			});
		}, {
			threshold: .05,
			rootMargin: "0px 0px 0px 0px"
		});
		obs.observe(el);
		return () => obs.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${className}`,
		children
	});
}
function BeforeAfter({ before, after }) {
	const containerRef = (0, import_react.useRef)(null);
	const beforeImgRef = (0, import_react.useRef)(null);
	const dividerRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const move = (0, import_react.useCallback)((clientX) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const p = Math.max(2, Math.min(98, (clientX - rect.left) / rect.width * 100));
		if (beforeImgRef.current) beforeImgRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
		if (dividerRef.current) dividerRef.current.style.left = `${p}%`;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none cursor-ew-resize",
		onMouseDown: (e) => {
			dragging.current = true;
			move(e.clientX);
		},
		onMouseMove: (e) => {
			if (dragging.current) requestAnimationFrame(() => move(e.clientX));
		},
		onMouseUp: () => dragging.current = false,
		onMouseLeave: () => dragging.current = false,
		onTouchStart: (e) => {
			dragging.current = true;
			move(e.touches[0].clientX);
		},
		onTouchMove: (e) => {
			e.preventDefault();
			if (dragging.current) requestAnimationFrame(() => move(e.touches[0].clientX));
		},
		onTouchEnd: () => dragging.current = false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: "Después",
				loading: "lazy",
				decoding: "async",
				className: "absolute inset-0 w-full h-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: beforeImgRef,
				src: before,
				alt: "Antes",
				loading: "lazy",
				decoding: "async",
				className: "absolute inset-0 w-full h-full object-cover z-10",
				style: {
					clipPath: "inset(0 50% 0 0)",
					willChange: "clip-path"
				}
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
				ref: dividerRef,
				className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30",
				style: {
					left: "50%",
					willChange: "left"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20",
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
gsapWithCSS.registerPlugin(ScrollTrigger);
function CinematicShowcase() {
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		if (!containerRef.current) return;
		gsapWithCSS.set([
			".word-1",
			".word-2",
			".word-3"
		], {
			scale: .01,
			opacity: 0,
			transformOrigin: "center center"
		});
		gsapWithCSS.set(".final-content", { opacity: 0 });
		gsapWithCSS.set(".speed-lines", { opacity: 0 });
		gsapWithCSS.set(".worker-group", { y: "120vh" });
		const tl = gsapWithCSS.timeline({ paused: true });
		gsapWithCSS.set(".vertigo-bg", {
			scale: 3,
			yPercent: -15
		});
		tl.to(".vertigo-bg", {
			scale: 1.1,
			yPercent: 0,
			duration: 8,
			ease: "power1.inOut"
		}, 0);
		tl.to(".word-1", {
			scale: 1,
			opacity: 1,
			duration: 1.5,
			ease: "power2.inOut"
		}, .5);
		tl.to(".word-1", {
			scale: 15,
			opacity: 0,
			duration: 1,
			ease: "power3.in"
		}, 2);
		tl.to(".word-2", {
			scale: 1,
			opacity: 1,
			duration: 1.5,
			ease: "power2.inOut"
		}, 2.5);
		tl.to(".word-2", {
			scale: 15,
			opacity: 0,
			duration: 1,
			ease: "power3.in"
		}, 4);
		tl.to(".word-3", {
			scale: 1,
			opacity: 1,
			duration: 1.5,
			ease: "power2.inOut"
		}, 4.5);
		tl.to(".word-3", {
			scale: 15,
			opacity: 0,
			duration: 1,
			ease: "power3.in"
		}, 6);
		tl.to(".final-bg", {
			opacity: 1,
			duration: 1.5
		}, 6.5);
		tl.to(".final-content", {
			opacity: 1,
			duration: 1.5,
			pointerEvents: "auto"
		}, 6.5);
		let maxProgress = 0;
		ScrollTrigger.create({
			trigger: containerRef.current,
			pin: true,
			start: "top top",
			end: "+=3500",
			anticipatePin: 1,
			onUpdate: (self) => {
				if (self.progress > maxProgress) {
					maxProgress = self.progress;
					gsapWithCSS.to(tl, {
						progress: maxProgress,
						duration: .5,
						ease: "power2.out",
						overwrite: "auto"
					});
				}
			},
			onLeaveBack: () => {
				maxProgress = 0;
				gsapWithCSS.to(tl, {
					progress: 0,
					duration: .5,
					overwrite: "auto"
				});
			}
		});
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		className: "relative h-screen w-full bg-[#02040a] overflow-hidden",
		id: "proceso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 origin-[50%_20%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vertigo-bg absolute inset-0 w-full h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: vertigo_facade_default,
							alt: "Fachada de cristal",
							className: "w-full h-full object-cover object-top"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#02040a]/30 via-[#02040a]/60 to-[#02040a]/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "final-bg absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.15)_0%,#02040a_80%)] opacity-0" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 flex items-center justify-center pointer-events-none perspective-[1000px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-white text-[12vw] md:text-[9vw] font-black uppercase text-center leading-none tracking-tight w-full px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "word-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-shadow-xl",
							children: "Cuidamos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "word-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gradient-to-r from-electric to-[#60b6ff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,150,255,0.4)]",
							children: "Cada Detalle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "word-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[8vw] md:text-[6vw] text-white/95",
							children: "A cualquier altura."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "final-content absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center mb-6 drop-shadow-sm",
						children: "Precisión sin límites."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-white/90 font-medium max-w-2xl text-center mb-12 leading-relaxed",
						children: "Nuestros técnicos especializados combinan técnica y seguridad para devolverle el brillo a su edificio. Sin andamios, sin complicaciones."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col sm:flex-row gap-5 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "group relative inline-flex items-center justify-center h-16 px-12 rounded-full bg-electric text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(0,150,255,0.4)] hover:shadow-[0_0_50px_rgba(0,150,255,0.7)] transition-all duration-300 hover:-translate-y-1",
							children: "Solicitar Presupuesto"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-50 animate-pulse pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.3em] text-white font-bold",
					children: "Asciende"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[1px] h-12 bg-gradient-to-t from-white to-transparent" })]
			})
		]
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
		color: "bg-white",
		filter: "hue-rotate(270deg) saturate(2.5)",
		clip: "none",
		objectClass: "object-contain object-center scale-95"
	},
	{
		title: "Limpieza de Fachadas",
		desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.",
		customIcon: icon_fachadas_pastel_default,
		color: "bg-white",
		filter: "hue-rotate(80deg) saturate(2.5)",
		clip: "none",
		objectClass: "object-contain object-bottom"
	},
	{
		title: "Limpieza de Placas Solares",
		desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.",
		customIcon: icon_solar_pastel_default,
		color: "bg-white",
		filter: "saturate(2.5)",
		clip: "none",
		objectClass: "object-contain object-bottom"
	},
	{
		title: "Líneas de Vida",
		desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.",
		customIcon: icon_lineas_pastel_default,
		color: "bg-white",
		filter: "hue-rotate(90deg) saturate(2.5)",
		clip: "inset(0 0 11% 0)",
		objectClass: "object-contain object-bottom scale-105 origin-bottom"
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
var heroAvatars = [
	"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face",
	"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop&crop=face",
	"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
	"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
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
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const navLinks = [
		{
			href: "#servicios",
			label: "Servicios"
		},
		{
			href: "#proyectos",
			label: "Proyectos"
		},
		{
			href: "#proceso",
			label: "Proceso"
		},
		{
			href: "#cobertura",
			label: "Cobertura"
		},
		{
			href: "#contacto",
			label: "Contacto"
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
						className: "flex items-center gap-3 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-[10px] font-bold text-slate-400 tracking-wider bg-slate-50 px-2 py-1 rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-navy",
									children: "ES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-200",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "hover:text-navy",
									children: "CA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-200",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "hover:text-navy",
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
						className: "flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-navy transition-colors",
								children: "ES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-200",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "hover:text-navy transition-colors",
								children: "CA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-200",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "hover:text-navy transition-colors",
								children: "EN"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PHONE_HREF,
						className: "inline-flex items-center gap-2 px-5 h-9 rounded-full bg-electric text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(0,150,255,0.4)] hover:-translate-y-0.5 transition-all",
						children: "Llamar"
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(110deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.85)_40%,rgba(10,22,40,0.4)_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#040b14]/90 to-transparent pointer-events-none" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase animate-[fade-in_0.8s_ease-out]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-electric animate-pulse" }), "25+ años de experiencia · Barcelona"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]",
						children: [
							"Especialistas en ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-electric",
								children: "trabajos verticales"
							}),
							" y limpieza en altura en Barcelona"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fade-up_1s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]",
						children: "Limpieza de cristales, fachadas, placas solares e instalación de líneas de vida para empresas, industrias y comunidades."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold hover:shadow-elev hover:-translate-y-0.5 transition-all",
							children: "Solicitar Presupuesto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_HREF,
							className: "inline-flex items-center gap-3 h-14 px-7 rounded-full bg-white text-navy font-bold shadow-soft hover:shadow-elev hover:-translate-y-0.5 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
							}), "Llamar Ahora"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex items-center gap-6 text-white/70 text-sm animate-[fade-in_1s_0.6s_both]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex -space-x-2",
							children: heroAvatars.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: `Operario DISET ${i + 1}`,
								width: 36,
								height: 36,
								className: "w-9 h-9 rounded-full border-2 border-navy object-cover"
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 mb-1",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "#0096FF",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white font-bold",
								children: "+4.500 proyectos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "completados con éxito" })
						] })]
					})
				]
			})
		})]
	});
}
function TrustBar() {
	const items = [
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
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-navy border-b border-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-white/80 text-xs sm:text-sm font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#0096FF",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: item.icon })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text }),
						i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden md:block w-px h-4 bg-white/20 ml-4" })
					]
				}, i))
			})
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#0a1628] border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				className: `text-center px-4 md:px-6 py-8 md:py-4 border-white/10 ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i < stats.length - 1 ? "md:border-r" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
							to: s.value,
							suffix: s.suffix
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-wider leading-snug max-w-[140px] mx-auto",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 w-8 h-0.5 bg-electric mx-auto rounded-full" })
				]
			}, s.label))
		})
	});
}
function Sectors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#eef2f6] pt-20 pb-24 border-y border-border overflow-hidden relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy tracking-tight text-center md:text-left",
					children: "Servicios verticales para empresas"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-6",
				children: sectors.map((sector, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-[#f5f8fa] border border-[#dce4ec] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 group relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-16 h-16 md:w-20 md:h-20 mb-6 ${sector.color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "100%",
									height: "100%",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: sector.icon })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-navy font-bold text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-electric transition-colors",
								children: sector.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-600 leading-relaxed mb-6 text-sm md:text-base max-w-2xl",
								children: sector.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-slate-500 font-medium text-sm hover:text-electric transition-colors cursor-pointer w-fit",
								children: ["Más información", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-20 bg-slate-50 scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
						children: "Servicios Especializados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy tracking-tight",
						children: [
							"Soluciones integrales, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-electric",
								children: "en altura"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-500 max-w-sm leading-relaxed text-sm md:text-base",
						children: "Toda la capacidad técnica de un único proveedor para el mantenimiento integral de su edificio."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `group ${s.color} rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col cursor-pointer relative`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500 origin-bottom-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.customIcon,
									alt: s.title,
									className: `w-full h-full mix-blend-multiply ${s.objectClass || "object-contain object-bottom"}`,
									style: {
										filter: s.filter,
										clipPath: s.clip
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-extrabold text-navy mb-3 tracking-tight z-10",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-navy/80 font-medium leading-relaxed mb-8 flex-1 z-10",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-center gap-2 text-navy font-bold text-sm z-10",
								children: ["Más información", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "group-hover:translate-x-1 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
								})]
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
function BeforeAfterSection() {
	const [activeCase, setActiveCase] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proyectos",
		className: "py-24 lg:py-32 bg-[#0a1628] industrial-texture border-y border-white/5 scroll-mt-20 md:scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
							children: "Antes / Después"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]",
							children: [
								"Resultados que se",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"ven, a primera vista."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-white/70 leading-relaxed max-w-lg",
							children: "Deslice el control para comparar el estado de cada superficie antes y después de nuestra intervención."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex md:hidden gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2",
						children: beforeAfterCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveCase(i),
							className: `relative shrink-0 w-28 overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[3/4] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.after,
										alt: c.label,
										className: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white font-extrabold text-xs leading-tight",
										children: c.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white/70 text-[10px] mt-0.5 leading-tight",
										children: c.desc
									})]
								}),
								activeCase === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-electric grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "10",
										height: "10",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "white",
										strokeWidth: "3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
									})
								})
							]
						}, c.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:grid grid-cols-3 gap-4 mb-8",
						children: beforeAfterCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveCase(i),
							className: `relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left group ${activeCase === i ? "border-electric shadow-glow scale-[1.02]" : "border-border hover:border-electric/40 hover:shadow-soft"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.after,
										alt: c.label,
										className: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${activeCase === i ? "brightness-100" : "brightness-75"}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `text-base font-extrabold ${activeCase === i ? "text-white" : "text-white/90"}`,
										children: c.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-white/70 mt-0.5",
										children: c.desc
									})]
								}),
								activeCase === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-2 right-2 w-6 h-6 rounded-full bg-electric grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "12",
										height: "12",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "white",
										strokeWidth: "3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
									})
								})
							]
						}, c.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
						before: beforeAfterCases[activeCase].before,
						after: beforeAfterCases[activeCase].after
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-white/50 text-center font-semibold",
						children: ["Arrastre el control deslizante para comparar · ", beforeAfterCases[activeCase].label]
					})]
				})
			]
		})
	});
}
function SuccessCases() {
	const [featured, ...rest] = successCases;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
							children: "Casos reales"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
							children: [
								"Proyectos ejecutados",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"con resultados reales."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed max-w-lg",
							children: "Más de 4.500 intervenciones técnicas completadas. Cada proyecto, una solución a medida."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "group relative rounded-2xl overflow-hidden border border-border hover:border-electric/40 hover:shadow-elev transition-all duration-500 mb-6 md:mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[4/3] md:aspect-auto overflow-hidden relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: featured.img,
								alt: featured.title,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-4 left-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 rounded-full bg-electric text-white text-xs font-bold",
									children: featured.type
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 rounded-full bg-navy/80 text-white text-xs font-semibold backdrop-blur-sm",
									children: featured.location
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:p-10 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 text-electric text-xs font-bold tracking-widest uppercase mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-6 h-px bg-electric" }), "Caso Destacado"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl md:text-3xl font-extrabold text-navy mb-2",
									children: featured.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 text-sm text-muted-foreground mb-6",
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
										}), featured.duration]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
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
									className: "space-y-4",
									children: [
										{
											label: "Problema",
											text: featured.problem,
											color: "bg-red-50 border-red-100"
										},
										{
											label: "Solución",
											text: featured.solution,
											color: "bg-blue-50 border-blue-100"
										},
										{
											label: "Resultado",
											text: featured.resultDesc,
											color: "bg-green-50 border-green-100"
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-4 rounded-xl border ${item.color}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-ink leading-relaxed",
											children: item.text
										})]
									}, item.label))
								})
							]
						})]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: rest.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group rounded-2xl border border-border hover:border-electric/40 hover:shadow-elev hover:-translate-y-1 transition-all duration-500 overflow-hidden bg-white h-full flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[16/10] overflow-hidden relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.title,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 left-3 flex gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2.5 py-0.5 rounded-full bg-electric text-white text-[10px] font-bold",
										children: c.type
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 flex-1 flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-extrabold text-navy text-lg mb-1 group-hover:text-electric transition-colors",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mb-4",
										children: c.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 text-xs font-semibold text-navy mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												width: "12",
												height: "12",
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
											children: c.result
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 border-t border-border pt-4 mt-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground",
											children: "Resultado"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-ink leading-relaxed",
											children: c.resultDesc
										})]
									})
								]
							})]
						})
					}, c.title))
				})
			]
		})
	});
}
function MidCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 bg-[#0a1628] border-y border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white/80 text-xs font-bold uppercase tracking-widest mb-2",
						children: "¿Necesitas una intervención en altura?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white text-2xl md:text-3xl font-extrabold text-balance",
						children: "Solicita una visita técnica gratuita."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white/80 text-sm mt-3 text-balance",
						children: "Sin compromiso · Respuesta garantizada en menos de\xA024h"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WA_HREF,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
					}), "WhatsApp"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contacto",
					className: "flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-electric text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow",
					children: ["Solicitar visita", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
					})]
				})]
			})]
		})
	});
}
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-[#0b1121] border-y border-white/5 relative overflow-hidden scroll-mt-20 md:scroll-mt-24",
		id: "beneficios",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 relative z-10 pt-4 md:pt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-white tracking-tight",
					children: "La referencia técnica en trabajos verticales"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-white/70 text-lg max-w-2xl",
					children: "Los equipos y protocolos utilizados en nuestras intervenciones son de máxima seguridad, garantizando resultados impecables en todos nuestros proyectos."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-6",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 100,
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${b.color}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "32",
							height: "32",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "white",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: b.icon })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl font-extrabold text-white tracking-tight mb-1",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-white/70",
						children: b.desc
					})] })]
				}, b.title))
			})]
		})
	});
}
function VideoSection() {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const VIDEO_ID = "aBf0OXTJgkA";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-[#080f1d] overflow-hidden industrial-texture relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
						children: "DISET en acción"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white",
						children: "25 años resolviendo trabajos donde otros no pueden intervenir."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/60 leading-relaxed text-lg",
						children: "Nuestro equipo de técnicos certificados opera con los más altos estándares de seguridad en toda la provincia de Barcelona. Sin subcontratas. Sin excusas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-4",
						children: [
							{
								n: "25+",
								l: "Años de experiencia"
							},
							{
								n: "+4.500",
								l: "Proyectos completados"
							},
							{
								n: "IRATA",
								l: "Técnicos certificados"
							},
							{
								n: "24h",
								l: "Respuesta garantizada"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/[0.04] border border-white/8 rounded-xl p-4 hover:border-electric/30 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-extrabold text-electric",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-white/50 mt-1",
								children: s.l
							})]
						}, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full max-w-[320px] lg:max-w-[360px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,150,255,0.15)]",
							style: { aspectRatio: "9/16" },
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								className: "absolute inset-0 w-full h-full",
								src: `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`,
								title: "DISET Limpiezas Verticales — equipo en acción",
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
								allowFullScreen: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setPlaying(true),
								className: "absolute inset-0 w-full h-full group cursor-pointer",
								"aria-label": "Reproducir vídeo DISET en acción",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
										alt: "DISET técnicos en trabajos verticales",
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-20 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform animate-pulse-glow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "28",
												height: "28",
												viewBox: "0 0 24 24",
												fill: "white",
												stroke: "white",
												strokeWidth: "1",
												strokeLinejoin: "round",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "6 4 20 12 6 20 6 4" })
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 left-0 right-0 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/80 text-xs font-semibold tracking-wider uppercase",
											children: "Ver vídeo"
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proceso",
		className: "py-24 lg:py-32 bg-[#eef2f6] scroll-mt-20 md:scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mb-16 text-center md:text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-navy tracking-tight",
					children: "Nuestro proceso de trabajo"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pl-8 md:pl-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 bottom-8 left-[11px] md:left-[19px] w-px bg-navy/20 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-12 relative z-10",
					children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -left-[45px] md:-left-[57px] top-1",
							children: [
								p.shape === "triangle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-8 h-8 md:w-10 md:h-10 text-navy overflow-visible",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
										points: "12,2 2,22 22,22",
										fill: "#e91e63",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinejoin: "round"
									})
								}),
								p.shape === "square" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-8 h-8 md:w-10 md:h-10 text-navy overflow-visible",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "2",
										y: "2",
										width: "20",
										height: "20",
										fill: "#e91e63",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinejoin: "round"
									})
								}),
								p.shape === "circle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-8 h-8 md:w-10 md:h-10 text-navy overflow-visible",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12",
										r: "10",
										fill: "#e91e63",
										stroke: "currentColor",
										strokeWidth: "2"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-medium tracking-widest text-navy uppercase mb-2 block",
								children: ["Paso ", p.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold text-navy mb-3 tracking-tight",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm md:text-base text-slate-600 leading-relaxed max-w-xl",
								children: p.d
							})
						] })]
					}, p.n))
				})]
			})]
		})
	});
}
function Testimonials() {
	const bgColors = [
		"bg-[#E65100]",
		"bg-[#0F9D58]",
		"bg-[#4285F4]"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-[#eef2f6]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-8 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight",
					children: [
						"Particulares satisfechos",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"con nuestros servicios"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex flex-col items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl font-bold text-navy tracking-widest",
							children: "EXCELENTE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 mb-1",
							children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "28",
								height: "28",
								viewBox: "0 0 24 24",
								fill: "#FBBC05",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-navy text-sm mb-1",
							children: ["A base de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold",
								children: "987 reseñas"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[28px] font-bold tracking-tighter",
							style: { fontFamily: "sans-serif" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#4285F4]",
									children: "G"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#EA4335]",
									children: "o"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#FBBC05]",
									children: "o"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#4285F4]",
									children: "g"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#34A853]",
									children: "l"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#EA4335]",
									children: "e"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200/80 shadow-sm h-full relative hover:shadow-md transition-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-6 lg:top-8 right-6 lg:right-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									width: "22",
									height: "22",
									xmlns: "http://www.w3.org/2000/svg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
											fill: "#4285F4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
											fill: "#34A853"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
											fill: "#FBBC05"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
											fill: "#EA4335"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-center mb-4 pr-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-12 h-12 rounded-full ${bgColors[i % 3]} text-white font-medium text-xl flex items-center justify-center shrink-0`,
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-navy text-[17px] leading-tight truncate",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] text-slate-500 mt-0.5",
									children: [
										"hace ",
										i + 1,
										" semana",
										i !== 0 && "s"
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-[2px] mb-4",
								children: [[...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "#FBBC05",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									className: "ml-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
										fill: "#4285F4"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M16.5 8L10.5 14.5L7.5 11.5",
										stroke: "white",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed text-navy flex-1",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 text-sm hover:underline cursor-pointer",
									children: "Leer más"
								})
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function Coverage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cobertura",
		className: "py-24 lg:py-32 bg-white scroll-mt-20 md:scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
					children: "Cobertura"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
					children: [
						"Toda Barcelona",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"y provincia."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-md mb-12",
					children: "Operamos en toda la provincia con equipos propios y vehículos preparados para intervenciones rápidas. Sin subcontratas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-y-8 gap-x-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-[3px] border-electric pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl lg:text-4xl font-extrabold text-navy",
								children: "+300"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold text-muted-foreground mt-1",
								children: [
									"Comunidades",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"atendidas"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-[3px] border-electric pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl lg:text-4xl font-extrabold text-navy",
								children: "25+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold text-muted-foreground mt-1",
								children: [
									"Años de",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"experiencia"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-[3px] border-electric pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl lg:text-4xl font-extrabold text-navy",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold text-muted-foreground mt-1",
								children: [
									"Personal propio",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"y certificado"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-[3px] border-electric pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl lg:text-4xl font-extrabold text-navy",
								children: "24h"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold text-muted-foreground mt-1",
								children: [
									"Respuesta rápida",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"garantizada"
								]
							})]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-elev border border-border group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Ubicación DISET — Carrer de Cuzco 39-41, Barcelona",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359223363065!2d2.1814110766324225!3d41.41750007129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a321200df13b%3A0xc319138ce3ed8966!2sCarrer%20de%20Cuzco%2C%2039%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses",
							className: "w-full h-full saturate-50 group-hover:saturate-100 transition-all duration-1000",
							style: { border: 0 },
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-border shadow-soft flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-mist border border-border grid place-items-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#0096FF",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "10",
										r: "3"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-navy text-sm",
									children: "Cobertura en toda Barcelona y provincia"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Sede: Carrer de Cuzco, 39-41"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-electric font-semibold mt-1 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "12",
										height: "12",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
									}), PHONE]
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/5 rounded-2xl" })
					]
				})
			})]
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 lg:py-32 bg-[#D52374] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 overflow-hidden pointer-events-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-10 -left-10 w-72 h-72 opacity-[0.12] rotate-12 mix-blend-multiply",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: icon_cristales_pastel_default,
						alt: "",
						className: "w-full h-full object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-[45%] left-[10%] w-56 h-56 opacity-[0.12] -rotate-[15deg] mix-blend-multiply",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: icon_lineas_pastel_default,
						alt: "",
						className: "w-full h-full object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-10 left-[35%] w-64 h-64 opacity-[0.12] rotate-45 mix-blend-multiply",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: icon_fachadas_pastel_default,
						alt: "",
						className: "w-full h-full object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-10 right-[5%] w-80 h-80 opacity-[0.12] -rotate-6 mix-blend-multiply",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: icon_solar_pastel_default,
						alt: "",
						className: "w-full h-full object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-20 right-[15%] w-72 h-72 opacity-[0.12] rotate-[25deg] mix-blend-multiply",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: icon_cristales_pastel_default,
						alt: "",
						className: "w-full h-full object-contain"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] font-black tracking-[0.2em] uppercase text-[#0B2163]",
						children: "Certificaciones"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2163] leading-tight tracking-tight",
						children: [
							"Técnicos certificados",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"y máxima seguridad."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[#0B2163]/80 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl font-medium",
						children: "Nuestro cliente compra seguridad antes que limpieza. Por eso invertimos en certificaciones y formación continua."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5",
				children: [
					{
						name: "IRATA",
						desc: "Industrial Rope Access Trade Association",
						detail: "Formación continua en acceso por cuerdas de nivel internacional",
						icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
					},
					{
						name: "PRL",
						desc: "Prevención de Riesgos Laborales",
						detail: "Cumplimiento total de la normativa española de seguridad laboral",
						icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					},
					{
						name: "Seguro RC",
						desc: "Responsabilidad Civil",
						detail: "Cobertura de responsabilidad civil para todos los trabajos ejecutados",
						icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
					},
					{
						name: "EN 795",
						desc: "Normativa Líneas de Vida",
						detail: "Instalaciones anticaídas certificadas según norma europea EN 795",
						icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
					},
					{
						name: "ISO",
						desc: "Calidad y Gestión",
						detail: "Protocolos de calidad documentados y auditados externamente",
						icon: "M20 6 9 17l-5-5"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 lg:p-8 rounded-[24px] bg-white shadow-xl shadow-[#0B2163]/10 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full bg-[#D52374]/10 grid place-items-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "24",
										height: "24",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "#D52374",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: c.icon })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xl font-extrabold text-[#0B2163] tracking-tight",
									children: c.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[15px] text-[#0B2163]/90 font-bold mb-2 leading-snug",
								children: c.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[14px] text-[#0B2163]/70 leading-relaxed flex-1",
								children: c.detail
							})
						]
					})
				}, c.name))
			})]
		})]
	});
}
function ContactForm({ light = false }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const body = `Nombre: ${data.get("nombre")}%0ATel%C3%A9fono: ${data.get("telefono")}%0AEmail: ${data.get("email")}%0AServicio: ${data.get("servicio")}%0AMensaje: ${data.get("mensaje")}`;
		window.location.href = `mailto:info@disetlimpiezasverticales.com?subject=Solicitud%20de%20Presupuesto%20Gratuito&body=${body}`;
		setSent(true);
	};
	const lbl = light ? "block text-navy text-sm font-bold mb-1.5" : "block text-white/80 text-sm font-bold mb-1.5";
	const inp = light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-full bg-electric/15 grid place-items-center mx-auto mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "#0096FF",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: `text-2xl font-extrabold mb-2 ${light ? "text-navy" : "text-white"}`,
				children: "¡Solicitud enviada!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: light ? "text-muted-foreground" : "text-white/80",
				children: "Un técnico le contactará en menos de 24 horas."
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-4",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "email",
				className: lbl,
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "email",
				name: "email",
				type: "email",
				placeholder: "su@email.com",
				className: inp
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "servicio",
				className: lbl,
				children: "Servicio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "servicio",
				name: "servicio",
				className: light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all appearance-none" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all appearance-none",
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
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "mensaje",
				className: lbl,
				children: "Mensaje"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "mensaje",
				name: "mensaje",
				rows: 3,
				placeholder: "Describa brevemente su proyecto…",
				className: light ? "w-full px-4 py-3 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 transition-all resize-none" : "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/50 focus:bg-white/15 transition-all resize-none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "w-full rounded-xl bg-electric text-white font-bold text-sm sm:text-base shadow-glow hover:-translate-y-0.5 hover:shadow-elev transition-all py-4 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: "Solicitar Presupuesto"
				})
			}),
			!light && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-white/80 text-xs text-center text-balance",
				children: "Sin compromiso · Respuesta en 24h"
			})
		]
	}) });
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacto",
		className: "py-20 lg:py-32 relative overflow-hidden bg-[#0a1628] scroll-mt-20 md:scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/60 blur-[100px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-7xl mx-auto px-5 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-10 lg:gap-20 items-start min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-xs font-semibold tracking-wider uppercase text-electric",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0096FF]" }), " Respuesta en menos de 24h"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] break-words",
								children: ["Solicite su ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-electric",
									children: "presupuesto."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-white/80 leading-relaxed text-base lg:text-lg",
								children: "Un técnico especializado revisará su caso y le enviará una propuesta cerrada, sin costes ocultos ni compromisos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PHONE_HREF,
										className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-electric grid place-items-center shrink-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													width: "20",
													height: "20",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "white",
													strokeWidth: "2.5",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
														children: "Llámenos directamente"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white font-extrabold text-xl group-hover:text-electric transition-colors truncate",
														children: PHONE
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-white/40 text-xs mt-0.5",
														children: "Lun – Vie · 08:00 – 19:00"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0",
												width: "20",
												height: "20",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WA_HREF,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all group shadow-soft min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-[#25D366] grid place-items-center shrink-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
													width: "20",
													height: "20",
													viewBox: "0 0 24 24",
													fill: "white",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
													children: "WhatsApp"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white font-bold group-hover:text-[#25D366] transition-colors truncate",
													children: "Escríbanos ahora"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "ml-auto text-white/30 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all shrink-0",
												width: "20",
												height: "20",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 w-full",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-white/10" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/40 text-sm whitespace-nowrap",
												children: "o escríbanos"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-white/10" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:info@disetlimpiezasverticales.com",
										className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-white/10 grid place-items-center shrink-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
													width: "20",
													height: "20",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "#0096FF",
													strokeWidth: "2.5",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "22,6 12,13 2,6" })]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white font-bold text-[clamp(11px,3.5vw,16px)] tracking-tight group-hover:text-electric transition-colors truncate",
													children: "info@disetlimpiezasverticales.com"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0",
												width: "20",
												height: "20",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
											})
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "w-full max-w-full min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl p-6 sm:p-8 shadow-elev max-w-full overflow-hidden w-full mx-auto md:max-w-[28rem] lg:max-w-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-navy mb-1 leading-tight",
									children: "Solicitar presupuesto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-500 text-sm mb-6 text-balance",
									children: "Sin compromiso · Respuesta en 24h"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { light: true })
							]
						})
					})]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_diset_default,
								alt: "Vertirise Elevate",
								className: "h-10 w-auto invert brightness-0 opacity-90"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-400 text-sm mb-2",
							children: "Carrer de Cuzco, 39-41, 08030 Barcelona"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-400 text-sm mb-6",
							children: "info@vertirise.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-slate-400 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-slate-300 mb-1",
									children: "Horario:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "L-V de 8h a 18h" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-bold text-white text-lg",
									children: "935 22 43 05"
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold text-lg mb-6 tracking-wide text-white",
						children: "Empresa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-slate-400 font-medium",
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
								className: "hover:text-electric transition-colors flex items-center gap-2",
								children: "Política de cancelación, reembolso y devolución"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold text-lg mb-6 tracking-wide text-white",
						children: "Políticas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-slate-400 font-medium",
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
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold text-lg mb-6 tracking-wide text-white",
						children: "Trabajamos en toda Cataluña"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-slate-400 font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-electric" }), "Limpieza en Barcelona"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-electric" }), "Limpieza en Maresme"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-electric" }), "Limpieza en Girona"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-electric" }), "Limpieza en Tarragona"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-electric" }), "Limpieza en Lleida"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-slate-500 text-sm",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Vertirise Elevate. Todos los derechos reservados."
					]
				})
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-[#00a8e8] py-24 md:py-32 overflow-hidden border-b-[20px] border-navy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-4xl mx-auto px-6 lg:px-10 text-center z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl md:text-5xl lg:text-7xl font-extrabold text-navy tracking-tight mb-8",
					children: [
						"Tu seguridad en altura es nuestra prioridad. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "Adiós suciedad."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-navy/90 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed",
					children: "Contamos con más de 25 años de experiencia en el sector del mantenimiento y la limpieza vertical en Cataluña."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: PHONE_HREF,
					className: "inline-flex items-center gap-3 px-10 h-16 rounded-full bg-navy text-white text-lg font-bold hover:bg-white hover:text-navy hover:-translate-y-1 transition-all shadow-xl",
					children: "Pide tu presupuesto"
				})
			]
		})
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MidCTA, {}),
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
