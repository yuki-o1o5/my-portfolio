import React, { useInsertionEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <div className={styles.article}>
      <a href={props.url}>
        <h3>{props.articletitle}</h3>
        <p>{props.date}</p>
      </a>
    </div>
  );
};
export default Article;
