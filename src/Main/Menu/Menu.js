import React from "react";

import {
  BigSpanStyle,
  BigH2Style,
  SmallH3Style
} from "../../sharedStyles/sharedStyles";
import { MenuHeadingStyle } from "./menuStyle";
import MenuGrid from "./MenuGrid/MenuGrid";

function Menu() {
  return (
    <section>
      <MenuHeadingStyle>
        <BigSpanStyle>our</BigSpanStyle>
        <BigH2Style>SPECIAL MENUS</BigH2Style>
        <SmallH3Style>INDULGE YOUR SWEET TOOTH!</SmallH3Style>
      </MenuHeadingStyle>
      <MenuGrid />
    </section>
  );
}

export default Menu;
