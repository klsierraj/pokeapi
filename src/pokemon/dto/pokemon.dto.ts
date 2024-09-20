export class PokemonDTO {
  name: string;
  url: string;
}

export class PokemonDetailDTO {
  name: string;
  types: PokemonTypeDTO[];
}

export class PokemonTypeDTO {
  slot: number;
  type: string;
  translations?: {
    language: string;
    name: string;
  }[];
}
