import { useCallback, useRef } from "react";

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const beforeImgRef = useRef<HTMLImageElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    
    // Calculate percentage position
    const rect = el.getBoundingClientRect();
    const p = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    
    // Direct DOM manipulation for 60fps performance (bypassing React state)
    if (beforeImgRef.current) {
      beforeImgRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `${p}%`;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => {
        if (dragging.current) {
          // Use requestAnimationFrame for smoother updates on some devices
          requestAnimationFrame(() => move(e.clientX));
        }
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
      onTouchMove={(e) => { 
        e.preventDefault(); 
        if (dragging.current) {
          requestAnimationFrame(() => move(e.touches[0].clientX));
        }
      }}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* After image (full width background) */}
      <img src={after} alt="Después" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (clipped directly using CSS clip-path for high performance) */}
      <img
        ref={beforeImgRef}
        src={before}
        alt="Antes"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ clipPath: "inset(0 50% 0 0)", willChange: "clip-path" }}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">ANTES</div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">DESPUÉS</div>

      {/* Divider line */}
      <div
        ref={dividerRef}
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30"
        style={{ left: "50%", willChange: "left" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
