import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../src/pages/routes";
import { ThemeProvider } from "../src/theme/ThemeContext";

describe("check app rendering & routing works", () => {
  it("checks app renders", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>,
    );
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });

  it("landing on a bad page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/badroute"],
    });
    render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>,
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });

  it("routing to home element works", () => {});
});
