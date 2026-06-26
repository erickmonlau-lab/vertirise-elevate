import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

export function AnimatedShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Window grid: 4 columns, 6 rows
  const cols = 4;
  const rows = 6;
  const windowWidth = 60;
  const windowHeight = 80;
  const gapX = 10;
  const gapY = 15;
  const startX = 25; // to center the 4 columns in a 320 width facade
  const startY = 60;

  // Total building width: 4 * 60 + 3 * 10 = 270. Centered in 320 -> startX = 25
  const windows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      windows.push({ r, c });
    }
  }

  // Animation duration
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
              Nuestros técnicos especializados combinan precisión y seguridad para devolverle el brillo a su edificio. Observa cómo desaparece la suciedad, ventana a ventana.
            </p>
          </Reveal>
        </div>

        {/* Animation Side */}
        <div className="flex-1 w-full max-w-[500px] aspect-[4/5] relative rounded-3xl overflow-hidden bg-[#0a1628] border border-white/10 shadow-elev shrink-0 z-10 flex items-end justify-center">
          
          {/* SVG Canvas */}
          <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a1628" />
                <stop offset="100%" stopColor="#040b14" />
              </linearGradient>
              <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0D3B66" />
                <stop offset="50%" stopColor="#0096FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0a1628" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="400" height="500" fill="url(#sky)" />

            {/* Building Structure */}
            <g transform="translate(40, 50)">
              {/* Facade base */}
              <rect width="320" height="450" fill="#060e1a" stroke="#0096FF" strokeOpacity="0.3" strokeWidth="2" rx="4" />
              
              {/* Roof line */}
              <rect width="330" height="10" x="-5" y="-10" fill="#0D3B66" rx="2" />
              
              {/* Windows */}
              {windows.map(({ r, c }) => {
                const x = startX + c * (windowWidth + gapX);
                const y = startY + r * (windowHeight + gapY);
                let cleanDelay = 0;
                let willClean = false;
                if (c === 0 || c === 1) {
                  cleanDelay = (r / rows) * (duration * 0.7); 
                  willClean = true;
                } else if (c === 2 || c === 3) {
                  cleanDelay = 2 + (r / rows) * (duration * 0.7);
                  willClean = true;
                }

                return (
                  <g key={`${r}-${c}`} transform={`translate(${x}, ${y})`}>
                    <rect width={windowWidth} height={windowHeight} fill="url(#glass)" rx="2" stroke="#ffffff" strokeOpacity="0.05" />
                    <polygon points={`0,0 ${windowWidth},0 0,${windowHeight}`} fill="#ffffff" opacity="0.03" />
                    
                    {mounted && willClean ? (
                      <rect 
                        width={windowWidth} 
                        height={windowHeight} 
                        fill="#332d22" 
                        opacity="0.8" 
                        rx="2"
                        className="animate-clean-glass"
                        style={{ 
                          animationDuration: `${duration}s`, 
                          animationDelay: `${cleanDelay}s`,
                          animationIterationCount: 'infinite',
                          animationFillMode: 'both'
                        }}
                      />
                    ) : (
                      <rect width={windowWidth} height={windowHeight} fill="#332d22" opacity="0.8" rx="2" />
                    )}
                  </g>
                );
              })}

              {/* Ropes */}
              {mounted && (
                <>
                  <line x1="120" y1="-10" x2="120" y2="450" stroke="#4a5568" strokeWidth="1.5" />
                  <line x1="200" y1="-10" x2="200" y2="450" stroke="#4a5568" strokeWidth="1.5" />

                  {/* Worker 1 */}
                  <g className="animate-rappel" style={{ animationDuration: `${duration}s`, animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
                    <g transform="translate(120, -20)">
                      <circle cx="0" cy="5" r="8" fill="#e2e8f0" />
                      <rect x="-6" y="8" width="12" height="18" rx="4" fill="#0096FF" />
                      <rect x="-4" y="24" width="8" height="12" rx="3" fill="#1e293b" />
                      <path d="M -7 5 A 7 7 0 0 1 7 5 Z" fill="#fbbf24" />
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
                    <g transform="translate(200, -20)">
                      <circle cx="0" cy="5" r="8" fill="#e2e8f0" />
                      <rect x="-6" y="8" width="12" height="18" rx="4" fill="#0096FF" />
                      <rect x="-4" y="24" width="8" height="12" rx="3" fill="#1e293b" />
                      <path d="M -7 5 A 7 7 0 0 1 7 5 Z" fill="#fbbf24" />
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
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
