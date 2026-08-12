import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : [""];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="grid gap-4 lg:grid-cols-[76px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto scrollbar-none lg:order-1 lg:flex-col">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-white p-1 transition-colors lg:h-[76px] lg:w-[76px] ${
              activeIndex === index ? "border-primary" : "border-gray-100"
            }`}
            aria-label={`Xem ảnh ${index + 1}`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>

      <div className="relative order-1 flex h-[420px] items-center justify-center overflow-hidden rounded-xl bg-white p-6 shadow-sm sm:h-[500px] lg:order-2 xl:h-[560px]">
        <img
          src={activeImage}
          alt={name}
          className="h-full w-full object-contain"
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
              aria-label="Ảnh trước"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
              aria-label="Ảnh sau"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
