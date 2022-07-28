import styled from "styled-components";
import { colorBlue } from "../utils/css_vars";

const StaticBar = styled.div`
  height: 5px;
  width: 400px;
  background-color: #f6f6f6;
  border-radius: 5px;
  overflow: hidden;
`;

const MotionBar = styled.div`
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
const ProgressBar = () => {
  return (
    <StaticBar>
      <MotionBar />
    </StaticBar>
  );
};

export default ProgressBar;
