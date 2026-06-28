import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/og-home.webp",
  ogType = "website",
  keywords,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.replace("[", "").replace("]", "").split("=");
        el.setAttribute(attrName.trim(), attrValue?.replace(/"/g, "").trim() || "");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (selector: string, attrs: Record<string, string>) => {
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    // Basic meta
    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    // Robots
    setMeta('meta[name="robots"]', "name", "robots");
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Geo
    setMeta('meta[name="geo.region"]', "content", "ES-CT");
    setMeta('meta[name="geo.placename"]', "content", "Barcelona");
    setMeta('meta[name="geo.position"]', "content", "41.3851;2.1734");
    setMeta('meta[name="ICBM"]', "content", "41.3851, 2.1734");
    setMeta('meta[name="author"]', "content", "DISET Limpiezas Verticales");

    // OG
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:image:alt"]', "content", title);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:site_name"]', "content", "DISET Limpiezas Verticales");
    setMeta('meta[property="og:locale"]', "content", "es_ES");
    setMeta('meta[property="og:locale:alternate"]', "content", "ca_ES");

    // Twitter
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);

    // Canonical
    setLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

    // Hreflang
    setLink('link[hreflang="es"]', { rel: "alternate", hreflang: "es", href: canonical });
    setLink('link[hreflang="ca"]', { rel: "alternate", hreflang: "ca", href: canonical });
    setLink('link[hreflang="en"]', { rel: "alternate", hreflang: "en", href: canonical });
    setLink('link[hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: canonical });
  }, [title, description, canonical, ogImage, ogType, keywords]);

  return null;
}
