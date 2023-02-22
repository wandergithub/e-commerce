import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import store from "./store_config";

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
});
