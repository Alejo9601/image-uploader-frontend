import { useContext } from "react";
import styled from "styled-components";
import FileStatusContext from "../context/FileStatusContext";

const StyledDiv = styled.div`
  height: 250px;
  width: 85%;
  overflow: hidden;
  border-radius: 10px;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const UploadedImage = () => {
  const { uploadedImg } = useContext(FileStatusContext);

  return (
    <StyledDiv>
      <StyledImg src={uploadedImg} alt="Uploaded" />
    </StyledDiv>
  );
};

export default UploadedImage;
