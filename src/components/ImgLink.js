import styled from "styled-components";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
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
  justify-content: space-between;
  padding: 1px;
  border: 1px solid lightgray;
`;
const Plink = styled.p`
  width: 70%;
  padding-left: 10px;
  overflow: hidden;
  font-family: ${font};
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CopyButton = styled.button`
  width: 25%;
  height: 100%;
  border-radius: 10px;
  background-color: ${colorBlue};
  color: white;
  font-family: ${font};
  border: 0px;
  padding: 0px 10px;
  font-weight: 500;
  cursor: pointer;
`;

const ImgLink = () => {
  const { copied, link, copyLinkToClipboard } = useCopyToClipboard();

  return (
    <Wrapper>
      <LinkContainer>
        <Plink>{link}</Plink>
        <CopyButton onClick={copyLinkToClipboard}>
          {copied ? "Copied" : "Copy Link"}
        </CopyButton>
      </LinkContainer>
    </Wrapper>
  );
};

export default ImgLink;
