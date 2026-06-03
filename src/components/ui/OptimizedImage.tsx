import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  eager?: boolean;
}

export function OptimizedImage({ src, alt, className, eager = false, ...props }: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      className={className}
      {...props}
    />
  );
}
