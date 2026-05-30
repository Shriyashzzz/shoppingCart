import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "normalize.css";
import router from "./pages/routes";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
