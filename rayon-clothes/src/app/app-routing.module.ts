import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MensComponent } from './pages/mens/mens.component';
import { WomensComponent } from './pages/womens/womens.component';
import { BrandComponent } from './pages/brand/brand.component';
import { LocalstoresComponent } from './pages/localstores/localstores.component';
import { BasketComponent } from './pages/basket/basket.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'localstores', component: LocalstoresComponent },
  { path: 'basket', component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
