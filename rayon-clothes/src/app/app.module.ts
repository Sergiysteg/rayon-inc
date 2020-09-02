import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MensComponent } from './pages/mens/mens.component';
import { WomensComponent } from './pages/womens/womens.component';
import { BrandComponent } from './pages/brand/brand.component';
import { LocalstoresComponent } from './pages/localstores/localstores.component';
import { BasketComponent } from './pages/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MensComponent,
    WomensComponent,
    BrandComponent,
    LocalstoresComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
