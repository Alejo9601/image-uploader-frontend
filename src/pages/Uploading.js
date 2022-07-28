import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import { font } from "../utils/css_vars";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
`;
const Title = styled.p`
  font-family: ${font};
  margin-bottom: 30px;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Uploading = () => {
  return (
    <StyledDiv>
      <Title>Uploading...</Title>
      <ProgressBar />
    </StyledDiv>
  );
};

export default Uploading;
