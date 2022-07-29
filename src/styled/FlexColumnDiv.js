import styled from "styled-components";
import { cardBackground } from "../utils/css_vars";

export const FlexColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
  background-color: ${cardBackground};
`;
