import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacks-repository";
import { FeedbackDTO, IFeedbacks } from "../../models/feedbacks";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      },
    });
  }

  async find(): IFeedbacks {
    
    const result = await prisma.feedback.findMany<IFeedbabks>();

    return result; 

  } 
}
