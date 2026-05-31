import { Link } from "react-router";
import styles from "./Home.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";

function Home() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://dummyjson.com/products`);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      console.log(" i am fetching");
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        } else {
          setError("Error Fetching API Data");
        }
      } catch (e) {
        setError(e.message);
        throw Error(`Error Fetching API Data: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  if (error) {
    return <ErrorPage message={error} />;
  } else if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  } else {
    return (
      <section className={styles.homeContainer}>
        <div className={styles.h2Contianer}>
          <h2 className={styles.releaseH2}>Latest Releases</h2>
        </div>
        <div className={styles.newReleasegrid}>
          {products.slice(25, 29).map((product) => {
            return (
              <article key={product.id} className={styles.CardContainer}>
                <img src={product.images[0]} alt={product.title} />
                <div className={styles.cardInfo}>
                  <p>{product.title}</p>
                  <p>{product.price} $</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Home;
