// delivery.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delivery.html',
  styleUrls: ['./delivery.css']
})
export class Delivery implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }
}