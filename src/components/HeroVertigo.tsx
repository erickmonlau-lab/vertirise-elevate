import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import vertigoImg from "@/assets/vertigo-facade.png";

gsap.registerPlugin(ScrollTrigger);

export function HeroVertigo() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !stickyRef.current) return;

    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Fallback for reduced motion
      gsap.set(".vertigo-bg", { scale: 1, opacity: 1 });
      gsap.set([".word-1", ".word-2", ".word-3", ".final-content"], { opacity: 1, scale: 1, position: "relative", top: "auto", left: "auto", transform: "none", marginBottom: "2rem" });
      return;
    }

    // Set initial states
    gsap.set([".word-1", ".word-2", ".word-3"], { scale: 0.01, opacity: 0, transformOrigin: "center center" });
    gsap.set(".final-content", { opacity: 0, y: 100 });
    gsap.set(".speed-lines", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Super smooth scrubbing
      }
    });

    // 1. Background "Falling" Animation
    // Zooming into the top-down image simulates falling towards the street
    tl.to(".vertigo-bg", {
      scale: 3,
      yPercent: -15,
      filter: "blur(6px) brightness(0.6)",
      duration: 6,
      ease: "power2.inOut"
    }, 0);

    // Speed lines fade in to enhance falling sensation
    tl.to(".speed-lines", { opacity: 0.3, duration: 1 }, 1);
    tl.to(".speed-lines", { opacity: 0, duration: 1 }, 5);

    // 2. Word 1: RESTAURAMOS
    tl.to(".word-1", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 0);
    tl.to(".word-1", { scale: 15, opacity: 0, duration: 1, ease: "power3.in" }, 1.5); // Flies past camera

    // 3. Word 2: CLARIDAD (Electric Blue)
    tl.to(".word-2", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 1.8);
    tl.to(".word-2", { scale: 15, opacity: 0, duration: 1, ease: "power3.in" }, 3.3);

    // 4. Word 3: A CUALQUIER ALTURA
    tl.to(".word-3", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 3.6);
    tl.to(".word-3", { y: "-15vh", duration: 1, ease: "power2.out" }, 5.1); // Stays on screen, moves up

    // 5. Final CTA Content
    tl.to(".final-content", { opacity: 1, y: 0, duration: 1, ease: "power2.out", pointerEvents: "auto" }, 5.1);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#02040a]" id="top">
      {/* Sticky container holds the viewport while we scroll down the 600vh height */}
      <div ref={stickyRef} className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center justify-center">
        
        {/* BACKGROUND LAYER: The Abyss */}
        <div className="absolute inset-0 z-0 origin-[50%_20%]">
          <div className="vertigo-bg absolute inset-0 w-full h-full scale-110">
            <img 
              src={vertigoImg} 
              alt="Mirando hacia abajo por una fachada de cristal en Barcelona" 
              className="w-full h-full object-cover object-top"
            />
            {/* Dark gradient overlay to keep text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/40 via-[#02040a]/70 to-[#02040a]/95" />
          </div>
        </div>

        {/* SPEED LINES (Vertical lines sliding up to simulate falling speed) */}
        <div className="speed-lines absolute inset-0 z-10 pointer-events-none opacity-0 overflow-hidden flex justify-center gap-[20vw]">
          <div className="w-[1px] h-[200vh] bg-white/20 animate-[slide-up_1s_linear_infinite]" />
          <div className="w-[2px] h-[150vh] bg-electric/20 animate-[slide-up_0.8s_linear_infinite]" style={{ animationDelay: '0.2s' }} />
          <div className="w-[1px] h-[250vh] bg-white/10 animate-[slide-up_1.2s_linear_infinite]" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* 3D TYPOGRAPHY SEQUENCE */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none perspective-[1000px]">
          <h1 className="text-white text-[12vw] md:text-[9vw] font-black uppercase text-center leading-none tracking-tight w-full px-4">
            <div className="word-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-shadow-xl">
              Restauramos
            </div>
            <div className="word-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gradient-to-b from-electric to-[#60b6ff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,150,255,0.4)]">
              Claridad
            </div>
            <div className="word-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[8vw] md:text-[6vw] text-white/95">
              A cualquier altura.
            </div>
          </h1>
        </div>

        {/* FINAL HERO CONTENT (Fades in at the bottom of the "fall") */}
        <div className="final-content absolute inset-0 z-30 flex flex-col items-center justify-center pt-[25vh] px-6 pointer-events-none">
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-medium max-w-2xl text-center mb-10 leading-relaxed text-shadow-md">
            La referencia técnica en Barcelona para la limpieza y mantenimiento de fachadas de cristal mediante acceso por cuerdas. Precisión, seguridad y resultados impecables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a 
              href="#contacto" 
              className="group relative inline-flex items-center justify-center h-14 px-10 rounded-full bg-electric text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,150,255,0.4)] hover:shadow-[0_0_40px_rgba(0,150,255,0.7)] transition-all duration-300 hover:-translate-y-1"
            >
              Solicitar Presupuesto
            </a>
            <a 
              href="#proceso" 
              className="group inline-flex items-center justify-center h-14 px-10 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
            >
              Ver Proceso
              <svg className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-y-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-50 animate-pulse pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Desciende</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
}
