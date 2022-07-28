import styled from "styled-components";
import { font } from "../utils/css_vars";

const StyledDiv = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1,
  p {
    width: 100%;
    text-align: center;
    color: #413f42;
    font-family: ${font};
  }
`;
const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
`;
const P = styled.p`
  margin-top: 20px;
  font-weight: 600;
`;

const TitleHeader = ({ textTitle, textDescription }) => {
  return (
    <StyledDiv>
      <H1>{textTitle}</H1>
      <P>{textDescription}</P>
    </StyledDiv>
  );
};

export default TitleHeader;
