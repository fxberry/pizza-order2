import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { OrderComponent } from './order.component';

export const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full'},
  { path: '**', component: OrderComponent}, // 404 Component oder Redirect
];
