import { Pipe, PipeTransform } from '@angular/core';
import { IOrder } from '../interfaces/order.interface';

@Pipe({
  name: 'orderByTime'
})
export class OrderByTimePipe implements PipeTransform {

  transform(value: Array<IOrder>, direction?: boolean): Array<IOrder> {
    if (!value) {
      return null;
    }
    if (!direction){
      return value.sort((a, b) => a.dateOrder < b.dateOrder ? 1 : -1);
    }
    else {
      return value.sort((a, b) => a.dateOrder > b.dateOrder ? 1 : -1);
    }
    
  }

}
