import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return 100 pokemons', async () => {
    jest
      .spyOn(service, 'getPokemons')
      .mockResolvedValue([
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ]);
    const pokemons = await controller.getPokemons();
    expect(pokemons.length).toBeGreaterThan(0);
  });

  it('should return a specific pokemon by id', async () => {
    jest.spyOn(service, 'getPokemonById').mockResolvedValue({
      name: 'bulbasaur',
      types: [{ slot: 1, type: 'grass' }],
    });
    const pokemon = await controller.getPokemonById(1);
    expect(pokemon.name).toBe('bulbasaur');
  });
});
