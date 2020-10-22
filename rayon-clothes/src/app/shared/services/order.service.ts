import { Injectable } from '@angular/core';
import { ICloth } from '../interfaces/cloth.interface';
import { Subject, Observable } from 'rxjs';
import { IOrder } from '../interfaces/order.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  basket: Subject<any> = new Subject<any>();
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/orders';
  }

  addBasket(cloth: ICloth): void {
    let localCloth: Array<ICloth> = [];
    if(localStorage.getItem('myOrder')) {
      localCloth = JSON.parse(localStorage.getItem('myOrder'));
      if(localCloth.some(cl => cl.id === cloth.id)) {
        const index = localCloth.findIndex(cl => cl.id === cloth.id);
        localCloth[index].count += cloth.count;
      }
      else {
        localCloth.push(cloth);
      }
    }
    else {
      localCloth.push(cloth);
    }
    localStorage.setItem('myOrder', JSON.stringify(localCloth));
    this.basket.next('check basket');
  }

  addOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(this.url, order);
  }
  getOrder(): Observable<Array<IOrder>> {
    return this.http.get<Array<IOrder>>(this.url);
  }
  updateOrder(order: IOrder): Observable<IOrder> {
    return this.http.put<IOrder>(`${this.url}/${order.id}`, order);
  }
}
