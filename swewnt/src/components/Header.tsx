import { HeaderStyled } from "../styled components/HeaderStyled";
import logo from "../assets/SVFFlogo.webp";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <img className="logo" src={logo} alt="SVFF logga" />
        <nav>
          <Link to={"/"}>Hem</Link>
          <Link to={"/players"}>Spelare</Link>
          <Link to={"/eshop"}>Webbshop</Link>
        </nav>
        <i className="fa-solid fa-basket-shopping"></i>
      </HeaderStyled>
    </>
  );
};
