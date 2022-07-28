import styled from "styled-components";
import { font } from "../utils/css_vars";

const StyledDiv = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  margin-top: 20px;
  position: relative;
  display: inline-block;

  ::before {
    border-radius: 5px;
    cursor: pointer;
    background-color: #1363df;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "Choose a File";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-family: ${font};
    font-weight: 500;
  }
`;
const StyledInput = styled.input`
  opacity: 0;
  width: 125px;
  height: 32px;
  display: inline-block;
`;
const P = styled.p`
  color: #dddddd;
  font-family: ${font};
`;

const ChooseFileButton = ({ textButton }) => {
  return (
    <StyledDiv>
      <P>Or</P>
      <Button>
        <StyledInput type="file" name="src-file" aria-label="Archivo" />
      </Button>
    </StyledDiv>
  );
};

export default ChooseFileButton;
