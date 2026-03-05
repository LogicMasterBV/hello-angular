import { Component, input, Input, output, Signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  //@Input() value!: String;
  value = input.required<String>();

  //@Output()

  selected = output<String>();

  notifyParent(){
    this.selected.emit(this.value());
  }
}
