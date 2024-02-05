export interface PokemonDto {
  name: string;
  url: string;
}

export interface PokemonListDto {
  results: PokemonDto[];
}

interface TypeDto {
  type: {
    name: string;
  };
}
interface StatDto {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonPreviewDto {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  height: number;
  types: TypeDto[];
  stats: StatDto[];
}

interface StatModel {
  name: string;
  value: number;
}

export class PokemonModel {
  [key: string]: any; // index signature: key o clave para permitir filtrar por cada atributo
  private id: number;
  private name: string;
  private image: string;
  private weight: number;
  private height: number;
  private type: string;
  private stats: StatModel[];

  constructor(pokemon: PokemonPreviewDto) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.image = pokemon.sprites.front_default;
    this.type = this.mappingTypes(pokemon.types);
    this.stats = this.mappingStats(pokemon.stats);
  }

  // mapeo de tipos
  private mappingTypes(types: TypeDto[]): string {
    return types.map((type) => type.type.name).join(', ');
  }

  // mapeo de stats
  private mappingStats(stats: StatDto[]): StatModel[] {
    return stats.reduce((acc, stat) => {
      acc.push({ name: stat.stat.name, value: stat.base_stat });
      return acc;
    }, [] as StatModel[]);
  }

  //metocos para obtener los valores de las porpiedades privadas
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

  public get Stats() {
    return this.stats;
  }
}
