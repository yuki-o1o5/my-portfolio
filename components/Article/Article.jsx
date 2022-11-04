import React, { useInsertionEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <div className={styles.article}>
      <h3>{props.articletitle}</h3>
      <p>{props.date}</p>
    </div>
  );
};
export default Article;
