import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository,   } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { IFeedbacks }  from './models/feedbacks';
import { PrismaRepository } from './repositories/prisma/prisma_repo';
import NodeCache from "node-cache";


export const routes = express.Router();

const CACHE_LIMITE = 10;

const dbCache = new NodeCache({ stdTTL: CACHE_LIMITE, checkperiod: 0.2 });

const mySqlQuery = 'MinhaChave';

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
      
  if (dbCache.has(mySqlQuery)) {
     console.log("entrou aqui cache");
     res.end(JSON.stringify(dbCache.get(mySqlQuery)));
     return; 
     
  }
  
   try {
        const result = await prismaRepository.find();
    
         //const result = await prismaFeedbacksRepository.getAll();
         const success = dbCache.set(mySqlQuery, result, CACHE_LIMITE);
         if (success) {
               console.log("criou o cache");

              return res.status(200).json(result).send();
         }
         res.writeHead(500);
         res.end();

      } catch (error) {
        console.log('Error ', error);
        res.writeHead(500);
        res.end()
      }  
});
