import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsComponent } from './utils/utils.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { FaqComponent } from './views/pages/faq/faq.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ProductComponent } from './views/pages/product/product.component';
import { ServiceComponent } from './views/pages/service/service.component';
import { SigninComponent } from './views/sign/signin/signin.component';
import { SignupComponent } from './views/sign/signup/signup.component';
import { NavComponent } from './views/components/nav/nav.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { ProfileComponent } from './views/dash/profile/profile.component';
import { DashboardComponent } from './views/dash/dashboard/dashboard.component';
import { RecoveryComponent } from './views/dash/recovery/recovery.component';
import { CartComponent } from './views/carts/cart/cart.component';
import { CheckoutCustomComponent } from './views/carts/checkout-custom/checkout-custom.component';
import { CheckoutConfirmComponent } from './views/carts/checkout-confirm/checkout-confirm.component';
import { GaleryProdComponent } from './views/pages/galery-prod/galery-prod.component';
import { GaleryServComponent } from './views/pages/galery-serv/galery-serv.component';
import { CategoryProdComponent } from './views/pages/category-prod/category-prod.component';
import { CategoryServComponent } from './views/pages/category-serv/category-serv.component';
import { ForgotComponent } from './views/sign/forgot/forgot.component';
import { Page404Component } from './views/components/page404/page404.component';
import { OrdersComponent } from './views/dash/orders/orders.component';
import { AdressesComponent } from './views/dash/adresses/adresses.component';
import { CardsComponent } from './views/dash/cards/cards.component';
import { AdressesService } from './views/dash/adresses/adresses.service';
import { ProfileService } from './views/dash/profile/profile.service';
import { NavService } from './views/components/nav/nav.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilsComponent,
    ConfigComponent,
    HomeComponent,
    TermsComponent,
    ContactComponent,
    FaqComponent,
    AboutComponent,
    ProductComponent,
    ServiceComponent,
    SigninComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    ProfileComponent,
    DashboardComponent,
    RecoveryComponent,
    CartComponent,
    CheckoutCustomComponent,
    CheckoutConfirmComponent,
    GaleryProdComponent,
    GaleryServComponent,
    CategoryProdComponent,
    CategoryServComponent,
    ForgotComponent,
    Page404Component,
    OrdersComponent,
    AdressesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [
    AdressesService, 
    ProfileService,
    NavService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
