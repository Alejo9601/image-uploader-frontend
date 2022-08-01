import { useRef } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { StyledParagraph } from "../styled/StyledParagraph";
import { font } from "../utils/css_vars";

const StyledDiv = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
  margin: 15px 0px 40px 0px;
`;
const Button = styled.div`
  margin-top: 20px;
  position: relative;
  display: inline-block;

  ::before {
    border-radius: 5px;
    background-color: #1363df;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-family: ${font};
    font-weight: 500;
    cursor: pointer;
    content: "Choose a File";
  }
`;
const StyledInput = styled.input`
  opacity: 0;
  width: 125px;
  height: 32px;
  display: inline-block;
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
      <Button>
        <StyledInput
          ref={inputRef}
          onChange={handleOnChange}
          type="file"
          name="src-file"
          aria-label="Archivo"
        />
      </Button>
    </StyledDiv>
  );
};

export default ChooseFileButton;
