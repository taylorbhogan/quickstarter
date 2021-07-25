import { useState, useEffect } from "react";
import styles from './DropdownOpenButton.module.css'
import Dropdown from "..";
import SmallUserImage from "../../../User/SmallUserImage";

function DropdownOpenButton() {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <div>
      <button className={styles.accountButton} onClick={openMenu}>
        <SmallUserImage />
      </button>
      {showMenu && (
        <Dropdown />
      )}
    </div>
  )


};

export default DropdownOpenButton;
