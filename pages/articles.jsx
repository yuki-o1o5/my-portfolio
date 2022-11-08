import React from "react";
import styles from "../styles/articles.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";
import axios from "axios";

export async function getStaticProps({ paths }) {
  try {
    const res = await axios.get("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    });
    const post = res.data;

    return {
      props: { post },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
      revalidate: 10,
    };
  }
}

// export async function getStaticPaths() {
//   const res = await axios.get(`https://dev.to/api/articles/me/published`, {
//     headers: {
//       "api-key": process.env.DEV_TO_API_KEY,
//     },
//   });

//   const posts = res.data;
//   console.log(posts);

//   const paths = posts.map((post) => ({
//     params: {
//       id: post.id.toString(),
//     },
//   }));

//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }

// export async function getStaticPaths() {
//   const url = `https://dev.to/api/articles/me/published`;
//   const response = await fetch(url, );

//   console.log("responese", response);
//   const posts = await response;
//   console.log("hello ", posts);

//   const paths = "";

//   // const paths = posts.map((post) => ({
//   //   params: {
//   //     id: post.id.toString(),
//   //   },
//   // }));

//   return {
//     paths: [],
//     fallback: false,
//   };
// }

const articles = ({ post }) => {
  return (
    <div className={styles.maincontainer}>
      <Layout />
      <div className={styles.subcontainer}>
        <Navbar />

        <main className={styles.main}>
          <h2 className={styles.titleh2}>My Articles</h2>
          <Article articletitle={"What is the"} date={"2022/0909"} />
          <Article articletitle={"What is the"} date={"2022/0909"} />
          <Article articletitle={"What is the"} date={"2022/0909"} />

          <ul>
            <li>{post.title}</li>
          </ul>
        </main>
      </div>
    </div>
  );
};
export default articles;
