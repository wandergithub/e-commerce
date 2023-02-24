import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import store from './store_config';

describe('Header functionality: Nav-bar, Option Buttons', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
