import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Yuki | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.subcontainer}>
        <nav>
          <ul>
            <li className={styles.navli}>
              <a className={styles.nava} href="#">Home</a>
            </li>
            <li className={styles.navli}>
              <a className={styles.nava} href="#">About</a>
            </li>
            <li className={styles.navli}>
              <a className={styles.nava} href="#">Projects</a>
            </li>
            <li className={styles.navli}>
              <a className={styles.nava}  href="#">Articles</a>
            </li>
            <li className={styles.navli}>
              <a href="#">
                <img src="#" alt=""></img>
              </a>
              <a href="#">
                <img src="" alt=""></img>
              </a>
              <a href="#">
                <img  src="" alt=""></img>
              </a>
              <a href="#">
                <img src="" alt=""></img>
              </a>
            </li>
          </ul>
        </nav>

        <main className={styles.main}>
          <div className={styles.namecontainer}>
            <section>
              <h1 className={styles.nameh1}>Yuki Kasugai</h1>
              <p className={styles.namep1}>I'm a Front-End Developer in Vancouver!</p>
            </section>
            <img className={styles.nameimg} src="../assets/yukikasugai.jpg" alt="yukikasugai"></img>
          </div>
          <p className={styles.namepcommon}>
            Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            ornare suspendisse sed nlacus.
          </p>
        </main>
      </div>
    </div>
  );
}
