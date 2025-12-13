import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { GameChoice } from "./game-choice";
import { SelectedElement } from "./selected-element";

export const GaneResults = () => {
  return (
    <Article>
      <Heading className="sr-only">The results are as follow</Heading>
      <SelectedElement title="You picked">
        <GameChoice />
      </SelectedElement>
      <Article>
        <Heading className="sr-only">Spock vaporizes scissors</Heading>
        <p>You lose</p>
        <button type="button">Play again</button>
      </Article>
      <SelectedElement title="The house picked">
        <GameChoice />
      </SelectedElement>
    </Article>
  );
};
