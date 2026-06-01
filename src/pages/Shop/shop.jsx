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
  const currentCategoryRef = useRef(null);
  const [currentSortBy, setCurrentSortBy] = useState("");

  useEffect(() => {
    if (data) setProducts(data.products);
  }, [data]);

  useEffect(() => {
    if (currentSortBy === "Sort By") {
      setProducts(data.products);
    } else {
      setProducts(
        getSortedProducts(products, currentSortBy === sortBy[1] ? true : false),
      );
    }
  }, [currentSortBy]);

  const getSortedProducts = (products, ascending) => {
    return products.toSorted((a, b) =>
      ascending ? a.price - b.price : b.price - a.price,
    );
  };

  const { cart, setCart } = useOutletContext();

  const handleCategoryChange = (event) => {
    currentCategoryRef.current = event.target.value;
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "all") {
      setProducts(data.products);
    } else {
      setProducts(data.products.filter((p) => p.category === value));
    }
  };

  const addToCart = (event, productId) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputBoxValue = parseInt(formData.get("cart-count"));
    event.target.reset(); //resets the form data
    const product = products.find((p) => p.id === productId);
    let exists = cart.some((p) => p.id === productId);
    if (!exists) {
      setCart([
        ...cart,
        { ...product, cartCount: inputBoxValue ? inputBoxValue : 1 },
      ]);
    } else {
      const newCart = cart.map((cartProduct) =>
        cartProduct.id === productId
          ? {
              ...cartProduct,
              cartCount:
                cartProduct.cartCount + (inputBoxValue ? inputBoxValue : 1),
            }
          : cartProduct,
      );
      setCart(newCart);
    }
  };

  const handleItemSort = (e) => {
    setCurrentSortBy(e.target.value);
  };
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  } else if (error) {
    return <ErrorPage message={error} />;
  } else {
    return (
      <section className={styles.shopContainer} key={selectedValue}>
        <div className={styles.shopFilterBar}>
          <h4>Yes, we got everything!</h4>

          <div className={styles.filterContainer}>
            <div className={styles.selectBtnWrapper}>
              <select
                value={selectedValue}
                id="categories"
                name="categories"
                className={styles.selectBtn}
                onChange={handleCategoryChange}
              >
                {categories.map((category, index) => (
                  <option value={category} key={index}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectBtnWrapper}>
              <select
                className={styles.selectBtn}
                value={currentSortBy}
                id="sort"
                name="sortSelect"
                onChange={handleItemSort}
              >
                {sortBy.map((sortoption, index) => (
                  <option value={sortoption} key={index}>
                    {sortoption}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <section className={styles.productGrid}>
          {products.map((product) => {
            return (
              <article key={product.id} className={styles.CardContainer}>
                <img src={product.images[0]} alt={product.title} />

                <form
                  action=""
                  className={styles.addCartForm}
                  onSubmit={(event) => addToCart(event, product.id)}
                >
                  <label className={styles.quantityLabel}>Quantity:</label>
                  <input
                    className={styles.productCountInputBox}
                    type="number"
                    min={1}
                    defaultValue={1}
                    name="cart-count"
                    required={true}
                  />
                  <ShopAddToCartBtn type="submit" />
                </form>

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
}

// const ref variables

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
const sortBy = ["Sort By", "Price ⬆️", "Price ⬇️"];
export default Shop;
