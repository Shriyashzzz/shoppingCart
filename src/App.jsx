import { createContext, useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { useTheme } from "./theme/ThemeContext";
import { ThemeContext } from "styled-components";

function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <p>Welcome to the app</p>
      <button onClick={toggle}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
      <nav>
        <ul>
          <li>
            <Link to="/home"> Home </Link>
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
    </>
  );
}

export default App;
