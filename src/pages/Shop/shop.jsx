import { Link, useOutletContext, useSearchParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import styles from "./Shop.module.css";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";
import Button from "../../components/Button/Button";
import ShopAddToCartBtn from "../../components/ShopAddCartBtn/ShopAddToCart";
function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("See Everything");
  const [url, setUrl] = useState(allUrl);
  let { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) setProducts(data.products);
  }, [data]);

  const { cart, setCart } = useOutletContext();
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  } else if (error) {
    return <ErrorPage message={error} />;
  }

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "all") {
      setProducts(data.products);
    } else {
      setProducts(data.products.filter((p) => p.category === value));
    }
  };

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
    <section className={styles.shopContainer} key={selectedValue}>
      <div className={styles.shopFilterBar}>
        <h4>Yes, we got everything!</h4>
        <select
          value={selectedValue}
          id="categories"
          name="categories"
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <section className={styles.productGrid}>
        {products.map((product) => {
          return (
            <article key={product.id} className={styles.CardContainer}>
              <img src={product.images[0]} alt={product.title} />
              <div className={styles.addCart}>
                <input
                  className={styles.productCountInputBox}
                  type="number"
                  min={1}
                />
                <ShopAddToCartBtn
                  onClick={addToCart}
                  productId={product.id}
                  count
                />
              </div>
              <div className={styles.cardInfo}>
                <p>{product.title}</p>
                <p>{`$${product.price}`}</p>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}

const baseUrl = "https://dummyjson.com/products";
const allUrl =
  "https://dummyjson.com/products?limit=0&select=title,price,images,category";
const categories = [
  "all",
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
