import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";
import { FullFitImage } from "../styled/img";
import { MiddleContainer as ImgContainer } from "../styled/div";

const UploadedImage = () => {
  const { uploadedImg } = useContext(FileStatusContext);

  return (
    <ImgContainer>
      <FullFitImage
        src={`https://img-upload-back.herokuapp.com/${uploadedImg.name}`}
        alt="Uploaded"
      />
    </ImgContainer>
  );
};

export default UploadedImage;
