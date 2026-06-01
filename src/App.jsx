import Header from "./layouts/Header/Header";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";
import { useContext, useState } from "react";
import "./App.css";
import CartOverlay from "./pages/Cart/CartOverlay";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
      <Footer />
      <CartOverlay
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default App;
