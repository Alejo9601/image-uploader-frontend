import DragContainer from "../components/DragContainer";
import TitleHeader from "../components/TitleHeader";
import ChooseFileButton from "../components/ChooseFileButton";
import styled from "styled-components";
import { cardBackground } from "../utils/css_vars";

const DragSection = styled.section`
  width: 85%;
  height: 70%;
  background-color: ${cardBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 30%;
  }
`;

const Drag = () => {
  return (
    <DragSection>
      <TitleHeader
        textTitle="Upload your Image"
        textDescription="Files should be PNG, JPEG ..."
      />
      <DragContainer />
      <ChooseFileButton textButton="Choose a file" />
    </DragSection>
  );
};

export default Drag;
