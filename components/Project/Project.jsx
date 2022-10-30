import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.projects}>
      <img
        className={styles.projectsimg}
        src="../assets/main3.jpeg#"
        alt="#"
      ></img>
      <section className={styles.textsection}>
        <h3 className={styles.subtitleh3}>{props.projecttitle}</h3>
        <div className={styles.projectscontainer1}>
          <p className={styles.projectslink}>{props.projecttechstack}</p>
          <div className={styles.projectscontainer2}>
            <a href="#">
              <i class="fa-brands fa-square-github  fa-lg fa-fw"></i>
            </a>
            <p className={styles.projectslink}>GitHub</p>
          </div>
        </div>
        <p className={styles.projectsp}>
          {props.projectdiscription}
        </p>
      </section>
    </div>
  );
};
export default Project;
