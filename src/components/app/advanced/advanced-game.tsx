import { GameChoice } from "../common/game-choice";

export const AdvancedGame = () => {
  return (
    <ul className="relative outline rounded-full aspect-square m-8">
      {Array(5)
        .fill(null)
        .map((_, key) => (
          <GameChoice key={key} />
        ))}
      <img src="/assets/images/bg-pentagon.svg" alt="" />
    </ul>
  );
};
