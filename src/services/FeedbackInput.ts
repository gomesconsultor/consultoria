import { Feedback } from './models/feedbacks';
import {InputType, Field } from 'type-graphql';

@InputType()
export class FeedbackInput implements Partial<Feedback> {
 
 @Field()
 type: string;

 @Field()
 comment: string;

 @Field()
 screenshot?: string;
 
 
}
