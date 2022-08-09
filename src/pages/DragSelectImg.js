import DragContainer from "../components/DragContainer";
import UploadImgHeader from "../components/UploadImgHeader";
import UploadImgFooter from "../components/UploadImgFooter";
import styled from "styled-components";
import { FlexCard } from "../styled/FlexCard";
import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";
import uploadImage from "../services/uploadImage";

const SelectFileCard = styled(FlexCard)`
  width: 85%;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 25%;
  }
`;

const DragSelectFile = ({ show = true }) => {
  const { setUploading, setUploadedImg } = useContext(FileStatusContext);

  const handleSelectedFile = (selectedImg) => {
    setUploading(true);
    uploadImage(selectedImg).then((res) =>
      setTimeout(() => {
        setUploadedImg(res);
        setUploading(false);
      }, 2000)
    );
  };

  return (
    <>
      {show ? (
        <SelectFileCard>
          <UploadImgHeader />
          <DragContainer handleSelectedFile={handleSelectedFile} />
          <UploadImgFooter handleSelectedFile={handleSelectedFile} />
        </SelectFileCard>
      ) : null}
    </>
  );
};

export default DragSelectFile;
