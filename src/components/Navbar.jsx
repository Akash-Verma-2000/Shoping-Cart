import React from "react";
import styles from "../styles/Total.module.css";
import styles2 from "../styles/ItemCard.module.css";

import { useValue } from "../context";

function Navbar() {
  const { item, total, handleReset, toggle } = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={handleReset} className={styles2.itemButton}>
        Reset
      </button>
      <button onClick={toggle} className={styles2.itemButton}>
        Cart
      </button>
    </div>
  );
}

export default Navbar;
