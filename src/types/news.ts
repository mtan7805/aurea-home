export type NewsCategory =
  | "all"
  | "trend"
  | "living-room"
  | "kitchen"
  | "bedroom"
  | "material";

export interface INews {
  id: number;
  title: string;
  category: Exclude<NewsCategory, "all">;
  categoryName: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: number;
  image: string;
  featured?: boolean;
}
