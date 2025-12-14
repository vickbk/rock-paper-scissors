import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { IconLizard } from "./icons/icon-lizard";
import { OptionElement } from "./option-element";
import { SelectedElement } from "./selected-element";

export const GameResults = () => {
  return (
    <Article className="grid grid-cols-2 md:grid-cols-3 md:gap-8 w-full text-center uppercase">
      <Heading className="sr-only">The results are as follow</Heading>
      <SelectedElement title="You picked">
        <div>
          <OptionElement>
            <IconLizard />
          </OptionElement>
        </div>
      </SelectedElement>
      <Article className="col-start-1 col-span-full row-start-2 mt-16 md:col-start-2 md:row-start-1 md:col-span-1 md:mt-0">
        <Heading className="sr-only">Spock vaporizes scissors</Heading>
        <p className="text-5xl font-bold">You lose</p>
        <button
          type="button"
          className="foreground c-background p-4 px-16 rounded-lg uppercase font-semibold mt-8"
        >
          Play again
        </button>
      </Article>
      <SelectedElement title="The house picked">
        <div>
          <OptionElement>
            <IconLizard />
          </OptionElement>
        </div>
      </SelectedElement>
    </Article>
  );
};
