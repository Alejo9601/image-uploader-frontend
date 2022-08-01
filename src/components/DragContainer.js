import { useEffect, useRef } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { StyledParagraph } from "../styled/StyledParagraph";
import BackgroundImage from "./BackgroundImage";

const StyledDiv = styled(FlexColumnDiv)`
  height: 250px;
  width: 85%;
  margin: 15px 0px;
  border: 3px dashed #a2dbfa66;
  border-radius: 10px;
  background-color: #e1e5ea80;
  position: relative;
`;
const GuideParagraph = styled(StyledParagraph)`
  color: #cfd2cf;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;

const DragContainer = ({ handleSelectedFile }) => {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("dragenter", () => {
      divRef.current.style.backgroundColor = "#EAF6F6";
    });
    inputRef.current.addEventListener("dragleave", () => {
      divRef.current.style.backgroundColor = "#e1e5ea80";
    });
  }, []);

  return (
    <StyledDiv ref={divRef}>
      <FlexColumnDiv>
        <BackgroundImage />
        <GuideParagraph>{`Drag & Drop your image here`}</GuideParagraph>
      </FlexColumnDiv>
      <StyledInput
        ref={inputRef}
        type="file"
        onChange={() => handleSelectedFile()}
      />
    </StyledDiv>
  );
};

export default DragContainer;
