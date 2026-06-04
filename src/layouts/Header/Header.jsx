import { useTheme } from "../../theme/ThemeContext";
import clsx from "clsx";
import { Store } from "lucide-react";
import styles from "./Header.module.css";
import { Link, NavLink, useOutletContext } from "react-router";
import { ShoppingCart } from "lucide-react";
import { getTotalItemsinCart } from "../../pages/Cart/getCartInfo";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";
export default function Header({ cart, isCartOpen, setIsCartOpen }) {
  const { dark, toggle } = useTheme();
  return (
    <>
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
          <ThemeBtn toggle={toggle} dark={dark} />
        </div>
      </header>
      <nav className={clsx(styles.navBar)}>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="shop"> Shop </NavLink>
          </li>
          <li>
            <div
              className={styles.cartContainer}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <div>
                <ShoppingCart height={24} width={24} />
              </div>
              <span className={styles.cartCount}>
                {getTotalItemsinCart(cart) > 10
                  ? ">10"
                  : getTotalItemsinCart(cart)}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
