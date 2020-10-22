import { ICloth } from './cloth.interface';

export interface IUser {
    id: number;
    email: string;
    role: string;
    FirstName: string;
    LastName: string;
    access: boolean;
    description: string;
    phone?: string,
    image?: string;
    clothes?: Array<ICloth>;
}