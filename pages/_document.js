import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <>
            <title>Yuki Kasugai</title>
            <meta
              name="description"
              content="Yuki Kasugai, Software engineer specializing in front-end development"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://use.fontawesome.com/releases/v6.2.0/css/all.css"
              rel="stylesheet"
            />
          </>
        </Head>
        <body>
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
