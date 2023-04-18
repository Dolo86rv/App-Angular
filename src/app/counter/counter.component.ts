import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h4> Mi Counter: {{ counter }}</h4>

    <button (click)="increDecre(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increDecre(-1)" >-1</button>
  `,
})

export class CounterComponent {
  public counter: number = 10;

  constructor() { }

  increDecre(value: number):void{
    this.counter += value
  }
  reset():void{
      this.counter=10
  }

}
