import styled from "styled-components";
import Detail from "./pages/Detail";
import Drag from "./pages/Drag";
import Uploading from "./pages/Uploading";
import UploadContext, { UploadContextProvider } from "./context/UploadContext";
import { useContext } from "react";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function App() {
  const { loading } = useContext(UploadContext);

  return (
    <StyledMain>{loading === true ? <Uploading /> : <Drag></Drag>}</StyledMain>
  );
}

export default App;
