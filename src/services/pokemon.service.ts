import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${encodeURIComponent(name)}`).pipe(
      catchError(err => throwError(() => new Error('No se encontró el Pokémon o hubo un error de red.')))
    );
  }
}