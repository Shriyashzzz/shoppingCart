import App from "../App";
import { createBrowserRouter } from "react-router";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import ErrorPage from "./Error/Error";
import DefaultHome from "./Home/DefaultHome";
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
        ],
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
