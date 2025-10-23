import { Component } from '@angular/core';
import products from './productdata';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-productlist',
  imports: [FormsModule, NgxPaginationModule, ProductCard],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  allProducts = products;
  p: number = 1;
  searchText: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';

  get filteredProducts() {
    let filtered = this.allProducts;

    if (this.searchText.trim() !== '') {
      filtered = filtered.filter((prod) =>
        prod.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.sortOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }

  sortAscending() {
    this.sortOrder = 'asc';
  }

  sortDescending() {
    this.sortOrder = 'desc';
  }
}
