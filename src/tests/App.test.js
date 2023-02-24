import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import store from "./store_config";
import renderer from 'react-test-renderer';

describe("App integration test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  test("it renders on / root page", () => {
    expect(window.location.pathname).toBe("/");
  });

  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
