import { Link, Outlet, useOutletContext } from "react-router";
import styles from "./Home.module.css";
import clsx from "clsx";
import { useState, useEffect, useContext } from "react";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";
import { ShoppingCart } from "lucide-react";
import Button from "../../components/Button/Button";
import { useTheme } from "../../theme/ThemeContext";
import { useFetch } from "../../hooks/useFetch";

export default function DefaultHome() {
  const url = `https://dummyjson.com/products/category/fragrances`;
  const { cart, setCart } = useOutletContext();
  const { data, loading, error } = useFetch(url);
  const { dark, toggle } = useTheme();

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <ErrorPage message={error} />;
  }
  const products = data?.products ?? [];

  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    let exists = cart.some((p) => p.id === productId);
    if (!exists) {
      setCart([...cart, { ...product, cartCount: 1 }]);
    } else {
      const newCart = cart.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, cartCount: cartProduct.cartCount + 1 }
          : cartProduct,
      );

      setCart(newCart);
    }
  };
  return (
    <section className={styles.homeContainer}>
      <div className={styles.h2Contianer}>
        <h2 className={styles.releaseH2}>Latest Releases</h2>
      </div>
      <div className={styles.newReleasegrid}>
        {products.slice(1, 11).map((product) => {
          return (
            <div key={product.id} className={styles.newItemWrap}>
              <article className={styles.CardContainer}>
                <img src={product.images[0]} alt={product.title} />
                <div className={styles.addCart}></div>
                <div className={styles.cardInfo}>
                  <p className={styles.rainbowPara}>{product.title}</p>
                  <p>{`$${product.price}`}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
