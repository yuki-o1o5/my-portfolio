import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
        <li className={styles.navli}>
          <div className={styles.navicon}>
            <a href="https://github.com/yuki-o1o5" target="_blank">
              <i class="fa-brands fa-square-github fa-2x fa-fw"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yuki-kasugai-136826247/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-2x fa-fw"></i>
            </a>
            <a href="mailto:sample@sample.com">
              <i class="fa-solid fa-square-envelope fa-2x fa-fw"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fa-solid fa-square-poll-horizontal  fa-2x fa-fw"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
