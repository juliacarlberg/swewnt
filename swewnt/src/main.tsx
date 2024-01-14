import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./components/Cart";
import { PlayerView } from "./components/PlayerView";
import { CartProvider } from "./contexts/CartContext";
import "./index.scss";
import { cartLoader } from "./loaders/cartLoader";
import { playerLoader } from "./loaders/playerLoader";
import { productLoader } from "./loaders/productLoader";
import { ProductViewLoader } from "./loaders/productViewLoader";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Home } from "./pages/Home";
import { PlayerPage } from "./pages/PlayerPage";
import { Shop } from "./pages/Shop";

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
  {
    path: "/products",
    element: <Shop></Shop>,
    loader: productLoader,
  },
  {
    path: "/products/:id",
    element: <ProductViewLoader></ProductViewLoader>,
    loader: productLoader,
  },
  {
    path: "/carts",
    element: <Cart></Cart>,
    loader: cartLoader,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
