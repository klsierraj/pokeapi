import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonService],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 100 pokemons', async () => {
    const pokemons = await service.getPokemons();
    expect(pokemons.length).toBe(100);
  });

  it('should return a specific pokemon by id', async () => {
    const pokemon = await service.getPokemonById(1); // Bulbasaur
    expect(pokemon.name).toBe('bulbasaur');
  });
});
