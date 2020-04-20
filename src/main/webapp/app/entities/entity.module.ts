import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.JhispterBiloungaaleckRestaurantModule)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./cooperative/cooperative.module').then(m => m.JhispterBiloungaaleckCooperativeModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./basket/basket.module').then(m => m.JhispterBiloungaaleckBasketModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.JhispterBiloungaaleckProductModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.JhispterBiloungaaleckPaymentModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.JhispterBiloungaaleckCourseModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.JhispterBiloungaaleckOrderModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhispterBiloungaaleckEntityModule {}
