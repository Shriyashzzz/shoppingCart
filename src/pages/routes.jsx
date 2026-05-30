import App from "../App";
import { createBrowserRouter } from "react-router";
import Shop from "./Shop/shop";
import Home from "./Home /home";
import Cart from "./Cart/cart";
import ErrorPage from "./Error/error";

// routes for the app | react-routing-library

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart", //learn later to use dynamic userId to show specific cart| after learning backend
        element: <Cart />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
