import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
{ id: 1, name: 'Laptop', price: 1200, available: true },
{ id: 2, name: 'Mouse', price: 25, available: true },
{ id: 3, name: 'Keyboard', price: 75, available: false },
{ id: 4, name: 'Monitor', price: 300, available: true }
];

getProducts(): Product[] {
return [...this.products]; // defensive copy
}
}
