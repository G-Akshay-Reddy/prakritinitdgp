import { useEffect } from "react";
import { site } from "../../data/content";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
}

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (property) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.content = content;
}

export function Seo({ title, description, image, canonicalPath = "/" }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("PRAKRITI") ? title : `${title} | PRAKRITI`;
    const canonical = `${window.location.origin}${canonicalPath}`;
    const shareImage = image ?? site.logo ?? "/media/Shrishti/16.jpg";

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", shareImage, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", shareImage);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [canonicalPath, description, image, title]);

  return null;
}
