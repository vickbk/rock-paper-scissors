import { Link } from "react-router-dom";
import { Article } from "../../../shared/Article";
import { Heading } from "../../../shared/Heading";
import { SROnly } from "../../../shared/SROnly";
import { GAMES } from "../../../../libs/games-details";

export const PerGame = ({ game }: { game: "default" | "advanced" }) => {
  const { title, description, image } = GAMES[game];

  return (
    <Article className="p-8 grid gap-24 md:gap-4  justify-items-center">
      <Heading className="flex justify-between items-center font-bold text-4xl md:w-full">
        Rules <SROnly>for {title}</SROnly>
        <Link
          to={`/game/${game}`}
          className="hidden sm:block ml-auto p-4 rounded-full active-button"
        >
          <img src="/assets/images/icon-close.svg" alt={"Go back to game"} />
        </Link>
      </Heading>
      <img src={"/assets/images/" + image} alt={title} />
      <p className="sr-only">{description}</p>
      <Link
        to={`/game/${game}`}
        className="md:hidden p-4 rounded-full active-button"
      >
        <img src="/assets/images/icon-close.svg" alt={"Go back to game"} />
      </Link>
    </Article>
  );
};
