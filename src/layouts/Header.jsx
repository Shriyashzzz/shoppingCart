import { useTheme } from "../theme/ThemeContext";
import clsx from "clsx";
import { Store } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header() {
  const { dark, toggle } = useTheme();

  return (
    <header>
      <div
        className={clsx(styles.header, {
          [styles.headerDark]: dark,
        })}
      >
        <div className={styles.headerLogo}>
          <Store color={dark ? "white" : "black"} strokeWidth={2} />
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
            <Link to="cart"> Cart </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
