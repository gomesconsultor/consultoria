import db from '../config/database';
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from '../entity/User';
  
const resolvers = {
   
   Query: { async getUser(_, {id}) {
     
    const _repository = getCustomRepository(UsersRepository);
      return await _repository.findOne({ where: {id}});  
      //await db('users').where({ id: id }).first();

    },
    async getUsers() {
      const _repository = getCustomRepository(UsersRepository);
   
     return await _repository.find();
       
     
    }
  },
  Mutation: {
   async createUser(_, { input }) {
     const _repository = getCustomRepository(UsersRepository);
   
     //const result= await db('users').insert({
     //  name: input.name,
     //  email: input.email,
     //  password: input.password,
     //});

     const user = await _repository.create({
          name: input.name,
          email: input.email,
          password_hash: input.password
     });
     //const id = result[0];
     return user;
   }
  }   
}

export default resolvers;


