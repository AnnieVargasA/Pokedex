import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from '../components/pokedex/pokedex.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokedexComponent],
  templateUrl: './app.html'
})
export class AppComponent {}