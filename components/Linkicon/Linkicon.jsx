import React from "react";
import styles from "./Linkicon.module.css";

const Linkicon = () => {
  return (
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
  );
};

export default Linkicon;
