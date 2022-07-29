import { createContext, useState } from "react";

const FileStatusContext = createContext();

export const StatusContextProvider = ({ children }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const data = {
    uploading,
    setUploading,
    selectedFile,
    setSelectedFile,
  };

  return (
    <FileStatusContext.Provider value={data}>
      {children}
    </FileStatusContext.Provider>
  );
};

export default FileStatusContext;
