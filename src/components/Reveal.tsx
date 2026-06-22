import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "h1" | "h2" | "h3" | "p" | "span" | "li";
};

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // @ts-expect-error dynamic tag ref
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
