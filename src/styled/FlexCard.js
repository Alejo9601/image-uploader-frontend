import styled from "styled-components";
import { cardBackground } from "../utils/css_vars";
import { FlexColumnDiv } from "./FlexColumnDiv";

export const FlexCard = styled(FlexColumnDiv)`
  width: 85%;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 30%;
  }

  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
  background-color: ${cardBackground};
`;
