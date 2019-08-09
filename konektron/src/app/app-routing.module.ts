import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { FaqComponent } from './views/pages/faq/faq.component';
import { ProductComponent } from './views/pages/product/product.component';
import { ServiceComponent } from './views/pages/service/service.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { SigninComponent } from './views/sign/signin/signin.component';
import { SignupComponent } from './views/sign/signup/signup.component';
import { DashboardComponent } from './views/dash/dashboard/dashboard.component';
import { ProfileComponent } from './views/dash/profile/profile.component';
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

const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  },
  {
      path: 'product',
      component: ProductComponent
  },
  {
      path: 'service',
      component: ServiceComponent
  },
  {
      path: 'terms',
      component: TermsComponent
  },
  {
      path: 'signin',
      component: SigninComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'profile',
      component: ProfileComponent
  },
  {
      path: 'recovery',
      component: RecoveryComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
      path: 'checkout-custom',
      component: CheckoutCustomComponent
  },
  {
      path: 'checkout-confirm',
      component: CheckoutConfirmComponent
  },
  {
      path: 'galery-prod',
      component: GaleryProdComponent
  },
  {
      path: 'galery-serv',
      component: GaleryServComponent
  },
  {
      path: 'category-prod',
      component: CategoryProdComponent
  },
  {
      path: 'category-serv',
      component: CategoryServComponent
  },
  {
      path: 'forgot',
      component: ForgotComponent
  },
  {
      path: 'page404',
      component: Page404Component
  },
  {
      path: 'orders',
      component: OrdersComponent
  },
  {
      path: 'adresses',
      component: AdressesComponent
  },
  {
      path: 'cards',
      component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
