import "reflect-metadata";
import path from 'path';
import cors from 'cors';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { FeedbackResolver } from "./resolvers/FeedbackResolver";
import { UserResolver } from "./resolvers/UserResolver";


async function startServer() {
   const schema = await buildSchema({
      resolvers: [
         FeedbackResolver, UserResolver,
      ],
      emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })
  
  const server = new ApolloServer({
    schema,
    cors: {
     origin: '*',
     credentials: true
    },
});
  server.listen({ port: 4000 },() => console.log('server startad at '));
 
}

export default startServer;


//     origin: ["http://localhost:4000","http://192.168.1.10:4000"]
