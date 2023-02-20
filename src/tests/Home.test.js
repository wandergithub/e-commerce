import { Provider } from "react-redux";
import Home from "../components/Home";
import store from "./store_config";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Categories page /root", () => {
  test("loads and display categories", async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // ACT

    // Assert
    expect(screen.getByText("categorie 1")).toBeInTheDocument();
  });
});
