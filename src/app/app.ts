import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from '../components/pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokedexComponent],
  templateUrl: './app.html',
  styleUrl: '../styles.scss'
})
export class App {
  protected readonly title = signal('pokedex');
}
