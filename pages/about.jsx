import React from "react";
import styles from "../styles/about.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Aboutme from "../components/Aboutme/Aboutme.jsx";
import Techstack from "../components/Techstack/Techstack.jsx";

export default function About() {
  return (
    <div className={styles.maincontainer}>
      <Layout />
      <div className={styles.subcontainer}>
        <Navbar />
        <main className={styles.main}>
          <Aboutme />
          <Techstack />
        </main>
      </div>
    </div>
  );
}
