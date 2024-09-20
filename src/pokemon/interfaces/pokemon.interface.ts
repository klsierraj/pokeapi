export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonTranslatedType extends PokemonType {
  translations: { language: string; name: string }[];
}
