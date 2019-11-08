import React from "react";

import { CategoryBoxStyle, CategoryStyle } from "./styles/menuCategoriesStyles";

function MenuItems(props) {
  const { categories, currentCategory, changeCurrentCategoryHandler } = props;

  return (
    <CategoryBoxStyle>
      {categories.map((item, index) => (
        <CategoryStyle
          key={index}
          currentCategory={currentCategory}
          menuItem={item}
          onClick={() => changeCurrentCategoryHandler(item)}
        >
          {item}
        </CategoryStyle>
      ))}
    </CategoryBoxStyle>
  );
}

export default MenuItems;
