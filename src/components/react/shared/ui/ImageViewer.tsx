import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageViewerProps {
  images: ImageProps[];
  autoPlayInterval?: number; // En milisegundos, por defecto 5000
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Funciones de navegación
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextImage, autoPlayInterval, isHovered, images.length]);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape" && isFullscreen) toggleFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, isFullscreen]);

  // Sincronizar estado si el usuario sale de pantalla completa con la tecla ESC nativa
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // API de Fullscreen
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-[#050505] w-screen h-screen"
          : "w-full rounded-2xl bg-[#0A0A0A] border border-white/5 aspect-video"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de la Imagen */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
            />
            {/* Caption (Opcional) */}
            {img.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 pt-20">
                <p className="text-white text-base md:text-lg text-center font-medium tracking-tight drop-shadow-lg">
                  {img.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controles: Solo se muestran si hay más de 1 imagen */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-[#288B88]/80 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-[#288B88]/80 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores (Dots) */}
          <div className="absolute bottom-4 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  index === currentIndex
                    ? "w-6 bg-[#E8D33F]"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Botón de Fullscreen */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}
        className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/20 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-label="Alternar pantalla completa"
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
    </div>
  );
};
