import { useContext, useEffect } from "react";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { ScoreContext } from "../../../contexts/ScoreContext";

export const ResultsManager = ({
  children,
  ...results
}: {
  children: React.ReactNode;
  message: string;
  details: string;
  add: number;
}) => {
  const { message, details, add } = results;
  const [score, saveScore] = useContext(ScoreContext);
  const newScore = score + add > 0 ? score + add : 0;

  useEffect(() => {
    saveScore(newScore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Article className="col-start-1 col-span-full row-start-2 mt-16 md:col-start-2 md:row-start-1 md:col-span-1 md:mt-0 z-10">
      <Heading className="sr-only">{details}</Heading>
      <p className="text-5xl font-bold">{message}</p>
      {children}
    </Article>
  );
};
