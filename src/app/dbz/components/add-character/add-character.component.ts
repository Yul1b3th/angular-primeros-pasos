import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Character } from '../../interfaces/character.interfaces';


@Component({
  selector: 'app-dbz-add-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    // debugger;

    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;

    this.character = { name: '', power: 0 };
  }
}
