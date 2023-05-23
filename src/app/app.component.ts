import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrderItemComponent } from './order-item.component';

export interface Pizza {
  name: string;
  price: number;
}

export interface OrderItem {
  amount: number;
  pizza: Pizza;
}

export class Order {
  public orderItems: OrderItem[] = [];
  email: string = '';

  get orderTotal(): number {
    let total = 0;
    this.orderItems.forEach(orderItem => {
      total += orderItem.amount * orderItem.pizza.price;
    });
    return total;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrderItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-order2';
  order: Order = new Order();

  constructor() {
    this.order.email = 'meine@email.com';
    this.order.orderItems = [
      { amount: 1, pizza: { name: 'Margaritha', price: 12 } },
      { amount: 2, pizza: { name: 'Prosciutto', price: 16 } },
      { amount: 3, pizza: { name: 'Hawaii', price: 18 } },
    ];
  }

  submitOrder() {
    alert('Pizzas wurden bestellt an ' + this.order.email);
  }

}
