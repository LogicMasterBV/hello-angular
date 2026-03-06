import {Component, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product-service';
import {Product} from './product';
import {toSignal} from '@angular/core/rxjs-interop';
import { Header } from "./header/header";
import {Navbar} from './communication/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // IN precedenza veniva usata la libreria "zone.js"
  protected readonly title = signal('A lunedi');
  counter = signal(4);
  nums = signal([1, 2, 3]);
  imgs = ["fiore.png", "mare.png"];
  imageCounter = 0;
  selectedImage = signal(this.imgs[this.imageCounter]);
  products:Signal<Product[]>;
  // private productService:ProductService;
  // constructor(productService:ProductService){
  //     this.productService = productService;
  // }

  constructor(private productService:ProductService){
    const observable = this.productService.getProducts();
    const productsSignal = toSignal(observable, { initialValue : [] });
    this.products = productsSignal;
  }

  ngOnInit(): void {

    }
  /*ngOnInit() {
    const observable = this.productService.getProducts();
    observable.subscribe({
      next: ps=>this.products = signal(ps),
      error:er=>console.log(er),
    })*/

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
