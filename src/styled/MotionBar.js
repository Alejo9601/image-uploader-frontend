import styled from "styled-components";
import { colorBlue } from "../utils/css_vars";

export const MotionBar = styled.div`
  width: 100px;
  height: 100%;
  background-color: ${colorBlue};
  border-radius: 5px;
  animation: load 2s linear infinite;

  @keyframes load {
    from {
      transform: translate(0px, 0px);
    }

    to {
      transform: translate(400px, 0px);
    }
  }
`;
