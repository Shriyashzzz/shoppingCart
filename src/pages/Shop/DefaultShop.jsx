import { Link, NavLink, useOutletContext, useSearchParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import styles from "./Shop.module.css";
import { Loading } from "../../components/Loader";
import ErrorPage from "../Error/Error";
import Button from "../../components/Button/Button";
import ShopAddToCartBtn from "../../components/ShopAddCartBtn/ShopAddToCart";
import fetchData from "../../api/fetchData";
import {
  handleItemDecerement,
  handleItemIncerement,
} from "../Cart/getCartInfo";
import { useMemo } from "react";

export default function DefaultShop() {
  const [fatalError, setFatalError] = useState(null);
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

  const addToCart = async (event, productId, cart, setCart, products) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputBoxValue = parseInt(formData.get("cart-count"));
    event.target.reset(); //resets the form data
    //variable used later to check
    // if the price of the product that user sees matches in the server.
    let realTimeProductPrice;

    try {
      realTimeProductPrice = await fetchData(
        `https://dummyjson.com/products/${productId}`,
      );
      realTimeProductPrice = realTimeProductPrice.price;
    } catch (e) {
      console.error(e);
      alert("Failed to fetch latest price, try again."); // notify the user
      setFatalError(e.message);
      return; // abort adding to cart if item does not exist
    }
    const product = products.find((p) => p.id === productId);
    let exists = cart.some((p) => p.id === productId);
    if (!exists) {
      setCart([
        ...cart,
        {
          ...product,
          cartCount: inputBoxValue ? inputBoxValue : 1,
          price:
            product.price === realTimeProductPrice
              ? product.price
              : realTimeProductPrice, // replaces the price of the product in the cart if it's been changed since user login
        },
      ]);
    } else {
      const newCart = cart.map((cartProduct) =>
        cartProduct.id === productId
          ? {
              ...cartProduct,
              cartCount:
                cartProduct.cartCount + (inputBoxValue ? inputBoxValue : 1),
              price:
                product.price === realTimeProductPrice
                  ? product.price
                  : realTimeProductPrice, //same thing replaces the price if it's been changed on the server side
            }
          : cartProduct,
      );
      setCart(newCart);
    }
  };
  const handleInputChnage = (event, direction) => {
    event.preventDefault();
    event.stopPropagation();

    // Find the input box inside the same form container as the button
    const form = event.currentTarget.closest("form");
    const input = form.querySelector('input[name="cart-count"]');

    if (input) {
      let currentValue = parseInt(input.value) || 1;
      if (direction === "up") {
        input.value = currentValue + 1;
      } else if (direction === "down" && currentValue > 1) {
        input.value = currentValue - 1;
      }
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
  } else if (error || fatalError) {
    return <ErrorPage message={fatalError ?? error} />;
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
                onChange={(e) => handleCategoryChange(e)}
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
              <div className={styles.CardContainer}>
                <NavLink key={product.id} to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    loading="lazy"
                  />
                </NavLink>
                <form
                  action=""
                  className={styles.addCartForm}
                  onSubmit={(event) =>
                    addToCart(event, product.id, cart, setCart, products)
                  }
                >
                  {" "}
                  <label className={styles.quantityLabel}>Quantity:</label>
                  <div className={styles.cartCountManipulate}>
                    <button
                      className={styles.incrementDecrebtn}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault(); // Stops form submissions
                        e.stopPropagation(); // Stops double-trigger bubbling
                        handleInputChnage(e, "down");
                      }}
                    >
                      -
                    </button>
                    <input
                      className={styles.productCountInputBox}
                      type="number"
                      min={1}
                      name="cart-count"
                      defaultValue={1}
                      required={true}
                    />
                    {product.cartCount}
                    <button
                      className={styles.incrementDecrebtn}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleInputChnage(e, "up");
                      }}
                    >
                      +
                    </button>
                  </div>
                  <ShopAddToCartBtn type="submit" />
                </form>

                <div className={styles.cardInfo}>
                  <p>{product.title}</p>
                  <p>{`$${product.price}`}</p>
                </div>
              </div>
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
