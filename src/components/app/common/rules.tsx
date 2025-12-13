import { Article } from "../../shared/Article";
import CustomDialog from "../../shared/CustomDialog";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";

export const Rules = () => {
  return (
    <CustomDialog isOpen>
      <Article>
        <Heading>
          Rules <SROnly>for Rock paper scissors</SROnly>
          <button type="button">
            <img
              src="/public/assets/images/icon-close.svg"
              alt="Close the rules"
            />
          </button>
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
