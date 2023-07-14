import React from "react";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <>
      <section className={styles.hero_container}>
        <div className={styles.hero_title_container}>
          <h1 className={styles.hero_title}>Yuki Kasugai</h1>
          <p className={styles.hero_sub_title}>
            Software Engineer based in Vancouver
          </p>
        </div>
        <img
          className={styles.hero_img}
          src="../assets/yukiKasugai_portfolio.jpg"
          alt="yukikasugai"
        ></img>
      </section>
      <p className={styles.intro_description}>
        Hi there! My name is Yuki. <br />
        I am a software engineer specializing in front-end.
        <br />
        Based on my past experiences, I have come to realize that the time spent
        reading code is often greater than the time spent writing it.
        <br />
        Therefore, I prioritize writing code that is highly readable and easy to
        trace through the evolution of its changes. <br />
        By doing so, I aim to enhance productivity for both myself and my
        collaborators.
      </p>

      <section className={styles.sns_icon_container}>
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
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-square-poll-horizontal  fa-2x fa-fw"></i>
        </a>
      </section>
    </>
  );
};

export default Herosection;
