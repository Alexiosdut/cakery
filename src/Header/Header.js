import React from "react";
import NavBar from "../NavBar/NavBar";

import { InfoBox, BrandName } from "./headerStyle";

function Header() {
  return (
    <header>
      <InfoBox>
        <p>The best place to eat a cake!</p>
        <p>123-456-789</p>
      </InfoBox>
      <BrandName>
        <h1>Cakery</h1>
        <span>Restaurant</span>
      </BrandName>
      <NavBar />
    </header>
  );
}

export default Header;
