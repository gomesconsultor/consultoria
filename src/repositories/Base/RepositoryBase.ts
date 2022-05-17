import { IRead } from './IRead';

export interface RepositoryBase implements IRead<T> {

 find(): Promise<T[]>;
 }

 findOne(id:string): Promise<T>;
 }

}
