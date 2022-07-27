import styled from "styled-components";

const StyledDiv = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #1363df;
  color: white;
  font-size: 1.2rem;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`;

const ChooseFileButton = ({ textButton }) => {
  return (
    <StyledDiv>
      <p>OR</p>
      <Button type="button">{textButton}</Button>
    </StyledDiv>
  );
};

export default ChooseFileButton;
