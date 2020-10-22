import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { ICloth } from '../../shared/interfaces/cloth.interface';
import { OrderService } from '../../shared/services/order.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  adminOrders: Array<IOrder> = [];
  modalRef: BsModalRef;
  orderDiretion: boolean;
  allStatuses = ['в обробці', 'підтверджено', 'виконно', 'скасовано'];
  statusName: string;
  totalPrice: number;

  userID: number;
  userName: string;
  userPhone: string;
  userPayment: number;
  userStatus: string;
  userCity: string;
  userStreet: string;
  userHouse: string;
  userComment: string;
  userOrder: Array<ICloth> = [];
  dateOrder: Date;

  constructor(private orderService: OrderService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(): void {
    this.orderService.getOrder().subscribe(
      data => {
        this.adminOrders = data;
      }
    );
  }

  openDetailsModal(template: TemplateRef<any>, order: IOrder): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });//'modal-dialog-centered' });
    this.userID = order.id;
    this.userName = order.userName;
    this.userPhone = order.userPhone;
    this.userPayment = order.totalPayment;
    this.userStatus = order.statusOrder;
    this.userCity = order.userCity;
    this.userStreet = order.userStreet;
    this.userHouse = order.userHouse;
    this.userOrder = order.userOrder;
    this.userPayment = order.totalPayment;
    this.userStatus = order.statusOrder;
    this.userComment = order.userComment;
    this.dateOrder = order.dateOrder;
    this.totalPrice = order.totalPayment;
  }

  chooseDirection(): void {
    this.orderDiretion = !this.orderDiretion;
  }

  detectChangeCount(status: boolean): void {
    if(status) {
      this.getTotal();
    }
  }

  private getTotal(): void {
    this.totalPrice = this.userOrder.reduce((total, cloth) => total + (cloth.price * cloth.count), 0);
  }


  closeModal(): void {
    this.modalRef.hide();
  }

  editOrder(): void {
    const newOrder = new Order(this.userID, 
                              this.userName, 
                              this.userPhone,
                              this.userCity,
                              this.userStreet,
                              this.userHouse,
                              this.userComment,
                              this.userPayment,
                              this.userOrder,
                              this.dateOrder,
                              this.userStatus);
    console.log(newOrder);
    this.modalRef.hide();
    this.orderService.updateOrder(newOrder).subscribe( () => {
      this.getOrders();
    })
  }

  deleteCloth(order: ICloth): void {
    const index = this.userOrder.findIndex(prod => prod.id === order.id);
    this.userOrder.splice(index, 1);
    this.getTotal();
  }

}
