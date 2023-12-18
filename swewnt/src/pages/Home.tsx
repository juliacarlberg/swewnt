import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import seger from "../assets/ledsenseger.jpeg";
import lagkram from "../assets/lagkram.avif";
import { HomeArticle } from "../styled components/TextStyled";
import { BigWrapper, SmallWrapper } from "../styled components/WrapperStyled";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <BigWrapper>
        <SmallWrapper>
          <img
            className="segerimg"
            src={seger}
            alt="Caroline Seger torkar en tår på planen"
          />
          <HomeArticle>
            <h2>Tack för allt Caroline Seger</h2>
            <p>
              Caroline Seger har spelat sin sista match efter 18 år i
              landslaget. Caroline har spelat 240 matcher i landslagströjan. Vi
              säger ett stort tack för en otrolig blågul karriär.
            </p>
          </HomeArticle>
        </SmallWrapper>
        <SmallWrapper>
          <HomeArticle>
            <h2>Tillsammans i med och motgångar</h2>
            <p>
              Sverige missar OS 2024 efter en tung förlust. Men nu tar vi nya
              tag och jobbar på att bli det bästa landslaget som vi vet att vi
              är.
            </p>
          </HomeArticle>
          <img
            className="teamimg"
            src={lagkram}
            alt="Svenska damerna i en kram på planen"
          />
        </SmallWrapper>
      </BigWrapper>
      <Footer></Footer>
    </>
  );
};
