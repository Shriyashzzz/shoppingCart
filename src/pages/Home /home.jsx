import { Link } from "react-router";
import styles from "./Home.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";

function Home() {
  const [url, setUrl] = useState(`https://dummyjson.com/products`);
  const [products, setProducts] = useState([]);
  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((response) => setProducts(response.products));
    };

    fetchProducts();
  }, [url]);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.h2Contianer}>
        <h2 className={styles.releaseH2}>Latest Releases</h2>
      </div>

      <div className={styles.newReleasegrid}>
        <article className={styles.CardContainer}>
          <div className={styles.gridCard}></div>
        </article>
        <article className={styles.CardContainer}>
          {" "}
          <div className={styles.gridCard}></div>
        </article>
        <article className={styles.CardContainer}>
          {" "}
          <div className={styles.gridCard}></div>
        </article>
        <article className={styles.CardContainer}>
          {" "}
          <div className={styles.gridCard}></div>
        </article>
      </div>
    </section>
  );
}

export default Home;
