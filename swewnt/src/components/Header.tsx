import { HeaderStyled } from "../styled components/HeaderStyled";
import logo from "../assets/SVFFlogo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Cart } from "./Cart";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(true);
  };
  return (
    <>
      <HeaderStyled>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="SVFF logga" />
        </Link>
        <nav>
          <Link to={"/"}>Hem</Link>
          <Link to={"/players"}>Spelare</Link>
          <Link to={"/products"}>Webbshop</Link>
        </nav>
        <i className="fa-solid fa-basket-shopping" onClick={handleClick}></i>
        {showCart ? <Cart /> : null}
      </HeaderStyled>
    </>
  );
};
