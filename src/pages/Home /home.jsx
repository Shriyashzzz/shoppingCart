import { Link, useOutletContext } from "react-router";
import styles from "./Home.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";
import { ShoppingCart } from "lucide-react";
import Button from "../../components/Button/Button";

import { useFetch } from "../../hooks/useFetch";
function Home() {
  const url = `https://dummyjson.com/products/category/fragrances`;
  const { cart, setCart } = useOutletContext();
  const { data, loading, error } = useFetch(url);

  if (error) {
    return <ErrorPage message={error} />;
  } else if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  }
  const products = data.products;
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    let exists = cart.some((p) => p.id === productId);
    if (exists == false) {
      setCart([...cart, { ...product, cartCount: 1 }]);
    } else {
      const newCart = cart.map((cartPorduct) =>
        cartPorduct.id == productId
          ? { ...cartPorduct, cartCount: cartPorduct.cartCount + 1 }
          : cartPorduct,
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
            <article key={product.id} className={styles.CardContainer}>
              <img src={product.images[0]} alt={product.title} />
              <div className={styles.addCart}>
                <ShoppingCart height={80} width={80} />
                <Button
                  onClick={addToCart}
                  productId={product.id}
                  text="Add to cart"
                />
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.rainbowPara}>{product.title}</p>
                <p>{product.price} $</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
