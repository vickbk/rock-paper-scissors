import { useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { useContext } from "react";
import { ScoreContext } from "../../../contexts/ScoreContext";

export const Score = () => {
  const { game } = useParams() as { game: "default" | "advanced" };
  const common = ["Rock", "Paper", "Scissors"];
  const games = {
    default: common,
    advanced: [...common, "Lizard", "Spock"],
  };
  const [score] = useContext(ScoreContext);

  return (
    <Article className="flex justify-between items-center w-full border-3 b-gray-600 rounded-lg md:rounded-2xl max-w-150 mx-auto p-4 uppercase font-semibold leading-4">
      <Heading className="sr-only">You are playing</Heading>
      <ul className="grid">
        {games[game].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Article className="p-4 px-6 rounded-lg text-center foreground c-background relative">
        <Heading className="c-blue-700">
          <SROnly>The current</SROnly> score <SROnly>is:</SROnly>
        </Heading>
        <p className="text-6xl mt-2">{score + ""}</p>
      </Article>
    </Article>
  );
};
