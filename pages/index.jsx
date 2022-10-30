import React from "react";
import styles from "../styles/index.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Herosection from "../components/Herosection/Herosection";

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Layout />
      <div className={styles.subcontainer}>
        <Navbar />
        <main className={styles.main}>
          <Herosection />
          <p className={styles.pcommon}>
            Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            ornare suspendisse sed nlacus.
          </p>
        </main>
      </div>
    </div>
  );
}
