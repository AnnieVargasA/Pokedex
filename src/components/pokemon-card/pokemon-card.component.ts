import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  templateUrl: './pokemon-card.component.html',
  imports: [CommonModule, TitleCasePipe, TranslateModule],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  typeToClass(type: string): string {
    return 'type-badge ' + (type || '').toLowerCase();
  }
}