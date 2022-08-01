import { useEffect, useRef } from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { font } from "../utils/css_vars";
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
const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 5px;
  color: #cfd2cf;
  font-family: ${font};
  top: 75%;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;
const BackImgContainer = styled(FlexColumnDiv)`
  width: 100%;
  height: 100%;
`;
const DragContainer = () => {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("dragenter", () => {
      divRef.current.style.backgroundColor = "black";
    });
    inputRef.current.addEventListener("dragleave", () => {
      divRef.current.style.backgroundColor = "white";
    });
  }, []);

  return (
    <StyledDiv ref={divRef}>
      <BackImgContainer>
        <BackgroundImage />
        <P>Drag and Drop your image here</P>
      </BackImgContainer>
      <StyledInput ref={inputRef} type="file" />
    </StyledDiv>
  );
};

export default DragContainer;
