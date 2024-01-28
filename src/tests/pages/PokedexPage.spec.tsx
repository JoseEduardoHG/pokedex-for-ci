import PokedexPage from '@/pages/PokedexPage';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { describe, it } from 'vitest';

const MockPokedexPage = () => (
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <PokedexPage />
    </QueryParamProvider>
  </BrowserRouter>
);

describe('PokedexPage', () => {
  it('should render', () => {
    render(<MockPokedexPage />);
  });
});
