import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav_bar}>
        <div className={styles.icon_container}>
          <a
            href="https://github.com/yuki-o1o5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-github fa-2x fa-fw"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/yuki-kasugai-136826247/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2x fa-fw"></i>
          </a>

          <a
            href="/assets/yuki_kasugai_software_engineer_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-square-poll-horizontal  fa-2x fa-fw"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
