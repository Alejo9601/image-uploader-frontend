import styled from "styled-components";

const StyledDiv = styled.div`
  height: 50%;
  width: 80%;
  overflow: hidden;
  border-radius: 10px;
`;
const StyledImg = styled.img`
  height: 300px;
  width: auto;
  object-fit: cover;
`;

const UploadedImage = ({ image }) => {
  return (
    <StyledDiv>
      <StyledImg
        src={require(`../assets/call-of-duty-modern-warfare-2-1200x675-1.jpg`)}
        alt="Uploaded"
      />
    </StyledDiv>
  );
};

export default UploadedImage;
