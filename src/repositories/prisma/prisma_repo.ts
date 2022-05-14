import { prisma } from "../../prisma";
import { FeedbackRepository } from "../feedbackrepository";
import { FeedbackDTO, IFeedbacks, IFeedback } from "../../models/feedbacks";

export class PrismaRepository extendsts FeedbackRepository {
 feedbacks: IFeedback[] = [];
     

 // async create({ type, comment, screenshot }: FeedbackDTO) {
   // await prisma.feedback.create({
     // data: {
       // type,
       // comment,
       // screenshot
      //},
    //});
 // }

  async find(): Promise<IFeedback[]| any> {
    const feedbacks = await prisma.feedback.findMany();
     
    return feedbacks;     
  } 
      
}
