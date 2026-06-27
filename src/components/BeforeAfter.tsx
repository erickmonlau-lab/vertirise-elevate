import { useRef } from "react";
import { useTranslation } from "@/i18n/I18nContext";

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const { t } = useTranslation();

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    containerRef.current.style.setProperty("--position", `${p}%`);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-elev select-none bg-navy"
      style={{ "--position": "50%" } as React.CSSProperties}
    >
      {/* After image (Base layer) */}
      <img
        src={after}
        alt={t("beforeafter.after")}
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before image Wrapper — moves left to reveal the after image */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
        style={{ transform: "translate3d(calc(var(--position) - 100%), 0, 0)", willChange: "transform" }}
      >
        <img
          src={before}
          alt={t("beforeafter.before")}
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ transform: "translate3d(calc(100% - var(--position)), 0, 0)", willChange: "transform" }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">
        {t("beforeafter.before")}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">
        {t("beforeafter.after")}
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30 pointer-events-none"
        style={{ left: "var(--position)", willChange: "left" }}
      />

      {/* Handle Button — only this element accepts pointer events */}
      <div
        className="absolute top-1/2 w-14 h-14 -translate-y-1/2 -ml-7 bg-transparent z-40 touch-none flex items-center justify-center cursor-ew-resize"
        style={{ left: "var(--position)", willChange: "left" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20 pointer-events-none">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0096FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
