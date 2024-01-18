import React from "react";

import styles from "../styles/CartModel.module.css";

import { useValue } from "../context";

function CartModal() {
  const { toggle, cart, total, clear } = useValue();
  return (
    <div className={styles.cartModal}>
      <div onClick={toggle} className={styles.closeButton}>
        Close
      </div>
      <div onClick={clear} className={styles.clearButton}>
        Clear
      </div>

      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.name}</h1>
              <h3> X {item.qty}</h3>
              <h3> X {item.qty * item.price}</h3>
            </div>
          );
        })}
      </div>

      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
