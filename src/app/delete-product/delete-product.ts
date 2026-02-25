import { Component } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-delete-product',
  imports: [],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.css',
})
export class DeleteProduct {
  constructor(private productService: ProductService) { }
  deleteProduct() {
    if (confirm('Sei sicuro di voler eliminare questo prodotto?')) {
      this.productService.deleteProduct(1002).subscribe({
        next: () => {
          alert('Product deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }
}
