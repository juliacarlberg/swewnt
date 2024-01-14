import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Products } from "../components/Products";
import shopheader from "../assets/shopheader.jpg";
import { HeadH2 } from "../styled components/TextStyled";
import blackstenius from "../assets/blacksteniuspose.avif";
import { ShopWrapper } from "../styled components/WrapperStyled";

export const Shop = () => {
  return (
    <>
      <Header></Header>
      <img
        src={shopheader}
        alt="Sverigetröjan med Blackstenius"
        className="shop_header"
      />
      <HeadH2>Våra produkter</HeadH2>
      <ShopWrapper>
        <img
          src={blackstenius}
          alt="Stina Blackstenius poserar med bollen"
          className="blackstenius_shop_image"
        />
        <Products></Products>
      </ShopWrapper>
      <Footer></Footer>
    </>
  );
};
