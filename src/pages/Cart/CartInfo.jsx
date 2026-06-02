import styles from "./CartInfo.module.css";
import {
  getTotalItemsinCart,
  handleItemDecerement,
  handleItemIncerement,
  handleDeleteItems,
} from "./getCartInfo";
import { X } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function CartInfo({ cart, setCart, onClose }) {
  return (
    <div className={styles.mainInfoWrapper}>
      <section className={styles.cartHeader}>
        <h2>Your Cart -{getTotalItemsinCart(cart)}</h2>
        <X onClick={onClose} className={styles.closeBtn} />
      </section>
      {cart.length == 0 && (
        <div className={styles.noCartDiv}>Nothing in the cart Yet</div>
      )}

      <section className={styles.allCartItems}>
        {cart.map((product) => {
          return (
            <article key={product.id} className={styles.cartItem}>
              <div className={styles.imagePriceContainer}>
                <img src={product.images[0]} alt={product.id} />${product.price}
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>
                  {product.title}{" "}
                  <Trash2
                    className={styles.closeBtn}
                    onClick={() => handleDeleteItems(setCart, product.id, cart)}
                  />
                </div>
                <div className={styles.cartCountManipulate}>
                  <button
                    onClick={() =>
                      handleItemIncerement(setCart, product.id, cart)
                    }
                  >
                    +
                  </button>
                  {product.cartCount}
                  <button
                    onClick={() =>
                      handleItemDecerement(setCart, product.id, cart)
                    }
                  >
                    -
                  </button>
                </div>
                <div className={styles.countPriceInfo}>
                  <p>X{product.cartCount}</p>
                  <p>${(product.price * product.cartCount).toFixed(2)}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <section className={styles.checkoutContainer}>
        <p>
          Checkout Total: <span>${getCheckOutPrice(cart).toFixed(2)}</span>
        </p>
      </section>
    </div>
  );
}

const getCheckOutPrice = (cart) => {
  return cart.reduce((count, product) => {
    count += product.cartCount * product.price;
    return count;
  }, 0);
};

//make delete btn funciton
