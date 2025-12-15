import { useState } from "react";
import { GameOptions } from "../common/game-options";
import { IconLizard } from "../common/icons/icon-lizard";
import { IconPaper } from "../common/icons/icon-paper";
import { IconRock } from "../common/icons/icon-rock";
import { IconScissors } from "../common/icons/icon-scissors";
import { IconSpock } from "../common/icons/icon-spock";
import type {
  AdvancedOptions,
  GameChoices,
} from "../../../libs/types/game-types";
import { GameResults } from "../common/game-results";

export const AdvancedGame = ({ setPlayed }: { setPlayed: () => void }) => {
  const CHOICES: GameChoices = [
    [<IconScissors title="Scissors" />, "scissors"],
    [<IconSpock title="Spock" />, "spock"],
    [<IconLizard title="Lizard" />, "lizard"],
    [<IconRock title="Rock" />, "rock"],
    [<IconPaper title="Paper" />, "paper"],
  ];
  const [choice, setChoice] = useState<null | AdvancedOptions>(null);
  const onPlay = (choice: AdvancedOptions | null) => {
    setPlayed();
    setTimeout(() => setChoice(choice), 2000);
  };
  return (
    <>
      {!choice && (
        <div className="md:translate-y-12">
          <GameOptions choices={CHOICES} start={90} setChoice={onPlay}>
            <img src="/assets/images/bg-pentagon.svg" alt="" />
          </GameOptions>
        </div>
      )}
      {choice && <GameResults choice={choice} setChoice={onPlay} />}
    </>
  );
};
