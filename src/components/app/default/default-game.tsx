import { GameOptions } from "../common/game-options";
import { IconPaper } from "../common/icons/icon-paper";
import { IconRock } from "../common/icons/icon-rock";
import { IconScissors } from "../common/icons/icon-scissors";

export const DefaultGame = () => {
  const CHOICES = [
    [<IconScissors title="Scissors" />],
    [<IconRock title="Rock" />],
    [<IconPaper title="Paper" />],
  ];
  return (
    <GameOptions choices={CHOICES} start={270}>
      <img
        className="translate-y-1/5 relative -z-10"
        src="/public/assets/images/bg-triangle.svg"
        alt=""
      />
    </GameOptions>
  );
};
