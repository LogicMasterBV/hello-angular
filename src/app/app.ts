import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // IN precedenza veniva usata la libreria "zone.js"
  protected readonly title = signal('A lunedi');
  counter = signal(4);
  nums = signal([1, 2, 3]);
  imgs = ["fiore.png", "mare.png"];
  imageCounter = 0;
  selectedImage = signal(this.imgs[this.imageCounter]);

  // private productService:ProductService;
  // constructor(productService:ProductService){
  //     this.productService = productService;
  // }

  constructor(private productService:ProductService){}
  // Questa componente deve creare una tabella con i dati
  // dell'interfaccia. suggerimento: @for
  // La cella dell'available, se true, backroud verde, 
  // altrimenti rosso. suggerimento: cambiare stile css
  // a seconda di una certa condizione. 
  // Usare keyword angular @if per gestire la cella available

  increment(){
    // this.counter++;
    // this.counter.set(20);
    this.counter.update(c => c + 1);
    console.log(this.counter);
    // spread operator, tira fuori tutti gli elementi
    // da un array
    this.nums.set([...this.nums(), 4]);
    this.imageCounter = ++this.imageCounter % 2;
    this.selectedImage.set(this.imgs[this.imageCounter]);
    console.log(this.imageCounter);
  }
}
