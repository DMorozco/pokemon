import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { PokemonListDto } from './pokemon-dto';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemons: PokemonListDto = {
    results: [],
  };

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((allPokemons: PokemonListDto) => {
      this.pokemons = allPokemons;
    });
  }

}