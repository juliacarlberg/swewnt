// import { useEffect, useState } from "react";
// import { getAllPlayers } from "../services/playerServices";
// import { Player } from "../models/Player";
// import { Link } from "react-router-dom";
// import nathalie from "../assets/nathaliebjörn.jpg";

// export const Players = () => {
//   const [showPlayers, setShowPlayers] = useState<Player[]>([]);

//   useEffect(() => {
//     const getPlayers = async () => {
//       try {
//         const response = await getAllPlayers();
//         const data = response.data || [];
//         setShowPlayers(data);
//         console.log("Fetched players:", data);
//       } catch (error) {
//         console.error("Error fetching players:", error);
//       }
//     };
//     getPlayers();
//   }, []);

//   console.log("showPlayers before rendering:", showPlayers);

//   return (
//     <>
//       {showPlayers && showPlayers.length > 0 ? (
//         showPlayers.map((p) => (
//           <Link
//             key={p.id}
//             className="player_container"
//             to={p.id ? p.id.toString() : ""}
//           >
//             <img
//               src={nathalie}
//               alt="Bild på fotbollsspelaren"
//               className="playerImage"
//             />
//             {/* <img src={p.imageUrl} alt="Bild på fotbollsspelaren" /> */}
//             <h2>
//               {p.firstname} {p.lastname}
//             </h2>
//           </Link>
//         ))
//       ) : (
//         <p>No players available.</p>
//       )}
//     </>
//   );
// };

import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/playerLoader";
import { SmallWrapper } from "../styled components/WrapperStyled";

export const Players = () => {
  const { players } = useLoaderData() as Loader;

  let playersHtml: JSX.Element[] = [<></>];

  playersHtml = players.map((p) => (
    <Link key={p._id} className="players_container" to={p._id.toString()}>
      <img
        src={p.imageUrl}
        alt="Bild på fotbollspelare"
        className="player_image"
      />
      <article>
        <h2>
          {p.firstname} {p.lastname}
        </h2>
      </article>
    </Link>
  ));

  console.log(players);

  return (
    <>
      <SmallWrapper>{playersHtml}</SmallWrapper>
    </>
  );
};
