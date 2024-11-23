// list.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    },
    {
      name: 'Yuli',
      power: 9500
    }
  ];

  @Output()
  public onDelete = new EventEmitter<string>();
  // public onDeleteId: EventEmitter<number> = new EventEmitter();


  onDeleteChracter(id?: string): void {

    if (!id) return;

    console.log({ id });
    this.onDelete.emit(id);
  }

}
