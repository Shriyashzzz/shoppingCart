import React from "react";
import styled from "styled-components";
import styles from "./Button.module.css";

const Button = ({ text, onClick, productId }) => {
  return (
    <button className={styles.buttonWrap} onClick={() => onClick(productId)}>
      <div className={styles.boxButton}>
        <div className={styles.button}>
          <span>{text}</span>
        </div>
      </div>
    </button>
  );
};

export default Button;
