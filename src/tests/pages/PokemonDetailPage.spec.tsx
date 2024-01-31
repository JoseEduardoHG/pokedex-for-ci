import PokemonDetailPage from '@/pages/PokemonDetailPage';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

const MockPokemonDetailPage = () => (
  <BrowserRouter>
    <PokemonDetailPage />
  </BrowserRouter>
);

describe('PokemonDetailPage', () => {
  it('should render', () => {
    render(<MockPokemonDetailPage />);
  });

  /*   it('should render the pokemon id', async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/no. \d+/i);
  });

  it("should render the pokemon's name", async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/bulbasaur/i);
  });

  // it("should render the pokemon's description", async () => {
  //   render(<PokemonDetailPage />);
  //   await screen.findByText(
  //     /tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo/i,
  //   );
  // });

  it("should render the pokemon's height", async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/0.7 m/i);
  });

  it("should render the pokemon's weight", async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/6.9 kg/i);
  });

  // it("should render the pokemon's category", async () => {
  //   render(<PokemonDetailPage />);
  //   await screen.findByText(/seed/i);
  // });

  it("should render the pokemon's ability", async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/overgrow/i);
  });

  it("should render the pokemon's types", async () => {
    render(<PokemonDetailPage />);
    await screen.findByText(/grass/i);
  }); */

  // it("should render the pokemon's debility", async () => {
  //   render(<PokemonDetailPage />);
  //   await screen.findAllByTestId(/debility/i);
  // });
});
