import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import router from "./pages/routes";
import { RouterProvider } from "react-router";
import "./theme/theme.css";
import { ThemeProvider } from "./theme/ThemeContext";

createRoot(document.getElementById("root")).render(
  // wrap the ThemProvider wrapper component to access the theme context without prop drilling
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
