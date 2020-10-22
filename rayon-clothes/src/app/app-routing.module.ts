import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MensComponent } from './pages/mens/mens.component';
import { BrandComponent } from './pages/brand/brand.component';
import { LocalstoresComponent } from './pages/localstores/localstores.component';
import { BasketComponent } from './pages/basket/basket.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClothDetailComponent } from './pages/cloth-detail/cloth-detail.component';
import { ClothComponent } from './pages/cloth/cloth.component';
import { HomePopularComponent } from './pages/home/home-popular/home-popular.component';
import { HomeArrivalsComponent } from './pages/home/home-arrivals/home-arrivals.component';
import { HomeOffersComponent } from './pages/home/home-offers/home-offers.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminClothesComponent } from './admin/admin-clothes/admin-clothes.component';
import { AdminPopularComponent } from './admin/admin-popular/admin-popular.component';
import { AdminOffersComponent } from './admin/admin-offers/admin-offers.component';
import { AdminArrivalsComponent } from './admin/admin-arrivals/admin-arrivals.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInfoComponent } from './pages/profile/profile-info/profile-info.component';
import { ProfileClothesComponent } from './pages/profile/profile-clothes/profile-clothes.component';
import { ProfileGuard } from './shared/guards/profile.guard';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'home-popular', pathMatch: 'full' },
    { path: 'home-popular', component: HomePopularComponent },
    { path: 'home-arrivals', component: HomeArrivalsComponent },
    { path: 'home-offers', component: HomeOffersComponent },
  ] },
  { path: 'cloth', component: MensComponent },
  { path: 'cloth/:category', component: ClothComponent },
  { path: 'cloth/:category/:id', component: ClothDetailComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'localstores', component: LocalstoresComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard], children: [
    { path: '', redirectTo: 'profile-info', pathMatch: 'full' },
    { path: 'profile-info', component: ProfileInfoComponent },
    { path: 'profile-clothes', component: ProfileClothesComponent }
  ]},
  { path: 'admin-login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'admin-category', pathMatch: 'full' },
    { path: 'admin-category', component: AdminCategoryComponent },
    { path: 'admin-clothes', component: AdminClothesComponent },
    { path: 'admin-popular', component: AdminPopularComponent },
    { path: 'admin-arrivals', component: AdminArrivalsComponent },
    { path: 'admin-offers', component: AdminOffersComponent },
    { path: 'admin-orders', component: AdminOrdersComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
