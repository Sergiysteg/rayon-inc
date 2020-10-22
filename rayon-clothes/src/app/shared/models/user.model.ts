import { ICloth } from '../interfaces/cloth.interface';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    constructor(public id: number,
                public email: string,
                public role: string,
                public FirstName: string,
                public LastName: string,
                public access: boolean,
                public description: string,
                public phone?: string,
                public image?: string,
                public clothes?: Array<ICloth>){}
}