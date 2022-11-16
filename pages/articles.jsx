import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";
import axios from "axios";
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from "next/dist/shared/lib/constants";

export async function getStaticProps() {
  try {
    const res = await axios.get("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    });
    const posts = res.data;

    return {
      props: { posts },
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

//   const paths = posts.map((post) => ({
//     params: {
//       id: post,
//     },
//   }));

//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }

// export async function getStaticPaths() {
//   const url = `https://dev.to/api/articles/me/published`;
//   const response = await fetch(url,header);
//   const posts = await response;
//   console.log("hello ", posts);

//   const paths = posts.map((post) => ({
//     params: {
//       id: post.id.toString(),
//     },
//   }));

//   return {
//     paths: [],
//     fallback: false,
//   };
// }

export default function article(props) {
  return (
    <div className={"maincontainer"}>
      <Layout />
      <div className={"subcontainer"}>
        <div className="nav">
          <Navbar />
        </div>
        <main className={"main"}>
          <h2 className={"titleh2"}>My Articles</h2>

          <div>
            {props.posts.map((post, i) => (
              <Article
                key={`article-list-${i}`}
                url={post.url}
                articletitle={post.title}
                date={post.published_at}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
