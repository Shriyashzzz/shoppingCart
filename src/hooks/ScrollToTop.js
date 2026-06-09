import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTopProduct = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 70, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
