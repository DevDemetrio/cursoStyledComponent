import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";

const FundoGradiente = styled.div`
  background-color: green;
`;
function App() {
  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <h1>Teste</h1>
      </FundoGradiente>
    </>
  );
}

export default App;
