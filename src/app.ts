import "reflect-metadata";
import express from "express";
import { routes }  from './routes';
//import * as dotenv from 'dotenv';
import cors from 'cors';




//dotenv.config({
//path: process.env.NODE_ENV === 'test' ? __dirname + '../.env.test' : __dirname + '../.env'
//});

//console.log(process.env.NODE_ENV);


class App {
  public express: express.Application;

  constructor(){
     this.express = express();
     this.middlewares();
     this.routes();
     
  }

  
  public routes(): void  {
    this.express.use(routes);
  }

  private middlewares(): void {
   this.express.use(express.json());
   this.express.use(cors());
  }
}

export default new App().express;







