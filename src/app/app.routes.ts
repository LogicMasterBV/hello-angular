import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { AddProduct } from './add-product/add-product';
import { DeleteProduct } from './delete-product/delete-product';
import { Father } from './communication/father/father';
import {Login} from './communication/login/login';

//configurazione dei percorsi di navigazione
export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component: Home },
    { path : 'add-product', component: AddProduct },
    { path : 'delete-product', component : DeleteProduct },
    { path : 'communication', component : Father},
    { path : 'login', component : Login }
];

