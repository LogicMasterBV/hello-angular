import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-father',
  imports: [Child],
  templateUrl: './father.html',
  styleUrl: './father.css',
})
export class Father {
  names: String[] = ["fabio", "fabbrizio", "fabbro"];

  onValueSelected(value:String){
    alert(`è stato selezionato ${value}`);
  }
}
