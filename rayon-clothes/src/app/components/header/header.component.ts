import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';
import { CategoryService } from '../../shared/services/category.service';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { OrderService } from '../../shared/services/order.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private basket: Array<ICloth> = [];
  categories: Array<ICategory> = [];
  totalPrice = 0;
  toggleMenuStatus: boolean;

  loginStatus = false;
  loginUrl: string;
  loginName: string;

  constructor(private catService: CategoryService,
              private orderService: OrderService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getCategories();
    this.checkBasket();
    this.getLocalCloth();
    this.checkLogin();
    this.updateCheckLogin();
  }

  toggleMenu(): void {
    this.toggleMenuStatus = !this.toggleMenuStatus;
  }

  getCategories(): void {
    this.catService.getJSONCategory().subscribe(data => {
      this.categories = data;
    })
  }

  private checkBasket(): void {
    this.orderService.basket.subscribe(() => {
      this.getLocalCloth();
    })
  }

  private getLocalCloth(): void {
    if (localStorage.getItem('myOrder')) {
      this.basket = JSON.parse(localStorage.getItem('myOrder'));
      this.totalPrice = this.basket.reduce((total, cloth) => {
        return total + (cloth.price * cloth.count);
      }, 0);
    }
    else {
      this.totalPrice = 0;
    }
  }

  private updateCheckLogin(): void {
    this.authService.userStatusChanges.subscribe(() => {
      this.checkLogin();
    })
  }

  private checkLogin(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin != null && admin.role === 'admin'){
      this.loginStatus = true;
      this.loginName = 'Admin';
      this.loginUrl = 'admin';
    }
    else if (user != null && user.role === 'user'){
      this.loginStatus = true;
      this.loginName = user.email;
      this.loginUrl = 'profile';
    }
    else {
      this.loginStatus = false;
      this.loginName = '';
      this.loginUrl = '';
    }
  }
}
