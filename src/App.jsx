import { useTheme } from "./theme/ThemeContext";
import styles from "./App.module.css";
import Header from "./layouts/Header";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
