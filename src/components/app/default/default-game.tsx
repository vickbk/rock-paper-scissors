import { GameChoice } from "../common/game-choice";

export const DefaultGame = () => {
  return (
    <ul>
      {Array(3)
        .fill(null)
        .map((_, key) => (
          <GameChoice key={key} />
        ))}
    </ul>
  );
};
