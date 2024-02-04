import { Component } from '@angular/core';
import { PokemonPreviewDto } from '../pokemon-list/pokemon-dto';
import { PokemonService } from '../pokemon-list/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent {
  pokemon:PokemonPreviewDto = {
    id: -1,
    name: "The pokemon does not exist",
    height: -1,
    weight: -1,
    sprites: {
      front_default: ""
    },
    types: []
  };

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    let name: string = this.route.snapshot.params["pokemonname"];
    this.pokemonService.getOne(name).subscribe(( pokemonOne: PokemonPreviewDto) => {
      this.pokemon = pokemonOne;
    });
  }
}
