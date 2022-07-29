import styled from "styled-components";
import { cardBackground } from "../utils/css_vars";
import { FlexColumnDiv } from "./FlexColumnDiv";

export const FlexCard = styled(FlexColumnDiv)`
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
  background-color: ${cardBackground};
`;
