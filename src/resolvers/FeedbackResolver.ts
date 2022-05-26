import { prisma } from "../../prisma";
import { Query , Resolver } from "type-graphql";
import { FeedbackInput } from '../models/FeedbackInput';
import { Feedback, IFeedback, IFeedback } from "../models/feedbacks";
import { FeedbacksService } from "../services/FeedbacksService";

@Resolver()
export class FeedbackResolver {
  feedbacks: IFeedback[] = [];
  const service = new FeedbacksService(); 
  private data: Feedback[] = [];    
     
  @Query(() => [Feedback], { nullable: true} )
  async feedbacks() {
      this.data  = await service.show();
      //console.log(result);
      return this.data;       
  }
}


