import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() { }
}
