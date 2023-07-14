import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Yuki | Software engineer</title>
        <meta name="description" content={props.content} />
        <link rel="icon" href="icons8-snowflake-48.png" type="image/png" />
      </Head>
    </>
  );
};
export default Layout;
