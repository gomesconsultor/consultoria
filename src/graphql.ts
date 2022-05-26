import "reflect-metadata";
import  path  from 'path'
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql'
import cors from 'cors';
import { UserResolver } from './resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
         UserResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),

  }); 
 
  const corsOptions = { cors: { allow_any_origin: true, }}

  const server = new ApolloServer({
     schema,
     context,
     cors: {
       origin: '*'
     },
  })
 
  const { url } = await server.listen({ port: 4000 });
  console.log(`Server running on ${url}`);

}

main();

//       origin: ["http://localhost:4000", "http://192.168.1.10"]
