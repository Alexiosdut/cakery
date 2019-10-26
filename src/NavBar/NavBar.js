import React from "react";
import { NavBarStyle } from "./navBarStyle";

function NavBar() {
  return (
    <NavBarStyle>
      <ul>
        <li>
          <button>WELCOME</button>
        </li>
        <li>
          <button>ABOUT US</button>
        </li>
        <li>
          <button>MENU</button>
        </li>
        <li>
          <button>GALLERY</button>
        </li>
        <li>
          <button>TESTIMONIALS</button>
        </li>
      </ul>
    </NavBarStyle>
  );
}

export default NavBar;
