import { createContext, useState } from "react";

const UploadContext = createContext();

const UploadContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const data = {
    loading,
    setLoading,
  };

  return (
    <UploadContext.Provider value={data}>{children}</UploadContext.Provider>
  );
};

export { UploadContextProvider };
export default UploadContext;
