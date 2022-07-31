import styled from "styled-components";
import { font } from "../utils/css_vars";

const P = styled.p`
  margin-top: 20px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: #413f42;
  font-family: ${font};
`;

const Description = ({ children }) => {
  return <P>{children}</P>;
};

export default Description;
