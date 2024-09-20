import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDTO, PokemonDetailDTO } from './dto/pokemon.dto';

@Controller('api/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getPokemons(): Promise<PokemonDTO[]> {
    return this.pokemonService.getPokemons();
  }

  @Get(':id')
  async getPokemonById(@Param('id') id: number): Promise<PokemonDetailDTO> {
    return this.pokemonService.getPokemonById(id);
  }

  @Get('/pokemonAndTypes/:id')
  async getPokemonWithTranslatedTypes(
    @Param('id') id: number,
  ): Promise<PokemonDetailDTO> {
    return this.pokemonService.getPokemonWithTranslatedTypes(id);
  }
}
