import { useRef } from "react";

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || !containerRef.current) return;
    
    // Prevent default scroll behavior while actively dragging the handle
    // We only prevent default if it's a touch pointer, to avoid breaking mouse interactions unexpectedly
    if (e.pointerType === 'touch') {
      // Note: React's onPointerMove is passive by default in React 17+, but pointer capture
      // handles the drag routing. To avoid native scroll while panning the handle,
      // CSS touch-action: none is applied to the handle.
    }

    const rect = containerRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    
    // Direct DOM manipulation bypassing React
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
      {/* 
        OPTIMIZATION:
        Instead of clip-path (which can cause rasterization lag), we use Counter-Transform.
        The wrapper moves left, while the image inside moves right.
        This effectively clips the image using 100% GPU-accelerated compositing (translate3d)
        without causing Layout or Paint recalculations on mobile!
      */}

      {/* After image (Base layer) */}
      <img src={after} alt="Después" loading="eager" decoding="sync" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      {/* Before image Wrapper (Moves left to clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
        style={{ transform: "translate3d(calc(var(--position) - 100%), 0, 0)", willChange: "transform" }}
      >
        {/* Before image (Moves right to stay in place) */}
        <img
          src={before}
          alt="Antes"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ transform: "translate3d(calc(100% - var(--position)), 0, 0)", willChange: "transform" }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">ANTES</div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-electric text-white text-xs font-bold tracking-widest uppercase z-20 pointer-events-none">DESPUÉS</div>

      {/* Divider Line (Moves with position) */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,150,255,0.7)] z-30 pointer-events-none"
        style={{ left: "var(--position)", willChange: "left" }}
      ></div>

      {/* 
        The Handle Button 
        Only this button accepts pointer events. It uses setPointerCapture to track 
        finger movements smoothly outside its bounds once grabbed. 
        touch-action-none prevents the browser from trying to scroll when dragging the button.
      */}
      <div 
        className="absolute top-1/2 w-14 h-14 -translate-y-1/2 -ml-7 bg-transparent z-40 touch-none flex items-center justify-center cursor-ew-resize"
        style={{ left: "var(--position)", willChange: "left" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="w-12 h-12 rounded-full bg-white shadow-elev grid place-items-center border-2 border-electric/20 pointer-events-none">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0096FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      
    </div>
  );
}
