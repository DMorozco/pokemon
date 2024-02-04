export interface PokemonDto {
  name: string;
  url: string;
};

export interface PokemonListDto {
  results: PokemonDto[];
};

interface Type {
  type: {
    name: string
  }
}

export interface PokemonPreviewDto {
  id: number;
  name: string;
  sprites: {
    front_default: string
  };
  weight: number;
  height: number;
  types: Type[];
};

export class PokemonModel {
  [key: string]: any; // index signature: key o clave para permitir filtrar por cada atributo
  private id: number;
  private name: string;
  private image: string;
  private weight: number;
  private height: number;
  private type: string;

  constructor(pokemon: PokemonPreviewDto) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.image = pokemon.sprites.front_default;
    this.type = pokemon.types.join(', ');
  }

  public get Id() {
    return this.id;
  }

  public get Name() {
    return this.name;
  }

  public get Weight() {
    return this.weight;
  }

  public get Height() {
    return this.height;
  }

  public get Image() {
    return this.image;
  }

  public get Type() {
    return this.type;
  }
};