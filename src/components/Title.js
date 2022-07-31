import styled from "styled-components";
import { font } from "../utils/css_vars";

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: #413f42;
  font-family: ${font};
`;

const Title = ({ children }) => {
  return <H1>{children}</H1>;
};

export default Title;
