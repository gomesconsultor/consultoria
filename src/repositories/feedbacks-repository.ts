import { FeedbackDTO , Feedbacks } from '../models/feedbacks';

//export interface FeedbackCreateData  {
//  type: string;
//  comment: string;
//  screenshot?: string;
//}

export interface FeedbacksRepository {
  create: (data: FeedbackDTO) => Promise<void>;
  find() => Promise<IFeedbacks>;  
}
