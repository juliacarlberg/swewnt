import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Players } from "../components/Players";
import { HeadH2 } from "../styled components/TextStyled";
import { BigWrapper, SmallWrapper } from "../styled components/WrapperStyled";

export const PlayerPage = () => {
  return (
    <>
      <Header></Header>
      <BigWrapper>
        <HeadH2>Våra spelare</HeadH2>
        <SmallWrapper>
          <Players></Players>
        </SmallWrapper>
      </BigWrapper>
      <Footer></Footer>
    </>
  );
};
