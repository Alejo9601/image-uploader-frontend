import FileStatusContext from "./context/FileStatusContext";
import { useContext } from "react";
import Detail from "./pages/Detail";
import Upload from "./pages/Upload";
import Uploading from "./pages/Uploading";
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
