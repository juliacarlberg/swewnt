import seger from "../assets/seger.png";
import lagkram from "../assets/lagkramen.jpg";
import tackseger from "../assets/tackseger.jpeg";
import sverige from "../assets/sverigee.jpg";
import { HomeArticle } from "../styled components/TextStyled";
import { BigWrapper, SegerWrapper } from "../styled components/WrapperStyled";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../styled components/ButtonStyled";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <BigWrapper>
        <div style={{ backgroundImage: `url(${seger})` }} className="seger_div">
          <HomeArticle>
            <h2>Tack för allt Caroline Seger</h2>
            <p>
              Caroline Seger har spelat sin sista match efter 18 år i
              landslaget. Caroline har spelat 240 matcher i landslagströjan. Vi
              säger ett stort tack för en otrolig blågul karriär.
            </p>
            <Button>Läs mer</Button>
          </HomeArticle>
        </div>
        <SegerWrapper
          style={{ backgroundImage: `url(${sverige})` }}
          className="seger_div"
        >
          <img
            src={tackseger}
            alt="Tackbild på Caroline Seger"
            className="tack_seger"
          />
        </SegerWrapper>
        <div
          style={{ backgroundImage: `url(${lagkram})` }}
          className="seger_div"
        >
          <HomeArticle>
            <h2>Tillsammans i med och motgångar</h2>
            <p>
              Sverige missar OS 2024 efter en tung förlust. Men nu tar vi nya
              tag och jobbar på att bli det bästa landslaget som vi vet att vi
              är.
            </p>
            <Button>Läs mer</Button>
          </HomeArticle>
        </div>
      </BigWrapper>
      <Footer></Footer>
    </>
  );
};
