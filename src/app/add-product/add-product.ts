import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  constructor(private productService: ProductService) {}
  createProduct() {
    const pr: Partial<Product> = {
      productName: 'New Product',
      supplierId: 1,
      supplierCompanyName: 'New Supplier',
      categoryId: 1,
      categoryName: 'New Category',
      unitprice: 10,
      discontinued: false
    };
    this.productService.createProduct(pr).subscribe({
      next: (createdProduct) => {
        console.log('Product created successfully:', createdProduct);
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }
}
