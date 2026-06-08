import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loader";
export default function Product() {
  const { productid } = useParams();
  const { data, loading, error } = useFetch(`${prroduct_base_url}${productid}`);
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }
  console.log(data);
  return <div></div>;
}

const prroduct_base_url = "https://dummyjson.com/products/";
