import DragContainer from "../components/DragContainer";
import TitleHeader from "../components/TitleHeader";
import ChooseFileButton from "../components/ChooseFileButton";
import styled from "styled-components";
import { FlexCard } from "../styled/FlexCard";
import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";

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

const DragSelectFile = ({ show = true }) => {
  const { setUploading, setSelectedFile } = useContext(FileStatusContext);

  const handleSelectedFile = (selectedImg) => {
    setUploading(true);
    setTimeout(() => {
      setSelectedFile(selectedImg);
    }, 2000);
  };

  return (
    <>
      {show ? (
        <SelectFileCard>
          <TitleHeader
            textTitle="Upload your Image"
            textDescription="Files should be PNG, JPEG ..."
          />
          <DragContainer />
          <ChooseFileButton
            handleSelectedFile={handleSelectedFile}
            textButton="Choose a file"
          />
        </SelectFileCard>
      ) : null}
    </>
  );
};

export default DragSelectFile;
