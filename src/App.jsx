import styles from "./App.module.css";
import Header from "./layouts/Header";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
