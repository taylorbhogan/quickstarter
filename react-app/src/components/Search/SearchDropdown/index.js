import React, { useState, useEffect } from "react";
import SearchDropdownMenu from "../SearchDropdownMenu";

import styles from "./SearchDropdown.module.css";

const SearchDropdown = ({
  categories,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${showMenu && styles.addBorder}`}
        onClick={openMenu}
      >
        <span className={styles.text}>
          {!selectedCategoryId
            ? "All Categories"
            : categories[selectedCategoryId - 1].name}
        </span>
        <span className={styles.icon}>
          <i className="fas fa-chevron-down" />
        </span>
      </button>
      {showMenu && (
        <SearchDropdownMenu
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
      )}
    </div>
  );
};

export default SearchDropdown;
