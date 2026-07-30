import { FiClock, FiUser } from "react-icons/fi";
import ContentCard from "../common/ContentCard";
import type { INews } from "../../types/news";

interface NewsCardProps {
  news: INews;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <ContentCard
      image={news.image}
      imageAlt={news.title}
      badge={news.categoryName}
      title={news.title}
      description={news.excerpt}
      ctaLabel="Đọc tiếp"
      footer={
        <span className="flex items-center gap-2 text-sm text-gray-500">
          <FiUser className="w-4 h-4 text-primary" />
          {news.author}
        </span>
      }
    >
      <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-semibold">
        <span>{news.publishedAt}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="flex items-center gap-1">
          <FiClock className="w-3.5 h-3.5 text-primary" />
          {news.readTime} phút trước
        </span>
      </div>
    </ContentCard>
  );
}
