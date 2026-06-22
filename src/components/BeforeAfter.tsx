import { useCallback, useRef, useState } from "react";

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={after} alt="Después" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Antes" className="absolute inset-0 h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>

      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ink/80 text-white text-xs font-semibold tracking-wide uppercase">Antes</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-electric text-white text-xs font-semibold tracking-wide uppercase">Después</div>

      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_24px_rgba(0,150,255,0.6)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
