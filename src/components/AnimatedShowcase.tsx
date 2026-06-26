import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import buildingFacadeImg from "@/assets/building-facade.png";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !rightColRef.current) return;

    // 1. Reveal Timeline on Scroll into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Starts animating when the top of the section hits 75% down the viewport
        toggleActions: "play none none reverse",
      }
    });
    
    tl.fromTo(".anim-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
    
    tl.fromTo(rightColRef.current,
      { scale: 1.15, filter: "blur(10px)", opacity: 0 },
      { scale: 1, filter: "blur(0px)", opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=1.0"
    );

    // 2. Scroll Animations
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      gsap.to(rightColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 60,
        rotateX: 8,
        rotateY: -4,
        scale: 0.98,
        ease: "none"
      });

      gsap.to(".bg-parallax", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
        ease: "none"
      });
    }

    // 3. Worker Cleaning Scroll Animation
    // We want the workers to scrub down as the user scrolls past the section
    gsap.fromTo(".anim-worker", 
      { y: 0 }, // Start at the top of the building
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Start scrubbing when section hits middle of screen
          end: "bottom center", // Finish when bottom hits middle of screen
          scrub: 1,
        },
        y: 430, // End near the bottom of the building
        ease: "none"
      }
    );

    gsap.fromTo(".anim-mask",
      { scaleY: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        scaleY: 1,
        ease: "none"
      }
    );

    gsap.to(".anim-reflection", {
      x: 600,
      y: 600,
      duration: 3,
      repeat: -1,
      repeatDelay: 2,
      ease: "power1.inOut",
    });

  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !rightColRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    
    gsap.to(rightColRef.current, { x: -x, y: -y, duration: 1.5, ease: "power2.out" });

    const handleMagnetic = (ref: React.RefObject<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const distanceX = clientX - btnCenterX;
      const distanceY = clientY - btnCenterY;
      
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 60) {
        gsap.to(ref.current, { x: distanceX * 0.2, y: distanceY * 0.2, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
      }
    };

    handleMagnetic(btn1Ref);
    handleMagnetic(btn2Ref);
  };

  const handleMouseLeave = () => {
    if (rightColRef.current) gsap.to(rightColRef.current, { x: 0, y: 0, duration: 1.5, ease: "power2.out" });
    if (btn1Ref.current) gsap.to(btn1Ref.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
    if (btn2Ref.current) gsap.to(btn2Ref.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 flex items-center justify-center bg-[#02040a] overflow-hidden perspective-[1200px]"
    >
      {/* 1. LAYERED BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-parallax pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0a1628_0%,#02040a_70%)] opacity-80" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy/40 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. MAIN CONTENT (TWO COLUMNS) */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Typography */}
        <div ref={leftColRef} className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          
          <div className="anim-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            En Acción
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            <div className="anim-text overflow-hidden">
              <span>Restauramos</span>
            </div>
            <div className="anim-text overflow-hidden py-1">
              <span className="bg-gradient-to-r from-electric to-[#60b6ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,150,255,0.4)]">
                claridad
              </span>
            </div>
            <div className="anim-text overflow-hidden">
              <span className="text-white/90">a cualquier altura.</span>
            </div>
          </h1>

          <p className="anim-text text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-[520px] mb-12">
            La referencia técnica en Barcelona para la limpieza y mantenimiento de fachadas de cristal mediante acceso por cuerdas. Precisión, seguridad y resultados impecables.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
            <div className="anim-text">
              <a 
                ref={btn1Ref}
                href="#contacto" 
                className="group relative inline-flex items-center justify-center h-14 px-8 rounded-full bg-electric text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,150,255,0.3)] hover:shadow-[0_0_40px_rgba(0,150,255,0.6)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Solicitar Presupuesto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
            <div className="anim-text">
              <a 
                ref={btn2Ref}
                href="#proceso" 
                className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-white/15 text-white font-bold text-sm tracking-wide hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Proceso
                <svg className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Building Container */}
        <div 
          ref={rightColRef} 
          className="flex-1 w-full max-w-[500px] aspect-[4/5] relative rounded-[36px] overflow-hidden bg-[#040b14] border border-white/10 shadow-[inset_0_0_80px_rgba(0,150,255,0.05),0_30px_100px_-20px_rgba(0,0,0,0.8)] shrink-0 z-10 flex items-start justify-center transform-gpu"
        >
          <div className="absolute inset-0 rounded-[36px] border border-white/20 opacity-50 mix-blend-overlay pointer-events-none z-30" />
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-30" />

          <svg viewBox="0 0 400 500" className="w-full h-full relative z-20" preserveAspectRatio="xMidYMax meet">
            <defs>
              <mask id="clean-mask">
                <rect width="400" height="500" fill="black" />
                <rect x="90" y="0" width="60" height="500" fill="white" className="anim-mask origin-top" style={{ transform: 'scaleY(0)' }} />
                <rect x="250" y="0" width="60" height="500" fill="white" className="anim-mask origin-top" style={{ transform: 'scaleY(0)' }} />
              </mask>

              <linearGradient id="reflection-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Dirty Background Layer */}
            <image href={buildingFacadeImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" opacity="0.5" filter="sepia(0.6) brightness(0.5) contrast(0.9)" />

            {/* Clean Background Layer */}
            <g mask="url(#clean-mask)">
              <image href={buildingFacadeImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" filter="brightness(1.15) saturate(1.2)" />
              <rect x="-400" y="-400" width="800" height="800" fill="url(#reflection-grad)" className="anim-reflection mix-blend-overlay pointer-events-none" />
            </g>

            {/* Ropes & Workers */}
            <g>
              <line x1="120" y1="0" x2="120" y2="500" stroke="#1e293b" strokeWidth="1.5" opacity="0.6" />
              <line x1="280" y1="0" x2="280" y2="500" stroke="#1e293b" strokeWidth="1.5" opacity="0.6" />

              {/* Worker 1 */}
              <g className="anim-worker">
                <g transform="translate(120, 20)">
                  <g fill="#e2e8f0">
                    <path d="M-6,2 C-6,-2 6,-2 6,2 L7,4 L-7,4 Z" fill="#fbbf24" />
                    <circle cx="0" cy="5" r="4" fill="#fbbf24" />
                    <path d="M-5,10 C-6,14 -6,18 -4,22 L4,22 C6,18 6,14 5,10 Z" fill="#0096FF" />
                    <path d="M-4,22 L-5,32 L-2,32 L-1,22 Z" fill="#1e293b" />
                    <path d="M4,22 L5,32 L2,32 L1,22 Z" fill="#1e293b" />
                    <path d="M-4,12 L4,16 M-4,16 L4,12" stroke="#1e293b" strokeWidth="1.5" />
                  </g>
                  <g className="animate-wipe">
                    <line x1="0" y1="12" x2="-25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-25" y1="-5" x2="-25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                  </g>
                  <g className="animate-wipe-alt">
                    <line x1="0" y1="12" x2="25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                    <line x1="25" y1="-5" x2="25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                  </g>
                </g>
              </g>

              {/* Worker 2 */}
              <g className="anim-worker" style={{ transform: 'translateY(-30px)' }}>
                <g transform="translate(280, 20)">
                  <g fill="#e2e8f0">
                    <path d="M-6,2 C-6,-2 6,-2 6,2 L7,4 L-7,4 Z" fill="#fbbf24" />
                    <circle cx="0" cy="5" r="4" fill="#fbbf24" />
                    <path d="M-5,10 C-6,14 -6,18 -4,22 L4,22 C6,18 6,14 5,10 Z" fill="#0096FF" />
                    <path d="M-4,22 L-5,32 L-2,32 L-1,22 Z" fill="#1e293b" />
                    <path d="M4,22 L5,32 L2,32 L1,22 Z" fill="#1e293b" />
                    <path d="M-4,12 L4,16 M-4,16 L4,12" stroke="#1e293b" strokeWidth="1.5" />
                  </g>
                  <g className="animate-wipe">
                    <line x1="0" y1="12" x2="-25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-25" y1="-5" x2="-25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                  </g>
                  <g className="animate-wipe-alt">
                    <line x1="0" y1="12" x2="25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                    <line x1="25" y1="-5" x2="25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
