import { useRef } from "react";

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (containerRef.current) {
      // Use CSS variable for high performance, zero-react-render updates
      containerRef.current.style.setProperty("--position", `${e.target.value}%`);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none"
      style={{ "--position": "50%" } as React.CSSProperties}
    >
      {/* After image (full width background) */}
      <img src={after} alt="Después" loading="eager" decoding="sync" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (clipped directly using CSS variable for high performance) */}
      <img
        src={before}
        alt="Antes"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        style={{ clipPath: "polygon(0 0, var(--position) 0, var(--position) 100%, 0 100%)", willChange: "clip-path" }}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">ANTES</div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">DESPUÉS</div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30 pointer-events-none"
        style={{ left: "var(--position)", willChange: "left" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Invisible Range Slider for Native Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        onInput={handleInput}
        className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize m-0 p-0 touch-pan-y"
      />
    </div>
  );
}
