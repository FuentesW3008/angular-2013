import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter: number = 10;

  constructor(){}

  increaseBy(value: number): void{
    this.counter += value;
  }

  decreaseBy( value: number ): void{
    this.counter-= value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
