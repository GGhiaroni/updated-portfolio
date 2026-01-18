"use client";

import React, { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export function ProjectCarousel({ images, title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (emblaApi) emblaApi.scrollPrev();
    },
    [emblaApi],
  );

  const scrollNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (emblaApi) emblaApi.scrollNext();
    },
    [emblaApi],
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const syncIndex = () => {
      requestAnimationFrame(() => {
        onSelect(emblaApi);
      });
    };

    syncIndex();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group/carousel w-full h-full bg-neutral-900">
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0 h-full"
              key={index}
            >
              <Image
                src={src}
                alt={`${title} - slide ${index + 1}`}
                fill
                className="object-cover object-top"
                quality={90}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  index === selectedIndex ? "bg-white w-6" : "bg-white/20",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
