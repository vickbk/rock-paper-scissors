import { Link, useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import CustomDialog from "../../shared/CustomDialog";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { GAMES } from "../../../libs/games-details";

export const Rules = () => {
  const { game } = useParams() as { game: "default" | "advanced" };
  const { title, description, image } = GAMES[game];
  return (
    <CustomDialog
      isOpen
      className="min-h-screen min-w-screen grid place-items-center"
    >
      <Article className="p-8 grid gap-24  justify-items-center">
        <Heading className="flex justify-between font-bold text-4xl">
          Rules <SROnly>for {title}</SROnly>
          <Link to={`/game/${game}`} className="hidden sm:block">
            <img src="/assets/images/icon-close.svg" alt={title} />
          </Link>
        </Heading>
        <img src={"/assets/images/" + image} alt={title} />
        <p className="sr-only">{description}</p>
        <Link to={`/game/${game}`}>
          <img src="/assets/images/icon-close.svg" alt={title} />
        </Link>
      </Article>
    </CustomDialog>
  );
};
