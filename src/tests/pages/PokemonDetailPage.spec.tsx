import PokemonDetailPage from '@/pages/PokemonDetailPage';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

/* const api = {
  getPokemon: vi.fn(),
};

const mockPokemon: Pokemon = {
  id: 1,
  name: 'bulbasur',
  sprites: {},
  types: [],
}; */

describe('PokemonDetailPage', () => {
  it('should render', () => {
    render(<PokemonDetailPage />);
  });
  /*   it('should render the pokemon id', () => {
    const spy = vi.spyOn(api, 'getPokemon').mockResolvedValue(mockPokemon);

    render(<PokemonDetailPage />);
    // screen.getByText(/no. \d+/i);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(mockPokemon);
  });

  it("should render the pokemon's name", () => {
    render(<PokemonDetailPage />);
    screen.getByText(/bulbasur/i);
  });

  it("should render the pokemon's description", () => {
    render(<PokemonDetailPage />);
    screen.getByText(
      /tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo/i,
    );
  });

  it("should render the pokemon's height", () => {
    render(<PokemonDetailPage />);
    screen.getByText(/0.7 m/i);
  });

  it("should render the pokemon's weight", () => {
    render(<PokemonDetailPage />);
    screen.getByText(/6.9 kg/i);
  });

  it("should render the pokemon's category", () => {
    render(<PokemonDetailPage />);
    screen.getByText(/seed/i);
  });

  it("should render the pokemon's ability", () => {
    render(<PokemonDetailPage />);
    screen.getByText(/espesura/i);
  });

  it("should render the pokemon's types", () => {
    render(<PokemonDetailPage />);
    screen.getAllByTestId(/type/i);
  });

  it("should render the pokemon's debility", () => {
    render(<PokemonDetailPage />);
    screen.getAllByTestId(/debility/i);
  }); */
});
