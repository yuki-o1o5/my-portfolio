import React from "react";
import styles from "./Article.module.css";

const Article = (props) => {
  const modifiedDate = props.date.slice(0, 10);
  return (
    <div className={styles.article}>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <h3>{props.articletitle}</h3>
        <p className={styles.articledate}>{modifiedDate}</p>
      </a>
    </div>
  );
};
export default Article;
