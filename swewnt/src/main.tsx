import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Players } from "./pages/Players";
import { Shop } from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/players",
    element: <Players></Players>,
  },
  {
    path: "/eshop",
    element: <Shop></Shop>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
