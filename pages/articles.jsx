import React from "react";
import styles from "../styles/articles.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";

const articles = () => {
  return (
    <div className={styles.maincontainer}>
      <Layout />
      <div className={styles.subcontainer}>
        <Navbar />

        <main className={styles.main}>
          <h2 className={styles.titleh2}>My Articles</h2>
          <Article articletitle={"What isthe"} date={"2022/0909"} />
          <Article articletitle={"What isthe"} date={"2022/0909"} />
          <Article articletitle={"What isthe"} date={"2022/0909"} />
        </main>
      </div>
    </div>
  );
};
export default articles;
