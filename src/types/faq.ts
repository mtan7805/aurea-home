export interface IFAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface IFAQData {
  subtitle: string;
  title: string;
  description: string;
  questions: IFAQItem[];
}
