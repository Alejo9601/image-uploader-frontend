import styled from "styled-components";
import { colorBlue } from "../utils/css_vars";

const StaticBar = styled.div`
  height: 5px;
  width: 400px;
  background-color: #f6f6f6;
  border-radius: 5px;
`;

const MotionBar = styled.div`
  width: 100px;
  height: 100%;
  background-color: ${colorBlue};
  border-radius: 5px;
`;
const ProgressBar = () => {
  return (
    <StaticBar>
      <MotionBar />
    </StaticBar>
  );
};

export default ProgressBar;
