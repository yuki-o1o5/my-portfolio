import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Linkicon from "../Linkicon/Linkicon";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navul}>
        <li className={styles.navli}>
          <Link href="/">
            <a className={styles.nava}>Home</a>
          </Link>
        </li>
        <li className={styles.navli}>
          <Link href="/about">
            <a className={styles.nava}>About</a>
          </Link>
        </li>
        <li className={styles.navli}>
          <Link href="/projects">
            <a className={styles.nava}>Projects</a>
          </Link>
        </li>
        <li className={styles.navli}>
          <Link href="articles">
            <a className={styles.nava}>Articles</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
