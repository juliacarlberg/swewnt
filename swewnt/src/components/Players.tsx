// import { useEffect, useState } from "react";
// import { getAllPlayers } from "../services/playerServices";
// import { Player } from "../models/Player";

// export const Players = () => {
//   const [showPlayers, setShowPlayers] = useState<Player[]>([]);

//   useEffect(() => {
//     const getPlayers = async () => {
//       const data = await getAllPlayers();
//       setShowPlayers(data);
//       console.log(data);
//     };
//     getPlayers();
//   }, []);

//   return (
//     <>
//       {showPlayers.map((p) => (
//         <div key={p.id}>
//           <h2>{p.firstname}</h2>
//         </div>
//       ))}
//     </>
//   );
// };

import { useEffect, useState } from "react";
import { getAllPlayers } from "../services/playerServices";
import { Player } from "../models/Player";

export const Players = () => {
  const [showPlayers, setShowPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await getAllPlayers();
        const data = response.data || []; // Assuming the property name is 'data'
        setShowPlayers(data);
        console.log("Fetched players:", data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    getPlayers();
  }, []);

  console.log("showPlayers before rendering:", showPlayers);

  return (
    <>
      {showPlayers && showPlayers.length > 0 ? (
        showPlayers.map((p) => (
          <div key={p.id}>
            <h2>{p.firstname}</h2>
          </div>
        ))
      ) : (
        <p>No players available.</p>
      )}
    </>
  );
};
