import { useNavigate } from "react-router-dom";
import { Player } from "../models/Player";

interface PlayerProps {
  player: Player;
}

export const SinglePlayer = ({ player }: PlayerProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/players/${player.id}`)}>
      {player.firstname}
    </div>
  );
};
