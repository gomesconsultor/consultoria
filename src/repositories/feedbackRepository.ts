import { IFeedback } from '../models/feedbacks';
import { RepositoryBase } from './Base/RepositoryBase';

export abstract class FeedbackRepository implements RepositoryBase {

  find(): Promise<IFeedback[]| any> {
     throw new Error("Not Implemented");     
  }
   
  findOne(id: string): Promise<IFeedback|any>  {
     throw new Error("Not Implemented");     
  }
}




