import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonListDto, PokemonPreviewDto } from './pokemon-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  private readonly baseUrlPreview: string = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient)  { }

  getAll(): Observable<PokemonListDto> {
    return this.http.get<PokemonListDto>(`${this.baseUrl}`);
  }

  getOne(pokemonname: string): Observable<PokemonPreviewDto> {
    return this.http.get<PokemonPreviewDto>(`${this.baseUrlPreview + pokemonname}`);
  }
}


