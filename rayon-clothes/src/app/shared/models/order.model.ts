import { IOrder } from '../interfaces/order.interface';
import { ICloth } from '../interfaces/cloth.interface';

export class Order implements IOrder {
    constructor(public id: number,
        public userName: string,
        public userPhone: string,
        public userCity: string,
        public userStreet: string,
        public userHouse: string,
        public userComment: string,
        public totalPayment: number,
        public userOrder: Array<ICloth>,
        public dateOrder: Date,
        public statusOrder: string = 'в обробці',) { }

}