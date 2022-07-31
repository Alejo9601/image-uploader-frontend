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
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 5px;
  color: #cfd2cf;
  font-family: ${font};
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
