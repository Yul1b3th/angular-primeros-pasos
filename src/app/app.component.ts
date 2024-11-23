import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/components/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { MainPageComponent } from './dbz/pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CounterComponent,
    HeroComponent,
    ListaComponent,
    MainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}
