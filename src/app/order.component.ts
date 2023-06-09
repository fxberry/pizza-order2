import { Component, OnInit } from '@angular/core';
import { OrderItemComponent } from './order-item.component';
import { BakeService } from './services/bake.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'order',
  templateUrl: 'order.component.html',
  imports: [ FormsModule, CommonModule, OrderItemComponent ],
  providers: [BakeService],
  standalone: true
})

export class OrderComponent implements OnInit {
  order: Order = new Order();

  constructor(private bakeService: BakeService) {
    this.order.email = 'meine@email.com';
    this.order.orderItems = [];
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

  addOrderItem() {
    this.order.orderItems.push({ amount: 0, pizza: { name: '', price: 0 } });
  }

  ngOnInit() { }
}
