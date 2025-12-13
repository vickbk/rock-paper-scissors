import { Link, useParams } from "react-router-dom";
import { Article } from "../../shared/Article";
import CustomDialog from "../../shared/CustomDialog";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";

export const Rules = () => {
  const { game } = useParams();
  return (
    <CustomDialog isOpen>
      <Article>
        <Heading>
          Rules <SROnly>for Rock paper scissors</SROnly>
          <Link to={`/game/${game}`}>
            <img src="/assets/images/icon-close.svg" alt="Close the rules" />
          </Link>
        </Heading>
        <img
          src="/assets/images/image-rules.svg"
          alt="Rock paper scissors rules explanations"
        />
        <p className="sr-only">
          Scissor beats paper, Paper beats Rock and Rock smashes scissors.
        </p>
      </Article>
    </CustomDialog>
  );
};
