import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../components/Home';
import store from './store_config';
import '@testing-library/jest-dom';

describe('Home component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });
  test('loads and display categories', async () => {
    expect(screen.getByText('categorie 1')).toBeInTheDocument();
  });

  test('loads and display all the categories', async () => {
    const categories = screen.getAllByText(/categorie/);
    expect(categories.length).toBe(2);
  });

  test('SEE ITEMS link takes you to items page when clicked', () => {
    const links = screen.getAllByText('See items');

    expect(window.location.pathname).toBe('/');
    fireEvent.click(links[0]);

    expect(window.location.pathname).toBe('/items');
  });
});
