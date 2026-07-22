export interface IInventoryItem {
  id: number;
  total: number;
  title: string;
}

export interface IAboutData {
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  inventories: IInventoryItem[];
}
