import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <img className={styles.projectimg} src="../assets/main3.jpeg" alt="#" />
      <section className={styles.textsection}>
        <h3 className={"subtitleh3"}>{props.projecttitle}</h3>
        <div className={styles.techresoursecontainer}>
          <p className={styles.projectsresourse}>{props.projecttechstack}</p>
          <div className={styles.githublinkcontainer}>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-github  fa-lg fa-fw"></i>
            </a>
            <p className={styles.projectslink}>GitHub</p>
          </div>
        </div>
        <p className={styles.projectsp}>{props.projectdiscription}</p>
      </section>
    </div>
  );
};
export default Project;
