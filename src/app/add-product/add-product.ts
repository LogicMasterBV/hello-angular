import { Component, Signal } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';
import { SupplierMinimal } from '../models/supplier-minimal';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  supplierMinimals !: Signal<SupplierMinimal[]>;
  product : Partial<Product> = {
    productName:"",
    supplierId:1,
    categoryId:1,
    unitprice:0,
    discontinued:false
  }

  constructor(private productService: ProductService) {
    this.supplierMinimals = toSignal(this.productService.getSupplierMinimals(), { initialValue : [] });
  }
  createProduct(pr: Partial<Product>) {
    this.productService.createProduct(pr).subscribe({
      next: (createdProduct) => {
        console.log('Product created successfully:', createdProduct);
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }
  saveProduct(form: NgForm){
    console.log(JSON.stringify(form.value));
    console.log(JSON.stringify(this.product));
    this.createProduct(form.value);
  }

}
