import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <a
      className={styles.projectLink}
      href={props.demoUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.project}>
        <img
          className={styles.projectimg}
          src="../assets/main3.jpeg"
          alt="project img"
        />
        <section className={styles.textsection}>
          <h3 className={styles.subtitleh3}>{props.projecttitle}</h3>
          <div className={styles.techresoursecontainer}>
            <p className={styles.projectsresourse}>{props.projecttechstack}</p>
            <div className={styles.githublinkcontainer}>
              <a href={props.githubUrl} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-github  fa-lg fa-fw"></i>
              </a>
            </div>
          </div>
          <p className={styles.projectsp}>{props.projectdiscription}</p>
        </section>
      </div>
    </a>
  );
};
export default Project;
