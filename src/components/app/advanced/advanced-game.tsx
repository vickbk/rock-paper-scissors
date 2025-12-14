import { GameOptions } from "../common/game-options";
import { IconLizard } from "../common/icons/icon-lizard";
import { IconPaper } from "../common/icons/icon-paper";
import { IconRock } from "../common/icons/icon-rock";
import { IconScissors } from "../common/icons/icon-scissors";
import { IconSpock } from "../common/icons/icon-spock";

export const AdvancedGame = () => {
  const CHOICES = [
    [<IconScissors title="Scissors" />],
    [<IconSpock title="Spock" />],
    [<IconLizard title="Lizard" />],
    [<IconRock title="Rock" />],
    [<IconPaper title="Paper" />],
  ];
  return (
    <GameOptions choices={CHOICES} start={90}>
      <img src="/assets/images/bg-pentagon.svg" alt="" />
    </GameOptions>
  );
};
