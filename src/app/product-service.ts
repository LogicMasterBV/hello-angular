import {Injectable} from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SupplierMinimal } from './models/supplier-minimal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';
  private productsUrl = 'products';
  private suppliersUrl = 'suppliers';
  constructor(private httpClient: HttpClient) {}
  getProducts():Observable<Product[]> {
    //return [...this.products]; // defensive copy
    const result = this.httpClient.get<Product[]>(`${this.apiUrl}/${this.productsUrl}`);
    return result;
  }
  createProduct(product: Partial<Product>): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiUrl}/${this.productsUrl}`, product);
  }
  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${this.productsUrl}/${productId}`; 
    return this.httpClient.delete<void>(url);
  }
  getSupplierMinimals():Observable<SupplierMinimal[]>{
    const url = `${this.apiUrl}/${this.suppliersUrl}/minimal`;
    return this.httpClient.get<SupplierMinimal[]>(url);
  }
}
