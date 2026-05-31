import React from "react";
import styled from "styled-components";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <div>
      <div className={styles.boxButton}>
        <div className={styles.button}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;
