import { getStepAngle } from "../../../libs/angles-helper";
import { GameChoice } from "./game-choice";

export const GameOptions = ({
  choices,
  children,
  start,
}: {
  choices: React.ReactNode[][];
  children: React.ReactNode;
  start: number;
}) => {
  const STEP = getStepAngle(choices.length);
  return (
    <div className="relative rounded-full aspect-square m-16">
      <ul className="z-10 isolate">
        {choices.map(([ICON], key) => (
          <GameChoice angle={start + STEP * key} key={key}>
            {ICON}
          </GameChoice>
        ))}
      </ul>

      <div className="-z-10">{children}</div>
    </div>
  );
};
