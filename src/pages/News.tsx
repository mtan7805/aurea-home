import { useMemo, useState } from "react";
import { FiClock, FiSearch, FiUser } from "react-icons/fi";
import NewsList from "../components/news/NewsList";
import { newsCategories, newsData } from "../data/newsData";
import type { NewsCategory } from "../types/news";

export const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredNews = newsData.find((news) => news.featured) ?? newsData[0];

  const filteredNews = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return newsData.filter((news) => {
      if (news.id === featuredNews.id) return false;

      const matchesCategory =
        selectedCategory === "all" || news.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        news.title.toLowerCase().includes(normalizedSearch) ||
        news.excerpt.toLowerCase().includes(normalizedSearch) ||
        news.categoryName.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [featuredNews.id, searchTerm, selectedCategory]);

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] pt-44 pb-24 px-5 md:px-[50px] lg:px-[130px]">
      <section className="w-full flex flex-col items-center text-center gap-3 mb-10">
        <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest px-4 py-1.5 bg-amber-50 rounded-full border border-amber-300/60">
          Aurea Home Journal
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Xu hướng nội thất
        </h1>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          Cập nhật cảm hứng thiết kế, vật liệu, màu sắc và kinh nghiệm bố trí
          không gian sống từ đội ngũ Aurea Home.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm mb-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Bài nổi bật
          </span>
        </div>

        <div className="flex flex-col justify-center p-1 md:p-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest">
            {featuredNews.categoryName}
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {featuredNews.title}
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            {featuredNews.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500 font-semibold">
            <span className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-primary" />
              {featuredNews.author}
            </span>
            <span>{featuredNews.publishedAt}</span>
            <span className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-primary" />
              {featuredNews.readTime} phút trước
            </span>
          </div>
          <button
            type="button"
            className="mt-7 w-max px-5 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Đọc bài viết
          </button>
        </div>
      </section>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 bg-white mb-10 p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-full lg:w-auto flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
          {newsCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80 h-11 flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm bài viết..."
            className="w-full h-full rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-800 outline-none pl-4 pr-10 focus:border-primary focus:bg-white transition-all"
          />
          <FiSearch className="absolute right-3.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {filteredNews.length > 0 ? (
        <NewsList newsList={filteredNews} />
      ) : (
        <p className="text-center text-gray-600 font-semibold">
          Không tìm thấy bài viết phù hợp.
        </p>
      )}
    </div>
  );
};
