import { Link, useSearchParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import styles from "./Shop.module.css";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";
function Shop() {
  const [url, setUrl] = useState(
    "https://dummyjson.com/products?limit=0&skip=10&select=title,price",
  );
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage message={error} />;
  }
  const products = data.products;
  console.log(products);
  return (
    <section className={styles.shopContainer}>
      <div className={styles.shopFilterBar}>
        <h4>Yes, we got everything!</h4>
        <select id="categories" name="categories">
          {categories.map((category) => (
            <option value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
const categories = [
  "See Everything",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
export default Shop;
