import styles from "./ThemeBtn.module.css";

const ThemeBtn = ({ toggle, dark }) => {
  return (
    <label
      className={styles.toggle}
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        readOnly
        checked={dark}
      />
      <span className={`${styles.track} ${dark ? styles.trackDark : ""}`}>
        <span className={`${styles.thumb} ${dark ? styles.thumbDark : ""}`}>
          {dark ? "🌙" : "☀️"}
        </span>
      </span>
    </label>
  );
};

export default ThemeBtn;
