import { useEffect, useRef, useState } from "react";
import s from "./lazy-image.module.scss";

interface LazyImageProps {
  id: string;
  resolution: number[];
}

export const LazyImage = ({ id, resolution }: LazyImageProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const imgRef = useRef<any>(null);

  const source = `https://static.ui.com/fingerprint/ui/icons/${id}_${resolution
    .toString()
    .replace(/,/g, "x")}.png`;
  const width = !!resolution && resolution[0];
  const height = !!resolution && resolution[1];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const img = new Image();
      img.src = source;
      img.onload = () => {
        setImageSrc(source);
      };
    }
  }, [isIntersecting]);

  const isLoaded = imageSrc === source;

  return (
    <img
      src={isIntersecting ? imageSrc : ""}
      alt='product'
      width={width}
      height={height}
      ref={imgRef}
      className={`${isLoaded ? s.imgShown : s.imgHidden}`}
    />
  );
};
