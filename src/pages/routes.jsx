import App from "../App";
import { createBrowserRouter } from "react-router";
import Shop from "./Shop/Shop";
import Home from "./Home /Home";
import Cart from "./Cart/Cart";
import ErrorPage from "./Error/Error";

// routes for the app | react-routing-library

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart", //learn later to use dynamic userId to show specific cart| after learning backend
        element: <Cart />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
