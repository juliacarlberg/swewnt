import { useLoaderData, useParams } from "react-router";
import { Loader } from "../loaders/playerLoader";
import { SmallWrapper } from "../styled components/WrapperStyled";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PlayerView = () => {
  const { players } = useLoaderData() as Loader;
  const params = useParams();
  const current = players.find((player) => player._id.toString() == params.id);

  console.log("Current Player:", current);

  if (!current) {
    console.log("Player not found!");
    return (
      <>
        <Header></Header>
        <h2>Oops! Vi kunde inte hitta den spelaren</h2>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <SmallWrapper>
        <div className="player_container" key={current._id}>
          <img
            src={current.imageUrl}
            alt="Fotbollsspelaren"
            className="detail_image"
          />
          <article>
            <h2>
              {current.firstname} {current.lastname}
            </h2>
            <section>
              <h3>Födelsedatum:</h3>
              <p>{current.dateofbirth}</p>
            </section>
            <section>
              <h3>Födelseort</h3>
              <p>{current.birthplace}</p>
            </section>
            <section>
              <h3>Längd:</h3>
              <p>{current.height}</p>
            </section>
            <section>
              <h3>Tröjnummer:</h3>
              <p>{current.playernumber}</p>
            </section>
            <section>
              <h3>Position:</h3>
              <p>{current.position}</p>
            </section>
            <section>
              <h3>Klubb:</h3>
              <p>{current.club}</p>
            </section>
          </article>
        </div>
      </SmallWrapper>
      <Footer></Footer>
    </>
  );
};
