import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import MainApp from "./components/MainApp";
import { Desktop, Mobile, Tablet } from "./components/common/Responsive";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
    /* background: #e9ecef; */
    margin: 0px;
    padding: 0px;
    font-size: 14px;
  }
  
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Desktop>
        <MainApp collapsedDefault={false} />
      </Desktop>
      <Tablet>
        <MainApp collapsedDefault={false} />
      </Tablet>
      <Mobile>
        <MainApp collapsedDefault={true} />
      </Mobile>
    </Container>
  );
}

export default App;
