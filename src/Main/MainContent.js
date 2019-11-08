import React from "react";

import FounderIntroduction from "./FounderIntroduction/FounderIntroduction";
import About from "./About/About";
import Menu from "./Menu/Menu";

function MainContent() {
  return (
    <>
      <FounderIntroduction />
      <About />
      <Menu />
    </>
  );
}

export default MainContent;
