import { createContext, useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { useTheme } from "./theme/ThemeContext";
import { ThemeContext } from "styled-components";
import styles from "./App.module.css";
import clsx from "clsx";
import { Store } from "lucide-react";
function App() {
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
            <Link to="/shop"> Shop </Link>
          </li>
          <li>
            <Link to="/cart"> Cart </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  );
}

export default App;
