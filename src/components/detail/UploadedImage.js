import { useContext } from "react";
import FileStatusContext from "../../context/FileStatusContext";
import { FullFitImage } from "../../styled/img";
import { MiddleContainer as ImgContainer } from "../../styled/div";

const UploadedImage = () => {
  const { uploadedImg } = useContext(FileStatusContext);

  return (
    <ImgContainer>
      <FullFitImage src={uploadedImg.url} alt="Uploaded" />
    </ImgContainer>
  );
};

export default UploadedImage;
