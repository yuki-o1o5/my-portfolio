import React from "react";
import styles from "../styles/articles.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";
import axios from "axios";

export async function getStaticProps({ context }) {
  try {
      const res = await axios.get('https://dev.to/api/articles/me/published', {
        headers: {
         'api-key': process.env.DEV_TO_API_KEY
        }
      })

    return {
      props: { posts: res.data },
      revalidate: 10,
    };
  } catch (e) {
   console.log(e)
    return {
      notFound: true,
      revalidate: 10,
    };
  }
}

export async function getStaticPaths() {
    const res = await axios.get('https://dev.to/api/articles/me/published', {
        headers: {
            'api-key': process.env.DEV_TO_API_KEY
        }
    })

  const paths = res.data.map((aritcle) => ({
    params: { id: aritcle.id },
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
