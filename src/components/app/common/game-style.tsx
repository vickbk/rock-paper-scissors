import { Link } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { CustomDetails } from "../../shared/CustomDetails";

export const GameStyle = () => {
  return (
    <Article>
      <Heading>Choose your game style</Heading>
      <div>
        <Link to={"/game/default"}>
          <img src="/assets/images/image-rules.svg" alt="" />
          Default mode
        </Link>
        <Link to={"/game/advanced"}>
          <img src="/assets/images/image-rules-bonus.svg" alt="" />
          Advanced mode
        </Link>
      </div>
      <CustomDetails>
        <summary>Learn more</summary>
        {[
          ["Default Mode", "Rock Papper Scissors"],
          ["Advanced mode", "Rock Papper Scissors lizard spock"],
        ].map(([title, description]) => (
          <Article key={title}>
            <Heading>{title}</Heading>
            <p>{description}</p>
          </Article>
        ))}
      </CustomDetails>
    </Article>
  );
};
