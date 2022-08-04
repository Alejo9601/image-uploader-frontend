import { useContext } from "react";
import styled from "styled-components";
import FileStatusContext from "../context/FileStatusContext";

const StyledDiv = styled.div`
  height: 250px;
  width: 85%;
  overflow: hidden;
  border-radius: 10px;
  margin: 15px 0px;
`;
const StyledImg = styled.img`
  height: 250px;
  width: auto;
  object-fit: cover;
`;

const UploadedImage = () => {
  const { selectedFile } = useContext(FileStatusContext);

  return (
    <StyledDiv>
      <StyledImg
        src={`https://img-upload-back.herokuapp.com/${selectedFile.filename}`}
        alt="Uploaded"
      />
    </StyledDiv>
  );
};

export default UploadedImage;
