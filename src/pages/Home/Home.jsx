import { Outlet } from "react-router";
import { useOutletContext } from "react-router";
function Home() {
  const { cart, setCart } = useOutletContext();
  return <Outlet context={{ cart, setCart }} />;
}

export default Home;
