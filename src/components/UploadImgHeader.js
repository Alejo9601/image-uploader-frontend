import { CardHeader } from "../styled/CardHeader";
import { StyledParagraph } from "../styled/StyledParagraph";
import { StyledH1 } from "../styled/StyledH1";

const UploadImgHeader = () => {
  return (
    <CardHeader>
      <StyledH1>Upload your Image</StyledH1>
      <StyledParagraph>Files should be PNG, JPEG ...</StyledParagraph>
    </CardHeader>
  );
};

export default UploadImgHeader;
