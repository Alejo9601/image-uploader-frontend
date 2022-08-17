import Detail from "./pages/Detail";
import FileStatusContext from "./context/FileStatusContext";
import { useContext } from "react";
import DragSelectFile from "./pages/DragSelectImg";
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
          <DragSelectFile show={uploading ? false : true} />
          <Uploading show={uploading ? true : false} />
        </>
      )}
    </Main>
  );
}

export default App;
