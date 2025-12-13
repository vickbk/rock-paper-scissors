import { Link, Outlet, useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { DefaultGame } from "../default/default-game";
import { AdvancedGame } from "../advanced/advanced-game";
import { Score } from "./score";

export const GameSpot = () => {
  const { game } = useParams() as { game: "default" | "advanced" };

  const titles = {
    default: "Rock Paper Scissors",
    advanced: "Rock Paper Scissors Lizard and Spock",
  };

  const components = {
    default: <DefaultGame />,
    advanced: <AdvancedGame />,
  };

  return (
    <Article>
      <Heading className="sr-only">Welcomen to {titles[game]}</Heading>
      <Score />
      {components[game]}
      <Link to={"rules"}>Rules</Link>
      <Outlet />
    </Article>
  );
};
