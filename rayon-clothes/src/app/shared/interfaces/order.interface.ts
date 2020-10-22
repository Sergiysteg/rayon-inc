import { ICloth } from './cloth.interface';

export interface IOrder {
    id: number;
    userName: string;
    userPhone: string;
    userCity: string;
    userStreet: string;
    userHouse: string;
    userComment: string;
    totalPayment: number;
    userOrder: Array<ICloth>;
    dateOrder: Date;
    statusOrder: string;
}