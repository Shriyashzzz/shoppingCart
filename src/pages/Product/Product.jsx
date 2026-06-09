import { useOutletContext, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loader";
import styles from "./Product.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ShopAddToCartBtn from "../../components/ShopAddCartBtn/ShopAddToCart";
import ScrollToTop from "../../hooks/ScrollToTop";
export default function Product() {
  ScrollToTop();
  const { productid } = useParams();
  const { data, loading, error } = useFetch(`${product_base_url}${productid}`);
  const { cart, setCart } = useOutletContext();

  const handleInputChange = (event, direction) => {
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
      <article className={styles.mainContainer}>
        <section className={styles.imgCartContainer}>
          <img src={data?.images?.[0]} alt="" />
        </section>
        <section className={styles.productInfo}>
          <h2>{data?.title}</h2>
          <Rating style={{ maxWidth: 150 }} value={data?.rating} readOnly />
          <h3>${data?.price}</h3>
          <form
            action=""
            className={styles.addCartForm}
            onSubmit={(event) =>
              addToCart(event, data?.id, cart, setCart, data)
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
                  handleInputChange(e, "down");
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
              <button
                className={styles.incrementDecrebtn}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleInputChange(e, "up");
                }}
              >
                +
              </button>
            </div>
            <ShopAddToCartBtn type="submit" />
          </form>
          <div>
            <h4>Description</h4>
            <p>{data?.description}</p>
          </div>
        </section>
      </article>
    );
  }
}

const product_base_url = "https://dummyjson.com/products/";
const addToCart = async (event, productId, cart, setCart, data) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const inputBoxValue = parseInt(formData.get("cart-count"));
  event.target.reset(); //resets the form data
  let exists = cart.some((p) => p.id === productId);
  if (!exists) {
    setCart((cart) => [
      ...cart,
      {
        ...data,
        cartCount: inputBoxValue ? inputBoxValue : 1,
        price: data?.price,
      },
    ]);
  } else {
    const newCart = cart.map((cartProduct) =>
      cartProduct.id === productId
        ? {
            ...cartProduct,
            cartCount:
              cartProduct.cartCount + (inputBoxValue ? inputBoxValue : 1),
            price: data?.price,
          }
        : cartProduct,
    );
    setCart(newCart);
  }
};
