import { CardHeader } from "../styled/CardHeader";
import { StyledParagraph } from "../styled/StyledParagraph";
import Title from "./Title";

const UploadImgHeader = ({ textTitle, textDescription }) => {
  return (
    <CardHeader>
      <Title>{textTitle}</Title>
      <StyledParagraph>{textDescription}</StyledParagraph>
    </CardHeader>
  );
};

export default UploadImgHeader;
