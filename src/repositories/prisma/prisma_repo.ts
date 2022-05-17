import { prisma } from "../../prisma";
import { FeedbackRepository } from "../feedbackRepository";
import { IFeedback } from "../../models/feedbacks";

export class PrismaRepository extends FeedbackRepository {
 feedbacks: IFeedback[] = [];



  async find(): Promise<IFeedback[]|any> {
    const feedbacks = await prisma.feedback.findMany();
    
    console.log(feedbacks); 
    return feedbacks;     
  } 

  async findOne(id: string): Promise<IFeedback|any> {
    const feedback = await prisma.feedback.findMany({
      where: {
         id: id,
      } 
    })

    return feedback; 
  }  
      
}


