// main - page.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from '../../components/list/list.component';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { Character } from '../../interfaces/character.interfaces';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddCharacterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  private readonly dbzService = inject(DbzService)

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharactermain(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
