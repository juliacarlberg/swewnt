import { useLoaderData, useParams } from "react-router";
import { Loader } from "../loaders/playerLoader";

export const PlayerView = () => {
  const { players } = useLoaderData() as Loader;
  const params = useParams();
  const current = players.find((player) => player.id.toString() == params.id);

  const showOnePlayer = (
    <div key={current?.id} className="animalDetailContainer">
      <article>
        <h2>
          {current?.firstname} {current?.lastname}
        </h2>
        <h3>Födelsedatum:</h3>
        <p>{current?.dateofbirth}</p>
        <h3>Födelseort</h3>
        <p>{current?.birthplace}</p>
        <h3>Längd:</h3>
        <p>{current?.height}</p>
        <h3>Tröjnummer:</h3>
        <p>{current?.playernumber}</p>
        <h3>Position:</h3>
        <p>{current?.position}</p>
        <h3>Klubb:</h3>
        <p>{current?.club}</p>
      </article>
    </div>
  );

  if (current == undefined) {
    return (
      <>
        <h2>Oops! vi kunde inte hitta den spelaren</h2>;
      </>
    );
  } else {
    return (
      <>
        <div id="container">{showOnePlayer}</div>
      </>
    );
  }
};
