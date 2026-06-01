import styles from "./Footer.module.css";
import githubIcon from "../../assets/svg/github.svg";
import clsx from "clsx";
export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <h3>RealStore</h3>
          <p>
            Quality products delivered to your door. Shop with confidence,
            always.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn} aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="X / Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l16 16M4 20L20 4" />
              </svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="#">New arrivals</a>
            </li>
            <li>
              <a href="#">Best sellers</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">All products</a>
            </li>
            <li>
              <a href="#">Gift cards</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Track your order</a>
            </li>
            <li>
              <a href="#">Returns & exchanges</a>
            </li>
            <li>
              <a href="#">Shipping info</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 RealStore.</p>
        <a
          className={styles.footerLink}
          href="https://github.com/Shriyashzzz/shoppingCart"
          target="_blank"
        >
          <img
            src={githubIcon}
            alt="github icon"
            className={clsx(styles.icons, styles.github)}
          />
          <p>Made by Shriyashzzz</p>
        </a>
      </div>
    </footer>
  );
}
