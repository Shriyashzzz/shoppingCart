import { useOutletContext, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loader";
import styles from "./Product.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Product() {
  const { productid } = useParams();
  const { data, loading, error } = useFetch(`${product_base_url}${productid}`);
  const { cart, setCart } = useOutletContext();
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loading />
      </div>
    );
  } else if (error) {
    return <ErrorPage message={error} />;
  } else {
    console.log(data);
    return (
      <article className={styles.mainContainer}>
        <section className={styles.imgCartContainer}>
          <img src={data?.images?.[0]} alt="" />
        </section>
        <section className={styles.productInfo}>
          <h2>{data?.title}</h2>
          <Rating style={{ maxWidth: 150 }} value={data?.rating} readOnly />
          <h3>${data?.price}</h3>
          <p>ADD TO CART</p>
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
