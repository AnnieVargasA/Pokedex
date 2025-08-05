import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { RecentSearchesComponent } from '../recent-searches/recent-searches.component';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  templateUrl: './pokedex.component.html',
  imports: [CommonModule, TranslateModule, SearchFormComponent, PokemonCardComponent, RecentSearchesComponent],
})
export class PokedexComponent {
  pokemon?: Pokemon;
  loading = false;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  onSearch(name: string) {
    this.loading = true;
    this.error = null;
    this.pokemon = undefined;
    this.pokemonService.getPokemon(name).subscribe({
      next: data => {
        this.pokemon = data;
        this.loading = false;
        this.updateRecents(name);
      },
      error: err => {
        this.error = err.message || 'No se encontró el Pokémon o hubo un error de red.';
        this.loading = false;
      }
    });
  }

  updateRecents(name: string) {
    let recents = JSON.parse(sessionStorage.getItem('recents') || '[]');
    recents = recents.filter((n: string) => n !== name);
    recents.unshift(name);
    if (recents.length > 5) recents = recents.slice(0, 5);
    sessionStorage.setItem('recents', JSON.stringify(recents));
  }
}