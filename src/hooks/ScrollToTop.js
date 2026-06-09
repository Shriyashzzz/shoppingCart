import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 70, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
