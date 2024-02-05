import { Component } from '@angular/core';
import { PokemonModel, PokemonPreviewDto } from '../pokemon-list/pokemon-dto';
import { PokemonService } from '../pokemon-list/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent {
  pokemon: PokemonModel | undefined;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    let name: string = this.route.snapshot.params["pokemonname"];
    this.pokemonService.getByName(name).subscribe(( pokemon: PokemonPreviewDto) => {
      this.pokemon = new PokemonModel(pokemon);
    });
  }

  calculateProgressBarWidth(baseStat: string | number): string {
    const parsedValue = typeof baseStat === 'string' ? parseInt(baseStat, 10) : baseStat;
    const percentage = (parsedValue / 255) * 100;
    return percentage + '%';
}
}

