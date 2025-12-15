import { useState } from "react";
import type {
  AdvancedOptions,
  DefaultOptions,
  GameChoices,
} from "../../../libs/types/game-types";
import { GameOptions } from "../common/game-options";
import { IconPaper } from "../common/icons/icon-paper";
import { IconRock } from "../common/icons/icon-rock";
import { IconScissors } from "../common/icons/icon-scissors";
import { GameResults } from "../common/game-results";

export const DefaultGame = ({ setPlayed }: { setPlayed: () => void }) => {
  const CHOICES: GameChoices = [
    [<IconScissors title="Scissors" />, "scissors"],
    [<IconRock title="Rock" />, "rock"],
    [<IconPaper title="Paper" />, "paper"],
  ];
  const [choice, setChoice] = useState<null | DefaultOptions>(null);
  const onPlay = (choice: DefaultOptions | null) => {
    setPlayed();
    setTimeout(() => setChoice(choice), 2000);
  };
  return (
    <>
      <title>Play | Rock Paper Scrissors</title>
      {!choice && (
        <GameOptions
          choices={CHOICES}
          start={270}
          setChoice={onPlay as (option: AdvancedOptions) => void}
        >
          <img
            className="translate-y-1/5 relative -z-10"
            src="/assets/images/bg-triangle.svg"
            alt=""
          />
        </GameOptions>
      )}
      {choice && <GameResults choice={choice} setChoice={onPlay} />}
    </>
  );
};
