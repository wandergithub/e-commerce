import { Provider } from "react-redux";
import Home from "../components/Home";
import store from "./store_config";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home component", () => {
  test("loads and display categories", async () => {
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

  test("SEE ITEMS link takes you to items page when clicked", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("See items");
    
    expect(window.location.pathname).toBe("/");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/items");
  });
});
