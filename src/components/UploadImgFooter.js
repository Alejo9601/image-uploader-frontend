import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { StyledParagraph } from "../styled/StyledParagraph";
import InputButton from "./InputButton";

const StyledDiv = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
  margin: 15px 0px 40px 0px;
`;

const UploadImgFooter = ({ handleSelectedFile }) => {
  return (
    <StyledDiv>
      <StyledParagraph>Or</StyledParagraph>
      <InputButton handleSelectedFile={handleSelectedFile} />
    </StyledDiv>
  );
};

export default UploadImgFooter;
