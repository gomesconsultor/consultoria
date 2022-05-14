import { IRead } from './IRead';

export abstract class Repository implements IRead<T> {

 find(): Promise<T[]> {
   throw new Error("Method not implemented");
 }

 findOne(id:string): Promise<T> {
   throw new Error("Method not implemented");
 }

}
