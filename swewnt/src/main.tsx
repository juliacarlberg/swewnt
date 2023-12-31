import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerView } from "./components/PlayerView";
import "./index.scss";
import { playerLoader } from "./loaders/playerLoader";
import { Home } from "./pages/Home";
import { PlayerPage } from "./pages/PlayerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    index: true,
  },
  {
    path: "/players",
    element: <PlayerPage></PlayerPage>,
    loader: playerLoader,
  },
  {
    path: "/players/:id",
    element: <PlayerView></PlayerView>,
    loader: playerLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
