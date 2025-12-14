import { degToRad } from "../../../libs/angles-helper";

export const GameChoice = ({
  angle,
  children,
}: {
  angle: number;
  children: React.ReactNode;
}) => {
  const transX = (Math.round(Math.cos(degToRad(angle)) * 100) + 100) / 2;
  const transY = (100 - Math.round(Math.sin(degToRad(angle)) * 100)) / 2;
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
      {children}
    </li>
  );
};
