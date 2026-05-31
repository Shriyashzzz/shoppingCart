import styles from "./App.module.css";
import Header from "./layouts/Header";
import { Outlet } from "react-router";
import { useContext, useState } from "react";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
}

export default App;
