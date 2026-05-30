import { Link } from "react-router";
import styles from "./Error.module.css";

function ErrorPage() {
  return (
    <>
      <section className={styles.errorSection}>
        <h2>The page you are trying to search for does not exist</h2>
        <h1>404 Not Found</h1>

        <Link class={styles.goBackLink} to="/">
          Go back Home
        </Link>
      </section>
    </>
  );
}

export default ErrorPage;
