import { useRef } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { StyledParagraph } from "../styled/StyledParagraph";
import InputButton from "./InputButton";

const StyledDiv = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
  margin: 15px 0px 40px 0px;
`;

const ChooseFileButton = ({ textButton, handleSelectedFile }) => {
  const inputRef = useRef();

  const handleOnChange = () => {
    const selectedImg = inputRef.current.files[0];
    handleSelectedFile(selectedImg);
  };

  return (
    <StyledDiv>
      <StyledParagraph>Or</StyledParagraph>
      <InputButton handleOnChange={handleOnChange} />
    </StyledDiv>
  );
};

export default ChooseFileButton;
