import React from "react";

import NavBarItems from "./NavBarItems";

import { NavBarBoxStyle } from "./navBarStyle";

function NavBar() {
  return (
    <NavBarBoxStyle>
      <nav>
        <NavBarItems />
      </nav>
    </NavBarBoxStyle>
  );
}

export default NavBar;
