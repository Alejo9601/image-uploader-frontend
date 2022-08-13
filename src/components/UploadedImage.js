import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";
import { FullFitImage } from "../styled/FullFitImage";
import { ImgContainer } from "../styled/ImgContainer";

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
