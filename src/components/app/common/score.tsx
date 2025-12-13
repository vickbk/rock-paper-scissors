import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";

export const Score = () => {
  return (
    <Article>
      <Heading className="sr-only">The game score</Heading>
      <ul>
        {["Rock", "Paper", "scissors", "lizard", "spock"].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Article>
        <Heading>
          <SROnly>The current</SROnly> score <SROnly>is:</SROnly>
        </Heading>
        <p>12</p>
      </Article>
    </Article>
  );
};
