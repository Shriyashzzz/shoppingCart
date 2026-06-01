import styles from "./CartInfo.module.css";
import { getTotalItemsinCart } from "./getCartInfo";
import { X } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function CartInfo({ cart, setCart, onClose }) {
  const handleDeleteItems = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleItemDecerement = (productId) => {
    const newArr = [];

    for (const product of cart) {
      if (product.id === productId) {
        if (product.cartCount > 1) {
          newArr.push({ ...product, cartCount: product.cartCount - 1 });
        }
      } else {
        newArr.push({ ...product });
      }
    }

    setCart(newArr);
  };

  const handleItemIncerement = (productId) => {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              cartCount: product.cartCount + 1,
            }
          : product,
      ),
    );
  };
  return (
    <>
      <div className={styles.mainInfoWrapper}>
        <section className={styles.cartHeader}>
          <h2>Your Cart -{getTotalItemsinCart(cart)}</h2>
          <X onClick={onClose} className={styles.closeBtn} />
        </section>
        <section className={styles.allCartItems}>
          {cart.map((product) => {
            return (
              <article key={product.id} className={styles.cartItem}>
                <div className={styles.imagePriceContainer}>
                  <img src={product.images[0]} alt={product.id} />$
                  {product.price}
                </div>

                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>
                    {product.title}{" "}
                    <Trash2
                      className={styles.closeBtn}
                      onClick={() => handleDeleteItems(product.id)}
                    />
                  </div>
                  <div className={styles.cartCountManipulate}>
                    <button onClick={() => handleItemIncerement(product.id)}>
                      +
                    </button>
                    {product.cartCount}
                    <button onClick={() => handleItemDecerement(product.id)}>
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
      </div>
      <section className={styles.checkoutContainer}>
        <span>Checkout Total: ${getCheckOutPrice(cart).toFixed(2)}</span>
      </section>
    </>
  );
}

const getCheckOutPrice = (cart) => {
  return cart.reduce((count, product) => {
    count += product.cartCount * product.price;
    return count;
  }, 0);
};

//make delete btn funciton
