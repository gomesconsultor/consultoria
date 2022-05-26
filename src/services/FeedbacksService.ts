import { prisma } from "../../prisma";
import { PrismaRepository } from "../repositories/prisma/prisma_repo";
import { Feedback ,IFeedback, IFeedback } from "../models/feedbacks";
//import { UsersRepository } from "../repositories/UsersRepository";
//import { User } from '../entity/User';

     
export class FeedbacksService {
  const prismaRepository = new PrismaRepository();  

  //async create(name: string, email: string, password: string) {
     
     
    // const _repository = getCustomRepository(UsersRepository);
   
    // const user = await _repository.create({
      //    name,
       //   email,
          password_hash: password
   //  });

     
           
     // const usuario = await _repository.save(user);   

     
    // return usuario;
        
  //}

  async show() {
    console.log("entro no serviiço");
    const feedbacks  = await this.prismaRepository.find();
    //const _repository = getCustomRepository(UsersRepository);
    //const users = await _repository.find();
     console.log(feedbacks);
   return feedbacks;
         
  }


  //async findUser(id: string) {
     
     //console.log("id:", id);   
     //const _repository = getCustomRepository(UsersRepository);

     //const user = await _repository.findOne({ where: {id }});

     
     //return user;
         
  //}
}



