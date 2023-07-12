import React from "react";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <div>
      <div className={styles.namecontainer}>
        <section className={styles.herosection}>
          <h1 className={styles.nameh1}>Yuki Kasugai</h1>
          <p className={styles.namep1}>Software Engineer based in Vancouver</p>
        </section>
        <img
          className={styles.nameimg}
          src="../assets/yukiKasugai_portfolio.jpg"
          alt="yukikasugai"
        ></img>
      </div>
      <p className={styles.pcommon}>
        Hi there! My name is Yuki. I'm a software engineer specializing in
        front-end.
        <br />I believe that as a developer, I spend most of my time in a text
        editor reading code, not just writing it. Therefore, I focus on creating
        code with logical readability and trackable history, as these aspects
        can enhance productivity for both me and my collaborators.
      </p>
      <div className={styles.icon}>
        <a href="https://github.com/yuki-o1o5" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-square-github fa-2x fa-fw"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yuki-kasugai-136826247/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-2x fa-fw"></i>
        </a>
        <a href="mailto:sample@sample.com">
          <i className="fa-solid fa-square-envelope fa-2x fa-fw"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-square-poll-horizontal  fa-2x fa-fw"></i>
        </a>
      </div>
    </div>
  );
};

export default Herosection;
