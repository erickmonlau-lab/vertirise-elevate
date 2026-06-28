import { useRef, useEffect, useState } from "react";
import { useTranslation } from "../i18n/I18nContext";
import logoDiset from "@/assets/logo-diset.webp";

function BuildingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 300;
    // Resize canvas height to match parent
    const parent = canvas.parentElement;
    const H = parent ? parent.clientHeight : 500;
    canvas.width = W;
    canvas.height = H;

    // ── Building geometry ──────────────────────────────────────────────
    const bldLeft = 20;
    const bldRight = 160;
    const bldTop = 10;
    const bldBottom = H - 10;
    const bldW = bldRight - bldLeft;
    const bldH = bldBottom - bldTop;

    // Window grid
    const cols = 5;
    const rows = Math.floor(bldH / 28);
    const winW = 14;
    const winH = 16;
    const hGap = (bldW - cols * winW) / (cols + 1);
    const vGap = (bldH - rows * winH) / (rows + 1);

    // Generate window states
    const windows: { lit: boolean; opacity: number; timer: number; interval: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        windows.push({
          lit: Math.random() > 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          timer: 0,
          interval: Math.random() * 180 + 60, // frames between state changes
        });
      }
    }

    // ── Operarios ──────────────────────────────────────────────────────
    const ropeXs = [bldLeft + 30, bldLeft + 75, bldLeft + 120];
    const workers = ropeXs.map((rx, i) => ({
      x: rx,
      y: bldTop + (i * bldH) / 4,            // staggered start
      speed: 0.4 + i * 0.15,
      dir: i % 2 === 0 ? 1 : -1,
      top: bldTop,
      bottom: bldBottom - 30,
    }));

    let raf: number;
    let frame = 0;

    function neon(color: string, blur = 10) {
      ctx.shadowBlur = blur;
      ctx.shadowColor = color;
    }
    function clearFx() { ctx.shadowBlur = 0; }

    function drawBuilding() {
      // Outer shell
      ctx.strokeStyle = '#0096FF';
      ctx.lineWidth = 1.5;
      neon('#0096FF', 8);
      ctx.strokeRect(bldLeft, bldTop, bldW, bldH);
      clearFx();

      // Horizontal floor lines
      ctx.strokeStyle = 'rgba(0,150,255,0.15)';
      ctx.lineWidth = 0.5;
      for (let r = 1; r < rows; r++) {
        const fy = bldTop + vGap + r * (winH + vGap) - vGap / 2;
        ctx.beginPath();
        ctx.moveTo(bldLeft, fy);
        ctx.lineTo(bldRight, fy);
        ctx.stroke();
      }
    }

    function drawWindows() {
      windows.forEach((win, idx) => {
        const r = Math.floor(idx / cols);
        const c = idx % cols;
        const wx = bldLeft + hGap + c * (winW + hGap);
        const wy = bldTop + vGap + r * (winH + vGap);

        win.timer++;
        if (win.timer >= win.interval) {
          win.lit = !win.lit;
          win.opacity = Math.random() * 0.55 + 0.25;
          win.timer = 0;
          win.interval = Math.random() * 200 + 60;
        }

        if (win.lit) {
          ctx.fillStyle = `rgba(0,150,255,${win.opacity})`;
          neon('#0096FF', 6);
          ctx.fillRect(wx, wy, winW, winH);
          clearFx();
        } else {
          ctx.fillStyle = 'rgba(0,30,60,0.6)';
          ctx.fillRect(wx, wy, winW, winH);
        }
        // Window border
        ctx.strokeStyle = 'rgba(0,150,255,0.3)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(wx, wy, winW, winH);
      });
    }

    function drawRopes() {
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(0,150,255,0.4)';
      ctx.lineWidth = 1;
      ropeXs.forEach(rx => {
        ctx.beginPath();
        ctx.moveTo(rx, bldTop);
        ctx.lineTo(rx, bldBottom);
        ctx.stroke();
      });
      ctx.setLineDash([]);
    }

    function drawWorker(x: number, y: number) {
      ctx.strokeStyle = '#0096FF';
      ctx.lineWidth = 1.5;
      neon('#0096FF', 15);

      // Helmet / head
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.stroke();

      // Body
      ctx.beginPath();
      ctx.moveTo(x, y + 5);
      ctx.lineTo(x, y + 16);
      ctx.stroke();

      // Arms (T-shape)
      ctx.beginPath();
      ctx.moveTo(x - 7, y + 9);
      ctx.lineTo(x + 7, y + 9);
      ctx.stroke();

      // Legs
      ctx.beginPath();
      ctx.moveTo(x, y + 16);
      ctx.lineTo(x - 4, y + 25);
      ctx.moveTo(x, y + 16);
      ctx.lineTo(x + 4, y + 25);
      ctx.stroke();

      // Cleaning bucket (small rect below)
      ctx.strokeRect(x - 4, y + 26, 8, 6);

      clearFx();
    }

    function render() {
      ctx.clearRect(0, 0, W, H);
      frame++;

      drawBuilding();
      drawWindows();
      drawRopes();

      // Move and draw workers
      workers.forEach(w => {
        w.y += w.speed * w.dir;
        if (w.y >= w.bottom) { w.dir = -1; }
        if (w.y <= w.top + 10) { w.dir = 1; }
        drawWorker(w.x, w.y);
      });

      raf = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '300px',
        height: '100%',
        opacity: 0.6,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

const PHONE_HREF = "tel:+34936556161";
const WA_HREF = "https://wa.me/34936556161?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20gratuito.";
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0b1121] text-white pt-20 pb-10 relative overflow-hidden">
      <BuildingCanvas />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoDiset}
                alt="Vertirise Elevate"
                className="h-10 w-auto invert brightness-0 opacity-90"
              />
            </div>
            <p className="text-slate-400 text-sm mb-2">Carrer de Cuzco, 39-41, 08030 Barcelona</p>
            <p className="text-slate-400 text-sm mb-6">info@vertirise.com</p>
            <div className="text-slate-400 text-sm">
              <p className="font-semibold text-slate-300 mb-1">{t("footer.schedule.label")}:</p>
              <p>{t("footer.schedule")}</p>
              <p className="mt-1 font-bold text-white text-lg">935 22 43 05</p>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.company")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.company.work")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors flex items-center gap-2">
                  {t("footer.company.cancel")}
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">{t("footer.legal")}</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.notice")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.cookies")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">
                  {t("footer.legal.privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Zonas de Trabajo */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">
              {t("footer.zones")}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.barcelona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.maresme")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.girona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.tarragona")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric"></div>{t("footer.zone.lleida")}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vertirise Elevate. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

// — Sticky Mobile CTA —
export function StickyMobileCTA() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 h-12 rounded-xl bg-electric text-white font-bold flex items-center justify-center gap-2 shadow-glow active:scale-95 transition-transform"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="font-semibold">{t("nav.call", "Llamar")}</span>
        </a>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.456 2 1.953 6.503 1.953 12.051c0 1.884.522 3.648 1.426 5.158L2 22l4.946-1.355a10.022 10.022 0 0 0 5.058 1.356C17.55 22 22.051 17.497 22.051 11.95 22.051 6.403 17.55 2 12.004 2zm0 18.316a8.278 8.278 0 0 1-4.228-1.157l-.303-.18-3.136.859.842-3.088-.197-.314A8.265 8.265 0 0 1 3.738 12.05c0-4.564 3.71-8.274 8.266-8.274 4.555 0 8.266 3.71 8.266 8.274 0 4.564-3.71 8.266-8.266 8.266z" />
          </svg>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
