import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { font } from "../utils/css_vars";

const StyledDiv = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
  margin: 40px 0px 15px 0px;

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
