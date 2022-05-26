import { Field, ObjectType, ID } from "type-graphql";

export interface FeedbackDTO  {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedback {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacks {
  feedbacks: IFeedback[];
}

@ObjectType()
export class Feedback {
  @Field(_type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  comment: string;

  @Field({ nullable: true })
  screenshot?: string;
}




