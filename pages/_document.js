import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Questrial&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v6.2.0/css/all.css"
            rel="stylesheet"
          />
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
