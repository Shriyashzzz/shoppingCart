import { Outlet, useOutletContext } from "react-router";
export default function Shop() {
  const { cart, setCart } = useOutletContext();

  return <Outlet context={{ cart, setCart }} />;
}
