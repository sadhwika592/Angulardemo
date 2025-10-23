import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  inputs: ['productObj']
})
export class ProductCard {
  productObj: any;
}
