import { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";

const Container = styled.div`
  background: #2c2c2c;
  color: white;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 800;
`;

const Input = styled.input`
  outline-style: none;
  border: none;
`;

const QRContainer = styled.div`
  height: 300px;
  width: 300px;
  text-align: center;
`;

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  return (
    <Container>
      <Title>QR Code Generator</Title>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <QRContainer>
          <QRCode value={text} size={156} />
        </QRContainer>
      )}
    </Container>
  );
};

export default QRCodeGenerator;
