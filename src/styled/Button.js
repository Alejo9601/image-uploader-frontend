import styled from "styled-components";
import { colorBlue, font } from "../utils/css_vars";
import { FlexColumnDiv } from "./FlexColumnDiv";

export const Button = styled(FlexColumnDiv)`
  width: fit-content;
  background-color: ${colorBlue};
  position: relative;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;

  ::before {
    color: white;
    font-size: 12px;
    font-family: ${font};
    content: "Choose a File";
    padding: 2px 5px;
  }
`;
