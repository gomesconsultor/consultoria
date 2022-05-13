import { FeedbackDTO , IFeedback, IFeedBacks } from '../models/feedbacks';

interface Feedback  {
    id: string;
    type: string;
    comment: string;
    screenshot?: string;
}



export interface FeedbacksRepository {
  create: (data: FeedbackDTO) => Promise<void>;
  getAll(): Promise<IFeedback[]|any>; 
}
