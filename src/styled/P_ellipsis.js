import styled from "styled-components";
import { font } from "../utils/css_vars";
import { StyledParagraph } from "./StyledParagraph";

export const P_ellipsis = styled(StyledParagraph)`
  width: 70%;
  margin-top: 0px;
  padding-left: 10px;
  overflow: hidden;
  font-family: ${font};
  white-space: nowrap;
  text-overflow: ellipsis;
`;
