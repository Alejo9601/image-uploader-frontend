import { createContext, useState } from "react";

const FileStatusContext = createContext();

export const StatusContextProvider = ({ children }) => {
  const [uploading, setUploading] = useState(false);

  const data = {
    uploading,
    setUploading,
  };

  return (
    <FileStatusContext.Provider value={data}>
      {children}
    </FileStatusContext.Provider>
  );
};

export default FileStatusContext;
