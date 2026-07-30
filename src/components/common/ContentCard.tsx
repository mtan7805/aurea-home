import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface ContentCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function ContentCard({
  image,
  imageAlt,
  badge,
  title,
  description,
  ctaLabel,
  children,
  footer,
}: ContentCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
          {badge}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h2>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {children}

        <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-gray-100">
          {footer ? <div className="min-w-0">{footer}</div> : <span />}
          <button
            type="button"
            className="shrink-0 flex items-center gap-1.5 text-primary font-bold hover:text-primary-hover transition-colors cursor-pointer"
          >
            <span>{ctaLabel}</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
