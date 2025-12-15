import { useNavigate, useParams } from "react-router-dom";
import CustomDialog from "../../../shared/CustomDialog";
import { PerGame } from "./per-game";
import { AllGames } from "./all-games";

export const Rules = () => {
  const { game } = useParams() as { game: "default" | "advanced" };
  const navigate = useNavigate();
  return (
    <CustomDialog
      isOpen
      className="min-h-screen min-w-screen md:min-h-auto md:min-w-auto m-auto md:rounded-lg grid place-items-center"
      onClose={() => navigate("../")}
    >
      <title>Rules | Rock Paper Scissors</title>
      {game ? <PerGame game={game} /> : <AllGames />}
    </CustomDialog>
  );
};
