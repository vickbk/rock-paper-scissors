import { Link, Outlet, useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { DefaultGame } from "../default/default-game";
import { AdvancedGame } from "../advanced/advanced-game";
import { Score } from "./score";
import setMemoItem from "../../../libs/memorization/set-item";
import { useState } from "react";
import { ScoreContext } from "../../../contexts/ScoreContext";
import getMemoItem from "../../../libs/memorization/get-item";

export const GameSpot = () => {
  const { game } = useParams() as { game: "default" | "advanced" };
  const [score, setScore] = useState(0);
  const titles = {
    default: "Rock Paper Scissors",
    advanced: "Rock Paper Scissors Lizard and Spock",
  };

  const [played, setPlayed] = useState(false);
  const addPlayedPlayAnimation = () => {
    setPlayed(!played);
    setTimeout(() => setPlayed(played), 2000);
  };

  const components = {
    default: <DefaultGame setPlayed={addPlayedPlayAnimation} />,
    advanced: <AdvancedGame setPlayed={addPlayedPlayAnimation} />,
  };

  const selectedGame = (node: HTMLHeadingElement) => {
    if (!node) return;
    setMemoItem("game-choice", game);
    setScore(getMemoItem<number>(`score.${game}`) || 0);
  };

  const saveScore = (score: number) => {
    setScore(score);
    setMemoItem(`score.${game}`, score);
  };

  return (
    <Article className="p-6 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Heading className="sr-only" ref={selectedGame}>
        Welcomen to {titles[game]}
      </Heading>
      <ScoreContext value={[score, saveScore]}>
        <Score />
        <div
          className={`place-self-center transition-transform duration-2000 ${
            played && "played"
          }`}
        >
          {components[game]}
        </div>

        <div className="flex justify-between gap-4 uppercase">
          {[
            ["/game", "Change Game"],
            ["rules", "Rules"],
          ].map(([path, text]) => (
            <Link
              className="p-4 px-6 border-2 b-gray-600 rounded-lg"
              to={path}
              key={text}
            >
              {text}
            </Link>
          ))}
          <Outlet />
        </div>
      </ScoreContext>
    </Article>
  );
};
