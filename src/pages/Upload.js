import DragContainer from "../components/DragContainer";
import UploadImgHeader from "../components/UploadImgHeader";
import UploadImgFooter from "../components/UploadImgFooter";
import { FlexCard } from "../styled/div";
import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";
import uploadImage from "../services/uploadImage";
import { isImageFile } from "../utils/isImageFile";

const DragSelectFile = ({ show = true }) => {
  const { setUploading, setUploadedImg } = useContext(FileStatusContext);

  const handleSelectedFile = (selectedImg) => {
    if (isImageFile(selectedImg)) {
      setUploading(true);
      uploadImage(selectedImg).then((res) => {
        setUploadedImg(res);
        setUploading(false);
      });
    } else {
      alert("Files should be PNG, JPG... JPEG");
    }
  };

  return (
    <>
      {show ? (
        <FlexCard>
          <UploadImgHeader />
          <DragContainer handleSelectedFile={handleSelectedFile} />
          <UploadImgFooter handleSelectedFile={handleSelectedFile} />
        </FlexCard>
      ) : null}
    </>
  );
};

export default DragSelectFile;