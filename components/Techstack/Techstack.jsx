import React from "react";
import Image from "next/image";
import styles from "./Techstack.module.css";

const Teckstack = () => {
  return (
    <section className={styles.techstack}>
      <h2 className={styles.titleh2}>Tech Stack</h2>
      <div className={styles.techstackparent}>
        <img
          className={styles.techstackimg}
          src="../assets/html.png"
          alt="#"
        ></img>
        <img
          className={styles.techstackimg}
          src="../assets/css.png"
          alt="#"
        ></img>
        <img
          className={styles.techstackimg}
          src="../assets/javascript.png"
          alt="#"
        ></img>
        <img
          className={styles.techstackimg}
          src="../assets/react.png"
          alt="#"
        ></img>
        <img
          className={styles.techstackimg}
          src="../assets/nextjs.png"
          alt="#"
        ></img>
      </div>
    </section>
  );
};
export default Teckstack;
