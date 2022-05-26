import { UsersService } from "../services/UsersService";
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import { User }  from '../entity/User';
import {  UserInput } from '../entity/UserInput';
import { dados } from  "../database/data";

@Resolver((of) => User)
export class UserResolver {

 @Mutation((returns) => User )  
 async createUser(
   @Arg('userInput') { name, email, password }: UserInput
 ): Promise<User> {
  

  
   const _services = new UsersService();


    
   try {
     const user = await _services.create(name, email, password);
      return user;
   } catch(err) {
      return response.status(400).json({ message: err.message });   
   }
 }

 @Mutation((returns) => User )  
 async login(
   @Arg('email')  email: string,
   @Arg('password')  password: string

 ): Promise<User> {
  

  
  
   const _services = new UsersService();
   
  
   const user =  await _services.findEmail(email);

   if ( user.email === email && user.password === password);
   
   console.log("user:",user);

   return user;
   
 }


 @Query(returns => [User], { nullable: true}) 
 async Users(): Promise<User[]> {
  const _services = new UsersService();
   

  const users =  await _services.show();
  console.log({ users});    
  //return response.json(users); 
  return users; 
 }


 @Query(returns => User, { nullable: true}) 
 async User( @Arg('id') id: string ): Promise<User> {
  const _services = new UsersService();
   
  
  const user =  await _services.findUser(id);
  //console.log({ user});    
  //return response.json(users); 
  return user; 
 }

 
}


