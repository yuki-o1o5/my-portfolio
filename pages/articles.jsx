import React from "react";
import styles from "../styles/articles.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";

export async function getStaticProps({ context }) {
  const res = await fetch("https://dev.to/yukio1o5/posts");
  const posts = await res.json();

  return {
    props: { posts },
    relidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dev.to/yukio1o5/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

const articles = ({ posts }) => {
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
          <ul>
            {posts.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};
export default articles;
