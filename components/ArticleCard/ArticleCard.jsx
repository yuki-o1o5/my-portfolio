import React from "react";
import styles from "./ArticleCard.module.css";

const Article = (props) => {
  const modifiedDate = props.date.slice(0, 10);
  return (
    <div className={styles.article_container}>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <h4>{props.articletitle}</h4>
        <p className={styles.article_date}>{modifiedDate}</p>
      </a>
    </div>
  );
};
export default Article;
