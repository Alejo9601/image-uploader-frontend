import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { P_ellipsis as P } from "../../styled/p";
import { CopyButton } from "../../styled/button";
import { LinkContainer } from "../../styled/div";

const ImgLink = () => {
  const { copied, link, copyLinkToClipboard } = useCopyToClipboard();

  return (
    <div>
      <LinkContainer>
        <P>{link}</P>
        <CopyButton onClick={copyLinkToClipboard}>
          {copied ? "Copied" : "Copy Link"}
        </CopyButton>
      </LinkContainer>
    </div>
  );
};

export default ImgLink;
