import { Arg, Query , Resolver, Mutation } from "type-graphql";
import { User } from '../models/User';
import crypto from 'crypto';

@Resolver()
export class UserResolver {

  private data: User[] = [];
   
    
  // Está declaração [User] e usadado para definir um array  de User diferentemente do tyoescripy que é User[] 
  @Query(() => [User])
  async users() {
    return this.data;       
  }


  @Mutation(() => User)
   
  async createUser(
   @Arg('name') name: string,  
  ) {
    const user = { id: crypto.randomUUID(), name }
    this.data.push(user)
    return user;
  } 
}

