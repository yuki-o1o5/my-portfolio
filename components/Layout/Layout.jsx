import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import TabBar from "../Tabbar/Tabbar";
import styles from "./Layout.module.css";

const Layout = ({ content, children }) => {
  return (
    <>
      <Head>
        <title>Yuki | Software engineer</title>
        <meta name="description" content={content} />
        <link rel="icon" href="icons8-snowflake-48.png" type="image/png" />
      </Head>

      <Navbar />
      <div className={styles.app_container}>
        <section className={styles.hero_section}>
          <Herosection />
        </section>
        <main className="main_container">
          <TabBar />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
