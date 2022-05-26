import {Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Feedback {
 @Field(type => ID, { nullable: false } )
 id: string;

 @Field({ nullable: false })
 type: string;

 @Field({ nullable: false })
 comment: string;

 @Field({ nullable: true })
 screenshot: string;
}

export default Feedback;


