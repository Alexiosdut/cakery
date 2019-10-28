import React from "react";
import NavBar from "../NavBar/NavBar";
import { InfoBox, BrandName, PhoneIcon } from "./headerStyle";

function Header() {
  return (
    <>
      <header>
        <InfoBox>
          <p>The best place to eat a cake!</p>
          <div>
            <PhoneIcon />
            <p>123-456-789</p>
          </div>
        </InfoBox>
        <BrandName>
          <h1>Cakery</h1>
          <span>Restaurant</span>
        </BrandName>
      </header>
      <NavBar />
    </>
  );
}

export default Header;
