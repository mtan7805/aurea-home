export interface IReasonFeature {
  id: number;
  title: string;
  description: string;
}

export interface IReasonData {
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  features: IReasonFeature[];
}
