export interface FeedbackDTO  {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedback {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacks {
  feedbacks: IFeedback[];
}

