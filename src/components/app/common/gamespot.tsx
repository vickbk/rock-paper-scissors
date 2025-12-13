import { Outlet } from "react-router-dom";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";

export const GameSpot = () => {
  return (
    <Article>
      <Heading className="sr-only">Pick your choice</Heading>

      <Outlet />
    </Article>
  );
};
