import { Link } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { CustomDetails } from "../../shared/CustomDetails";
import { GAMES } from "../../../libs/games-details";

export const GameStyle = () => {
  const games = [GAMES.default, GAMES.advanced];
  return (
    <Article className="text-center grid place-items-center gap-4 p-4">
      <Heading className="uppercase font-semibold text-2xl">
        Choose your game style
      </Heading>
      <div className="grid gap-4 justify-items-center">
        {games.map(({ type: name, image, description, title: alt }) => (
          <>
            <Link className="grid gap-4" to={`/game/${name}`} key={name}>
              <img src={"/assets/images/" + image} alt={alt} />
              <span className="capitalize p-4 outline justify-self-center rounded-lg active-button">
                {name} mode
              </span>
            </Link>
            <p className="sr-only">{description}</p>
          </>
        ))}
      </div>
      <CustomDetails>
        <summary className="cursor-pointer p-4 outline rounded-lg">
          Learn more
        </summary>
        <div className="p-4 grid gap-8">
          {games.map(({ type: name, description, title }) => (
            <Article key={title} className="grid gap-4">
              <Heading className="text-xl font-semibold">{`${title} (${name})`}</Heading>
              <p>{description}</p>
            </Article>
          ))}
        </div>
      </CustomDetails>
    </Article>
  );
};
