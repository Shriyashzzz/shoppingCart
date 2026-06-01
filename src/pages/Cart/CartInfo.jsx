import styles from "./CartInfo.module.css";
import { getTotalItemsinCart } from "./getCartInfo";
import { X } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function CartInfo({ cart, setCart, onClose }) {
  console.log(cart);

  const handleDeleteItems = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleIncrement = (productId) => {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? { ...product, cartCount: product.cartCount + 1 }
          : product,
      ),
    );
  };
  return (
    <div className={styles.mainInfoWrapper}>
      <section className={styles.cartHeader}>
        <h2>Your Cart -{getTotalItemsinCart(cart)}</h2>
        <X onClick={onClose} className={styles.closeBtn} />
      </section>
      <section className={styles.allCartItems}>
        {cart.map((product) => {
          return (
            <article key={product.id} className={styles.cartItem}>
              <img src={product.images[0]} alt={product.id} />
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>
                  {product.title}{" "}
                  <Trash2
                    className={styles.closeBtn}
                    onClick={() => handleDeleteItems(product.id)}
                  />
                </div>
                <div className={styles.cartCountManipulate}>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                  {product.cartCount}
                  <button>-</button>
                </div>
                <div className={styles.countPriceInfo}>
                  <p>X{product.cartCount}</p>
                  <p>${product.price * product.cartCount}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

//make delete btn funciton
