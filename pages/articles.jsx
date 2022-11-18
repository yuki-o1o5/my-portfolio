import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Article from "../components//Article/Article.jsx";
import axios from "axios";

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
          <div className={"scroll"}>
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
          </div>
        </main>
      </div>
    </div>
  );
}
