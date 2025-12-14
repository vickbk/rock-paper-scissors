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
    <Article className="p-6 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Heading className="sr-only" ref={selectedGame}>
        Welcomen to {titles[game]}
      </Heading>
      <Score />
      <div className="place-self-center">{components[game]}</div>

      <div className="flex justify-between gap-4 uppercase">
        {[
          ["/game", "Change Game"],
          ["rules", "Rules"],
        ].map(([path, text]) => (
          <Link className="p-4 px-6 border-2 rounded-lg" to={path} key={text}>
            {text}
          </Link>
        ))}
        <Outlet />
      </div>
    </Article>
  );
};
