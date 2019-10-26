import React from "react";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";

import NavBar from "./NavBar/NavBar";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  height: 100vh;
  box-shadow: -2px 0px 30px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <NavBar />
      </Wrapper>
    </>
  );
}

export default App;
