import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Welcome to the app</p>
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
