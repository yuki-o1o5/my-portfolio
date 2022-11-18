import React from "react";
import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <div className={styles.article}>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <h3>{props.articletitle}</h3>
        <p className={styles.articledate}>{props.date}</p>
      </a>
    </div>
  );
};
export default Article;
