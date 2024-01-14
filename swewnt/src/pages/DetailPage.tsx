import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlayerView } from "../components/PlayerView";
import { BigWrapper } from "../styled components/WrapperStyled";

export const DetailPage = () => {
  return (
    <>
      <Header></Header>
      <BigWrapper>
        <PlayerView></PlayerView>
      </BigWrapper>
      <Footer></Footer>
    </>
  );
};
