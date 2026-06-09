import App from "../App";
import { createBrowserRouter } from "react-router";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import ErrorPage from "./Error/Error";
import DefaultHome from "./Home/DefaultHome";
import { Component } from "lucide-react";
import Product from "./Product/Product";
import DefaultShop from "./Shop/DefaultShop";
// routes for the app | react-routing-library

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        children: [
          {
            index: true,
            element: <DefaultHome />,
          },
          {
            path: "/product/:productid",
            element: <Product />,
          },
        ],
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <DefaultShop />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
