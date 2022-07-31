import styled from "styled-components";
import Detail from "./pages/Detail";
import SelectionProcess from "./pages/SelectionProcess";
import FileStatusContext from "./context/FileStatusContext";
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
  const { uploading } = useContext(FileStatusContext);

  return (
    <StyledMain>
      <SelectionProcess />
      <Detail></Detail>
    </StyledMain>
  );
}

export default App;
