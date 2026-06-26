import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import buildingFacadeImg from "@/assets/building-facade.png";

export function AnimatedShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const duration = 8; // seconds for full rappel cycle

  return (
    <section className="py-24 lg:py-32 bg-[#040b14] relative overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">En Acción</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
              Cuidamos cada <span className="text-electric">detalle</span><br />a cualquier altura.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Nuestros técnicos especializados combinan precisión y seguridad para devolverle el brillo a su edificio. Observa cómo desaparece la suciedad a su paso.
            </p>
          </Reveal>
        </div>

        {/* Animation Side */}
        <div className="flex-1 w-full max-w-[500px] aspect-[4/5] relative rounded-3xl overflow-hidden bg-[#0a1628] border border-white/10 shadow-elev shrink-0 z-10 flex items-end justify-center">
          
          {/* SVG Canvas */}
          <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            <defs>
              <mask id="clean-mask">
                <rect width="400" height="500" fill="black" />
                {mounted && (
                  <>
                    <rect x="90" y="0" width="60" height="500" fill="white" className="origin-top animate-grow-down" style={{ animationDuration: `${duration}s`, animationIterationCount: 'infinite', animationTimingFunction: 'linear' }} />
                    <rect x="250" y="0" width="60" height="500" fill="white" className="origin-top animate-grow-down" style={{ animationDuration: `${duration}s`, animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }} />
                  </>
                )}
              </mask>
            </defs>

            {/* Dirty Background Layer */}
            <image href={buildingFacadeImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" opacity="0.4" filter="sepia(0.8) brightness(0.6)" />

            {/* Clean Background Layer (Revealed by Mask) */}
            <image href={buildingFacadeImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" mask="url(#clean-mask)" />

            {mounted && (
              <>
                {/* Ropes */}
                <line x1="120" y1="-10" x2="120" y2="500" stroke="#1e293b" strokeWidth="1.5" />
                <line x1="280" y1="-10" x2="280" y2="500" stroke="#1e293b" strokeWidth="1.5" />

                {/* Worker 1 */}
                <g className="animate-rappel" style={{ animationDuration: `${duration}s`, animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                  <g transform="translate(120, -10)">
                    {/* Detailed Worker Silhouette */}
                    <g fill="#e2e8f0">
                      {/* Helmet */}
                      <path d="M-6,2 C-6,-2 6,-2 6,2 L7,4 L-7,4 Z" fill="#fbbf24" />
                      <circle cx="0" cy="5" r="4" fill="#fbbf24" />
                      {/* Body/Harness */}
                      <path d="M-5,10 C-6,14 -6,18 -4,22 L4,22 C6,18 6,14 5,10 Z" fill="#0096FF" />
                      {/* Legs */}
                      <path d="M-4,22 L-5,32 L-2,32 L-1,22 Z" fill="#1e293b" />
                      <path d="M4,22 L5,32 L2,32 L1,22 Z" fill="#1e293b" />
                      {/* Harness details */}
                      <path d="M-4,12 L4,16 M-4,16 L4,12" stroke="#1e293b" strokeWidth="1.5" />
                    </g>
                    {/* Wiping Arms */}
                    <g className="animate-wipe" style={{ animationDuration: '0.8s', animationIterationCount: 'infinite' }}>
                      <line x1="0" y1="12" x2="-25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                      <line x1="-25" y1="-5" x2="-25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                    </g>
                    <g className="animate-wipe-alt" style={{ animationDuration: '0.8s', animationIterationCount: 'infinite', animationDelay: '0.4s' }}>
                      <line x1="0" y1="12" x2="25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                      <line x1="25" y1="-5" x2="25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                    </g>
                  </g>
                </g>

                {/* Worker 2 */}
                <g className="animate-rappel" style={{ animationDuration: `${duration}s`, animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                  <g transform="translate(280, -10)">
                    {/* Detailed Worker Silhouette */}
                    <g fill="#e2e8f0">
                      {/* Helmet */}
                      <path d="M-6,2 C-6,-2 6,-2 6,2 L7,4 L-7,4 Z" fill="#fbbf24" />
                      <circle cx="0" cy="5" r="4" fill="#fbbf24" />
                      {/* Body/Harness */}
                      <path d="M-5,10 C-6,14 -6,18 -4,22 L4,22 C6,18 6,14 5,10 Z" fill="#0096FF" />
                      {/* Legs */}
                      <path d="M-4,22 L-5,32 L-2,32 L-1,22 Z" fill="#1e293b" />
                      <path d="M4,22 L5,32 L2,32 L1,22 Z" fill="#1e293b" />
                      {/* Harness details */}
                      <path d="M-4,12 L4,16 M-4,16 L4,12" stroke="#1e293b" strokeWidth="1.5" />
                    </g>
                    {/* Wiping Arms */}
                    <g className="animate-wipe" style={{ animationDuration: '0.8s', animationIterationCount: 'infinite' }}>
                      <line x1="0" y1="12" x2="-25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                      <line x1="-25" y1="-5" x2="-25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                    </g>
                    <g className="animate-wipe-alt" style={{ animationDuration: '0.8s', animationIterationCount: 'infinite', animationDelay: '0.4s' }}>
                      <line x1="0" y1="12" x2="25" y2="0" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                      <line x1="25" y1="-5" x2="25" y2="5" stroke="#fbbf24" strokeWidth="2" />
                    </g>
                  </g>
                </g>
              </>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}
