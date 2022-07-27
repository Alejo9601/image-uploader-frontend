import DragContainer from "../components/DragContainer";
import TitleHeader from "../components/TitleHeader";
import ChooseFileButton from "../components/ChooseFileButton";
import styled from "styled-components";

const DragSection = styled.section`
  width: 85%;
  height: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
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
