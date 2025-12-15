import { Link, Outlet } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { GAMES } from "../../../libs/games-details";
import rulesImage from "@assets/images/image-rules.svg";
import rulesAdvancedImage from "@assets/images/image-rules-bonus.svg";

export const GameStyle = () => {
  const games = [GAMES.default, GAMES.advanced];
  const images = {
    "image-rules.svg": rulesImage,
    "image-rules-bonus.svg": rulesAdvancedImage,
  };
  return (
    <Article className="text-center grid gap-4 p-4 grid-rows-[auto_1fr_auto] min-h-screen">
      <title>Choose | Rock Paper Scissors</title>
      <Heading className="uppercase font-semibold text-4xl">
        Choose your game style
      </Heading>
      <div className="grid gap-4 md:grid-cols-2 place-items-center">
        {games.map(({ type: name, image, description, title: alt }) => (
          <div key={name}>
            <Link className="grid gap-4" to={`/game/${name}`}>
              <img src={images[image]} alt={alt} />
              <span className="uppercase p-4 px-8 outline-2 out-gray-600 justify-self-center rounded-lg active-button font-semibold">
                {name} mode
              </span>
            </Link>
            <p className="sr-only">{description}</p>
          </div>
        ))}
      </div>
      <Link
        className="justify-self-center p-4 px-8 outline-2 active-button out-gray-600 rounded-lg uppercase font-semibold"
        to={"rules"}
      >
        Learn more
      </Link>
      <Outlet />
    </Article>
  );
};
