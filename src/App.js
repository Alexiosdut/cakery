import React from "react";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";

import Header from "./Header/Header";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100vh;
  box-shadow: -2px 0px 30px rgba(0, 0, 0, 0.2);
  padding-top: 1px;
  margin-top: -1px;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
}

export default App;
