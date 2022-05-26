import "reflect-metadata";
import { path } from 'path'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server';

async function main() {
  const shcema = await buildSchema({
    resolvers: [
         UseResolver,
    ],
    emiteSchemaFile: path.resolve(__dirname, 'schema.gql');  // Onde eu quero salvar o arquivo de schema do graphql no diretorio  atual dentro de um arquivo schema.gql
  }); 

  const server = new ApolloServer({
     schema,
  })
 
  const { url} = await server.listen();
  console.log(`Server running on ${url}`);

}

main();

