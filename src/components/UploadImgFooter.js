import styled from "styled-components";
import { FlexColumnDiv } from "../styled/DIVS";
import { P_12px as P } from "../styled/P";
import InputButton from "./InputButton";

const StyledDiv = styled(FlexColumnDiv)`
  margin: 0px 0px 40px 0px;
`;

const UploadImgFooter = ({ handleSelectedFile }) => {
  return (
    <StyledDiv>
      <P>Or</P>
      <InputButton handleSelectedFile={handleSelectedFile} />
    </StyledDiv>
  );
};

export default UploadImgFooter;
