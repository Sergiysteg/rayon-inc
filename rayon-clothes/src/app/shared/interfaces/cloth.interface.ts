import { ICategory } from './category.interface';

export interface ICloth {
    id: number;
    category: ICategory;
    description: string;
    color: string;
    material: string;
    image: string;
    price: number;
    count: number;
    size: Array<string>;
}