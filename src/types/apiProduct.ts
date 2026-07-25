export interface IApiCategory {
  id: number;
  name: string;
  image: string;
}

export interface IApiProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: IApiCategory;
  images: string[];
}
