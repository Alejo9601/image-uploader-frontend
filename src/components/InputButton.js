import { useRef } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { StyledInput } from "../styled/StyledInput";
import { colorBlue, font } from "../utils/css_vars";

const Button = styled(FlexColumnDiv)`
  width: fit-content;
  background-color: ${colorBlue};
  position: relative;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;

  ::before {
    color: white;
    font-family: ${font};
    content: "Choose a File";
    padding: 2px 5px;
  }
`;

const InputButton = ({ handleSelectedFile }) => {
  const inputRef = useRef();

  const handleOnChange = () => {
    const selectedImg = inputRef.current.files[0];
    handleSelectedFile(selectedImg);
  };

  return (
    <Button>
      <StyledInput ref={inputRef} type="file" onChange={handleOnChange} />
    </Button>
  );
};

export default InputButton;
