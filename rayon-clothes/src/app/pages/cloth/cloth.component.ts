import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { ClothService } from 'src/app/shared/services/cloth.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { OrderService } from '../../shared/services/order.service';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  clothes: Array<ICloth> = [];
  category: string;

  constructor(private clothService: ClothService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private notification: NotificationsService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const categoryName = this.actRoute.snapshot.paramMap.get('category'); 
        this.getCategoryCloth(categoryName);
        this.category = categoryName;
      }
    })
  }

  ngOnInit(): void {
    this.getLoginedUser();
  }

  getLoginedUser(): void {

  }

  private getCategoryCloth(categoryName: string = 'hat'): void {
    this.clothService.getCategoryCloth(categoryName).subscribe(data => {
      this.clothes = data;
    })
  }

  addToBasket(cloth: ICloth): void {
    this.orderService.addBasket(cloth);
    this.notification.showInfo('On busket','');
  }

  saveToProfile(): void {
    // localStorage.setItem('user',)
    this.notification.showInfo('Add','');
  }

}
