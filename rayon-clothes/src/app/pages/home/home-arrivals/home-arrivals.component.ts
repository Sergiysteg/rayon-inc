import { Component, OnInit } from '@angular/core';
import { ArrivalsService } from '../../../shared/services/arrivals.service';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { OrderService } from 'src/app/shared/services/order.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-home-arrivals',
  templateUrl: './home-arrivals.component.html',
  styleUrls: ['./home-arrivals.component.scss']
})
export class HomeArrivalsComponent implements OnInit {
  clothes: Array<ICloth> = [];
  constructor(private arrivalsService: ArrivalsService,
              private orderService: OrderService,
              private notification: NotificationsService) { }

  ngOnInit(): void {
    this.getArrivalsCloth();
  }

  getArrivalsCloth(): void {
    this.arrivalsService.getJSONCloth().subscribe((data) => {
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
