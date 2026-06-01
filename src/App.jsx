import Header from "./layouts/Header/Header";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";
import { useContext, useState } from "react";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
