import { useContext, useState } from "react";
import FileStatusContext from "../context/FileStatusContext";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const { selectedFile } = useContext(FileStatusContext);

  const link = `https://img-upload-back.herokuapp.com/${selectedFile.filename}`;

  const copyLinkToClipboard = () => {
    let TempText = document.createElement("input");
    TempText.value = link;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);

    setCopied(true);
  };

  return { copied, link, copyLinkToClipboard };
};

export default useCopyToClipboard;
