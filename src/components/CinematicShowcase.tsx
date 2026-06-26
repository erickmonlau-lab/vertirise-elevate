import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import vertigoImg from "@/assets/vertigo-facade.png";
import workerPhotoImg from "@/assets/worker-photo.png";

gsap.registerPlugin(ScrollTrigger);

export function CinematicShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !stickyRef.current) return;

    gsap.set([".word-1", ".word-2", ".word-3"], { scale: 0.01, opacity: 0, transformOrigin: "center center" });
    gsap.set(".final-content", { opacity: 0 });
    gsap.set(".speed-lines", { opacity: 0 });
    gsap.set(".worker-group", { y: "100vh" }); // Start below screen

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // 1. Background "Falling" Animation
    tl.to(".vertigo-bg", {
      scale: 3,
      yPercent: -15,
      duration: 8,
      ease: "power2.inOut"
    }, 0);

    // 2. Speed lines
    tl.to(".speed-lines", { opacity: 0.4, duration: 1 }, 0.5);
    tl.to(".speed-lines", { opacity: 0, duration: 1 }, 7);

    // 3. Typography Sequence (Flies past)
    tl.to(".word-1", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 0.5);
    tl.to(".word-1", { scale: 15, opacity: 0, duration: 1, ease: "power3.in" }, 2.0);

    tl.to(".word-2", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 2.5);
    tl.to(".word-2", { scale: 15, opacity: 0, duration: 1, ease: "power3.in" }, 4.0);

    tl.to(".word-3", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 4.5);
    tl.to(".word-3", { scale: 15, opacity: 0, duration: 1, ease: "power3.in" }, 6.0);

    // 4. Workers falling alongside / being passed by
    // Worker 1
    tl.to(".worker-1", { y: "-120vh", duration: 3, ease: "none" }, 1.0);
    // Worker 2
    tl.to(".worker-2", { y: "-120vh", duration: 3.5, ease: "none" }, 3.5);

    // 5. Final Fade to Black & CTA
    tl.to(".bg-overlay", { opacity: 0.95, duration: 1.5 }, 6.5);
    tl.to(".vertigo-bg", { filter: "blur(20px)", duration: 1.5 }, 6.5);
    tl.to(".final-content", { opacity: 1, duration: 1.5, pointerEvents: "auto" }, 6.5);

  }, { scope: containerRef });



  return (
    <section ref={containerRef} className="relative h-[800vh] bg-[#02040a]" id="proceso">
      <div ref={stickyRef} className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center justify-center">
        
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 origin-[50%_20%]">
          <div className="vertigo-bg absolute inset-0 w-full h-full scale-110">
            <img 
              src={vertigoImg} 
              alt="Fachada de cristal" 
              className="w-full h-full object-cover object-top"
            />
            {/* The overlay gets extremely dark at the end so text is readable */}
            <div className="bg-overlay absolute inset-0 bg-gradient-to-b from-[#02040a]/40 via-[#02040a]/70 to-[#02040a]/90 transition-opacity" />
          </div>
        </div>

        {/* WORKERS AND ROPES */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Worker 1 */}
          <div className="worker-group worker-1 absolute left-[20%] w-[100px] flex flex-col items-center">
            <div className="w-[1px] h-[300vh] bg-black opacity-80 absolute bottom-[50px]" /> {/* Rope going up */}
            <div className="w-[1px] h-[300vh] bg-black opacity-80 absolute top-[50px]" /> {/* Rope going down */}
            <img src={workerPhotoImg} className="w-full relative z-10" style={{ mixBlendMode: 'darken' }} alt="Trabajador vertical" />
          </div>

          {/* Worker 2 */}
          <div className="worker-group worker-2 absolute right-[25%] w-[80px] flex flex-col items-center">
            <div className="w-[1px] h-[300vh] bg-black opacity-80 absolute bottom-[40px]" />
            <div className="w-[1px] h-[300vh] bg-black opacity-80 absolute top-[40px]" />
            <img src={workerPhotoImg} className="w-full relative z-10" style={{ mixBlendMode: 'darken', transform: 'scaleX(-1)' }} alt="Trabajador vertical" />
          </div>
        </div>

        {/* SPEED LINES */}
        <div className="speed-lines absolute inset-0 z-15 pointer-events-none opacity-0 overflow-hidden flex justify-center gap-[20vw]">
          <div className="w-[1px] h-[200vh] bg-white/20 animate-[slide-up_1s_linear_infinite]" />
          <div className="w-[2px] h-[150vh] bg-electric/20 animate-[slide-up_0.8s_linear_infinite]" style={{ animationDelay: '0.2s' }} />
          <div className="w-[1px] h-[250vh] bg-white/10 animate-[slide-up_1.2s_linear_infinite]" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* 3D TYPOGRAPHY SEQUENCE */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none perspective-[1000px]">
          <h2 className="text-white text-[12vw] md:text-[9vw] font-black uppercase text-center leading-none tracking-tight w-full px-4">
            <div className="word-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-shadow-xl">
              Cuidamos
            </div>
            <div className="word-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gradient-to-r from-electric to-[#60b6ff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,150,255,0.4)]">
              Cada Detalle
            </div>
            <div className="word-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[8vw] md:text-[6vw] text-white/95">
              A cualquier altura.
            </div>
          </h2>
        </div>

        {/* FINAL CONTENT (Fades in on dark background at the end of 800vh) */}
        <div className="final-content absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pointer-events-none">
          <p className="text-lg md:text-2xl text-white/80 font-medium max-w-3xl text-center mb-12 leading-relaxed text-shadow-md">
            Nuestros técnicos especializados combinan precisión y seguridad para devolverle el brillo a su edificio. Sin andamios, sin límites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a 
              href="#contacto" 
              className="group relative inline-flex items-center justify-center h-16 px-12 rounded-full bg-electric text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(0,150,255,0.4)] hover:shadow-[0_0_50px_rgba(0,150,255,0.7)] transition-all duration-300 hover:-translate-y-1"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-50 animate-[fade-in_1s_ease-in-out_infinite_alternate] pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Desciende</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
}
