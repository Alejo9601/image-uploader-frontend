import DragContainer from "../components/DragContainer";
import TitleHeader from "../components/TitleHeader";
import ChooseFileButton from "../components/ChooseFileButton";
import styled from "styled-components";
import { FlexCard } from "../styled/FlexCard";

const SelectFileCard = styled(FlexCard)`
  width: 85%;
  height: 70%;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 30%;
  }
`;

const Drag = () => {
  return (
    <SelectFileCard>
      <TitleHeader
        textTitle="Upload your Image"
        textDescription="Files should be PNG, JPEG ..."
      />
      <DragContainer />
      <ChooseFileButton textButton="Choose a file" />
    </SelectFileCard>
  );
};

export default Drag;
