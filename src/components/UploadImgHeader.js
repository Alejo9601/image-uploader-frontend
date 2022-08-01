import { CardHeader } from "../styled/CardHeader";
import { StyledParagraph } from "../styled/StyledParagraph";
import Title from "./Title";

const UploadImgHeader = () => {
  return (
    <CardHeader>
      <Title>Upload your Image</Title>
      <StyledParagraph>Files should be PNG, JPEG ...</StyledParagraph>
    </CardHeader>
  );
};

export default UploadImgHeader;
