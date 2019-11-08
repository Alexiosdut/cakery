import React, { useState } from "react";
import MenuCategories from "./MenuCategories";
import MenuItemList from "./MenuItemList";

import { categories } from "../../../data/categories";

function MenuGrid() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function changeCurrentCategoryHandler(category) {
    setCurrentCategory(category);
  }

  return (
    <div>
      <MenuCategories
        categories={categories}
        currentCategory={currentCategory}
        changeCurrentCategoryHandler={changeCurrentCategoryHandler}
      />
      <MenuItemList currentCategory={currentCategory} />
    </div>
  );
}

export default MenuGrid;
