/* import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Configuracion del objeto
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CounterComponent
  ],
  templateUrl: 'counter.component.html',
})

export class CounterComponent {

} */

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <!-- <h1>app-counter</h1>
    <h2>Hola Counter</h2> -->
    <h3>Counter {{ counter }}</h3>

    <button (click)="increaseBy(1)" class="btn btn-primary">+1</button>
    <button (click)="reset()" class="btn btn-danger">Reset</button>
    <button (click)="increaseBy(-1)" class="btn btn-secondary">-1</button>
  `,
  imports: [CounterComponent],
  // templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}
