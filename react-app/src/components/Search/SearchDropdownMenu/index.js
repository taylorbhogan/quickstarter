import React from "react";

import styles from "./SearchDropdownMenu.module.css";

const SearchDropdownMenu = (props) => {
  const { categories, selectedCategoryId, setSelectedCategoryId } = props;

  return (
    <div className={styles.menu}>
      <div
        className={styles.itemContainer}
        onClick={() => setSelectedCategoryId("")}
      >
        All Categories
      </div>
      {categories.map((category) => (
        <div
          key={category.id}
          className={styles.itemContainer}
          onClick={() => setSelectedCategoryId(category.id)}
        >
          <div>{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchDropdownMenu;
