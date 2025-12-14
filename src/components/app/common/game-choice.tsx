import { degToRad } from "../../../libs/angles-conversion";
import { IconRock } from "./icons/icon-rock";

export const GameChoice = () => {
  const angle = degToRad(18);
  const transX = (Math.round(Math.cos(angle) * 100) + 100) / 2;
  const transY = (100 - Math.round(Math.sin(angle) * 100)) / 2;
  console.log({ transX, transY, angle });
  return (
    <li
      className={`absolute size-1 choice outline`}
      data-left={`${transX}%`}
      data-top={`${transY}%`}
      style={
        {
          "--transX": `${transX}%`,
          "--transY": `${transY}%`,
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        className="border-16 rounded-full p-6 foreground c-background border-amber-300 m-auto -translate-1/2 "
      >
        <IconRock />
      </button>
    </li>
  );
};
