import { Injectable } from '@nestjs/common';
import {
  PokemonDTO,
  PokemonDetailDTO,
  PokemonTypeDTO,
} from './dto/pokemon.dto';
import { Pokemon, PokemonType } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2';

  async getPokemons(): Promise<PokemonDTO[]> {
    const response = await fetch(`${this.pokeApiUrl}/pokemon?limit=100`);
    const data: { results: Pokemon[] } = await response.json();
    return data.results.map(
      (pokemon: Pokemon): PokemonDTO => ({
        name: pokemon.name,
        url: pokemon.url,
      }),
    );
  }

  async getPokemonById(id: number): Promise<PokemonDetailDTO> {
    const response = await fetch(`${this.pokeApiUrl}/pokemon/${id}`);
    const data: { name: string; types: PokemonType[] } = await response.json();
    return {
      name: data.name,
      types: data.types.map(
        (type: PokemonType): PokemonTypeDTO => ({
          slot: type.slot,
          type: type.type.name,
        }),
      ),
    };
  }

  async getPokemonWithTranslatedTypes(id: number): Promise<PokemonDetailDTO> {
    const response = await fetch(`${this.pokeApiUrl}/pokemon/${id}`);
    const data: { name: string; types: PokemonType[] } = await response.json(); 
    const typesWithTranslations = await Promise.all(
      data.types.map(async (type: PokemonType): Promise<PokemonTypeDTO> => {
        const typeResponse = await fetch(type.type.url);
        const typeData: {
          names: { language: { name: string }; name: string }[];
        } = await typeResponse.json();

        const translations = typeData.names
          .filter(
            (name) =>
              name.language.name === 'es' || name.language.name === 'ja',
          )
          .map((name) => ({
            language: name.language.name,
            name: name.name,
          }));

        return {
          slot: type.slot,
          type: type.type.name,
          translations,
        };
      }),
    );

    return {
      name: data.name,
      types: typesWithTranslations,
    };
  }
}
