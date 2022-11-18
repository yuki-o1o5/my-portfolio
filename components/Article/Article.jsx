import React, { useInsertionEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <div className={styles.article}>
      <a href={props.url} target="_blank" rel="noopener">
        <h3>{props.articletitle}</h3>
        <p className={styles.articledate}>{props.date}</p>
      </a>
    </div>
  );
};
export default Article;
