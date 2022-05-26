import "reflect-metadata";
import app from "./app";

import startServer from './startServer';
//import resolvers from './graphql/resolvers';
//import typeDefs from './graphql/schema'; 

console.log("Servidor",process.env.TESTE);




startServer(); 

const PORT = process.env.PORT || 3333;
app.listen(PORT , () => console.log(`HTTP server running ${PORT}`));


