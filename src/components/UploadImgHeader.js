import { CardHeader } from "../styled/DIVS";
import { P } from "../styled/P";
import { StyledH1 } from "../styled/H1";

const UploadImgHeader = () => {
  return (
    <CardHeader>
      <StyledH1>Upload your Image</StyledH1>
      <P>Files should be PNG, JPEG ...</P>
    </CardHeader>
  );
};

export default UploadImgHeader;
