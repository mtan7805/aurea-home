export type ProjectCategory = "all" | "apartment" | "townhouse" | "villa" | "office";

export interface IProject {
  id: number;
  name: string;
  category: Exclude<ProjectCategory, "all">;
  categoryName: string;
  area: number;
  style: string;
  location: string;
  year: number;
  image: string;
  description: string;
}
