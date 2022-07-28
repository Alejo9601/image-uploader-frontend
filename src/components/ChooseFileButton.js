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
const P = styled.p`
  color: #dddddd;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ChooseFileButton = ({ textButton }) => {
  return (
    <StyledDiv>
      <P>Or</P>
      <Button type="button">{textButton}</Button>
    </StyledDiv>
  );
};

export default ChooseFileButton;
