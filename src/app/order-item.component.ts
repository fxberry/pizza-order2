import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from './app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'order-item',
  templateUrl: 'order-item.component.html',
  imports: [FormsModule],
  standalone: true
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem!: OrderItem;
  @Output() orderAmountChanged = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
  }
}
