import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import buildingBcnImg from "@/assets/building-bcn.png";
import workerPhotoImg from "@/assets/worker-photo.png";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !rightColRef.current) return;

    // 1. Reveal Timeline on Scroll into view (Animate only once)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none", // Play once
      }
    });
    
    tl.fromTo(".anim-text", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power2.out" }
    );
    
    tl.fromTo(rightColRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
      "-=1.0"
    );

    // 2. Worker Cleaning Scroll Animation (Directly connected to scroll)
    gsap.fromTo(".anim-worker", 
      { y: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5, // Extremely smooth
        },
        y: 400,
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
          scrub: 0.5,
        },
        scaleY: 1,
        ease: "none"
      }
    );

    // Subtle diagonal light sweep
    gsap.to(".anim-reflection", {
      x: 600,
      y: 600,
      duration: 4,
      repeat: -1,
      repeatDelay: 3,
      ease: "power1.inOut",
    });

  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !rightColRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Very subtle reaction to mouse movement (max 8px)
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    
    gsap.to(rightColRef.current, { x: -x, y: -y, duration: 1.5, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    if (rightColRef.current) gsap.to(rightColRef.current, { x: 0, y: 0, duration: 1.5, ease: "power2.out" });
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 flex items-center justify-center bg-[#02040a] overflow-hidden"
    >
      {/* 1. LAYERED BACKGROUND (Elegant, atmospheric, no flashy particles) */}
      <div className="absolute inset-0 z-0 bg-parallax pointer-events-none">
        {/* Soft deep blue gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a1628_0%,#02040a_80%)] opacity-90" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
        {/* Light atmospheric noise */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Typography */}
        <div ref={leftColRef} className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          
          <div className="anim-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            En Acción
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            <div className="anim-text overflow-hidden">
              <span>Cuidamos cada</span>
            </div>
            <div className="anim-text overflow-hidden py-1">
              <span className="bg-gradient-to-r from-electric to-[#60b6ff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,150,255,0.2)]">
                detalle
              </span>
            </div>
            <div className="anim-text overflow-hidden">
              <span className="text-white/90">a cualquier altura.</span>
            </div>
          </h1>

          <p className="anim-text text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-[520px] mb-12">
            Nuestros técnicos especializados combinan precisión y seguridad para devolverle el brillo a su edificio. Observa cómo desaparece la suciedad a su paso.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
            <div className="anim-text">
              <a 
                ref={btn1Ref}
                href="#contacto" 
                className="group relative inline-flex items-center justify-center h-14 px-8 rounded-full bg-electric text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,150,255,0.2)] hover:shadow-[0_0_30px_rgba(0,150,255,0.4)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Solicitar Presupuesto</span>
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

        {/* RIGHT COLUMN: Cinematic Building Container */}
        <div 
          ref={rightColRef} 
          className="flex-1 w-full max-w-[500px] aspect-[4/5] relative rounded-[36px] overflow-hidden bg-[#040b14] border border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.8),0_30px_100px_-20px_rgba(0,0,0,0.9)] shrink-0 z-10 flex items-start justify-center transform-gpu"
        >
          <div className="absolute inset-0 rounded-[36px] border border-white/10 opacity-30 mix-blend-overlay pointer-events-none z-30" />
          
          <svg viewBox="0 0 400 500" className="w-full h-full relative z-20" preserveAspectRatio="xMidYMax meet">
            <defs>
              <mask id="clean-mask">
                <rect width="400" height="500" fill="black" />
                <rect x="135" y="0" width="50" height="500" fill="white" className="anim-mask origin-top" style={{ transform: 'scaleY(0)' }} />
                <rect x="215" y="0" width="50" height="500" fill="white" className="anim-mask origin-top" style={{ transform: 'scaleY(0)' }} />
              </mask>

              <linearGradient id="reflection-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Dirty Background Layer (Slightly dirty, enough to notice) */}
            <image href={buildingBcnImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" opacity="0.95" filter="sepia(0.2) brightness(0.85) contrast(0.95)" />

            {/* Clean Background Layer (Brighter, sharper reflections, more saturated) */}
            <g mask="url(#clean-mask)">
              <image href={buildingBcnImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" filter="brightness(1.1) saturate(1.2) contrast(1.05)" />
              <rect x="-400" y="-400" width="800" height="800" fill="url(#reflection-grad)" className="anim-reflection mix-blend-overlay pointer-events-none" />
            </g>

            {/* Ropes & Photorealistic Workers */}
            <g>
              <line x1="160" y1="0" x2="160" y2="500" stroke="#000" strokeWidth="1" opacity="0.8" />
              <line x1="240" y1="0" x2="240" y2="500" stroke="#000" strokeWidth="1" opacity="0.8" />

              {/* Worker 1 */}
              <g className="anim-worker">
                <g transform="translate(140, 20)">
                  {/* Using mixBlendMode darken/multiply to remove the white background of the generated image */}
                  <image href={workerPhotoImg} width="40" height="60" style={{ mixBlendMode: 'darken' }} />
                </g>
              </g>

              {/* Worker 2 */}
              <g className="anim-worker" style={{ transform: 'translateY(-40px)' }}>
                <g transform="translate(220, 20)">
                  <image href={workerPhotoImg} width="40" height="60" style={{ mixBlendMode: 'darken' }} />
                </g>
              </g>
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
