import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ICloth } from '../../shared/interfaces/cloth.interface';
import { ClothService } from '../../shared/services/cloth.service';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {
  clothes: Array<ICloth> = [];
  mainTitle: string = 'Cloth';
  mainDesc: string = 'Some description';
  constructor(private clothService: ClothService,
              private orderService: OrderService,
              private notification: NotificationsService) { }

  ngOnInit(): void {
    this.getCloth();
  }

  getCloth(): void {
    this.clothService.getJSONCloth().subscribe(data => {
      this.clothes = data;
    })
  }

  addToBasket(cloth: ICloth): void {
    this.orderService.addBasket(cloth);
    this.notification.showInfo('On busket','');
  }

  saveToProfile(): void {
    this.notification.showInfo('Add','');
  }

}
