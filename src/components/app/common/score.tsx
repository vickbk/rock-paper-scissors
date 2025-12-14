import { useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";

export const Score = () => {
  const { game } = useParams() as { game: "default" | "advanced" };
  const common = ["Rock", "Paper", "Scissors"];
  const games = {
    default: common,
    advanced: [...common, "Lizard", "Spock"],
  };
  return (
    <Article className="flex justify-between items-center w-full border-3 rounded-lg p-4 uppercase font-semibold leading-4">
      <Heading className="sr-only">You are playing</Heading>
      <ul className="grid">
        {games[game].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Article className="p-4 px-6 rounded-lg text-center foreground c-background">
        <Heading>
          <SROnly>The current</SROnly> score <SROnly>is:</SROnly>
        </Heading>
        <p className="text-6xl mt-2">12</p>
      </Article>
    </Article>
  );
};
