import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacks-repository";
import { FeedbackDTO, IFeedbacks, IFeedback } from "../../models/feedbacks";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
 feedbacks: IFeedback[] = [];
     

  async create({ type, comment, screenshot }: FeedbackDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      },
    });
  }

  async getAll(): Promise<IFeedback[]| any> {
    const feedbacks = await prisma.feedback.findMany();
     
    return feedbacks;     
  } 
      
}
