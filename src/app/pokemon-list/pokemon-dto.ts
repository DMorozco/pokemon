export interface PokemonDto {
   name: string;
    url: string;
  };

export interface PokemonListDto {
    results: PokemonDto[];
};