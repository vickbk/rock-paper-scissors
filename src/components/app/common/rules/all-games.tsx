import { Link } from "react-router-dom";
import { GAMES } from "../../../../libs/games-details";
import { Article } from "../../../shared/Article";
import { Heading } from "../../../shared/Heading";
import { SROnly } from "../../../shared/SROnly";
import closeIcon from "@assets/images/icon-close.svg";

export const AllGames = () => {
  const games = [GAMES.default, GAMES.advanced];

  return (
    <div className="p-4 grid gap-8">
      {games.map(({ type: name, description, title }) => (
        <Article key={title} className="grid gap-4">
          <Heading className="text-xl font-semibold uppercase">{`${title} (${name})`}</Heading>

          <ul className="font-normal">
            {description.split(", ").map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </Article>
      ))}
      <Link
        to={"/game"}
        className="justify-self-center md:justify-self-end md:row-start-1 active-button p-4 rounded-full"
      >
        <SROnly>Go back to game selection</SROnly>
        <img src={closeIcon} alt={""} />
      </Link>
    </div>
  );
};
