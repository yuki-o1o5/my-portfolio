import React from "react";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_container}>
          <div className={styles.hero_title_container}>
            <h1 className={styles.hero_title}>Yuki Kasugai</h1>
            <h2 className={styles.hero_sub_title}>
              Software Engineer based in Vancouver
            </h2>
          </div>
          <img
            className={styles.hero_img}
            src="../assets/yukiKasugai_portfolio.jpg"
            alt="yukikasugai"
          ></img>
        </div>
        <p className={styles.intro_description}>
          Hi there! My name is Yuki.
          <br />
          I am a software engineer specializing in front-end development.
          <br />
          In my experience, reading code takes more time than writing it, so I
          focus on creating clear, easily traceable code to improve productivity
          for my team and me.
        </p>
      </div>
    </>
  );
};

export default Herosection;
