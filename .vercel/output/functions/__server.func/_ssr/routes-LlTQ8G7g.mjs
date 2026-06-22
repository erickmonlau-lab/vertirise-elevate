import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LlTQ8G7g.js
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
var hero_default = "/assets/hero-Cyy4bQVT.webp";
var service_cristales_default = "/assets/service-cristales-yrEgx9tX.webp";
var service_fachadas_default = "/assets/service-fachadas-BNsW8e9F.webp";
var service_solar_default = "/assets/service-solar-DW8u5GD4.webp";
var service_lineas_default = "/assets/service-lineas-D1tazc1p.webp";
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
		img: service_cristales_default,
		icon: "M21 21H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"
	},
	{
		title: "Limpieza de Fachadas",
		desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.",
		img: service_fachadas_default,
		icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
	},
	{
		title: "Limpieza de Placas Solares",
		desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.",
		img: service_solar_default,
		icon: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
	},
	{
		title: "Instalación de Líneas de Vida",
		desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.",
		img: service_lineas_default,
		icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
	}
];
var benefits = [
	{
		title: "Personal certificado",
		desc: "Técnicos IRATA y trabajos en altura RD 2177/2004.",
		icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
	},
	{
		title: "Seguridad homologada",
		desc: "Equipos EPI certificados y protocolos auditados.",
		icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
	},
	{
		title: "Rapidez de ejecución",
		desc: "Movilización en 48h y obras coordinadas al detalle.",
		icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
	},
	{
		title: "Cobertura Barcelona",
		desc: "Servicio en toda la ciudad y provincia de Barcelona.",
		icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
	},
	{
		title: "Garantía de calidad",
		desc: "Resultado garantizado por escrito en cada proyecto.",
		icon: "M20 6 9 17l-5-5"
	},
	{
		title: "Presupuestos rápidos",
		desc: "Valoración técnica y oferta en menos de 24 horas.",
		icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"
	}
];
var process = [
	{
		n: "01",
		t: "Contacto inicial",
		d: "Recopilamos los datos del inmueble y evaluamos el tipo de intervención necesaria.",
		icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
	},
	{
		n: "02",
		t: "Visita técnica",
		d: "Inspeccionamos in situ los accesos, anclajes y posibles riesgos estructurales.",
		icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
	},
	{
		n: "03",
		t: "Propuesta",
		d: "Entregamos presupuesto cerrado con planificación temporal y plan de seguridad.",
		icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
	},
	{
		n: "04",
		t: "Ejecución",
		d: "Despliegue del equipo IRATA ejecutando el trabajo bajo estricta coordinación.",
		icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
	},
	{
		n: "05",
		t: "Entrega",
		d: "Revisión conjunta, emisión de certificados y garantía de resultado por escrito.",
		icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
	}
];
var testimonials = [
	{
		name: "Marta Vidal",
		role: "Administradora de Fincas",
		location: "Eixample, Barcelona",
		project: "Limpieza de fachada · Comunidad de 64 viviendas",
		quote: "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel.",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
	},
	{
		name: "Jordi Soler",
		role: "Facility Manager",
		location: "Grupo Industrial, Sant Andreu",
		project: "Mantenimiento cubiertas · Líneas de vida",
		quote: "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles.",
		avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
	},
	{
		name: "Anna Roig",
		role: "Directora de Operaciones",
		location: "Hotel BCN, Eixample",
		project: "Limpieza de cristales · Mantenimiento trimestral",
		quote: "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%.",
		avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face"
	}
];
var successCases = [
	{
		title: "Hotel Miramar Barcelona",
		type: "Limpieza de Fachada",
		location: "Barceloneta, Barcelona",
		duration: "5 días",
		result: "3.200 m² recuperados",
		problem: "Fachada histórica con acumulación de depósitos calcáreos y residuos orgánicos visibles desde el paseo marítimo.",
		solution: "Intervención con equipo de cuerdas y hidrolimpieza de presión controlada para preservar el revestimiento original.",
		resultDesc: "Fachada completamente restaurada sin interrumpir la actividad del hotel. Cero quejas de huéspedes.",
		img: service_fachadas_default,
		featured: true
	},
	{
		title: "Comunidad Sant Gervasi",
		type: "Limpieza de Cristales",
		location: "Sant Gervasi, Barcelona",
		duration: "2 días",
		result: "280 m² de cristal",
		problem: "Cristalería de lujo con residuos de obras y cal en 18 plantas de altura.",
		solution: "Acceso por cuerda con sistema de limpieza en seco de precisión para acabado sin marcas.",
		resultDesc: "Acabado de nivel premium sin una sola marca. Propietarios completamente satisfechos.",
		img: service_cristales_default,
		featured: false
	},
	{
		title: "Nave Industrial Zona Franca",
		type: "Placas Solares",
		location: "Zona Franca, Barcelona",
		duration: "1 día",
		result: "+28% eficiencia recuperada",
		problem: "420 paneles solares sin limpiar durante 14 meses con pérdida de rendimiento significativa.",
		solution: "Limpieza con agua osmotizada y cepillado suave para no dañar el recubrimiento fotovoltaico.",
		resultDesc: "Recuperación del 28% de eficiencia energética documentada. ROI para el cliente en 3 semanas.",
		img: service_solar_default,
		featured: false
	},
	{
		title: "Torre Corporativa Diagonal",
		type: "Líneas de Vida",
		location: "Diagonal, Barcelona",
		duration: "3 días",
		result: "Sistema EN 795 certificado",
		problem: "Edificio de 22 plantas sin sistema anticaídas para futuras intervenciones de mantenimiento.",
		solution: "Instalación de líneas de vida perimetral homologada con puntos de anclaje estructural y certificación.",
		resultDesc: "Sistema completamente operativo y certificado, habilitando el mantenimiento futuro de forma segura.",
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
		name: "Comunidades",
		icon: "M4 21h16 M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14 M10 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4 M9 9h2 M13 9h2 M9 13h2 M13 13h2"
	},
	{
		name: "Oficinas",
		icon: "M8 21V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18 M4 21h16 M10 6h4 M10 10h4 M10 14h4 M10 18h4"
	},
	{
		name: "Hoteles",
		icon: "M4 21h16 M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16 M12 7l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z M9 17h6 M9 14h6"
	},
	{
		name: "Fachadas de vidrio",
		icon: "M4 4h16v16H4z M4 9h16 M4 14h16 M4 19h16 M9 4v16 M14 4v16 M19 4v16 M6 4l12 12 M14 4l6 6"
	},
	{
		name: "Centros comerciales",
		icon: "M3 21h18 M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M10 14h4 M10 18h4"
	},
	{
		name: "Naves industriales",
		icon: "M2 21h20 M4 21V9l4-3 4 3v-2l4-3 4 3v12 M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5 M18 9V4h2v5"
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-xl border-b border-white/10 shadow-soft" : "bg-white border-b border-border"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 h-18 md:h-20 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					onClick: () => setMobileOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { white: scrolled || mobileOpen })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: `hidden md:flex items-center gap-9 text-sm font-bold ${scrolled ? "text-white" : "text-navy"}`,
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-electric transition-colors opacity-90 hover:opacity-100",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_HREF,
						className: "inline-flex items-center gap-2 pl-3.5 pr-4 h-10 md:h-11 rounded-full bg-electric text-white text-sm font-bold hover:-translate-y-0.5 transition-all shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 h-6 rounded-full bg-white/20 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "12",
									height: "12",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Llamar gratis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Llamar"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMobileOpen((o) => !o),
						"aria-label": "Abrir menú",
						className: `md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-1.5 transition-all ${scrolled || mobileOpen ? "bg-white/10" : "bg-mist border border-border"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-white" : "bg-navy"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-white" : "bg-navy"} ${mobileOpen ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-white" : "bg-navy"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}` })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? "max-h-80 border-t border-white/10 bg-navy" : "max-h-0 bg-navy"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-5 py-4 gap-1",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setMobileOpen(false),
					className: "flex items-center gap-3 px-4 py-3.5 rounded-xl text-white font-bold text-base hover:bg-white/10 hover:text-electric transition-all",
					children: l.label
				}, l.href))
			})
		})]
	}) });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(110deg,rgba(13,59,102,0.95)_0%,rgba(13,59,102,0.85)_40%,rgba(13,59,102,0.3)_100%)]" })]
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contacto",
							className: "group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold hover:shadow-elev hover:-translate-y-0.5 transition-all",
							children: ["Solicitar Presupuesto Gratuito", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-7 h-7 rounded-full bg-white/20 grid place-items-center group-hover:translate-x-1 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
								})
							})]
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
				className: `text-center px-6 py-4 ${i < stats.length - 1 ? "md:border-r border-white/10" : ""}`,
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
		className: "bg-mist pt-10 pb-16 border-b border-border overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-electric text-sm md:text-base font-extrabold tracking-widest uppercase mb-3 block",
					children: "Experiencia en los entornos más exigentes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-1 bg-electric mx-auto rounded-full opacity-60" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8",
				children: sectors.map((sector, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 50,
					className: "flex flex-col items-center text-center group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 rounded-2xl bg-white border border-border shadow-sm grid place-items-center mb-4 group-hover:border-electric/50 group-hover:shadow-soft transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "32",
							height: "32",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							className: "text-navy group-hover:text-electric transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: sector.icon })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-navy font-bold text-base tracking-wide leading-tight group-hover:text-electric transition-colors",
						children: sector.name
					})]
				}, sector.name))
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-24 lg:py-32 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
						children: "Servicios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
						children: [
							"Todo lo que su edificio",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"necesita, ",
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
						className: "text-muted-foreground max-w-md leading-relaxed",
						children: "Un único proveedor técnico para todos los trabajos en altura, con personal homologado y la garantía de más de 25 años de experiencia."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-6 lg:gap-8",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative overflow-hidden rounded-2xl bg-mist border border-border hover:border-electric/40 hover:shadow-elev hover:-translate-y-1 transition-all duration-500 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[16/10] overflow-hidden relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.img,
									alt: s.title,
									loading: "lazy",
									width: 1024,
									height: 640,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-16 rounded-2xl bg-electric/90 backdrop-blur-sm grid place-items-center shadow-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "28",
											height: "28",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "white",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: s.icon })
										})
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-extrabold text-navy group-hover:text-electric transition-colors duration-300",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base text-muted-foreground leading-relaxed",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-7 overflow-hidden h-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "translate-y-0 group-hover:-translate-y-0 transition-transform duration-300 inline-flex items-center gap-2 text-electric font-bold text-base group-hover:gap-3",
										children: ["Más información", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})]
									})
								})
							]
						})]
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
		className: "py-24 lg:py-32 bg-mist border-y border-border",
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
							className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
							children: [
								"Resultados que se",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"ven, a primera vista."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed max-w-lg",
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
						className: "mt-6 text-sm text-muted-foreground text-center font-semibold",
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
			className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white/50 text-xs font-bold uppercase tracking-widest mb-1",
					children: "¿Necesitas una intervención en altura?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white text-xl md:text-2xl font-extrabold",
					children: "Solicita una visita técnica gratuita."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white/50 text-sm mt-1",
					children: "Sin compromiso · Respuesta garantizada en menos de 24h"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WA_HREF,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
					}), "WhatsApp"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contacto",
					className: "inline-flex items-center gap-2 h-12 px-6 rounded-full bg-electric text-white font-bold hover:-translate-y-0.5 transition-all shadow-glow",
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
		className: "py-24 lg:py-32 bg-mist border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
					children: "Por qué DISET"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
					children: [
						"La referencia técnica",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"en trabajos en altura."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group p-8 rounded-2xl bg-white border border-border hover:border-electric hover:shadow-elev hover:-translate-y-1 transition-all duration-400 cursor-default",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-xl bg-mist border border-border text-navy grid place-items-center group-hover:bg-electric group-hover:border-electric group-hover:text-white group-hover:scale-110 transition-all duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: b.icon })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-extrabold text-navy group-hover:text-electric transition-colors duration-300",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground leading-relaxed",
								children: b.desc
							})
						]
					})
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
		className: "py-24 lg:py-32 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
					children: "Proceso"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
					children: [
						"Un método claro,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"de principio a fin."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute top-[44px] left-6 right-6 h-px bg-border z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10",
					children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "bg-mist border border-border rounded-xl p-6 hover:border-electric/30 hover:shadow-soft transition-all flex flex-col group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-electric/50 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "text-electric",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: p.icon })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black tracking-widest text-muted-foreground uppercase",
									children: ["Paso ", p.n]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-extrabold text-navy mb-2",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: p.d
							})
						]
					}, p.n))
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-mist border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex flex-col items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "22",
								height: "22",
								viewBox: "0 0 24 24",
								fill: "#0096FF",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-black text-navy",
							children: "★★★★★ 4.9/5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "Basado en clientes reales de toda la provincia de Barcelona"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
					children: [
						"Lo que dicen",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"nuestros clientes."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col bg-white rounded-2xl p-8 border border-border hover:border-electric/40 hover:shadow-elev hover:-translate-y-1 transition-all duration-500 h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-electric mb-5",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base leading-relaxed text-ink flex-1 italic",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 px-3 py-1.5 rounded-lg bg-mist border border-border inline-block self-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-electric text-xs font-bold",
									children: t.project
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-5 border-t border-border flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.avatar,
									alt: t.name,
									className: "w-11 h-11 rounded-full object-cover border border-border shadow-sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-extrabold text-navy text-sm",
										children: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.location
									})
								] })]
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
		className: "py-24 lg:py-32 bg-white",
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
							className: "w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000",
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-navy text-sm",
								children: "Cobertura en toda Barcelona y provincia"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Sede: Carrer de Cuzco, 39"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/5 rounded-2xl" })
					]
				})
			})]
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32 bg-[#0a1628] industrial-texture",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
						children: "Certificaciones"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-extrabold text-white leading-[1.05]",
						children: [
							"Técnicos certificados",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"y máxima seguridad."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-white/70 max-w-xl mx-auto leading-relaxed",
						children: "Nuestro cliente compra seguridad antes que limpieza. Por eso invertimos en certificaciones y formación continua."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-4",
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
						className: "p-6 rounded-xl bg-white/[0.06] border border-white/15 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-lg bg-electric/10 grid place-items-center shrink-0 group-hover:bg-electric/20 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "24",
										height: "24",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "#0096FF",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: c.icon })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xl font-black text-white",
									children: c.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-white/70 font-semibold mb-2",
								children: c.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-white/50 leading-relaxed flex-1",
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
		const body = `Nombre: ${data.get("nombre")}%0ATel%C3%A9fono: ${data.get("telefono")}%0AEmail: ${data.get("email")}%0AServicio: ${data.get("servicio")}%0AMensaje: ${data.get("mensaje")}`;
		window.location.href = `mailto:info@disetlimpiezasverticales.com?subject=Solicitud%20de%20Presupuesto%20Gratuito&body=${body}`;
		setSent(true);
	};
	const lbl = light ? "block text-navy text-sm font-bold mb-1.5" : "block text-white/80 text-sm font-bold mb-1.5";
	const inp = light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all";
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
				className: light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all appearance-none" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all appearance-none",
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
				className: light ? "w-full px-4 py-3 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all resize-none" : "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all resize-none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "w-full rounded-xl bg-electric text-white font-bold shadow-glow hover:-translate-y-0.5 hover:shadow-elev transition-all flex items-center justify-center gap-2 py-3.5",
				children: ["Solicitar Presupuesto Gratuito", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
				})]
			}),
			!light && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-white/50 text-xs text-center",
				children: "Sin compromiso · Respuesta en menos de 24 horas"
			})
		]
	}) });
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacto",
		className: "py-20 lg:py-32 relative overflow-hidden bg-[#0a1628]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/60 blur-[100px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-7xl mx-auto px-5 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-10 lg:gap-20 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-xs font-semibold tracking-wider uppercase text-electric",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_8px_#0096FF]" }), " Respuesta en menos de 24h"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] break-words",
							children: ["Solicite su presupuesto ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-electric",
								children: "gratuito."
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
									className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/60 text-xs font-semibold uppercase tracking-wider",
												children: "Llámenos directamente"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white font-extrabold text-xl group-hover:text-electric transition-colors",
												children: PHONE
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/40 text-xs mt-0.5",
												children: "Lun – Vie · 08:00 – 19:00"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "ml-auto text-white/30 group-hover:text-electric group-hover:translate-x-1 transition-all",
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
									className: "flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all group shadow-soft",
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
												className: "text-white/60 text-xs font-semibold uppercase tracking-wider",
												children: "WhatsApp"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white font-bold group-hover:text-[#25D366] transition-colors",
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
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-white/10" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40 text-sm",
											children: "o escríbanos"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-white/10" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:info@disetlimpiezasverticales.com",
									className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group shadow-soft",
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
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "w-full max-w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl p-6 sm:p-8 shadow-elev max-w-full overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-navy mb-1 leading-tight",
									children: "Solicitar presupuesto gratuito"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm mb-6",
									children: "Sin compromiso · Respuesta en menos de 24 horas"
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#040b14] text-white/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-white/5 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white font-extrabold text-lg",
					children: "¿Necesitas una actuación urgente?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white/50 text-sm mt-0.5",
					children: "Disponible para intervenciones programadas y emergencias."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WA_HREF,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold hover:-translate-y-0.5 transition-all shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
					}), "WhatsApp urgencias"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_diset_default,
									alt: "DISET Limpiezas Verticales",
									height: 48,
									className: "h-10 md:h-12 w-auto object-contain brightness-0 invert"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md leading-relaxed text-white/50",
								children: "Especialistas en trabajos verticales y limpieza en altura en Barcelona y provincia. +25 años elevando los estándares del sector."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: [
									"IRATA",
									"PRL",
									"EN 795",
									"ISO"
								].map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold tracking-wider",
									children: badge
								}, badge))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-extrabold text-sm uppercase tracking-wider mb-5",
						children: "Servicios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#servicios",
							className: "hover:text-electric transition-colors",
							children: s.title
						}) }, s.title))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-extrabold text-sm uppercase tracking-wider mb-5",
						children: "Contacto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Carrer de Cuzco, 39-41",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"08030 Barcelona"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-white/40 text-xs",
								children: "Lun – Vie · 08:00 – 19:00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PHONE_HREF,
								className: "hover:text-electric font-semibold",
								children: PHONE
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@disetlimpiezasverticales.com",
								className: "hover:text-electric break-all text-xs",
								children: "info@disetlimpiezasverticales.com"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WA_HREF,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" })]
								}), "WhatsApp"]
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" DISET Limpiezas Verticales. Todos los derechos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-electric",
							children: "Aviso legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-electric",
							children: "Privacidad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-electric",
							children: "Cookies"
						})
					]
				})]
			})]
		})]
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
			className: "bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3 safe-area-inset-bottom",
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
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white",
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
