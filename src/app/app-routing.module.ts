import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  {path: 'view/:pokemonname', component: PokemonViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
