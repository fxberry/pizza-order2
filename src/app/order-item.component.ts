import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderItem, Pizza } from './order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'order-item',
  templateUrl: 'order-item.component.html',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem!: OrderItem;
  @Output() orderAmountChanged = new EventEmitter();

  availablePizzas: Pizza[] = [
    { name: 'Margaritha', price: 12 } ,
    { name: 'Prosciutto', price: 16 } ,
    { name: 'Hawaii', price: 18 } ];

  constructor() { }

  ngOnInit() { }

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
  }
}
