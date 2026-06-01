import { useTheme } from "../../theme/ThemeContext";
import clsx from "clsx";
import { Store } from "lucide-react";
import styles from "./Header.module.css";
import { Link, useOutletContext } from "react-router";
import { ShoppingCart } from "lucide-react";
import { getTotalItemsinCart } from "../../pages/Cart/getCartInfo";
export default function Header({ cart, isCartOpen, setIsCartOpen }) {
  const { dark, toggle } = useTheme();
  return (
    <header>
      <div
        className={clsx(styles.header, {
          [styles.headerDark]: dark,
        })}
      >
        <div className={styles.headerLogo}>
          <Store
            color={dark ? "black" : "white"}
            strokeWidth={1}
            height={30}
            width={30}
          />
          <p>Real Store</p>
        </div>
        <button
          className={clsx(styles.themeButton, {
            [styles.backgroundDarkTheme]: dark,
          })}
          onClick={toggle}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
      <nav className={clsx(styles.navBar)}>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="shop"> Shop </Link>
          </li>
          <li>
            <button
              className={styles.cartContainer}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <div>
                <ShoppingCart height={24} width={24} />
              </div>
              <span className={styles.cartCount}>
                {getTotalItemsinCart(cart)}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
