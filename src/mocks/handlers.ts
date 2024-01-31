import {
  BASE_URL,
  ENDPOINTS,
  NamedAPIResourceList,
  Pokemon,
} from '@/services/pokeapi';
import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get(`${BASE_URL.REST}${ENDPOINTS.POKEMON}`, () => {
    return HttpResponse.json<NamedAPIResourceList>({
      count: 3,
      next: null,
      previous: null,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
        {
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon/3/',
        },
      ],
    });
  }),
  http.get(`${BASE_URL.REST}${ENDPOINTS.POKEMON}/:name`, () => {
    return HttpResponse.json<Pokemon>({
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 64,
      forms: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
        },
      ],
      game_indices: [],
      height: 7,
      held_items: [],
      id: 1,
      is_default: true,
      location_area_encounters: '',
      moves: [
        {
          move: {
            url: 'https://pokeapi.co/api/v2/move/13/',
            name: 'razor-wind',
          },
          version_group_details: [],
        },
      ],
      name: 'bulbasaur',
      order: 1,
      past_types: [],
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      sprites: {
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
            front_female: null,
          },
          home: {
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          official_artwork: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            front_shiny: null,
          },
        },
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
        },
      ],
      weight: 69,
    });
  }),
];
