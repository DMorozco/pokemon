import { Component } from '@angular/core';
import { PokemonListDto, PokemonModel, PokemonPreviewDto } from './pokemon-dto';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemons: Array<PokemonModel> = [];
  sortOrder: string = 'asc';
  sortBy: string = 'Id';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((allPokemons: PokemonListDto) => {
      // recorremos el arreglo de la lista de pokemones para luego encontrar el detalle de cada uno
      allPokemons.results.forEach((pokemon) => {
        this.pokemonService
          .getOne(pokemon.name)
          .subscribe((pokemonDetail: PokemonPreviewDto) => {
            // creamos una instancia (un object de tipo PokemonModel) para almacenarla en mi lista
            let newPokemon = new PokemonModel(pokemonDetail);

            console.log(JSON.stringify(pokemonDetail, null, 2));

            this.pokemons.push(newPokemon);
          });
      });
      this.sortTable('Id'); 
    });
  }

  sortTable(column: string): void {
    if (column === this.sortBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortOrder = 'asc';
    }
  
    this.pokemons.sort((a, b) => {
      const order = this.sortOrder === 'asc' ? 1 : -1;
  
      if (a[this.sortBy] > b[this.sortBy]) {
        return order;
      } else if (a[this.sortBy] < b[this.sortBy]) {
        return -order;
      }
  
      return 0;
    });
  }
  
}
