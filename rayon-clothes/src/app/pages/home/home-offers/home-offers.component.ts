import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { OffersService } from '../../../shared/services/offers.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-home-offers',
  templateUrl: './home-offers.component.html',
  styleUrls: ['./home-offers.component.scss']
})
export class HomeOffersComponent implements OnInit {
  clothes: Array<ICloth> = [];
  constructor(private offerService: OffersService,
    private orderService: OrderService,
    private notification: NotificationsService) { }

  ngOnInit(): void {
    this.getOfferedCloth();
  }

  getOfferedCloth(): void {
    this.offerService.getJSONCloth().subscribe((data) => {
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
