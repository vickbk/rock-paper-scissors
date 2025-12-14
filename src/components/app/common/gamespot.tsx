import { Link, Outlet, useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { DefaultGame } from "../default/default-game";
import { AdvancedGame } from "../advanced/advanced-game";
import { Score } from "./score";
import setMemoItem from "../../../libs/memorization/set-item";

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

  const selectedGame = (node: HTMLHeadingElement) => {
    if (!node) return;
    setMemoItem("game-choice", game);
  };

  return (
    <Article>
      <Heading className="sr-only" ref={selectedGame}>
        Welcomen to {titles[game]}
      </Heading>
      <Score />
      {components[game]}

      <Link to={"/game"}>Change Game</Link>
      <Link to={"rules"}>Rules</Link>
      <Outlet />
    </Article>
  );
};
