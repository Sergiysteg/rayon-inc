import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { NgImageSliderModule } from 'ng-image-slider';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { LayoutModule } from '@angular/cdk/layout';
import { StickyNavModule } from 'ng2-sticky-nav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePopularComponent } from './pages/home/home-popular/home-popular.component';
import { HomeArrivalsComponent } from './pages/home/home-arrivals/home-arrivals.component';
import { HomeOffersComponent } from './pages/home/home-offers/home-offers.component';
import { MensComponent } from './pages/mens/mens.component';
import { BrandComponent } from './pages/brand/brand.component';
import { LocalstoresComponent } from './pages/localstores/localstores.component';
import { BasketComponent } from './pages/basket/basket.component';
import { RegisterComponent } from './pages/register/register.component';
import { TopicBlockComponent } from './components/topic-block/topic-block.component';
import { ClothDetailComponent } from './pages/cloth-detail/cloth-detail.component';
import { ClothComponent } from './pages/cloth/cloth.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminClothesComponent } from './admin/admin-clothes/admin-clothes.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminPopularComponent } from './admin/admin-popular/admin-popular.component';
import { AdminArrivalsComponent } from './admin/admin-arrivals/admin-arrivals.component';
import { AdminOffersComponent } from './admin/admin-offers/admin-offers.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment.prod';
import { CounterComponent } from './components/counter/counter.component';
import { OrderByTimePipe } from './shared/pipes/order-by-time.pipe';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInfoComponent } from './pages/profile/profile-info/profile-info.component';
import { ProfileClothesComponent } from './pages/profile/profile-clothes/profile-clothes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MensComponent,
    BrandComponent,
    LocalstoresComponent,
    BasketComponent,
    RegisterComponent,
    TopicBlockComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminClothesComponent,
    AdminOrdersComponent,
    ClothDetailComponent,
    ClothComponent,
    CounterComponent,
    OrderByTimePipe,
    LoginComponent,
    ProfileComponent,
    HomePopularComponent,
    HomeArrivalsComponent,
    HomeOffersComponent,
    AdminPopularComponent,
    AdminArrivalsComponent,
    AdminOffersComponent,
    ProfileInfoComponent,
    ProfileClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    OrderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgImageSliderModule,
    TabsModule.forRoot(),
    StickyNavModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true
      // toastClass: 'toastr'
    })

    // LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
