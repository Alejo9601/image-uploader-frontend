import FileStatusContext from "./context/FileStatusContext";
import { useContext } from "react";
import Detail from "./components/detail";
import Upload from "./components/upload";
import Uploading from "./components/uploading";
import { Main } from "./styled/div";

function App() {
  const { uploading, uploadedImg } = useContext(FileStatusContext);

  return (
    <Main>
      {uploadedImg !== null ? (
        <Detail />
      ) : (
        <>
          <Upload show={uploading ? false : true} />
          <Uploading show={uploading ? true : false} />
        </>
      )}
    </Main>
  );
}

export default App;
