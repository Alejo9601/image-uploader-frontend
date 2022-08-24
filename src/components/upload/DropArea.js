import { useEffect, useRef } from "react";
import { DragArea, FlexColumnDiv } from "../../styled/div";
import { StyledInput } from "../../styled/input";
import { DragDescription as P } from "../../styled/p";
import BackgroundImage from "./BackgroundImage";

const DragContainer = ({ handleSelectedFile }) => {
  const inputRef = useRef();
  const divRef = useRef();

  const handleOnChange = () => {
    const selectedImg = inputRef.current.files[0];
    handleSelectedFile(selectedImg);
  };

  useEffect(() => {
    inputRef.current.addEventListener("dragenter", () => {
      divRef.current.style.backgroundColor = "#EAF6F6";
    });
    inputRef.current.addEventListener("dragleave", () => {
      divRef.current.style.backgroundColor = "#e1e5ea80";
    });
  }, []);

  return (
    <DragArea ref={divRef}>
      <FlexColumnDiv>
        <BackgroundImage />
        <P>{`Drag & Drop your image here`}</P>
      </FlexColumnDiv>
      <StyledInput ref={inputRef} type="file" onChange={handleOnChange} />
    </DragArea>
  );
};

export default DragContainer;
