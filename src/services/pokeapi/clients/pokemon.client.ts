import { ENDPOINTS } from '../constants';
import { NamedAPIResourceList, Pokemon } from '../models';
import { BaseClient } from './base';

export class PokemonClient extends BaseClient {
  public async getPokemon(identifier: string | number): Promise<Pokemon> {
    return this.getResource(ENDPOINTS.POKEMON, identifier);
  }

  public async getPokemonList(
    offset?: number,
    limit?: number,
  ): Promise<NamedAPIResourceList> {
    return this.getResourceList(ENDPOINTS.POKEMON, offset, limit);
  }
}
