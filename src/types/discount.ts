export interface IDiscountBanner {
  bgImage: string;
  titleImage: string;
  titleText: string;
}

export interface ITimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export interface ICountdownProps {
  targetDate?: string;
}
