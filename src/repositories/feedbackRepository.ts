import { IFeedback } from '../models/feedbacks';
import { BaseRepository } from './BaseRepository';

export class FeedbackRepository extends BaseRepository {

  //create: (data: FeedbackDTO) => Promise<void>;
  find(): Promise<IFeedback[]>; 
  findOne(id: string): Promise<IFeedback>; 
}




