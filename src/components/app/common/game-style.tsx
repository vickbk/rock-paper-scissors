import { Link } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { CustomDetails } from "../../shared/CustomDetails";
import { GAMES } from "../../../libs/games-details";

export const GameStyle = () => {
  const games = [GAMES.default, GAMES.advanced];
  return (
    <Article className="text-center grid gap-4 p-4 grid-rows-[auto_1fr_auto] min-h-screen">
      <Heading className="uppercase font-semibold text-2xl">
        Choose your game style
      </Heading>
      <div className="grid gap-4 md:grid-cols-2 place-items-center">
        {games.map(({ type: name, image, description, title: alt }) => (
          <div key={name}>
            <Link className="grid gap-4" to={`/game/${name}`}>
              <img src={"/assets/images/" + image} alt={alt} />
              <span className="capitalize p-4 outline justify-self-center rounded-lg active-button">
                {name} mode
              </span>
            </Link>
            <p className="sr-only">{description}</p>
          </div>
        ))}
      </div>
      <CustomDetails className="justify-self-center">
        <summary className="cursor-pointer p-4 outline rounded-lg">
          Learn more
        </summary>
        <div className="p-4 grid gap-8">
          {games.map(({ type: name, description, title }) => (
            <Article key={title} className="grid gap-4">
              <Heading className="text-xl font-semibold">{`${title} (${name})`}</Heading>

              <ul>
                {description.split(", ").map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </Article>
          ))}
        </div>
      </CustomDetails>
    </Article>
  );
};
