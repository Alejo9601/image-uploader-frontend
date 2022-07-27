import styled from "styled-components";
import Drag from "./pages/Drag";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledMain>
      <Drag />
    </StyledMain>
  );
}

export default App;
