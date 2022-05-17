import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository,   } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { IFeedbacks }  from './models/feedbacks';
import { PrismaRepository } from './repositories/prisma/prisma_repo';


export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter,
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});


routes.get('/feedbacks', async (req, res) => {
  // const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  
  const prismaRepository = new PrismaRepository();
      

  
  //const result = await prismaFeedbacksRepository.getAll();
   const result = await prismaRepository.find();

   return res.status(200).json(result).send();
});
