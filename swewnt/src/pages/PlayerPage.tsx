import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Players } from "../components/Players";
import { HeadH2 } from "../styled components/TextStyled";
import { BigWrapper, SmallWrapper } from "../styled components/WrapperStyled";
import lagbild from "../assets/lagbildnyatröjan.jpg";

export const PlayerPage = () => {
  return (
    <>
      <Header></Header>
      <BigWrapper>
        <img
          src={lagbild}
          alt="Glada spelare vid planen"
          className="lagbildpp"
        />
        <HeadH2>Våra spelare</HeadH2>
        <SmallWrapper>
          <Players></Players>
        </SmallWrapper>
      </BigWrapper>
      <Footer></Footer>
    </>
  );
};
