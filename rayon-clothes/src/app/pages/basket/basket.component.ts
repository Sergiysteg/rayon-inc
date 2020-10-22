import { Component, OnInit } from '@angular/core';
import { ICloth } from '../../shared/interfaces/cloth.interface';
import { OrderService } from '../../shared/services/order.service';
import { Order } from '../../shared/models/order.model';
// import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orders: Array<ICloth> = [];
  totalPrice = 0;
  orderID = 1;
  userName: string;
  userPhone: string;
  userCity: string;
  userStreet: string;
  userHouse: string;
  userComment: string = '';

  // matcher: MediaQueryList;
  // tableStatus: boolean = false;
  constructor(private orderService: OrderService
              // public mediaMatcher: MediaMatcher
              ) { }

  ngOnInit(): void {
    this.getBasket();

    // this.matcher = this.mediaMatcher.matchMedia('(max-width: 767px)');
    // this.matcher.addListener(this.myListener);

    // console.log(this.tableStatus);
  }

  // ngOnDestroy() {
  //   this.matcher.removeListener(this.myListener);
  // }

  // myListener(event) {
  //   event.matches ? this.tableStatus = true : this.tableStatus = false;
  //   console.log(this.tableStatus);
  // }

  private getBasket(): void {
    if (localStorage.getItem('myOrder')) {
      this.orders = JSON.parse(localStorage.getItem('myOrder'));
      this.getTotal();
    }
  }

  private getTotal(): void {
    this.totalPrice = this.orders.reduce((total, cloth) => {
      return total + (cloth.price * cloth.count)
    }, 0);
  }

  addOrder(): void{
    const order = new Order(this.orderID,
                            this.userName,
                            this.userPhone,
                            this.userCity,
                            this.userStreet,
                            this.userHouse,
                            this.userComment,
                            this.totalPrice,
                            this.orders,
                            new Date());
    delete order.id;
    this.orderService.addOrder(order).subscribe(() => {
      this.resetOrder();
    })
  }

  deleteCloth(cloth: ICloth): void {
    if(confirm('Are you sure')) {
      const index = this.orders.findIndex(cl => cl.id === cloth.id);
      this.orders.splice(index, 1);
      this.updateBasket();
    }
  }

  private updateBasket(): void {
    localStorage.setItem('myOrder', JSON.stringify(this.orders));
    this.getTotal();
    this.orderService.basket.next('asd');
  }

  detectChangeCount(status: boolean): void {
    if(status){
      this.updateBasket();
    }
  }

  resetOrder(): void {
    localStorage.removeItem('myOrder');
    this.orders = [];
    this.orderService.basket.next('done');
  }
}
