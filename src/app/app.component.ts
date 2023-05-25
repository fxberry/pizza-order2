import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrderItemComponent } from './order-item.component';
import { FormsModule } from '@angular/forms';
import { BakeService } from './services/bake.service';

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
  imports: [FormsModule, CommonModule, RouterOutlet, OrderItemComponent],
  providers: [ BakeService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-order2';
  order: Order = new Order();

  constructor(private bakeService: BakeService) {
    this.order.email = 'meine@email.com';
    this.order.orderItems = [
      { amount: 1, pizza: { name: 'Margaritha', price: 12 } },
      { amount: 2, pizza: { name: 'Prosciutto', price: 16 } },
      { amount: 3, pizza: { name: 'Hawaii', price: 18 } },
    ];
  }

  submitOrder() {
    alert('Pizzas wurden bestellt an ' + this.order.email + '!');
    alert('Die Bestellung wird in ' +
              this.bakeService.calculateBakeTimeForOrder(this.order) +
              ' Minuten fertig gebachen sein');
  }

  orderAmountChanged(newOrderAmount: number) {
    console.log('new order amount: ' + newOrderAmount);
  }
}
