import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

const StyledDiv = styled.div`
  height: 50%;
  width: 70%;
  border: 1px dashed blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 5px;
`;

const DragContainer = () => {
  return (
    <StyledDiv>
      <BackgroundImage />
      <P>Drag and Drop your image here</P>
    </StyledDiv>
  );
};

export default DragContainer;
