import React from "react";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <div className={styles.namecontainer}>
      <section>
        <h1 className={styles.nameh1}>Yuki Kasugai</h1>
        <p className={styles.namep1}>I'm a Front-End Developer in Vancouver!</p>
      </section>
      <img
        className={styles.nameimg}
        src="../assets/yukikasugai.jpg"
        alt="yukikasugai"
      ></img>
    </div>
  );
};

export default Herosection;
