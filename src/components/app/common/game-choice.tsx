import { IconRock } from "./icons/icon-rock";

export const GameChoice = () => {
  return (
    <li>
      <button
        type="button"
        className="border-16 rounded-full p-6 foreground c-background border-amber-300"
      >
        <IconRock />
      </button>
    </li>
  );
};
