import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Article from "../components/ArticleCard/ArticleCard.jsx";
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

function ArticleContent(props) {
  return (
    <>
      <div className={"scroll"}>
        <>
          {props.posts.map((post, i) => (
            <Article
              key={`article-list-${i}`}
              url={post.url}
              articletitle={post.title}
              date={post.published_at}
            />
          ))}
        </>
      </div>
    </>
  );
}

export default function article({ posts }) {
  return (
    <Layout content="Yuki Kasugai, Software engineer. About her articles">
      <ArticleContent posts={posts} />
    </Layout>
  );
}
