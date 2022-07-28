import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

const StyledDiv = styled.div`
  height: 50%;
  width: 80%;
  border: 3px dashed #a2dbfa66;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e1e5ea80;
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 5px;
  color: #cfd2cf;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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