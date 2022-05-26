import { User } from './User';
import {InputType, Field } from 'type-graphql';

@InputType()
export class UserInput implements Partial<User> {
 
 @Field()
 name: string;

 @Field()
 email: string;

 @Field()
 password: string;
 
 
}
