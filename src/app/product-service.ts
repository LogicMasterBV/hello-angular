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
}
