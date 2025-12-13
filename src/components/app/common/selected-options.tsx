import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { GameChoice } from "./game-choice";
import { SelectedElement } from "./selected-element";

export const SelectedOptions = () => {
  return (
    <Article>
      <Heading className="sr-only">Selected choices</Heading>
      {[["You picked"], ["The house picked"]].map(([title]) => (
        <SelectedElement key={title} title={title}>
          <GameChoice />
        </SelectedElement>
      ))}
    </Article>
  );
};
