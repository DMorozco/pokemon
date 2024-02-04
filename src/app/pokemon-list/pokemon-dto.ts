export interface PokemonDto {
   name: string;
    url: string;
  };

export interface PokemonListDto {
    results: PokemonDto[];
};

export interface PokemonPreviewDto {
    height: number;
    id: number;
    name: string;
    sprites: {
      front_default: string
    };
    weight: number;
};