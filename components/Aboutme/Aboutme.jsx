import React from "react";
import styles from "./Aboutme.module.css";

const Aboutme = () => {
  return (
    <section className={styles.aboutme_container}>
      <h2 className={styles.aboutme_title}>About Me</h2>
      <p className={styles.aboutme_description}>
        A software engineer, skilled in JavaScript and React.js
        with API integration and database management. I contribute to team goals
        through clear and effective communication and am eager to continuously
        enhance my technical skills. My goal is to create impactful and
        large-scale software services that improve user experiences!
      </p>
    </section>
  );
};
export default Aboutme;
