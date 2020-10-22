import { ICloth } from '../interfaces/cloth.interface';
import { ICategory } from '../interfaces/category.interface';

export class Cloth implements ICloth {
    constructor(public id: number,
                public category: ICategory,
                public description: string,
                public color: string,
                public material: string,
                public image: string,
                public price: number,
                public count: number = 1,
                public size: Array<string>){}
}