import styled from "styled-components";
import { FlexColumnDiv } from "../styled/FlexColumnDiv";
import { colorBlue, font } from "../utils/css_vars";

const Wrapper = styled(FlexColumnDiv)`
  height: 25%;
  width: 100%;
  margin: 15px 0px 40px 0px;
`;
const LinkContainer = styled(FlexColumnDiv)`
  background-color: #e1e5ea80;
  border-radius: 10px;
  height: 35px;
  width: 85%;
  flex-direction: row;
  padding: 1px;
  border: 1px solid lightgray;
`;
const TextArea = styled.textarea`
  width: 75%;
  resize: none;
  background-color: transparent;
  outline: none;
  border: 0px;
`;
const CopyButton = styled.button`
  width: 25%;
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
    <Wrapper>
      <LinkContainer>
        <TextArea readOnly={true}></TextArea>
        <CopyButton>Copy Link</CopyButton>
      </LinkContainer>
    </Wrapper>
  );
};

export default ImgLink;
