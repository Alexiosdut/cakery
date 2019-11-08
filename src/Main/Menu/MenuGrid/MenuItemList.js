import React from "react";

import MenuItem from "./MenuItem";

import { cakes } from "../../../data/cakes";
import { MenuItemsBoxStyle } from "./styles/menuItemListStyles";

function MenuItemList({ currentCategory }) {
  const filteredCakes = cakes.filter(
    cake => cake.category === currentCategory.toLowerCase()
  );

  return (
    <MenuItemsBoxStyle>
      {filteredCakes.map((cake, index) => (
        <MenuItem
          key={index}
          cake={cake.name}
          price={cake.price}
          description={cake.description}
        />
      ))}
    </MenuItemsBoxStyle>
  );
}

export default MenuItemList;
