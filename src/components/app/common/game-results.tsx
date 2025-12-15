import { useParams } from "react-router-dom";
import { getComputerChoice, getWinner } from "../../../libs/games-details";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { IconLizard } from "./icons/icon-lizard";
import { OptionElement } from "./option-element";
import { SelectedElement } from "./selected-element";
import type { AdvancedOptions } from "../../../libs/types/game-types";
import { IconRock } from "./icons/icon-rock";
import { IconPaper } from "./icons/icon-paper";
import { IconScissors } from "./icons/icon-scissors";
import { IconSpock } from "./icons/icon-spock";

export const GameResults = ({
  setChoice,
  choice,
}: {
  setChoice: (choice: null) => void;
  choice: AdvancedOptions;
}) => {
  const icons: Record<AdvancedOptions, React.ReactNode> = {
    rock: <IconRock />,
    paper: <IconPaper />,
    scissors: <IconScissors />,
    lizard: <IconLizard />,
    spock: <IconSpock />,
  };
  const { game } = useParams() as { game: "default" | "advanced" };
  const computerChoice = getComputerChoice(game);
  const { message, details } = getWinner({ choice, computerChoice });
  return (
    <Article className="grid grid-cols-2 md:grid-cols-3 md:gap-8 w-full text-center uppercase">
      <Heading className="sr-only">The results are as follow</Heading>
      <SelectedElement title="You picked">
        <div>
          <OptionElement>{icons[choice]}</OptionElement>
        </div>
      </SelectedElement>
      <Article className="col-start-1 col-span-full row-start-2 mt-16 md:col-start-2 md:row-start-1 md:col-span-1 md:mt-0">
        <Heading className="sr-only">{details}</Heading>
        <p className="text-5xl font-bold">{message}</p>
        <button
          onClick={() => setChoice(null)}
          type="button"
          className="foreground c-background p-4 px-16 rounded-lg uppercase font-semibold mt-8"
        >
          Play again
        </button>
      </Article>
      <SelectedElement title="The house picked">
        <div>
          <OptionElement>{icons[computerChoice]}</OptionElement>
        </div>
      </SelectedElement>
    </Article>
  );
};
