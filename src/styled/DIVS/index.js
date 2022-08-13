import styled from "styled-components";
import { cardBackground, colorBlue, font } from "../../utils/css_vars";

export const FlexColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  height: 219px;
  width: 338px;
  border-radius: 10px;
  margin: 15px 0px;
`;

export const StaticBar = styled.div`
  height: 5px;
  width: 400px;
  background-color: #f6f6f6;
  border-radius: 5px;
  overflow: hidden;
`;

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

export const Main = styled(FlexColumnDiv)`
  height: 100vh;
  background-color: #f2f2f2;
`;

export const FlexCard = styled(FlexColumnDiv)`
  width: 402px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgray;
  background-color: ${cardBackground};
`;

export const UploadingCard = styled(FlexCard)`
  padding: 30px 20px;
`;

export const DragArea = styled(FlexColumnDiv)`
  height: 219px;
  width: 338px;
  margin: 15px 0px;
  border: 3px dashed #a2dbfa66;
  border-radius: 10px;
  background-color: #e1e5ea80;
  position: relative;
`;

export const ImgContainer = styled(StyledDiv)``;

export const CardHeader = styled(FlexColumnDiv)`
  margin: 40px 0px 15px 0px;
`;

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
