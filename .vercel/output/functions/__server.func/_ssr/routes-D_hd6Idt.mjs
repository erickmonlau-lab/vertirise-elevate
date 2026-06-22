import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_hd6Idt.js
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
function Counter({ to, suffix = "", prefix = "", duration = 1800 }) {
	const [val, setVal] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started.current) {
					started.current = true;
					const start = performance.now();
					const tick = (now) => {
						const p = Math.min(1, (now - start) / duration);
						const eased = 1 - Math.pow(1 - p, 3);
						setVal(Math.floor(eased * to));
						if (p < 1) requestAnimationFrame(tick);
						else setVal(to);
					};
					requestAnimationFrame(tick);
				}
			});
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			val.toLocaleString("es-ES"),
			suffix
		]
	});
}
function BeforeAfter({ before, after }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const move = (0, import_react.useCallback)((clientX) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const p = (clientX - rect.left) / rect.width * 100;
		setPos(Math.max(2, Math.min(98, p)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none cursor-ew-resize",
		onMouseDown: (e) => {
			dragging.current = true;
			move(e.clientX);
		},
		onMouseMove: (e) => dragging.current && move(e.clientX),
		onMouseUp: () => dragging.current = false,
		onMouseLeave: () => dragging.current = false,
		onTouchStart: (e) => {
			dragging.current = true;
			move(e.touches[0].clientX);
		},
		onTouchMove: (e) => {
			e.preventDefault();
			dragging.current && move(e.touches[0].clientX);
		},
		onTouchEnd: () => dragging.current = false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: "Después",
				className: "absolute inset-0 w-full h-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				style: { width: `${pos}%` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: before,
					alt: "Antes",
					className: "absolute inset-0 h-full object-cover",
					style: {
						width: `${100 / pos * 100}%`,
						maxWidth: "none"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase",
				children: "ANTES"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase",
				children: "DESPUÉS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)]",
				style: { left: `${pos}%` },
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
var hero_default = "/assets/hero-C0Fctxne.jpg";
var service_cristales_default = "/assets/service-cristales-BARiIeK3.jpg";
var service_fachadas_default = "/assets/service-fachadas-B20gXGFA.jpg";
var service_solar_default = "/assets/service-solar-BxSZkmEw.jpg";
var service_lineas_default = "/assets/service-lineas-gsyd8OI6.jpg";
var logo_diset_default = "/assets/logo-diset-VdcM7aqz.png";
var before_cristales_default = "/assets/before-cristales-tniO54J8.png";
var after_cristales_default = "/assets/after-cristales-B2PiD_XD.png";
var before_fachada_default = "/assets/before-fachada-NcPItrnF.png";
var after_fachada_default = "/assets/after-fachada-tSJPflry.png";
var before_solares_default = "/assets/before-solares-DUyoezie.png";
var after_solares_default = "/assets/after-solares-DWua_1B4.png";
var PHONE = "936 556 161";
var PHONE_HREF = "tel:+34936556161";
var stats = [
	{
		value: 25,
		suffix: "+",
		label: "Años de experiencia"
	},
	{
		value: 4500,
		suffix: "+",
		label: "Proyectos ejecutados"
	},
	{
		value: 300,
		suffix: "+",
		label: "Comunidades atendidas"
	},
	{
		value: 98,
		suffix: "%",
		label: "Satisfacción cliente"
	}
];
var services = [
	{
		title: "Limpieza de Cristales",
		desc: "Cristaleras, ventanales y escaparates en altura con acabado profesional sin marcas ni residuos.",
		img: service_cristales_default
	},
	{
		title: "Limpieza de Fachadas",
		desc: "Hidrolimpieza y tratamiento de fachadas de hormigón, piedra, panel composite y revestimientos técnicos.",
		img: service_fachadas_default
	},
	{
		title: "Limpieza de Placas Solares",
		desc: "Mantenimiento especializado que recupera hasta un 30% de eficiencia energética de sus instalaciones.",
		img: service_solar_default
	},
	{
		title: "Instalación de Líneas de Vida",
		desc: "Diseño, instalación y certificación de sistemas anticaídas homologados según norma EN 795.",
		img: service_lineas_default
	}
];
var benefits = [
	{
		title: "Personal certificado",
		desc: "Técnicos IRATA y trabajos en altura RD 2177/2004."
	},
	{
		title: "Seguridad homologada",
		desc: "Equipos EPI certificados y protocolos auditados."
	},
	{
		title: "Rapidez de ejecución",
		desc: "Movilización en 48h y obras coordinadas al detalle."
	},
	{
		title: "Cobertura Barcelona",
		desc: "Servicio en toda la ciudad y provincia de Barcelona."
	},
	{
		title: "Garantía de calidad",
		desc: "Resultado garantizado por escrito en cada proyecto."
	},
	{
		title: "Presupuestos rápidos",
		desc: "Valoración técnica y oferta en menos de 24 horas."
	}
];
var process = [
	{
		n: "01",
		t: "Contacto inicial",
		d: "Atendemos su consulta y recopilamos los datos del inmueble."
	},
	{
		n: "02",
		t: "Visita técnica",
		d: "Inspeccionamos in situ y evaluamos accesos y riesgos."
	},
	{
		n: "03",
		t: "Propuesta detallada",
		d: "Presupuesto cerrado con planificación y plan de seguridad."
	},
	{
		n: "04",
		t: "Ejecución",
		d: "Equipo certificado realiza el trabajo con coordinación total."
	},
	{
		n: "05",
		t: "Entrega y garantía",
		d: "Certificación, documentación y garantía por escrito."
	}
];
var testimonials = [
	{
		name: "Marta Vidal",
		role: "Administradora de Fincas, Eixample",
		quote: "DISET nos resolvió la limpieza de fachada del edificio en tiempo récord y con cero incidencias. Profesionalidad de primer nivel."
	},
	{
		name: "Jordi Soler",
		role: "Facility Manager, Grupo Industrial",
		quote: "Llevamos 6 años trabajando con ellos en mantenimiento de cubiertas y líneas de vida. Imprescindibles."
	},
	{
		name: "Anna Roig",
		role: "Directora de Operaciones, Hotel BCN",
		quote: "Cristales impecables cada trimestre, personal silencioso y sin afectar a la operativa del hotel. Recomendados al 100%."
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
function Logo({ white = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_diset_default,
			alt: "DISET Limpiezas Verticales",
			height: 44,
			className: `h-11 w-auto object-contain transition-all duration-300 ${white ? "brightness-0 invert" : ""}`
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
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || mobileOpen ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 h-18 md:h-20 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					onClick: () => setMobileOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { white: !scrolled && !mobileOpen })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: `hidden md:flex items-center gap-9 text-sm font-semibold ${scrolled ? "text-ink" : "text-white"}`,
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-electric transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_HREF,
						className: "inline-flex items-center gap-2 pl-3.5 pr-4 h-10 md:h-11 rounded-full bg-electric text-white text-sm font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all",
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
						className: `md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-1.5 transition-all ${scrolled || mobileOpen ? "bg-mist" : "bg-white/15 backdrop-blur-sm"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-navy" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}` })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? "max-h-80 border-t border-border shadow-soft" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col bg-white px-5 py-4 gap-1",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setMobileOpen(false),
					className: "flex items-center gap-3 px-4 py-3.5 rounded-xl text-navy font-semibold text-base hover:bg-mist hover:text-electric transition-all",
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
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Operarios DISET en trabajos verticales sobre fachada de cristal en Barcelona",
						width: 1920,
						height: 1080,
						className: "absolute inset-0 w-full h-full object-cover object-[55%_10%] md:object-center scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(110deg,rgba(13,59,102,0.92)_0%,rgba(13,59,102,0.75)_45%,rgba(13,59,102,0.25)_100%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_50%,rgba(0,150,255,0.25),transparent_70%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase animate-[fade-in_0.8s_ease-out]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-electric animate-pulse" }), "Trabajos verticales · Barcelona"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]",
							children: [
								"Especialistas en ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-white to-electric bg-clip-text text-transparent",
									children: "trabajos verticales"
								}),
								" y limpieza en altura en Barcelona"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fade-up_1s_0.15s_cubic-bezier(0.22,1,0.36,1)_both]",
							children: "Limpieza de cristales, fachadas, placas solares e instalación de líneas de vida para empresas, industrias y comunidades."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-3 animate-[fade-up_1s_0.25s_cubic-bezier(0.22,1,0.36,1)_both]",
							children: [
								"Presupuesto gratuito",
								"Técnicos certificados",
								"Cobertura Barcelona y provincia"
							].map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 text-sm text-white/90 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#0096FF",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
								}), badge]
							}, badge))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contacto",
								className: "group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-electric text-white font-bold shadow-glow hover:shadow-elev hover:-translate-y-0.5 transition-all",
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white font-bold",
								children: "+4.500 proyectos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "completados con éxito" })] })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold tracking-widest uppercase animate-bounce",
				children: "Scroll"
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				className: "text-center md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-5xl md:text-6xl font-extrabold text-navy tracking-tight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider",
					children: s.label
				})]
			}, s.label))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-28 lg:py-36 bg-white",
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
						className: "group relative overflow-hidden rounded-2xl bg-mist border border-border hover:border-electric/40 hover:shadow-elev transition-all duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.title,
								loading: "lazy",
								width: 1024,
								height: 640,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-extrabold text-navy",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base text-muted-foreground leading-relaxed",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 inline-flex items-center gap-2 text-electric font-bold text-base group-hover:gap-3 transition-all",
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
		className: "py-28 lg:py-36 bg-mist",
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
function Benefits() {
	const icons = [
		"M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
		"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
		"M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
		"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		"M20 6 9 17l-5-5",
		"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl mb-16",
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
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					className: "bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-10 h-full hover:bg-mist transition-colors group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-xl bg-navy/5 text-navy grid place-items-center group-hover:bg-electric group-hover:text-white transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icons[i] })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-extrabold text-navy",
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
		className: "py-28 lg:py-36 bg-ink overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.2em] uppercase text-electric",
						children: "DISET en acción"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white",
						children: "Profesionales que trabajan donde otros no llegan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/70 leading-relaxed text-lg",
						children: "Nuestro equipo de técnicos certificados en trabajos verticales opera con los más altos estándares de seguridad en toda la provincia de Barcelona."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-4",
						children: [
							{
								n: "+25",
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
							className: "bg-white/5 border border-white/10 rounded-xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-extrabold text-electric",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-white/60 mt-1",
								children: s.l
							})]
						}, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full max-w-[320px] lg:max-w-[360px] rounded-2xl overflow-hidden shadow-elev",
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
										src: `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
										alt: "DISET técnicos en trabajos verticales",
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-20 rounded-full bg-electric grid place-items-center shadow-glow group-hover:scale-110 transition-transform",
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
		className: "py-28 lg:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl mb-20",
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10",
					children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pb-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-20 h-20 rounded-2xl bg-mist border border-border grid place-items-center text-electric font-extrabold text-2xl relative z-10",
									children: p.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-extrabold text-navy",
									children: p.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base text-muted-foreground leading-relaxed",
									children: p.d
								})
							]
						})
					}, p.n))
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "#0096FF",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
						}, k))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold text-electric",
						children: "+4.500 proyectos satisfechos"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]",
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
						className: "flex flex-col bg-white rounded-2xl p-8 border border-border hover:shadow-elev hover:-translate-y-1 transition-all duration-500 h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-electric mb-5",
								children: [...Array(5)].map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" })
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-6xl leading-none font-bold mb-3",
								style: {
									color: "#0096FF",
									opacity: .25
								},
								"aria-hidden": true,
								children: "❝"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-ink flex-1",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 pt-5 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-extrabold text-navy",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-slate-500 mt-0.5",
									children: t.role
								})]
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
		className: "py-28 lg:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center",
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
					className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-md",
					children: "Operamos en toda la provincia con equipos propios y vehículos preparados para intervenciones rápidas. Sin subcontratas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-3 text-sm font-semibold text-navy",
					children: [
						"Barcelona ciudad",
						"L'Hospitalet",
						"Badalona",
						"Sabadell",
						"Terrassa",
						"Mataró",
						"Sant Cugat",
						"Granollers"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-electric" }),
							" ",
							c
						]
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 p-6 rounded-2xl bg-mist border border-border space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "text-electric mt-0.5 shrink-0",
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "10",
									r: "3"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-extrabold text-navy text-sm",
								children: "Dirección"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-muted-foreground text-sm",
								children: [
									"Carrer de Cuzco, 39-41",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"08030 Barcelona"
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "text-electric mt-0.5 shrink-0",
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "12",
									r: "10"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 6v6l4 2" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-extrabold text-navy text-sm",
								children: "Horario de atención"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground text-sm",
								children: "Lunes a Viernes: 08:00 – 19:00"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "text-electric mt-0.5 shrink-0",
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-extrabold text-navy text-sm",
								children: "Teléfono"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PHONE_HREF,
								className: "text-electric font-bold text-sm hover:underline",
								children: PHONE
							})] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square rounded-2xl overflow-hidden border border-border shadow-elev bg-mist",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Ubicación DISET — Carrer de Cuzco 39-41, Barcelona",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359223363065!2d2.1814110766324225!3d41.41750007129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a321200df13b%3A0xc319138ce3ed8966!2sCarrer%20de%20Cuzco%2C%2039%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses",
						className: "w-full h-full grayscale-[0.2]",
						style: { border: 0 },
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none ring-1 ring-inset ring-navy/10" })]
				})
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
	const lbl = light ? "block text-navy text-sm font-semibold mb-1.5" : "block text-white/80 text-sm font-semibold mb-1.5";
	const inp = light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric transition-all" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all";
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
				className: light ? "w-full h-12 px-4 rounded-xl bg-mist border border-border text-ink text-sm focus:outline-none focus:border-electric transition-all appearance-none" : "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all appearance-none",
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
				className: light ? "w-full px-4 py-3 rounded-xl bg-mist border border-border text-ink placeholder-muted-foreground text-sm focus:outline-none focus:border-electric transition-all resize-none" : "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-electric focus:bg-white/15 transition-all resize-none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "w-full rounded-xl bg-electric text-white font-bold shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 py-3.5",
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-electric animate-pulse" }), " Respuesta en menos de 24h"]
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
									className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-xl bg-electric grid place-items-center shrink-0 shadow-glow",
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
									className: "flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/40 transition-all group",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-white/60 text-xs font-semibold uppercase tracking-wider",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-white font-bold group-hover:text-electric transition-colors break-all",
											children: "info@disetlimpiezasverticales.com"
										})] }),
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-white/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { white: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md leading-relaxed text-white/60",
							children: "Especialistas en trabajos verticales y limpieza en altura en Barcelona y provincia. +25 años elevando los estándares del sector."
						})]
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
								className: "text-white/50 text-xs",
								children: "Lun – Vie · 08:00 – 19:00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PHONE_HREF,
								className: "hover:text-electric font-semibold",
								children: PHONE
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@disetlimpiezasverticales.com",
								className: "hover:text-electric",
								children: "info@disetlimpiezasverticales.com"
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coverage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
