import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import { routes } from "../src/pages/routes";
describe("check app rendering & routing works", () => {
  it("checks app renders", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });

  it("landing on a bad page", () => {
    // new way to fake routing in the jsDom
    const badRoute = "/badroute";
    // create the simialr router for the fake dom
    const router = createMemoryRouter(routes, {
      initialEntries: [badRoute],
    });
    //render that compinents usin gthe routes in the fake dom
    render(<RouterProvider router={router} />);

    // verify navigation to the bad route returns an 404 error in the fake dom
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });

  it("routing to home element works", () => {});
});
