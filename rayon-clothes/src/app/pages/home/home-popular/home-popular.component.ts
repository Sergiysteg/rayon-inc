import { Component, OnInit } from '@angular/core';
import { PopularService } from 'src/app/shared/services/popular.service';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { OrderService } from 'src/app/shared/services/order.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-home-popular',
  templateUrl: './home-popular.component.html',
  styleUrls: ['./home-popular.component.scss']
})
export class HomePopularComponent implements OnInit {
  clothes: Array<ICloth> = [];
  constructor(private popularService: PopularService,
    private orderService: OrderService,
    private notification: NotificationsService) { }

  ngOnInit(): void {
    this.getPopularCloth();
  }

  getPopularCloth(): void {
    this.popularService.getJSONCloth().subscribe((data) => {
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
