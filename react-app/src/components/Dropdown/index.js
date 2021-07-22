import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import styles from './Dropdown.module.css';

function Dropdown({ placeholder, items, setFunction }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState();
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    setSelection(item);
    setFunction(item.id);
    toggle();
  }

  function isItemSelected(item) {
    if (selection) {
      return selection.id === item.id;
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => toggle(!open)}
        style={open ? { border: '1px solid black' } : { border: 'none' }}
      >
        <div>
          <p>{!selection ? placeholder : selection.name}</p>
        </div>
        <div>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>

      {
        open && (
          <div className={styles.optionsContainer}>
            <ul className={styles.list}>
              {items.map(item => (
                <li key={item.id}>
                  <button type="button" onClick={() => handleOnClick(item)}>
                    <span>{item.name}</span>
                    <span className={styles.checkbox}>{isItemSelected(item) && (
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                    )}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div >
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
