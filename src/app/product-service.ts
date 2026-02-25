import {Injectable} from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) {}
  getProducts():Observable<Product[]> {
    //return [...this.products]; // defensive copy
    const result = this.httpClient.get<Product[]>(this.apiUrl);
    return result;
  }
  createProduct(product: Partial<Product>): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }
  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.httpClient.delete<void>(url);
  }
}
