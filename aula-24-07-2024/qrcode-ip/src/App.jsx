import IPInfo from "./components/IPInfo.jsx";
import QRCodeGenerator from "./components/QRCodeGenerator.jsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #2c2c2c;
  color: white;
`;

function App() {
  return (
    <Container>
      <QRCodeGenerator />
      <IPInfo />
    </Container>
  );
}

export default App;
