import { Fragment } from "react";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <>
      <header className={styles.banner}>
        <img src="./images/banner.png" alt="Banner" />
      </header>
      <h1>Teste</h1>
    </>
  );
};
