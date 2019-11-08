import React from "react";
import { ItemStyle } from "./styles/menuItemStyle";

function MenuItem({ cake, price, description }) {
  return (
    <ItemStyle>
      <div>
        <h3>{cake}</h3>
        <div />
        <span>{price} &euro;</span>
      </div>
      <p>{description}</p>
    </ItemStyle>
  );
}

export default MenuItem;
