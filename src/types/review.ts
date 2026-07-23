export interface IUserReview {
  name: string;
  job: string;
  avatar: string;
}

export interface IReviewItem {
  id: number;
  star: number;
  content: string;
  user: IUserReview;
}
