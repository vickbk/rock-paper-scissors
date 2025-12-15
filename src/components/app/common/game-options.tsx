import { getStepAngle } from "../../../libs/angles-helper";
import type {
  AdvancedOptions,
  GameChoices,
} from "../../../libs/types/game-types";
import { GameChoice } from "./game-choice";

export const GameOptions = ({
  choices,
  children,
  start,
  setChoice,
}: {
  choices: GameChoices;
  children: React.ReactNode;
  start: number;
  setChoice: (choice: AdvancedOptions) => void;
}) => {
  const STEP = getStepAngle(choices.length);
  return (
    <div className="relative rounded-full aspect-square m-16 sm:m-0">
      <ul className="z-10 isolate">
        {choices.map(([ICON, choice], key) => (
          <GameChoice angle={start + STEP * key} key={key}>
            <button
              onClick={() => setChoice(choice)}
              type="button"
              className=" absolute -translate-1/2 active-button rounded-full"
            >
              {ICON}
            </button>
          </GameChoice>
        ))}
      </ul>

      <div className="-z-10">{children}</div>
    </div>
  );
};
