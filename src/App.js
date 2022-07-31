import styled from "styled-components";
import Detail from "./pages/Detail";
import FileStatusContext from "./context/FileStatusContext";
import { useContext } from "react";
import DragSelectFile from "./pages/DragSelectImg";
import Uploading from "./pages/Uploading";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

function App() {
  const { uploading, selectedFile } = useContext(FileStatusContext);

  return (
    <StyledMain>
      {selectedFile !== null ? (
        <Detail />
      ) : (
        <>
          <DragSelectFile show={uploading ? false : true} />
          <Uploading show={uploading ? true : false} />
        </>
      )}
    </StyledMain>
  );
}

export default App;
