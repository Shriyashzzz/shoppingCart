import { useContext } from "react";
import styles from "./CartOverlay.module.css";
import clsx from "clsx";
import CartInfo from "./CartInfo";
export default function CartOverlay({
  isCartOpen,
  setIsCartOpen,
  cart,
  setCart,
}) {
  return (
    <>
      {isCartOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      <div
        className={clsx(
          styles.cartWrapper,
          isCartOpen ? styles.cartWrapperOpen : "",
        )}
      >
        <CartInfo
          cart={cart}
          setCart={setCart}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </>
  );
}
