import type { INews } from "../../types/news";
import NewsCard from "./NewsCard";

interface NewsListProps {
  newsList: INews[];
}

export default function NewsList({ newsList }: NewsListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </section>
  );
}
