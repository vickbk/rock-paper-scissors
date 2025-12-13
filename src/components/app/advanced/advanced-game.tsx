import { GameChoice } from "../common/game-choice";

export const AdvancedGame = () => {
  return (
    <ul>
      {Array(5)
        .fill(null)
        .map((_, key) => (
          <GameChoice key={key} />
        ))}
    </ul>
  );
};
