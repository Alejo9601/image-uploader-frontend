import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { colorBlue, font } from "../utils/css_vars";

const StyledDiv = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
`;
const LinkContainer = styled(FlexColumnDiv)`
  background-color: #e1e5ea80;
  border-radius: 10px;
  width: 80%;
  flex-direction: row;
  padding: 1px;
  border: 1px solid lightgray;
`;
const TextArea = styled.textarea`
  width: 80%;
  resize: none;
  background-color: transparent;
  outline: none;
  border: 0px;
`;
const CopyButton = styled.button`
  width: 20%;
  height: 100%;
  border-radius: 10px;
  background-color: ${colorBlue};
  color: white;
  font-family: ${font};
  border: 0px;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const ImgLink = () => {
  return (
    <StyledDiv>
      <LinkContainer>
        <TextArea readOnly={true}></TextArea>
        <CopyButton>Copy Link</CopyButton>
      </LinkContainer>
    </StyledDiv>
  );
};

export default ImgLink;
